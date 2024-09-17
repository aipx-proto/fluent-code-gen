# Tag

```jsx
import * as React from "react";
import { Tag, TagProps } from "@fluentui/react-components";

export const Default = (props: Partial<TagProps>) => (
  <Tag {...props}>Primary text</Tag>
);
```

### Default

```jsx
import * as React from "react";
import { Tag, TagProps } from "@fluentui/react-components";

export const Default = (props: Partial<TagProps>) => (
  <Tag {...props}>Primary text</Tag>
);
```

### Icon

A Tag can render a custom icon if provided.

```jsx
import * as React from "react";
import { CalendarMonthRegular } from "@fluentui/react-icons";
import { Tag } from "@fluentui/react-components";

export const Icon = () => (
  <Tag icon={<CalendarMonthRegular />}>Primary text</Tag>
);
```

### Media

A tag can render a media, for example an Avatar.

```jsx
import * as React from "react";
import { Tag, Avatar } from "@fluentui/react-components";

export const Media = () => (
  <Tag media={<Avatar name="Katri Athokas" badge={{ status: "busy" }} />}>
    Primary text
  </Tag>
);
```

### SecondaryText

A Tag can have a secondary text.

```jsx
import * as React from "react";
import { Tag } from "@fluentui/react-components";

export const SecondaryText = () => (
  <Tag secondaryText="Secondary text">Primary text</Tag>
);
```

### Dismiss

A tag can have a dismiss icon and become focusable. TagGroup can handle dismiss for a collection of tags. Ensure that focus is properly managed when all tags have been dismissed.

```jsx
import * as React from "react";
import {
  Tag,
  TagGroup,
  TagGroupProps,
  Button,
  makeStyles,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
  },
  resetButton: {
    width: "fit-content",
  },
});

const initialTags = [
  { value: "1", children: "Tag 1" },
  { value: "2", children: "Tag 2" },
  { value: "3", children: "Tag 3" },
];

/**
 * focus management for the reset button
 */
const useResetExample = (visibleTagsLength: number) => {
  const resetButtonRef = React.useRef<HTMLButtonElement>(null);
  const firstTagRef = React.useRef<HTMLButtonElement>(null);

  const prevVisibleTagsLengthRef = React.useRef<number>(visibleTagsLength);
  React.useEffect(() => {
    if (visibleTagsLength === 0) {
      resetButtonRef.current?.focus();
    } else if (prevVisibleTagsLengthRef.current === 0) {
      firstTagRef.current?.focus();
    }

    prevVisibleTagsLengthRef.current = visibleTagsLength;
  }, [visibleTagsLength]);

  return { firstTagRef, resetButtonRef };
};

export const Dismiss = () => {
  const [visibleTags, setVisibleTags] = React.useState(initialTags);
  const removeItem: TagGroupProps["onDismiss"] = (_e, { value }) => {
    setVisibleTags([...visibleTags].filter((tag) => tag.value !== value));
  };
  const resetItems = () => setVisibleTags(initialTags);
  const { firstTagRef, resetButtonRef } = useResetExample(visibleTags.length);

  const styles = useStyles();

  return (
    <div className={styles.container}>
      {visibleTags.length !== 0 && (
        <TagGroup onDismiss={removeItem} aria-label="Dismiss example">
          {visibleTags.map((tag, index) => (
            <Tag
              dismissible
              dismissIcon={{ "aria-label": "remove" }}
              value={tag.value}
              key={tag.value}
              ref={index === 0 ? firstTagRef : null}
            >
              {tag.children}
            </Tag>
          ))}
        </TagGroup>
      )}

      <Button
        onClick={resetItems}
        ref={resetButtonRef}
        disabled={visibleTags.length !== 0}
        className={styles.resetButton}
        size="small"
      >
        Reset the example
      </Button>
    </div>
  );
};
```

### Shape

A tag can be rounded or circular,

```jsx
import * as React from "react";
import { Tag, Avatar, makeStyles } from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";

const useContainerStyles = makeStyles({
  root: {
    display: "grid",
    rowGap: "10px",
    columnGap: "10px",
    gridTemplateColumns: "auto 1fr",
  },
});

export const Shape = () => {
  const containerStyles = useContainerStyles();
  return (
    <div className={containerStyles.root}>
      <Tag media={<Avatar name="Katri Athokas" badge={{ status: "busy" }} />}>
        Rounded
      </Tag>
      <Tag
        shape="circular"
        media={<Avatar name="Katri Athokas" badge={{ status: "busy" }} />}
      >
        Circular
      </Tag>

      <Tag
        dismissible
        dismissIcon={{ "aria-label": "remove" }}
        icon={<CalendarMonthRegular />}
        secondaryText="Secondary text"
      >
        Rounded
      </Tag>
      <Tag
        shape="circular"
        dismissible
        dismissIcon={{ "aria-label": "remove" }}
        icon={<CalendarMonthRegular />}
        secondaryText="Secondary text"
      >
        Circular
      </Tag>
    </div>
  );
};
```

### Size

A tag supports `medium`, `small` and `extra-small` size. Default size is `medium`.

```jsx
import * as React from "react";
import { Tag, Avatar, makeStyles } from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";

const useContainerStyles = makeStyles({
  innerWrapper: {
    alignItems: "start",
    columnGap: "10px",
    display: "flex",
  },
  outerWrapper: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
  },
});
export const Size = () => {
  const styles = useContainerStyles();
  return (
    <div className={styles.outerWrapper}>
      {/* medium */}
      <div className={styles.innerWrapper}>
        <Tag>Medium</Tag>
        <Tag
          dismissible
          dismissIcon={{ "aria-label": "remove" }}
          media={<Avatar name="Katri Athokas" badge={{ status: "busy" }} />}
        >
          Medium dismissible
        </Tag>
        <Tag icon={<CalendarMonthRegular />} shape="circular">
          Medium circular
        </Tag>
      </div>

      {/* small */}
      <div className={styles.innerWrapper}>
        <Tag size="small">Small</Tag>
        <Tag
          dismissible
          dismissIcon={{ "aria-label": "remove" }}
          size="small"
          media={<Avatar name="Katri Athokas" badge={{ status: "busy" }} />}
        >
          Small dismissible
        </Tag>
        <Tag size="small" icon={<CalendarMonthRegular />} shape="circular">
          Small circular
        </Tag>
      </div>

      {/* extra-small */}
      <div className={styles.innerWrapper}>
        <Tag size="extra-small">Extra small</Tag>
        <Tag
          dismissible
          dismissIcon={{ "aria-label": "remove" }}
          size="extra-small"
          media={<Avatar name="Katri Athokas" badge={{ status: "busy" }} />}
        >
          Extra small dismissible
        </Tag>
        <Tag
          size="extra-small"
          icon={<CalendarMonthRegular />}
          shape="circular"
        >
          Extra small circular
        </Tag>
      </div>
    </div>
  );
};
```

### Appearance

A tag can have a `filled`, `outline` or `brand` appearance. The default is `filled`.

```jsx
import * as React from "react";
import { Tag, makeStyles } from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";

const useContainerStyles = makeStyles({
  container: {
    columnGap: "10px",
    display: "flex",
  },
});
export const Appearance = () => {
  const styles = useContainerStyles();
  return (
    <div className={styles.container}>
      <Tag
        icon={<CalendarMonthRegular />}
        dismissible
        dismissIcon={{ "aria-label": "remove" }}
      >
        filled
      </Tag>
      <Tag
        appearance="outline"
        icon={<CalendarMonthRegular />}
        dismissible
        dismissIcon={{ "aria-label": "remove" }}
      >
        outline
      </Tag>
      <Tag
        appearance="brand"
        icon={<CalendarMonthRegular />}
        dismissible
        dismissIcon={{ "aria-label": "remove" }}
      >
        brand
      </Tag>
    </div>
  );
};
```

### Disabled

```jsx
import * as React from "react";
import { Tag, makeStyles } from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";

const useContainerStyles = makeStyles({
  container: {
    columnGap: "10px",
    display: "flex",
  },
});
export const Disabled = () => {
  const styles = useContainerStyles();
  return (
    <div className={styles.container}>
      <Tag
        disabled
        secondaryText="appearance=filled"
        icon={<CalendarMonthRegular />}
        dismissible
        dismissIcon={{ "aria-label": "remove" }}
      >
        Disabled
      </Tag>
      <Tag
        disabled
        secondaryText="appearance=outline"
        appearance="outline"
        icon={<CalendarMonthRegular />}
        dismissible
        dismissIcon={{ "aria-label": "remove" }}
      >
        Disabled
      </Tag>
      <Tag
        disabled
        secondaryText="appearance=brand"
        appearance="brand"
        icon={<CalendarMonthRegular />}
        dismissible
        dismissIcon={{ "aria-label": "remove" }}
      >
        Disabled
      </Tag>
    </div>
  );
};
```