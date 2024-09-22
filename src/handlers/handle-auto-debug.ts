import { BehaviorSubject } from "rxjs";
import { ArtifactVersion } from "../lib/artifact";

export function createDebugPrompt($artifacts: BehaviorSubject<ArtifactVersion[]>) {
  const error = $artifacts.value.find((artifact) => artifact.isActive && artifact.error)?.error;
  if (!error) return;

  const formattedError = `
I received the following error
"""
${[error.message, error.error?.message, error.error?.stack].filter(Boolean).join("\n")}
"""
  `.trim();

  return formattedError;
}
