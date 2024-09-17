import { getBearerTokenProvider, InteractiveBrowserCredential } from "@azure/identity";
import { AzureOpenAI } from "openai";
import { filter, from, map, mergeMap } from "rxjs";

const credential = new InteractiveBrowserCredential({
  tenantId: "72f988bf-86f1-41af-91ab-2d7cd011db47",
  clientId: "6e4c509e-2b65-40dc-b461-beb2c824f63a",
});
const azureADTokenProvider = getBearerTokenProvider(credential, []);
const client = new AzureOpenAI({ azureADTokenProvider, apiVersion: "2024-07-01-preview", endpoint: "https://proto-api.azure-api.net/" });

document.querySelector("form")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const content = new FormData(event.target as HTMLFormElement).get("message") as string;

  const response = await client.chat.completions
    .create({
      messages: [{ role: "user", content }],
      model: "gpt-4o",
    })
    .catch((e) => e);

  document.querySelector("#output")!.textContent = JSON.stringify({ response }, null, 2);
});

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
