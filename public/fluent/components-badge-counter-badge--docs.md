# Counter Badge

A counter badge is a badge that displays a numerical count.

```jsx
import * as React from "react";

import { CounterBadge } from "@fluentui/react-components";
import type { CounterBadgeProps } from "@fluentui/react-components";

export const Default = (args: CounterBadgeProps) => <CounterBadge {...args} />;
```

### Default

```jsx
import * as React from "react";

import { CounterBadge } from "@fluentui/react-components";
import type { CounterBadgeProps } from "@fluentui/react-components";

export const Default = (args: CounterBadgeProps) => <CounterBadge {...args} />;
```

### Appearance

A counter badge can have a `ghost` or `filled` appearance. The default is `filled`.

```jsx
import * as React from "react";

import { CounterBadge } from "@fluentui/react-components";

export const Appearance = () => {
  return (
    <>
      <CounterBadge count={5} appearance="filled" />
      <CounterBadge count={5} appearance="ghost" />
    </>
  );
};
```

### Shapes

A counter badge can have a `rounded` or `circular` shape. The default is `circular`.

```jsx
import * as React from "react";

import { CounterBadge } from "@fluentui/react-components";

export const Shapes = () => {
  return (
    <>
      <CounterBadge count={5} shape="circular" />
      <CounterBadge count={5} shape="rounded" />
    </>
  );
};
```

### Sizes

A counter badge supports `tiny`, `extra-small`, `small`, `medium`, `large`, and `extra-large` sizes. The default is `medium`.

```jsx
import * as React from "react";

import { CounterBadge } from "@fluentui/react-components";

export const Sizes = () => {
  return (
    <>
      <CounterBadge count={5} size="tiny" />
      <CounterBadge count={5} size="extra-small" />
      <CounterBadge count={5} size="small" />
      <CounterBadge count={5} size="medium" />
      <CounterBadge count={5} size="large" />
      <CounterBadge count={5} size="extra-large" />
    </>
  );
};
```

### Color

A counter badge can be different colors. The available colors are `brand`, `danger`, `important`, `informative`, `severe`, `severe`, `success` or `warning`. The default is `brand`. Information conveyed by color should also be communicated in another way to meet accessibility requirements.

```jsx
import * as React from "react";

import { CounterBadge } from "@fluentui/react-components";
export const Color = () => {
  return (
    <>
      <CounterBadge appearance="filled" color="brand" count={5} />
      <CounterBadge appearance="filled" color="danger" count={5} />
      <CounterBadge appearance="filled" color="important" count={5} />
      <CounterBadge appearance="filled" color="informative" count={5} />
    </>
  );
};
```

### Dot

A counter badge can display a small dot.

```jsx
import * as React from "react";

import { CounterBadge } from "@fluentui/react-components";

export const Dot = () => <CounterBadge count={0} dot />;
```