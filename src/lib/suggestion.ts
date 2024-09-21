import { distinctUntilChanged, filter, map, merge, Observable, share, switchMap, tap } from "rxjs";
import { docsIndex } from "../data/docs-index";
import { ChatMessagePart, getChatCompletion } from "./chat";

export interface DocumentSuggestion {
  filename: string;
  title: string;
}
export function getSuggestionStream<T>($keyword: Observable<string>, onMatch: (keyword: string) => Promise<T[]>): Observable<T[]> {
  const $latestAtMention = $keyword.pipe(distinctUntilChanged(), share());

  const $emptyMention = $latestAtMention.pipe(
    filter((mention) => !mention),
    map((_) => [])
  );
  const $matchedMention = $latestAtMention.pipe(
    filter((mention) => !!mention),
    switchMap((mention) => onMatch(mention)),
    tap((docs) => console.log({ suggested: docs }))
  );

  const $docSuggestions = merge($emptyMention, $matchedMention);
  return $docSuggestions;
}

export const matchKeywordToDocs = async (keyword: string) => docsIndex.filter((doc) => doc.title.toLowerCase().includes(keyword.toLowerCase()));
export function getAtMentionedWord(textarea: HTMLTextAreaElement) {
  const selectionStart = textarea.selectionStart;
  const textBeforeCursor = textarea.value.slice(0, selectionStart);
  /* last word that starts with @ */
  const mentionPrefixPattern = /@(\w*)$/;
  const mentionPrefixContent = textBeforeCursor.match(mentionPrefixPattern)?.at(1) ?? null;

  const textAfterCursor = textarea.value.slice(selectionStart);
  /* any text that ends with either space, or @, or end of string */
  const mentionSuffixPattern = /^(\w*)(?:\s|@|$)/;
  const mentionSuffixContent = textAfterCursor.match(mentionSuffixPattern)?.at(1) ?? "";

  const mention = mentionPrefixContent !== null ? mentionPrefixContent + mentionSuffixContent : "";

  return mention;
}

export async function getDocs(componentNames: string[]) {
  const uniqueLowercaseNames = Array.from(new Set(componentNames.map((name) => name.toLowerCase())));
  const docsDict = new Map(docsIndex.map((doc) => [doc.title.toLowerCase(), doc]));

  const docs = await Promise.all(
    uniqueLowercaseNames
      .map((title) => docsDict.get(title)!)
      .filter(Boolean)
      .map((filename) => fetch(`/docs/${filename.filename}`).then((res) => res.text()))
  );
  return docs;
}

// annotate transcript with @mention of docmented entities
export async function augmentTranscript(transcript: string) {
  const chatResponse = await getChatCompletion(
    [
      {
        role: "system",
        content: `Recognize known entities from the transcript surrounded by triple quotes. Replace them inline with @mentions.

Known entities:
"""
${docsIndex.map((doc) => `@${doc.title}`).join("\n")}
"""

Respond with the processed transcript with recognized @mentions. If there is no recognized entity, respond with the original transcript.
    `,
      },
      {
        role: "user",
        content: `Transcript:
"""
I want to use buttons in a dialog
"""`,
      },
      {
        role: "assistant",
        content: "I want to use @Buttons in a @Dialog",
      },
      {
        role: "user",
        content: ` Transcript:
"""
${transcript.trim()}
"""`,
      },
    ],
    {
      temperature: 0,
    }
  );

  const parts: ChatMessagePart[] = [];
  if (transcript.trim()) parts.push({ type: "text", text: chatResponse });

  return { parts };
}

export function getDocMentions(input: string) {
  const rawDocMentions = input.match(/@(\w+)/g) || [];
  const docMentions: string[] = rawDocMentions.map((mention) => mention.slice(1).toLocaleLowerCase());
  return docMentions;
}
