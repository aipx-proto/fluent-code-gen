import type { ReactVMErrorMessage } from "ai-studio-cdk/react-vm";
import { BehaviorSubject, filter, map } from "rxjs";
import { baseArtifacts } from "../data/base-artifacts";

export interface ArtifactVersion {
  id: string;
  name: string;
  minimumCode: string;
  error?: ReactVMErrorMessage;
  isActive?: boolean;
  isBase?: boolean;
}

export const $artifacts = new BehaviorSubject<ArtifactVersion[]>([...baseArtifacts]);

export const $baseArtifact = $artifacts.pipe(
  map((artifacts) => artifacts.find((artifact) => artifact.isBase)),
  filter((artifact) => !!artifact)
);

export const $activeArtifact = $artifacts.pipe(
  map((artifacts) => artifacts.find((artifact) => artifact.isActive)),
  filter((artifact) => !!artifact)
);

export function updateArtifact(updateFn: (prev: ArtifactVersion[]) => ArtifactVersion[]) {
  $artifacts.next(updateFn($artifacts.value));
}

export function symbolizeArtifact(options: { id: string; name: string; content: string }) {
  const markdownCodePattern = /```jsx\n([\s\S]*)\n```/g;

  // replace ```jsx ``` block with <pre><code data-length="num">[length of code] </code></pre>
  return `${options.content.replace(markdownCodePattern, (_match, _code) => {
    return `<button data-action="open-artifact" data-artifact="${options.id}">${options.name}</button>`;
  })}`;
}
