import { filter, from, map, mergeMap } from "rxjs";
import { client } from "./openai";

export async function getChatCompletionStream(messages: any[]) {
  const stream = client.chat.completions.create({
    stream: true,
    messages: messages,
    model: "gpt-4o",
  });

  return from(stream).pipe(
    mergeMap((stream) => stream),
    map((chunk) => chunk.choices[0]?.delta?.content ?? ""),
    filter((content) => !!content)
  );
}
