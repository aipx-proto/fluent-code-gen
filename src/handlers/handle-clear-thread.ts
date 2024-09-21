import { BehaviorSubject } from "rxjs";
import { ThreadItem } from "../lib/thread";

export function handleClearThread(action: string, $thread: BehaviorSubject<ThreadItem[]>) {
  if (action !== "clear-thread") return;
  $thread.next([]);
}
