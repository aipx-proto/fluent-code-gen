import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { highlightActiveLine } from "@codemirror/view";
import { EditorView, minimalSetup } from "codemirror";
import "./editor.css";

export interface SourceEditorProps {
  container: HTMLElement;
  onChange: (value: string) => void;
}
export function mountArtifactEditor(props: SourceEditorProps) {
  const instance = new EditorView({
    extensions: [
      minimalSetup,
      oneDark,
      highlightActiveLine(),
      javascript({
        jsx: true,
        typescript: true,
      }),
      EditorView.focusChangeEffect.of((state, focusing) => {
        if (focusing) return null;
        props.onChange?.(state.doc.toString());
        return null;
      }),
    ],
    parent: props.container,
  });

  const setSourceCode = (value: string) => {
    instance.dispatch({
      changes: {
        from: 0,
        to: instance.state.doc.length,
        insert: value,
      },
    });
  };

  return {
    setSourceCode,
  };
}
