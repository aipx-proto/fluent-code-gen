import { html, render } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { BehaviorSubject, distinctUntilChanged, filter, fromEvent, map, merge, share, tap } from "rxjs";
import { docsIndex } from "./data/docs-index";
import { getAtMentionedWord } from "./lib/at-mention";
import { $ } from "./lib/query";
import "./main.css";

const threadElement = $("#thread") as HTMLElement;
const promptTextarea = $(`[name="prompt"]`) as HTMLTextAreaElement;

const $thread = new BehaviorSubject<any[]>([]);

$thread.subscribe((thread) => {
  render(
    html`
      <ul>
        ${repeat(
          thread,
          (item) => item.id,
          (item) => html`<li>${item.role}: ${item.content}</li>`
        )}
      </ul>
    `,
    threadElement
  );
});

interface ThreadItem {
  id: string;
  role: string;
  content: string;
}

function updateThread(updateFn: (prev: ThreadItem[]) => ThreadItem[]) {
  $thread.next(updateFn($thread.value));
}

function renderNewUserMessage() {
  updateThread((prev) => [
    ...prev,
    {
      id: crypto.randomUUID(),
      role: "user",
      content: promptTextarea.value,
    },
  ]);
}

const $promptInput = fromEvent(promptTextarea, "input").pipe(map((e) => (e.target as HTMLTextAreaElement).value));
const $submitPrompt = fromEvent(promptTextarea, "keydown").pipe(
  filter((e) => (e as KeyboardEvent).key === "Enter" && !(e as KeyboardEvent).shiftKey),
  tap((e) => e.preventDefault()),
  filter((e) => !!(e.target as HTMLTextAreaElement).value),
  tap((e) => {
    renderNewUserMessage();
    (e.target as HTMLTextAreaElement).value = "";
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

$docSuggestions.subscribe((suggestions) => {
  render(suggestions, ($("#suggestions") as HTMLElement)!);
});
