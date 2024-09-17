# SpinButton

```jsx
import * as React from "react";
import {
  makeStyles,
  tokens,
  useId,
  Label,
  SpinButton,
} from "@fluentui/react-components";

const useLayoutStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",

    "> label": {
      marginBottom: tokens.spacingVerticalXXS,
    },
  },
});

export const Default = () => {
  const layoutStyles = useLayoutStyles();
  const id = useId();

  return (
    <div className={layoutStyles.base}>
      <Label htmlFor={id}>Default SpinButton</Label>
      <SpinButton defaultValue={10} min={0} max={20} id={id} />
    </div>
  );
};
```

### Default

```jsx
import * as React from "react";
import {
  makeStyles,
  tokens,
  useId,
  Label,
  SpinButton,
} from "@fluentui/react-components";

const useLayoutStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",

    "> label": {
      marginBottom: tokens.spacingVerticalXXS,
    },
  },
});

export const Default = () => {
  const layoutStyles = useLayoutStyles();
  const id = useId();

  return (
    <div className={layoutStyles.base}>
      <Label htmlFor={id}>Default SpinButton</Label>
      <SpinButton defaultValue={10} min={0} max={20} id={id} />
    </div>
  );
};
```

### Controlled

SpinButton can be a controlled input where the value and, optionally, the display value are stored in state and updated with `onChange`.

```jsx
import * as React from "react";
import {
  makeStyles,
  tokens,
  useId,
  Label,
  SpinButton,
} from "@fluentui/react-components";
import type { SpinButtonProps } from "@fluentui/react-components";

const useLayoutStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",

    "> label": {
      marginBottom: tokens.spacingVerticalXXS,
    },
  },
});

export const Controlled = () => {
  const layoutStyles = useLayoutStyles();
  const id = useId();

  const [spinButtonValue, setSpinButtonValue] = React.useState<number | null>(
    10
  );

  const onSpinButtonChange: SpinButtonProps["onChange"] = React.useCallback(
    (_ev, data) => {
      console.log("onSpinButtonChange", data.value, data.displayValue);
      if (data.value !== undefined) {
        setSpinButtonValue(data.value);
      } else if (data.displayValue !== undefined) {
        const newValue = parseFloat(data.displayValue);
        if (!Number.isNaN(newValue)) {
          setSpinButtonValue(newValue);
        } else {
          console.error(`Cannot parse "${data.displayValue}" as a number.`);
        }
      }
    },
    [setSpinButtonValue]
  );

  return (
    <div className={layoutStyles.base}>
      <Label htmlFor={id}>Controlled SpinButton</Label>
      <SpinButton
        value={spinButtonValue}
        onChange={onSpinButtonChange}
        id={id}
      />
    </div>
  );
};
```

### Uncontrolled

An uncontrolled SpinButton

```jsx
import * as React from "react";
import {
  makeStyles,
  tokens,
  useId,
  Label,
  SpinButton,
} from "@fluentui/react-components";

const useLayoutStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",

    "> label": {
      marginBottom: tokens.spacingVerticalXXS,
    },
  },
});

export const Uncontrolled = () => {
  const layoutStyles = useLayoutStyles();
  const id = useId();

  return (
    <div className={layoutStyles.base}>
      <Label htmlFor={id}>Uncontrolled SpinButton</Label>
      <SpinButton defaultValue={10} id={id} />
    </div>
  );
};
```

### Bounds

SpinButton can be bounded with the `min` and `max` props. Using the spin buttons or hotkeys will clamp values in the range of \[min, max\]. Users may type a value outside the range into the text input and it will not be clamped by the control. Pressing the "home" key will set the value to `min` and pressing the "end" key will set the value to `max` when the props are set.

```jsx
import * as React from "react";
import {
  makeStyles,
  tokens,
  useId,
  Label,
  SpinButton,
} from "@fluentui/react-components";

const useLayoutStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",

    "> label": {
      marginBottom: tokens.spacingVerticalXXS,
    },
  },
});

export const Bounds = () => {
  const layoutStyles = useLayoutStyles();
  const id = useId();

  return (
    <div className={layoutStyles.base}>
      <Label htmlFor={id}>Bounded SpinButton</Label>
      <SpinButton defaultValue={10} min={0} max={20} id={id} />
      <p>min: 0, max: 20</p>
    </div>
  );
};
```

### Display Value

SpinButton supports formatted display values.

```jsx
import * as React from "react";
import {
  makeStyles,
  tokens,
  useId,
  Label,
  SpinButton,
} from "@fluentui/react-components";
import type { SpinButtonProps } from "@fluentui/react-components";

const useLayoutStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",

    "> label": {
      marginBottom: tokens.spacingVerticalXXS,
    },
  },
});

type FormatterFn = (value: number) => string;
type ParserFn = (formattedValue: string) => number;

export const DisplayValue = () => {
  const formatter: FormatterFn = (value) => {
    return `$${value}`;
  };

  const parser: ParserFn = (formattedValue) => {
    if (formattedValue === null) {
      return NaN;
    }

    return parseFloat(formattedValue.replace("$", ""));
  };

  const onSpinButtonChange: SpinButtonProps["onChange"] = (_ev, data) => {
    if (data.value !== undefined && data.value !== null) {
      setSpinButtonValue(data.value);
      setSpinButtonDisplayValue(formatter(data.value));
    } else if (data.displayValue !== undefined) {
      const newValue = parser(data.displayValue);
      if (!Number.isNaN(newValue)) {
        setSpinButtonValue(newValue);
        setSpinButtonDisplayValue(formatter(newValue));
      } else {
        // Display a "special" value when user types something
        // that's not parsable as a number.
        setSpinButtonValue(null);
        setSpinButtonDisplayValue("(null)");
      }
    }
  };

  const layoutStyles = useLayoutStyles();
  const id = useId();
  const [spinButtonValue, setSpinButtonValue] = React.useState<number | null>(
    1
  );
  const [spinButtonDisplayValue, setSpinButtonDisplayValue] = React.useState(
    formatter(1)
  );

  return (
    <div className={layoutStyles.base}>
      <Label htmlFor={id}>Display Value</Label>
      <SpinButton
        value={spinButtonValue}
        displayValue={spinButtonDisplayValue}
        onChange={onSpinButtonChange}
        id={id}
      />
    </div>
  );
};
```

### Step

SpinButton step size can be set. Additionally `stepPage` can be set to a large value to allow bulk steps via the `Page Up` and `Page Down` keys.

```jsx
import * as React from "react";
import {
  makeStyles,
  tokens,
  useId,
  Label,
  SpinButton,
} from "@fluentui/react-components";

const useLayoutStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",

    "> label": {
      marginBottom: tokens.spacingVerticalXXS,
    },
  },
});

export const Step = () => {
  const layoutStyles = useLayoutStyles();
  const id = useId();

  return (
    <div className={layoutStyles.base}>
      <Label htmlFor={id}>Step Size</Label>
      <SpinButton defaultValue={10} step={2} stepPage={20} id={id} />
    </div>
  );
};
```

### Size

SpinButton can have different sizes.

```jsx
import * as React from "react";
import {
  makeStyles,
  tokens,
  useId,
  Label,
  SpinButton,
} from "@fluentui/react-components";

const useLayoutStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",

    "> div": {
      display: "flex",
      flexDirection: "column",
      marginTop: tokens.spacingHorizontalMNudge,
    },

    "> div:first-child": {
      marginTop: "0px",
    },

    "> div label": {
      marginBottom: tokens.spacingVerticalXXS,
    },
  },
});

export const Size = () => {
  const layoutStyles = useLayoutStyles();
  const smallId = useId("small-id");
  const mediumId = useId("medium-id");

  return (
    <div className={layoutStyles.base}>
      <div>
        <Label htmlFor={smallId}>Small</Label>
        <SpinButton size="small" id={smallId} />
      </div>

      <div>
        <Label htmlFor={mediumId}>Medium (default)</Label>
        <SpinButton id={mediumId} />
      </div>
    </div>
  );
};
```

### Appearance

SpinButton can have different appearances. The colors adjacent to the input should have a sufficient contrast. Particularly, the color of input with filled darker and lighter styles needs to provide greater than 3 to 1 contrast ratio against the immediate surrounding color to pass accessibility requirements.

```jsx
import * as React from "react";
import {
  makeStyles,
  mergeClasses,
  tokens,
  useId,
  Label,
  SpinButton,
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
  const styles = useStyles();

  const outlineId = useId("outline-id");
  const underlineId = useId("underline-id");
  const filledLighterId = useId("filledLighter-id");
  const filledDarkerId = useId("filledDarker-id");

  return (
    <div className={styles.base}>
      <div className={styles.field}>
        <Label htmlFor={outlineId}>Outline (default)</Label>
        <SpinButton id={outlineId} />
      </div>

      <div className={styles.field}>
        <Label htmlFor={underlineId}>Underline</Label>
        <SpinButton appearance="underline" id={underlineId} />
      </div>

      <div className={mergeClasses(styles.field, styles.filledLighter)}>
        <Label htmlFor={filledLighterId}>Filled Lighter</Label>
        <SpinButton appearance="filled-lighter" id={filledLighterId} />
      </div>

      <div className={mergeClasses(styles.field, styles.filledDarker)}>
        <Label htmlFor={filledDarkerId}>Filled Darker</Label>
        <SpinButton appearance="filled-darker" id={filledDarkerId} />
      </div>
    </div>
  );
};
```

### Disabled

SpinButton can be disabled.

```jsx
import * as React from "react";
import {
  makeStyles,
  tokens,
  useId,
  Label,
  SpinButton,
} from "@fluentui/react-components";

const useLayoutStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",

    "> label": {
      marginBottom: tokens.spacingVerticalXXS,
    },
  },
});

export const Disabled = () => {
  const layoutStyles = useLayoutStyles();
  const id = useId();

  return (
    <div className={layoutStyles.base}>
      <Label htmlFor={id}>Disabled</Label>
      <SpinButton disabled id={id} />
    </div>
  );
};
```