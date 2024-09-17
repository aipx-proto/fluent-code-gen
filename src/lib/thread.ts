import { BehaviorSubject } from "rxjs";

export interface ThreadItem {
  id: string;
  role: string;
  content: string;
}

export const $thread = new BehaviorSubject<ThreadItem[]>([]);

export function createMessage(role: string, content: string) {
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

function updateThread(updateFn: (prev: ThreadItem[]) => ThreadItem[]) {
  $thread.next(updateFn($thread.value));
}
