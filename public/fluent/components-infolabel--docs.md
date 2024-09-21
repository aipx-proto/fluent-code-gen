# InfoLabel

An InfoLabel is a Label with an InfoButton at the end, properly handling layout and accessibility properties.
It can be used as a drop-in replacement for Label when an InfoButton is also needed. InfoButton/InfoLabel pattern What is an InfoLabel? An InfoLabel is composed of two components and a wrapper. The main component is a Label and the secondary component is an InfoButton.
We packaged both components to be able to achieve the correct accessibility out of the box. We automatically link the label to the
button from the InfoButton component and apply aria-owns to the wrapper when the InfoButton's Popover is open. In addition, InfoLabel
allows you to render only the InfoButton if that's desired. The reason why we don't export InfoButton separately is to avoid having
issues with aria-owns. The PopoverSurface must be linked to the wrapper of the InfoButton when open, not doing so results in a
violation. What is the InfoButton pattern? The InfoButton pattern is a button that exposes additional information about a field or a concept. To trigger the Popover, the user may
activate the button by clicking on it and focusing on it and pressing enter or space. When the Popover is open, the focus is programmatically moved
to the PopoverSurface. To close the Popover, the user may click the button again, click outside the popover, press the escape key, or tab out of
the PopoverSurface. Why is focus moved to the PopoverSurface? The reason why we move focus to the PopoverSurface is to allow the user to navigate the Popover with the keyboard. This allows screen reader and keyboard
users to read the content and interact with it without having to use the mouse and not have unreachable content. We move the focus specifically to the
PopoverSurface and not the first focusable element because there might be a case where there's a paragraph of text and the first focusable element is at the
bottom of the Surface. In this case, a screen reader user might not know there's more content above and therefore miss it. Can the InfoButton be opened on focus and not move focus to the PopoverSurface? InfoButtons can not be opened on focus. The pattern where you have an icon and a tooltip that appears on focus is not the InfoButton pattern. The tooltip
pattern is meant to have short text and no interaction with the content. We believe that if the content is short or even a few words, it should be included
in the label or a secondary label. If the content is longer and/or has interaction, then it must be an InfoButton. If the tooltip + icon pattern is still needed, refer to the Icon example in tooltip on how to correctly achieve this pattern. Note that when using a
tooltip, the content must be short and not have interaction.

```jsx
import * as React from "react";

import { InfoLabel, InfoLabelProps, Link } from "@fluentui/react-components";

export const Default = (props: Partial<InfoLabelProps>) => (
  <InfoLabel
    info={
      <>
        This is example information for an InfoLabel.{" "}
        <Link href="https://react.fluentui.dev">Learn more</Link>
      </>
    }
    {...props}
  >
    Example label
  </InfoLabel>
);
```

### Default

```jsx
import * as React from "react";

import { InfoLabel, InfoLabelProps, Link } from "@fluentui/react-components";

export const Default = (props: Partial<InfoLabelProps>) => (
  <InfoLabel
    info={
      <>
        This is example information for an InfoLabel.{" "}
        <Link href="https://react.fluentui.dev">Learn more</Link>
      </>
    }
    {...props}
  >
    Example label
  </InfoLabel>
);
```

### Required

When marked `required`, the indicator asterisk is placed before the InfoButton.

```jsx
import * as React from "react";

import { InfoLabel } from "@fluentui/react-components";

export const Required = () => (
  <InfoLabel info="Example info" required>
    Required label
  </InfoLabel>
);
```

### Size

InfoLabel's `size` prop affects the size of the Label and InfoButton. The default size is medium. The small size only meets WCAG's minimum target size requirement if it has at least 2px of non-interactive space on all sides.

```jsx
import * as React from "react";

import { InfoLabel, makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    alignItems: "start",
    display: "flex",
    flexDirection: "column",
    rowGap: tokens.spacingVerticalL,
  },
});

export const Size = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <InfoLabel size="small" info="Example small InfoLabel">
        Small label
      </InfoLabel>
      <InfoLabel size="medium" info="Example medium InfoLabel">
        Medium label
      </InfoLabel>
      <InfoLabel size="large" info="Example large InfoLabel">
        Large label
      </InfoLabel>
    </div>
  );
};
```

### In a Field

An `InfoLabel` can be used in a `Field` by rendering the label prop as an InfoLabel. This uses the slot render function support. See the code from this story for an example.

```jsx
import * as React from "react";

import {
  Field,
  InfoLabel,
  Input,
  LabelProps,
} from "@fluentui/react-components";

export const InField = () => (
  <Field
    label={{
      children: (_: unknown, props: LabelProps) => (
        <InfoLabel {...props} info="Example info">
          Field with info label
        </InfoLabel>
      ),
    }}
  >
    <Input />
  </Field>
);
```