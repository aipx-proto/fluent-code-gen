# InfoLabel

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