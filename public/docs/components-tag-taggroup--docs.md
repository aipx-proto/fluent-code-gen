# TagGroup

```jsx
import * as React from "react";
import {
  TagGroup,
  InteractionTag,
  InteractionTagPrimary,
  Tag,
  makeStyles,
} from "@fluentui/react-components";

const WithTags = () => (
  <TagGroup aria-label="Simple tag group with Tag" role="list">
    <Tag role="listitem">Tag 1</Tag>
    <Tag role="listitem">Tag 2</Tag>
    <Tag role="listitem">Tag 3</Tag>
  </TagGroup>
);

const WithInteractionTags = () => (
  <TagGroup aria-label="Simple tag group with InteractionTag">
    <InteractionTag>
      <InteractionTagPrimary>Tag 1</InteractionTagPrimary>
    </InteractionTag>
    <InteractionTag>
      <InteractionTagPrimary>Tag 2</InteractionTagPrimary>
    </InteractionTag>
    <InteractionTag>
      <InteractionTagPrimary>Tag 3</InteractionTagPrimary>
    </InteractionTag>
  </TagGroup>
);

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
  },
});

export const Default = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      Example with Tag:
      <WithTags />
      Example with InteractionTag:
      <WithInteractionTags />
    </div>
  );
};
```

### Default

```jsx
import * as React from "react";
import {
  TagGroup,
  InteractionTag,
  InteractionTagPrimary,
  Tag,
  makeStyles,
} from "@fluentui/react-components";

const WithTags = () => (
  <TagGroup aria-label="Simple tag group with Tag" role="list">
    <Tag role="listitem">Tag 1</Tag>
    <Tag role="listitem">Tag 2</Tag>
    <Tag role="listitem">Tag 3</Tag>
  </TagGroup>
);

const WithInteractionTags = () => (
  <TagGroup aria-label="Simple tag group with InteractionTag">
    <InteractionTag>
      <InteractionTagPrimary>Tag 1</InteractionTagPrimary>
    </InteractionTag>
    <InteractionTag>
      <InteractionTagPrimary>Tag 2</InteractionTagPrimary>
    </InteractionTag>
    <InteractionTag>
      <InteractionTagPrimary>Tag 3</InteractionTagPrimary>
    </InteractionTag>
  </TagGroup>
);

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
  },
});

export const Default = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      Example with Tag:
      <WithTags />
      Example with InteractionTag:
      <WithInteractionTags />
    </div>
  );
};
```

### Dismiss

A TagGroup contains a collection of Tag/InteractionTag that can be dismissed. Ensure that focus is properly managed when all tags have been dismissed.

```jsx
import * as React from "react";
import {
  TagGroup,
  Tag,
  InteractionTag,
  TagGroupProps,
  InteractionTagPrimary,
  InteractionTagSecondary,
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

const DismissWithTags = () => {
  const [visibleTags, setVisibleTags] = React.useState(initialTags);
  const removeItem: TagGroupProps["onDismiss"] = (_e, { value }) => {
    setVisibleTags([...visibleTags].filter((tag) => tag.value !== value));
  };
  const resetItems = () => setVisibleTags(initialTags);
  const { firstTagRef, resetButtonRef } = useResetExample(visibleTags.length);

  const styles = useStyles();

  return (
    <>
      {visibleTags.length !== 0 && (
        <TagGroup
          onDismiss={removeItem}
          aria-label="TagGroup example with dismissible Tags"
        >
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
        disabled={visibleTags.length === initialTags.length}
        className={styles.resetButton}
        size="small"
      >
        Reset the example
      </Button>
    </>
  );
};

const DismissWithInteractionTags = () => {
  const [visibleTags, setVisibleTags] = React.useState(initialTags);
  const removeItem: TagGroupProps["onDismiss"] = (_e, { value }) => {
    setVisibleTags([...visibleTags].filter((tag) => tag.value !== value));
  };
  const resetItems = () => setVisibleTags(initialTags);
  const { firstTagRef, resetButtonRef } = useResetExample(visibleTags.length);

  const styles = useStyles();

  return (
    <>
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
    </>
  );
};

export const Dismiss = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      Example with Tag:
      <DismissWithTags />
      Example with InteractionTag:
      <DismissWithInteractionTags />
    </div>
  );
};
```

### Sizes

A TagGroup can set default size for all its tags. It supports `medium`, `small` and `extra-small` size. Default value is `medium`.

```jsx
import * as React from "react";
import {
  TagGroup,
  InteractionTag,
  InteractionTagPrimary,
  InteractionTagSecondary,
  TagSize,
  Avatar,
  makeStyles,
} from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";

const useContainerStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
  },
});

export const Sizes = () => {
  const containerStyles = useContainerStyles();
  const sizes: TagSize[] = ["medium", "small", "extra-small"];
  return (
    <div className={containerStyles.root}>
      {sizes.map((size) => (
        <div key={size}>
          {`${size}: `}
          <TagGroup size={size} aria-label={`${size} tag group example`}>
            <InteractionTag>
              <InteractionTagPrimary media={<Avatar name="Katri Athokas" />}>
                {size}
              </InteractionTagPrimary>
            </InteractionTag>
            <InteractionTag shape="circular">
              <InteractionTagPrimary icon={<CalendarMonthRegular />}>
                {size}
              </InteractionTagPrimary>
            </InteractionTag>
            <InteractionTag>
              <InteractionTagPrimary
                icon={<CalendarMonthRegular />}
                hasSecondaryAction
              >
                {size}
              </InteractionTagPrimary>
              <InteractionTagSecondary aria-label="remove" />
            </InteractionTag>
          </TagGroup>
        </div>
      ))}
    </div>
  );
};
```

### With Overflow

A TagGroup can support overflow by using Overflow and OverflowItem.

```jsx
import * as React from "react";
import {
  TagGroup,
  Tag,
  TagProps,
  tagClassNames,
  InteractionTag,
  InteractionTagPrimary,
  InteractionTagPrimaryProps,
  makeStyles,
  shorthands,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  useIsOverflowItemVisible,
  useOverflowMenu,
  Overflow,
  OverflowItem,
  Avatar,
  tokens,
} from "@fluentui/react-components";

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

type DefaultItem = InteractionTagPrimaryProps & { value: string };
const defaultItems: DefaultItem[] = names.map((name) => ({
  value: name.replace(" ", "_"),
  children: name,
  media: (
    <Avatar
      aria-hidden="true" // use aria-hidden because InteractionTag contains information in the avatar
      name={name}
      badge={{
        status: "available",
      }}
    />
  ),

  secondaryText: "Available",
}));

//----- OverflowMenuItem -----//

type OverflowMenuItemProps = {
  tag: TagProps;
};

const useMenuItemStyles = makeStyles({
  menuItem: {
    padding: `${tokens.spacingVerticalSNudge} ${tokens.spacingHorizontalXS}`,
    ":hover": {
      [`& .${tagClassNames.root}`]: {
        color: tokens.colorNeutralForeground2Hover,
      },
    },
  },
  tag: {
    backgroundColor: "transparent",
    ...shorthands.borderColor("transparent"),
  },
});

/**
 * A menu item for an overflow menu that only displays when the tab is not visible
 */
const OverflowMenuItem = (props: OverflowMenuItemProps) => {
  const { tag } = props;
  const isVisible = useIsOverflowItemVisible(tag.value!);

  const styles = useMenuItemStyles();

  if (isVisible) {
    return null;
  }

  return (
    <MenuItem key={tag.value} className={styles.menuItem}>
      <Tag {...tag} as="span" className={styles.tag} />
    </MenuItem>
  );
};

//----- OverflowMenu -----//

/**
 * A menu for viewing tags that have overflowed and are not visible.
 */
const OverflowMenu = () => {
  const { ref, isOverflowing, overflowCount } =
    useOverflowMenu<HTMLButtonElement>();

  if (!isOverflowing) {
    return null;
  }

  return (
    <InteractionTag>
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <InteractionTagPrimary
            ref={ref}
            aria-label={`${overflowCount} more tags`}
          >
            {`+${overflowCount}`}
          </InteractionTagPrimary>
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            {defaultItems.map((item) => (
              <OverflowMenuItem key={item.value} tag={item} />
            ))}
          </MenuList>
        </MenuPopover>
      </Menu>
    </InteractionTag>
  );
};

//----- Stories -----//

const useStyles = makeStyles({
  container: {
    overflow: "hidden",
    padding: "5px",
    zIndex: 0, // stop the browser resize handle from piercing the overflow menu
    height: "fit-content",
    minWidth: "150px",
    resize: "horizontal",
    width: "100%",
    boxSizing: "border-box",
  },
  tagGroup: {
    display: "flex", // TagGroup is inline-flex by default, but we want it to be same width as the container
  },
});

export const WithOverflow = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Overflow minimumVisible={2} padding={60}>
        <TagGroup className={styles.tagGroup} aria-label="Overflow example">
          {defaultItems.map(({ value, ...rest }) => (
            <OverflowItem key={value} id={value!}>
              <InteractionTag key={value}>
                <InteractionTagPrimary {...rest} />
              </InteractionTag>
            </OverflowItem>
          ))}
          <OverflowMenu />
        </TagGroup>
      </Overflow>
    </div>
  );
};
```

### Disabled

A TagGroup can be disabled. The collection of Tag/InteractionTag will also be disabled.

```jsx
import * as React from "react";
import {
  TagGroup,
  InteractionTag,
  InteractionTagPrimary,
  Tag,
  makeStyles,
} from "@fluentui/react-components";

const WithTags = () => (
  <TagGroup disabled aria-label="Disabled tag group with Tag" role="list">
    <Tag role="listitem">Tag 1</Tag>
    <Tag role="listitem">Tag 2</Tag>
    <Tag role="listitem">Tag 3</Tag>
  </TagGroup>
);

const WithInteractionTags = () => (
  <TagGroup disabled aria-label="Disabled tag group with InteractionTag">
    <InteractionTag>
      <InteractionTagPrimary>Tag 1</InteractionTagPrimary>
    </InteractionTag>
    <InteractionTag>
      <InteractionTagPrimary>Tag 2</InteractionTagPrimary>
    </InteractionTag>
    <InteractionTag>
      <InteractionTagPrimary>Tag 3</InteractionTagPrimary>
    </InteractionTag>
  </TagGroup>
);

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
  },
});

export const Disabled = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      Disabled example with Tag:
      <WithTags />
      Disabled example with InteractionTag:
      <WithInteractionTags />
    </div>
  );
};
```