# Textarea

Textarea allows the user to enter and edit multiline text.

```jsx
import * as React from "react";
import { Field, Textarea } from "@fluentui/react-components";
import type { TextareaProps } from "@fluentui/react-components";

export const Default = (props: Partial<TextareaProps>) => (
  <Field label="Default Textarea">
    <Textarea {...props} />
  </Field>
);
```

### Default

```jsx
import * as React from "react";
import { Field, Textarea } from "@fluentui/react-components";
import type { TextareaProps } from "@fluentui/react-components";

export const Default = (props: Partial<TextareaProps>) => (
  <Field label="Default Textarea">
    <Textarea {...props} />
  </Field>
);
```

### Appearance

Textarea can have different appearances. The colors adjacent to the Textarea should have a sufficient contrast. Particularly, the color of input with filled darker and lighter styles needs to provide a contrast ratio greater than 3 to 1 against the immediate surrounding color to pass accessibility requirement.

```jsx
import * as React from "react";
import {
  Field,
  makeStyles,
  mergeClasses,
  tokens,
  Textarea,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    rowGap: tokens.spacingVerticalMNudge,
  },
  inverted: {
    backgroundColor: tokens.colorNeutralBackgroundInverted,
  },
  invertedLabel: {
    color: tokens.colorNeutralForegroundInverted2,
  },
  fieldWrapper: {
    padding: `${tokens.spacingVerticalMNudge} ${tokens.spacingHorizontalMNudge}`,
  },
});

export const Appearance = () => {
  const styles = useStyles();

  return (
    <div className={styles.base}>
      <div className={styles.fieldWrapper}>
        <Field label="Textarea with Outline appearance">
          <Textarea
            appearance="outline"
            placeholder="type here..."
            resize="both"
          />
        </Field>
      </div>

      <div className={mergeClasses(styles.fieldWrapper, styles.inverted)}>
        <Field
          label={{
            children: "Textarea with Filled Darker appearance",
            className: styles.invertedLabel,
          }}
        >
          <Textarea
            appearance="filled-darker"
            placeholder="type here..."
            resize="both"
          />
        </Field>
      </div>

      <div className={mergeClasses(styles.fieldWrapper, styles.inverted)}>
        <Field
          label={{
            children: "Textarea with Filled Lighter appearance",
            className: styles.invertedLabel,
          }}
        >
          <Textarea
            appearance="filled-lighter"
            placeholder="type here..."
            resize="both"
          />
        </Field>
      </div>
    </div>
  );
};
```

### Disabled

```jsx
import * as React from "react";
import { Field, Textarea } from "@fluentui/react-components";

export const Disabled = () => (
  <Field label="Disabled Textarea">
    <Textarea disabled />
  </Field>
);
```

### Placeholder

```jsx
import * as React from "react";
import { Field, Textarea } from "@fluentui/react-components";

export const Placeholder = () => (
  <Field label="Textarea with placeholder">
    <Textarea placeholder="type here..." />
  </Field>
);
```

### Resize

```jsx
import * as React from "react";
import {
  Field,
  makeStyles,
  Textarea,
  tokens,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    rowGap: tokens.spacingVerticalMNudge,
  },
});

export const Resize = () => {
  const styles = useStyles();

  return (
    <div className={styles.base}>
      <Field label='Textarea with resize set to "none"'>
        <Textarea resize="none" />
      </Field>

      <Field label='Textarea with resize set to "vertical"'>
        <Textarea resize="vertical" />
      </Field>

      <Field label='Textarea with resize set to "horizontal"'>
        <Textarea resize="horizontal" />
      </Field>

      <Field label='Textarea with resize set to "both"'>
        <Textarea resize="both" />
      </Field>
    </div>
  );
};
```

### Size

```jsx
import * as React from "react";
import {
  Field,
  makeStyles,
  Textarea,
  tokens,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    rowGap: tokens.spacingVerticalMNudge,
  },
});

export const Size = () => {
  const styles = useStyles();

  return (
    <div className={styles.base}>
      <Field size="small" label="Small Textarea">
        <Textarea />
      </Field>

      <Field size="medium" label="Medium Textarea">
        <Textarea />
      </Field>

      <Field size="large" label="Large Textarea">
        <Textarea />
      </Field>
    </div>
  );
};
```

### Uncontrolled

```jsx
import * as React from "react";
import { Field, Textarea } from "@fluentui/react-components";
import type { TextareaProps } from "@fluentui/react-components";

const onChange: TextareaProps["onChange"] = (ev, data) => {
  // Uncontrolled inputs can be notified of changes to the value
  console.log(`New value: "${data.value}"`);
};

export const Uncontrolled = () => (
  <Field label="Uncontrolled Textarea" hint="Check console for new value">
    <Textarea onChange={onChange} placeholder="type here..." />
  </Field>
);
```

### Controlled

```jsx
import * as React from "react";
import { Field, Textarea } from "@fluentui/react-components";
import type { TextareaProps } from "@fluentui/react-components";

export const Controlled = () => {
  const [value, setValue] = React.useState("initial value");

  const onChange: TextareaProps["onChange"] = (ev, data) => {
    if (data.value.length <= 50) {
      setValue(data.value);
    }
  };

  return (
    <Field label="Controlled Textarea limiting the value to 50 characters">
      <Textarea value={value} onChange={onChange} />
    </Field>
  );
};
```