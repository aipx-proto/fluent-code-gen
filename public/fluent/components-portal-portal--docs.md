# Portal

A portal renders content outside of a DOM tree, at the end of the document. This allows content to escape traditional boundaries caused by "overflow: hidden" CSS rules and keeps it on the top without using z-index rules. This is useful for example in Menu and Tooltip scenarios, where the content should always overlay everything else. Portal component is a thin wrapper around React's ReactDOM.createPortal() that propagates Fluent styling (allows to use tokens) and text-direction handling to the content. You can identify DOM created by Portal by looking for the data-portal-node attribute.

```jsx
import * as React from "react";
import { makeStyles, tokens, Portal } from "@fluentui/react-components";

const useStyles = makeStyles({
  content: {
    backgroundColor: tokens.colorPaletteYellowBackground3,
    border: "3px dashed",
    padding: "5px",
  },
  container: {
    border: "3px dashed",
    padding: "5px",
  },
});

export const Default = () => {
  const styles = useStyles();
  const [rootElement, setRootElement] = React.useState<HTMLElement | null>(
    null
  );

  return (
    <>
      <div className={styles.container} style={{ overflow: "hidden" }}>
        Clipping parent container
        <Portal mountNode={rootElement}>
          <div className={styles.content}>Portal content</div>
        </Portal>
      </div>

      <div ref={setRootElement} />
    </>
  );
};
```

### Default

```jsx
import * as React from "react";
import { makeStyles, tokens, Portal } from "@fluentui/react-components";

const useStyles = makeStyles({
  content: {
    backgroundColor: tokens.colorPaletteYellowBackground3,
    border: "3px dashed",
    padding: "5px",
  },
  container: {
    border: "3px dashed",
    padding: "5px",
  },
});

export const Default = () => {
  const styles = useStyles();
  const [rootElement, setRootElement] = React.useState<HTMLElement | null>(
    null
  );

  return (
    <>
      <div className={styles.container} style={{ overflow: "hidden" }}>
        Clipping parent container
        <Portal mountNode={rootElement}>
          <div className={styles.content}>Portal content</div>
        </Portal>
      </div>

      <div ref={setRootElement} />
    </>
  );
};
```