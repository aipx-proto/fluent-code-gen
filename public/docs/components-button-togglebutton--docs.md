# ToggleButton

```jsx
import * as React from "react";
import { ToggleButton } from "@fluentui/react-components";
import type { ToggleButtonProps } from "@fluentui/react-components";

export const Default = (props: ToggleButtonProps) => (
  <ToggleButton {...props}>Example</ToggleButton>
);
```

### Default

```jsx
import * as React from "react";
import { ToggleButton } from "@fluentui/react-components";
import type { ToggleButtonProps } from "@fluentui/react-components";

export const Default = (props: ToggleButtonProps) => (
  <ToggleButton {...props}>Example</ToggleButton>
);
```

### Shape

A toggle button can be rounded, circular, or square.

```jsx
import * as React from "react";
import { makeStyles, ToggleButton } from "@fluentui/react-components";

const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
    minWidth: "min-content",
  },
});

export const Shape = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <ToggleButton>Rounded</ToggleButton>
      <ToggleButton shape="circular">Circular</ToggleButton>
      <ToggleButton shape="square">Square</ToggleButton>
    </div>
  );
};
```

### Appearance

*   `(undefined)`: the toggle button appears with the default style
*   `primary`: emphasizes the toggle button as a primary action.
*   `outline`: removes background styling.
*   `subtle`: minimizes emphasis to blend into the background until hovered or focused
*   `transparent`: removes background and border styling.

```jsx
import * as React from "react";
import { makeStyles, ToggleButton } from "@fluentui/react-components";
import {
  bundleIcon,
  CalendarMonthFilled,
  CalendarMonthRegular,
} from "@fluentui/react-icons";

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);

const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
    minWidth: "min-content",
  },
});

export const Appearance = () => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const styles = useStyles();

  const toggleChecked = React.useCallback(
    (buttonIndex: number) => {
      switch (buttonIndex) {
        case 1:
          setChecked1(!checked1);
          break;
        case 2:
          setChecked2(!checked2);
          break;
      }
    },
    [checked1, checked2]
  );

  return (
    <div className={styles.wrapper}>
      <ToggleButton
        checked={checked1}
        icon={checked1 ? <CalendarMonth /> : <CalendarMonthRegular />}
        onClick={() => toggleChecked(1)}
      >
        Default
      </ToggleButton>
      <ToggleButton
        appearance="primary"
        checked={checked2}
        icon={checked2 ? <CalendarMonth /> : <CalendarMonthRegular />}
        onClick={() => toggleChecked(2)}
      >
        Primary
      </ToggleButton>
      <ToggleButton
        appearance="outline"
        icon={<CalendarMonth />}
        onClick={() => toggleChecked(3)}
      >
        Outline
      </ToggleButton>
      <ToggleButton appearance="subtle" icon={<CalendarMonth />}>
        Subtle
      </ToggleButton>
      <ToggleButton appearance="transparent" icon={<CalendarMonth />}>
        Transparent
      </ToggleButton>
    </div>
  );
};
```

### Icon

The ToggleButton has an `icon` slot that, if specified, renders an icon either `before` or `after` the children, as specified by the `iconPosition` prop.

```jsx
import * as React from "react";
import { makeStyles, ToggleButton, Tooltip } from "@fluentui/react-components";
import {
  bundleIcon,
  CalendarMonthFilled,
  CalendarMonthRegular,
} from "@fluentui/react-icons";

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);

const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
    minWidth: "min-content",
  },
});

export const Icon = () => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const styles = useStyles();

  const toggleChecked = React.useCallback(
    (buttonIndex: number) => {
      switch (buttonIndex) {
        case 1:
          setChecked1(!checked1);
          break;
        case 2:
          setChecked2(!checked2);
          break;
        case 3:
          setChecked3(!checked3);
          break;
      }
    },
    [checked1, checked2, checked3]
  );

  return (
    <div className={styles.wrapper}>
      <ToggleButton
        checked={checked1}
        icon={checked1 ? <CalendarMonth /> : <CalendarMonthRegular />}
        onClick={() => toggleChecked(1)}
      >
        With calendar icon before contents
      </ToggleButton>
      <ToggleButton
        checked={checked2}
        icon={checked2 ? <CalendarMonth /> : <CalendarMonthRegular />}
        iconPosition="after"
        onClick={() => toggleChecked(2)}
      >
        With calendar icon after contents
      </ToggleButton>
      <Tooltip content="With calendar icon only" relationship="label">
        <ToggleButton
          checked={checked3}
          icon={checked3 ? <CalendarMonth /> : <CalendarMonthRegular />}
          onClick={() => toggleChecked(3)}
        />
      </Tooltip>
    </div>
  );
};
```

### Size

A toggle button supports `small`, `medium` and `large` size. Default size is `medium`.

```jsx
import * as React from "react";
import { makeStyles, ToggleButton } from "@fluentui/react-components";

const useStyles = makeStyles({
  wrapper: {
    alignItems: "center",
    columnGap: "15px",
    display: "flex",
    minWidth: "min-content",
  },
});

export const Size = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <ToggleButton size="small">Size: small</ToggleButton>
      <ToggleButton size="medium">Size: medium</ToggleButton>
      <ToggleButton size="large">Size: large</ToggleButton>
    </div>
  );
};
```

### Disabled

A toggle button can be `disabled` or `disabledFocusable`. `disabledFocusable` is used in scenarios where it is important to keep a consistent tab order for screen reader and keyboard users. The primary example of this pattern is when the disabled toggle button is in a menu or a commandbar and is seldom used for standalone buttons.

```jsx
import * as React from "react";
import { makeStyles, ToggleButton } from "@fluentui/react-components";

const useStyles = makeStyles({
  innerWrapper: {
    columnGap: "15px",
    display: "flex",
    minWidth: "min-content",
  },
  outerWrapper: {
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
  },
});

export const Disabled = () => {
  const styles = useStyles();

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <ToggleButton>Enabled state</ToggleButton>
        <ToggleButton disabled>Disabled state</ToggleButton>
        <ToggleButton disabledFocusable>Disabled focusable state</ToggleButton>
      </div>
      <div className={styles.innerWrapper}>
        <ToggleButton appearance="primary">Enabled state</ToggleButton>
        <ToggleButton appearance="primary" disabled>
          Disabled state
        </ToggleButton>
        <ToggleButton appearance="primary" disabledFocusable>
          Disabled focusable state
        </ToggleButton>
      </div>
    </div>
  );
};
```

### Checked

A toggle button can be checked or unchecked. Unchecked is default. If a checked value is given, the button is 'controlled' and will only change state when the props value changes.

```jsx
import * as React from "react";
import { makeStyles, ToggleButton } from "@fluentui/react-components";

const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
    minWidth: "min-content",
  },
});

export const Checked = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <ToggleButton checked={true}>Controlled checked state</ToggleButton>
      <ToggleButton checked={false}>Controlled unchecked state</ToggleButton>
    </div>
  );
};
```

### With Long Text

Text wraps after it hits the max width of the component.

```jsx
import * as React from "react";
import { makeStyles, ToggleButton } from "@fluentui/react-components";

const useStyles = makeStyles({
  longText: {
    width: "280px",
  },
  wrapper: {
    alignItems: "center",
    columnGap: "15px",
    display: "flex",
    minWidth: "min-content",
  },
});

export const WithLongText = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <ToggleButton>Short text</ToggleButton>
      <ToggleButton className={styles.longText}>
        Long text wraps after it hits the max width of the component
      </ToggleButton>
    </div>
  );
};
```