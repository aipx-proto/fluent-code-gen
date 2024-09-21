# InteractionTag

A InteractionTag follows the same characteristics as a Tag, but with the added functionality of having a primary and secondary action. This is mostly used in scenarios where gaining more context for a InteractionTag is available for the user, an example would be clicking into a persona to expand their profile page.

```jsx
import * as React from "react";
import {
  InteractionTag,
  InteractionTagProps,
  InteractionTagPrimary,
} from "@fluentui/react-components";

export const Default = (props: Partial<InteractionTagProps>) => (
  <InteractionTag {...props}>
    <InteractionTagPrimary>Primary text</InteractionTagPrimary>
  </InteractionTag>
);
```

### Default

```jsx
import * as React from "react";
import {
  InteractionTag,
  InteractionTagProps,
  InteractionTagPrimary,
} from "@fluentui/react-components";

export const Default = (props: Partial<InteractionTagProps>) => (
  <InteractionTag {...props}>
    <InteractionTagPrimary>Primary text</InteractionTagPrimary>
  </InteractionTag>
);
```

### Icon

An InteractionTag can render a custom icon if provided.

```jsx
import * as React from "react";
import { CalendarMonthRegular } from "@fluentui/react-icons";
import {
  InteractionTag,
  InteractionTagPrimary,
} from "@fluentui/react-components";

export const Icon = () => (
  <InteractionTag>
    <InteractionTagPrimary icon={<CalendarMonthRegular />}>
      Primary text
    </InteractionTagPrimary>
  </InteractionTag>
);
```

### Media

An InteractionTag can render a media, for example an Avatar.

> When using VoiceOver, if you focus on the InteractionTag with media, Chrome will announce it as a "button group", whereas Safari will describe it simply as a "button". This discrepancy is acceptable since Chrome users can navigate within the button, while Safari users cannot.

```jsx
import * as React from "react";
import {
  InteractionTag,
  InteractionTagPrimary,
  Avatar,
} from "@fluentui/react-components";

export const Media = () => (
  <InteractionTag>
    <InteractionTagPrimary
      media={<Avatar name="Katri Athokas" badge={{ status: "busy" }} />}
    >
      Primary text
    </InteractionTagPrimary>
  </InteractionTag>
);
```

### SecondaryText

An InteractionTag can have a secondary text.

```jsx
import * as React from "react";
import {
  InteractionTag,
  InteractionTagPrimary,
} from "@fluentui/react-components";

export const SecondaryText = () => (
  <InteractionTag>
    <InteractionTagPrimary secondaryText="Secondary text">
      Primary text
    </InteractionTagPrimary>
  </InteractionTag>
);
```

### Dismiss

An InteractionTag can have a secondary action that is usually dismiss. TagGroup can handle dismiss for a collection of tags. Ensure that focus is properly managed when all tags have been dismissed.

```jsx
import * as React from "react";
import {
  InteractionTag,
  InteractionTagPrimary,
  InteractionTagSecondary,
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
            <InteractionTag value={tag.value} key={tag.value}>
              <InteractionTagPrimary
                hasSecondaryAction
                ref={index === 0 ? firstTagRef : null}
              >
                {tag.children}
              </InteractionTagPrimary>
              <InteractionTagSecondary aria-label="remove" />
            </InteractionTag>
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

An InteractionTag can be rounded or circular,

```jsx
import * as React from "react";
import {
  InteractionTag,
  InteractionTagPrimary,
  InteractionTagSecondary,
  Avatar,
  makeStyles,
} from "@fluentui/react-components";
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
      <InteractionTag>
        <InteractionTagPrimary
          media={<Avatar name="Katri Athokas" badge={{ status: "busy" }} />}
        >
          Rounded
        </InteractionTagPrimary>
      </InteractionTag>
      <InteractionTag shape="circular">
        <InteractionTagPrimary
          media={<Avatar name="Katri Athokas" badge={{ status: "busy" }} />}
        >
          Circular
        </InteractionTagPrimary>
      </InteractionTag>

      <InteractionTag>
        <InteractionTagPrimary
          icon={<CalendarMonthRegular />}
          secondaryText="Secondary text"
          hasSecondaryAction
        >
          Rounded
        </InteractionTagPrimary>
        <InteractionTagSecondary aria-label="remove" />
      </InteractionTag>
      <InteractionTag shape="circular">
        <InteractionTagPrimary
          icon={<CalendarMonthRegular />}
          secondaryText="Secondary text"
          hasSecondaryAction
        >
          Circular
        </InteractionTagPrimary>
        <InteractionTagSecondary aria-label="remove" />
      </InteractionTag>
    </div>
  );
};
```

### Size

An InteractionTag supports `medium`, `small` and `extra-small` size. Default size is `medium`.

```jsx
import * as React from "react";
import {
  InteractionTag,
  InteractionTagPrimary,
  InteractionTagSecondary,
  Avatar,
  makeStyles,
} from "@fluentui/react-components";
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
        <InteractionTag>
          <InteractionTagPrimary>Medium</InteractionTagPrimary>
        </InteractionTag>

        <InteractionTag>
          <InteractionTagPrimary
            media={<Avatar name="Katri Athokas" badge={{ status: "busy" }} />}
            hasSecondaryAction
          >
            Medium dismissible
          </InteractionTagPrimary>
          <InteractionTagSecondary aria-label="dismiss" />
        </InteractionTag>

        <InteractionTag shape="circular">
          <InteractionTagPrimary icon={<CalendarMonthRegular />}>
            Medium circular
          </InteractionTagPrimary>
        </InteractionTag>
      </div>

      {/* small */}
      <div className={styles.innerWrapper}>
        <InteractionTag size="small">
          <InteractionTagPrimary>Small</InteractionTagPrimary>
        </InteractionTag>

        <InteractionTag size="small">
          <InteractionTagPrimary
            media={<Avatar name="Katri Athokas" badge={{ status: "busy" }} />}
            hasSecondaryAction
          >
            Small dismissible
          </InteractionTagPrimary>
          <InteractionTagSecondary aria-label="dismiss" />
        </InteractionTag>

        <InteractionTag size="small" shape="circular">
          <InteractionTagPrimary icon={<CalendarMonthRegular />}>
            Small circular
          </InteractionTagPrimary>
        </InteractionTag>
      </div>

      {/* extra-small */}
      <div className={styles.innerWrapper}>
        <InteractionTag size="extra-small">
          <InteractionTagPrimary>Extra small</InteractionTagPrimary>
        </InteractionTag>

        <InteractionTag size="extra-small">
          <InteractionTagPrimary
            media={<Avatar name="Katri Athokas" badge={{ status: "busy" }} />}
            hasSecondaryAction
          >
            Extra small dismissible
          </InteractionTagPrimary>
          <InteractionTagSecondary aria-label="dismiss" />
        </InteractionTag>

        <InteractionTag size="extra-small" shape="circular">
          <InteractionTagPrimary icon={<CalendarMonthRegular />}>
            Extra small circular
          </InteractionTagPrimary>
        </InteractionTag>
      </div>
    </div>
  );
};
```

### Appearance

An InteractionTag can have a `filled`, `outline` or `brand` appearance. The default is `filled`.

```jsx
import * as React from "react";
import {
  InteractionTag,
  InteractionTagPrimary,
  InteractionTagSecondary,
  makeStyles,
} from "@fluentui/react-components";
import {
  bundleIcon,
  CalendarMonthFilled,
  CalendarMonthRegular,
} from "@fluentui/react-icons";

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);

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
      <InteractionTag>
        <InteractionTagPrimary icon={<CalendarMonth />} hasSecondaryAction>
          filled
        </InteractionTagPrimary>
        <InteractionTagSecondary aria-label="remove" />
      </InteractionTag>
      <InteractionTag appearance="outline">
        <InteractionTagPrimary icon={<CalendarMonth />} hasSecondaryAction>
          outline
        </InteractionTagPrimary>
        <InteractionTagSecondary aria-label="remove" />
      </InteractionTag>
      <InteractionTag appearance="brand">
        <InteractionTagPrimary icon={<CalendarMonth />} hasSecondaryAction>
          brand
        </InteractionTagPrimary>
        <InteractionTagSecondary aria-label="remove" />
      </InteractionTag>
    </div>
  );
};
```

### Disabled

```jsx
import * as React from "react";
import {
  InteractionTag,
  InteractionTagPrimary,
  InteractionTagSecondary,
  makeStyles,
} from "@fluentui/react-components";
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
      <InteractionTag disabled>
        <InteractionTagPrimary
          secondaryText="appearance=filled"
          icon={<CalendarMonthRegular />}
          hasSecondaryAction
        >
          Disabled
        </InteractionTagPrimary>
        <InteractionTagSecondary aria-label="remove" />
      </InteractionTag>
      <InteractionTag disabled appearance="outline">
        <InteractionTagPrimary
          secondaryText="appearance=outline"
          icon={<CalendarMonthRegular />}
          hasSecondaryAction
        >
          Disabled
        </InteractionTagPrimary>
        <InteractionTagSecondary aria-label="remove" />
      </InteractionTag>
      <InteractionTag disabled appearance="brand">
        <InteractionTagPrimary
          secondaryText="appearance=brand"
          icon={<CalendarMonthRegular />}
          hasSecondaryAction
        >
          Disabled
        </InteractionTagPrimary>
        <InteractionTagSecondary aria-label="remove" />
      </InteractionTag>
    </div>
  );
};
```

### Has Primary Action

An InteractionTag can have a primary action. This example shows an Interaction Tag that opens a popover as Primary Action.

```jsx
import * as React from "react";
import {
  InteractionTag,
  InteractionTagPrimary,
  InteractionTagSecondary,
  Popover,
  PopoverTrigger,
  PopoverSurface,
  makeStyles,
  Tooltip,
  Link,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  popover: {
    width: "360px",
    maxWidth: "100%",
    height: "fit-content",
  },
});

export const HasPrimaryAction = () => {
  const styles = useStyles();
  return (
    <InteractionTag>
      <Popover trapFocus>
        <PopoverTrigger>
          <InteractionTagPrimary hasSecondaryAction>
            Golden retriever
          </InteractionTagPrimary>
        </PopoverTrigger>
        <PopoverSurface className={styles.popover}>
          <Link href="https://en.wikipedia.org/wiki/Golden_Retriever">
            Find out more on wiki
          </Link>
          <ul>
            <li>Size: Medium to large-sized dog breed. </li>
            <li>
              Coat: Luxurious double coat with a dense, water-repellent outer
              layer and a soft, dense undercoat.
            </li>
            <li>
              Color: Typically a luscious golden or cream color, with variations
              in shade.
            </li>
            <li>
              Build: Sturdy and well-proportioned body with a friendly and
              intelligent expression.
            </li>
          </ul>
        </PopoverSurface>
      </Popover>
      <Tooltip content="dismiss" relationship="label">
        <InteractionTagSecondary />
      </Tooltip>
    </InteractionTag>
  );
};
```