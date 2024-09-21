# Link

Links allow users to navigate between different locations. They can be used as standalone controls or inline with text.

```jsx
import * as React from "react";
import { Link } from "@fluentui/react-components";
import type { LinkProps } from "@fluentui/react-components";

export const Default = (props: LinkProps & { as?: "a" }) => (
  <Link href="https://www.bing.com" {...props}>
    This is a link
  </Link>
);
```

### Default

```jsx
import * as React from "react";
import { Link } from "@fluentui/react-components";
import type { LinkProps } from "@fluentui/react-components";

export const Default = (props: LinkProps & { as?: "a" }) => (
  <Link href="https://www.bing.com" {...props}>
    This is a link
  </Link>
);
```

### Appearance

```jsx
import * as React from "react";
import { Link } from "@fluentui/react-components";

export const Appearance = () => (
  <Link appearance="subtle" href="https://www.bing.com">
    Subtle link
  </Link>
);
```

### Inline

```jsx
import * as React from "react";
import { Link } from "@fluentui/react-components";

export const Inline = () => (
  <div>
    This is an{" "}
    <Link href="https://www.bing.com" inline>
      inline link
    </Link>{" "}
    used alongside other text
  </div>
);
```

### Disabled

```jsx
import * as React from "react";
import { Link } from "@fluentui/react-components";

export const Disabled = () => (
  <Link disabled href="https://www.bing.com">
    Disabled link
  </Link>
);
```

### Disabled Focusable

```jsx
import * as React from "react";
import { Link } from "@fluentui/react-components";

export const DisabledFocusable = () => (
  <Link inline disabled disabledFocusable href="https://www.bing.com">
    Disabled but still focusable
  </Link>
);
```

### As Button

When the `href` property is not provided, the component is rendered as an html `<button>`

```jsx
import * as React from "react";
import { Link } from "@fluentui/react-components";

export const AsButton = () => <Link>Render as a button</Link>;
```

### As Span

A Link can be rendered as an html `<span>`, in which case it will have `role="button"` set. Links that render as a span wrap correctly between lines, behaving as inline elements as opposed to links rendered as buttons, which always behave as inline-block elements that do not wrap correctly.

```jsx
import * as React from "react";
import { Link, makeResetStyles } from "@fluentui/react-components";

const useDivWithWidthClassName = makeResetStyles({
  width: "200px",
});

export const AsSpan = () => (
  <div className={useDivWithWidthClassName()}>
    The following link renders as a span.{" "}
    <Link as="span" inline>
      Links that render as a span wrap correctly between lines when their
      content is very long
    </Link>
    . This is because they behave as regular inline elements.
  </div>
);
```