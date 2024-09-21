import { ArtifactVersion } from "../lib/artifact";

export async function handleOpenArtifact(
  action: string,
  trigger: HTMLElement,
  updateArtifact: (updateFn: (prev: ArtifactVersion[]) => ArtifactVersion[]) => void
) {
  if (action !== "open-artifact") return;
  const artifactId = trigger.dataset.artifact as string;
  updateArtifact((prev) =>
    prev.map((artifact) => ({
      ...artifact,
      isActive: artifact.id === artifactId,
    }))
  );
}
