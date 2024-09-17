# Menu

```jsx
import * as React from "react";

import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";

export const Default = () => (
  <Menu>
    <MenuTrigger disableButtonEnhancement>
      <Button>Toggle menu</Button>
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
);
```

### Default

```jsx
import * as React from "react";

import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";

export const Default = () => (
  <Menu>
    <MenuTrigger disableButtonEnhancement>
      <Button>Toggle menu</Button>
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
);
```

### Interaction

Each sub component of the `Menu` that renders DOM elements can be assigned HTML event listeners. You can simply add an `onClick` listener to individual `MenuItem` without needing to control the entire component. Special handling is required for checkboxes and radio items inside a `Menu`, read the further examples below to see how to handle those variants.

```jsx
import * as React from "react";
import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";
import {
  bundleIcon,
  ClipboardPasteRegular,
  ClipboardPasteFilled,
  CutRegular,
  CutFilled,
  CopyRegular,
  CopyFilled,
} from "@fluentui/react-icons";
import type { MenuProps } from "@fluentui/react-components";

const PasteIcon = bundleIcon(ClipboardPasteFilled, ClipboardPasteRegular);
const CopyIcon = bundleIcon(CopyFilled, CopyRegular);
const CutIcon = bundleIcon(CutFilled, CutRegular);

export const Interaction = (props: Partial<MenuProps>) => {
  return (
    <Menu {...props}>
      <MenuTrigger disableButtonEnhancement>
        <Button>Edit content</Button>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem
            icon={<CutIcon />}
            onClick={() => alert("Cut to clipboard")}
          >
            Cut
          </MenuItem>
          <MenuItem
            icon={<CopyIcon />}
            onClick={() => alert("Copied to clipboard")}
          >
            Copy
          </MenuItem>
          <MenuItem
            icon={<PasteIcon />}
            onClick={() => alert("Pasted from clipboard")}
          >
            Paste
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
```

### Menu Item Link Navigation

To implement a navigation menu, simply use the `MenuItemLink` component that provides the correct semantics for link based navigation.

```jsx
import * as React from "react";

import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItemLink,
  MenuPopover,
} from "@fluentui/react-components";

export const MenuItemLinkNavigation = () => (
  <Menu>
    <MenuTrigger disableButtonEnhancement>
      <Button>Navigation menu</Button>
    </MenuTrigger>

    <MenuPopover>
      <MenuList>
        <MenuItemLink href="https://www.microsoft.com" target="_blank">
          Home
        </MenuItemLink>
        <MenuItemLink href="https://www.microsoft.com">
          Online shop
        </MenuItemLink>
        <MenuItemLink href="https://www.microsoft.com">Contact us</MenuItemLink>
        <MenuItemLink href="https://www.microsoft.com">About</MenuItemLink>
      </MenuList>
    </MenuPopover>
  </Menu>
);
```

### Menu Items With Icons

```jsx
import * as React from "react";

import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";
import {
  bundleIcon,
  CutRegular,
  CutFilled,
  ClipboardPasteRegular,
  ClipboardPasteFilled,
  EditRegular,
  EditFilled,
} from "@fluentui/react-icons";

const CutIcon = bundleIcon(CutFilled, CutRegular);
const PasteIcon = bundleIcon(ClipboardPasteFilled, ClipboardPasteRegular);
const EditIcon = bundleIcon(EditFilled, EditRegular);

export const MenuItemsWithIcons = () => (
  <Menu>
    <MenuTrigger disableButtonEnhancement>
      <Button>Toggle menu</Button>
    </MenuTrigger>

    <MenuPopover>
      <MenuList>
        <MenuItem icon={<CutIcon />}>Cut</MenuItem>
        <MenuItem icon={<PasteIcon />}>Paste</MenuItem>
        <MenuItem icon={<EditIcon />}>Edit</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
);
```

### Aligning With Icons

The `hasIcons` prop will align menu items if only a subset of menu items contain an icon. When separation of menu items is only for visual aesthetics, the `MenuDivider` component can be used by itself as it has no accessible markup features.

```jsx
import * as React from "react";

import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";
import {
  bundleIcon,
  ClipboardPasteRegular,
  ClipboardPasteFilled,
} from "@fluentui/react-icons";

const PasteIcon = bundleIcon(ClipboardPasteFilled, ClipboardPasteRegular);

export const AligningWithIcons = () => (
  <Menu hasIcons>
    <MenuTrigger disableButtonEnhancement>
      <Button>Toggle menu</Button>
    </MenuTrigger>
    <MenuPopover>
      <MenuList>
        <MenuItem>Cut</MenuItem>
        <MenuItem icon={<PasteIcon />}>Paste</MenuItem>
        <MenuItem>Edit</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
);
```

### Aligning With Selectable Items

The `hasCheckmarks` prop will align menu items if only a subset of menu items are selectable.

```jsx
import * as React from "react";

import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuItemCheckbox,
  MenuPopover,
} from "@fluentui/react-components";
import { CutRegular, CutFilled, bundleIcon } from "@fluentui/react-icons";

const CutIcon = bundleIcon(CutFilled, CutRegular);

export const AligningWithSelectableItems = () => (
  <Menu hasIcons hasCheckmarks>
    <MenuTrigger disableButtonEnhancement>
      <Button>Toggle menu</Button>
    </MenuTrigger>
    <MenuPopover>
      <MenuList>
        <MenuItemCheckbox icon={<CutIcon />} name="edit" value="cut">
          Checkbox item
        </MenuItemCheckbox>
        <MenuItem>Menu item</MenuItem>
        <MenuItem>Menu item</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
);
```

### Secondary Content For Menu Items

```jsx
import * as React from "react";

import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";

export const SecondaryContentForMenuItems = () => (
  <Menu>
    <MenuTrigger disableButtonEnhancement>
      <Button>Toggle menu</Button>
    </MenuTrigger>

    <MenuPopover>
      <MenuList>
        <MenuItem secondaryContent="Ctrl+N">New File</MenuItem>
        <MenuItem secondaryContent="Ctrl+Shift+N">New Window</MenuItem>
        <MenuItem secondaryContent="Ctrl+O">Open File</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
);
```

### Controlling Open And Close

The opening and close of the `Menu` can be controlled with your own state. The `onOpenChange` callback will provide the hints for the state and triggers based on the appropriate event.

_When controlling the open state of the `Menu`, extra effort is required to ensure that interactions are_ _still appropriate and that keyboard accessibility does not degrade._

```jsx
import * as React from "react";

import {
  Button,
  Checkbox,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";
import type { CheckboxProps, MenuProps } from "@fluentui/react-components";

export const ControllingOpenAndClose = () => {
  const [open, setOpen] = React.useState(false);
  const onOpenChange: MenuProps["onOpenChange"] = (e, data) => {
    setOpen(data.open);
  };

  const onChange: CheckboxProps["onChange"] = (e, { checked }) => {
    if (typeof checked === "boolean") {
      setOpen(checked);
    }
  };

  return (
    <div>
      <div>
        <Checkbox label="Open" checked={open} onChange={onChange} />
      </div>

      <Menu open={open} onOpenChange={onOpenChange}>
        <MenuTrigger disableButtonEnhancement>
          <Button>Toggle menu</Button>
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
    </div>
  );
};
```

### Grouping Items

A menu can be divided in to separate groups, using the `MenuGroup` and `MenuGroupHeader` components. This ensures the correct accessible markup is rendered for screen reader users.

```jsx
import * as React from "react";
import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuGroupHeader,
  MenuPopover,
} from "@fluentui/react-components";
import {
  bundleIcon,
  CutRegular,
  CutFilled,
  ClipboardPasteRegular,
  ClipboardPasteFilled,
  EditRegular,
  EditFilled,
} from "@fluentui/react-icons";

const CutIcon = bundleIcon(CutFilled, CutRegular);
const PasteIcon = bundleIcon(ClipboardPasteFilled, ClipboardPasteRegular);
const EditIcon = bundleIcon(EditFilled, EditRegular);

export const GroupingItems = () => (
  <Menu>
    <MenuTrigger disableButtonEnhancement>
      <Button>Toggle menu</Button>
    </MenuTrigger>

    <MenuPopover>
      <MenuList>
        <MenuGroup>
          <MenuGroupHeader>Section header</MenuGroupHeader>
          <MenuItem icon={<CutIcon />}>Cut</MenuItem>
          <MenuItem icon={<PasteIcon />}>Paste</MenuItem>
          <MenuItem icon={<EditIcon />}>Edit</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuGroupHeader>Section header</MenuGroupHeader>
          <MenuItem icon={<CutIcon />}>Cut</MenuItem>
          <MenuItem icon={<PasteIcon />}>Paste</MenuItem>
          <MenuItem icon={<EditIcon />}>Edit</MenuItem>
        </MenuGroup>
      </MenuList>
    </MenuPopover>
  </Menu>
);
```

### Visual Divider Only

If a divider is needed only for visual aesthetics, the `MenuDivider` component can be used separately. When items should be logically groupped, use the `MenuGroup` and `MenuGroupHeader` components for correct accessible markup.

```jsx
import * as React from "react";

import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuPopover,
} from "@fluentui/react-components";

import {
  bundleIcon,
  CutRegular,
  CutFilled,
  ClipboardPasteRegular,
  ClipboardPasteFilled,
  EditRegular,
  EditFilled,
} from "@fluentui/react-icons";

const CutIcon = bundleIcon(CutFilled, CutRegular);
const PasteIcon = bundleIcon(ClipboardPasteFilled, ClipboardPasteRegular);
const EditIcon = bundleIcon(EditFilled, EditRegular);

export const VisualDividerOnly = () => (
  <Menu>
    <MenuTrigger disableButtonEnhancement>
      <Button>Toggle menu</Button>
    </MenuTrigger>

    <MenuPopover>
      <MenuList>
        <MenuItem icon={<CutIcon />}>Cut</MenuItem>
        <MenuItem icon={<PasteIcon />}>Paste</MenuItem>
        <MenuItem icon={<EditIcon />}>Edit</MenuItem>
        <MenuDivider />
        <MenuItem icon={<CutIcon />}>Cut</MenuItem>
        <MenuItem icon={<PasteIcon />}>Paste</MenuItem>
        <MenuItem icon={<EditIcon />}>Edit</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
);
```

### Checkbox Items

A variant of `MenuItem` that handles checkbox like selection. The `name` and `value` props are are used similar to HTML checkboxes with input

```jsx
<input type="checkbox" name="name" value="value" />
```

```jsx
import * as React from "react";

import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItemCheckbox,
  MenuPopover,
} from "@fluentui/react-components";
import {
  bundleIcon,
  CutRegular,
  CutFilled,
  ClipboardPasteRegular,
  ClipboardPasteFilled,
  EditRegular,
  EditFilled,
} from "@fluentui/react-icons";

const CutIcon = bundleIcon(CutFilled, CutRegular);
const PasteIcon = bundleIcon(ClipboardPasteFilled, ClipboardPasteRegular);
const EditIcon = bundleIcon(EditFilled, EditRegular);

export const CheckboxItems = () => {
  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <Button>Toggle menu</Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItemCheckbox icon={<CutIcon />} name="edit" value="cut">
            Cut
          </MenuItemCheckbox>
          <MenuItemCheckbox icon={<PasteIcon />} name="edit" value="paste">
            Paste
          </MenuItemCheckbox>
          <MenuItemCheckbox icon={<EditIcon />} name="edit" value="edit">
            Edit
          </MenuItemCheckbox>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
```

### Switch Item

A variant of `MenuItemCheckbox` that displays selection using a switch design. This is commonly used for menus that don't really have strong selection function but needs to support an exceptional selected option.

```jsx
import * as React from "react";

import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
  MenuItemSwitch,
} from "@fluentui/react-components";

export const SwitchItem = () => (
  <Menu>
    <MenuTrigger disableButtonEnhancement>
      <Button>Toggle menu</Button>
    </MenuTrigger>

    <MenuPopover>
      <MenuList>
        <MenuItem>New</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem disabled>Open File</MenuItem>
        <MenuItem>Open Folder</MenuItem>
        <MenuItemSwitch name="new-explorer" value="new-explorer">
          Try V2
        </MenuItemSwitch>
      </MenuList>
    </MenuPopover>
  </Menu>
);
```

### Radio Items

A variant of `MenuItem` that handles radio like selection. The `name` and `value` props are are used similar to HTML checkboxes with input

```jsx
<input type="radio" name="name" value="value" />
```

```jsx
import * as React from "react";

import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItemRadio,
  MenuPopover,
} from "@fluentui/react-components";
import {
  bundleIcon,
  CutRegular,
  CutFilled,
  ClipboardPasteRegular,
  ClipboardPasteFilled,
  EditRegular,
  EditFilled,
} from "@fluentui/react-icons";

const CutIcon = bundleIcon(CutFilled, CutRegular);
const PasteIcon = bundleIcon(ClipboardPasteFilled, ClipboardPasteRegular);
const EditIcon = bundleIcon(EditFilled, EditRegular);

export const RadioItems = () => {
  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <Button>Toggle menu</Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItemRadio icon={<CutIcon />} name="font" value="segoe">
            Segoe
          </MenuItemRadio>
          <MenuItemRadio icon={<PasteIcon />} name="font" value="calibri">
            Calibri
          </MenuItemRadio>
          <MenuItemRadio icon={<EditIcon />} name="font" value="arial">
            Arial
          </MenuItemRadio>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
```

### Controlled Checkbox Items

```jsx
import * as React from "react";

import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItemCheckbox,
  MenuPopover,
} from "@fluentui/react-components";
import {
  bundleIcon,
  CutRegular,
  CutFilled,
  ClipboardPasteRegular,
  ClipboardPasteFilled,
  EditRegular,
  EditFilled,
} from "@fluentui/react-icons";
import type { MenuProps } from "@fluentui/react-components";

const CutIcon = bundleIcon(CutFilled, CutRegular);
const PasteIcon = bundleIcon(ClipboardPasteFilled, ClipboardPasteRegular);
const EditIcon = bundleIcon(EditFilled, EditRegular);

export const ControlledCheckboxItems = () => {
  const [checkedValues, setCheckedValues] = React.useState<
    Record<string, string[]>
  >({ edit: ["cut", "paste"] });
  const onChange: MenuProps["onCheckedValueChange"] = (
    e,
    { name, checkedItems }
  ) => {
    setCheckedValues((s) => {
      return s ? { ...s, [name]: checkedItems } : { [name]: checkedItems };
    });
  };

  return (
    <Menu checkedValues={checkedValues} onCheckedValueChange={onChange}>
      <MenuTrigger disableButtonEnhancement>
        <Button>Toggle menu</Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItemCheckbox icon={<CutIcon />} name="edit" value="cut">
            Cut
          </MenuItemCheckbox>
          <MenuItemCheckbox icon={<PasteIcon />} name="edit" value="paste">
            Paste
          </MenuItemCheckbox>
          <MenuItemCheckbox icon={<EditIcon />} name="edit" value="edit">
            Edit
          </MenuItemCheckbox>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
```

### Controlled Radio Items

```jsx
import * as React from "react";

import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItemRadio,
  MenuPopover,
} from "@fluentui/react-components";
import {
  bundleIcon,
  CutRegular,
  CutFilled,
  ClipboardPasteRegular,
  ClipboardPasteFilled,
  EditRegular,
  EditFilled,
} from "@fluentui/react-icons";
import type { MenuProps } from "@fluentui/react-components";

const CutIcon = bundleIcon(CutFilled, CutRegular);
const PasteIcon = bundleIcon(ClipboardPasteFilled, ClipboardPasteRegular);
const EditIcon = bundleIcon(EditFilled, EditRegular);

export const ControlledRadioItems = () => {
  const [checkedValues, setCheckedValues] = React.useState<
    Record<string, string[]>
  >({ font: ["calibri"] });
  const onChange: MenuProps["onCheckedValueChange"] = (
    e,
    { name, checkedItems }
  ) => {
    setCheckedValues((s) => ({ ...s, [name]: checkedItems }));
  };

  return (
    <Menu checkedValues={checkedValues} onCheckedValueChange={onChange}>
      <MenuTrigger disableButtonEnhancement>
        <Button>Toggle menu</Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItemRadio icon={<CutIcon />} name="font" value="segoe">
            Segoe
          </MenuItemRadio>
          <MenuItemRadio icon={<PasteIcon />} name="font" value="calibri">
            Calibri
          </MenuItemRadio>
          <MenuItemRadio icon={<EditIcon />} name="font" value="arial">
            Arial
          </MenuItemRadio>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
```

### Selection Group

Both menu item checkboxes and radio items can be used in the same menu surface. Different selection areas should be grouped to provide clear expectations for users.

```jsx
import * as React from "react";
import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItemRadio,
  MenuItemCheckbox,
  MenuGroup,
  MenuDivider,
  MenuGroupHeader,
  MenuPopover,
} from "@fluentui/react-components";
import {
  bundleIcon,
  CutRegular,
  CutFilled,
  ClipboardPasteRegular,
  ClipboardPasteFilled,
  EditRegular,
  EditFilled,
} from "@fluentui/react-icons";

const CutIcon = bundleIcon(CutFilled, CutRegular);
const PasteIcon = bundleIcon(ClipboardPasteFilled, ClipboardPasteRegular);
const EditIcon = bundleIcon(EditFilled, EditRegular);

export const SelectionGroup = () => (
  <Menu>
    <MenuTrigger disableButtonEnhancement>
      <Button>Toggle menu</Button>
    </MenuTrigger>

    <MenuPopover>
      <MenuList>
        <MenuGroup>
          <MenuGroupHeader>Checkbox group</MenuGroupHeader>
          <MenuItemCheckbox
            secondaryContent="Ctrl+N"
            icon={<CutIcon />}
            name="edit"
            value="cut"
          >
            Show Menu Bar
          </MenuItemCheckbox>
          <MenuItemCheckbox
            secondaryContent="Ctrl+Shift+N"
            icon={<PasteIcon />}
            name="edit"
            value="paste"
          >
            Show Side Bar
          </MenuItemCheckbox>
          <MenuItemCheckbox
            secondaryContent="Ctrl+Shift+O"
            icon={<EditIcon />}
            name="edit"
            value="edit"
          >
            Show Status Bar
          </MenuItemCheckbox>
          <MenuItemCheckbox
            disabled
            icon={<EditIcon />}
            name="disabled"
            value="disabled"
          >
            Show Debug Panel
          </MenuItemCheckbox>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuGroupHeader>Radio group</MenuGroupHeader>
          <MenuItemRadio
            secondaryContent="Ctrl+N"
            icon={<CutIcon />}
            name="font"
            value="segoe"
          >
            Segoe
          </MenuItemRadio>
          <MenuItemRadio
            secondaryContent="Ctrl+Shift+N"
            icon={<PasteIcon />}
            name="font"
            value="calibri"
          >
            Caliri
          </MenuItemRadio>
          <MenuItemRadio
            secondaryContent="Ctrl+Shift+N"
            icon={<EditIcon />}
            name="font"
            value="arial"
          >
            Arial
          </MenuItemRadio>
        </MenuGroup>
      </MenuList>
    </MenuPopover>
  </Menu>
);
```

### Nested Submenus

Menus can be nested within each other to render application submenus. Submenus are a complex control for any app, make sure you need them.

*   Try and limit nesting to 2 levels.
*   Creating submenus as separate components will result in more maintainable code.

```jsx
import * as React from "react";

import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";

const EditorLayoutSubMenu = () => {
  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuItem>Editor Layout</MenuItem>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>Split Up</MenuItem>
          <MenuItem>Split Down</MenuItem>
          <MenuItem>Single</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

const AppearanceSubMenu = () => {
  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuItem>Appearance</MenuItem>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>Centered Layout</MenuItem>
          <MenuItem>Zen</MenuItem>
          <MenuItem disabled>Zoom In</MenuItem>
          <MenuItem>Zoom Out</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

const PreferencesSubMenu = () => {
  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuItem>Preferences</MenuItem>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Online Services Settings</MenuItem>
          <MenuItem>Extensions</MenuItem>
          <AppearanceSubMenu />
          <EditorLayoutSubMenu />
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

export const NestedSubmenus = () => {
  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <Button>Toggle menu</Button>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>New </MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem disabled>Open File</MenuItem>
          <MenuItem>Open Folder</MenuItem>
          <PreferencesSubMenu />
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
```

### Nested Submenus Controlled

Menus can be nested within each other to render application submenus. Submenus are a complex control for any app, make sure you need them.

*   Try and limit nesting to 2 levels.
*   Creating submenus as separate components will result in more maintainable code.

```jsx
import * as React from "react";

import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";
import type { MenuProps } from "@fluentui/react-components";

const EditorLayoutSubMenu = () => {
  const [open, setOpen] = React.useState(false);
  const onOpenChange: MenuProps["onOpenChange"] = (e, data) => {
    setOpen(data.open);
  };

  return (
    <Menu open={open} onOpenChange={onOpenChange}>
      <MenuTrigger disableButtonEnhancement>
        <MenuItem>Editor Layout</MenuItem>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>Split Up</MenuItem>
          <MenuItem>Split Down</MenuItem>
          <MenuItem>Single</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

const AppearanceSubMenu = () => {
  const [open, setOpen] = React.useState(false);
  const onOpenChange: MenuProps["onOpenChange"] = (e, data) => {
    setOpen(data.open);
  };

  return (
    <Menu open={open} onOpenChange={onOpenChange}>
      <MenuTrigger disableButtonEnhancement>
        <MenuItem>Appearance</MenuItem>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>Centered Layout</MenuItem>
          <MenuItem>Zen</MenuItem>
          <MenuItem disabled>Zoom In</MenuItem>
          <MenuItem>Zoom Out</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

const PreferencesSubMenu = () => {
  const [open, setOpen] = React.useState(false);
  const onOpenChange: MenuProps["onOpenChange"] = (e, data) => {
    setOpen(data.open);
  };

  return (
    <Menu open={open} onOpenChange={onOpenChange}>
      <MenuTrigger disableButtonEnhancement>
        <MenuItem>Preferences</MenuItem>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Online Services Settings</MenuItem>
          <MenuItem>Extensions</MenuItem>
          <AppearanceSubMenu />
          <EditorLayoutSubMenu />
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

export const NestedSubmenusControlled = () => {
  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <Button>Toggle menu</Button>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>New </MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem disabled>Open File</MenuItem>
          <MenuItem>Open Folder</MenuItem>
          <PreferencesSubMenu />
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
```

### Nested Submenus Responsiveness

Nested submenus have some limited responsiveness built in. If the boundaries of the container/viewport get smaller, nested submenus will try to position themselves accordingly. Below is the order or fallbacks that will happen:

*   Move alignment of the nested menu higher
*   Flip the position of the nested menu
*   Position the nested menu above the parent menu

You can use the resizable container below to try this out. **(Click outside the resizable area to dismiss the menus)**

```jsx
import * as React from "react";

import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
  PositioningImperativeRef,
  makeStyles,
  tokens,
  mergeClasses,
  MenuProps,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    width: "500px",
    height: "400px",
  },

  resizableArea: {
    width: "500px",
    height: "400px",
    position: "relative",
    border: `2px solid ${tokens.colorBrandBackground}`,
    padding: "20px 10px 10px 10px",
    resize: "both",
    backgroundImage: `linear-gradient(-45deg, ${tokens.colorBrandBackground} 20px, transparent 20px)`,
    overflow: "hidden",

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

export const NestedSubmenusResponsiveness = () => {
  const styles = useStyles();
  const [open, setOpen] = React.useState(false);
  const [boundary, setBoundary] = React.useState<HTMLElement | null>(null);
  const positioningRefSubmenu = React.useRef<PositioningImperativeRef>(null);
  const positioningRefRoot = React.useRef<PositioningImperativeRef>(null);

  // Fluent UI handles window resizing by default.
  // Custom boundary resizing is not handled by default.
  React.useEffect(() => {
    if (boundary) {
      const resizeObserver = new ResizeObserver(() => {
        positioningRefSubmenu.current?.updatePosition();
        positioningRefRoot.current?.updatePosition();
      });
      resizeObserver.observe(boundary);
      return () => {
        resizeObserver.unobserve(boundary);
        resizeObserver.disconnect();
      };
    }
  }, [boundary]);

  React.useEffect(() => {
    if (open) {
      // defer position update of the nested menu the root menu hasn't been positioned yet
      const timeout = setTimeout(() =>
        positioningRefSubmenu.current?.updatePosition()
      );
      positioningRefRoot.current?.updatePosition();

      return () => clearTimeout(timeout);
    }
  }, [open]);

  const onOpenChange: MenuProps["onOpenChange"] = (e, data) => {
    if (boundary?.contains(e.target as HTMLElement)) {
      setOpen(true);
    } else {
      setOpen(data.open);
    }
  };

  return (
    <div className={styles.container}>
      <div
        id="boundary"
        className={mergeClasses(styles.container, styles.resizableArea)}
        ref={setBoundary}
      >
        <Menu
          open={open}
          onOpenChange={onOpenChange}
          positioning={{
            positioningRef: positioningRefRoot,
            overflowBoundary: boundary,
            flipBoundary: boundary,
          }}
        >
          <MenuTrigger disableButtonEnhancement>
            <Button style={{ position: "absolute", left: "40%" }}>Menu</Button>
          </MenuTrigger>

          <MenuPopover>
            <MenuList>
              <MenuItem>New </MenuItem>
              <MenuItem>New Window</MenuItem>
              <MenuItem disabled>Open File</MenuItem>
              <MenuItem>Open Folder</MenuItem>
              <Menu
                open
                positioning={{
                  overflowBoundary: boundary,
                  flipBoundary: boundary,
                  positioningRef: positioningRefSubmenu,
                }}
              >
                <MenuTrigger disableButtonEnhancement>
                  <MenuItem>Toggle menu</MenuItem>
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
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>
    </div>
  );
};
```

### Anchor To Custom Target

A Menu can be used without a trigger and anchored to any DOM element. This can be useful if a Menu instance needs to be reused in different places.

_Not using a MenuTrigger will require more work to make sure your scenario is accessible_ _such as implementing accessible markup and keyboard interactions for your trigger_

```jsx
import * as React from "react";

import {
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuPopover,
  useRestoreFocusTarget,
} from "@fluentui/react-components";
import type {
  MenuProps,
  PositioningImperativeRef,
} from "@fluentui/react-components";

export const AnchorToCustomTarget = () => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const customAnchorRef = React.useRef<HTMLButtonElement>(null);
  const positioningRef = React.useRef<PositioningImperativeRef>(null);
  const [open, setOpen] = React.useState(false);
  const onOpenChange: MenuProps["onOpenChange"] = (e, data) => {
    // do not close menu as an outside click if clicking on the custom trigger/target
    // this prevents it from closing & immediately re-opening when clicking custom triggers
    if (
      data.type === "clickOutside" &&
      (e.target === customAnchorRef.current || e.target === buttonRef.current)
    ) {
      return;
    }

    setOpen(data.open);
  };

  React.useEffect(() => {
    if (buttonRef.current) {
      positioningRef.current?.setTarget(buttonRef.current);
    }
  }, [buttonRef, positioningRef]);

  const restoreFocusTargetAttribute = useRestoreFocusTarget();

  return (
    <>
      <Button
        {...restoreFocusTargetAttribute}
        ref={customAnchorRef}
        onClick={() => setOpen((s) => !s)}
      >
        Open menu
      </Button>
      <Button
        {...restoreFocusTargetAttribute}
        ref={buttonRef}
        onClick={() => setOpen((s) => !s)}
      >
        Custom target
      </Button>
      <Menu
        open={open}
        onOpenChange={onOpenChange}
        positioning={{ positioningRef }}
      >
        <MenuPopover>
          <MenuList>
            <MenuItem>New </MenuItem>
            <MenuItem>New Window</MenuItem>
            <MenuItem disabled>Open File</MenuItem>
            <MenuItem>Open Folder</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  );
};
```

### Custom Trigger

Native elements and Fluent components have first class support as children of `MenuTrigger` so they will be injected automatically with the correct props for interactions and accessibility attributes.

It is possible to use your own custom React component as a child of `MenuTrigger`. These components should use ref forwarding with React.forwardRef

```jsx
import * as React from "react";
import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";
import type {
  MenuProps,
  MenuTriggerChildProps,
} from "@fluentui/react-components";

const CustomMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  Partial<MenuTriggerChildProps>
>((props, ref) => {
  return (
    <Button {...props} ref={ref}>
      Custom Trigger
    </Button>
  );
});

export const CustomTrigger = () => {
  const [open, setOpen] = React.useState(false);
  const onOpenChange: MenuProps["onOpenChange"] = (e, data) => {
    setOpen(data.open);
  };

  return (
    <Menu open={open} onOpenChange={onOpenChange}>
      <MenuTrigger disableButtonEnhancement>
        <CustomMenuTrigger />
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
  );
};
```

### Render Function Trigger

When a function is passed as the children of `MenuTrigger`, the actual trigger can be customized to be an inner part of the function.

```jsx
import * as React from "react";
import { ChevronDownRegular } from "@fluentui/react-icons";

import {
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";
import type {
  MenuProps,
  MenuTriggerChildProps,
} from "@fluentui/react-components";

const buttonStyle = { height: 22, verticalAlign: "middle" };

export const RenderFunctionTrigger = () => {
  const [open, setOpen] = React.useState(false);
  const onOpenChange: MenuProps["onOpenChange"] = (e, data) => {
    setOpen(data.open);
  };

  return (
    <Menu open={open} onOpenChange={onOpenChange}>
      <MenuTrigger disableButtonEnhancement>
        {(props: MenuTriggerChildProps<"button">) => (
          <div>
            <button style={buttonStyle}>Custom Trigger</button>
            <button {...props} style={buttonStyle}>
              <ChevronDownRegular fontSize={16} />
            </button>
          </div>
        )}
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
  );
};
```

### Memoized Menu Items

⚠️ _Rerendering menu items is a cheap operation and React philosophy encourages rerenders._ _Memoization is not free, so use it only when there are concrete benefits to doing so._

Memoized menu items can be created using React.memo to optimize rerenders of menu items if their props have not changed. Can be useful for selectable items, since each selection will rerender all items in the menu by default.

```jsx
import * as React from "react";
import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItemCheckbox,
  MenuPopover,
} from "@fluentui/react-components";
import { EditFilled, EditRegular, bundleIcon } from "@fluentui/react-icons";
import type { MenuItemCheckboxProps } from "@fluentui/react-components";

const EditIcon = bundleIcon(EditFilled, EditRegular);

const MemoCheckbox = React.memo((props: MenuItemCheckboxProps) => {
  // use icons in the memo because JSX will always create a new object
  // possible to memoize icons but it can be overkill
  return (
    <MenuItemCheckbox icon={<EditIcon />} name={props.name} value={props.value}>
      {props.children}
    </MenuItemCheckbox>
  );
});

export const MemoizedMenuItems = () => {
  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <Button>Toggle menu</Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MemoCheckbox name="font" value="segoe">
            Segoe
          </MemoCheckbox>
          <MemoCheckbox name="font" value="calibri">
            Calibri
          </MemoCheckbox>
          <MemoCheckbox name="font" value="arial">
            Arial
          </MemoCheckbox>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
```

### Split Menu Item

A menu item can be split into a main action and a trigger that opens a submenu. Use this pattern sparingly. Make sure to add an `aria-label` to the trigger for screen reader users.

```jsx
import * as React from "react";

import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
  MenuSplitGroup,
} from "@fluentui/react-components";

export const SplitMenuItem = () => (
  <Menu>
    <MenuTrigger disableButtonEnhancement>
      <Button>Toggle menu</Button>
    </MenuTrigger>
    <MenuPopover>
      <MenuList>
        <MenuItem>New </MenuItem>
        <MenuItem>New Window</MenuItem>
        <Menu>
          <MenuSplitGroup>
            <MenuItem>Open</MenuItem>
            <MenuTrigger disableButtonEnhancement>
              <MenuItem aria-label="Open on platform" />
            </MenuTrigger>
          </MenuSplitGroup>
          <MenuPopover>
            <MenuList>
              <MenuItem>In browser</MenuItem>
              <MenuItem>In desktop app</MenuItem>
              <MenuItem>In mobile</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
);
```

### Menu Trigger With Tooltip

A trigger for `Menu` can also have a tooltip.

```jsx
import * as React from "react";
import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
  Tooltip,
} from "@fluentui/react-components";

export const MenuTriggerWithTooltip = () => (
  <Menu>
    <Tooltip content="This is a tooltip" relationship="description">
      <MenuTrigger disableButtonEnhancement>
        <Button>Toggle menu</Button>
      </MenuTrigger>
    </Tooltip>

    <MenuPopover>
      <MenuList>
        <MenuItem>New </MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem disabled>Open File</MenuItem>
        <MenuItem>Open Folder</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
);
```