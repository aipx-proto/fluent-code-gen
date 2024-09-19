import { html, render } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { concatMap, distinctUntilChanged, endWith, filter, fromEvent, map, merge, mergeWith, share, switchMap, tap } from "rxjs";
import { blobToDataUrl } from "./lib/blob";
import { ChatMessagePart, getChatCompletionStream } from "./lib/chat";
import { $ctrlSpaceKeydownRaw, $spaceKeyupRaw } from "./lib/keyboard";
import { getCodeGenSystemPrompt } from "./lib/prompt";
import { $ } from "./lib/query";
import { generateScriptContent, getReactVMCode } from "./lib/react-vm";
import { augmentTranscript, getAtMentionedWord, getDocs, getSuggestionStream, matchKeywordToDocs } from "./lib/suggestion";
import { $draft, $thread, appendMessage, createMessage, updateDraft } from "./lib/thread";
import { $mediaRecorder, getTranscriber } from "./lib/transcribe";
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

/**
 * Handle inputs
 */

// event delegation
fromEvent(appRoot, "click")
  .pipe(
    tap((e) => {
      const trigger = (e.target as HTMLElement)?.closest("[data-action]") as HTMLElement;
      const action = trigger?.getAttribute("data-action");
      if (action) {
        handlePlayerTabSwitch(action);
        handleRemoveAttachment(action, trigger);
        handleClearThread(action);
        handleUseMicrophone(action);
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

const $promptInput = fromEvent(promptTextarea, "input").pipe(
  map((e) => (e.target as HTMLTextAreaElement).value),
  tap((content) => updateDraft((prev) => ({ ...prev, content })))
);
const $submitTextPrompt = fromEvent(promptTextarea, "keydown").pipe(
  filter((e) => (e as KeyboardEvent).key === "Enter" && !(e as KeyboardEvent).shiftKey),
  tap((e) => e.preventDefault()),
  concatMap(async (e) => {
    const prompt = (e.target as HTMLTextAreaElement).value;
    const attachments = $draft.value.attachments;
    const parts: ChatMessagePart[] = [];
    (e.target as HTMLTextAreaElement).value = "";
    const docMentions = prompt.match(/@(\w+)/g) || [];

    if (prompt.trim()) parts.push({ type: "text", text: prompt });
    if (attachments.length) parts.push(...attachments.map((attachment) => ({ type: "image_url" as const, image_url: attachment })));

    return { docMentions, parts };
  }),
  filter((submission) => submission.parts.length > 0),
  map((submission) => {
    createMessage("user", submission.parts);
    updateDraft((_) => ({ content: "", attachments: [] }));
    return submission;
  }),
  share()
);

const $latestPrompt = merge($promptInput, $submitTextPrompt.pipe(map((_) => ""))).pipe(distinctUntilChanged());
const $keyword = $latestPrompt.pipe(map((_) => getAtMentionedWord(promptTextarea)));
const $suggestions = getSuggestionStream($keyword, matchKeywordToDocs);

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

const $submitVoicePrompt = $transcriptions.pipe(
  concatMap((t) => augmentTranscript(t.combinedPhrases[0].text)),
  filter((submission) => submission.parts.length > 0),
  map((submission) => {
    createMessage("user", submission.parts);
    return submission;
  }),
  share()
);

$submitTextPrompt
  .pipe(
    mergeWith($submitVoicePrompt),
    switchMap(async (submission) => {
      const responseId = createMessage("assistant", "");

      const docMentions = submission.docMentions;
      const docs = await getDocs(docMentions.map((mention) => mention.slice(1)));
      console.log(`Docs in use`, docs);
      const systemPrompt = getCodeGenSystemPrompt({ docs });
      const $chunks = await getChatCompletionStream([
        { role: "system", content: systemPrompt },
        ...$thread.value.map((item) => ({ role: item.role, content: item.content })),
      ]);
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
      else renderArtifact(item.responseId);
    })
  )
  .subscribe();

function renderArtifact(responseId: string) {
  // ```jsx
  // ...
  // ```
  const markdownCodePattern = /```jsx\n([\s\S]*)\n```/;

  const jsxCode = ($thread.value.find((item) => item.id === responseId)?.content as string).match(markdownCodePattern)?.at(1) ?? "";
  if (jsxCode) {
    const fullScript = generateScriptContent(jsxCode);
    previewIFrame.srcdoc = getReactVMCode({ implementation: fullScript });
    const codeElement = sourceElement.querySelector("code");
    codeElement?.setAttribute("data-lang", "jsx");
    codeElement!.textContent = fullScript;
  }
}

/**
 * Delegated action handlers
 */
function handlePlayerTabSwitch(action: string) {
  if (action !== "open-preview" && action !== "open-source") return;
  switch (action) {
    case "open-preview": {
      previewIFrame.dataset.activeTab = "true";
      sourceElement.dataset.activeTab = "false";
      break;
    }
    case "open-source": {
      previewIFrame.dataset.activeTab = "false";
      sourceElement.dataset.activeTab = "true";
      break;
    }
  }
}

function handleRemoveAttachment(action: string, trigger: HTMLElement) {
  if (action !== "remove-attachment") return;
  const attachmentUrl = trigger.querySelector("img")?.src;

  updateDraft((prev) => ({
    ...prev,
    attachments: prev.attachments.filter((attachment) => attachment.url !== attachmentUrl),
  }));
}

function handleClearThread(action: string) {
  if (action !== "clear-thread") return;
  $thread.next([]);
}

async function handleUseMicrophone(action: string) {
  if (action !== "use-microphone") return;
  const media = await navigator.mediaDevices.getUserMedia({ audio: true });
  $mediaRecorder.next(new MediaRecorder(media));
  (useMicrophoneButton.dataset as any).hidden = true;
  (holdToTalkButton.dataset as any).hidden = false;
}

/**
 * Render outputs
 */

$suggestions
  .pipe(
    map(
      (docs) => html`
        <div>${docs.length} results:</div>
        <ul>
          ${docs.map((doc) => html` <li>${doc.title}</li> `)}
        </ul>
      `
    )
  )
  .subscribe((suggestions) => render(suggestions, suggestionsElement));

$thread
  .pipe(
    map(
      (thread) =>
        html`
          <ul>
            ${repeat(
              thread,
              (item) => item.id,
              (item) =>
                html`<li>
                  <span class="role">${item.role}:</span>
                  ${typeof item.content === "string"
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
        `
    )
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
