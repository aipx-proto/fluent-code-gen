import { html, render } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { distinctUntilChanged, filter, fromEvent, map, merge, share, switchMap, tap } from "rxjs";
import { getChatCompletionStream } from "./lib/chat";
import { $ } from "./lib/query";
import { getAtMentionedWord, getDocs, getSuggestionStream, matchKeywordToDocs } from "./lib/suggestion";
import { $thread, appendMessage, createMessage } from "./lib/thread";
import "./main.css";

/**
 * DOM queries
 */
const threadElement = $("#thread") as HTMLElement;
const promptTextarea = $(`[name="prompt"]`) as HTMLTextAreaElement;
const suggestionsElement = $("#suggestions") as HTMLElement;

/**
 * Handle inputs
 */

const $promptInput = fromEvent(promptTextarea, "input").pipe(map((e) => (e.target as HTMLTextAreaElement).value));
const $submitPrompt = fromEvent(promptTextarea, "keydown").pipe(
  filter((e) => (e as KeyboardEvent).key === "Enter" && !(e as KeyboardEvent).shiftKey),
  tap((e) => e.preventDefault()),
  filter((e) => !!(e.target as HTMLTextAreaElement).value),
  map((e) => {
    const prompt = (e.target as HTMLTextAreaElement).value;
    createMessage("user", prompt);
    (e.target as HTMLTextAreaElement).value = "";
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
      const systemPrompt = `
Wirte a single jsx react program to meet user's goal. You can only rely on the examples in following documentation. When there is no example, do not extrapolate.

"""
${docs.join("\n\n---\n\n")}
"""

Now respond in this format:
\`\`\`jsx
import React, { ... } from 'react'
import ReactDOM from 'react-dom/client'
import { FluentProvider, webLightTheme, ... } from '@fluentui/react-components'

function App() {
  /** Your code here */
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
      <App />
    </FluentProvider>
  </React.StrictMode>)
\`\`\`
      `.trim();
      const $chunks = await getChatCompletionStream([
        { role: "system", content: systemPrompt },
        ...$thread.value.map((item) => ({ role: item.role, content: item.content })),
      ]);
      return { $chunks, responseId };
    }),
    switchMap(({ $chunks, responseId }) => $chunks.pipe(map((chunk) => ({ responseId, chunk })))),
    tap((item) => appendMessage(item.responseId, item.chunk))
  )
  .subscribe();

const $latestPrompt = merge($promptInput, $submitPrompt.pipe(map((_) => ""))).pipe(distinctUntilChanged());
const $keyword = $latestPrompt.pipe(map((_) => getAtMentionedWord(promptTextarea)));
const $suggestions = getSuggestionStream($keyword, matchKeywordToDocs);

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
