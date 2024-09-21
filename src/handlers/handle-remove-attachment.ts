import { Draft } from "../lib/thread";

export function handleRemoveAttachment(action: string, trigger: HTMLElement, updateDraft: (updateFn: (prev: Draft) => Draft) => void) {
  if (action !== "remove-attachment") return;
  const attachmentUrl = trigger.querySelector("img")?.src;

  updateDraft((prev) => ({
    ...prev,
    attachments: prev.attachments.filter((attachment) => attachment.url !== attachmentUrl),
  }));
}
