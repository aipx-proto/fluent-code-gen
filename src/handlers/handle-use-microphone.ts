import { $mediaRecorder } from "../lib/transcribe";

export async function handleUseMicrophone(action: string, useMicrophoneButton: HTMLButtonElement, holdToTalkButton: HTMLButtonElement) {
  if (action !== "use-microphone") return;
  const media = await navigator.mediaDevices.getUserMedia({ audio: true });
  $mediaRecorder.next(new MediaRecorder(media));
  (useMicrophoneButton.dataset as any).hidden = true;
  (holdToTalkButton.dataset as any).hidden = false;
}
