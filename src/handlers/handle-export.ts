import { BehaviorSubject } from "rxjs";
import { ArtifactVersion } from "../lib/artifact";

export function handleExport(action: string, $artifacts: BehaviorSubject<ArtifactVersion[]>) {
  if (action !== "export") return;
  const artifacts = $artifacts.value;
  const artifact = artifacts.find((artifact) => artifact.isActive);
  if (!artifact) return;
  const fullHtml = artifact.minimumCode;
  const blob = new Blob([fullHtml], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${artifact.name}-${new Date().toISOString()}.html`;
  a.click();
  URL.revokeObjectURL(url);
}
