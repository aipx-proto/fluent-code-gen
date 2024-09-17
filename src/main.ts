import { html, render } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { distinctUntilChanged, filter, fromEvent, map, merge, share, tap } from "rxjs";
import { docsIndex } from "./data/docs-index";
import { getAtMentionedWord } from "./lib/at-mention";
import { getChatCompletionStream } from "./lib/chat";
import { $ } from "./lib/query";
import { $thread, appendMessage, createMessage } from "./lib/thread";
import "./main.css";

/**
 * DOM queries
 */
const threadElement = $("#thread") as HTMLElement;
const promptTextarea = $(`[name="prompt"]`) as HTMLTextAreaElement;

/**
 * Handle inputs
 */

const $promptInput = fromEvent(promptTextarea, "input").pipe(map((e) => (e.target as HTMLTextAreaElement).value));
const $submitPrompt = fromEvent(promptTextarea, "keydown").pipe(
  filter((e) => (e as KeyboardEvent).key === "Enter" && !(e as KeyboardEvent).shiftKey),
  tap((e) => e.preventDefault()),
  filter((e) => !!(e.target as HTMLTextAreaElement).value),
  tap(async (e) => {
    createMessage("user", (e.target as HTMLTextAreaElement).value);
    (e.target as HTMLTextAreaElement).value = "";
    const responseId = createMessage("assistant", "");
    const $chunks = await getChatCompletionStream($thread.value.map((item) => ({ role: item.role, content: item.content })));
    $chunks.subscribe((chunk) => {
      appendMessage(responseId, chunk);
    });
  })
);

const $latestPrompt = merge($promptInput, $submitPrompt.pipe(map((_) => ""))).pipe(distinctUntilChanged());

const $latestAtMention = $latestPrompt.pipe(
  map((_) => getAtMentionedWord(promptTextarea)),
  distinctUntilChanged(),
  share()
);

const $emptyMention = $latestAtMention.pipe(
  filter((mention) => !mention),
  map((_) => [])
);
const $matchedMention = $latestAtMention.pipe(
  filter((mention) => !!mention),
  map((mention) => docsIndex.filter((doc) => doc.title.toLowerCase().includes(mention.toLowerCase()))),
  tap((docs) => console.log({ docs }))
);

const $docSuggestions = merge($emptyMention, $matchedMention).pipe(
  map(
    (docs) => html`
      <div>${docs.length} results:</div>
      <ul>
        ${docs.map((doc) => html` <li>${doc.title}</li> `)}
      </ul>
    `
  )
);

/**
 * Render outputs
 */

$docSuggestions.subscribe((suggestions) => {
  render(suggestions, ($("#suggestions") as HTMLElement)!);
});

$thread.subscribe((thread) => {
  render(
    html`
      <ul>
        ${repeat(
          thread,
          (item) => item.id,
          (item) => html`<li><span class="role">${item.role}:</span> ${item.content}</li>`
        )}
      </ul>
    `,
    threadElement
  );
});
