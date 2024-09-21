import { BehaviorSubject } from "rxjs";
import { ArtifactVersion } from "../lib/artifact";
import { ThreadItem } from "../lib/thread";

export function handleRebase(
  action: string,
  $thread: BehaviorSubject<ThreadItem[]>,
  updateArtifact: (updateFn: (prev: ArtifactVersion[]) => ArtifactVersion[]) => void
) {
  if (action !== "rebase") return;

  updateArtifact((prev) =>
    prev.map((artifact) => ({
      ...artifact,
      isBase: artifact.isActive,
    }))
  );

  $thread.next([]);
}
