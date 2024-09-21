# FluentProvider

The FluentProvider transforms a passed theme to CSS variables and passes other settings to Fluent UI components.

```jsx
import * as React from "react";
import {
  makeStyles,
  teamsDarkTheme,
  teamsLightTheme,
  tokens,
  webLightTheme,
  Button,
  FluentProvider,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  button: {
    marginTop: "5px",
  },
  provider: {
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
  text: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    fontSize: "20px",
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
});

export const Default = () => {
  const styles = useStyles();
  return (
    <>
      <div>
        <FluentProvider className={styles.provider} theme={webLightTheme}>
          <div className={styles.text}>Web Light Theme</div>
          <Button className={styles.button}>Web Light Theme</Button>
        </FluentProvider>
      </div>
      <div>
        <FluentProvider className={styles.provider} theme={teamsLightTheme}>
          <div className={styles.text}>Teams Light Theme</div>
          <Button className={styles.button}>Teams Light Theme</Button>
        </FluentProvider>
      </div>
      <div>
        <FluentProvider className={styles.provider} theme={teamsDarkTheme}>
          <div className={styles.text}>Teams Dark Theme</div>
          <Button className={styles.button}>Teams Dark Theme</Button>
        </FluentProvider>
      </div>
    </>
  );
};
```

### Default

```jsx
import * as React from "react";
import {
  makeStyles,
  teamsDarkTheme,
  teamsLightTheme,
  tokens,
  webLightTheme,
  Button,
  FluentProvider,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  button: {
    marginTop: "5px",
  },
  provider: {
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
  text: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    fontSize: "20px",
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
});

export const Default = () => {
  const styles = useStyles();
  return (
    <>
      <div>
        <FluentProvider className={styles.provider} theme={webLightTheme}>
          <div className={styles.text}>Web Light Theme</div>
          <Button className={styles.button}>Web Light Theme</Button>
        </FluentProvider>
      </div>
      <div>
        <FluentProvider className={styles.provider} theme={teamsLightTheme}>
          <div className={styles.text}>Teams Light Theme</div>
          <Button className={styles.button}>Teams Light Theme</Button>
        </FluentProvider>
      </div>
      <div>
        <FluentProvider className={styles.provider} theme={teamsDarkTheme}>
          <div className={styles.text}>Teams Dark Theme</div>
          <Button className={styles.button}>Teams Dark Theme</Button>
        </FluentProvider>
      </div>
    </>
  );
};
```

### Dir

A Fluent provider can render text left-to-right (LTR) or right-to-left (RTL).

```jsx
import * as React from "react";
import { makeStyles, tokens, FluentProvider } from "@fluentui/react-components";

const useStyles = makeStyles({
  example: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    width: "300px",
  },
  text: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    fontSize: "18px",
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
});

export const Dir = () => {
  const styles = useStyles();
  return (
    <>
      <div className={styles.example}>
        <FluentProvider>
          <div className={styles.text}>Text left to right</div>
        </FluentProvider>
        <FluentProvider dir="rtl" lang="ar">
          <div className={styles.text}>نص من اليمين إلى اليسار</div>
        </FluentProvider>
      </div>
    </>
  );
};
```

### Apply Styles To Portals

`applyStylesToPortals` controls if styles from FluentProvider should be applied to components that use Portal component.

```jsx
import {
  createDOMRenderer,
  makeStyles,
  tokens,
  FluentProvider,
  Portal,
  RendererProvider,
} from "@fluentui/react-components";
import * as React from "react";
import * as ReactDOM from "react-dom";

const useStyles = makeStyles({
  provider: {
    border: `3px solid ${tokens.colorBrandForeground2}`,
    borderRadius: "5px",
    padding: "5px",

    backgroundColor: tokens.colorBrandBackground2,
    marginBottom: "20px",
  },
  portal: {
    border: `3x dotted ${tokens.colorPaletteDarkOrangeBorder2}`,
    padding: "5px",
  },
});

type FrameRendererProps = {
  children: (
    externalDocument: Document,
    renderer: ReturnType<typeof createDOMRenderer>
  ) => React.ReactElement;
};

const FrameRenderer: React.FunctionComponent<FrameRendererProps> = ({
  children,
}) => {
  const [frameRef, setFrameRef] = React.useState<HTMLIFrameElement | null>(
    null
  );
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);

  const contentDocument = frameRef
    ? (frameRef.contentDocument as Document)
    : undefined;
  const renderer = React.useMemo(
    () => createDOMRenderer(contentDocument),
    [contentDocument]
  );

  React.useEffect(() => {
    if (contentDocument) {
      const el = contentDocument.createElement("div");
      contentDocument.body.appendChild(el);

      setContainer(el);
    }
  }, [contentDocument]);

  return (
    <>
      <iframe
        ref={setFrameRef}
        style={{ height: 300, width: 700, border: "none" }}
      />
      {contentDocument &&
        container &&
        ReactDOM.createPortal(children(contentDocument, renderer), container)}
    </>
  );
};

const ApplyStylesToPortalsExample: React.FC<{ targetDocument?: Document }> = ({
  targetDocument,
}) => {
  const styles = useStyles();

  return (
    <>
      <FluentProvider
        className={styles.provider}
        targetDocument={targetDocument}
      >
        <div>An element inside a provider</div>
        <Portal>
          <div className={styles.portal}>
            A portal created by FluentProvider with{" "}
            <code>applyStylesToPortals={`{true}`}</code>. Styles from
            FluentProvider are applied
          </div>
        </Portal>
      </FluentProvider>

      <FluentProvider
        className={styles.provider}
        applyStylesToPortals={false}
        targetDocument={targetDocument}
      >
        <div>An element inside a provider</div>
        <Portal>
          <div className={styles.portal}>
            A portal created by FluentProvider with{" "}
            <code>applyStylesToPortals={`{false}`}</code>. Styles from
            FluentProvider are not applied
          </div>
        </Portal>
      </FluentProvider>
    </>
  );
};

export const ApplyStylesToPortals = () => (
  // FrameRenderer is redundant this example, it's used only to render portals inside an iframe
  // to make them visible in Storybook
  <FrameRenderer>
    {(externalDocument, renderer) => (
      <RendererProvider renderer={renderer} targetDocument={externalDocument}>
        <ApplyStylesToPortalsExample targetDocument={externalDocument} />
      </RendererProvider>
    )}
  </FrameRenderer>
);
```

### Nested

A Fluent provider can be nested to override some or all of a tokens.

```jsx
import * as React from "react";
import {
  makeStyles,
  tokens,
  webLightTheme,
  FluentProvider,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  example: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    border: `5px solid ${tokens.colorBrandStroke1}`,
    borderRadius: "5px",
    margin: "5px",
  },
  text: {
    padding: "5px",
    fontSize: "18px",
  },
});

export const Nested = () => {
  const styles = useStyles();
  return (
    <FluentProvider theme={webLightTheme}>
      <div className={styles.example}>
        <div className={styles.text}>Web Light Theme using brand tokens</div>

        <FluentProvider
          theme={{
            colorBrandStroke1: "#780510",
            colorBrandBackground2: "#fa8072",
            colorBrandForeground2: "#780510",
          }}
        >
          <div className={styles.example}>
            <div className={styles.text}>
              Nested FluentProvider with partial theme
            </div>
          </div>
        </FluentProvider>
      </div>
    </FluentProvider>
  );
};
```

### Frame

A FluentProvider does not cross an iframe boundary. To render into iframes pass a proper `Document` instance to `targetDocument` prop on FluentProvider & RendererProvider.

```jsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createDOMRenderer,
  makeStyles,
  tokens,
  Button,
  FluentProvider,
  RendererProvider,
} from "@fluentui/react-components";

const useExampleStyles = makeStyles({
  button: {
    marginTop: "5px",
  },
  text: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    fontSize: "20px",
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
});

const useProviderStyles = makeStyles({
  provider: {
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
});

type FrameRendererProps = {
  children: (
    externalDocument: Document,
    renderer: ReturnType<typeof createDOMRenderer>
  ) => React.ReactElement;
};

const FrameRenderer: React.FunctionComponent<FrameRendererProps> = ({
  children,
}) => {
  const [frameRef, setFrameRef] = React.useState<HTMLIFrameElement | null>(
    null
  );

  const contentDocument = frameRef
    ? (frameRef.contentDocument as Document)
    : undefined;
  const renderer = React.useMemo(
    () => createDOMRenderer(contentDocument),
    [contentDocument]
  );

  return (
    <>
      <iframe
        ref={setFrameRef}
        style={{
          height: 100,
          width: 500,
          border: "3px dashed salmon",
          padding: 10,
        }}
        title="An example of Provider in iframe"
      />

      {contentDocument &&
        ReactDOM.createPortal(
          children(contentDocument, renderer),
          contentDocument.body
        )}
    </>
  );
};

const Example: React.FC = (props) => {
  const styles = useExampleStyles();

  return (
    <>
      <div className={styles.text}>{props.children}</div>
      <Button className={styles.button}>A button</Button>
    </>
  );
};

export const Frame = () => {
  const styles = useProviderStyles();

  return (
    <>
      <FluentProvider className={styles.provider}>
        <Example>Content rendered outside iframe</Example>
      </FluentProvider>

      <FrameRenderer>
        {(externalDocument, renderer) => (
          <RendererProvider
            renderer={renderer}
            targetDocument={externalDocument}
          >
            <FluentProvider
              className={styles.provider}
              targetDocument={externalDocument}
            >
              <Example>
                Content rendered <b>within</b> iframe
              </Example>
            </FluentProvider>
          </RendererProvider>
        )}
      </FrameRenderer>
    </>
  );
};
```