# AvatarGroup

An AvatarGroup is a graphical representation of multiple people associated with a given entity. AvatarGroup leverages the Avatar component, with each Avatar representing a person and containing their image, initials, or an icon. An AvatarGroup can be represented
in a spread, stack, or pie layout.

```jsx
import * as React from "react";
import {
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  partitionAvatarGroupItems,
} from "@fluentui/react-components";
import type { AvatarGroupProps } from "@fluentui/react-components";

const names = [
  "Johnie McConnell",
  "Allan Munger",
  "Erik Nason",
  "Kristin Patterson",
  "Daisy Phillips",
  "Carole Poland",
  "Carlos Slattery",
  "Robert Tolbert",
  "Kevin Sturgis",
  "Charlotte Waltson",
  "Elliot Woodward",
];

export const Default = (props: Partial<AvatarGroupProps>) => {
  const { inlineItems, overflowItems } = partitionAvatarGroupItems({
    items: names,
  });

  return (
    <AvatarGroup {...props}>
      {inlineItems.map((name) => (
        <AvatarGroupItem name={name} key={name} />
      ))}
      {overflowItems && (
        <AvatarGroupPopover>
          {overflowItems.map((name) => (
            <AvatarGroupItem name={name} key={name} />
          ))}
        </AvatarGroupPopover>
      )}
    </AvatarGroup>
  );
};
```

### Default

```jsx
import * as React from "react";
import {
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  partitionAvatarGroupItems,
} from "@fluentui/react-components";
import type { AvatarGroupProps } from "@fluentui/react-components";

const names = [
  "Johnie McConnell",
  "Allan Munger",
  "Erik Nason",
  "Kristin Patterson",
  "Daisy Phillips",
  "Carole Poland",
  "Carlos Slattery",
  "Robert Tolbert",
  "Kevin Sturgis",
  "Charlotte Waltson",
  "Elliot Woodward",
];

export const Default = (props: Partial<AvatarGroupProps>) => {
  const { inlineItems, overflowItems } = partitionAvatarGroupItems({
    items: names,
  });

  return (
    <AvatarGroup {...props}>
      {inlineItems.map((name) => (
        <AvatarGroupItem name={name} key={name} />
      ))}
      {overflowItems && (
        <AvatarGroupPopover>
          {overflowItems.map((name) => (
            <AvatarGroupItem name={name} key={name} />
          ))}
        </AvatarGroupPopover>
      )}
    </AvatarGroup>
  );
};
```

### Layout

An AvatarGroup supports three layouts: spread, stack, and pie. The default is spread.

```jsx
import * as React from "react";
import {
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  makeStyles,
  partitionAvatarGroupItems,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "grid",
    flexDirection: "column",
    rowGap: "10px",
  },
});

const names = [
  "Johnie McConnell",
  "Allan Munger",
  "Erik Nason",
  "Kristin Patterson",
  "Daisy Phillips",
  "Carole Poland",
  "Carlos Slattery",
  "Robert Tolbert",
  "Kevin Sturgis",
  "Charlotte Waltson",
  "Elliot Woodward",
];

export const Layout = () => {
  const styles = useStyles();
  const partitionedItems = partitionAvatarGroupItems({ items: names });
  const piePartitionedItems = partitionAvatarGroupItems({
    items: names,
    layout: "pie",
  });

  return (
    <div className={styles.root}>
      <AvatarGroup layout="spread">
        {partitionedItems.inlineItems.map((name) => (
          <AvatarGroupItem name={name} key={name} />
        ))}
        {partitionedItems.overflowItems && (
          <AvatarGroupPopover>
            {partitionedItems.overflowItems.map((name) => (
              <AvatarGroupItem name={name} key={name} />
            ))}
          </AvatarGroupPopover>
        )}
      </AvatarGroup>
      <AvatarGroup layout="stack">
        {partitionedItems.inlineItems.map((name) => (
          <AvatarGroupItem name={name} key={name} />
        ))}
        {partitionedItems.overflowItems && (
          <AvatarGroupPopover>
            {partitionedItems.overflowItems.map((name) => (
              <AvatarGroupItem name={name} key={name} />
            ))}
          </AvatarGroupPopover>
        )}
      </AvatarGroup>
      <AvatarGroup layout="pie">
        {piePartitionedItems.inlineItems.map((name) => (
          <AvatarGroupItem name={name} key={name} />
        ))}
        {piePartitionedItems.overflowItems && (
          <AvatarGroupPopover>
            {piePartitionedItems.overflowItems.map((name) => (
              <AvatarGroupItem name={name} key={name} />
            ))}
          </AvatarGroupPopover>
        )}
      </AvatarGroup>
    </div>
  );
};
```

### Indicator

An AvatarGroup supports an icon and a count indicator. When size is less than 24, then icon will be used by default.

```jsx
import * as React from "react";
import {
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  makeStyles,
  partitionAvatarGroupItems,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "grid",
    flexDirection: "column",
    rowGap: "10px",
  },
});

const names = [
  "Johnie McConnell",
  "Allan Munger",
  "Erik Nason",
  "Kristin Patterson",
  "Daisy Phillips",
  "Carole Poland",
  "Carlos Slattery",
  "Robert Tolbert",
  "Kevin Sturgis",
  "Charlotte Waltson",
  "Elliot Woodward",
];

export const Indicator = () => {
  const styles = useStyles();
  const { inlineItems, overflowItems } = partitionAvatarGroupItems({
    items: names,
  });

  return (
    <div className={styles.root}>
      <AvatarGroup>
        {inlineItems.map((name) => (
          <AvatarGroupItem name={name} key={name} />
        ))}
        {overflowItems && (
          <AvatarGroupPopover indicator="count">
            {overflowItems.map((name) => (
              <AvatarGroupItem name={name} key={name} />
            ))}
          </AvatarGroupPopover>
        )}
      </AvatarGroup>
      <AvatarGroup>
        {inlineItems.map((name) => (
          <AvatarGroupItem name={name} key={name} />
        ))}
        {overflowItems && (
          <AvatarGroupPopover indicator="icon">
            {overflowItems.map((name) => (
              <AvatarGroupItem name={name} key={name} />
            ))}
          </AvatarGroupPopover>
        )}
      </AvatarGroup>
    </div>
  );
};
```

### Size Spread

An AvatarGroup with `spread` layout supports a range of sizes from 16 to 128. The default is 32.

```jsx
import * as React from "react";
import {
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  makeStyles,
  partitionAvatarGroupItems,
} from "@fluentui/react-components";
import type { AvatarSize } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "grid",
    flexDirection: "column",
    rowGap: "10px",
  },
});

const names = [
  "Johnie McConnell",
  "Allan Munger",
  "Erik Nason",
  "Kristin Patterson",
  "Daisy Phillips",
  "Carole Poland",
  "Carlos Slattery",
  "Robert Tolbert",
  "Kevin Sturgis",
  "Charlotte Waltson",
  "Elliot Woodward",
];

const sizes: AvatarSize[] = [
  16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128,
];

export const SizeSpread = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {sizes.map((size) => {
        const { inlineItems, overflowItems } = partitionAvatarGroupItems({
          items: names,
        });

        return (
          <AvatarGroup layout="spread" size={size} key={size}>
            {inlineItems.map((name) => (
              <AvatarGroupItem name={name} key={name} />
            ))}
            {overflowItems && (
              <AvatarGroupPopover>
                {overflowItems.map((name) => (
                  <AvatarGroupItem name={name} key={name} />
                ))}
              </AvatarGroupPopover>
            )}
          </AvatarGroup>
        );
      })}
    </div>
  );
};
```

### Size Stack

An AvatarGroup with `stack` layout supports a range of sizes from 16 to 128. The default is 32.

WARNING: do not make multiple avatars in a stack interactive unless the size is at least 28. Smaller sizes with overlapping click targets will fail to meet the WCAG target size requirement.

```jsx
import * as React from "react";
import {
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  makeStyles,
  partitionAvatarGroupItems,
} from "@fluentui/react-components";
import type { AvatarSize } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "grid",
    flexDirection: "column",
    rowGap: "10px",
  },
});

const names = [
  "Johnie McConnell",
  "Allan Munger",
  "Erik Nason",
  "Kristin Patterson",
  "Daisy Phillips",
  "Carole Poland",
  "Carlos Slattery",
  "Robert Tolbert",
  "Kevin Sturgis",
  "Charlotte Waltson",
  "Elliot Woodward",
];

const sizes: AvatarSize[] = [
  16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128,
];

export const SizeStack = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {sizes.map((size) => {
        const { inlineItems, overflowItems } = partitionAvatarGroupItems({
          items: names,
          layout: "stack",
        });

        return (
          <AvatarGroup layout="stack" size={size} key={size}>
            {inlineItems.map((name) => (
              <AvatarGroupItem name={name} key={name} />
            ))}
            {overflowItems && (
              <AvatarGroupPopover>
                {overflowItems.map((name) => (
                  <AvatarGroupItem name={name} key={name} />
                ))}
              </AvatarGroupPopover>
            )}
          </AvatarGroup>
        );
      })}
    </div>
  );
};
```

### Size Pie

An AvatarGroup with `pie` layout supports a range of sizes from 16 to 128. The default is 32.

```jsx
import * as React from "react";
import {
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  makeStyles,
  partitionAvatarGroupItems,
} from "@fluentui/react-components";
import type { AvatarSize } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "grid",
    flexDirection: "column",
    rowGap: "10px",
  },
});

const names = [
  "Johnie McConnell",
  "Allan Munger",
  "Erik Nason",
  "Kristin Patterson",
  "Daisy Phillips",
  "Carole Poland",
  "Carlos Slattery",
  "Robert Tolbert",
  "Kevin Sturgis",
  "Charlotte Waltson",
  "Elliot Woodward",
];

const sizes: AvatarSize[] = [
  16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128,
];

export const SizePie = () => {
  const styles = useStyles();
  const { inlineItems, overflowItems } = partitionAvatarGroupItems({
    items: names,
    layout: "pie",
  });

  return (
    <div className={styles.root}>
      {sizes.map((size) => {
        return (
          <AvatarGroup layout="pie" size={size} key={size}>
            {inlineItems.map((name) => (
              <AvatarGroupItem name={name} key={name} />
            ))}
            {overflowItems && (
              <AvatarGroupPopover>
                {overflowItems.map((name) => (
                  <AvatarGroupItem name={name} key={name} />
                ))}
              </AvatarGroupPopover>
            )}
          </AvatarGroup>
        );
      })}
    </div>
  );
};
```

### Tooltip

You can customize the tooltip of the AvatarGroupPopover, for example for translations.

```jsx
import * as React from "react";
import {
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  partitionAvatarGroupItems,
} from "@fluentui/react-components";
import type { AvatarGroupProps } from "@fluentui/react-components";

const names = [
  "Johnie McConnell",
  "Allan Munger",
  "Erik Nason",
  "Kristin Patterson",
  "Daisy Phillips",
  "Carole Poland",
  "Carlos Slattery",
  "Robert Tolbert",
  "Kevin Sturgis",
  "Charlotte Waltson",
  "Elliot Woodward",
];

export const Tooltip = (props: Partial<AvatarGroupProps>) => {
  const { inlineItems, overflowItems } = partitionAvatarGroupItems({
    items: names,
  });

  return (
    <AvatarGroup {...props}>
      {inlineItems.map((name) => (
        <AvatarGroupItem name={name} key={name} />
      ))}
      {overflowItems && (
        <AvatarGroupPopover
          tooltip={{ content: "My custom tooltip", relationship: "label" }}
        >
          {overflowItems.map((name) => (
            <AvatarGroupItem name={name} key={name} />
          ))}
        </AvatarGroupPopover>
      )}
    </AvatarGroup>
  );
};
```