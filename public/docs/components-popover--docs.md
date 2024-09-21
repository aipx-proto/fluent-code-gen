# Popover

A popover displays content on top of other content.

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Popover,
  PopoverSurface,
  PopoverTrigger,
} from "@fluentui/react-components";
import type { PopoverProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  contentHeader: {
    marginTop: "0",
  },
});

const ExampleContent = () => {
  const styles = useStyles();
  return (
    <div>
      <h3 className={styles.contentHeader}>Popover content</h3>

      <div>This is some popover content</div>
    </div>
  );
};

export const Default = (props: PopoverProps) => (
  <Popover {...props}>
    <PopoverTrigger disableButtonEnhancement>
      <Button>Popover trigger</Button>
    </PopoverTrigger>

    <PopoverSurface tabIndex={-1}>
      <ExampleContent />
    </PopoverSurface>
  </Popover>
);
```

### Default

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Popover,
  PopoverSurface,
  PopoverTrigger,
} from "@fluentui/react-components";
import type { PopoverProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  contentHeader: {
    marginTop: "0",
  },
});

const ExampleContent = () => {
  const styles = useStyles();
  return (
    <div>
      <h3 className={styles.contentHeader}>Popover content</h3>

      <div>This is some popover content</div>
    </div>
  );
};

export const Default = (props: PopoverProps) => (
  <Popover {...props}>
    <PopoverTrigger disableButtonEnhancement>
      <Button>Popover trigger</Button>
    </PopoverTrigger>

    <PopoverSurface tabIndex={-1}>
      <ExampleContent />
    </PopoverSurface>
  </Popover>
);
```

### With Arrow

The `withArrow` prop can be used to display an arrow pointing to the target.

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Popover,
  PopoverTrigger,
  PopoverSurface,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  contentHeader: {
    marginTop: "0",
  },
});

const ExampleContent = () => {
  const styles = useStyles();
  return (
    <div>
      <h3 className={styles.contentHeader}>Popover content</h3>

      <div>This popover has an arrow pointing to its target</div>
    </div>
  );
};

export const WithArrow = () => (
  <Popover withArrow>
    <PopoverTrigger disableButtonEnhancement>
      <Button>Popover trigger</Button>
    </PopoverTrigger>

    <PopoverSurface tabIndex={-1}>
      <ExampleContent />
    </PopoverSurface>
  </Popover>
);
```

### Trapping Focus

When a `Popover` contains focusable elements, the modal dialog pattern will apply. By using the `trapFocus` prop, the component sets `aria-hidden`appropriately to parent elements in the document so that elements not contained in the focus trap are hidden to screen reader users. This focus trap is automatically removed when the `Popover` is closed.

```jsx
import * as React from "react";
import {
  makeStyles,
  useId,
  Button,
  Popover,
  PopoverTrigger,
  PopoverSurface,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  contentHeader: {
    marginTop: "0",
  },
});

export const TrappingFocus = () => {
  const styles = useStyles();
  const id = useId();

  return (
    <Popover trapFocus>
      <PopoverTrigger disableButtonEnhancement>
        <Button>Popover trigger</Button>
      </PopoverTrigger>

      <PopoverSurface aria-labelledby={id}>
        <div>
          <h3 id={id} className={styles.contentHeader}>
            Popover content
          </h3>

          <div>This is some popover content</div>
        </div>

        <div>
          <Button>Action</Button>
          <Button>Action</Button>
        </div>
      </PopoverSurface>
    </Popover>
  );
};
```

### Controlling Open And Close

The opening and close of the `Popover` can be controlled with your own state. The `onOpenChange` callback will provide the hints for the state and triggers based on the appropriate event.

_When controlling the open state of the `Popover`, extra effort is required to ensure that interactions are_ _still appropriate and that keyboard accessibility does not degrade._

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  Checkbox,
} from "@fluentui/react-components";
import type { CheckboxProps, PopoverProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  contentHeader: {
    marginTop: "0",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
});

const ExampleContent = () => {
  const styles = useStyles();
  return (
    <div>
      <h3 className={styles.contentHeader}>Popover content</h3>

      <div>This is some popover content</div>
    </div>
  );
};

export const ControllingOpenAndClose = () => {
  const styles = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpenChange: PopoverProps["onOpenChange"] = (e, data) =>
    setOpen(data.open || false);

  const onChange: CheckboxProps["onChange"] = (e, { checked }) => {
    setOpen(checked as boolean);
  };

  return (
    <div className={styles.container}>
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger disableButtonEnhancement>
          <Button>Controlled trigger</Button>
        </PopoverTrigger>
        <PopoverSurface tabIndex={-1}>
          <ExampleContent />
        </PopoverSurface>
      </Popover>
      <Checkbox
        value="open"
        name="state"
        label="open"
        checked={open}
        onChange={onChange}
      />
    </div>
  );
};
```

### Nested Popovers

Popovers can be nested within each other. Too much nesting can result in extra accessibility considerations and are generally not a great user experience,

Since nested popovers will generally have an interactive `PopoverTrigger` to control the nested popover, make sure to combine their usage with the `trapFocus` prop for correct screen reader and keyboard accessibility.

*   Try and limit nesting to 2 levels.
*   Make sure to use `trapFocus` when nesting.
*   Creating nested popovers as separate components will result in more maintainable code.

```jsx
import * as React from "react";
import {
  makeStyles,
  useId,
  Button,
  Popover,
  PopoverTrigger,
  PopoverSurface,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  contentHeader: {
    marginTop: "0",
  },
});

const FirstNestedPopover = () => {
  const styles = useStyles();
  const id = useId();

  return (
    <Popover trapFocus>
      <PopoverTrigger disableButtonEnhancement>
        <Button>First nested trigger</Button>
      </PopoverTrigger>

      <PopoverSurface aria-labelledby={id}>
        <div>
          <h3 id={id} className={styles.contentHeader}>
            Popover content
          </h3>

          <div>This is some popover content</div>
        </div>
        <Button>First nested button</Button>
        <SecondNestedPopover />
        <SecondNestedPopover />
      </PopoverSurface>
    </Popover>
  );
};

const SecondNestedPopover = () => {
  const styles = useStyles();
  const id = useId();

  return (
    <Popover trapFocus>
      <PopoverTrigger disableButtonEnhancement>
        <Button>Second nested trigger</Button>
      </PopoverTrigger>

      <PopoverSurface aria-labelledby={id}>
        <div>
          <h3 id={id} className={styles.contentHeader}>
            Popover content
          </h3>

          <div>This is some popover content</div>
        </div>
        <Button>Second nested button</Button>
      </PopoverSurface>
    </Popover>
  );
};

export const NestedPopovers = () => {
  const styles = useStyles();
  const id = useId();

  return (
    <Popover trapFocus>
      <PopoverTrigger disableButtonEnhancement>
        <Button>Root trigger</Button>
      </PopoverTrigger>

      <PopoverSurface>
        <div>
          <h3 id={id} className={styles.contentHeader}>
            Popover content
          </h3>

          <div>This is some popover content</div>
        </div>
        <Button>Root button</Button>
        <FirstNestedPopover />
      </PopoverSurface>
    </Popover>
  );
};
```

### Anchor To Custom Target

A Popover can be used without a trigger and anchored to any DOM element. This can be useful if a Popover instance needs to be reused in different places.

_Not using a PopoverTrigger will require more work to make sure your scenario is accessible,_ _such as, implementing accessible markup and keyboard interactions for your trigger._

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Popover,
  PopoverSurface,
  PopoverTrigger,
} from "@fluentui/react-components";
import type { PositioningImperativeRef } from "@fluentui/react-components";
const useStyles = makeStyles({
  container: {
    display: "flex",
    gap: "10px",
  },

  contentHeader: {
    marginTop: "0",
  },
});

const ExampleContent = () => {
  const styles = useStyles();
  return (
    <div>
      <h3 className={styles.contentHeader}>Popover content</h3>

      <div>This is some popover content</div>
    </div>
  );
};

export const AnchorToCustomTarget = () => {
  const positioningRef = React.useRef<PositioningImperativeRef>(null);
  const buttonRef = React.useCallback(
    (el: HTMLButtonElement | null) => {
      positioningRef.current?.setTarget(el);
    },
    [positioningRef]
  );

  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Popover positioning={{ positioningRef }}>
        <PopoverTrigger disableButtonEnhancement>
          <Button>Popover trigger</Button>
        </PopoverTrigger>

        <PopoverSurface tabIndex={-1}>
          <ExampleContent />
        </PopoverSurface>
      </Popover>

      <Button ref={buttonRef}>Custom target</Button>
    </div>
  );
};
```

### Custom Trigger

Native elements and Fluent components have first class support as children of `PopoverTrigger` so they will be injected automatically with the correct props for interactions and accessibility attributes.

It is possible to use your own custom React component as a child of `PopoverTrigger`. These components should use ref forwarding with React.forwardRef

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Popover,
  PopoverSurface,
  PopoverTrigger,
} from "@fluentui/react-components";
import type { PopoverTriggerChildProps } from "@fluentui/react-components";
const useStyles = makeStyles({
  contentHeader: {
    marginTop: "0",
  },
});

const ExampleContent = () => {
  const styles = useStyles();
  return (
    <div>
      <h3 className={styles.contentHeader}>Popover content</h3>

      <div>This is some popover content</div>
    </div>
  );
};

const CustomPopoverTrigger = React.forwardRef<
  HTMLButtonElement,
  Partial<PopoverTriggerChildProps>
>((props, ref) => {
  return (
    <Button {...props} ref={ref}>
      Custom Trigger
    </Button>
  );
});

export const CustomTrigger = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <CustomPopoverTrigger />
      </PopoverTrigger>
      <PopoverSurface tabIndex={-1}>
        <ExampleContent />
      </PopoverSurface>
    </Popover>
  );
};
```

### Without Trigger

When using a `Popover` without a `PopoverTrigger`, it is up to the user to make sure that the focus is restored correctly when the popover is closed. This can be done quite easily by using the `useRestoreFocusTarget` hook. The `Popover` already uses the `useRestoreFocusSource` hook directly, which will restore focus to the most recently focused target on close.

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Popover,
  PopoverSurface,
  useId,
  useRestoreFocusTarget,
} from "@fluentui/react-components";
import type { PositioningImperativeRef } from "@fluentui/react-components";
const useStyles = makeStyles({
  container: {
    display: "flex",
    gap: "10px",
  },

  contentHeader: {
    marginTop: "0",
  },
});

export const WithoutTrigger = () => {
  const [open, setOpen] = React.useState(false);
  const headerId = useId();
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const positioningRef = React.useRef<PositioningImperativeRef>(null);
  const styles = useStyles();
  const restoreFocusTargetAttribute = useRestoreFocusTarget();

  React.useEffect(() => {
    if (buttonRef.current) {
      positioningRef.current?.setTarget(buttonRef.current);
    }
  }, [buttonRef, positioningRef]);

  return (
    <div className={styles.container}>
      <Button
        {...restoreFocusTargetAttribute}
        ref={buttonRef}
        onClick={() => setOpen((s) => !s)}
      >
        Toggle popover
      </Button>
      <Popover
        onOpenChange={(_, data) => setOpen(data.open)}
        trapFocus
        open={open}
        positioning={{ positioningRef }}
      >
        <PopoverSurface aria-labelledby={headerId}>
          <div>
            <h3 id={headerId} className={styles.contentHeader}>
              Popover content
            </h3>

            <div>This is some popover content</div>
          </div>

          <div>
            <Button>Action</Button>
            <Button>Action</Button>
          </div>
        </PopoverSurface>
      </Popover>
    </div>
  );
};
```

### Internal Update Content

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Link,
  Popover,
  PopoverSurface,
  PopoverTrigger,
} from "@fluentui/react-components";
import type { PopoverProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  contentHeader: {
    marginTop: "0",
  },
});

const ExampleContent = () => {
  const styles = useStyles();
  return (
    <div>
      <h3 className={styles.contentHeader}>Popover content</h3>

      <div>This is some popover content</div>
    </div>
  );
};

export const InternalUpdateContent = () => {
  const [visible, setVisible] = React.useState(false);
  const focusRef = React.useRef<HTMLAnchorElement>(null);

  const changeContent = () => setVisible(true);
  const onOpenChange: PopoverProps["onOpenChange"] = (e, data) => {
    if (data.open === false) {
      setVisible(false);
    }
  };

  React.useEffect(() => {
    if (visible) {
      focusRef.current?.focus();
    }
  }, [visible]);

  return (
    <Popover onOpenChange={onOpenChange}>
      <PopoverTrigger disableButtonEnhancement>
        <Button>Popover trigger</Button>
      </PopoverTrigger>

      <PopoverSurface>
        <ExampleContent />

        {visible ? (
          <div>
            The second panel content{" "}
            <Link href="#" ref={focusRef}>
              and a link
            </Link>
          </div>
        ) : (
          <div>
            <Button onClick={changeContent}>Action</Button>
          </div>
        )}
      </PopoverSurface>
    </Popover>
  );
};
```

### Appearance

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  tokens,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  contentHeader: {
    marginTop: "0",
  },
});

const useLayoutStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    rowGap: tokens.spacingVerticalMNudge,
  },
});

const ExampleContent = () => {
  const styles = useStyles();
  return (
    <div>
      <h3 className={styles.contentHeader}>Popover content</h3>

      <div>This is some popover content</div>
    </div>
  );
};

export const Appearance = () => {
  const layoutStyles = useLayoutStyles();

  return (
    <div className={layoutStyles.root}>
      <Popover>
        <PopoverTrigger disableButtonEnhancement>
          <Button>Default appearance Popover trigger</Button>
        </PopoverTrigger>

        <PopoverSurface tabIndex={-1}>
          <ExampleContent />
        </PopoverSurface>
      </Popover>

      <Popover appearance="brand">
        <PopoverTrigger disableButtonEnhancement>
          <Button>Brand appearance Popover trigger</Button>
        </PopoverTrigger>

        <PopoverSurface tabIndex={-1}>
          <ExampleContent />
        </PopoverSurface>
      </Popover>

      <Popover appearance="inverted">
        <PopoverTrigger disableButtonEnhancement>
          <Button>Inverted appearance Popover trigger</Button>
        </PopoverTrigger>

        <PopoverSurface tabIndex={-1}>
          <ExampleContent />
        </PopoverSurface>
      </Popover>
    </div>
  );
};
```