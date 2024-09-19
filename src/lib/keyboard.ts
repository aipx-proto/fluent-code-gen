import { filter, fromEvent, tap } from "rxjs";
import { $mediaRecorder } from "./transcribe";

export const $spaceKeyupRaw = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  filter(() => $mediaRecorder.value?.state === "recording"),
  filter((e) => e.code === "Space"),
  tap(() => console.log("space up"))
);

export const $ctrlSpaceKeydownRaw = fromEvent<KeyboardEvent>(document, "keydown").pipe(
  filter(() => $mediaRecorder.value?.state !== "recording"),
  filter((e) => e.ctrlKey && e.code === "Space"),
  tap((e) => console.log("keydown", e)),
  tap((e) => e.preventDefault()),
  tap(() => console.log("ctrl space down"))
);
