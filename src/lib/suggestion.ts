import { distinctUntilChanged, filter, map, merge, Observable, share, switchMap, tap } from "rxjs";
import { docsIndex } from "../data/docs-index";
import { ChatMessagePart, getChatCompletion } from "./chat";

export interface DocumentSuggestion {
  path: string;
  description: string;
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

export async function getDocs(componentNames: string[], abortSignal?: AbortSignal) {
  const uniqueLowercaseNames = Array.from(new Set([...componentNames.map((name) => name.toLowerCase())]));
  const docsDict = new Map(docsIndex.map((doc) => [doc.title.toLowerCase(), doc]));

  const docs = await Promise.all(
    uniqueLowercaseNames
      .map((title) => docsDict.get(title)!)
      .filter(Boolean)
      .map((filename) => fetch(`${import.meta.env.BASE_URL}${filename.path}`, { signal: abortSignal }).then((res) => res.text()))
  );
  return docs;
}

function responseToBase64Url(response: Response) {
  return response.blob().then((blob) => {
    return new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.readAsDataURL(blob);
    });
  });
}

export async function augmentChat(rawParts: ChatMessagePart[], abortSignal?: AbortSignal) {
  const prompt = rawParts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("\n");
  const imageParts = rawParts.filter((part) => part.type === "image_url");
  const hasImage = imageParts.length > 0;

  // fetch examples
  const [buttonIconUrl, tabListUrl] = await Promise.all([
    fetch(`${import.meta.env.BASE_URL}training-examples/button-icon.png`, { signal: abortSignal }).then(responseToBase64Url),
    fetch(`${import.meta.env.BASE_URL}training-examples/tab-list.png`, { signal: abortSignal }).then(responseToBase64Url),
  ]);

  const chatResponse = await getChatCompletion(
    [
      {
        role: "system",
        content: `Suggest useful documentation to help user build a UI with Microsoft Fluent design system.

You must choose from this list of documentation:
"""
${docsIndex.map((doc) => `@${doc.title}: ${doc.description}`).join("\n")}
"""

Enrich user's request surrounded by triple quotes${hasImage ? " and the provided images" : ""} with documentation @mentions.
Respond with enriched request. When there is no matching documentation, say "No documentation available".
    `,
      },
      {
        role: "user",
        content: `Request:
"""
I want to use buttons in a dialog
"""`,
      },
      {
        role: "assistant",
        content: `
I want to use @button and @dialog. Put buttons inside the dialog`,
      },
      {
        role: "user",
        content: `Request: 
"""
Change app breadcrumb in header
"""`,
      },
      {
        role: "assistant",
        content: `
Change the breadcrumb in the @AppShell app header area. 
`,
      },
      {
        role: "user",
        content: `Request: 
"""
Make everything bigger
"""`,
      },
      {
        role: "assistant",
        content: "Make everything bigger. No documentation available",
      },
      ...(hasImage
        ? [
            {
              role: "user",
              content: [
                {
                  type: "text" as const,
                  text: "Add these two features to the confirmation dialog",
                },
                {
                  type: "image_url" as const,
                  image_url: { url: buttonIconUrl },
                },
                {
                  type: "image_url" as const,
                  image_url: { url: tabListUrl },
                },
              ],
            },
            {
              role: "assistant",
              content: "Add these two features, @button and @tablist, to the confirmation @dialog.",
            },
          ]
        : []),
      {
        role: "user",
        content: [
          {
            type: "text",
            text: ` Request:
"""
${prompt.trim()}
"""`,
          },
          ...imageParts,
        ],
      },
    ],
    {
      temperature: 0,
    },
    {
      signal: abortSignal,
    }
  );

  const parts: ChatMessagePart[] = [];
  parts.push({ type: "text", text: chatResponse });
  parts.push(...imageParts);

  return { parts };
}

export function getDocMentions(input: string) {
  const rawDocMentions = input.match(/@(\w+)/g) || [];
  const docMentions: string[] = rawDocMentions.map((mention) => mention.slice(1).toLocaleLowerCase());
  return docMentions;
}
