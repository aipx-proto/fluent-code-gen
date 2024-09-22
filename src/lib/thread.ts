import { BehaviorSubject, distinctUntilChanged, map } from "rxjs";
import { ChatMessage, ChatMessagePart } from "./chat";

export interface ThreadItem {
  id: string;
  role: string;
  content: ChatMessage["content"];
  html?: string;
  abortController?: AbortController;
  isEnded?: boolean;
}

export const $thread = new BehaviorSubject<ThreadItem[]>([]);

export function createMessage(role: string, content: ThreadItem["content"], abortController?: AbortController) {
  const id = crypto.randomUUID();
  updateThread((prev) => [...prev, { id, role, content, abortController }]);
  return id;
}

export function appendMessage(id: string, delta: string) {
  updateThread((prev) => {
    const message = prev.find((item) => item.id === id);
    if (!message) return prev;
    return prev.map((item) => (item.id === id ? { ...item, content: item.content + delta } : item));
  });
}

export function endMessage(id: string) {
  updateThread((prev) => {
    const message = prev.find((item) => item.id === id);
    if (!message) return prev;
    return prev.map((item) => (item.id === id ? { ...item, isEnded: true } : item));
  });
}

export function abortRunningMessage() {
  const runningUserMessage = $thread.value.find((item) => !item.isEnded && item.role === "user");
  if (!runningUserMessage) return;

  runningUserMessage?.abortController?.abort();

  updateThread((prev) => {
    const removeFromIndex = prev.indexOf(runningUserMessage);
    if (removeFromIndex === -1) return prev;
    return prev.filter((_, index) => index < removeFromIndex);
  });
}

export function updateThread(updateFn: (prev: ThreadItem[]) => ThreadItem[]) {
  $thread.next(updateFn($thread.value));
}

export interface Draft {
  content: string;
  attachments: { name: string; url: string }[];
}
export const $draft = new BehaviorSubject<Draft>({ content: "", attachments: [] });
export const $draftDistinctContent = $draft.pipe(
  map((draft) => draft.content),
  distinctUntilChanged()
);

export function updateDraft(updateFn: (prev: Draft) => Draft) {
  $draft.next({ ...$draft.value, ...updateFn($draft.value) });
}

export function submitDraft(textarea: HTMLTextAreaElement): { id: string; parts: ChatMessagePart[]; abortController: AbortController } | null {
  const prompt = $draft.value.content;
  const attachments = $draft.value.attachments;

  const parts: ChatMessagePart[] = [];

  if (prompt.trim()) parts.push({ type: "text", text: prompt });
  if (attachments.length) parts.push(...attachments.map((attachment) => ({ type: "image_url" as const, image_url: attachment })));

  if (parts.length) {
    textarea.value = ""; // order matters. Clear it first so the DOM is aligned with the state
    updateDraft(() => ({ content: "", attachments: [] }));

    const abortController = new AbortController();
    const id = createMessage("user", parts, abortController);

    return { id, parts, abortController };
  }

  return null;
}
