import { BehaviorSubject } from "rxjs";
import { ChatMessage } from "./chat";

export interface ThreadItem {
  id: string;
  role: string;
  content: ChatMessage["content"];
  html?: string;
}

export const $thread = new BehaviorSubject<ThreadItem[]>([]);

export function createMessage(role: string, content: ThreadItem["content"]) {
  const id = crypto.randomUUID();
  updateThread((prev) => [...prev, { id, role, content }]);
  return id;
}

export function appendMessage(id: string, delta: string) {
  updateThread((prev) => {
    const message = prev.find((item) => item.id === id);
    if (!message) return prev;
    return prev.map((item) => (item.id === id ? { ...item, content: item.content + delta } : item));
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

export function updateDraft(updateFn: (prev: Draft) => Draft) {
  $draft.next({ ...$draft.value, ...updateFn($draft.value) });
}
