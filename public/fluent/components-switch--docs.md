# Switch

A switch represents a physical switch that allows someone to choose between two mutually exclusive options. For example, "On/Off" and "Show/Hide". Choosing an option should produce an immediate result.

```jsx
import * as React from "react";
import { Switch } from "@fluentui/react-components";
import type { SwitchProps } from "@fluentui/react-components";

export const Default = (props: SwitchProps) => (
  <Switch label="This is a switch" {...props} />
);
```

### Default

```jsx
import * as React from "react";
import { Switch } from "@fluentui/react-components";
import type { SwitchProps } from "@fluentui/react-components";

export const Default = (props: SwitchProps) => (
  <Switch label="This is a switch" {...props} />
);
```

### Checked

A Switch can be initially checked by passing a value to the `defaultChecked` property, or have its checked value controlled via the `checked` property.

```jsx
import * as React from "react";
import { Switch } from "@fluentui/react-components";

export const Checked = () => {
  const [checked, setChecked] = React.useState(true);
  const onChange = React.useCallback(
    (ev) => {
      setChecked(ev.currentTarget.checked);
    },
    [setChecked]
  );

  return (
    <Switch
      checked={checked}
      onChange={onChange}
      label={checked ? "Checked" : "Unchecked"}
    />
  );
};
```

### Disabled

A Switch can be disabled.

```jsx
import * as React from "react";
import { Switch } from "@fluentui/react-components";

const wrapperStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

export const Disabled = () => (
  <div style={wrapperStyle}>
    <Switch disabled label="Unchecked and disabled" />
    <Switch checked disabled label="Checked and disabled" />
  </div>
);
```

### Label

A label can be provided to the Switch and is positioned above, before or after the component.

```jsx
import * as React from "react";
import { Switch } from "@fluentui/react-components";

const wrapperStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
};

export const Label = () => {
  const [checked, setChecked] = React.useState(false);
  const onChange = React.useCallback(
    (ev) => {
      setChecked(ev.currentTarget.checked);
    },
    [setChecked]
  );
  const [checked2, setChecked2] = React.useState(false);
  const onChange2 = React.useCallback(
    (ev) => {
      setChecked2(ev.currentTarget.checked);
    },
    [setChecked2]
  );
  const [checked3, setChecked3] = React.useState(false);
  const onChange3 = React.useCallback(
    (ev) => {
      setChecked3(ev.currentTarget.checked);
    },
    [setChecked3]
  );

  const checkedString = checked ? "checked" : "unchecked";
  const checkedString2 = checked2 ? "checked" : "unchecked";
  const checkedString3 = checked3 ? "checked" : "unchecked";

  return (
    <div style={wrapperStyle}>
      <Switch
        checked={checked}
        label={`With label before and ${checkedString}`}
        labelPosition="before"
        onChange={onChange}
      />

      <Switch
        checked={checked2}
        label={`With label above and ${checkedString2}`}
        labelPosition="above"
        onChange={onChange2}
      />

      <Switch
        checked={checked3}
        label={`With label after and ${checkedString3}`}
        labelPosition="after"
        onChange={onChange3}
      />
    </div>
  );
};
```

### Label Wrapping

The label will wrap if it is wider than the available space. The Switch track will stay aligned to the first line of text.

```jsx
import * as React from "react";
import { Switch } from "@fluentui/react-components";

export const LabelWrapping = () => (
  <Switch
    style={{ maxWidth: "400px" }}
    label="Here is an example of a Switch with a long label and it starts to wrap to a second line."
  />
);
```

### Required

When a Switch is marked as `required`, its label also gets the required styling.

```jsx
import * as React from "react";
import { Switch } from "@fluentui/react-components";

export const Required = () => <Switch required label="Required" />;
```