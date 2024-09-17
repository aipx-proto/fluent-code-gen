# MenuList

```jsx
import * as React from "react";
import {
  makeStyles,
  tokens,
  MenuList,
  MenuItem,
} from "@fluentui/react-components";

const useMenuListContainerStyles = makeStyles({
  container: {
    backgroundColor: tokens.colorNeutralBackground1,
    minWidth: "128px",
    minHeight: "48px",
    maxWidth: "300px",
    width: "max-content",
    boxShadow: `${tokens.shadow16}`,
    paddingTop: "4px",
    paddingBottom: "4px",
  },
});

export const Default = () => {
  const styles = useMenuListContainerStyles();
  return (
    <div className={styles.container}>
      <MenuList>
        <MenuItem>Cut</MenuItem>
        <MenuItem>Paste</MenuItem>
        <MenuItem>Edit</MenuItem>
      </MenuList>
    </div>
  );
};
```

### Default

```jsx
import * as React from "react";
import {
  makeStyles,
  tokens,
  MenuList,
  MenuItem,
} from "@fluentui/react-components";

const useMenuListContainerStyles = makeStyles({
  container: {
    backgroundColor: tokens.colorNeutralBackground1,
    minWidth: "128px",
    minHeight: "48px",
    maxWidth: "300px",
    width: "max-content",
    boxShadow: `${tokens.shadow16}`,
    paddingTop: "4px",
    paddingBottom: "4px",
  },
});

export const Default = () => {
  const styles = useMenuListContainerStyles();
  return (
    <div className={styles.container}>
      <MenuList>
        <MenuItem>Cut</MenuItem>
        <MenuItem>Paste</MenuItem>
        <MenuItem>Edit</MenuItem>
      </MenuList>
    </div>
  );
};
```

### Menu List With Nested Submenus

A permanent `MenuList` can also nest `Menu` components. This can be useful when embedding `MenuList` inside a custom temporary surface such as a popover dialog.

```jsx
import * as React from "react";
import {
  makeStyles,
  tokens,
  MenuList,
  MenuItem,
  Menu,
  MenuPopover,
  MenuTrigger,
} from "@fluentui/react-components";

const useMenuListContainerStyles = makeStyles({
  container: {
    backgroundColor: tokens.colorNeutralBackground1,
    minWidth: "128px",
    minHeight: "48px",
    maxWidth: "300px",
    width: "max-content",
    boxShadow: `${tokens.shadow16}`,
    paddingTop: "4px",
    paddingBottom: "4px",
  },
});

export const MenuListWithNestedSubmenus = () => {
  const styles = useMenuListContainerStyles();
  return (
    <div className={styles.container}>
      <MenuList>
        <MenuItem>Cut</MenuItem>
        <MenuItem>Paste</MenuItem>
        <MenuItem>Edit</MenuItem>
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <MenuItem>Preferences</MenuItem>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem>Cut</MenuItem>
              <MenuItem>Paste</MenuItem>
              <MenuItem>Edit</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </MenuList>
    </div>
  );
};
```

### Checkbox Items

```jsx
import * as React from "react";

import {
  MenuList,
  MenuItemCheckbox,
  makeStyles,
  tokens,
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

const useMenuListContainerStyles = makeStyles({
  container: {
    backgroundColor: tokens.colorNeutralBackground1,
    minWidth: "128px",
    minHeight: "48px",
    maxWidth: "300px",
    width: "max-content",
    boxShadow: `${tokens.shadow16}`,
    paddingTop: "4px",
    paddingBottom: "4px",
  },
});

export const CheckboxItems = () => {
  const styles = useMenuListContainerStyles();

  return (
    <div className={styles.container}>
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
    </div>
  );
};
```

### Radio Items

```jsx
import * as React from "react";

import {
  MenuList,
  MenuItemRadio,
  makeStyles,
  tokens,
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

const useMenuListContainerStyles = makeStyles({
  container: {
    backgroundColor: tokens.colorNeutralBackground1,
    minWidth: "128px",
    minHeight: "48px",
    maxWidth: "300px",
    width: "max-content",
    boxShadow: `${tokens.shadow16}`,
    paddingTop: "4px",
    paddingBottom: "4px",
  },
});

export const RadioItems = () => {
  const styles = useMenuListContainerStyles();
  return (
    <div className={styles.container}>
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
    </div>
  );
};
```

### Controlled Checkbox Items

```jsx
import * as React from "react";

import {
  MenuList,
  MenuItemCheckbox,
  makeStyles,
  tokens,
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

const useMenuListContainerStyles = makeStyles({
  container: {
    backgroundColor: tokens.colorNeutralBackground1,
    minWidth: "128px",
    minHeight: "48px",
    maxWidth: "300px",
    width: "max-content",
    boxShadow: `${tokens.shadow16}`,
    paddingTop: "4px",
    paddingBottom: "4px",
  },
});

export const ControlledCheckboxItems = () => {
  const styles = useMenuListContainerStyles();
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
    <div className={styles.container}>
      <MenuList checkedValues={checkedValues} onCheckedValueChange={onChange}>
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
    </div>
  );
};
```

### Controlled Radio Items

```jsx
import * as React from "react";

import {
  MenuList,
  MenuItemRadio,
  makeStyles,
  tokens,
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

const useMenuListContainerStyles = makeStyles({
  container: {
    backgroundColor: tokens.colorNeutralBackground1,
    minWidth: "128px",
    minHeight: "48px",
    maxWidth: "300px",
    width: "max-content",
    boxShadow: `${tokens.shadow16}`,
    paddingTop: "4px",
    paddingBottom: "4px",
  },
});

export const ControlledRadioItems = () => {
  const styles = useMenuListContainerStyles();
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
    <div className={styles.container}>
      <MenuList checkedValues={checkedValues} onCheckedValueChange={onChange}>
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
    </div>
  );
};
```