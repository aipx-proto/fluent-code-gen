/// <reference lib="webworker" />
import { html, nothing, render } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { combineLatestWith, distinctUntilKeyChanged, endWith, filter, fromEvent, map, merge, mergeWith, switchMap, tap, withLatestFrom } from "rxjs";
import { createDebugPrompt } from "./handlers/handle-auto-debug";
import { handleClearThread } from "./handlers/handle-clear-thread";
import { handleExport } from "./handlers/handle-export";
import { handleOpenArtifact } from "./handlers/handle-open-artifact";
import { handlePlayerTabSwitch } from "./handlers/handle-player-tab-switch";
import { handleRebase } from "./handlers/handle-rebase";
import { handleRemoveAttachment } from "./handlers/handle-remove-attachment";
import { handleUseMicrophone } from "./handlers/handle-use-microphone";
import { $activeArtifact, $artifacts, $baseArtifact, symbolizeArtifact, updateArtifact } from "./lib/artifact";
import { blobToDataUrl } from "./lib/blob";
import { getChatCompletionStream } from "./lib/chat";
import { mountArtifactEditor } from "./lib/editor";
import { $ctrlSpaceKeydownRaw, $spaceKeyupRaw } from "./lib/keyboard";
import { getCodeGenSystemPrompt } from "./lib/prompt";
import { $ } from "./lib/query";
import { getReactVMHtml } from "./lib/react-vm";
import { augmentChat, getAtMentionedWord, getDocMentions, getDocs, getSuggestionStream, matchKeywordToDocs } from "./lib/suggestion";
import { $draft, $draftDistinctContent, $thread, appendMessage, createMessage, submitDraft, updateDraft, updateThread } from "./lib/thread";
import { getTranscriber } from "./lib/transcribe";
import "./main.css";

/**
 * DOM queries
 */
const appRoot = $("#app") as HTMLElement;
const threadElement = $("#thread") as HTMLElement;
const promptTextarea = $(`[name="prompt"]`) as HTMLTextAreaElement;
const suggestionsElement = $("#suggestions") as HTMLElement;
const previewIFrame = $("#preview") as HTMLIFrameElement;
const sourceElement = $("#source") as HTMLPreElement;
const attachments = $("#attachments") as HTMLElement;
const useMicrophoneButton = $(`[data-action="use-microphone"]`) as HTMLButtonElement;
const holdToTalkButton = $(`[data-action="hold-to-talk"]`) as HTMLButtonElement;
const artifactList = $("#artifacts") as HTMLElement;
const debugButton = $("#debug-button") as HTMLButtonElement;

/**
 * Handle inputs
 */

// source code editor
const { setSourceCode } = mountArtifactEditor({
  container: sourceElement,
  onChange: (value) =>
    updateArtifact((prev) => prev.map((artifact) => (artifact.isActive ? { ...artifact, minimumCode: value, id: crypto.randomUUID() } : artifact))),
});

// event delegation
fromEvent(appRoot, "click")
  .pipe(
    tap((e) => {
      const trigger = (e.target as HTMLElement)?.closest("[data-action]") as HTMLElement;
      const action = trigger?.getAttribute("data-action");
      if (action) {
        handlePlayerTabSwitch(action, previewIFrame, sourceElement);
        handleRemoveAttachment(action, trigger, updateDraft);
        handleClearThread(action, $thread);
        handleUseMicrophone(action, useMicrophoneButton, holdToTalkButton);
        handleOpenArtifact(action, trigger, updateArtifact);
        handleRebase(action, $thread, updateArtifact);
        handleExport(action, $artifacts);
      }
    })
  )
  .subscribe();

// pasting
fromEvent(promptTextarea, "paste")
  .pipe(
    map((e) => (e as ClipboardEvent).clipboardData?.files),
    filter((files) => !!files),
    switchMap((files) =>
      Promise.all(
        [...files].map(async (file) => {
          return {
            name: file.name,
            url: await blobToDataUrl(file),
          };
        })
      )
    ),
    map((attachments) => attachments.filter((attachment) => attachment.url.startsWith("data:image/"))),
    map((attachments) => attachments.filter((attachment) => !$draft.value.attachments.some((existing) => existing.url === attachment.url))),
    tap((attachments) => updateDraft((prev) => ({ ...prev, attachments: [...prev.attachments, ...attachments] })))
  )
  .subscribe();

// keyboard input -> draft
fromEvent(promptTextarea, "input")
  .pipe(
    map((e) => (e.target as HTMLTextAreaElement).value),
    tap((content) => updateDraft((prev) => ({ ...prev, content })))
  )
  .subscribe();

// draft -> suggestion
const $keyword = $draftDistinctContent.pipe(map((_) => getAtMentionedWord(promptTextarea)));
const $suggestions = getSuggestionStream($keyword, matchKeywordToDocs);

// keyboard + mic -> transcription
const { start, stop, $transcriptions } = getTranscriber();
fromEvent(holdToTalkButton, "mousedown")
  .pipe(
    mergeWith($ctrlSpaceKeydownRaw),
    tap(() => (holdToTalkButton.textContent = "Release Ctrl + Space to submit"))
  )
  .subscribe(start);
fromEvent(holdToTalkButton, "mouseup")
  .pipe(
    mergeWith($spaceKeyupRaw),
    tap(() => (holdToTalkButton.textContent = "Hold Ctrl + Space to talk"))
  )
  .subscribe(stop);

// text submission -> draft
const $submitText = fromEvent(promptTextarea, "keydown").pipe(
  filter((e) => (e as KeyboardEvent).key === "Enter" && !(e as KeyboardEvent).shiftKey),
  tap((e) => e.preventDefault())
);

// voice submission -> draft
const $submitVoice = $transcriptions.pipe(
  tap((transcript) => updateDraft((prev) => ({ ...prev, content: prev.content + " " + transcript.combinedPhrases[0].text })))
);

// debug submission -> draft
const $submitDebug = fromEvent(debugButton, "click").pipe(
  map((_e) => createDebugPrompt($artifacts)),
  filter((formattedError) => formattedError !== undefined),
  tap((formattedError) => updateDraft((prev) => ({ ...prev, content: formattedError })))
);

// draft -> docs -> chat completion -> thread
merge($submitText, $submitVoice, $submitDebug)
  .pipe(
    map((_) => submitDraft(promptTextarea)),
    filter((submission) => submission !== null),
    switchMap(async ({ id, parts }) => {
      const augmented = await augmentChat(parts);
      return { id, parts: augmented.parts };
    }),
    tap(({ id, parts }) => updateThread((prev) => prev.map((item) => (item.id === id ? { ...item, content: parts } : item)))),
    withLatestFrom($baseArtifact),
    switchMap(async ([_, baseArtifact]) => {
      const responseId = createMessage("assistant", "");
      const allDocMentions = $thread.value
        .flatMap((item) => (Array.isArray(item.content) ? item.content.filter((content) => content.type === "text").map((item) => item.text) : [item.content]))
        .flatMap(getDocMentions);

      const docs = await getDocs(allDocMentions);
      console.log(`Docs in use`, docs);
      const systemPrompt = getCodeGenSystemPrompt({ docs, baseSource: baseArtifact.minimumCode });
      const $chunks = await getChatCompletionStream(
        [{ role: "system", content: systemPrompt }, ...$thread.value.map((item) => ({ role: item.role, content: item.content }))],
        { temperature: 0 }
      );
      return { $chunks, responseId };
    }),
    switchMap(({ $chunks, responseId }) =>
      $chunks.pipe(
        map((chunk) => ({ responseId, chunk, end: false })),
        endWith({ responseId, chunk: "", end: true })
      )
    ),
    tap((item) => {
      if (!item.end) appendMessage(item.responseId, item.chunk);
      else {
        renderArtifact(item.responseId);
      }
    })
  )
  .subscribe();

let artifactVersion = 0;
function renderArtifact(responseId: string) {
  const markdownCodePattern = /```jsx\n([\s\S]*)\n```/;
  const jsxCode = ($thread.value.find((item) => item.id === responseId)?.content as string).match(markdownCodePattern)?.at(1) ?? "";
  if (jsxCode) {
    const minimumCode = jsxCode;
    const artifactId = crypto.randomUUID();
    const currentArtifactVersion = ++artifactVersion;

    updateArtifact((prev) => [
      ...prev.map((artifact) => ({ ...artifact, isActive: false })),
      {
        id: artifactId,
        name: `Revision ${currentArtifactVersion}`,
        minimumCode,
        isActive: true,
      },
    ]);

    updateThread((prev) =>
      prev.map((item) =>
        item.id === responseId
          ? { ...item, html: symbolizeArtifact({ content: item.content as string, id: artifactId, name: `Revision ${currentArtifactVersion}` }) }
          : item
      )
    );
  }
}

// global errors
const $globalErrors = fromEvent<MessageEvent>(window, "message").pipe(
  filter((event) => event.source === previewIFrame.contentWindow),
  filter((event) => event.data.type === "error"),
  map((event) => ({
    data: event.data,
    artifactId: ((event.source as Window)?.frameElement as HTMLIFrameElement)?.dataset.artifactId,
  })),
  tap(({ data, artifactId }) => {
    updateArtifact((prev) =>
      prev.map((artifact) =>
        artifact.id === artifactId
          ? {
              ...artifact,
              error: {
                message: data.message,
                error: data.error,
              },
            }
          : artifact
      )
    );
  })
);

$globalErrors.subscribe();

/**
 * Render outputs
 */

$suggestions
  .pipe(
    map((docs) =>
      docs.length
        ? html`
            <div>${docs.length} results:</div>
            <ul>
              ${docs.map((doc) => html` <li>${doc.title}</li> `)}
            </ul>
          `
        : nothing
    )
  )
  .subscribe((suggestions) => render(suggestions, suggestionsElement));

$thread
  .pipe(
    combineLatestWith($baseArtifact),
    map(([thread, baseArtifact]) => {
      return html`
        <span class="role">Base:</span>
        <button data-action="open-artifact" data-artifact=${baseArtifact?.id}>${baseArtifact?.name ?? "?"}</button>
        <ul>
          ${repeat(
            thread,
            (item) => item.id,
            (item) =>
              html`<li>
                <span class="role">${item.role}:</span>
                ${item.html
                  ? html`<div data-wrap="pre-wrap">${unsafeHTML(item.html)}</div> `
                  : typeof item.content === "string"
                  ? html` <div data-wrap="pre-wrap">${item.content}</div> `
                  : item.content
                      .filter((item) => item.type === "text")
                      .map((item) => item.text)
                      .join("")}
                ${Array.isArray(item.content)
                  ? html`
                      <div class="thumbnail-grid">
                        ${item.content
                          .filter((part) => part.type === "image_url")
                          .map((part) => html`<div class="thumbnail-grid__item"><img class="thumbnail" src=${part.image_url.url} alt="attachment" /></div>`)}
                      </div>
                    `
                  : ""}
              </li>`
          )}
        </ul>
      `;
    })
  )
  .subscribe((thread) => render(thread, threadElement));

$draft
  .pipe(
    map(
      (draft) =>
        html`
          ${draft.attachments.map(
            (file) => html`<button class="thumbnail-button thumbnail-grid__item" title=${file.name} data-action="remove-attachment">
              <img src=${file.url} alt="attachment" class="thumbnail" />
            </button>`
          )}
        `
    )
  )
  .subscribe((view) => render(view, attachments));

// render source code
$activeArtifact.pipe(tap((artifact) => setSourceCode(artifact.minimumCode))).subscribe();
// render preview
$activeArtifact
  .pipe(
    tap((artifact) => (previewIFrame.dataset.artifactId = artifact.id)),
    tap((artifact) => (debugButton.disabled = !artifact.error)),
    distinctUntilKeyChanged("id"),
    map((artifact) => getReactVMHtml({ implementation: artifact.minimumCode })),
    tap((reactVMCode) => (previewIFrame.srcdoc = reactVMCode))
  )
  .subscribe();

$artifacts
  .pipe(
    map(
      (artifacts) =>
        html`
          ${repeat(
            artifacts,
            (artifact) => artifact.id,
            (artifact) => html`<button data-action="open-artifact" data-artifact="${artifact.id}">${artifact.name}</button>`
          )}
        `
    )
  )
  .subscribe((artifacts) => render(artifacts, artifactList));
