# Text

```jsx
import * as React from "react";
import { Text } from "@fluentui/react-components";

export const Default = () => (
  <Text>This is an example of the Text component's usage.</Text>
);
```

### Default

```jsx
import * as React from "react";
import { Text } from "@fluentui/react-components";

export const Default = () => (
  <Text>This is an example of the Text component's usage.</Text>
);
```

### Presets

**Presets** are a set of components with predefined styles for typography, based in our Theme Tokens. They are used to create and share a consistent look and feel.  
All the base `Text` props can be used, except for `font`, `size` and `weight`.

```jsx
import * as React from "react";
import {
  makeStyles,
  Body1,
  Body1Strong,
  Body1Stronger,
  Body2,
  Caption1,
  Caption1Strong,
  Caption1Stronger,
  Caption2,
  Caption2Strong,
  Display,
  LargeTitle,
  Subtitle1,
  Subtitle2,
  Subtitle2Stronger,
  Title1,
  Title2,
  Title3,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    gap: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
  },
});

export const Presets = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Caption2>Caption2</Caption2>
      <Caption2Strong>Caption2Strong</Caption2Strong>
      <Caption1>Caption1</Caption1>
      <Caption1Strong>Caption1Strong</Caption1Strong>
      <Caption1Stronger>Caption1Stronger</Caption1Stronger>
      <Body1>Body1</Body1>
      <Body1Strong>Body1Strong</Body1Strong>
      <Body1Stronger>Body1Stronger</Body1Stronger>
      <Body2>Body2</Body2>
      <Subtitle2>Subtitle2</Subtitle2>
      <Subtitle2Stronger>Subtitle2Stronger</Subtitle2Stronger>
      <Subtitle1>Subtitle1</Subtitle1>
      <Title3>Title3</Title3>
      <Title2>Title2</Title2>
      <Title1>Title1</Title1>
      <LargeTitle>LargeTitle</LargeTitle>
      <Display>Display</Display>
    </div>
  );
};
```

### Font

```jsx
import * as React from "react";
import { makeStyles, Text } from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    gap: "16px",
    display: "flex",
    flexDirection: "column",
  },
});

export const Font = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Text font="base">This is the default font</Text>
      <Text font="numeric">This is numeric font</Text>
      <Text font="monospace">This is monospace font</Text>
    </div>
  );
};
```

### Size

```jsx
import * as React from "react";
import { makeStyles, Text } from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    gap: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
  },
});

export const Size = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Text size={100}>100</Text>
      <Text size={200}>200</Text>
      <Text size={300}>300</Text>
      <Text size={400}>400</Text>
      <Text size={500}>500</Text>
      <Text size={600}>600</Text>
      <Text size={700}>700</Text>
      <Text size={800}>800</Text>
      <Text size={900}>900</Text>
      <Text size={1000}>1000</Text>
    </div>
  );
};
```

### Weight

```jsx
import * as React from "react";
import { makeStyles, Text } from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    gap: "16px",
    display: "flex",
    flexDirection: "column",
  },
});

export const Weight = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Text weight="regular">Regular weight</Text>
      <Text weight="medium">Medium weight</Text>
      <Text weight="semibold">Semibold weight</Text>
      <Text weight="bold">Bold weight</Text>
    </div>
  );
};
```

### Italic

```jsx
import * as React from "react";
import { Text } from "@fluentui/react-components";

export const Italic = () => <Text italic>Italic text</Text>;
```

### Underline

```jsx
import * as React from "react";
import { Text } from "@fluentui/react-components";

export const Underline = () => <Text underline>Underlined text</Text>;
```

### Strike Through

```jsx
import * as React from "react";
import { Text } from "@fluentui/react-components";

export const StrikeThrough = () => (
  <Text strikethrough>Strikethrough text</Text>
);
```

### Truncate

```jsx
import * as React from "react";
import { makeStyles, Text } from "@fluentui/react-components";

const useStyles = makeStyles({
  text: {
    overflow: "hidden",
    width: "240px",
    display: "block",
  },
});

export const Truncate = () => {
  const styles = useStyles();

  return (
    <Text truncate wrap={false} className={styles.text}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere aliquam
      nisi numquam, fugit recusandae eligendi aspernatur odio minus? Incidunt
      maxime ipsam dolorem quia quas aliquam, quasi consequatur! Ea, minus
      eaque.
    </Text>
  );
};
```

### Alignment

```jsx
import * as React from "react";
import { makeStyles, Text } from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    gap: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
});

export const Alignment = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Text align="start">Aligned to start</Text>
      <Text align="center">Aligned to center</Text>
      <Text align="end">Aligned to end</Text>
      <Text align="justify">
        Justified text: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium accusamus voluptate autem? Recusandae alias corporis dicta
        quisquam sequi molestias deleniti, libero necessitatibus, eligendi,
        omnis cumque enim asperiores quasi quidem sit. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Possimus repellat consectetur, sed
        aperiam ex nulla repellendus tempora vero illo aliquam autem! Impedit
        ipsa praesentium vero veritatis unde eos, fuga magnam!
      </Text>
    </div>
  );
};
```