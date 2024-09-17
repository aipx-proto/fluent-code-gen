import { html, render } from "lit-html";
import { distinctUntilChanged, filter, fromEvent, map, merge, share, tap } from "rxjs";
import { docsIndex } from "./data/docs-index";
import { getAtMentionedWord } from "./lib/at-mention";
import { $ } from "./lib/query";
import "./main.css";

const $promptInput = fromEvent($(`[name="prompt"]`)!, "input").pipe(map((e) => (e.target as HTMLTextAreaElement).value));
const $submitPrompt = fromEvent($(`[name="prompt"]`)!, "keydown").pipe(
  filter((e) => (e as KeyboardEvent).key === "Enter" && !(e as KeyboardEvent).shiftKey),
  tap((e) => e.preventDefault()),
  filter((e) => !!(e.target as HTMLTextAreaElement).value),
  tap((e) => ((e.target as HTMLTextAreaElement).value = ""))
);

const $latestPrompt = merge($promptInput, $submitPrompt.pipe(map((_) => ""))).pipe(distinctUntilChanged());

const $latestAtMention = $latestPrompt.pipe(
  map((_) => getAtMentionedWord($(`[name="prompt"]`)!)),
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
