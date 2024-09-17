# Field

```jsx
import * as React from "react";

import type { FieldProps } from "@fluentui/react-components";
import { Field, Input } from "@fluentui/react-components";

export const Default = (props: Partial<FieldProps>) => (
  <Field
    label="Example field"
    validationState="success"
    validationMessage="This is a success message."
    {...props}
  >
    <Input />
  </Field>
);
```

### Default

```jsx
import * as React from "react";

import type { FieldProps } from "@fluentui/react-components";
import { Field, Input } from "@fluentui/react-components";

export const Default = (props: Partial<FieldProps>) => (
  <Field
    label="Example field"
    validationState="success"
    validationMessage="This is a success message."
    {...props}
  >
    <Input />
  </Field>
);
```

### Horizontal Orientation

Setting `orientation="horizontal"` places the label beside the input. The validationMessage and hint still appear below the input.  
The label width is a fixed 33% of the width of the field. This makes it so horizontal fields are aligned when stacked together.

```jsx
import * as React from "react";

import { Field, Input } from "@fluentui/react-components";

export const Horizontal = () => (
  <Field
    label="Horizontal"
    orientation="horizontal"
    hint="Validation message and hint are below the input."
  >
    <Input />
  </Field>
);
```

### Required

When a Field is marked as `required`, the label has a red asterisk, and the input gets the `aria-required` property for accessiblity tools.

```jsx
import * as React from "react";

import { Field, Input } from "@fluentui/react-components";

export const Required = () => (
  <Field label="Required field" required>
    <Input />
  </Field>
);
```

### Info button

Add an info button to the label by replacing the Field's label with an `InfoLabel`. This can be done using a slot render function. See the code from this story for more details.

```jsx
import * as React from "react";

import { Field, Input, LabelProps } from "@fluentui/react-components";
import { InfoLabel } from "@fluentui/react-components";

export const Info = () => (
  <Field
    label={{
      // Setting children to a render function allows you to replace the entire slot.
      // The first param is the component for the slot (Label), which we're ignoring to use InfoLabel instead.
      // The second param are the props for the slot, which need to be passed to the InfoLabel.
      children: (_: unknown, slotProps: LabelProps) => (
        <InfoLabel {...slotProps} info="Example info">
          Field with an info button
        </InfoLabel>
      ),
    }}
  >
    <Input />
  </Field>
);
```

### Disabled control

When the control inside the Field is disabled, the label should _not_ be marked disabled. This ensures the label remains readable to users.

```jsx
import * as React from "react";

import { Field, Input } from "@fluentui/react-components";

export const Disabled = () => (
  <Field label="Field with disabled control">
    <Input disabled />
  </Field>
);
```

### Size

The `size` prop affects the size of the Field's label, as well as form controls that support a `size` prop.

```jsx
import * as React from "react";

import {
  Field,
  Input,
  makeResetStyles,
  tokens,
} from "@fluentui/react-components";

const useStackClassName = makeResetStyles({
  display: "flex",
  flexDirection: "column",
  rowGap: tokens.spacingVerticalL,
});

export const Size = () => (
  <div className={useStackClassName()}>
    <Field label="Size small" size="small">
      <Input />
    </Field>
    <Field label="Size medium" size="medium">
      <Input />
    </Field>
    <Field label="Size large" size="large">
      <Input />
    </Field>
  </div>
);
```

### Validation Message

The `validationMessage` is used to give the user feedback about the value entered. Field does not do validation itself, but can be used to report the result of form validation.

The `validationState` affects the behavior and appearance of the message:

*   `error` - (default) The validation message has red text with a red error icon. It has `role="alert"` so it is announced by accessibility tools. Additionally, the control inside the field has `aria-invalid` set, which adds a red border to some field components (such as `Input`).
*   `success` - The validation message has gray text with a green checkmark icon.
*   `warning` - The validation message has gray text with a yellow exclamation icon.
*   `none` - The validation message has gray text with no icon.

Optionally, `validationMessageIcon` can be used to override the default icon (or add an icon in the case of `validationState="none"`).

```jsx
import * as React from "react";

import {
  Field,
  Input,
  makeResetStyles,
  tokens,
} from "@fluentui/react-components";
import { SparkleFilled } from "@fluentui/react-icons";

const useStackClassName = makeResetStyles({
  display: "flex",
  flexDirection: "column",
  rowGap: tokens.spacingVerticalL,
});

export const ValidationMessage = () => (
  <div className={useStackClassName()}>
    <Field label="Error state" validationMessage="This is an error message.">
      <Input />
    </Field>
    <Field
      label="Warning state"
      validationState="warning"
      validationMessage="This is a warning message."
    >
      <Input />
    </Field>
    <Field
      label="Success state"
      validationState="success"
      validationMessage="This is a success message."
    >
      <Input />
    </Field>
    <Field
      label="Custom state"
      validationState="none"
      validationMessageIcon={<SparkleFilled />}
      validationMessage="This is a custom message."
    >
      <Input />
    </Field>
  </div>
);
```

### Hint

The `hint` provides additional descriptive information about the field. Hint text should be used sparingly.

```jsx
import * as React from "react";

import { Field, Input } from "@fluentui/react-components";

export const Hint = () => (
  <Field label="Example with hint" hint="Sample hint text.">
    <Input />
  </Field>
);
```

### Component Examples

Field can be used with any input components in this library. This story shows some examples. It can also be used to add a label or error text to components like ProgressBar.

```jsx
import * as React from "react";

import {
  Checkbox,
  Combobox,
  Field,
  Input,
  makeResetStyles,
  Option,
  Radio,
  RadioGroup,
  Slider,
  SpinButton,
  Switch,
  Textarea,
  tokens,
} from "@fluentui/react-components";

const useStackClassName = makeResetStyles({
  display: "flex",
  flexDirection: "column",
  rowGap: tokens.spacingVerticalL,
});

export const ComponentExamples = () => (
  <div className={useStackClassName()}>
    <Field label="Input">
      <Input />
    </Field>
    <Field label="Textarea">
      <Textarea />
    </Field>
    <Field label="Combobox">
      <Combobox>
        <Option>Option 1</Option>
        <Option>Option 2</Option>
        <Option>Option 3</Option>
      </Combobox>
    </Field>
    <Field label="SpinButton">
      <SpinButton />
    </Field>
    <Field hint="Checkboxes use their own label instead of the Field label.">
      <Checkbox label="Checkbox" />
    </Field>
    <Field label="Slider">
      <Slider defaultValue={25} />
    </Field>
    <Field label="Switch">
      <Switch />
    </Field>
    <Field label="RadioGroup">
      <RadioGroup>
        <Radio label="Option 1" />
        <Radio label="Option 2" />
        <Radio label="Option 3" />
      </RadioGroup>
    </Field>
  </div>
);
```

### Third party controls a Field

Field uses context to associate its label and message text with its child form control. All of the form controls in this library support FieldContext.  
To use a third party control that does not support FieldContext, the child of Field may be a function that takes props to pass to the control. See the code in this example for more details.

```jsx
import * as React from "react";

import { Field, makeStyles } from "@fluentui/react-components";
import { AnimalCat24Regular } from "@fluentui/react-icons";

const useCatInputStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    columnGap: "4px",
  },
});

const CatInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  const styles = useCatInputStyles();
  return (
    <div className={styles.root}>
      <AnimalCat24Regular />
      <input {...props} />
    </div>
  );
};

export const RenderFunction = () => (
  <Field
    label="Third party input"
    hint="Use a render function to properly associate the label with the control."
  >
    {(fieldProps) => <CatInput {...fieldProps} />}
  </Field>
);
```