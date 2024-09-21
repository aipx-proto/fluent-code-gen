# Label

A label provides a name or title for an input.

```jsx
import * as React from "react";
import { Label } from "@fluentui/react-components";
import type { LabelProps } from "@fluentui/react-components";

export const Default = (props: LabelProps) => (
  <Label {...props}>This is a label</Label>
);
```

### Default

```jsx
import * as React from "react";
import { Label } from "@fluentui/react-components";
import type { LabelProps } from "@fluentui/react-components";

export const Default = (props: LabelProps) => (
  <Label {...props}>This is a label</Label>
);
```

### Size

A Label supports `small`, `medium`, and `large` sizes.

```jsx
import * as React from "react";
import { Label } from "@fluentui/react-components";

export const Size = () => {
  return (
    <>
      <Label size="small">Small</Label>
      <Label size="medium">Medium</Label>
      <Label size="large">Large</Label>
    </>
  );
};
```

### Weight

A Label with a semibold font weight.

```jsx
import * as React from "react";
import { Label } from "@fluentui/react-components";

export const Weight = () => <Label weight="semibold">Strong label</Label>;
```

### Disabled

A Label can be disabled. Since this state does not meet the required accessibility contrast ratio, it should be used sparingly and make it clear that there's no interaction with the control associated with it.

```jsx
import * as React from "react";
import { Label } from "@fluentui/react-components";

export const Disabled = () => (
  <Label disabled required>
    Disabled label
  </Label>
);
```

### Required

A Label can display a required asterisk or a custom required indicator. This custom required indicator canbe a custom string or jsx content.

```jsx
import * as React from "react";
import { Label } from "@fluentui/react-components";

export const Required = () => (
  <>
    <Label required>Required label</Label>
    <Label required="***">Required label</Label>
  </>
);
```