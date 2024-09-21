# RatingDisplay

RatingDisplay is used to communicate user sentiment. By default, it shows rating as filled stars out of 5, as well as a text displaying the average value and the aggregate number of ratings.

```jsx
import * as React from "react";
import { RatingDisplay } from "@fluentui/react-components";

export const Default = () => <RatingDisplay value={4} />;
```

### Default

```jsx
import * as React from "react";
import { RatingDisplay } from "@fluentui/react-components";

export const Default = () => <RatingDisplay value={4} />;
```

### Value

The `value` controls the number of filled stars, and is written out next to the RatingDisplay. The number of filled stars is rounded to the nearest half-star.

```jsx
import * as React from "react";
import { RatingDisplay } from "@fluentui/react-components";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});

export const Value = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <RatingDisplay value={1} />
      <RatingDisplay value={3.7} />
      <RatingDisplay value={3.9} />
      <RatingDisplay value={5} />
    </div>
  );
};
```

### Count

You can specify the total number of ratings being displayed with the `count`. The number will be formatted with a thousands separator according to the user's locale.

```jsx
import * as React from "react";
import { RatingDisplay } from "@fluentui/react-components";

export const Count = () => {
  return <RatingDisplay value={5} count={1160} />;
};
```

### Compact

You can specify a compact RatingDisplay with `compact`.

```jsx
import * as React from "react";
import { RatingDisplay } from "@fluentui/react-components";

export const Compact = () => <RatingDisplay compact value={3} count={1160} />;
```

### Max

You can specify the number of elements in the RatingDisplay with the `max` prop.

```jsx
import * as React from "react";
import { RatingDisplay } from "@fluentui/react-components";

export const Max = () => {
  return <RatingDisplay max={10} value={5} />;
};
```

### Size

A RatingDisplay's `size` can be `small`, `medium`, `large`, or `extra-large`.

```jsx
import * as React from "react";
import { RatingDisplay } from "@fluentui/react-components";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});

export const Size = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <RatingDisplay value={3} size="small" />
      <RatingDisplay value={3} size="medium" />
      <RatingDisplay value={3} size="large" />
      <RatingDisplay value={3} size="extra-large" />
    </div>
  );
};
```

### Color

A RatingDisplay's `color` can be `neutral` (default), `brand`, or `marigold`.

```jsx
import * as React from "react";
import { RatingDisplay } from "@fluentui/react-components";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});

export const Color = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <RatingDisplay value={3} />

      <RatingDisplay color="brand" value={3} />

      <RatingDisplay color="marigold" value={3} />
    </div>
  );
};
```

### Shape

You can pass in a custom icon to the RatingDisplay component using the `icon` prop.

```jsx
import * as React from "react";
import { RatingDisplay } from "@fluentui/react-components";
import { CircleFilled, SquareFilled } from "@fluentui/react-icons";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});

export const Shape = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <RatingDisplay icon={CircleFilled} value={3.5} />
      <RatingDisplay icon={SquareFilled} value={3.5} />
    </div>
  );
};
```