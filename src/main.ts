import { html, render } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { BehaviorSubject, distinctUntilChanged, filter, fromEvent, map, merge, share, tap } from "rxjs";
import { getChatCompletionStream } from "./chat";
import { docsIndex } from "./data/docs-index";
import { getAtMentionedWord } from "./lib/at-mention";
import { $ } from "./lib/query";
import "./main.css";

const threadElement = $("#thread") as HTMLElement;
const promptTextarea = $(`[name="prompt"]`) as HTMLTextAreaElement;

const $thread = new BehaviorSubject<ThreadItem[]>([]);

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

interface ThreadItem {
  id: string;
  role: string;
  content: string;
}

function updateThread(updateFn: (prev: ThreadItem[]) => ThreadItem[]) {
  $thread.next(updateFn($thread.value));
}

function createMessage(role: string, content: string) {
  const id = crypto.randomUUID();
  updateThread((prev) => [...prev, { id, role, content }]);
  return id;
}

function appendMessage(id: string, delta: string) {
  updateThread((prev) => {
    const message = prev.find((item) => item.id === id);
    if (!message) return prev;
    return prev.map((item) => (item.id === id ? { ...item, content: item.content + delta } : item));
  });
}

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

$docSuggestions.subscribe((suggestions) => {
  render(suggestions, ($("#suggestions") as HTMLElement)!);
});
