# Input

Input allows the user to enter and edit text.

```jsx
import * as React from "react";
import type { ArgTypes } from "@storybook/react";
import { makeStyles, useId, Input, Label } from "@fluentui/react-components";
import type { InputProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field
    display: "flex",
    flexDirection: "column",
    // Use 2px gap below the label (per the design system)
    gap: "2px",
    // Prevent the example from taking the full width of the page (optional)
    maxWidth: "400px",
  },
});

export const Default = (props: InputProps) => {
  const inputId = useId("input");
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Label htmlFor={inputId} size={props.size} disabled={props.disabled}>
        Sample input
      </Label>
      <Input id={inputId} {...props} />
    </div>
  );
};

const argTypes: ArgTypes = {
  // Add these native props to the props table and controls pane
  placeholder: {
    description:
      "Placeholder text for the input. If using this instead of a label (which is " +
      "not recommended), be sure to provide an `aria-label` for screen reader users.",
    type: { name: "string", required: false }, // for inferring control type
    table: { type: { summary: "string" } }, // for showing type in prop table
  },
  disabled: {
    description: "Whether the input is disabled",
    type: { name: "boolean", required: false },
    table: { type: { summary: "boolean" } },
  },
  // Hide these from the props table and controls pane
  children: { table: { disable: true } },
  as: { table: { disable: true } },
};
```

### Default

```jsx
import * as React from "react";
import type { ArgTypes } from "@storybook/react";
import { makeStyles, useId, Input, Label } from "@fluentui/react-components";
import type { InputProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field
    display: "flex",
    flexDirection: "column",
    // Use 2px gap below the label (per the design system)
    gap: "2px",
    // Prevent the example from taking the full width of the page (optional)
    maxWidth: "400px",
  },
});

export const Default = (props: InputProps) => {
  const inputId = useId("input");
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Label htmlFor={inputId} size={props.size} disabled={props.disabled}>
        Sample input
      </Label>
      <Input id={inputId} {...props} />
    </div>
  );
};

const argTypes: ArgTypes = {
  // Add these native props to the props table and controls pane
  placeholder: {
    description:
      "Placeholder text for the input. If using this instead of a label (which is " +
      "not recommended), be sure to provide an `aria-label` for screen reader users.",
    type: { name: "string", required: false }, // for inferring control type
    table: { type: { summary: "string" } }, // for showing type in prop table
  },
  disabled: {
    description: "Whether the input is disabled",
    type: { name: "boolean", required: false },
    table: { type: { summary: "boolean" } },
  },
  // Hide these from the props table and controls pane
  children: { table: { disable: true } },
  as: { table: { disable: true } },
};
```

### Appearance

An input can have different appearances. The colors adjacent to the input should have a sufficient contrast. Particularly, the color of input with filled darker and lighter styles needs to provide greater than 3 to 1 contrast ratio against the immediate surrounding color to pass accessibility requirements.

```jsx
import * as React from "react";
import {
  makeStyles,
  mergeClasses,
  tokens,
  useId,
  Input,
  Label,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
  },
  field: {
    display: "grid",
    gridRowGap: tokens.spacingVerticalXXS,
    marginTop: tokens.spacingVerticalMNudge,
    padding: tokens.spacingHorizontalMNudge,
  },
  filledLighter: {
    backgroundColor: tokens.colorNeutralBackgroundInverted,
    "> label": {
      color: tokens.colorNeutralForegroundInverted2,
    },
  },
  filledDarker: {
    backgroundColor: tokens.colorNeutralBackgroundInverted,
    "> label": {
      color: tokens.colorNeutralForegroundInverted2,
    },
  },
});

export const Appearance = () => {
  const idPrefix = "input-appearance-story";
  const inputIds = {
    default: useId(idPrefix),
    underline: useId(idPrefix),
    filledLighter: useId(idPrefix),
    filledDarker: useId(idPrefix),
  };

  const styles = useStyles();

  return (
    <div className={styles.base}>
      <div className={styles.field}>
        <Label htmlFor={inputIds.default}>Outline appearance (default)</Label>
        <Input appearance="outline" id={inputIds.default} />
      </div>
      <div className={styles.field}>
        <Label htmlFor={inputIds.underline}>Underline appearance</Label>
        <Input appearance="underline" id={inputIds.underline} />
      </div>
      <div className={mergeClasses(styles.field, styles.filledLighter)}>
        <Label htmlFor={inputIds.filledLighter}>
          Filled lighter appearance
        </Label>
        <Input appearance="filled-lighter" id={inputIds.filledLighter} />
      </div>
      <div className={mergeClasses(styles.field, styles.filledDarker)}>
        <Label htmlFor={inputIds.filledDarker}>Filled darker appearance</Label>
        <Input appearance="filled-darker" id={inputIds.filledDarker} />
      </div>
    </div>
  );
};
```

### Content before/after

An input can have elements such as an icon or a button before or after the entered text. These elements are displayed inside the input border.

```jsx
import * as React from "react";
import {
  makeStyles,
  useId,
  Body1,
  Button,
  Input,
  Label,
  Text,
} from "@fluentui/react-components";
import { PersonRegular, MicRegular } from "@fluentui/react-icons";
import type { ButtonProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    // Prevent the example from taking the full width of the page (optional)
    maxWidth: "400px",
    // Stack the label above the field (with 2px gap per the design system)
    "> div": { display: "flex", flexDirection: "column", gap: "2px" },
  },
});

const MicButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      appearance="transparent"
      icon={<MicRegular />}
      size="small"
    />
  );
};

export const ContentBeforeAfter = () => {
  const styles = useStyles();

  const beforeId = useId("content-before");
  const afterId = useId("content-after");
  const beforeAndAfterId = useId("content-before-and-after");
  const beforeLabelId = useId("before-label");
  const afterLabelId = useId("after-label");

  return (
    <div className={styles.root}>
      <div>
        <Label htmlFor={beforeId}>Full name</Label>
        <Input contentBefore={<PersonRegular />} id={beforeId} />
        <Body1>
          An input with a decorative icon in the <code>contentBefore</code>{" "}
          slot.
        </Body1>
      </div>

      <div>
        <Label htmlFor={afterId}>First name</Label>
        <Input
          contentAfter={<MicButton aria-label="Enter by voice" />}
          id={afterId}
        />
        <Body1>
          An input with a button in the <code>contentAfter</code> slot.
        </Body1>
      </div>

      <div>
        <Label htmlFor={beforeAndAfterId}>Amount to pay</Label>
        <Input
          contentBefore={
            <Text size={400} id={beforeLabelId}>
              $
            </Text>
          }
          contentAfter={
            <Text size={400} id={afterLabelId}>
              .00
            </Text>
          }
          aria-labelledby={`${beforeAndAfterId} ${beforeLabelId} ${afterLabelId}`}
          id={beforeAndAfterId}
        />

        <Body1>
          An input with a presentational value in the <code>contentBefore</code>{" "}
          slot and another presentational value in the <code>contentAfter</code>{" "}
          slot.
        </Body1>
      </div>
    </div>
  );
};
```

### Disabled

An input can be disabled.

```jsx
import * as React from "react";
import {
  makeStyles,
  useId,
  Input,
  Label,
  tokens,
  mergeClasses,
  Switch,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
  },
  field: {
    display: "grid",
    gridRowGap: tokens.spacingVerticalXXS,
    marginTop: tokens.spacingVerticalMNudge,
    padding: tokens.spacingHorizontalMNudge,
  },
  filledLighter: {
    backgroundColor: tokens.colorNeutralBackgroundInverted,
    "> label": {
      color: tokens.colorNeutralForegroundInverted2,
    },
  },
  filledDarker: {
    backgroundColor: tokens.colorNeutralBackgroundInverted,
    "> label": {
      color: tokens.colorNeutralForegroundInverted2,
    },
  },
  toggle: {
    marginTop: tokens.spacingVerticalXL,
  },
});

export const Disabled = () => {
  const idPrefix = "input-disabled-story";
  const inputIds = {
    default: useId(idPrefix),
    underline: useId(idPrefix),
    filledLighter: useId(idPrefix),
    filledDarker: useId(idPrefix),
  };
  const styles = useStyles();

  const [disabled, setDisabled] = React.useState(true);

  return (
    <div className={styles.root}>
      <div className={styles.field}>
        <Label htmlFor={inputIds.default}>
          Disabled (default outline appearance)
        </Label>
        <Input
          disabled={disabled}
          id={inputIds.default}
          defaultValue="disabled value"
        />
      </div>
      <div className={styles.field}>
        <Label htmlFor={inputIds.underline}>
          Disabled (underline appearance)
        </Label>
        <Input
          appearance="underline"
          disabled={disabled}
          id={inputIds.underline}
          defaultValue="disabled value"
        />
      </div>
      <div className={mergeClasses(styles.field, styles.filledLighter)}>
        <Label htmlFor={inputIds.filledLighter}>
          Disabled (filled lighter appearance)
        </Label>
        <Input
          appearance="filled-lighter"
          disabled={disabled}
          id={inputIds.filledLighter}
          defaultValue="disabled value"
        />
      </div>
      <div className={mergeClasses(styles.field, styles.filledDarker)}>
        <Label htmlFor={inputIds.filledDarker}>
          Disabled (filled darker appearance)
        </Label>
        <Input
          appearance="filled-darker"
          disabled={disabled}
          id={inputIds.filledDarker}
          defaultValue="disabled value"
        />
      </div>
      <Switch
        className={styles.toggle}
        checked={disabled}
        label="Disabled"
        onChange={(_e, data) => setDisabled(data.checked)}
      />
    </div>
  );
};
```

### Inline

An input can be rendered inline with text.

```jsx
import * as React from "react";
import { useId, Input, Label } from "@fluentui/react-components";

export const Inline = () => {
  const inputId = useId("input");

  return (
    <div>
      <Label htmlFor={inputId} style={{ paddingInlineEnd: "12px" }}>
        Sample inline input
      </Label>
      <Input id={inputId} />

      <p>
        This input is <Input placeholder="inline" aria-label="inline" /> within
        a paragraph of text (be sure to provide an <code>aria-label</code>).
      </p>
    </div>
  );
};
```

### Placeholder

An input can have placeholder text. If using the placeholder as a label (which is not recommended for usability), be sure to provide an `aria-label` for screen reader users.

```jsx
import * as React from "react";
import { makeStyles, useId, Input, Label } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    rowGap: "5px",
    maxWidth: "300px",
  },
});

export const Placeholder = () => {
  const inputId = useId("input-with-placeholder");
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Label htmlFor={inputId}>Input with a placeholder</Label>
      <Input placeholder="This is a placeholder" id={inputId} />
    </div>
  );
};
```

### Size

An input can have different sizes.

```jsx
import * as React from "react";
import { makeStyles, useId, Input, Label } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",

    maxWidth: "400px",
    // Stack the label above the field (with 2px gap per the design system)
    "> div": { display: "flex", flexDirection: "column", gap: "2px" },
  },
});

export const Size = () => {
  const smallId = useId("input-small");
  const mediumId = useId("input-medium");
  const largeId = useId("input-large");
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div>
        <Label size="small" htmlFor={smallId}>
          Small input
        </Label>
        <Input size="small" id={smallId} />
      </div>

      <div>
        <Label size="medium" htmlFor={mediumId}>
          Medium input
        </Label>
        <Input size="medium" id={mediumId} />
      </div>

      <div>
        <Label size="large" htmlFor={largeId}>
          Large input
        </Label>
        <Input size="large" id={largeId} />
      </div>
    </div>
  );
};
```

### Type

An input can have a custom text-based type such as `email`, `url`, or `password` based on the type of value the user will enter.

Note that no custom styling is currently applied for alternative types, and some types may activate browser-default styling which does not match the Fluent design language.

```jsx
import * as React from "react";
import { makeStyles, useId, Input, Label } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",

    maxWidth: "400px",
    // Stack the label above the field (with 2px gap per the design system)
    "> div": { display: "flex", flexDirection: "column", gap: "2px" },
  },
});

export const Type = () => {
  const emailId = useId("input-email");
  const urlId = useId("input-url");
  const passwordId = useId("input-password");
  const styles = useStyles();

  return (
    <form noValidate autoComplete="off" className={styles.root}>
      <div>
        <Label htmlFor={emailId}>Email input</Label>
        <Input type="email" id={emailId} />
      </div>

      <div>
        <Label htmlFor={urlId}>URL input</Label>
        <Input type="url" id={urlId} />
      </div>

      <div>
        <Label htmlFor={passwordId}>Password input</Label>
        <Input type="password" defaultValue="password" id={passwordId} />
      </div>
    </form>
  );
};
```

### Uncontrolled

By default, an input is uncontrolled: it tracks all updates internally. You can optionally provide a default value.

```jsx
import * as React from "react";
import { makeStyles, useId, Input, Label } from "@fluentui/react-components";
import type { InputProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field
    display: "flex",
    flexDirection: "column",
    // Use 2px gap below the label (per the design system)
    gap: "2px",
    // Prevent the example from taking the full width of the page (optional)
    maxWidth: "400px",
  },
});

const onChange: InputProps["onChange"] = (ev, data) => {
  // Uncontrolled inputs can be notified of changes to the value
  console.log(`New value: "${data.value}"`);
};

export const Uncontrolled = () => {
  const inputId = useId("input");
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Label htmlFor={inputId}>Uncontrolled input with default value</Label>
      <Input defaultValue="default value" onChange={onChange} id={inputId} />
    </div>
  );
};
```

### Controlled

An input can be controlled: the consuming component tracks the input's value in its state and manually handles all updates.

```jsx
import * as React from "react";
import { makeStyles, useId, Input, Label } from "@fluentui/react-components";
import type { InputProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    // Use 2px gap below the label (per the design system)
    gap: "2px",
    // Prevent the example from taking the full width of the page (optional)
    maxWidth: "400px",
  },
});

export const Controlled = () => {
  const inputId = useId("input");
  const [value, setValue] = React.useState("initial value");
  const styles = useStyles();

  const onChange: InputProps["onChange"] = (ev, data) => {
    // The controlled input pattern can be used for other purposes besides validation,
    // but validation is a useful example
    if (data.value.length <= 20) {
      setValue(data.value);
    }
  };

  return (
    <div className={styles.root}>
      <Label htmlFor={inputId}>
        Controlled input limiting the value to 20 characters
      </Label>
      <Input value={value} onChange={onChange} id={inputId} />
    </div>
  );
};
```