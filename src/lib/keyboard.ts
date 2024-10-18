import { filter, fromEvent, tap } from "rxjs";
import { $mediaRecorder } from "./transcribe";

export const $spaceKeyupRaw = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  filter(() => $mediaRecorder.value?.state === "recording"),
  filter((e) => e.code === "Space"),
  tap(() => console.log("space up"))
);

export const $ctrlSpaceKeydownRaw = fromEvent<KeyboardEvent>(document, "keydown").pipe(
  filter(() => document.activeElement === document.body),
  filter(() => $mediaRecorder.value?.state !== "recording"),
  filter((e) => e.code === "Space"),
  tap((e) => e.preventDefault()),
  tap(() => console.log("space down"))
);
