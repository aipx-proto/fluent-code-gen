import { html, render } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { distinctUntilChanged, endWith, filter, fromEvent, map, merge, share, switchMap, tap } from "rxjs";
import { getChatCompletionStream } from "./lib/chat";
import { getCodeGenSystemPrompt } from "./lib/prompt";
import { $ } from "./lib/query";
import { generateScriptContent, getReactVMCode } from "./lib/react-vm";
import { getAtMentionedWord, getDocs, getSuggestionStream, matchKeywordToDocs } from "./lib/suggestion";
import { $draft, $thread, appendMessage, createMessage, updateDraft } from "./lib/thread";
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

/**
 * Handle inputs
 */

fromEvent(appRoot, "click")
  .pipe(
    tap((e) => {
      const trigger = e.target as HTMLElement;
      const action = trigger.closest("[data-action]")?.getAttribute("data-action");
      if (action) handleAction(action, trigger);
    })
  )
  .subscribe();

const $pastedFiles = fromEvent(promptTextarea, "paste")
  .pipe(
    map((e) => (e as ClipboardEvent).clipboardData?.files),
    filter((files) => !!files),
    tap((files) => updateDraft((prev) => ({ ...prev, attachments: [...prev.attachments, ...files] })))
  )
  .subscribe();

const $promptInput = fromEvent(promptTextarea, "input").pipe(
  map((e) => (e.target as HTMLTextAreaElement).value),
  tap((content) => updateDraft((prev) => ({ ...prev, content })))
);
const $submitPrompt = fromEvent(promptTextarea, "keydown").pipe(
  filter((e) => (e as KeyboardEvent).key === "Enter" && !(e as KeyboardEvent).shiftKey),
  tap((e) => e.preventDefault()),
  filter((e) => !!(e.target as HTMLTextAreaElement).value),
  map((e) => {
    const prompt = (e.target as HTMLTextAreaElement).value;
    createMessage("user", prompt);
    (e.target as HTMLTextAreaElement).value = "";
    updateDraft((_) => ({ content: "", attachments: [] }));
    return prompt;
  }),
  share()
);

const $response = $submitPrompt
  .pipe(
    switchMap(async (prompt) => {
      const responseId = createMessage("assistant", "");

      const docMentions = prompt.match(/@(\w+)/g) || [];
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

  const jsxCode =
    $thread.value
      .find((item) => item.id === responseId)
      ?.content.match(markdownCodePattern)
      ?.at(1) ?? "";
  if (jsxCode) {
    const fullScript = generateScriptContent(jsxCode);
    previewIFrame.srcdoc = getReactVMCode({ implementation: fullScript });
    const codeElement = sourceElement.querySelector("code");
    codeElement?.setAttribute("data-lang", "jsx");
    codeElement!.textContent = fullScript;
  }
}

const $latestPrompt = merge($promptInput, $submitPrompt.pipe(map((_) => ""))).pipe(distinctUntilChanged());
const $keyword = $latestPrompt.pipe(map((_) => getAtMentionedWord(promptTextarea)));
const $suggestions = getSuggestionStream($keyword, matchKeywordToDocs);

/**
 * Delegated action handlers
 */
function handleAction(action: string, trigger: HTMLElement) {
  console.log({ action, trigger });
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
                  <div data-wrap="pre-wrap">${item.content}</div>
                </li>`
            )}
          </ul>
        `
    )
  )
  .subscribe((thread) => render(thread, threadElement));

$draft.pipe(map((draft) => html` ${draft.attachments.map((file) => html`<button>${file.name}</button>`)} `)).subscribe((view) => render(view, attachments));
