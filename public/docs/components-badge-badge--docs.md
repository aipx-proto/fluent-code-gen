# Badge

```jsx
import * as React from "react";

import { Badge } from "@fluentui/react-components";
import type { BadgeProps } from "@fluentui/react-components";

export const Default = (props: BadgeProps) => <Badge {...props} />;
```

### Default

```jsx
import * as React from "react";

import { Badge } from "@fluentui/react-components";
import type { BadgeProps } from "@fluentui/react-components";

export const Default = (props: BadgeProps) => <Badge {...props} />;
```

### Appearance

A badge can have a `ghost`, `filled`, `outline`, or `tint` appearance. The default is `filled`.

```jsx
import * as React from "react";

import { Badge } from "@fluentui/react-components";

export const Appearance = () => {
  return (
    <>
      <Badge appearance="filled">999+</Badge>
      <Badge appearance="ghost">999+</Badge>
      <Badge appearance="outline">999+</Badge>
      <Badge appearance="tint">999+</Badge>
    </>
  );
};
```

### Sizes

A badge supports `tiny`, `extra-small`, `small`, `medium`, `large`, and `extra-large` sizes. The default is `medium`.

```jsx
import * as React from "react";

import { Badge } from "@fluentui/react-components";

export const Sizes = () => {
  return (
    <>
      <Badge size="tiny" />
      <Badge size="extra-small" />
      <Badge size="small" />
      <Badge size="medium" />
      <Badge size="large" />
      <Badge size="extra-large" />
    </>
  );
};
```

### Shapes

A badge can have `square`, `rounded` or `circular` shape. The default is `circular`.

```jsx
import * as React from "react";

import { Badge } from "@fluentui/react-components";

export const Shapes = () => {
  return (
    <>
      <Badge shape="square" />
      <Badge shape="rounded" />
      <Badge shape="circular" />
    </>
  );
};
```

### Color

A badge can have different colors. The available colors are `brand`, `danger`, `important`, `informative`, `severe`, `subtle`, `success` or `warning`. The default is `brand`. Information conveyed by color should also be communicated in another way to meet accessibility requirements.

```jsx
import * as React from "react";

import { Badge } from "@fluentui/react-components";

export const Color = () => {
  return (
    <>
      <Badge appearance="filled" color="brand">
        999+
      </Badge>
      <Badge appearance="filled" color="danger">
        999+
      </Badge>
      <Badge appearance="filled" color="important">
        999+
      </Badge>
      <Badge appearance="filled" color="informative">
        999+
      </Badge>
      <Badge appearance="filled" color="severe">
        999+
      </Badge>
      <Badge appearance="filled" color="subtle">
        999+
      </Badge>
      <Badge appearance="filled" color="success">
        999+
      </Badge>
      <Badge appearance="filled" color="warning">
        999+
      </Badge>
    </>
  );
};
```

### Icon

A badge can display an icon. If the icon is meaningful, then either the icon must have a label or the parent control's label must include the information conveyed by the icon.

```jsx
import * as React from "react";

import { Badge } from "@fluentui/react-components";
import { ClipboardPasteRegular as PasteIcon } from "@fluentui/react-icons";

export const Icon = () => {
  return <Badge size="medium" icon={<PasteIcon />} />;
};
```