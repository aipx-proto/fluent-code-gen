# Rating

A Rating component allows users to provide a rating for a particular item. Rating allows customers to determine a sense of value of a good or a service. By default, the rating is selected out of 5 stars, but the number and symbol used can be customized. To display the result of other users' rating values, use RatingDisplay instead.

```jsx
import * as React from "react";
import { Rating, RatingProps } from "@fluentui/react-components";

export const Default = (props: Partial<RatingProps>) => {
  return <Rating {...props} />;
};
```

### Default

```jsx
import * as React from "react";
import { Rating, RatingProps } from "@fluentui/react-components";

export const Default = (props: Partial<RatingProps>) => {
  return <Rating {...props} />;
};
```

### Controlled Value

The selected rating value can be controlled using the `value` and `onChange` props.

```jsx
import * as React from "react";
import { Rating } from "@fluentui/react-components";
import { Button } from "@fluentui/react-components";

export const ControlledValue = () => {
  const [value, setValue] = React.useState(4);
  return (
    <>
      <Rating value={value} onChange={(_, data) => setValue(data.value)} />
      <Button onClick={() => setValue(0)}>Clear Rating</Button>
    </>
  );
};
```

### Step

You can specify half values in the Rating with `step={0.5}`.

```jsx
import * as React from "react";
import { Rating } from "@fluentui/react-components";

export const Step = () => {
  return <Rating step={0.5} defaultValue={3.5} />;
};
```

### Max

You can specify the number of elements in the Rating with the `max` prop.

```jsx
import * as React from "react";
import { Rating } from "@fluentui/react-components";

export const Max = () => {
  return <Rating max={10} defaultValue={5} />;
};
```

### Size

A Rating's `size` can be `small`, `medium`, `large`, or `extra-large`.

```jsx
import * as React from "react";
import { Rating } from "@fluentui/react-components";
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
      <Rating defaultValue={3} size="small" />
      <Rating defaultValue={3} size="medium" />
      <Rating defaultValue={3} size="large" />
      <Rating defaultValue={3} size="extra-large" />
    </div>
  );
};
```

### Color

A Rating's `color` can be `neutral` (default), `brand`, or `marigold`.

```jsx
import * as React from "react";
import { Rating } from "@fluentui/react-components";
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
      <Rating defaultValue={3} />

      <Rating color="brand" defaultValue={3} />

      <Rating color="marigold" defaultValue={3} />
    </div>
  );
};
```

### Shape

You can pass in custom icons to the Rating component. You can specify the icons with the `iconFilled` and `iconOutline` props.

```jsx
import * as React from "react";
import { Rating } from "@fluentui/react-components";
import {
  CircleFilled,
  CircleRegular,
  SquareFilled,
  SquareRegular,
} from "@fluentui/react-icons";
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
      <Rating
        iconFilled={CircleFilled}
        iconOutline={CircleRegular}
        step={0.5}
      />
      <Rating
        iconFilled={SquareFilled}
        iconOutline={SquareRegular}
        step={0.5}
      />
    </div>
  );
};
```