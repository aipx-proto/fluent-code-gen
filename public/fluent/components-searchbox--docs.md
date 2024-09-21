# SearchBox

[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}import { SearchBox } from '@fluentui/react-components';Copy The SearchBox component allows the users to access information with ease, providing flexibility and the ability to clear and filter the search.

```jsx
import * as React from "react";
import type { ArgTypes } from "@storybook/react";
import { Field, SearchBox } from "@fluentui/react-components";
import type { SearchBoxProps } from "@fluentui/react-components";

export const Default = (props: SearchBoxProps) => {
  return (
    <Field label="Sample SearchBox">
      <SearchBox {...props} />
    </Field>
  );
};

const argTypes: ArgTypes = {
  // Add these native props to the props table and controls pane
  placeholder: {
    description:
      "Placeholder text for the SearchBox. If using this instead of a label (which is " +
      "not recommended), be sure to provide an `aria-label` for screen reader users.",
    type: { name: "string", required: false }, // for inferring control type
    table: { type: { summary: "string" } }, // for showing type in prop table
  },
  disabled: {
    description: "Whether the SearchBox is disabled",
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
import { Field, SearchBox } from "@fluentui/react-components";
import type { SearchBoxProps } from "@fluentui/react-components";

export const Default = (props: SearchBoxProps) => {
  return (
    <Field label="Sample SearchBox">
      <SearchBox {...props} />
    </Field>
  );
};

const argTypes: ArgTypes = {
  // Add these native props to the props table and controls pane
  placeholder: {
    description:
      "Placeholder text for the SearchBox. If using this instead of a label (which is " +
      "not recommended), be sure to provide an `aria-label` for screen reader users.",
    type: { name: "string", required: false }, // for inferring control type
    table: { type: { summary: "string" } }, // for showing type in prop table
  },
  disabled: {
    description: "Whether the SearchBox is disabled",
    type: { name: "boolean", required: false },
    table: { type: { summary: "boolean" } },
  },
  // Hide these from the props table and controls pane
  children: { table: { disable: true } },
  as: { table: { disable: true } },
};
```

### Appearance

A SearchBox can have different appearances. The colors adjacent to the SearchBox should have a sufficient contrast. Particularly, the color of SearchBox with filled darker and lighter styles needs to provide greater than 3 to 1 contrast ratio against the immediate surrounding color to pass accessibility requirements.

```jsx
import * as React from "react";
import {
  Field,
  makeStyles,
  mergeClasses,
  SearchBox,
  tokens,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
  },
  filledLighter: {
    backgroundColor: tokens.colorNeutralBackgroundInverted,
  },
  filledLighterLabel: {
    color: tokens.colorNeutralForegroundInverted2,
  },
  filledDarker: {
    backgroundColor: tokens.colorNeutralBackgroundInverted,
  },
  filledDarkerLabel: {
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
      <Field
        className={styles.fieldWrapper}
        label="Outline appearance (default)"
      >
        <SearchBox appearance="outline" />
      </Field>

      <Field className={styles.fieldWrapper} label="Underline appearance">
        <SearchBox appearance="underline" />
      </Field>

      <Field
        className={mergeClasses(styles.fieldWrapper, styles.filledLighter)}
        label={{
          children: "Filled lighter appearance",
          className: styles.filledLighterLabel,
        }}
      >
        <SearchBox appearance="filled-lighter" />
      </Field>

      <Field
        className={mergeClasses(styles.fieldWrapper, styles.filledDarker)}
        label={{
          children: "Filled darker appearance",
          className: styles.filledDarkerLabel,
        }}
      >
        <SearchBox appearance="filled-darker" />
      </Field>
    </div>
  );
};
```

### Content before/after

A SearchBox supports a custom element such as an icon or a button before the input text. Additionally, a SearchBox supports an custom element that appears on focus, following the input text and before the dismiss button. These elements are displayed inside the SearchBox border.

```jsx
import * as React from "react";
import {
  Button,
  ButtonProps,
  Field,
  makeStyles,
  SearchBox,
  Text,
  tokens,
} from "@fluentui/react-components";
import { PersonRegular, MicRegular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  fieldWrapper: {
    padding: `${tokens.spacingVerticalMNudge} ${tokens.spacingHorizontalMNudge}`,
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
  return (
    <div className={styles.root}>
      <Field
        className={styles.fieldWrapper}
        label="Search by name"
        hint={
          <>
            A SearchBox with a custom icon in the <code>contentBefore</code>{" "}
            slot.
          </>
        }
      >
        <SearchBox contentBefore={<PersonRegular />} />
      </Field>

      <Field
        className={styles.fieldWrapper}
        label="Search by voice"
        hint={
          <>
            A SearchBox with a button in the <code>contentAfter</code> slot.
          </>
        }
      >
        <SearchBox contentAfter={<MicButton aria-label="Search by voice" />} />
      </Field>

      <Field
        className={styles.fieldWrapper}
        label="Search with filter"
        hint={
          <>
            A SearchBox with a presentational value in the{" "}
            <code>contentBefore</code> slot and another presentational value in
            the <code>contentAfter</code> slot.
          </>
        }
      >
        <SearchBox
          contentBefore={<Text size={400}>Search:</Text>}
          contentAfter={<Text size={400}>Filter</Text>}
        />
      </Field>
    </div>
  );
};
```

### Disabled

A SearchBox can be disabled.

```jsx
import * as React from "react";
import { Field, SearchBox } from "@fluentui/react-components";

export const Disabled = () => {
  return (
    <Field label="Disabled SearchBox">
      <SearchBox disabled defaultValue="disabled value" />
    </Field>
  );
};
```

### Placeholder

A SearchBox can have placeholder text. If using the placeholder as a label (which is not recommended for usability), be sure to provide an `aria-label` for screen reader users.

```jsx
import * as React from "react";
import { Field, SearchBox } from "@fluentui/react-components";

export const Placeholder = () => {
  return (
    <Field label="SearchBox with a placeholder">
      <SearchBox placeholder="This is a placeholder" />
    </Field>
  );
};
```

### Size

A SearchBox can have different sizes.

```jsx
import * as React from "react";
import {
  Field,
  makeStyles,
  SearchBox,
  tokens,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  fieldWrapper: {
    padding: `${tokens.spacingVerticalMNudge} ${tokens.spacingHorizontalMNudge}`,
  },
});

export const Size = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Field className={styles.fieldWrapper} label="Small SearchBox">
        <SearchBox size="small" />
      </Field>

      <Field className={styles.fieldWrapper} label="Medium SearchBox">
        <SearchBox size="medium" />
      </Field>

      <Field className={styles.fieldWrapper} label="Large SearchBox">
        <SearchBox size="large" />
      </Field>
    </div>
  );
};
```

### Controlled

A SearchBox can be controlled: the consuming component tracks the SearchBox's value in its state and manually handles all updates.

```jsx
import * as React from "react";
import {
  Field,
  InputOnChangeData,
  SearchBox,
} from "@fluentui/react-components";
import type { SearchBoxChangeEvent } from "@fluentui/react-components";

export const Controlled = () => {
  const [value, setValue] = React.useState("initial value");
  const [valid, setValid] = React.useState(true);

  const onChange: (
    ev: SearchBoxChangeEvent,
    data: InputOnChangeData
  ) => void = (_, data) => {
    if (data.value.length <= 20) {
      setValue(data.value);
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <Field
      label="Controlled SearchBox limiting the value to 20 characters"
      validationState={valid ? "none" : "warning"}
      validationMessage={valid ? "" : "Input is limited to 20 characters."}
    >
      <SearchBox value={value} onChange={onChange} />
    </Field>
  );
};
```