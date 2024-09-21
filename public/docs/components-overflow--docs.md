# Overflow

The Overflow and OverflowItem components, are low level utilities that enable users to create overflow
experiences with any component. The components will detect and hide overflowing elements in DOM and manage
the overflow state. Additional overflow hooks can be used to handle overflowing items. In the reference
examples below the overflowing items are handled using a Menu. Additional hooks will be needed to create your specific overflow scenario. Please refer to the reference implementations
below, which will use the additional utilities:

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuButton,
  tokens,
  mergeClasses,
  Overflow,
  OverflowItem,
  OverflowItemProps,
  useIsOverflowItemVisible,
  useOverflowMenu,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: 0,
    overflow: "hidden",
  },

  resizableArea: {
    minWidth: "200px",
    maxWidth: "800px",
    border: `2px solid ${tokens.colorBrandBackground}`,
    padding: "20px 10px 10px 10px",
    position: "relative",
    resize: "horizontal",
    "::after": {
      content: `'Resizable Area'`,
      position: "absolute",
      padding: "1px 4px 1px",
      top: "-2px",
      left: "-2px",
      fontFamily: "monospace",
      fontSize: "15px",
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: "1px",
      color: tokens.colorNeutralForegroundOnBrand,
      backgroundColor: tokens.colorBrandBackground,
    },
  },
});

export const Default = () => {
  const styles = useStyles();

  const itemIds = new Array(8).fill(0).map((_, i) => i.toString());

  return (
    <Overflow>
      <div className={mergeClasses(styles.container, styles.resizableArea)}>
        {itemIds.map((i) => (
          <OverflowItem key={i} id={i}>
            <Button>Item {i}</Button>
          </OverflowItem>
        ))}
        <OverflowMenu itemIds={itemIds} />
      </div>
    </Overflow>
  );
};

const OverflowMenuItem: React.FC<Pick<OverflowItemProps, "id">> = (props) => {
  const { id } = props;
  const isVisible = useIsOverflowItemVisible(id);

  if (isVisible) {
    return null;
  }

  // As an union between button props and div props may be conflicting, casting is required
  return <MenuItem>Item {id}</MenuItem>;
};

const OverflowMenu: React.FC<{ itemIds: string[] }> = ({ itemIds }) => {
  const { ref, overflowCount, isOverflowing } =
    useOverflowMenu<HTMLButtonElement>();

  if (!isOverflowing) {
    return null;
  }

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton ref={ref}>+{overflowCount} items</MenuButton>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          {itemIds.map((i) => {
            return <OverflowMenuItem key={i} id={i} />;
          })}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
```

### Default

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuButton,
  tokens,
  mergeClasses,
  Overflow,
  OverflowItem,
  OverflowItemProps,
  useIsOverflowItemVisible,
  useOverflowMenu,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: 0,
    overflow: "hidden",
  },

  resizableArea: {
    minWidth: "200px",
    maxWidth: "800px",
    border: `2px solid ${tokens.colorBrandBackground}`,
    padding: "20px 10px 10px 10px",
    position: "relative",
    resize: "horizontal",
    "::after": {
      content: `'Resizable Area'`,
      position: "absolute",
      padding: "1px 4px 1px",
      top: "-2px",
      left: "-2px",
      fontFamily: "monospace",
      fontSize: "15px",
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: "1px",
      color: tokens.colorNeutralForegroundOnBrand,
      backgroundColor: tokens.colorBrandBackground,
    },
  },
});

export const Default = () => {
  const styles = useStyles();

  const itemIds = new Array(8).fill(0).map((_, i) => i.toString());

  return (
    <Overflow>
      <div className={mergeClasses(styles.container, styles.resizableArea)}>
        {itemIds.map((i) => (
          <OverflowItem key={i} id={i}>
            <Button>Item {i}</Button>
          </OverflowItem>
        ))}
        <OverflowMenu itemIds={itemIds} />
      </div>
    </Overflow>
  );
};

const OverflowMenuItem: React.FC<Pick<OverflowItemProps, "id">> = (props) => {
  const { id } = props;
  const isVisible = useIsOverflowItemVisible(id);

  if (isVisible) {
    return null;
  }

  // As an union between button props and div props may be conflicting, casting is required
  return <MenuItem>Item {id}</MenuItem>;
};

const OverflowMenu: React.FC<{ itemIds: string[] }> = ({ itemIds }) => {
  const { ref, overflowCount, isOverflowing } =
    useOverflowMenu<HTMLButtonElement>();

  if (!isOverflowing) {
    return null;
  }

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton ref={ref}>+{overflowCount} items</MenuButton>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          {itemIds.map((i) => {
            return <OverflowMenuItem key={i} id={i} />;
          })}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
```

### Reverse Dom Order

Overflow can happen in reverse DOM order.

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuButton,
  tokens,
  mergeClasses,
  Overflow,
  OverflowItem,
  OverflowItemProps,
  useIsOverflowItemVisible,
  useOverflowMenu,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: 0,
    overflow: "hidden",
  },
  resizableArea: {
    minWidth: "200px",
    maxWidth: "800px",
    border: `2px solid ${tokens.colorBrandBackground}`,
    padding: "20px 10px 10px 10px",
    position: "relative",
    resize: "horizontal",
    "::after": {
      content: `'Resizable Area'`,
      position: "absolute",
      padding: "1px 4px 1px",
      top: "-2px",
      left: "-2px",
      fontFamily: "monospace",
      fontSize: "15px",
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: "1px",
      color: tokens.colorNeutralForegroundOnBrand,
      backgroundColor: tokens.colorBrandBackground,
    },
  },
});

export const ReverseDomOrder = () => {
  const styles = useStyles();

  const itemIds = new Array(8).fill(0).map((_, i) => i.toString());

  return (
    <Overflow overflowDirection="start">
      <div className={mergeClasses(styles.container, styles.resizableArea)}>
        <OverflowMenu itemIds={itemIds} />
        {itemIds.map((i) => (
          <OverflowItem key={i} id={i}>
            <Button>Item {i}</Button>
          </OverflowItem>
        ))}
      </div>
    </Overflow>
  );
};

const OverflowMenuItem: React.FC<Pick<OverflowItemProps, "id">> = (props) => {
  const { id } = props;
  const isVisible = useIsOverflowItemVisible(id);

  if (isVisible) {
    return null;
  }

  // As an union between button props and div props may be conflicting, casting is required
  return <MenuItem>Item {id}</MenuItem>;
};

const OverflowMenu: React.FC<{ itemIds: string[] }> = ({ itemIds }) => {
  const { ref, overflowCount, isOverflowing } =
    useOverflowMenu<HTMLButtonElement>();

  if (!isOverflowing) {
    return null;
  }

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton ref={ref}>+{overflowCount} items</MenuButton>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          {itemIds.map((i) => {
            return <OverflowMenuItem key={i} id={i} />;
          })}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
```

### Minimum Visible

The `Overflow` component will stop overflowing past a certain number of minimum visible overflow items

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuButton,
  tokens,
  mergeClasses,
  Overflow,
  OverflowItem,
  OverflowItemProps,
  useIsOverflowItemVisible,
  useOverflowMenu,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: 0,
    overflow: "hidden",
  },

  resizableArea: {
    minWidth: "200px",
    maxWidth: "800px",
    border: `2px solid ${tokens.colorBrandBackground}`,
    padding: "20px 10px 10px 10px",
    position: "relative",
    resize: "horizontal",
    "::after": {
      content: `'Resizable Area'`,
      position: "absolute",
      padding: "1px 4px 1px",
      top: "-2px",
      left: "-2px",
      fontFamily: "monospace",
      fontSize: "15px",
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: "1px",
      color: tokens.colorNeutralForegroundOnBrand,
      backgroundColor: tokens.colorBrandBackground,
    },
  },
});

export const MinimumVisible = () => {
  const styles = useStyles();

  const itemIds = new Array(8).fill(0).map((_, i) => i.toString());

  return (
    <Overflow minimumVisible={4}>
      <div className={mergeClasses(styles.container, styles.resizableArea)}>
        {itemIds.map((i) => (
          <OverflowItem key={i} id={i}>
            <Button style={{ paddingLeft: 2, paddingRight: 2 }}>
              Item {i}
            </Button>
          </OverflowItem>
        ))}
        <OverflowMenu itemIds={itemIds} />
      </div>
    </Overflow>
  );
};

const OverflowMenuItem: React.FC<Pick<OverflowItemProps, "id">> = (props) => {
  const { id } = props;
  const isVisible = useIsOverflowItemVisible(id);

  if (isVisible) {
    return null;
  }

  // As an union between button props and div props may be conflicting, casting is required
  return <MenuItem>Item {id}</MenuItem>;
};

const OverflowMenu: React.FC<{ itemIds: string[] }> = ({ itemIds }) => {
  const { ref, overflowCount, isOverflowing } =
    useOverflowMenu<HTMLButtonElement>();

  if (!isOverflowing) {
    return null;
  }

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton ref={ref}>+{overflowCount} items</MenuButton>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          {itemIds.map((i) => {
            return <OverflowMenuItem key={i} id={i} />;
          })}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
```

### Vertical

Use the `overflowAxis` property to switch different orientations.

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuButton,
  tokens,
  mergeClasses,
  Overflow,
  OverflowItem,
  OverflowItemProps,
  useIsOverflowItemVisible,
  useOverflowMenu,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    minWidth: 0,
    overflow: "hidden",
  },

  overflowItem: {
    display: "block",
  },

  resizableArea: {
    minWidth: "200px",
    maxWidth: "800px",
    border: `2px solid ${tokens.colorBrandBackground}`,
    padding: "20px 10px 10px 10px",
    position: "relative",
    resize: "vertical",
    "::after": {
      content: `'Resizable Area'`,
      position: "absolute",
      padding: "1px 4px 1px",
      top: "-2px",
      left: "-2px",
      fontFamily: "monospace",
      fontSize: "15px",
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: "1px",
      color: tokens.colorNeutralForegroundOnBrand,
      backgroundColor: tokens.colorBrandBackground,
    },
  },
});

export const Vertical = () => {
  const styles = useStyles();

  const itemIds = new Array(8).fill(0).map((_, i) => i.toString());

  return (
    <Overflow overflowAxis="vertical">
      <div className={mergeClasses(styles.container, styles.resizableArea)}>
        {itemIds.map((i) => (
          <OverflowItem key={i} id={i}>
            <Button className={styles.overflowItem}>Item {i}</Button>
          </OverflowItem>
        ))}
        <OverflowMenu itemIds={itemIds} />
      </div>
    </Overflow>
  );
};

const OverflowMenuItem: React.FC<Pick<OverflowItemProps, "id">> = (props) => {
  const { id } = props;
  const isVisible = useIsOverflowItemVisible(id);

  if (isVisible) {
    return null;
  }

  return <MenuItem>Item {id}</MenuItem>;
};

const OverflowMenu: React.FC<{ itemIds: string[] }> = ({ itemIds }) => {
  const { ref, overflowCount, isOverflowing } =
    useOverflowMenu<HTMLButtonElement>();

  if (!isOverflowing) {
    return null;
  }

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton ref={ref}>+{overflowCount} items</MenuButton>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          {itemIds.map((i) => {
            return <OverflowMenuItem key={i} id={i} />;
          })}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
```

### Overflow By Priority

By assigning each `OverflowItem` a numerical priority, the items can overflow in user configured order that does not follow DOM order.

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuButton,
  tokens,
  mergeClasses,
  Overflow,
  OverflowItem,
  OverflowItemProps,
  useIsOverflowItemVisible,
  useOverflowMenu,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: 0,
    overflow: "hidden",
  },

  resizableArea: {
    minWidth: "200px",
    maxWidth: "800px",
    border: `2px solid ${tokens.colorBrandBackground}`,
    padding: "20px 10px 10px 10px",
    position: "relative",
    resize: "horizontal",
    "::after": {
      content: `'Resizable Area'`,
      position: "absolute",
      padding: "1px 4px 1px",
      top: "-2px",
      left: "-2px",
      fontFamily: "monospace",
      fontSize: "15px",
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: "1px",
      color: tokens.colorNeutralForegroundOnBrand,
      backgroundColor: tokens.colorBrandBackground,
    },
  },
});

export const OverflowByPriority = () => {
  const styles = useStyles();

  const priorities = [2, 3, 6, 1, 4, 5, 0, 7];

  return (
    <Overflow>
      <div className={mergeClasses(styles.container, styles.resizableArea)}>
        {priorities.map((i) => (
          <OverflowItem key={i} id={i.toString()} priority={i}>
            <Button>Priority {i}</Button>
          </OverflowItem>
        ))}
        <OverflowMenu itemIds={priorities.map((x) => x.toString())} />
      </div>
    </Overflow>
  );
};

const OverflowMenuItem: React.FC<Pick<OverflowItemProps, "id">> = (props) => {
  const { id } = props;
  const isVisible = useIsOverflowItemVisible(id);

  if (isVisible) {
    return null;
  }

  // As an union between button props and div props may be conflicting, casting is required
  return <MenuItem>Item {id}</MenuItem>;
};

const OverflowMenu: React.FC<{ itemIds: string[] }> = ({ itemIds }) => {
  const { ref, overflowCount, isOverflowing } =
    useOverflowMenu<HTMLButtonElement>();

  if (!isOverflowing) {
    return null;
  }

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton ref={ref}>+{overflowCount} items</MenuButton>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          {itemIds.map((i) => {
            return <OverflowMenuItem key={i} id={i} />;
          })}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
```

### Wrapped

Overflow containers can be wrapped by other DOM elements.

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuButton,
  tokens,
  Overflow,
  OverflowItem,
  OverflowItemProps,
  useIsOverflowItemVisible,
  useOverflowMenu,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexGrow: 1,
    flexWrap: "nowrap",
    minWidth: 0,
    overflow: "hidden",
  },

  farItems: {
    display: "flex",
    gap: "4px",
    flexWrap: "nowrap",
    marginRight: "10px", //to allow the resize handle to be grabbed
  },

  resizableArea: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: "200px",
    maxWidth: "1000px",
    border: `2px solid ${tokens.colorBrandBackground}`,
    padding: "20px 10px 10px 10px",
    overflow: "hidden",
    position: "relative",
    resize: "horizontal",
    "::after": {
      content: `'Resizable Area'`,
      position: "absolute",
      padding: "1px 4px 1px",
      top: "-2px",
      left: "-2px",
      fontFamily: "monospace",
      fontSize: "15px",
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: "1px",
      color: tokens.colorNeutralForegroundOnBrand,
      backgroundColor: tokens.colorBrandBackground,
    },
  },
});

export const Wrapped = () => {
  const itemIds = new Array(8).fill(0).map((_, i) => i.toString());
  const styles = useStyles();

  return (
    <div className={styles.resizableArea}>
      <Overflow>
        <div className={styles.container}>
          {itemIds.map((i) => (
            <OverflowItem key={i} id={i.toString()}>
              <Button>Item{i}</Button>
            </OverflowItem>
          ))}
          <OverflowMenu itemIds={itemIds} />
        </div>
      </Overflow>

      <div className={styles.farItems}>
        <Button>Foo</Button>
        <Button>Bar</Button>
      </div>
    </div>
  );
};

const OverflowMenuItem: React.FC<Pick<OverflowItemProps, "id">> = (props) => {
  const { id } = props;
  const isVisible = useIsOverflowItemVisible(id);

  if (isVisible) {
    return null;
  }

  // As an union between button props and div props may be conflicting, casting is required
  return <MenuItem>Item {id}</MenuItem>;
};

const OverflowMenu: React.FC<{ itemIds: string[] }> = ({ itemIds }) => {
  const { ref, overflowCount, isOverflowing } =
    useOverflowMenu<HTMLButtonElement>();

  if (!isOverflowing) {
    return null;
  }

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton ref={ref}>+{overflowCount} items</MenuButton>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          {itemIds.map((i) => {
            return <OverflowMenuItem key={i} id={i} />;
          })}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
```

### Pinned

An item can be pinned (always visible) by setting it to be a higher priority that all other overflow items. This can be useful when implementing selection scenarios where the selected item must always be visible. Try selecting different items below to observe this effect. The pinned item will be overflowed if there is no space left for any overflow item.

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuButton,
  mergeClasses,
  tokens,
  Overflow,
  OverflowItem,
  OverflowItemProps,
  useIsOverflowItemVisible,
  useOverflowMenu,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: 0,
    overflow: "hidden",
  },

  resizableArea: {
    minWidth: "200px",
    maxWidth: "800px",
    border: `2px solid ${tokens.colorBrandBackground}`,
    padding: "20px 10px 10px 10px",
    position: "relative",
    resize: "horizontal",
    "::after": {
      content: `'Resizable Area'`,
      position: "absolute",
      padding: "1px 4px 1px",
      top: "-2px",
      left: "-2px",
      fontFamily: "monospace",
      fontSize: "15px",
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: "1px",
      color: tokens.colorNeutralForegroundOnBrand,
      backgroundColor: tokens.colorBrandBackground,
    },
  },
});

export const Pinned = () => {
  const styles = useStyles();

  const [selected, setSelected] = React.useState<string>("6");

  const onSelect = (itemId: string) => {
    setSelected(itemId);
  };

  const itemIds = new Array(8).fill(0).map((_, i) => i.toString());

  return (
    <Overflow>
      <div className={mergeClasses(styles.container, styles.resizableArea)}>
        {itemIds.map((i) => (
          <OverflowSelectionItem
            onSelectItem={onSelect}
            key={i}
            id={i}
            selected={selected === i}
          />
        ))}
        <OverflowMenu itemIds={itemIds} onSelect={onSelect} />
      </div>
    </Overflow>
  );
};

const OverflowSelectionItem: React.FC<{
  onSelectItem?: (item: string) => void;
  selected?: boolean;
  id: string;
}> = (props) => {
  const onClick = () => {
    props.onSelectItem?.(props.id);
  };

  return (
    <OverflowItem id={props.id} priority={props.selected ? 1000 : undefined}>
      <Button
        aria-pressed={props.selected ? "true" : "false"}
        appearance={props.selected ? "primary" : "secondary"}
        onClick={onClick}
      >
        Item {props.id}
      </Button>
    </OverflowItem>
  );
};

const OverflowMenuItem: React.FC<
  Pick<OverflowItemProps, "id"> & { onClick: () => void }
> = (props) => {
  const { id, onClick } = props;
  const isVisible = useIsOverflowItemVisible(id);

  if (isVisible) {
    return null;
  }

  return <MenuItem onClick={onClick}>Item {id}</MenuItem>;
};

const OverflowMenu: React.FC<{
  itemIds: string[];
  onSelect: (itemId: string) => void;
}> = ({ itemIds, onSelect }) => {
  const { ref, overflowCount, isOverflowing } =
    useOverflowMenu<HTMLButtonElement>();

  if (!isOverflowing) {
    return null;
  }

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton ref={ref}>+{overflowCount} items</MenuButton>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          {itemIds.map((i) => (
            <OverflowMenuItem onClick={() => onSelect(i)} key={i} id={i} />
          ))}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
```

### Dividers

Dividers can be handled by assigning groups to overflow items. The visibility of the divider can be configured to depend on the overflow item group. This way dividers will also disappear once its group is completely overflowed and avoids trailing or double dividers.

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Divider,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuButton,
  tokens,
  mergeClasses,
  Overflow,
  OverflowItem,
  useIsOverflowGroupVisible,
  useIsOverflowItemVisible,
  useOverflowMenu,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: 0,
    overflow: "hidden",
  },

  resizableArea: {
    minWidth: "200px",
    maxWidth: "800px",
    border: `2px solid ${tokens.colorBrandBackground}`,
    padding: "20px 10px 10px 10px",
    position: "relative",
    resize: "horizontal",
    "::after": {
      content: `'Resizable Area'`,
      position: "absolute",
      padding: "1px 4px 1px",
      top: "-2px",
      left: "-2px",
      fontFamily: "monospace",
      fontSize: "15px",
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: "1px",
      color: tokens.colorNeutralForegroundOnBrand,
      backgroundColor: tokens.colorBrandBackground,
    },
  },
});

export const Dividers = () => {
  const styles = useStyles();

  return (
    <Overflow padding={40}>
      <div className={mergeClasses(styles.container, styles.resizableArea)}>
        <OverflowItem id={"1"} groupId={"1"}>
          <Button>Item 1</Button>
        </OverflowItem>
        <OverflowGroupDivider groupId={"1"} />
        <OverflowItem id={"2"} groupId={"2"}>
          <Button>Item 2</Button>
        </OverflowItem>
        <OverflowGroupDivider groupId={"2"} />
        <OverflowItem id={"3"} groupId={"3"}>
          <Button>Item 3</Button>
        </OverflowItem>
        <OverflowItem id={"4"} groupId={"3"}>
          <Button>Item 4</Button>
        </OverflowItem>
        <OverflowGroupDivider groupId={"3"} />
        <OverflowItem id={"5"} groupId={"4"}>
          <Button>Item 5</Button>
        </OverflowItem>
        <OverflowItem id={"6"} groupId={"4"}>
          <Button>Item 6</Button>
        </OverflowItem>
        <OverflowItem id={"7"} groupId={"4"}>
          <Button>Item 7</Button>
        </OverflowItem>
        <OverflowGroupDivider groupId={"4"} />
        <OverflowItem id={"8"} groupId={"5"}>
          <Button>Item 8</Button>
        </OverflowItem>
        <OverflowMenu
          itemIds={[
            "1",
            "divider-1",
            "2",
            "divider-2",
            "3",
            "4",
            "divider-3",
            "5",
            "6",
            "7",
            "divider-4",
            "8",
          ]}
        />
      </div>
    </Overflow>
  );
};

const OverflowGroupDivider: React.FC<{
  groupId: string;
}> = (props) => {
  const isGroupVisible = useIsOverflowGroupVisible(props.groupId);

  if (isGroupVisible === "hidden") {
    return null;
  }

  return (
    <Divider
      vertical
      appearance="brand"
      style={{ flexGrow: 0, paddingRight: "4px", paddingLeft: "4px" }}
    />
  );
};

const OverflowMenu: React.FC<{ itemIds: string[] }> = ({ itemIds }) => {
  const { ref, overflowCount, isOverflowing } =
    useOverflowMenu<HTMLButtonElement>();

  if (!isOverflowing) {
    return null;
  }

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton ref={ref}>+{overflowCount} items</MenuButton>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          {itemIds.map((i) => {
            // This is purely a simplified convention for documentation examples
            // Could be done in other ways too
            if (typeof i === "string" && i.startsWith("divider")) {
              const groupId = i.split("-")[1];
              return <OverflowMenuDivider key={i} id={groupId} />;
            }
            return <OverflowMenuItem key={i} id={i} />;
          })}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

const OverflowMenuItem: React.FC<{ id: string }> = (props) => {
  const { id } = props;
  const isVisible = useIsOverflowItemVisible(id);

  if (isVisible) {
    return null;
  }

  return <MenuItem>Item {id}</MenuItem>;
};

const OverflowMenuDivider: React.FC<{
  id: string;
}> = (props) => {
  const isGroupVisible = useIsOverflowGroupVisible(props.id);

  if (isGroupVisible === "visible") {
    return null;
  }

  return <MenuDivider />;
};
```

### Larger Dividers

For smaller dividers the `padding` prop can be set to take into account the unmeasured space that the divider takes up. When a larger divider is used its width is not calculated. This causes items to overflow later than needed. The `OverflowDivider` divider component can be used for larger dividers to include its width to the calculation.

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuButton,
  tokens,
  mergeClasses,
  Overflow,
  OverflowItem,
  useIsOverflowGroupVisible,
  useIsOverflowItemVisible,
  useOverflowMenu,
  OverflowDivider,
} from "@fluentui/react-components";
import { ChevronRight20Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: 0,
    overflow: "hidden",
  },

  resizableArea: {
    minWidth: "200px",
    maxWidth: "800px",
    border: `2px solid ${tokens.colorBrandBackground}`,
    padding: "20px 10px 10px 10px",
    position: "relative",
    resize: "horizontal",
    "::after": {
      content: `'Resizable Area'`,
      position: "absolute",
      padding: "1px 4px 1px",
      top: "-2px",
      left: "-2px",
      fontFamily: "monospace",
      fontSize: "15px",
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: "1px",
      color: tokens.colorNeutralForegroundOnBrand,
      backgroundColor: tokens.colorBrandBackground,
    },
  },
});

export const LargerDividers = () => {
  const styles = useStyles();

  return (
    <Overflow>
      <div className={mergeClasses(styles.container, styles.resizableArea)}>
        <OverflowItem id={"1"} groupId={"1"}>
          <Button>Item 1</Button>
        </OverflowItem>
        <OverflowGroupDivider groupId={"1"} />
        <OverflowItem id={"2"} groupId={"2"}>
          <Button>Item 2</Button>
        </OverflowItem>
        <OverflowGroupDivider groupId={"2"} />
        <OverflowItem id={"3"} groupId={"3"}>
          <Button>Item 3</Button>
        </OverflowItem>
        <OverflowItem id={"4"} groupId={"3"}>
          <Button>Item 4</Button>
        </OverflowItem>
        <OverflowGroupDivider groupId={"3"} />
        <OverflowItem id={"5"} groupId={"4"}>
          <Button>Item 5</Button>
        </OverflowItem>
        <OverflowItem id={"6"} groupId={"4"}>
          <Button>Item 6</Button>
        </OverflowItem>
        <OverflowItem id={"7"} groupId={"4"}>
          <Button>Item 7</Button>
        </OverflowItem>
        <OverflowGroupDivider groupId={"4"} />
        <OverflowItem id={"8"} groupId={"5"}>
          <Button>Item 8</Button>
        </OverflowItem>
        <OverflowMenu
          itemIds={[
            "1",
            "divider-1",
            "2",
            "divider-2",
            "3",
            "4",
            "divider-3",
            "5",
            "6",
            "7",
            "divider-4",
            "8",
          ]}
        />
      </div>
    </Overflow>
  );
};

const OverflowGroupDivider: React.FC<{
  groupId: string;
}> = (props) => {
  return (
    <OverflowDivider groupId={props.groupId}>
      <div>
        <ChevronRight20Regular />
      </div>
    </OverflowDivider>
  );
};

const OverflowMenu: React.FC<{ itemIds: string[] }> = ({ itemIds }) => {
  const { ref, overflowCount, isOverflowing } =
    useOverflowMenu<HTMLButtonElement>();

  if (!isOverflowing) {
    return null;
  }

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton ref={ref}>+{overflowCount} items</MenuButton>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          {itemIds.map((i) => {
            // This is purely a simplified convention for documentation examples
            // Could be done in other ways too
            if (typeof i === "string" && i.startsWith("divider")) {
              const groupId = i.split("-")[1];
              return <OverflowMenuDivider key={i} id={groupId} />;
            }
            return <OverflowMenuItem key={i} id={i} />;
          })}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

const OverflowMenuItem: React.FC<{ id: string }> = (props) => {
  const { id } = props;
  const isVisible = useIsOverflowItemVisible(id);

  if (isVisible) {
    return null;
  }

  return <MenuItem>Item {id}</MenuItem>;
};

const OverflowMenuDivider: React.FC<{
  id: string;
}> = (props) => {
  const isGroupVisible = useIsOverflowGroupVisible(props.id);

  if (isGroupVisible === "visible") {
    return null;
  }

  return <MenuDivider />;
};
```

### Priority With Dividers

Overflow groups will respect the priority of overflow items.

> ⚠️ Consider carefully if you need this behaviour, the code required to manage divider visibility here is non-trivial. This complexity comes from the fact that dividers can be visible both in the overflow container and the overflow menu. Please read the code for the reference implementation carefully.

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Divider,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuButton,
  tokens,
  mergeClasses,
  Overflow,
  OverflowItem,
  useIsOverflowGroupVisible,
  useIsOverflowItemVisible,
  useOverflowMenu,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: 0,
    overflow: "hidden",
  },
  resizableArea: {
    minWidth: "200px",
    maxWidth: "800px",
    border: `2px solid ${tokens.colorBrandBackground}`,
    padding: "20px 10px 10px 10px",
    position: "relative",
    resize: "horizontal",
    "::after": {
      content: `'Resizable Area'`,
      position: "absolute",
      padding: "1px 4px 1px",
      top: "-2px",
      left: "-2px",
      fontFamily: "monospace",
      fontSize: "15px",
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: "1px",
      color: tokens.colorNeutralForegroundOnBrand,
      backgroundColor: tokens.colorBrandBackground,
    },
  },
});

const GROUPS = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

export const PriorityWithDividers = () => {
  const styles = useStyles();

  return (
    <Overflow overflowDirection="start" padding={40}>
      <div className={mergeClasses(styles.container, styles.resizableArea)}>
        <OverflowItem id={"6"} priority={6} groupId={GROUPS.ONE.toString()}>
          <Button>Priority 6</Button>
        </OverflowItem>
        <OverflowGroupDivider groupId={GROUPS.ONE} />
        <OverflowItem id={"7"} priority={7} groupId={GROUPS.TWO.toString()}>
          <Button>Priority 7</Button>
        </OverflowItem>
        <OverflowGroupDivider groupId={GROUPS.TWO} />
        <OverflowItem id={"4"} priority={4} groupId={GROUPS.THREE.toString()}>
          <Button>Priority 4</Button>
        </OverflowItem>
        <OverflowItem id={"5"} priority={5} groupId={GROUPS.THREE.toString()}>
          <Button>Priority 5</Button>
        </OverflowItem>
        <OverflowGroupDivider groupId={GROUPS.THREE} />
        <OverflowItem id={"1"} priority={1} groupId={GROUPS.FOUR.toString()}>
          <Button>Priority 1</Button>
        </OverflowItem>
        <OverflowItem id={"2"} priority={2} groupId={GROUPS.FOUR.toString()}>
          <Button>Priority 2</Button>
        </OverflowItem>
        <OverflowItem id={"3"} priority={3} groupId={GROUPS.FOUR.toString()}>
          <Button>Priority 3</Button>
        </OverflowItem>
        <OverflowGroupDivider groupId={GROUPS.FOUR} />
        <OverflowItem id={"8"} priority={8} groupId={GROUPS.FIVE.toString()}>
          <Button>Priority 8</Button>
        </OverflowItem>
        <OverflowMenu
          itemIds={[
            "6",
            "divider-1",
            "7",
            "divider-2",
            "4",
            "5",
            "divider-3",
            "1",
            "2",
            "3",
            "divider-4",
            "8",
          ]}
        />
      </div>
    </Overflow>
  );
};

const OverflowGroupDivider: React.FC<{
  groupId: number;
}> = (props) => {
  const groupVisibility = useIsOverflowGroupVisible(props.groupId.toString());
  if (groupVisibility === "hidden") {
    return null;
  }

  return (
    <Divider
      data-group={props.groupId}
      vertical
      appearance="brand"
      style={{ flexGrow: 0, paddingRight: "4px", paddingLeft: "4px" }}
    />
  );
};

const OverflowMenu: React.FC<{ itemIds: string[] }> = ({ itemIds }) => {
  const { ref, overflowCount, isOverflowing } =
    useOverflowMenu<HTMLButtonElement>();

  if (!isOverflowing) {
    return null;
  }

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton ref={ref}>+{overflowCount} items</MenuButton>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          {itemIds.map((itemId) => {
            // This is purely a simplified convention for documentation examples
            // Could be done in other ways too
            if (itemId.startsWith("divider")) {
              const groupId = itemId.split("-")[1];
              return (
                <OverflowMenuDivider key={itemId} groupId={Number(groupId)} />
              );
            }
            return <OverflowMenuItem key={itemId} id={itemId} />;
          })}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

const OverflowMenuItem: React.FC<{ id: string }> = (props) => {
  const { id } = props;
  const isVisible = useIsOverflowItemVisible(id);

  if (isVisible) {
    return null;
  }

  return <MenuItem>Item {id}</MenuItem>;
};

const OverflowMenuDivider: React.FC<{
  groupId: number;
}> = (props) => {
  const { groupId } = props;

  // ⚠️⚠️ This is important
  // When collapsing based on custom priority, it's necessary to know
  // about other overflow groups because dividers can be rendered both
  // in the overflow container and the overflow menu.
  // The below code sorts the overflow groups and determines
  // if a divider should be rendered.
  const groupVisibilities = Object.values(GROUPS).map((group) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return { group, visibility: useIsOverflowGroupVisible(group.toString()) };
  });

  const currentGroupPosition = groupVisibilities.findIndex(
    (x) => x.group === groupId
  );
  const precedesOverflowingGroup = groupVisibilities
    .slice(currentGroupPosition + 1)
    // If there is a overflowing/hidden group after the current group
    // render the menu divider.
    .some((groupVisibility) => groupVisibility.visibility !== "visible");

  if (
    groupVisibilities[currentGroupPosition].visibility === "visible" ||
    !precedesOverflowingGroup
  ) {
    return null;
  }

  return <MenuDivider />;
};
```

### Custom Component

It is possible to wrap the `OverflowItem` children with a custom component instead of rendering them directly.

**In this case it is important to use `React.forwardRef` and to pass the ref to the underlying component**, otherwise React will fail to attach the internal ref, resulting in an error.

```jsx
import {
  Button,
  ForwardRefComponent,
  makeStyles,
  mergeClasses,
  Overflow,
  OverflowItem,
  tokens,
  useIsOverflowItemVisible,
} from "@fluentui/react-components";
import * as React from "react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: 0,
    overflow: "hidden",
  },

  resizableArea: {
    minWidth: "200px",
    maxWidth: "800px",
    border: `2px solid ${tokens.colorBrandBackground}`,
    padding: "20px 10px 10px 10px",
    position: "relative",
    resize: "horizontal",
    "::after": {
      content: `'Resizable Area'`,
      position: "absolute",
      padding: "1px 4px 1px",
      top: "-2px",
      left: "-2px",
      fontFamily: "monospace",
      fontSize: "15px",
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: "1px",
      color: tokens.colorNeutralForegroundOnBrand,
      backgroundColor: tokens.colorBrandBackground,
    },
  },
});

const ItemVisibleCustomComponent: ForwardRefComponent<{
  appId: string;
}> = React.forwardRef((props, ref) => {
  const isVisible = useIsOverflowItemVisible(props.appId);

  console.log(`Item ${props.appId} is ${isVisible ? "" : "not "}visible'`);
  return <Button ref={ref}>Item {props.appId}</Button>;
});

export const CustomComponent = () => {
  const styles = useStyles();

  const itemIds = new Array(8).fill(0).map((_, i) => i.toString());

  return (
    <Overflow>
      <div className={mergeClasses(styles.container, styles.resizableArea)}>
        {itemIds.map((i) => (
          <OverflowItem key={i} id={i}>
            <ItemVisibleCustomComponent appId={i} />
          </OverflowItem>
        ))}
      </div>
    </Overflow>
  );
};
```