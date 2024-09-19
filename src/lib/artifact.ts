import { BehaviorSubject } from "rxjs";

export interface ArtifactVersion {
  id: string;
  source: string;
  error?: string;
  isActive?: boolean;
}

export const $artifacts = new BehaviorSubject<ArtifactVersion[]>([]);

export function preprendActiveArtifact(source: string) {
  $artifacts.next([
    {
      id: crypto.randomUUID(),
      source,
      isActive: true,
    },
    ...$artifacts.value,
  ]);
}

export function updateArtifact(updateFn: (prev: ArtifactVersion[]) => ArtifactVersion[]) {
  $artifacts.next(updateFn($artifacts.value));
}
