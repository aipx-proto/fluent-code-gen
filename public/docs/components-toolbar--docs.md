# Toolbar

A toolbar is a container for grouping a set of controls, such as buttons, menu buttons, or checkboxes.

```jsx
import * as React from "react";
import {
  FontIncrease24Regular,
  FontDecrease24Regular,
  TextFont24Regular,
  MoreHorizontal24Filled,
} from "@fluentui/react-icons";
import {
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
} from "@fluentui/react-components";
import type { ToolbarProps } from "@fluentui/react-components";

export const Default = (props: Partial<ToolbarProps>) => (
  <Toolbar aria-label="Default" {...props}>
    <ToolbarButton
      aria-label="Increase Font Size"
      appearance="primary"
      icon={<FontIncrease24Regular />}
    />
    <ToolbarButton
      aria-label="Decrease Font Size"
      icon={<FontDecrease24Regular />}
    />
    <ToolbarButton aria-label="Reset Font Size" icon={<TextFont24Regular />} />
    <ToolbarDivider />
    <Menu>
      <MenuTrigger>
        <ToolbarButton aria-label="More" icon={<MoreHorizontal24Filled />} />
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>New </MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem disabled>Open File</MenuItem>
          <MenuItem>Open Folder</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  </Toolbar>
);
```

### Default

```jsx
import * as React from "react";
import {
  FontIncrease24Regular,
  FontDecrease24Regular,
  TextFont24Regular,
  MoreHorizontal24Filled,
} from "@fluentui/react-icons";
import {
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
} from "@fluentui/react-components";
import type { ToolbarProps } from "@fluentui/react-components";

export const Default = (props: Partial<ToolbarProps>) => (
  <Toolbar aria-label="Default" {...props}>
    <ToolbarButton
      aria-label="Increase Font Size"
      appearance="primary"
      icon={<FontIncrease24Regular />}
    />
    <ToolbarButton
      aria-label="Decrease Font Size"
      icon={<FontDecrease24Regular />}
    />
    <ToolbarButton aria-label="Reset Font Size" icon={<TextFont24Regular />} />
    <ToolbarDivider />
    <Menu>
      <MenuTrigger>
        <ToolbarButton aria-label="More" icon={<MoreHorizontal24Filled />} />
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>New </MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem disabled>Open File</MenuItem>
          <MenuItem>Open Folder</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  </Toolbar>
);
```

### Small

The size determines the spacing around the toolbar controls. A small sized toolbar has no vertical padding and uses 20px for horizontal padding.

```jsx
import * as React from "react";
import {
  FontIncrease24Regular,
  FontDecrease24Regular,
  TextFont24Regular,
} from "@fluentui/react-icons";
import { Toolbar, ToolbarButton } from "@fluentui/react-components";
import type { ToolbarProps } from "@fluentui/react-components";

export const Small = (props: Partial<ToolbarProps>) => (
  <Toolbar
    {...props}
    aria-label="Small"
    size="small"
    style={{
      border: "2px solid black",
      borderRadius: "8px",
    }}
  >
    <ToolbarButton
      aria-label="Increase Font Size"
      appearance="primary"
      icon={<FontIncrease24Regular />}
    />
    <ToolbarButton
      aria-label="Decrease Font Size"
      icon={<FontDecrease24Regular />}
    />
    <ToolbarButton aria-label="Reset Font Size" icon={<TextFont24Regular />} />
  </Toolbar>
);
```

### Medium

The size determines the spacing around the toolbar controls. A medium sized toolbar uses 4px for vertical padding and 8px for horizontal padding.

```jsx
import * as React from "react";
import {
  FontIncrease24Regular,
  FontDecrease24Regular,
  TextFont24Regular,
} from "@fluentui/react-icons";
import { Toolbar, ToolbarButton } from "@fluentui/react-components";
import type { ToolbarProps } from "@fluentui/react-components";

export const Medium = (props: Partial<ToolbarProps>) => (
  <Toolbar
    {...props}
    aria-label="Medium"
    size="medium"
    style={{
      border: "2px solid black",
      borderRadius: "8px",
    }}
  >
    <ToolbarButton
      aria-label="Increase Font Size"
      appearance="primary"
      icon={<FontIncrease24Regular />}
    />
    <ToolbarButton
      aria-label="Decrease Font Size"
      icon={<FontDecrease24Regular />}
    />
    <ToolbarButton aria-label="Reset Font Size" icon={<TextFont24Regular />} />
  </Toolbar>
);
```

### Large

The size determines the spacing around the toolbar controls. A large sized toolbar uses 4px for vertical padding and 20px for horizontal padding.

```jsx
import * as React from "react";
import {
  FontIncrease24Regular,
  FontDecrease24Regular,
  TextFont24Regular,
} from "@fluentui/react-icons";
import { Toolbar, ToolbarButton } from "@fluentui/react-components";
import type { ToolbarProps } from "@fluentui/react-components";

export const Large = (props: Partial<ToolbarProps>) => (
  <Toolbar
    aria-label="Large Toolbar"
    {...props}
    size="large"
    style={{
      border: "2px solid black",
      borderRadius: "8px",
    }}
  >
    <ToolbarButton
      aria-label="Increase Font Size"
      appearance="primary"
      icon={<FontIncrease24Regular />}
    />
    <ToolbarButton
      aria-label="Decrease Font Size"
      icon={<FontDecrease24Regular />}
    />
    <ToolbarButton aria-label="Reset Font Size" icon={<TextFont24Regular />} />
  </Toolbar>
);
```

### Overflow Items

This example uses the Overflow component and utilities, Please refer to the documentation to achieve more complex scenarios.

```jsx
import * as React from "react";
import {
  FontDecrease24Regular,
  TextFont24Regular,
  FontIncrease24Regular,
  MoreHorizontal20Filled,
} from "@fluentui/react-icons";
import {
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
  Button,
  Menu,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Overflow,
  OverflowItem,
  useOverflowMenu,
  useIsOverflowItemVisible,
  useIsOverflowGroupVisible,
} from "@fluentui/react-components";
import type {
  ToolbarProps,
  ToolbarButtonProps,
  MenuItemProps,
} from "@fluentui/react-components";

interface ToolbarOverflowMenuItemProps extends Omit<MenuItemProps, "id"> {
  id: string;
}

const ToolbarOverflowMenuItem: React.FC<ToolbarOverflowMenuItemProps> = (
  props
) => {
  const { id, ...rest } = props;
  const isVisible = useIsOverflowItemVisible(id);

  if (isVisible) {
    return null;
  }

  if (id.includes("increase")) {
    return (
      <MenuItem icon={<FontIncrease24Regular />}>Increase Font Size</MenuItem>
    );
  }

  if (id.includes("decrease")) {
    return (
      <MenuItem icon={<FontDecrease24Regular />}>Decrease Font Size</MenuItem>
    );
  }

  if (id.includes("reset")) {
    return <MenuItem icon={<TextFont24Regular />}>Reset Font Size</MenuItem>;
  }

  return <MenuItem {...(rest as MenuItemProps)}>Item {id}</MenuItem>;
};

const ToolbarMenuOverflowDivider: React.FC<{
  id: string;
}> = (props) => {
  const isGroupVisible = useIsOverflowGroupVisible(props.id);

  if (isGroupVisible === "visible") {
    return null;
  }

  return <MenuDivider />;
};

const OverflowMenu: React.FC<{ itemIds: Array<Array<string>> }> = ({
  itemIds,
}) => {
  const { ref, isOverflowing } = useOverflowMenu<HTMLButtonElement>();

  if (!isOverflowing) {
    return null;
  }

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <Button
          ref={ref}
          icon={<MoreHorizontal20Filled />}
          aria-label="More items"
          appearance="subtle"
        />
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          {itemIds.map((group, groupIndx) => {
            const isLast = groupIndx === itemIds.length - 1;
            return (
              <React.Fragment key={group.join()}>
                {group.map((i) => (
                  <ToolbarOverflowMenuItem key={i} id={i} />
                ))}
                {!isLast && (
                  <ToolbarMenuOverflowDivider id={`${groupIndx + 1}`} />
                )}
              </React.Fragment>
            );
          })}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

type ToolbarOverflowDividerProps = {
  groupId: string;
};

const ToolbarOverflowDivider = ({ groupId }: ToolbarOverflowDividerProps) => {
  const groupVisibleState = useIsOverflowGroupVisible(groupId);

  if (groupVisibleState !== "hidden") {
    return <ToolbarDivider />;
  }

  return null;
};

type ToolbarOverflowMenuProps = {
  overflowId: string;
  overflowGroupId: string;
} & ToolbarButtonProps;

const ToolbarOverflowButton = ({
  overflowId,
  overflowGroupId,
  ...props
}: ToolbarOverflowMenuProps) => {
  return (
    <OverflowItem id={overflowId} groupId={overflowGroupId}>
      <ToolbarButton {...props} />
    </OverflowItem>
  );
};

export const OverflowItems = (props: Partial<ToolbarProps>) => (
  <div
    style={{
      resize: "horizontal",
      overflow: "hidden",
    }}
  >
    <Overflow padding={90}>
      <Toolbar {...props} aria-label="Overflow" size="small">
        <ToolbarOverflowButton
          overflowId="increase-1"
          overflowGroupId="1"
          appearance="subtle"
          aria-label="Increase Font Size ( Group 1 )"
          icon={<FontIncrease24Regular />}
        />

        <ToolbarOverflowButton
          overflowId="decrease-1"
          overflowGroupId="1"
          appearance="subtle"
          aria-label="Decrease Font Size ( Group 1 )"
          icon={<FontDecrease24Regular />}
        />

        <ToolbarOverflowDivider groupId="1" />

        <ToolbarOverflowButton
          overflowId="increase-2"
          overflowGroupId="2"
          appearance="subtle"
          aria-label="Increase Font Size ( Group 2 )"
          icon={<FontIncrease24Regular />}
        />

        <ToolbarOverflowButton
          overflowId="decrease-2"
          overflowGroupId="2"
          appearance="subtle"
          aria-label="Decrease Font Size ( Group 2 )"
          icon={<FontDecrease24Regular />}
        />

        <ToolbarOverflowButton
          overflowId="reset-1"
          overflowGroupId="2"
          appearance="subtle"
          aria-label="Reset Font Size ( Group 2 )"
          icon={<TextFont24Regular />}
        />

        <ToolbarOverflowButton
          overflowId="increase-3"
          overflowGroupId="2"
          appearance="subtle"
          aria-label="Increase Font Size ( Group 2 )"
          icon={<FontIncrease24Regular />}
        />

        <ToolbarOverflowButton
          overflowId="decrease-3"
          overflowGroupId="2"
          appearance="subtle"
          aria-label="Decrease Font Size ( Group 2 )"
          icon={<FontDecrease24Regular />}
        />

        <ToolbarOverflowDivider groupId="2" />

        <ToolbarOverflowButton
          overflowId="increase-4"
          overflowGroupId="3"
          appearance="subtle"
          aria-label="Increase Font Size ( Group 3 )"
          icon={<FontIncrease24Regular />}
        />

        <ToolbarOverflowButton
          overflowId="decrease-4"
          overflowGroupId="3"
          appearance="subtle"
          aria-label="Decrease Font Size ( Group 3 )"
          icon={<FontDecrease24Regular />}
        />

        <ToolbarOverflowButton
          overflowId="reset-2"
          overflowGroupId="3"
          appearance="subtle"
          aria-label="Reset Font Size ( Group 3 )"
          icon={<TextFont24Regular />}
        />

        <OverflowMenu
          itemIds={[
            ["increase-1", "decrease-1"],
            ["increase-2", "decrease-2", "reset-1", "increase-3", "decrease-3"],
            ["increase-4", "decrease-4", "reset-2"],
          ]}
        />
      </Toolbar>
    </Overflow>
  </div>
);
```

### With Tooltip

```jsx
import * as React from "react";
import type { ToolbarProps } from "@fluentui/react-components";
import {
  Toolbar,
  ToolbarToggleButton,
  ToolbarDivider,
  ToolbarButton,
  Tooltip,
} from "@fluentui/react-components";
import {
  TextUnderlineRegular,
  TextBoldRegular,
  TextItalicRegular,
  HighlightFilled,
} from "@fluentui/react-icons";

export const WithTooltip = (props: Partial<ToolbarProps>) => (
  <Toolbar aria-label="with Tooltip" {...props} size="small">
    <Tooltip
      content="Makes selected text Bold"
      relationship="description"
      withArrow
    >
      <ToolbarToggleButton
        aria-label="Bold"
        icon={<TextBoldRegular />}
        name="textOptions"
        value="bold"
      />
    </Tooltip>
    <Tooltip
      content="Makes selected text Italic"
      relationship="description"
      withArrow
    >
      <ToolbarToggleButton
        aria-label="Italic"
        icon={<TextItalicRegular />}
        name="textOptions"
        value="italic"
      />
    </Tooltip>
    <Tooltip
      content="Makes selected text Underline"
      relationship="description"
      withArrow
    >
      <ToolbarToggleButton
        aria-label="Underline"
        icon={<TextUnderlineRegular />}
        name="textOptions"
        value="underline"
      />
    </Tooltip>
    <ToolbarDivider />
    <Tooltip
      content="Highlights the selected text"
      relationship="description"
      withArrow
    >
      <ToolbarButton aria-label="Highlight" icon={<HighlightFilled />} />
    </Tooltip>
  </Toolbar>
);
```

### With Popover

```jsx
import * as React from "react";
import type { ToolbarProps } from "@fluentui/react-components";
import {
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  Button,
} from "@fluentui/react-components";
import {
  MathFormatLinear24Regular,
  Image24Regular,
  Table24Filled,
} from "@fluentui/react-icons";

export const WithPopover = (props: Partial<ToolbarProps>) => {
  const [open, setOpen] = React.useState<
    "first" | "second" | "third" | "fourth" | undefined
  >();

  return (
    <Toolbar aria-label="with Popover" {...props} size="small">
      <Popover
        withArrow
        trapFocus
        open={open === "first"}
        onOpenChange={(_, data) => setOpen(data.open ? "first" : undefined)}
      >
        <PopoverTrigger disableButtonEnhancement>
          <ToolbarButton aria-label="Insert image" icon={<Image24Regular />} />
        </PopoverTrigger>
        <PopoverSurface>
          <div>
            <h3>Insert Image</h3>
            <Button onClick={() => setOpen(undefined)}>Close</Button>
          </div>
        </PopoverSurface>
      </Popover>
      <Popover
        withArrow
        trapFocus
        open={open === "second"}
        onOpenChange={(_, data) => setOpen(data.open ? "second" : undefined)}
      >
        <PopoverTrigger disableButtonEnhancement>
          <ToolbarButton
            appearance="primary"
            icon={<Table24Filled />}
            aria-label="Insert Table"
          />
        </PopoverTrigger>
        <PopoverSurface>
          <div>
            <h3>Insert Table</h3>
            <Button onClick={() => setOpen(undefined)}>Close</Button>
          </div>
        </PopoverSurface>
      </Popover>
      <Popover
        withArrow
        trapFocus
        open={open === "third"}
        onOpenChange={(_, data) => setOpen(data.open ? "third" : undefined)}
      >
        <PopoverTrigger disableButtonEnhancement>
          <ToolbarButton
            aria-label="Insert Formula"
            icon={<MathFormatLinear24Regular />}
          />
        </PopoverTrigger>
        <PopoverSurface>
          <div>
            <h3>Insert Formula</h3>
            <Button onClick={() => setOpen(undefined)}>Close</Button>
          </div>
        </PopoverSurface>
      </Popover>
      <ToolbarDivider />
      <Popover
        withArrow
        trapFocus
        open={open === "fourth"}
        onOpenChange={(_, data) => setOpen(data.open ? "fourth" : undefined)}
      >
        <PopoverTrigger disableButtonEnhancement>
          <ToolbarButton>Quick Actions</ToolbarButton>
        </PopoverTrigger>
        <PopoverSurface>
          <div>
            <h3>Quick Actions</h3>
            <Button onClick={() => setOpen(undefined)}>Close</Button>
          </div>
        </PopoverSurface>
      </Popover>
    </Toolbar>
  );
};
```

### Subtle

```jsx
import * as React from "react";
import {
  TextBold24Regular,
  TextItalic24Regular,
  TextUnderline24Regular,
} from "@fluentui/react-icons";
import { Toolbar, ToolbarToggleButton } from "@fluentui/react-components";
import type { ToolbarProps } from "@fluentui/react-components";

export const Subtle = (props: Partial<ToolbarProps>) => (
  <Toolbar aria-label="Subtle" {...props}>
    <ToolbarToggleButton
      appearance="subtle"
      aria-label="Bold"
      icon={<TextBold24Regular />}
      name="textOptions"
      value="bold"
    />

    <ToolbarToggleButton
      appearance="subtle"
      aria-label="Italic"
      icon={<TextItalic24Regular />}
      name="textOptions"
      value="italic"
    />

    <ToolbarToggleButton
      appearance="subtle"
      aria-label="Underline"
      icon={<TextUnderline24Regular />}
      name="textOptions"
      value="underline"
    />
  </Toolbar>
);
```

### Transparent

```jsx
import * as React from "react";
import {
  TextBold24Regular,
  TextItalic24Regular,
  TextUnderline24Regular,
} from "@fluentui/react-icons";
import { Toolbar, ToolbarToggleButton } from "@fluentui/react-components";
import type { ToolbarProps } from "@fluentui/react-components";

export const Transparent = (props: Partial<ToolbarProps>) => (
  <Toolbar aria-label="transparent" {...props}>
    <ToolbarToggleButton
      appearance="transparent"
      aria-label="Bold"
      icon={<TextBold24Regular />}
      name="textOptions"
      value="bold"
    />

    <ToolbarToggleButton
      appearance="transparent"
      aria-label="Italic"
      icon={<TextItalic24Regular />}
      name="textOptions"
      value="italic"
    />

    <ToolbarToggleButton
      appearance="transparent"
      aria-label="Underline"
      icon={<TextUnderline24Regular />}
      name="textOptions"
      value="underline"
    />
  </Toolbar>
);
```

### Controlled Toggle Button

```jsx
import * as React from "react";
import {
  TextBold24Regular,
  TextItalic24Regular,
  TextUnderline24Regular,
} from "@fluentui/react-icons";
import {
  Toolbar,
  ToolbarToggleButton,
  ToolbarProps,
} from "@fluentui/react-components";

export const ControlledToggleButton = () => {
  const [checkedValues, setCheckedValues] = React.useState<
    Record<string, string[]>
  >({
    textOptions: ["bold", "italic"],
  });
  const onChange: ToolbarProps["onCheckedValueChange"] = (
    e,
    { name, checkedItems }
  ) => {
    setCheckedValues((s) => {
      return s ? { ...s, [name]: checkedItems } : { [name]: checkedItems };
    });
  };

  return (
    <Toolbar
      aria-label="with controlled Toggle Button"
      checkedValues={checkedValues}
      onCheckedValueChange={onChange}
    >
      <ToolbarToggleButton
        aria-label="Bold"
        icon={<TextBold24Regular />}
        name="textOptions"
        value="bold"
      />
      <ToolbarToggleButton
        aria-label="Italic"
        icon={<TextItalic24Regular />}
        name="textOptions"
        value="italic"
      />
      <ToolbarToggleButton
        aria-label="Underline"
        icon={<TextUnderline24Regular />}
        name="textOptions"
        value="underline"
      />
    </Toolbar>
  );
};
```

### Radio

```jsx
import * as React from "react";
import {
  AlignCenterHorizontal24Regular,
  AlignLeft24Regular,
  AlignRight24Regular,
} from "@fluentui/react-icons";
import {
  Toolbar,
  ToolbarRadioButton,
  ToolbarRadioGroup,
} from "@fluentui/react-components";
import type { ToolbarProps } from "@fluentui/react-components";

export const Radio = (props: Partial<ToolbarProps>) => (
  <Toolbar
    {...props}
    aria-label="with Radio Buttons"
    defaultCheckedValues={{
      textOptions: ["center"],
    }}
  >
    <ToolbarRadioGroup>
      <ToolbarRadioButton
        aria-label="Align left"
        name="textOptions"
        value="left"
        icon={<AlignLeft24Regular />}
      />
      <ToolbarRadioButton
        aria-label="Align Center"
        name="textOptions"
        value="center"
        icon={<AlignCenterHorizontal24Regular />}
      />

      <ToolbarRadioButton
        aria-label="Align Right"
        name="textOptions"
        value="right"
        icon={<AlignRight24Regular />}
      />
    </ToolbarRadioGroup>
  </Toolbar>
);
```

### Controlled Radio

```jsx
import * as React from "react";
import {
  AlignCenterHorizontal24Regular,
  AlignLeft24Regular,
  AlignRight24Regular,
} from "@fluentui/react-icons";
import {
  Toolbar,
  ToolbarRadioButton,
  ToolbarRadioGroup,
} from "@fluentui/react-components";
import type { ToolbarProps } from "@fluentui/react-components";

export const ControlledRadio = (props: Partial<ToolbarProps>) => {
  const [checkedValues, setCheckedValues] = React.useState<
    Record<string, string[]>
  >({
    textOptions: ["center"],
  });

  const onChange: ToolbarProps["onCheckedValueChange"] = (
    e,
    { name, checkedItems }
  ) => {
    setCheckedValues((s) => {
      return s ? { ...s, [name]: checkedItems } : { [name]: checkedItems };
    });
  };

  return (
    <Toolbar
      aria-label="with controlled Radio Button"
      checkedValues={checkedValues}
      onCheckedValueChange={onChange}
    >
      <ToolbarRadioGroup>
        <ToolbarRadioButton
          aria-label="Align left"
          name="textOptions"
          value="left"
          icon={<AlignLeft24Regular />}
        />
        <ToolbarRadioButton
          aria-label="Align Center"
          name="textOptions"
          value="center"
          icon={<AlignCenterHorizontal24Regular />}
        />

        <ToolbarRadioButton
          aria-label="Align Right"
          name="textOptions"
          value="right"
          icon={<AlignRight24Regular />}
        />
      </ToolbarRadioGroup>
    </Toolbar>
  );
};
```

### Vertical

```jsx
import * as React from "react";
import {
  TextBold24Regular,
  TextItalic24Regular,
  TextUnderline24Regular,
} from "@fluentui/react-icons";
import { Toolbar, ToolbarToggleButton } from "@fluentui/react-components";
import type { ToolbarProps } from "@fluentui/react-components";

export const Vertical = (props: Partial<ToolbarProps>) => (
  <Toolbar vertical {...props} aria-label="Vertical">
    <ToolbarToggleButton
      name="text"
      value="bold"
      aria-label="Bold"
      icon={<TextBold24Regular />}
    />
    <ToolbarToggleButton
      name="text"
      value="italic"
      aria-label="Italic"
      icon={<TextItalic24Regular />}
    />
    <ToolbarToggleButton
      name="text"
      value="underline"
      aria-label="Underline"
      icon={<TextUnderline24Regular />}
    />
  </Toolbar>
);
```

### Vertical Button

```jsx
import * as React from "react";
import {
  FontIncreaseRegular,
  FontDecreaseRegular,
  TextFontRegular,
} from "@fluentui/react-icons";
import { Toolbar, ToolbarButton } from "@fluentui/react-components";
import type { ToolbarProps } from "@fluentui/react-components";

export const VerticalButton = (props: Partial<ToolbarProps>) => (
  <Toolbar aria-label="Vertical Button" {...props}>
    <ToolbarButton vertical appearance="primary" icon={<FontIncreaseRegular />}>
      Increase
    </ToolbarButton>
    <ToolbarButton vertical icon={<FontDecreaseRegular />}>
      Decrease
    </ToolbarButton>
    <ToolbarButton vertical icon={<TextFontRegular />}>
      Reset
    </ToolbarButton>
  </Toolbar>
);
```

### Far Group

```jsx
import * as React from "react";
import { makeStyles } from "@fluentui/react-components";
import {
  FontIncreaseRegular,
  FontDecreaseRegular,
  TextFontRegular,
} from "@fluentui/react-icons";
import {
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
  ToolbarGroup,
} from "@fluentui/react-components";
import type { ToolbarProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  toolbar: {
    justifyContent: "space-between",
  },
});

export const FarGroup = (props: Partial<ToolbarProps>) => {
  const farGroupStyles = useStyles();
  return (
    <Toolbar
      aria-label="with Separeted Groups"
      {...props}
      className={farGroupStyles.toolbar}
    >
      <ToolbarGroup role="presentation">
        <ToolbarButton
          aria-label="Increase Font Size"
          appearance="primary"
          icon={<FontIncreaseRegular />}
        />
        <ToolbarButton
          aria-label="Decrease Font Size"
          icon={<FontDecreaseRegular />}
        />
        <ToolbarButton
          aria-label="Reset Font Size"
          icon={<TextFontRegular />}
        />
        <ToolbarDivider />
        <ToolbarButton
          aria-label="Increase Font Size"
          appearance="primary"
          icon={<FontIncreaseRegular />}
        />
        <ToolbarButton
          aria-label="Decrease Font Size"
          icon={<FontDecreaseRegular />}
        />
        <ToolbarButton
          aria-label="Reset Font Size"
          icon={<TextFontRegular />}
        />
      </ToolbarGroup>
      <ToolbarGroup role="presentation">
        <ToolbarButton
          aria-label="Increase Font Size"
          appearance="primary"
          icon={<FontIncreaseRegular />}
        />
        <ToolbarButton
          aria-label="Decrease Font Size"
          icon={<FontDecreaseRegular />}
        />
        <ToolbarButton
          aria-label="Reset Font Size"
          icon={<TextFontRegular />}
        />
      </ToolbarGroup>
    </Toolbar>
  );
};
```