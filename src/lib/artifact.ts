import { BehaviorSubject } from "rxjs";

export interface ArtifactVersion {
  id: string;
  name: string;
  source: string;
  error?: string;
  isActive?: boolean;
}

export const $artifacts = new BehaviorSubject<ArtifactVersion[]>([]);

export function updateArtifact(updateFn: (prev: ArtifactVersion[]) => ArtifactVersion[]) {
  $artifacts.next(updateFn($artifacts.value));
}

export function symbolizeArtifact(options: { id: string; version: number; content: string }) {
  const markdownCodePattern = /```jsx\n([\s\S]*)\n```/g;

  // replace ```jsx ``` block with <pre><code data-length="num">[length of code] </code></pre>
  return `${options.content.replace(markdownCodePattern, (_match, code) => {
    return `<button data-action="open-artifact" data-artifact="${options.id}">Artifact ${options.version}</button>`;
  })}`;
}
