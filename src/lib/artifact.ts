import type { ReactVMErrorMessage } from "ai-studio-cdk/react-vm";
import { BehaviorSubject } from "rxjs";
import { baseArtifacts } from "../data/base-artifacts";

export interface ArtifactVersion {
  id: string;
  name: string;
  source: string;
  error?: ReactVMErrorMessage;
  isActive?: boolean;
  isBase?: boolean;
}

export const $artifacts = new BehaviorSubject<ArtifactVersion[]>([...baseArtifacts]);

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
