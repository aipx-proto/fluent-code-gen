# PresenceBadge

A presence badge is a badge that displays a status indicator such as available, away, or busy.

```jsx
import * as React from "react";

import { PresenceBadge } from "@fluentui/react-components";

export const Default = () => <PresenceBadge />;
```

### Default

```jsx
import * as React from "react";

import { PresenceBadge } from "@fluentui/react-components";

export const Default = () => <PresenceBadge />;
```

### Sizes

A presence badge supports `tiny`, `extra-small`, `small`, `medium`, and `extra-large` sizes. The default is `medium`.

```jsx
import * as React from "react";

import { PresenceBadge } from "@fluentui/react-components";

export const Sizes = () => {
  return (
    <>
      <PresenceBadge size="tiny" />
      <PresenceBadge size="extra-small" />
      <PresenceBadge size="small" />
      <PresenceBadge size="medium" />
      <PresenceBadge size="large" />
      <PresenceBadge size="extra-large" />
    </>
  );
};
```

### Status

A presence badge supports `available`, `away`, `busy`, `do-not-disturb`, `offline`, `out-of-office`, `blocked` and `unknown` status. The default is `available`.

```jsx
import * as React from "react";

import { PresenceBadge } from "@fluentui/react-components";

export const Status = () => {
  return (
    <>
      <PresenceBadge status="available" />
      <PresenceBadge status="away" />
      <PresenceBadge status="busy" />
      <PresenceBadge status="do-not-disturb" />
      <PresenceBadge status="offline" />
      <PresenceBadge status="out-of-office" />
      <PresenceBadge status="blocked" />
      <PresenceBadge status="unknown" />
    </>
  );
};
```

### Out Of Office

A presence badge supports `available`, `away`, `busy`, `do-not-disturb`, `offline`, `out-of-office`, `blocked` and `unknown` status when `outOfOffice` is set.

```jsx
import * as React from "react";

import { PresenceBadge } from "@fluentui/react-components";

export const OutOfOffice = () => {
  return (
    <>
      <PresenceBadge outOfOffice status="available" />
      <PresenceBadge outOfOffice status="away" />
      <PresenceBadge outOfOffice status="busy" />
      <PresenceBadge outOfOffice status="do-not-disturb" />
      <PresenceBadge outOfOffice status="offline" />
      <PresenceBadge outOfOffice status="out-of-office" />
      <PresenceBadge outOfOffice status="blocked" />
      <PresenceBadge outOfOffice status="unknown" />
    </>
  );
};
```