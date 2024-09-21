# Drawer

The Drawer gives users a quick entry point to configuration and information. It should be used when retaining context is beneficial to users. There are three main components to represent a Drawer: OverlayDrawer: An overlay Drawer renders on top of the whole page. By default blocks the screen and will require the user's full attention. Uses Dialog component under the hood.InlineDrawer: An inline Drawer renders within a container and can be placed next to any content.Drawer: A combination of OverlayDrawer and InlineDrawer. Used when toggling between the two modes is necessary. Often used for responsiveness.

```jsx
import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Drawer,
  DrawerProps,
  Button,
  Label,
  Radio,
  RadioGroup,
  makeStyles,
  tokens,
  useId,
  useRestoreFocusSource,
  useRestoreFocusTarget,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    border: "2px solid #ccc",
    overflow: "hidden",

    display: "flex",
    height: "480px",
    backgroundColor: "#fff",
  },

  content: {
    flex: "1",
    padding: "16px",

    display: "grid",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gridRowGap: tokens.spacingVerticalXXL,
    gridAutoRows: "max-content",
  },

  field: {
    display: "grid",
    gridRowGap: tokens.spacingVerticalS,
  },
});

type DrawerType = Required<DrawerProps>["type"];

export const Default = () => {
  const styles = useStyles();
  const labelId = useId("type-label");

  const [isOpen, setIsOpen] = React.useState(false);
  const [type, setType] = React.useState<DrawerType>("overlay");

  // Overlay Drawer will handle focus by default, but inline Drawers need manual focus restoration attributes, if applicable
  const restoreFocusTargetAttributes = useRestoreFocusTarget();
  const restoreFocusSourceAttributes = useRestoreFocusSource();

  return (
    <div className={styles.root}>
      <Drawer
        {...restoreFocusSourceAttributes}
        type={type}
        separator
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setIsOpen(false)}
              />
            }
          >
            Default Drawer
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <p>Drawer content</p>
        </DrawerBody>
      </Drawer>

      <div className={styles.content}>
        <Button
          {...restoreFocusTargetAttributes}
          appearance="primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {type === "inline" ? "Toggle" : "Open"}
        </Button>

        <div className={styles.field}>
          <Label id={labelId}>Type</Label>
          <RadioGroup
            value={type}
            onChange={(_, data) => setType(data.value as DrawerType)}
            aria-labelledby={labelId}
          >
            <Radio value="overlay" label="Overlay (Default)" />
            <Radio value="inline" label="Inline" />
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};
```

### Default

```jsx
import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Drawer,
  DrawerProps,
  Button,
  Label,
  Radio,
  RadioGroup,
  makeStyles,
  tokens,
  useId,
  useRestoreFocusSource,
  useRestoreFocusTarget,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    border: "2px solid #ccc",
    overflow: "hidden",

    display: "flex",
    height: "480px",
    backgroundColor: "#fff",
  },

  content: {
    flex: "1",
    padding: "16px",

    display: "grid",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gridRowGap: tokens.spacingVerticalXXL,
    gridAutoRows: "max-content",
  },

  field: {
    display: "grid",
    gridRowGap: tokens.spacingVerticalS,
  },
});

type DrawerType = Required<DrawerProps>["type"];

export const Default = () => {
  const styles = useStyles();
  const labelId = useId("type-label");

  const [isOpen, setIsOpen] = React.useState(false);
  const [type, setType] = React.useState<DrawerType>("overlay");

  // Overlay Drawer will handle focus by default, but inline Drawers need manual focus restoration attributes, if applicable
  const restoreFocusTargetAttributes = useRestoreFocusTarget();
  const restoreFocusSourceAttributes = useRestoreFocusSource();

  return (
    <div className={styles.root}>
      <Drawer
        {...restoreFocusSourceAttributes}
        type={type}
        separator
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setIsOpen(false)}
              />
            }
          >
            Default Drawer
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <p>Drawer content</p>
        </DrawerBody>
      </Drawer>

      <div className={styles.content}>
        <Button
          {...restoreFocusTargetAttributes}
          appearance="primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {type === "inline" ? "Toggle" : "Open"}
        </Button>

        <div className={styles.field}>
          <Label id={labelId}>Type</Label>
          <RadioGroup
            value={type}
            onChange={(_, data) => setType(data.value as DrawerType)}
            aria-labelledby={labelId}
          >
            <Radio value="overlay" label="Overlay (Default)" />
            <Radio value="inline" label="Inline" />
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};
```

### Overlay

OverlayDrawer contains supplementary content and is used for complex creation, edit, or management experiences. For example, viewing details about an item in a list or editing settings. By default, drawer is blocking and signifies that the user's full attention is required when making configurations.

```jsx
import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  OverlayDrawer,
  Button,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";

export const Overlay = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <OverlayDrawer
        as="aside"
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setIsOpen(false)}
              />
            }
          >
            Overlay Drawer
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <p>Drawer content</p>
        </DrawerBody>
      </OverlayDrawer>

      <Button appearance="primary" onClick={() => setIsOpen(true)}>
        Open Drawer
      </Button>
    </div>
  );
};
```

### Overlay No Modal

An overlay is optional depending on whether or not interacting with the background content is beneficial to the user's context/scenario. By setting the `modalType` prop to `non-modal`, the Drawer will not be blocking and the user can interact with the background content.

```jsx
import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  OverlayDrawer,
  Button,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";

export const OverlayNoModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <OverlayDrawer
        modalType="non-modal"
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setIsOpen(false)}
              />
            }
          >
            Overlay Drawer
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <p>Drawer content</p>
        </DrawerBody>
      </OverlayDrawer>

      <Button appearance="primary" onClick={() => setIsOpen(!isOpen)}>
        Toggle
      </Button>
    </div>
  );
};
```

### Overlay Inside Container

The overlay Drawer can be rendered inside a specific container by setting the `mountNode` prop to the desired container element. This approach is useful when you need the Drawer to appear within a particular section of the DOM, rather than being attached to the root element.

```jsx
import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  OverlayDrawer,
  Button,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "flex-start",
    gap: tokens.spacingHorizontalL,
  },

  container: {
    width: "500px",
    height: "300px",
    padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalL}`,
    position: "relative",
    overflow: "hidden",
    border: `${tokens.strokeWidthThicker} solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorBrandBackground2,
  },
});

export const OverlayInsideContainer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.container} ref={ref}>
        <OverlayDrawer
          as="aside"
          mountNode={ref.current}
          open={isOpen}
          onOpenChange={(_, { open }) => setIsOpen(open)}
        >
          <DrawerHeader>
            <DrawerHeaderTitle
              action={
                <Button
                  appearance="subtle"
                  aria-label="Close"
                  icon={<Dismiss24Regular />}
                  onClick={() => setIsOpen(false)}
                />
              }
            >
              Overlay Drawer
            </DrawerHeaderTitle>
          </DrawerHeader>

          <DrawerBody>
            <p>Drawer content</p>
          </DrawerBody>
        </OverlayDrawer>

        <p>Drawer will be rendered within this container</p>
      </div>

      <Button appearance="primary" onClick={() => setIsOpen(true)}>
        Open Drawer
      </Button>
    </div>
  );
};
```

### Inline

InlineDrawer is often used for navigation that is not dismissible. As it is on the same level as the main surface, users can still interact with other UI elements. This could be useful for swapping between different items in the main surface.

```jsx
import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  InlineDrawer,
  Button,
  makeStyles,
  tokens,
  DrawerProps,
  mergeClasses,
  useRestoreFocusSource,
  useRestoreFocusTarget,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    border: "2px solid #ccc",
    overflow: "hidden",

    display: "flex",
    height: "480px",
    backgroundColor: "#fff",
  },

  content: {
    flex: "1",
    padding: "16px",
    overflow: "auto",

    position: "relative",
  },

  flexColumn: {
    flexDirection: "column",
  },

  buttons: {
    flex: "1",
    padding: "16px",

    position: "sticky",
    top: "-16px",
    right: "-16px",
    left: "-16px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    columnGap: tokens.spacingHorizontalXS,
    backgroundColor: "#fff",
    transitionDuration: tokens.durationFast,
  },
});

type DrawerInlineExampleProps = DrawerProps & {
  setOpen: (open: boolean) => void;
};

const getMappedPosition = (position: DrawerProps["position"]) => {
  switch (position) {
    case "end":
      return "Right";

    case "bottom":
      return "Bottom";

    default:
      return "Left";
  }
};

const setButtonText = (open: boolean, position: DrawerProps["position"]) => {
  let buttonText = open ? "Close" : "Open";

  switch (position) {
    case "start":
      buttonText = `${buttonText} left`;
      break;

    case "end":
      buttonText = `${buttonText} right`;
      break;

    case "bottom":
      buttonText = `${buttonText} bottom`;
      break;

    default:
      buttonText = `${buttonText} drawer`;
  }

  return buttonText;
};

const DrawerInlineExample: React.FC<DrawerInlineExampleProps> = ({
  setOpen,
  ...props
}) => {
  const restoreFocusSourceAttributes = useRestoreFocusSource();
  return (
    <InlineDrawer {...restoreFocusSourceAttributes} {...props}>
      <DrawerHeader>
        <DrawerHeaderTitle
          action={
            <Button
              appearance="subtle"
              aria-label="Close"
              icon={<Dismiss24Regular />}
              onClick={() => setOpen(false)}
            />
          }
        >
          {getMappedPosition(props.position)} Inline Drawer
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody>
        <p>Drawer content</p>
      </DrawerBody>
    </InlineDrawer>
  );
};

export const Inline = () => {
  const styles = useStyles();

  const [leftOpen, setLeftOpen] = React.useState(false);
  const [rightOpen, setRightOpen] = React.useState(false);
  const [bottomOpen, setBottomOpen] = React.useState(false);

  const restoreFocusTargetAttributes = useRestoreFocusTarget();

  return (
    <div className={mergeClasses(styles.root, styles.flexColumn)}>
      <div className={styles.root}>
        <DrawerInlineExample
          as="aside"
          open={leftOpen}
          setOpen={setLeftOpen}
          position="start"
        />

        <div className={styles.content}>
          <div className={styles.buttons}>
            <Button
              {...restoreFocusTargetAttributes}
              appearance="primary"
              onClick={() => setLeftOpen(!leftOpen)}
            >
              {setButtonText(leftOpen, "start")}
            </Button>

            <Button
              {...restoreFocusTargetAttributes}
              appearance="primary"
              onClick={() => setRightOpen(!rightOpen)}
            >
              {setButtonText(rightOpen, "end")}
            </Button>

            <Button
              {...restoreFocusTargetAttributes}
              appearance="primary"
              onClick={() => setBottomOpen(!bottomOpen)}
            >
              {setButtonText(bottomOpen, "bottom")}
            </Button>
          </div>

          {Array.from({ length: 100 }, (_, i) => (
            <p key={i}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              voluptatem similique reiciendis, ipsa accusamus distinctio dolorum
              quisquam, tenetur minima animi autem nobis. Molestias totam natus,
              deleniti nam itaque placeat quisquam!
            </p>
          ))}
        </div>

        <DrawerInlineExample
          open={rightOpen}
          setOpen={setRightOpen}
          position="end"
        />
      </div>

      <DrawerInlineExample
        open={bottomOpen}
        setOpen={setBottomOpen}
        position="bottom"
      />
    </div>
  );
};
```

### Position

When a Drawer is invoked, it slides in from either the left or right side, or bottom of the screen. This can be specified by the `position` prop.

```jsx
import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  OverlayDrawer,
  DrawerProps,
  Button,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    columnGap: tokens.spacingHorizontalXS,
  },
});

const setTitle = (position: DrawerProps["position"]) => {
  switch (position) {
    case "start":
      return "Left";

    case "end":
      return "Right";

    case "bottom":
      return "Bottom";

    default:
      return undefined;
  }
};

export const Position = () => {
  const styles = useStyles();

  const [isOpen, setIsOpen] = React.useState(false);
  const [position, setPosition] =
    React.useState<DrawerProps["position"]>("start");

  const onClickLeftButton = React.useCallback(() => {
    setPosition("start");
    setIsOpen(true);
  }, []);

  const onClickRightButton = React.useCallback(() => {
    setPosition("end");
    setIsOpen(true);
  }, []);

  const onClickBottomButton = React.useCallback(() => {
    setPosition("bottom");
    setIsOpen(true);
  }, []);

  return (
    <div>
      <OverlayDrawer
        position={position}
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setIsOpen(false)}
              />
            }
          >
            {setTitle(position)} Drawer
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <p>Drawer content</p>
        </DrawerBody>
      </OverlayDrawer>

      <div className={styles.content}>
        <Button appearance="primary" onClick={onClickLeftButton}>
          Open left
        </Button>

        <Button appearance="primary" onClick={onClickRightButton}>
          Open right
        </Button>

        <Button appearance="primary" onClick={onClickBottomButton}>
          Open Bottom
        </Button>
      </div>
    </div>
  );
};
```

### Size

The `size` prop controls the width of the drawer. The default is `small`.

```jsx
import * as React from "react";
import {
  OverlayDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  DrawerProps,
  Button,
  Label,
  RadioGroup,
  Radio,
  useId,
  tokens,
  makeStyles,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  main: {
    display: "grid",
    justifyContent: "flex-start",
    gridRowGap: tokens.spacingVerticalXXL,
  },

  field: {
    display: "grid",
    gridRowGap: tokens.spacingVerticalS,
  },
});

type DrawerSizeStory = Required<DrawerProps>["size"];

export const Size = () => {
  const styles = useStyles();
  const labelId = useId("size-label");

  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState<DrawerSizeStory>("small");

  const labelMap: Record<DrawerSizeStory, string> = {
    small: "Small (Default)",
    medium: "Medium",
    large: "Large",
    full: "Full",
  };

  return (
    <div>
      <OverlayDrawer
        size={size}
        position="end"
        open={open}
        onOpenChange={(_, state) => setOpen(state.open)}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setOpen(false)}
              />
            }
          >
            {labelMap[size]} size
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <p>Drawer content</p>
        </DrawerBody>
      </OverlayDrawer>

      <div className={styles.main}>
        <Button appearance="primary" onClick={() => setOpen(true)}>
          Open Drawer
        </Button>

        <div className={styles.field}>
          <Label id={labelId}>Size</Label>
          <RadioGroup
            value={size}
            onChange={(_, data) => setSize(data.value as DrawerSizeStory)}
            aria-labelledby={labelId}
          >
            {Object.keys(labelMap).map((key) => (
              <Radio
                key={key}
                value={key}
                label={labelMap[key as DrawerSizeStory]}
              />
            ))}
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};
```

### Custom Size

The Drawer can be sized to any custom width, by overriding the `width` style property.

```jsx
import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  OverlayDrawer,
  Button,
  Field,
  tokens,
  makeStyles,
  Input,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  main: {
    display: "grid",
    justifyContent: "flex-start",
    gridRowGap: tokens.spacingVerticalXXL,
  },

  field: {
    display: "grid",
    gridRowGap: tokens.spacingVerticalS,
  },
});

export const CustomSize = () => {
  const styles = useStyles();

  const [open, setOpen] = React.useState(false);
  const [customSize, setCustomSize] = React.useState(600);

  return (
    <div>
      <OverlayDrawer
        open={open}
        position="end"
        onOpenChange={(_, state) => setOpen(state.open)}
        style={{ width: `${customSize}px` }}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setOpen(false)}
              />
            }
          >
            Drawer with {customSize}px size
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <p>Drawer content</p>
        </DrawerBody>
      </OverlayDrawer>

      <div className={styles.main}>
        <Button appearance="primary" onClick={() => setOpen(true)}>
          Open Drawer
        </Button>

        <div className={styles.field}>
          <Field label="Size">
            <Input
              pattern="[0-9]*"
              value={customSize.toString()}
              onChange={(_, data) =>
                setCustomSize(data.value ? parseInt(data.value, 10) : 0)
              }
            />
          </Field>
        </div>
      </div>
    </div>
  );
};
```

### Separator

The `separator` prop adds a line separator between the drawer and the content. Its placement will be determined by the `position` prop

```jsx
import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  InlineDrawer,
  Button,
  makeStyles,
  tokens,
  DrawerProps,
  mergeClasses,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    border: "2px solid #ccc",
    overflow: "hidden",
    display: "flex",
    height: "480px",
    backgroundColor: "#fff",
  },

  content: {
    flex: "1",
    padding: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    columnGap: tokens.spacingHorizontalXS,
  },

  flexColumn: {
    flexDirection: "column",
  },
});

type DrawerSeparatorExampleProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  position: DrawerProps["position"];
  className?: string;
};

const DrawerSeparatorExample: React.FC<DrawerSeparatorExampleProps> = ({
  open,
  setOpen,
  position,
}) => {
  return (
    <InlineDrawer separator position={position} open={open}>
      <DrawerHeader>
        <DrawerHeaderTitle
          action={
            <Button
              appearance="subtle"
              aria-label="Close"
              icon={<Dismiss24Regular />}
              onClick={() => setOpen(false)}
            />
          }
        >
          Drawer with separator
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody>
        <p>Drawer content</p>
      </DrawerBody>
    </InlineDrawer>
  );
};

export const Separator = () => {
  const styles = useStyles();

  const [leftOpen, setLeftOpen] = React.useState(true);
  const [rightOpen, setRightOpen] = React.useState(true);
  const [bottomOpen, setBottomOpen] = React.useState(false);

  return (
    <div className={mergeClasses(styles.root, styles.flexColumn)}>
      <div className={styles.root} style={{ borderBottomWidth: 0 }}>
        <DrawerSeparatorExample
          open={leftOpen}
          setOpen={setLeftOpen}
          position="start"
        />

        <div className={styles.content}>
          <Button appearance="primary" onClick={() => setLeftOpen(!leftOpen)}>
            Toggle left
          </Button>

          <Button appearance="primary" onClick={() => setRightOpen(!rightOpen)}>
            Toggle right
          </Button>

          <Button
            appearance="primary"
            onClick={() => setBottomOpen(!bottomOpen)}
          >
            Toggle bottom
          </Button>
        </div>
        <DrawerSeparatorExample
          open={rightOpen}
          setOpen={setRightOpen}
          position="end"
        />
      </div>
      <DrawerSeparatorExample
        open={bottomOpen}
        setOpen={setBottomOpen}
        position="bottom"
      />
    </div>
  );
};
```

### With Title

`DrawerHeaderTitle` is a component that provides a structured heading for a Drawer and can be used to display a title and an action. Although it works as a standalone component, it is intended to be used within a `DrawerHeader`. The title renders an `h2` element by default but it can be customized using the `heading` prop.

```jsx
import * as React from "react";
import {
  InlineDrawer,
  DrawerHeader,
  DrawerHeaderTitle,
  Button,
  makeStyles,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  drawer: {
    width: "400px",
    height: "600px",
  },
});

export const WithTitle = () => {
  return (
    <InlineDrawer className={useStyles().drawer} open>
      <DrawerHeader>
        <DrawerHeaderTitle>Drawer with title</DrawerHeaderTitle>
        <DrawerHeaderTitle heading={{ as: "h1" }}>
          Drawer with custom tag
        </DrawerHeaderTitle>
        <DrawerHeaderTitle
          action={
            <Button
              appearance="subtle"
              aria-label="Close"
              icon={<Dismiss24Regular />}
            />
          }
        >
          Drawer with title and action
        </DrawerHeaderTitle>
      </DrawerHeader>
    </InlineDrawer>
  );
};
```

### With Navigation

Drawers can have any type of content and one great case is to have a toolbar in the header. Drawer ships with a `DrawerHeaderNavigation` component that can be used to display a toolbar in the header of the drawer. This can be combined with `DrawerHeaderTitle` to display a title in the header.

```jsx
import * as React from "react";
import {
  OverlayDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderNavigation,
  DrawerHeaderTitle,
  Button,
  Toolbar,
  ToolbarGroup,
  ToolbarButton,
  makeStyles,
} from "@fluentui/react-components";
import {
  Dismiss24Regular,
  ArrowClockwise24Regular,
  Settings24Regular,
  ArrowLeft24Regular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export const WithNavigation = () => {
  const styles = useStyles();

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <OverlayDrawer
        position="start"
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
      >
        <DrawerHeader>
          <DrawerHeaderNavigation className={styles.header}>
            <Button
              aria-label="Back"
              appearance="subtle"
              icon={<ArrowLeft24Regular />}
            />
            <Toolbar>
              <ToolbarGroup>
                <ToolbarButton
                  aria-label="Reload content"
                  appearance="subtle"
                  icon={<ArrowClockwise24Regular />}
                />
                <ToolbarButton
                  aria-label="Settings"
                  appearance="subtle"
                  icon={<Settings24Regular />}
                />
                <ToolbarButton
                  aria-label="Close panel"
                  appearance="subtle"
                  icon={<Dismiss24Regular />}
                  onClick={() => setIsOpen(false)}
                />
              </ToolbarGroup>
            </Toolbar>
          </DrawerHeaderNavigation>

          <DrawerHeaderTitle>Title goes here</DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <p>Drawer content</p>
        </DrawerBody>
      </OverlayDrawer>

      <Button appearance="primary" onClick={() => setIsOpen(true)}>
        Open Drawer
      </Button>
    </div>
  );
};
```

### With Scroll

By default, the drawer will not scroll its content when it overflows. To enable this behavior, the DrawerBody component can be used to wrap the content of the drawer.

Important note: if the drawer content does not contain any focusable elements, the DrawerBody itself needs a tabIndex of 0 to ensure keyboard scroll access.

```jsx
import * as React from "react";
import {
  InlineDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  DrawerFooter,
  Button,
  makeStyles,
  tokens,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    rowGap: tokens.spacingHorizontalXXL,
    columnGap: tokens.spacingHorizontalXXL,
  },

  drawer: {
    height: "400px",
    minWidth: "320px",
  },
});

const Header = () => {
  return (
    <DrawerHeader>
      <DrawerHeaderTitle>Title goes here</DrawerHeaderTitle>
    </DrawerHeader>
  );
};

const Footer = () => {
  return (
    <DrawerFooter>
      <Button appearance="primary">Primary</Button>
      <Button>Secondary</Button>
    </DrawerFooter>
  );
};

const Body = () => {
  return (
    <DrawerBody
      tabIndex={0}
      role="group"
      aria-label="Example scrolling content"
    >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus nam
      aut amet similique, iure vel voluptates cum cumque repellendus perferendis
      maiores officia unde in? Autem neque sequi maiores eum omnis. Lorem ipsum,
      dolor sit amet consectetur adipisicing elit. Perspiciatis ipsam explicabo
      tempora ipsum saepe nam. Eum aliquid aperiam, laborum labore excepturi
      nisi odio deserunt facilis error. Mollitia dolor quidem a. Lorem ipsum,
      dolor sit amet consectetur adipisicing elit. Eius soluta ea repellendus
      voluptatum provident ad aut unde accusantium sed. Officia qui praesentium
      repudiandae maxime molestias, non mollitia animi laboriosam quis. Lorem,
      ipsum dolor sit amet consectetur adipisicing elit. Inventore, architecto
      eligendi earum dolor voluptas hic minima nihil porro odio suscipit quaerat
      accusantium, aperiam, neque beatae ipsa explicabo consequatur cum quam?
    </DrawerBody>
  );
};

export const WithScroll = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <InlineDrawer className={styles.drawer} open>
        <Body />
      </InlineDrawer>

      <InlineDrawer className={styles.drawer} open>
        <Header />
        <Body />
      </InlineDrawer>

      <InlineDrawer className={styles.drawer} open>
        <Body />
        <Footer />
      </InlineDrawer>

      <InlineDrawer className={styles.drawer} open>
        <Header />
        <Body />
        <Footer />
      </InlineDrawer>
    </div>
  );
};
```

### Motion Disabled

To disable the Drawer transition animation, you can use a custom style to set `transitionDuration` to `0ms`.

```jsx
import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Drawer,
  DrawerProps,
  Button,
  Label,
  Radio,
  RadioGroup,
  makeStyles,
  tokens,
  useId,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    border: "2px solid #ccc",
    overflow: "hidden",

    display: "flex",
    height: "480px",
    backgroundColor: "#fff",
  },

  content: {
    flex: "1",
    padding: "16px",

    display: "grid",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: tokens.spacingVerticalXXL,
    gridAutoRows: "max-content",
  },

  field: {
    display: "grid",
    gap: tokens.spacingVerticalS,
  },
});

type DrawerType = Required<DrawerProps>["type"];

export const MotionDisabled = () => {
  const styles = useStyles();
  const labelId = useId("type-label");

  const [isOpen, setIsOpen] = React.useState(false);
  const [type, setType] = React.useState<DrawerType>("overlay");

  return (
    <div className={styles.root}>
      <Drawer
        backdropMotion={null}
        surfaceMotion={null}
        type={type}
        separator
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setIsOpen(false)}
              />
            }
          >
            Default Drawer
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <p>Drawer content</p>
        </DrawerBody>
      </Drawer>

      <div className={styles.content}>
        <Button appearance="primary" onClick={() => setIsOpen(!isOpen)}>
          {type === "inline" ? "Toggle" : "Open"}
        </Button>

        <div className={styles.field}>
          <Label id={labelId}>Type</Label>
          <RadioGroup
            value={type}
            onChange={(_, data) => setType(data.value as DrawerType)}
            aria-labelledby={labelId}
          >
            <Radio value="overlay" label="Overlay (Default)" />
            <Radio value="inline" label="Inline" />
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};
```

### Multiple Levels

When there is a need to display multiple levels of content, the drawer can be used to display them. It is not recommended to invoke one drawer from another, as it can lead to a confusing experience for the user. Instead, when a second level of a Drawer is required, the L2 content pushes the L1 Drawer content to the side and out of the Drawer.

This can be achieved by using the Motion APIs to animate the inner content of the Drawer.

```jsx
import * as React from "react";
import {
  createPresenceComponent,
  motionTokens,
  OverlayDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderNavigation,
  DrawerHeaderTitle,
  DrawerFooter,
  Button,
  Toolbar,
  ToolbarGroup,
  ToolbarButton,
  makeStyles,
} from "@fluentui/react-components";
import {
  Dismiss24Regular,
  Calendar24Regular,
  Settings24Regular,
  ArrowLeft24Regular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  toolbar: {
    justifyContent: "space-between",
  },

  body: {
    flex: "1",
    width: "100%",
    maxWidth: "100%",
    position: "relative",
  },

  level: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    ":first-child": {
      paddingTop: 0,
    },

    ":last-child": {
      paddingBottom: 0,
    },
  },

  footer: {
    justifyContent: "space-between",
  },
});

const BodyPresenceMotion = createPresenceComponent<{ level: 1 | 2 }>(
  ({ level }) => {
    const keyframes = [
      {
        opacity: 0,
        transform: level === 1 ? "translateX(-100%)" : "translateX(100%)",
      },
      { opacity: 1, transform: "translateX(0)" },
    ];

    const duration = motionTokens.durationNormal;
    const easing = motionTokens.curveEasyEase;

    return {
      enter: {
        keyframes: keyframes,
        duration,
        easing,
      },
      exit: {
        keyframes: [...keyframes].reverse(),
        duration,
        easing,
      },
    };
  }
);
const IconPresenceMotion = createPresenceComponent(() => {
  const keyframes = [
    { opacity: 0, transform: "scale(0)" },
    { opacity: 1, transform: "scale(1)" },
  ];

  return {
    enter: {
      keyframes: keyframes,
      duration: motionTokens.durationNormal,
      easing: motionTokens.curveEasyEase,
    },
    exit: {
      keyframes: [...keyframes].reverse(),
      duration: motionTokens.durationNormal,
      easing: motionTokens.curveEasyEase,
    },
  };
});

export const MultipleLevels = () => {
  const styles = useStyles();

  const [isOpen, setIsOpen] = React.useState(false);
  const [level, setLevel] = React.useState<1 | 2>(1);

  return (
    <div>
      <OverlayDrawer
        position="start"
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
      >
        <DrawerHeader>
          <DrawerHeaderNavigation>
            <Toolbar className={styles.toolbar}>
              <ToolbarGroup>
                <IconPresenceMotion visible={level === 2} unmountOnExit>
                  <ToolbarButton
                    aria-label="Back"
                    appearance="subtle"
                    icon={<ArrowLeft24Regular />}
                    onClick={() => setLevel(1)}
                  />
                </IconPresenceMotion>
              </ToolbarGroup>

              <ToolbarGroup>
                <IconPresenceMotion visible={level === 1} unmountOnExit>
                  <ToolbarButton
                    aria-label="Go to calendar"
                    appearance="subtle"
                    icon={<Calendar24Regular />}
                    onClick={() => setLevel(2)}
                  />
                </IconPresenceMotion>
                <ToolbarButton
                  aria-label="Settings"
                  appearance="subtle"
                  icon={<Settings24Regular />}
                />
                <ToolbarButton
                  aria-label="Close panel"
                  appearance="subtle"
                  icon={<Dismiss24Regular />}
                  onClick={() => setIsOpen(false)}
                />
              </ToolbarGroup>
            </Toolbar>
          </DrawerHeaderNavigation>
        </DrawerHeader>

        <div className={styles.body}>
          <BodyPresenceMotion level={1} visible={level === 1} unmountOnExit>
            <DrawerBody className={styles.level}>
              <DrawerHeaderTitle>Level 1 title</DrawerHeaderTitle>
              <p>Level 1 content</p>
            </DrawerBody>
          </BodyPresenceMotion>

          <BodyPresenceMotion level={2} visible={level === 2} unmountOnExit>
            <DrawerBody className={styles.level}>
              <DrawerHeaderTitle>Level 2 title</DrawerHeaderTitle>
              <p>Level 2 content</p>
            </DrawerBody>
          </BodyPresenceMotion>
        </div>

        <DrawerFooter className={styles.footer}>
          <Button
            appearance="subtle"
            disabled={level === 1}
            onClick={() => setLevel(1)}
          >
            Previous
          </Button>

          <Button
            appearance="primary"
            disabled={level === 2}
            onClick={() => setLevel(2)}
          >
            Next
          </Button>
        </DrawerFooter>
      </OverlayDrawer>

      <Button appearance="primary" onClick={() => setIsOpen(true)}>
        Open Drawer
      </Button>
    </div>
  );
};
```

### Always Open

A drawer can be always open, in which case it will not be able to be closed by the user. This is useful for drawers that are used for navigation, and should always be visible.

```jsx
import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  InlineDrawer,
  makeStyles,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    border: "2px solid #ccc",
    overflow: "hidden",
    display: "flex",
    height: "480px",
    backgroundColor: "#fff",
  },

  content: {
    flex: "1",
    padding: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export const AlwaysOpen = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <InlineDrawer separator open>
        <DrawerHeader>
          <DrawerHeaderTitle>Always open</DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <p>Drawer content</p>
        </DrawerBody>
      </InlineDrawer>

      <div className={styles.content}>
        <p>This is the page content</p>
      </div>
    </div>
  );
};
```

### Prevent Close

By setting the `modalType` prop to `alert` and not providing an onOpenChange handler, the Drawer will not be closable by clicking outside nor using the "ESC" key. This is useful for scenarios where the user must interact with the Drawer before continuing, when opening a Drawer is a critical action or when multiple Drawers are open at the same time.

```jsx
import * as React from "react";
import {
  OverlayDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Button,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";

export const PreventClose = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <OverlayDrawer position="end" open={open} modalType="alert">
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setOpen(false)}
              />
            }
          >
            Prevent close with Esc or outside click
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <p>
            This drawer cannot be closed when clicking outside nor using the
            "ESC" key
          </p>
        </DrawerBody>
      </OverlayDrawer>

      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
    </div>
  );
};
```

### Responsive

When using the `Drawer` component, the `type` prop can be used to change the drawer type based on the viewport size. The example below will change the drawer type to `overlay` when the viewport is smaller than 720px.

```jsx
import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Drawer,
  DrawerProps,
  Button,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    border: "2px solid #ccc",
    overflow: "hidden",

    display: "flex",
    height: "480px",
    backgroundColor: "#fff",
  },

  content: {
    margin: `${tokens.spacingVerticalXL} ${tokens.spacingHorizontalXL}`,
    flex: "1",

    gridRowGap: tokens.spacingVerticalXXL,
  },
});

type DrawerType = Required<DrawerProps>["type"];

export const Responsive = () => {
  const styles = useStyles();

  const [isOpen, setIsOpen] = React.useState(true);
  const [type, setType] = React.useState<DrawerType>("inline");

  const onMediaQueryChange = React.useCallback(
    ({ matches }) => setType(matches ? "overlay" : "inline"),
    [setType]
  );

  React.useEffect(() => {
    const match = window.matchMedia("(max-width: 720px)");

    if (match.matches) {
      setType("overlay");
    }

    match.addEventListener("change", onMediaQueryChange);

    return () => match.removeEventListener("change", onMediaQueryChange);
  }, [onMediaQueryChange]);

  return (
    <div className={styles.root}>
      <Drawer
        type={type}
        separator
        position="start"
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setIsOpen(false)}
              />
            }
          >
            Responsive Drawer
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <p>Drawer content</p>
        </DrawerBody>
      </Drawer>

      <div className={styles.content}>
        <Button appearance="primary" onClick={() => setIsOpen(!isOpen)}>
          Toggle
        </Button>

        <p>Resize the window to see the change</p>
      </div>
    </div>
  );
};
```

### Resizable

This example shows how to implement a resizable drawer.

```jsx
import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  InlineDrawer,
  makeStyles,
  mergeClasses,
  tokens,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    border: "2px solid #ccc",
    overflow: "hidden",

    display: "flex",
    height: "480px",
    backgroundColor: "#fff",
    userSelect: "auto",
  },

  rootResizerActive: {
    userSelect: "none",
  },

  container: {
    position: "relative",
  },

  drawer: {
    willChange: "width",
    transitionProperty: "width",
    transitionDuration: "16.666ms", // 60fps
  },

  resizer: {
    borderRight: `1px solid ${tokens.colorNeutralBackground5}`,

    width: "8px",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    cursor: "col-resize",
    resize: "horizontal",

    ":hover": {
      borderRightWidth: "4px",
    },
  },

  resizerActive: {
    borderRightWidth: "4px",
    borderRightColor: tokens.colorNeutralBackground5Pressed,
  },

  content: {
    margin: `${tokens.spacingVerticalXL} ${tokens.spacingHorizontalXL}`,
    flex: "1",
  },
});

export const Resizable = () => {
  const styles = useStyles();

  const animationFrame = React.useRef<number>(0);
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = React.useState(false);
  const [sidebarWidth, setSidebarWidth] = React.useState(320);

  const startResizing = React.useCallback(() => setIsResizing(true), []);
  const stopResizing = React.useCallback(() => setIsResizing(false), []);

  const resize = React.useCallback(
    ({ clientX }) => {
      animationFrame.current = requestAnimationFrame(() => {
        if (isResizing && sidebarRef.current) {
          setSidebarWidth(
            clientX - sidebarRef.current.getBoundingClientRect().left
          );
        }
      });
    },
    [isResizing]
  );

  const ResizeComponent: React.FC = () => (
    <div
      className={mergeClasses(
        styles.resizer,
        isResizing && styles.resizerActive
      )}
      onMouseDown={startResizing}
    />
  );

  React.useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);

    return () => {
      cancelAnimationFrame(animationFrame.current);
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div
      className={mergeClasses(
        styles.root,
        isResizing && styles.rootResizerActive
      )}
    >
      <div className={styles.container}>
        <InlineDrawer
          open
          ref={sidebarRef}
          className={styles.drawer}
          style={{ width: `${sidebarWidth}px` }}
          onMouseDown={(e) => e.preventDefault()}
        >
          <DrawerHeader>
            <DrawerHeaderTitle>Default Drawer</DrawerHeaderTitle>
          </DrawerHeader>
          <DrawerBody>
            <p>Resizable content</p>
          </DrawerBody>
        </InlineDrawer>
        <ResizeComponent />
      </div>
      <p className={styles.content}>Resize the drawer to see the change</p>
    </div>
  );
};
```