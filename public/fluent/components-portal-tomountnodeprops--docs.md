# toMountNodeProps

Fluent UI uses a wrapper component called Portal to render portals using ReactDOM.createPortal().
Portal component accepts a mountNode prop that can be used to specify the DOM node where the portal should be rendered. That prop also accepts an object that allows to configure rendering of a mount node. For example, you can pass className to add a class to the mount node: To ensure that props normalization is consistent across all components, we use toMountNodeProps function to normalize mountNode prop. This function is used internally by Portal component, but it can be also used to build custom components that accept mountNode prop.

```jsx
import * as React from "react";

import {
  Button,
  makeStyles,
  mergeClasses,
  Portal,
  tokens,
  toMountNodeProps,
} from "@fluentui/react-components";
import type { PortalProps } from "@fluentui/react-components";

const useClasses = makeStyles({
  message: {
    backgroundColor: tokens.colorNeutralBackground1,
    border: `${tokens.strokeWidthThick} solid ${tokens.colorStatusSuccessBorder1}`,
    padding: "20px",

    fontSize: tokens.fontSizeBase600,

    position: "fixed",
    top: "0",
    left: "0",
  },

  // Heads up!
  // Overrides Portal's default z-index
  portal: {
    zIndex: 1,
  },
});

const CustomMessage: React.FC<
  { children: React.ReactNode } & Pick<PortalProps, "mountNode">
> = (props) => {
  const classes = useClasses();

  const mountNodeProps = toMountNodeProps(props.mountNode);
  mountNodeProps.className = mergeClasses(
    classes.portal,
    mountNodeProps.className
  );

  return (
    <Portal mountNode={mountNodeProps}>
      <div className={classes.message}>{props.children}</div>
    </Portal>
  );
};

export const Default = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen((v) => !v)}>Toggle message</Button>
      {open && (
        <CustomMessage>
          This message is rendered in a custom mount node
        </CustomMessage>
      )}
    </>
  );
};
```

### Default

```jsx
import * as React from "react";

import {
  Button,
  makeStyles,
  mergeClasses,
  Portal,
  tokens,
  toMountNodeProps,
} from "@fluentui/react-components";
import type { PortalProps } from "@fluentui/react-components";

const useClasses = makeStyles({
  message: {
    backgroundColor: tokens.colorNeutralBackground1,
    border: `${tokens.strokeWidthThick} solid ${tokens.colorStatusSuccessBorder1}`,
    padding: "20px",

    fontSize: tokens.fontSizeBase600,

    position: "fixed",
    top: "0",
    left: "0",
  },

  // Heads up!
  // Overrides Portal's default z-index
  portal: {
    zIndex: 1,
  },
});

const CustomMessage: React.FC<
  { children: React.ReactNode } & Pick<PortalProps, "mountNode">
> = (props) => {
  const classes = useClasses();

  const mountNodeProps = toMountNodeProps(props.mountNode);
  mountNodeProps.className = mergeClasses(
    classes.portal,
    mountNodeProps.className
  );

  return (
    <Portal mountNode={mountNodeProps}>
      <div className={classes.message}>{props.children}</div>
    </Portal>
  );
};

export const Default = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen((v) => !v)}>Toggle message</Button>
      {open && (
        <CustomMessage>
          This message is rendered in a custom mount node
        </CustomMessage>
      )}
    </>
  );
};
```