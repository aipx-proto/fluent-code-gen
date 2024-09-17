# Spinner

```jsx
import * as React from "react";
import { Spinner } from "@fluentui/react-components";
import type { SpinnerProps } from "@fluentui/react-components";

export const Default = (props: Partial<SpinnerProps>) => <Spinner {...props} />;
```

### Default

```jsx
import * as React from "react";
import { Spinner } from "@fluentui/react-components";
import type { SpinnerProps } from "@fluentui/react-components";

export const Default = (props: Partial<SpinnerProps>) => <Spinner {...props} />;
```

### Appearance

```jsx
import * as React from "react";
import { makeStyles, Spinner, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    "> div": { padding: "20px" },
  },

  // Inverted Spinners are meant as overlays (e.g., over an image or similar)
  // so give it a solid, dark background so it is visible in all themes.
  invertedWrapper: {
    backgroundColor: tokens.colorBrandBackgroundStatic,
  },
});

export const Appearance = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Spinner appearance="primary" label="Primary Spinner" />

      <div className={styles.invertedWrapper}>
        <Spinner appearance="inverted" label="Inverted Spinner" />
      </div>
    </div>
  );
};
```

### Labels

```jsx
import * as React from "react";
import { makeStyles, Spinner } from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    "> div": { padding: "20px" },
  },
});

export const Labels = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Spinner labelPosition="before" label="Label Position Before..." />

      <Spinner labelPosition="after" label="Label Position After..." />

      <Spinner labelPosition="above" label="Label Position Above..." />

      <Spinner labelPosition="below" label="Label Position Below..." />
    </div>
  );
};
```

### Size

```jsx
import * as React from "react";
import { makeStyles, Spinner } from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    "> div": { padding: "20px" },
  },
});

export const Size = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Spinner size="extra-tiny" label="Extra Tiny Spinner" />

      <Spinner size="tiny" label="Tiny Spinner" />

      <Spinner size="extra-small" label="Extra Small Spinner" />

      <Spinner size="small" label="Small Spinner" />

      <Spinner size="medium" label="Medium Spinner" />

      <Spinner size="large" label="Large Spinner" />

      <Spinner size="extra-large" label="Extra Large Spinner" />

      <Spinner size="huge" label="Huge Spinner" />
    </div>
  );
};
```