# ProgressBar

```jsx
import * as React from "react";
import {
  Field,
  ProgressBar,
  ProgressBarProps,
} from "@fluentui/react-components";

export const Default = (props: Partial<ProgressBarProps>) => {
  return (
    <Field validationMessage="Default ProgressBar" validationState="none">
      <ProgressBar {...props} value={0.5} />
    </Field>
  );
};
```

### Default

```jsx
import * as React from "react";
import {
  Field,
  ProgressBar,
  ProgressBarProps,
} from "@fluentui/react-components";

export const Default = (props: Partial<ProgressBarProps>) => {
  return (
    <Field validationMessage="Default ProgressBar" validationState="none">
      <ProgressBar {...props} value={0.5} />
    </Field>
  );
};
```

### Color

The `color` prop can be used to indicate a `"brand"` state (default), `"error"` state (red), `"warning"` state (orange), or `"success"` state (green).

```jsx
import * as React from "react";
import { Field, ProgressBar, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
  },
});

export const Color = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Field validationMessage="Error ProgressBar">
        <ProgressBar value={0.75} color="error" />
      </Field>

      <Field validationMessage="Warning ProgressBar" validationState="warning">
        <ProgressBar value={0.95} color="warning" />
      </Field>

      <Field validationMessage="Success ProgressBar" validationState="success">
        <ProgressBar value={1} color="success" />
      </Field>
    </div>
  );
};
```

### Indeterminate

ProgressBar is indeterminate when 'value' is undefined. Indeterminate ProgressBar is best used to show that an operation is being executed.

```jsx
import * as React from "react";
import { Field, ProgressBar } from "@fluentui/react-components";

export const Indeterminate = () => {
  return (
    <Field validationMessage="Indeterminate ProgressBar" validationState="none">
      <ProgressBar />
    </Field>
  );
};
```

### Max

You can specify the maximum value of the determinate ProgressBar. This is useful for instances where you want to show capacity, or how much of a total has been uploaded/downloaded.

```jsx
import * as React from "react";
import { Field, ProgressBar } from "@fluentui/react-components";

const intervalDelay = 100;
const intervalIncrement = 1;

export const Max = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setValue(value < 42 ? intervalIncrement + value : 0);
    }, intervalDelay);
    return () => {
      clearInterval(id);
    };
  });
  return (
    <Field
      validationMessage={`There have been ${value} files downloaded`}
      validationState="none"
    >
      <ProgressBar max={42} value={value} />
    </Field>
  );
};
```

### Shape

The `shape` prop affects the corners of the bar. It can be `rounded` (default) or `square`.

```jsx
import * as React from "react";
import { Field, ProgressBar, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    margin: "20px 0px",
  },
});

export const Shape = () => {
  const styles = useStyles();

  return (
    <div>
      <Field validationMessage="Rounded ProgressBar" validationState="none">
        <ProgressBar
          className={styles.container}
          shape="rounded"
          thickness="large"
          value={0.5}
        />
      </Field>
      <Field validationMessage="Square ProgressBar" validationState="none">
        <ProgressBar
          className={styles.container}
          shape="square"
          thickness="large"
          value={0.5}
        />
      </Field>
    </div>
  );
};
```

### Thickness

The `thickness` prop affects the size of the bar. It can be `medium` (default) or `large`.

```jsx
import * as React from "react";
import { Field, ProgressBar, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    margin: "20px 0px",
  },
});

export const Thickness = () => {
  const styles = useStyles();

  return (
    <div>
      <Field validationMessage="Medium ProgressBar" validationState="none">
        <ProgressBar
          className={styles.container}
          thickness="medium"
          value={0.7}
        />
      </Field>

      <Field validationMessage="Large ProgressBar" validationState="none">
        <ProgressBar
          className={styles.container}
          thickness="large"
          value={0.7}
        />
      </Field>
    </div>
  );
};
```