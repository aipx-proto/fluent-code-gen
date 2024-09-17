# Select

```jsx
import * as React from "react";
import { Select, useId } from "@fluentui/react-components";
import type { SelectProps } from "@fluentui/react-components";

export const Default = (props: SelectProps) => {
  const selectId = useId();

  return (
    <>
      <label htmlFor={selectId}>Color</label>
      <Select id={selectId} {...props}>
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </Select>
    </>
  );
};
```

### Default

```jsx
import * as React from "react";
import { Select, useId } from "@fluentui/react-components";
import type { SelectProps } from "@fluentui/react-components";

export const Default = (props: SelectProps) => {
  const selectId = useId();

  return (
    <>
      <label htmlFor={selectId}>Color</label>
      <Select id={selectId} {...props}>
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </Select>
    </>
  );
};
```

### Appearance

Select can have different appearances. The colors adjacent to the input should have a sufficient contrast. Particularly, the color of input with filled darker and lighter styles needs to provide greater than 3 to 1 contrast ratio against the immediate surrounding color to pass accessibility requirements.

```jsx
import * as React from "react";
import {
  makeStyles,
  mergeClasses,
  Select,
  tokens,
  useId,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",
  },

  field: {
    display: "grid",
    gridRowGap: tokens.spacingVerticalXXS,
    marginTop: tokens.spacingVerticalMNudge,
    padding: `${tokens.spacingVerticalMNudge} ${tokens.spacingHorizontalMNudge}`,
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
  const styles = useStyles();
  const selectId = useId();

  return (
    <div className={styles.base}>
      <div className={styles.field}>
        <label htmlFor={`${selectId}-outline`}>Outline</label>
        <Select id={`${selectId}-outline`} appearance="outline">
          <option>Red</option>
          <option>Green</option>
          <option>Blue</option>
        </Select>
      </div>

      <div className={styles.field}>
        <label htmlFor={`${selectId}-underline`}>Underline</label>
        <Select id={`${selectId}-underline`} appearance="underline">
          <option>Red</option>
          <option>Green</option>
          <option>Blue</option>
        </Select>
      </div>

      <div className={mergeClasses(styles.field, styles.filledLighter)}>
        <label htmlFor={`${selectId}-filledLighter`}>Filled Lighter</label>
        <Select id={`${selectId}-filledLighter`} appearance="filled-lighter">
          <option>Red</option>
          <option>Green</option>
          <option>Blue</option>
        </Select>
      </div>

      <div className={mergeClasses(styles.field, styles.filledDarker)}>
        <label htmlFor={`${selectId}-filledDarker`}>Filled Darker</label>
        <Select id={`${selectId}-filledDarker`} appearance="filled-darker">
          <option>Red</option>
          <option>Green</option>
          <option>Blue</option>
        </Select>
      </div>
    </div>
  );
};
```

### Controlled

The value of a Select can be controlled by updating the `selected` prop on `option` elements.

```jsx
import * as React from "react";
import { Select, useId } from "@fluentui/react-components";
import type { SelectProps } from "@fluentui/react-components";

export const Controlled = () => {
  const selectId = useId();
  const [value, setValue] = React.useState("Red");

  const onChange: SelectProps["onChange"] = (event, data) => {
    setValue(data.value);
  };

  return (
    <>
      <label htmlFor={selectId}>Color</label>
      <Select id={selectId} onChange={onChange} value={value}>
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </Select>
      <button onClick={() => setValue("Blue")}>Select Blue</button>
    </>
  );
};
```

### Disabled

A Select can be disabled through the native `disabled` prop

```jsx
import * as React from "react";
import { Select, useId } from "@fluentui/react-components";

export const Disabled = () => {
  const selectId = useId();

  return (
    <>
      <label htmlFor={selectId}>Color</label>
      <Select disabled id={selectId}>
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </Select>
    </>
  );
};
```

### Initial Value

A Select can have its initial value defined by using the `defaultValue` prop.

```jsx
import * as React from "react";
import { Select, useId } from "@fluentui/react-components";

export const InitialValue = () => {
  const selectId = useId();

  return (
    <>
      <label htmlFor={selectId}>Color</label>
      <Select defaultValue="Green" id={selectId}>
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </Select>
    </>
  );
};
```

### Size

A Select's size can be set to `small`, `medium` (default), or `large`.

```jsx
import * as React from "react";
import { Select, useId } from "@fluentui/react-components";

export const Size = () => {
  const selectId = useId();

  return (
    <>
      <label htmlFor={`${selectId}-small`}>Small</label>
      <Select id={`${selectId}-small`} size="small">
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </Select>

      <label htmlFor={`${selectId}-med`}>Medium</label>
      <Select id={`${selectId}-med`} size="medium">
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </Select>

      <label htmlFor={`${selectId}-large`}>Large</label>
      <Select id={`${selectId}-large`} size="large">
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </Select>
    </>
  );
};
```