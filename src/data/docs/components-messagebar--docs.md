# MessageBar

```jsx
import * as React from "react";
import { DismissRegular } from "@fluentui/react-icons";
import {
  MessageBar,
  MessageBarActions,
  MessageBarTitle,
  MessageBarBody,
  Button,
  Link,
} from "@fluentui/react-components";

export const Default = () => (
  <MessageBar>
    <MessageBarBody>
      <MessageBarTitle>Descriptive title</MessageBarTitle>
      Message providing information to the user with actionable insights.{" "}
      <Link>Link</Link>
    </MessageBarBody>
    <MessageBarActions
      containerAction={
        <Button
          aria-label="dismiss"
          appearance="transparent"
          icon={<DismissRegular />}
        />
      }
    >
      <Button>Action</Button>
      <Button>Action</Button>
    </MessageBarActions>
  </MessageBar>
);
```

### Default

```jsx
import * as React from "react";
import { DismissRegular } from "@fluentui/react-icons";
import {
  MessageBar,
  MessageBarActions,
  MessageBarTitle,
  MessageBarBody,
  Button,
  Link,
} from "@fluentui/react-components";

export const Default = () => (
  <MessageBar>
    <MessageBarBody>
      <MessageBarTitle>Descriptive title</MessageBarTitle>
      Message providing information to the user with actionable insights.{" "}
      <Link>Link</Link>
    </MessageBarBody>
    <MessageBarActions
      containerAction={
        <Button
          aria-label="dismiss"
          appearance="transparent"
          icon={<DismissRegular />}
        />
      }
    >
      <Button>Action</Button>
      <Button>Action</Button>
    </MessageBarActions>
  </MessageBar>
);
```

### Intent

MessageBar components come built-in with preset intents that determine the design and aria live announcement, While it is recommended to use the preset intents, it's possible to configure the aria live politeness with the `politeness` prop.

```jsx
import * as React from "react";
import {
  MessageBar,
  MessageBarTitle,
  MessageBarBody,
  MessageBarIntent,
  Link,
  makeStyles,
} from "@fluentui/react-components";

const useClasses = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});
const intents: MessageBarIntent[] = ["info", "warning", "error", "success"];

export const Intent = () => {
  const classes = useClasses();

  return (
    <div className={classes.container}>
      {intents.map((intent) => (
        <MessageBar key={intent} intent={intent}>
          <MessageBarBody>
            <MessageBarTitle>Intent {intent}</MessageBarTitle>
            Message providing information to the user with actionable insights.{" "}
            <Link>Link</Link>
          </MessageBarBody>
        </MessageBar>
      ))}
    </div>
  );
};
```

### Shape

MessageBar can have either rounded or square corners, please follow the usage guidance for these shapes:

*   **_rounded_** used for component level message bars
*   **_square_** used for page/app level message bars

```jsx
import * as React from "react";
import {
  makeStyles,
  MessageBar,
  MessageBarTitle,
  MessageBarBody,
} from "@fluentui/react-components";

const useClasses = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});

export const Shape = () => {
  const classes = useClasses();

  return (
    <div className={classes.container}>
      <MessageBar shape="rounded">
        <MessageBarBody>
          <MessageBarTitle>Rounded shape</MessageBarTitle>
          This message has rounded shape.
        </MessageBarBody>
      </MessageBar>
      <MessageBar shape="square">
        <MessageBarBody>
          <MessageBarTitle>Square shape</MessageBarTitle>
          This message has square shape.
        </MessageBarBody>
      </MessageBar>
    </div>
  );
};
```

### Actions

The `MessageBar` can have different actions.

```jsx
import * as React from "react";
import { DismissRegular } from "@fluentui/react-icons";
import {
  MessageBar,
  MessageBarActions,
  MessageBarBody,
  MessageBarTitle,
  Button,
  Link,
} from "@fluentui/react-components";

export const Actions = () => (
  <MessageBar>
    <MessageBarBody>
      <MessageBarTitle>Descriptive title</MessageBarTitle>
      Message providing information to the user with actionable insights.{" "}
      <Link>Link</Link>
    </MessageBarBody>
    <MessageBarActions
      containerAction={
        <Button appearance="transparent" icon={<DismissRegular />} />
      }
    >
      <Button>Action</Button>
      <Button>Action</Button>
    </MessageBarActions>
  </MessageBar>
);
```

### Dismiss

MessageBar components should be used in a `MessageBarGroup` when possible to enable exit animations. Once inside a `MessageBarGroup` component, the default exit animation will trigger automatically when the component is unmounted from DOM.

```jsx
import * as React from "react";
import { DismissRegular } from "@fluentui/react-icons";
import {
  MessageBar,
  MessageBarActions,
  MessageBarTitle,
  MessageBarBody,
  MessageBarGroup,
  MessageBarIntent,
  Button,
  Link,
  makeStyles,
  tokens,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  messageBarGroup: {
    padding: tokens.spacingHorizontalMNudge,
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
    gap: "10px",

    height: "300px",
    overflow: "auto",
    border: `2px solid ${tokens.colorBrandForeground1}`,
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "end",
    gap: "5px",
  },
});

const intents: MessageBarIntent[] = ["info", "warning", "error", "success"];

interface ExampleMessage {
  intent: MessageBarIntent;
  id: number;
}

export const Dismiss = () => {
  const styles = useStyles();

  const counterRef = React.useRef(0);
  const [messages, setMessages] = React.useState<ExampleMessage[]>([]);

  const addMessage = () => {
    const intent = intents[Math.floor(Math.random() * intents.length)];
    const newMessage = { intent, id: counterRef.current++ };

    setMessages((s) => [newMessage, ...s]);
  };
  const clearMessages = () => setMessages([]);
  const dismissMessage = (messageId: number) =>
    setMessages((s) => s.filter((entry) => entry.id !== messageId));

  return (
    <>
      <div className={styles.buttonGroup}>
        <Button appearance="primary" onClick={addMessage}>
          Add message
        </Button>
        <Button onClick={clearMessages}>Clear</Button>
      </div>

      <MessageBarGroup className={styles.messageBarGroup}>
        {messages.map(({ intent, id }) => (
          <MessageBar key={`${intent}-${id}`} intent={intent}>
            <MessageBarBody>
              <MessageBarTitle>Descriptive title</MessageBarTitle>
              Message providing information to the user with actionable
              insights. <Link>Link</Link>
            </MessageBarBody>
            <MessageBarActions
              containerAction={
                <Button
                  onClick={() => dismissMessage(id)}
                  aria-label="dismiss"
                  appearance="transparent"
                  icon={<DismissRegular />}
                />
              }
            />
          </MessageBar>
        ))}
      </MessageBarGroup>
    </>
  );
};
```

### Animation

Enter animations are also handled within the `MessageBarGroup`. However avoid entry animations for MessageBar components on page load. However, MessageBar components that are mounted during the lifecycle of an app can use enter animations.

> ⚠️ Animation will only function if the only children of `MessageBarGroup` are `MessageBar` components. Do not wrap `MessageBar` with other components. This is a known limitation we are actively working on.

```jsx
import * as React from "react";
import { DismissRegular } from "@fluentui/react-icons";
import {
  MessageBar,
  MessageBarActions,
  MessageBarTitle,
  MessageBarBody,
  MessageBarGroup,
  MessageBarGroupProps,
  MessageBarIntent,
  Button,
  Link,
  makeStyles,
  tokens,
  Field,
  RadioGroup,
  Radio,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  controlsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  messageBarGroup: {
    padding: tokens.spacingHorizontalMNudge,
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
    gap: "10px",

    height: "300px",
    overflow: "auto",
    border: `2px solid ${tokens.colorBrandForeground1}`,
  },
  field: {
    flexGrow: 1,
    alignItems: "center",
    gridTemplateColumns: "max-content auto",
  },
  buttonGroup: {
    display: "flex",
    gap: "5px",
  },
});

const intents: MessageBarIntent[] = ["info", "warning", "error", "success"];

interface ExampleMessage {
  intent: MessageBarIntent;
  id: number;
}

export const Animation = () => {
  const styles = useStyles();
  const counterRef = React.useRef(0);

  const [animate, setAnimate] =
    React.useState<MessageBarGroupProps["animate"]>("both");
  const [messages, setMessages] = React.useState<ExampleMessage[]>([]);

  const addMessage = () => {
    const intent = intents[Math.floor(Math.random() * intents.length)];
    const newMessage = { intent, id: counterRef.current++ };

    setMessages((s) => [newMessage, ...s]);
  };
  const clearMessages = () => setMessages([]);
  const dismissMessage = (messageId: number) =>
    setMessages((s) => s.filter((entry) => entry.id !== messageId));

  return (
    <div>
      <div className={styles.controlsContainer}>
        <Field
          className={styles.field}
          label="Select animation type:"
          orientation="horizontal"
        >
          <RadioGroup
            layout="horizontal"
            onChange={(_, { value }) =>
              setAnimate(value as MessageBarGroupProps["animate"])
            }
            value={animate}
          >
            <Radio label="both" value="both" />
            <Radio label="exit-only" value="exit-only" />
          </RadioGroup>
        </Field>

        <div className={styles.buttonGroup}>
          <Button appearance="primary" onClick={addMessage}>
            Add message
          </Button>
          <Button onClick={clearMessages}>Clear</Button>
        </div>
      </div>

      <MessageBarGroup animate={animate} className={styles.messageBarGroup}>
        {messages.map(({ intent, id }) => (
          <MessageBar key={`${intent}-${id}`} intent={intent}>
            <MessageBarBody>
              <MessageBarTitle>Descriptive title</MessageBarTitle>
              Message providing information to the user with actionable
              insights. <Link>Link</Link>
            </MessageBarBody>
            <MessageBarActions
              containerAction={
                <Button
                  onClick={() => dismissMessage(id)}
                  aria-label="dismiss"
                  appearance="transparent"
                  icon={<DismissRegular />}
                />
              }
            />
          </MessageBar>
        ))}
      </MessageBarGroup>
    </div>
  );
};
```

### Reflow

The `MessageBar` will reflow by default once the body content wraps to a second line. This changes the layout of the actions in the MessageBar.

```jsx
import * as React from "react";
import {
  Button,
  Link,
  makeStyles,
  tokens,
  Switch,
  mergeClasses,
  MessageBar,
  MessageBarActions,
  MessageBarBody,
  MessageBarTitle,
} from "@fluentui/react-components";
import { DismissRegular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  compact: {
    width: "600px",
  },
  resizableArea: {
    display: "flex",
    flexDirection: "column",
    padding: "30px 10px",
    gap: "10px",
    border: `2px solid ${tokens.colorBrandBackground}`,
    position: "relative",
    overflow: "hidden",

    "::after": {
      content: `'Resizable Area'`,
      position: "absolute",
      padding: "1px 4px 1px",
      top: "-2px",
      left: "-2px",
      fontFamily: "monospace",
      fontSize: "15px",
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: "1px",
      color: tokens.colorNeutralForegroundOnBrand,
      backgroundColor: tokens.colorBrandBackground,
    },
  },
});

export const Reflow = () => {
  const styles = useStyles();
  const [compact, setCompact] = React.useState(true);
  return (
    <>
      <Switch
        label={compact ? "Compact width" : "Full width"}
        checked={compact}
        onChange={(_, { checked }) => setCompact(checked)}
      />

      <div
        className={mergeClasses(
          styles.resizableArea,
          compact && styles.compact
        )}
      >
        <MessageBar intent="success">
          <MessageBarBody>
            <MessageBarTitle>Descriptive title</MessageBarTitle>
            Message providing information to the user with actionable insights.{" "}
            <Link>Link</Link>
          </MessageBarBody>
          <MessageBarActions
            containerAction={
              <Button
                aria-label="dismiss"
                appearance="transparent"
                icon={<DismissRegular />}
              />
            }
          >
            <Button>Action</Button>
            <Button>Action</Button>
          </MessageBarActions>
        </MessageBar>
      </div>
    </>
  );
};
```

### Manual Layout

It's possible to opt out of automatic reflow with the `layout` prop. This can be useful if an application has an existing responsive design mechanism.

```jsx
import * as React from "react";
import { DismissRegular } from "@fluentui/react-icons";
import {
  MessageBar,
  MessageBarActions,
  MessageBarBody,
  MessageBarTitle,
  Button,
  Link,
  Switch,
} from "@fluentui/react-components";

const intents = ["info", "warning", "error", "success"] as const;
export const ManualLayout = () => {
  const [single, setSingle] = React.useState(true);
  return (
    <>
      <Switch
        label={single ? "Single line layout" : "Multi line layout"}
        checked={single}
        onChange={(_, { checked }) => setSingle(checked)}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {intents.map((intent) => (
          <MessageBar
            key={intent}
            layout={single ? "singleline" : "multiline"}
            intent={intent}
          >
            <MessageBarBody>
              <MessageBarTitle>Descriptive title</MessageBarTitle>
              Message providing information to the user with actionable
              insights. <Link>Link</Link>
            </MessageBarBody>
            <MessageBarActions
              containerAction={
                <Button
                  aria-label="dismiss"
                  appearance="transparent"
                  icon={<DismissRegular />}
                />
              }
            >
              <Button>Action</Button>
              <Button>Action</Button>
            </MessageBarActions>
          </MessageBar>
        ))}
      </div>
    </>
  );
};
```