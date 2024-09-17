# CompoundButton

```jsx
import * as React from "react";
import { CompoundButton } from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";
import type { CompoundButtonProps } from "@fluentui/react-components";

export const Default = (props: CompoundButtonProps) => (
  <CompoundButton
    icon={<CalendarMonthRegular />}
    secondaryContent="Secondary content"
    {...props}
  >
    Example
  </CompoundButton>
);
```

### Default

```jsx
import * as React from "react";
import { CompoundButton } from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";
import type { CompoundButtonProps } from "@fluentui/react-components";

export const Default = (props: CompoundButtonProps) => (
  <CompoundButton
    icon={<CalendarMonthRegular />}
    secondaryContent="Secondary content"
    {...props}
  >
    Example
  </CompoundButton>
);
```

### Shape

A compound button can be rounded, circular, or square.

```jsx
import * as React from "react";
import { makeStyles, CompoundButton } from "@fluentui/react-components";

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
      <CompoundButton secondaryContent="Secondary content">
        Rounded
      </CompoundButton>
      <CompoundButton secondaryContent="Secondary content" shape="circular">
        Circular
      </CompoundButton>
      <CompoundButton secondaryContent="Secondary content" shape="square">
        Square
      </CompoundButton>
    </div>
  );
};
```

### Appearance

*   `(undefined)`: the compound button appears with the default style
*   `primary`: emphasizes the compound button as a primary action.
*   `outline`: removes background styling.
*   `subtle`: minimizes emphasis to blend into the background until hovered or focused
*   `transparent`: removes background and border styling.

```jsx
import * as React from "react";
import { makeStyles, CompoundButton } from "@fluentui/react-components";
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
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <CompoundButton
        secondaryContent="Secondary content"
        icon={<CalendarMonthRegular />}
      >
        Default
      </CompoundButton>
      <CompoundButton
        secondaryContent="Secondary content"
        appearance="primary"
        icon={<CalendarMonthRegular />}
      >
        Primary
      </CompoundButton>
      <CompoundButton
        secondaryContent="Secondary content"
        appearance="outline"
        icon={<CalendarMonth />}
      >
        Outline
      </CompoundButton>
      <CompoundButton
        secondaryContent="Secondary content"
        appearance="subtle"
        icon={<CalendarMonth />}
      >
        Subtle
      </CompoundButton>
      <CompoundButton
        secondaryContent="Secondary content"
        appearance="transparent"
        icon={<CalendarMonth />}
      >
        Transparent
      </CompoundButton>
    </div>
  );
};
```

### Icon

The CompoundButton has an `icon` slot that, if specified, renders an icon either `before` or `after` the children, as specified by the `iconPosition` prop.

```jsx
import * as React from "react";
import {
  makeStyles,
  CompoundButton,
  Tooltip,
} from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  wrapper: {
    alignItems: "center",
    columnGap: "15px",
    display: "flex",
    minWidth: "min-content",
  },
});

export const Icon = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <CompoundButton
        secondaryContent="Secondary content"
        icon={<CalendarMonthRegular />}
      >
        With calendar icon before contents
      </CompoundButton>
      <CompoundButton
        secondaryContent="Secondary content"
        icon={<CalendarMonthRegular />}
        iconPosition="after"
      >
        With calendar icon after contents
      </CompoundButton>
      <Tooltip content="With calendar icon only" relationship="label">
        <CompoundButton icon={<CalendarMonthRegular />} />
      </Tooltip>
    </div>
  );
};
```

### Size

A compound button supports `small`, `medium` and `large` size. Default size is `medium`.

```jsx
import * as React from "react";
import { makeStyles, CompoundButton } from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";

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
      <CompoundButton
        icon={<CalendarMonthRegular />}
        secondaryContent="Secondary content"
        size="small"
      >
        Size: small
      </CompoundButton>
      <CompoundButton
        icon={<CalendarMonthRegular />}
        secondaryContent="Secondary content"
        size="medium"
      >
        Size: medium
      </CompoundButton>
      <CompoundButton
        icon={<CalendarMonthRegular />}
        secondaryContent="Secondary content"
        size="large"
      >
        Size: large
      </CompoundButton>
    </div>
  );
};
```

### Disabled

A compound button can be `disabled` or `disabledFocusable`. `disabledFocusable` is used in scenarios where it is important to keep a consistent tab order for screen reader and keyboard users. The primary example of this pattern is when the disabled compound button is in a menu or a commandbar and is seldom used for standalone buttons.

```jsx
import * as React from "react";
import { makeStyles, CompoundButton } from "@fluentui/react-components";

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
        <CompoundButton secondaryContent="Secondary content">
          Enabled state
        </CompoundButton>
        <CompoundButton disabled secondaryContent="Secondary content">
          Disabled state
        </CompoundButton>
        <CompoundButton disabledFocusable secondaryContent="Secondary content">
          Disabled focusable state
        </CompoundButton>
      </div>
      <div className={styles.innerWrapper}>
        <CompoundButton
          appearance="primary"
          secondaryContent="Secondary content"
        >
          Enabled state
        </CompoundButton>
        <CompoundButton
          appearance="primary"
          disabled
          secondaryContent="Secondary content"
        >
          Disabled state
        </CompoundButton>
        <CompoundButton
          appearance="primary"
          disabledFocusable
          secondaryContent="Secondary content"
        >
          Disabled focusable state
        </CompoundButton>
      </div>
    </div>
  );
};
```

### With Long Text

Text wraps after it hits the max width of the component.

```jsx
import * as React from "react";
import { makeStyles, CompoundButton } from "@fluentui/react-components";

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
      <CompoundButton secondaryContent="Secondary content">
        Short text
      </CompoundButton>
      <CompoundButton
        className={styles.longText}
        secondaryContent="Secondary content"
      >
        Long text wraps after it hits the max width of the component
      </CompoundButton>
    </div>
  );
};
```