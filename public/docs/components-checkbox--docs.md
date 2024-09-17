# Checkbox

```jsx
import * as React from "react";
import { Checkbox } from "@fluentui/react-components";
import type { CheckboxProps } from "@fluentui/react-components";

export const Default = (props: CheckboxProps) => <Checkbox {...props} />;
```

### Default

```jsx
import * as React from "react";
import { Checkbox } from "@fluentui/react-components";
import type { CheckboxProps } from "@fluentui/react-components";

export const Default = (props: CheckboxProps) => <Checkbox {...props} />;
```

### Checked

A checkbox can be initially checked using `defaultChecked`, or controlled via the `checked` property.

```jsx
import * as React from "react";
import { Checkbox } from "@fluentui/react-components";
import type { CheckboxProps } from "@fluentui/react-components";

export const Checked = () => {
  const [checked, setChecked] = React.useState<CheckboxProps["checked"]>(true);

  return (
    <Checkbox
      checked={checked}
      onChange={(ev, data) => setChecked(data.checked)}
      label="Checked"
    />
  );
};
```

### Mixed

A checkbox can be initially mixed (also known as indeterminate) using `defaultChecked="mixed"`, or controlled via `checked="mixed"`.  
In this example, the mixed state is used when a group of options has differing values.

```jsx
import * as React from "react";
import { Checkbox } from "@fluentui/react-components";

export const Mixed = () => {
  const [option1, setOption1] = React.useState(false);
  const [option2, setOption2] = React.useState(true);
  const [option3, setOption3] = React.useState(false);

  return (
    <>
      <Checkbox
        checked={
          option1 && option2 && option3
            ? true
            : !(option1 || option2 || option3)
            ? false
            : "mixed"
        }
        onChange={(_ev, data) => {
          setOption1(!!data.checked);
          setOption2(!!data.checked);
          setOption3(!!data.checked);
        }}
        label="All options"
      />

      <Checkbox
        checked={option1}
        onChange={() => setOption1((checked) => !checked)}
        label="Option 1"
      />
      <Checkbox
        checked={option2}
        onChange={() => setOption2((checked) => !checked)}
        label="Option 2"
      />
      <Checkbox
        checked={option3}
        onChange={() => setOption3((checked) => !checked)}
        label="Option 3"
      />
    </>
  );
};
```

### Disabled

A checkbox can be disabled.

```jsx
import * as React from "react";
import { Checkbox } from "@fluentui/react-components";

export const Disabled = () => (
  <>
    <Checkbox disabled label="Disabled" />
    <Checkbox disabled label="Disabled checked" checked />
    <Checkbox disabled label="Disabled mixed" checked="mixed" />
  </>
);
```

### Large

A checkbox can be large in size.

```jsx
import * as React from "react";
import { Checkbox } from "@fluentui/react-components";

export const Large = () => <Checkbox size="large" label="Large" />;
```

### Label Before

The label can be placed before the checkbox.

```jsx
import * as React from "react";
import { Checkbox } from "@fluentui/react-components";

export const LabelBefore = () => (
  <Checkbox labelPosition="before" label="Label before" />
);
```

### Label Wrapping

The label will wrap if it is wider than the available space. The checkbox indicator will stay aligned to the first line of text.

```jsx
import * as React from "react";
import { Checkbox } from "@fluentui/react-components";

export const LabelWrapping = () => (
  <Checkbox
    style={{ maxWidth: "400px" }}
    label="Here is an example of a checkbox with a long label and it starts to wrap to a second line"
  />
);
```

### Required

When a checkbox is marked as `required`, its label also gets the required styling.

```jsx
import * as React from "react";
import { Checkbox } from "@fluentui/react-components";

export const Required = () => <Checkbox required label="Required" />;
```

### Circular

A checkbox can have a circular shape.  
**Usage warning**: Unless you are designing a tasks experience, we strongly discourage using this styling variant, as it can be confused with `RadioItem`.

```jsx
import * as React from "react";
import { Checkbox } from "@fluentui/react-components";

export const Circular = () => <Checkbox shape="circular" label="Circular" />;
```