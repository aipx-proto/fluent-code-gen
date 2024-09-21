# Tooltip

A tooltip displays additional information about another component.
The information is displayed above and near the target component.
Tooltip is not expected to handle interactive content.
If this is necessary behavior, an expand/collapse button + popover should be used instead.
Hover or focus the buttons in the examples to see their tooltips.

```jsx
import * as React from "react";

import { Button, Tooltip } from "@fluentui/react-components";
import { SlideTextRegular } from "@fluentui/react-icons";
import type { TooltipProps } from "@fluentui/react-components";

export const Default = (props: Partial<TooltipProps>) => (
  <Tooltip content="Example tooltip" relationship="label" {...props}>
    <Button icon={<SlideTextRegular />} size="large" />
  </Tooltip>
);
```

### Default

By default, Tooltip appears above its target element, when it is focused or hovered.

```jsx
import * as React from "react";

import { Button, Tooltip } from "@fluentui/react-components";
import { SlideTextRegular } from "@fluentui/react-icons";
import type { TooltipProps } from "@fluentui/react-components";

export const Default = (props: Partial<TooltipProps>) => (
  <Tooltip content="Example tooltip" relationship="label" {...props}>
    <Button icon={<SlideTextRegular />} size="large" />
  </Tooltip>
);
```

### Relationship: label

A tooltip can be used as the label of its trigger. For example, a label tooltip can be used for buttons that have only an icon and no visible label text.  
The tooltip sets its `content` as the trigger's `aria-label`, so the tooltip is accessible to screen readers and other assistive technology.

```jsx
import * as React from "react";
import {
  TextBoldRegular,
  TextItalicRegular,
  TextUnderlineRegular,
} from "@fluentui/react-icons";
import { Button, Tooltip } from "@fluentui/react-components";

export const RelationshipLabel = () => (
  <>
    <Tooltip content="Bold" relationship="label">
      <Button icon={<TextBoldRegular />} />
    </Tooltip>
    <Tooltip content="Italic" relationship="label">
      <Button icon={<TextItalicRegular />} />
    </Tooltip>
    <Tooltip content="Underline" relationship="label">
      <Button icon={<TextUnderlineRegular />} />
    </Tooltip>
  </>
);
```

### Relationship: description

A tooltip can be used as the description of its trigger. For example, this is used for controls that have a visible label, but the tooltip provides additional descriptive information.  
The tooltip sets itself as the trigger's `aria-describedby`, so the tooltip is accessible to screen readers and other assistive technology.

```jsx
import * as React from "react";
import { Button, Tooltip } from "@fluentui/react-components";

export const RelationshipDescription = () => (
  <Tooltip
    content="This is the description of the button"
    relationship="description"
  >
    <Button>Button</Button>
  </Tooltip>
);
```

### Appearance: inverted

The `appearance` prop can be set to `inverted` to use the theme's inverted colors.

```jsx
import * as React from "react";
import { Button, Tooltip } from "@fluentui/react-components";
import { SlideTextFilled } from "@fluentui/react-icons";

export const Inverted = () => (
  <Tooltip
    appearance="inverted"
    content="Example inverted tooltip"
    relationship="label"
  >
    <Button icon={<SlideTextFilled />} size="large" />
  </Tooltip>
);
```

### With Arrow

The `withArrow` prop causes the tooltip to have an arrow pointing to its target.

```jsx
import * as React from "react";
import { Button, Tooltip } from "@fluentui/react-components";
import { ArrowStepInRegular } from "@fluentui/react-icons";

export const WithArrow = () => (
  <Tooltip
    withArrow
    content="Example tooltip with an arrow"
    relationship="label"
  >
    <Button icon={<ArrowStepInRegular />} size="large" />
  </Tooltip>
);
```

### Styled

To style a tooltip, classNames must be passed through the content slot.

```jsx
import * as React from "react";

import {
  makeStyles,
  tokens,
  Button,
  Tooltip,
} from "@fluentui/react-components";
import { SlideTextRegular } from "@fluentui/react-icons";
import type { TooltipProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  tooltip: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundInverted,
  },
});

export const Styled = (props: Partial<TooltipProps>) => {
  const styles = useStyles();
  return (
    <Tooltip
      withArrow
      content={{ children: "Example tooltip", className: styles.tooltip }}
      relationship="label"
      {...props}
    >
      <Button icon={<SlideTextRegular />} size="large" />
    </Tooltip>
  );
};
```

### Custom Mount

Tooltips are rendered in a React Portal. By default that Portal is the outermost div. A custom `mountNode` can be provided in the case that the tooltip needs to be rendered elsewhere.

```jsx
import * as React from "react";

import { Button, Tooltip } from "@fluentui/react-components";
import { SlideTextRegular } from "@fluentui/react-icons";
import type { TooltipProps } from "@fluentui/react-components";

export const CustomMount = (props: Partial<TooltipProps>) => {
  const [ref, setRef] = React.useState<HTMLElement | null>();

  return (
    <>
      <Tooltip
        mountNode={ref}
        content="Example tooltip"
        relationship="label"
        {...props}
      >
        <Button icon={<SlideTextRegular />} size="large" />
      </Tooltip>
      <div ref={setRef} />
    </>
  );
};
```

### Controlled

The visibility of the tooltip can be controlled using the `visible` and `onVisibleChange` props.  
In this example, the tooltip will show on hover or focus _only if_ the checkbox is checked.

```jsx
import * as React from "react";
import { Checkbox, Tooltip } from "@fluentui/react-components";

export const Controlled = () => {
  const [visible, setVisible] = React.useState(false);
  const [enabled, setEnabled] = React.useState(false);
  return (
    <Tooltip
      content="The checkbox controls whether the tooltip can show on hover or focus"
      relationship="description"
      visible={visible && enabled}
      onVisibleChange={(_ev, data) => setVisible(data.visible)}
    >
      <Checkbox
        label="Enable the tooltip"
        onChange={(_ev, { checked }) => setEnabled(!!checked)}
      />
    </Tooltip>
  );
};
```

### Positioning

The positioning attribute can be used to change the relative placement of the tooltip to its anchor.  
Hover or focus the buttons in the example to see the tooltip's placement.

```jsx
import * as React from "react";
import { Button, Tooltip } from "@fluentui/react-components";
import {
  ArrowStepOutRegular,
  ArrowStepOverRegular,
} from "@fluentui/react-icons";

export const Positioning = () => {
  /* eslint-disable react/jsx-key */
  const positions = [
    ["above-start", <ArrowStepOverRegular transform="rotate(-90)" />],
    ["above", <ArrowStepOutRegular />],
    ["above-end", <ArrowStepOverRegular transform="rotate(90) scale(-1 1)" />],

    ["before-top", <ArrowStepOverRegular transform="scale(-1 1)" />],
    ["before", <ArrowStepOutRegular transform="rotate(-90)" />],
    ["before-bottom", <ArrowStepOverRegular transform="rotate(180)" />],

    ["after-top", <ArrowStepOverRegular />],
    ["after", <ArrowStepOutRegular transform="rotate(90)" />],
    [
      "after-bottom",
      <ArrowStepOverRegular transform="rotate(180) scale(-1 1)" />,
    ],

    [
      "below-start",
      <ArrowStepOverRegular transform="rotate(-90) scale(-1 1)" />,
    ],
    ["below", <ArrowStepOutRegular transform="rotate(180)" />],
    ["below-end", <ArrowStepOverRegular transform="rotate(90)" />],
  ] as const;

  return (
    <div
      style={{
        display: "grid",
        margin: "24px 128px",
        gap: "4px",
        gridTemplateAreas:
          '".             above-start   above         above-end     .            "' +
          '"before-top    .             .             .             after-top    "' +
          '"before        .             .             .             after        "' +
          '"before-bottom .             .             .             after-bottom "' +
          '".             below-start   below         below-end     .            "',
      }}
    >
      {positions.map(([position, icon]) => (
        <Tooltip
          key={position}
          withArrow
          positioning={position}
          content={position}
          relationship="label"
        >
          <Button
            icon={icon}
            size="large"
            style={{ gridArea: position, minWidth: "64px", height: "64px" }}
          />
        </Tooltip>
      ))}
    </div>
  );
};
```

### Target

The tooltip can be placed relative to a custom element using `positioning.target`. In this example, the tooltip points to the icon inside the button, but it could point to any element.

```jsx
import * as React from "react";
import { Button, Tooltip } from "@fluentui/react-components";
import { ArrowRoutingRegular } from "@fluentui/react-icons";

export const Target = () => {
  const [iconRef, setIconRef] = React.useState<HTMLSpanElement | null>(null);
  return (
    <Tooltip
      positioning={{ target: iconRef }}
      withArrow
      content="This tooltip points to the icon"
      relationship="description"
    >
      <Button icon={{ ref: setIconRef, children: <ArrowRoutingRegular /> }}>
        Button with icon
      </Button>
    </Tooltip>
  );
};
```

### Icon

Tooltips can be attached to icons to create an info icon.

```jsx
import * as React from "react";
import {
  Label,
  makeStyles,
  mergeClasses,
  tokens,
  Tooltip,
  useId,
} from "@fluentui/react-components";
import { Info16Regular } from "@fluentui/react-icons";
import type { TooltipProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    columnGap: tokens.spacingVerticalS,
  },
  visible: {
    color: tokens.colorNeutralForeground2BrandSelected,
  },
});

export const Icon = (props: Partial<TooltipProps>) => {
  const styles = useStyles();
  const contentId = useId("content");
  const [visible, setVisible] = React.useState(false);

  return (
    <div aria-owns={visible ? contentId : undefined} className={styles.root}>
      <Label>This is an icon with a Tooltip to show extra information</Label>
      <Tooltip
        content={{
          children: "Content must never contain focusable elements.",
          id: contentId,
        }}
        positioning="above-start"
        withArrow
        relationship="label"
        onVisibleChange={(e, data) => setVisible(data.visible)}
        {...props}
      >
        <Info16Regular
          tabIndex={0}
          className={mergeClasses(visible && styles.visible)}
        />
      </Tooltip>
    </div>
  );
};
```