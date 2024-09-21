# Skeleton

The Skeleton component is a temporary animation placeholder for when a service call takes time to return data and we don't want to block rendering the rest of the UI.

```jsx
import * as React from "react";
import { Skeleton, SkeletonItem } from "@fluentui/react-components";
import type { SkeletonProps } from "@fluentui/react-components";

export const Default = (props: Partial<SkeletonProps>) => (
  <Skeleton {...props} aria-label="Loading Content">
    <SkeletonItem />
  </Skeleton>
);
```

### Default

```jsx
import * as React from "react";
import { Skeleton, SkeletonItem } from "@fluentui/react-components";
import type { SkeletonProps } from "@fluentui/react-components";

export const Default = (props: Partial<SkeletonProps>) => (
  <Skeleton {...props} aria-label="Loading Content">
    <SkeletonItem />
  </Skeleton>
);
```

### Appearance

You can specify the appearance of the Skeleton. This is useful for instances where you want to render a Skeleton with a MaterialOS theme

```jsx
import * as React from "react";
import {
  Field,
  Skeleton,
  SkeletonItem,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import type { SkeletonProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  invertedWrapper: {
    backgroundColor: tokens.colorNeutralBackground1,
    paddingTop: "50px",
    paddingBottom: "50px",
  },
});

export const Appearance = (props: Partial<SkeletonProps>) => {
  const styles = useStyles();
  return (
    <div className={styles.invertedWrapper}>
      <Field validationMessage="Opaque Appearance" validationState="none">
        <Skeleton {...props} aria-label="Loading Content">
          <SkeletonItem />
        </Skeleton>
      </Field>
      <Field validationMessage="Translucent Appearance" validationState="none">
        <Skeleton
          {...props}
          appearance="translucent"
          aria-label="Loading Content"
        >
          <SkeletonItem />
        </Skeleton>
      </Field>
    </div>
  );
};
```

### Animation

You can specify the animation style of the Skeleton. The default is 'wave' with the alternative being 'pulse'

```jsx
import * as React from "react";
import {
  Field,
  Skeleton,
  SkeletonItem,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import type { SkeletonProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  invertedWrapper: {
    backgroundColor: tokens.colorNeutralBackground1,
    paddingTop: "50px",
    paddingBottom: "50px",
  },
});

export const Animation = (props: Partial<SkeletonProps>) => {
  const styles = useStyles();
  return (
    <div className={styles.invertedWrapper}>
      <Field validationMessage="Wave animation" validationState="none">
        <Skeleton {...props} aria-label="Loading Content">
          <SkeletonItem />
        </Skeleton>
      </Field>
      <Field validationMessage="Pulse animation" validationState="none">
        <Skeleton {...props} animation="pulse" aria-label="Loading Content">
          <SkeletonItem />
        </Skeleton>
      </Field>
    </div>
  );
};
```

### Row

You can make more complex wireframes using the basic building blocks of the Skeleton.

```jsx
import * as React from "react";
import {
  Skeleton,
  SkeletonItem,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import type { SkeletonProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  invertedWrapper: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
  firstRow: {
    alignItems: "center",
    display: "grid",
    paddingBottom: "10px",
    position: "relative",
    gap: "10px",
    gridTemplateColumns: "min-content 80%",
  },
  secondThirdRow: {
    alignItems: "center",
    display: "grid",
    paddingBottom: "10px",
    position: "relative",
    gap: "10px",
    gridTemplateColumns: "min-content 20% 20% 15% 15%",
  },
});

export const Row = (props: Partial<SkeletonProps>) => {
  const styles = useStyles();
  return (
    <div className={styles.invertedWrapper}>
      <Skeleton {...props} aria-label="Loading Content">
        <div className={styles.firstRow}>
          <SkeletonItem shape="circle" size={24} />
          <SkeletonItem shape="rectangle" size={16} />
        </div>
        <div className={styles.secondThirdRow}>
          <SkeletonItem shape="circle" size={24} />
          <SkeletonItem size={16} />
          <SkeletonItem size={16} />
          <SkeletonItem size={16} />
          <SkeletonItem size={16} />
        </div>
        <div className={styles.secondThirdRow}>
          <SkeletonItem shape="square" size={24} />
          <SkeletonItem size={16} />
          <SkeletonItem size={16} />
          <SkeletonItem size={16} />
          <SkeletonItem size={16} />
        </div>
      </Skeleton>
    </div>
  );
};
```

### Size

You can specify the size of the `SkeletonItem` by using the `size` prop. The size is a number that represents the height of the `SkeletonItem` in pixels

```jsx
import * as React from "react";
import {
  Skeleton,
  SkeletonItem,
  makeStyles,
  Text,
  tokens,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    background: tokens.colorNeutralBackground1,
    flexDirection: "column",
    padding: tokens.spacingHorizontalXL,
    gap: tokens.spacingVerticalL,
  },
  innerWrapper: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "25px 1fr",
    gridGap: tokens.spacingHorizontalS,
  },
});

const SIZES = [
  8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128,
] as const;

export const Size = () => {
  const styles = useStyles();
  return (
    <div className={styles.wrapper}>
      {SIZES.map((size) => (
        <div key={size} className={styles.innerWrapper}>
          <Text align="center">{size}</Text>
          <Skeleton aria-label="Loading Content">
            <SkeletonItem size={size} />
          </Skeleton>
        </div>
      ))}
    </div>
  );
};
```

### Shape

The shape of the `SkeletonItem` can be set to circle, rectangle, or square.

```jsx
import * as React from "react";
import {
  Skeleton,
  SkeletonItem,
  makeStyles,
  tokens,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  invertedWrapper: {
    background: tokens.colorNeutralBackground1,
    display: "flex",
    padding: tokens.spacingHorizontalXL,
  },
  row: {
    display: "grid",
    gap: tokens.spacingHorizontalL,
    gridTemplateColumns: "1fr 150px 1fr",
  },
});

export const Shape = () => {
  const styles = useStyles();
  return (
    <div className={styles.invertedWrapper}>
      <Skeleton className={styles.row} aria-label="Loading Content">
        <SkeletonItem size={64} shape="circle" />
        <SkeletonItem size={64} shape="rectangle" />
        <SkeletonItem size={64} shape="square" />
      </Skeleton>
    </div>
  );
};
```