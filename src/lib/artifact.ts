import { BehaviorSubject } from "rxjs";

export interface ArtifactVersion {
  id: string;
  source: string;
  error?: string;
  isActive?: boolean;
}

export const $artifacts = new BehaviorSubject<ArtifactVersion[]>([]);

export function updateArtifact(updateFn: (prev: ArtifactVersion[]) => ArtifactVersion[]) {
  $artifacts.next(updateFn($artifacts.value));
}
