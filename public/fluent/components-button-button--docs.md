# Button

A button triggers an action or event when activated.

```jsx
import * as React from "react";
import { Button } from "@fluentui/react-components";
import type { ButtonProps } from "@fluentui/react-components";

export const Default = (props: ButtonProps) => (
  <Button {...props}>Example</Button>
);
```

### Default

```jsx
import * as React from "react";
import { Button } from "@fluentui/react-components";
import type { ButtonProps } from "@fluentui/react-components";

export const Default = (props: ButtonProps) => (
  <Button {...props}>Example</Button>
);
```

### Shape

A button can be rounded, circular, or square.

```jsx
import * as React from "react";
import { makeStyles, Button } from "@fluentui/react-components";

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
      <Button>Rounded</Button>
      <Button shape="circular">Circular</Button>
      <Button shape="square">Square</Button>
    </div>
  );
};
```

### Appearance

*   `(undefined)`: the button appears with the default style
*   `primary`: emphasizes the button as a primary action.
*   `outline`: removes background styling.
*   `subtle`: minimizes emphasis to blend into the background until hovered or focused
*   `transparent`: removes background and border styling.

```jsx
import * as React from "react";
import { makeStyles, Button } from "@fluentui/react-components";
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
  },
});

export const Appearance = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <Button icon={<CalendarMonthRegular />}>Default</Button>
      <Button appearance="primary" icon={<CalendarMonthRegular />}>
        Primary
      </Button>
      <Button appearance="outline" icon={<CalendarMonth />}>
        Outline
      </Button>
      <Button appearance="subtle" icon={<CalendarMonth />}>
        Subtle
      </Button>
      <Button appearance="transparent" icon={<CalendarMonth />}>
        Transparent
      </Button>
    </div>
  );
};
```

### Icon

Button has an `icon` slot that, if specified, renders an icon either `before` or `after` the children, as specified by the `iconPosition` prop.

```jsx
import * as React from "react";
import { makeStyles, Button, Tooltip } from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
  },
});

export const Icon = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <Button icon={<CalendarMonthRegular />}>
        With calendar icon before contents
      </Button>
      <Button icon={<CalendarMonthRegular />} iconPosition="after">
        With calendar icon after contents
      </Button>
      <Tooltip content="With calendar icon only" relationship="label">
        <Button icon={<CalendarMonthRegular />} />
      </Tooltip>
    </div>
  );
};
```

### Size

A button supports `small`, `medium` and `large` size. Default size is `medium`.

```jsx
import * as React from "react";
import { makeStyles, Button, Tooltip } from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  innerWrapper: {
    alignItems: "start",
    columnGap: "15px",
    display: "flex",
  },
  outerWrapper: {
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
    minWidth: "min-content",
  },
});

export const Size = () => {
  const styles = useStyles();

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <Button size="small">Small</Button>
        <Button size="small" icon={<CalendarMonthRegular />}>
          Small with calendar icon
        </Button>
        <Tooltip content="Small with calendar icon only" relationship="label">
          <Button size="small" icon={<CalendarMonthRegular />} />
        </Tooltip>
      </div>
      <div className={styles.innerWrapper}>
        <Button>Medium</Button>
        <Button icon={<CalendarMonthRegular />}>
          Medium with calendar icon
        </Button>
        <Tooltip content="Medium with calendar icon only" relationship="label">
          <Button icon={<CalendarMonthRegular />} />
        </Tooltip>
      </div>
      <div className={styles.innerWrapper}>
        <Button size="large">Large</Button>
        <Button size="large" icon={<CalendarMonthRegular />}>
          Large with calendar icon
        </Button>
        <Tooltip content="Large with calendar icon only" relationship="label">
          <Button size="large" icon={<CalendarMonthRegular />} />
        </Tooltip>
      </div>
    </div>
  );
};
```

### Disabled

A button can be `disabled` or `disabledFocusable`. `disabledFocusable` is used in scenarios where it is important to keep a consistent tab order for screen reader and keyboard users. The primary example of this pattern is when the disabled button is in a menu or a commandbar and is seldom used for standalone buttons.

```jsx
import * as React from "react";
import { makeStyles, Button } from "@fluentui/react-components";

const useStyles = makeStyles({
  innerWrapper: {
    columnGap: "15px",
    display: "flex",
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
        <Button>Enabled state</Button>
        <Button disabled>Disabled state</Button>
        <Button disabledFocusable>Disabled focusable state</Button>
      </div>
      <div className={styles.innerWrapper}>
        <Button appearance="primary">Enabled state</Button>
        <Button appearance="primary" disabled>
          Disabled state
        </Button>
        <Button appearance="primary" disabledFocusable>
          Disabled focusable state
        </Button>
      </div>
    </div>
  );
};
```

### Loading

You can customize a Button's contents and styles to simulate a convincing loading state.

```jsx
import { useTimeout } from "@fluentui/react-components";
import * as React from "react";
import {
  buttonClassNames,
  makeStyles,
  tokens,
  Button,
  Spinner,
} from "@fluentui/react-components";
import { CheckmarkFilled } from "@fluentui/react-icons";
// eslint-disable-next-line @fluentui/no-restricted-imports

const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
  },
  buttonNonInteractive: {
    backgroundColor: tokens.colorNeutralBackground1,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
    color: tokens.colorNeutralForeground1,
    cursor: "default",
    pointerEvents: "none",

    [`& .${buttonClassNames.icon}`]: {
      color: tokens.colorStatusSuccessForeground1,
    },
  },
});

type LoadingState = "initial" | "loading" | "loaded";

export const Loading = () => {
  const styles = useStyles();

  const [loadingState, setLoadingState] =
    React.useState<LoadingState>("initial");

  const [setTimeout, cancelTimeout] = useTimeout();

  const onButtonClick = () => {
    setLoadingState("loading");
    setTimeout(() => setLoadingState("loaded"), 5000);
  };

  const buttonContent =
    loadingState === "loading"
      ? "Loading"
      : loadingState === "loaded"
      ? "Loaded"
      : "Start loading";

  const buttonIcon =
    loadingState === "loading" ? (
      <Spinner size="tiny" />
    ) : loadingState === "loaded" ? (
      <CheckmarkFilled />
    ) : null;

  const buttonClassName =
    loadingState === "initial" ? undefined : styles.buttonNonInteractive;

  const onResetButtonClick = () => {
    cancelTimeout();
    setLoadingState("initial");
  };

  return (
    <div className={styles.wrapper}>
      <Button
        className={buttonClassName}
        disabledFocusable={loadingState !== "initial"}
        icon={buttonIcon}
        onClick={onButtonClick}
      >
        {buttonContent}
      </Button>
      <Button onClick={onResetButtonClick}>Reset loading state</Button>
    </div>
  );
};
```

### With Long Text

Text wraps after it hits the max width of the component.

```jsx
import * as React from "react";
import { makeStyles, Button } from "@fluentui/react-components";

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
      <Button>Short text</Button>
      <Button className={styles.longText}>
        Long text wraps after it hits the max width of the component
      </Button>
    </div>
  );
};
```