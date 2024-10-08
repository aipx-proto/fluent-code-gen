import { RequestOptions } from "openai/core.mjs";
import { ChatCompletionCreateParamsNonStreaming, ChatCompletionCreateParamsStreaming } from "openai/resources/index.mjs";
import { catchError, EMPTY, filter, from, map, mergeMap } from "rxjs";
import { client } from "./azure";

export interface OpenAIChatPayload {
  messages: ChatMessage[];
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  max_tokens: number;
  stop: string | string[];
}

export interface ChatMessage {
  role: "assistant" | "user" | "system" | string; // relaxed for convenience
  content: ChatMessagePart[] | string;
}

export type ChatMessagePart = ChatMessageTextPart | ChatMessageImagePart;

export interface ChatMessageImagePart {
  type: "image_url";
  image_url: {
    url: string;
    detail?: "auto" | "low" | "high";
  };
}

export interface ChatMessageTextPart {
  type: "text";
  text: string;
}

export type OpenAIChatResponse = {
  choices: {
    finish_reason: "stop" | "length" | "content_filter" | null;
    index: number;
    message: {
      content?: string; // blank when content_filter is active
      role: "assistant";
    };
  }[];
  usage: {
    completion_tokens: number;
    prompt_tokens: number;
    total_tokens: number;
  };
};

export async function getChatCompletionStream(messages: ChatMessage[], params?: Partial<ChatCompletionCreateParamsStreaming>, options?: RequestOptions) {
  const stream = client.chat.completions.create(
    {
      stream: true,
      messages: messages as any[],
      model: "gpt-4o",
      ...params,
    },
    options
  );

  return from(stream).pipe(
    catchError((_error) => EMPTY),
    mergeMap((stream) => stream),
    map((chunk) => chunk.choices[0]?.delta?.content ?? ""),
    filter((content) => !!content)
  );
}

export async function getChatCompletion(messages: ChatMessage[], params?: Partial<ChatCompletionCreateParamsNonStreaming>, options?: RequestOptions) {
  return client.chat.completions
    .create(
      {
        messages: messages as any[],
        model: "gpt-4o",
        ...params,
      },
      options
    )
    .then((response) => response.choices[0]?.message.content ?? "");
}
