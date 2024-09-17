# RadioGroup

```jsx
import * as React from "react";

import type { RadioGroupProps } from "@fluentui/react-components";
import { Field, Radio, RadioGroup } from "@fluentui/react-components";

export const Default = (props: Partial<RadioGroupProps>) => (
  <Field label="Favorite Fruit">
    <RadioGroup {...props}>
      <Radio value="apple" label="Apple" />
      <Radio value="pear" label="Pear" />
      <Radio value="banana" label="Banana" />
      <Radio value="orange" label="Orange" />
    </RadioGroup>
  </Field>
);
```

### Default

```jsx
import * as React from "react";

import type { RadioGroupProps } from "@fluentui/react-components";
import { Field, Radio, RadioGroup } from "@fluentui/react-components";

export const Default = (props: Partial<RadioGroupProps>) => (
  <Field label="Favorite Fruit">
    <RadioGroup {...props}>
      <Radio value="apple" label="Apple" />
      <Radio value="pear" label="Pear" />
      <Radio value="banana" label="Banana" />
      <Radio value="orange" label="Orange" />
    </RadioGroup>
  </Field>
);
```

### Layout: horizontal

The `horizontal` layout places each radio item in a row, with labels after the radio indicator.

```jsx
import * as React from "react";

import { Field, Radio, RadioGroup } from "@fluentui/react-components";

export const Horizontal = () => (
  <Field label="Favorite Fruit">
    <RadioGroup layout="horizontal">
      <Radio value="apple" label="Apple" />
      <Radio value="pear" label="Pear" />
      <Radio value="banana" label="Banana" />
      <Radio value="orange" label="Orange" />
    </RadioGroup>
  </Field>
);
```

### Layout: horizontal-stacked

The `horizontal-stacked` layout places each radio item in a row, with labels below the radio indicator.

```jsx
import * as React from "react";

import { Field, Radio, RadioGroup } from "@fluentui/react-components";

export const HorizontalStacked = () => (
  <Field label="Favorite Fruit">
    <RadioGroup layout="horizontal-stacked">
      <Radio value="apple" label="Apple" />
      <Radio value="pear" label="Pear" />
      <Radio value="banana" label="Banana" />
      <Radio value="orange" label="Orange" />
    </RadioGroup>
  </Field>
);
```

### Default Value

The initially selected item can be set by setting the `defaultValue` of RadioGroup. Alternatively, one Radio item can have `defaultChecked` set. Both methods have the same effect, but only one should be used in a given RadioGroup.

```jsx
import * as React from "react";

import { Field, Radio, RadioGroup } from "@fluentui/react-components";

export const DefaultValue = () => (
  <Field label="Favorite Fruit">
    <RadioGroup defaultValue="pear">
      <Radio value="apple" label="Apple" />
      <Radio value="pear" label="Pear" />
      <Radio value="banana" label="Banana" />
      <Radio value="orange" label="Orange" />
    </RadioGroup>
  </Field>
);
```

### Controlled Value

The selected radio item can be controlled using the `value` and `onChange` props.

```jsx
import * as React from "react";

import { Field, Radio, RadioGroup, Button } from "@fluentui/react-components";

export const ControlledValue = () => {
  const [value, setValue] = React.useState("banana");
  return (
    <>
      <Field label="Favorite Fruit">
        <RadioGroup value={value} onChange={(_, data) => setValue(data.value)}>
          <Radio value="apple" label="Apple" />
          <Radio value="pear" label="Pear" />
          <Radio value="banana" label="Banana" />
          <Radio value="orange" label="Orange" />
        </RadioGroup>
      </Field>
      <Button disabled={!value} onClick={() => setValue("")}>
        Clear selection
      </Button>
    </>
  );
};
```

### Required

Use the `required` prop to indicate that one of the radio items must be selected. Or, if the RadioGroup is inside a Field, it will inherit the `required` prop from the Field.

```jsx
import * as React from "react";

import { Field, Radio, RadioGroup } from "@fluentui/react-components";

export const Required = () => (
  <Field label="Favorite Fruit" required>
    <RadioGroup>
      <Radio value="apple" label="Apple" />
      <Radio value="pear" label="Pear" />
      <Radio value="banana" label="Banana" />
      <Radio value="orange" label="Orange" />
    </RadioGroup>
  </Field>
);
```

### Disabled

RadioGroup can be disabled, which disables all Radio items inside.

```jsx
import * as React from "react";

import { Field, Radio, RadioGroup } from "@fluentui/react-components";

export const Disabled = () => (
  <Field label="Favorite Fruit">
    <RadioGroup defaultValue="apple" disabled>
      <Radio value="apple" label="Apple" />
      <Radio value="pear" label="Pear" />
      <Radio value="banana" label="Banana" />
      <Radio value="orange" label="Orange" />
    </RadioGroup>
  </Field>
);
```

### Disabled Item

Radio items can be disabled individually.

```jsx
import * as React from "react";

import { Field, Radio, RadioGroup } from "@fluentui/react-components";

export const DisabledItem = () => (
  <Field label="Favorite Fruit">
    <RadioGroup defaultValue="apple">
      <Radio value="apple" label="Apple" />
      <Radio value="pear" label="Pear" />
      <Radio value="banana" label="Banana" disabled />
      <Radio value="orange" label="Orange" />
    </RadioGroup>
  </Field>
);
```

### Label Subtext

Radio's label supports any formatted text. In this example, smaller text is below the main label text.

```jsx
import * as React from "react";

import { Field, Radio, RadioGroup, Text } from "@fluentui/react-components";

export const LabelSubtext = () => (
  <Field label="Favorite Fruit">
    <RadioGroup>
      <Radio
        value="A"
        label={
          <>
            Banana
            <br />
            <Text size={200}>
              This is an example subtext of the first option
            </Text>
          </>
        }
      />

      <Radio
        value="B"
        label={
          <>
            Pear
            <br />
            <Text size={200}>This is some more example subtext</Text>
          </>
        }
      />
    </RadioGroup>
  </Field>
);
```