# Dropdown

A Dropdown is a selection component composed of a button and a list of options. The button displays the current selected item or a placeholder, and the list is visible on demand by clicking the button. Dropdowns are typically used in forms. Best practices Do Provide a label for the Dropdown.Set the Option's value prop if the content contains JSX. The Option value is used for keyboard accessibility to enable users to type a letter or string and jump to the matching option. The value is calculated from the children by default, but if the Option contains JSX, the value prop should be used to directly provide a string value.Consider using Dropdown with outline or underline appearances. When the contrast ratio against the immediate surrounding color is less than 3:1, consider using underline or outline styles which has a bottom border stroke. But please ensure the color of bottom border stroke has a sufficient contrast which is greater than 3 to 1 against the immediate surrounding color. Don't Use placeholder for label text. Placeholder text has lower contrast than label text, and disappears once an option is selected. If used, it should only contain temporary filler text.

```jsx
import * as React from "react";
import {
  Dropdown,
  makeStyles,
  Option,
  useId,
} from "@fluentui/react-components";
import type { DropdownProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "2px",
    maxWidth: "400px",
  },
});

export const Default = (props: Partial<DropdownProps>) => {
  const dropdownId = useId("dropdown-default");
  const options = [
    "Cat",
    "Caterpillar",
    "Corgi",
    "Chupacabra",
    "Dog",
    "Ferret",
    "Fish",
    "Fox",
    "Hamster",
    "Snake",
  ];
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <label id={dropdownId}>Best pet</label>
      <Dropdown
        aria-labelledby={dropdownId}
        placeholder="Select an animal"
        {...props}
      >
        {options.map((option) => (
          <Option key={option} disabled={option === "Ferret"}>
            {option}
          </Option>
        ))}
      </Dropdown>
    </div>
  );
};
```

### Default

```jsx
import * as React from "react";
import {
  Dropdown,
  makeStyles,
  Option,
  useId,
} from "@fluentui/react-components";
import type { DropdownProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "2px",
    maxWidth: "400px",
  },
});

export const Default = (props: Partial<DropdownProps>) => {
  const dropdownId = useId("dropdown-default");
  const options = [
    "Cat",
    "Caterpillar",
    "Corgi",
    "Chupacabra",
    "Dog",
    "Ferret",
    "Fish",
    "Fox",
    "Hamster",
    "Snake",
  ];
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <label id={dropdownId}>Best pet</label>
      <Dropdown
        aria-labelledby={dropdownId}
        placeholder="Select an animal"
        {...props}
      >
        {options.map((option) => (
          <Option key={option} disabled={option === "Ferret"}>
            {option}
          </Option>
        ))}
      </Dropdown>
    </div>
  );
};
```

### Appearance

A Dropdown can have the following `appearance` variants:

*   `outline` (default): has a border around all four sides.
*   `underline`: only has a bottom border.
*   `filled-darker`: no border, only a subtle background color difference against a white page.
*   `filled-lighter`: no border, and a white background.

```jsx
import * as React from "react";
import {
  Dropdown,
  makeStyles,
  Option,
  tokens,
  useId,
} from "@fluentui/react-components";
import type { DropdownProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "20px",
    maxWidth: "400px",
    "> div": {
      display: "grid",
      gridTemplateRows: "repeat(1fr)",
      justifyItems: "start",
      gap: "2px",
      // need padding to see the background color for filled variants
      padding: "5px 20px 10px",
    },
  },
  // filledLighter and filledDarker appearances depend on particular background colors
  filledLighter: {
    backgroundColor: tokens.colorNeutralBackgroundInverted,
    "> label": {
      color: tokens.colorNeutralForegroundInverted2,
    },
    "> h3": {
      color: tokens.colorNeutralForegroundInverted2,
    },
  },
  filledDarker: {
    backgroundColor: tokens.colorNeutralBackgroundInverted,
    "> label": {
      color: tokens.colorNeutralForegroundInverted2,
    },
    "> h3": {
      color: tokens.colorNeutralForegroundInverted2,
    },
  },
});

export const Appearance = (props: Partial<DropdownProps>) => {
  const dropdownId = useId("dropdown");
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div>
        <h3>Outline</h3>
        <label id={`${dropdownId}-outline`}>Select an animal</label>
        <Dropdown
          aria-labelledby={`${dropdownId}-outline`}
          placeholder="-"
          appearance="outline"
          {...props}
        >
          <Option>Cat</Option>
          <Option>Dog</Option>
          <Option>Bird</Option>
        </Dropdown>
      </div>

      <div>
        <h3>Underline</h3>
        <label id={`${dropdownId}-underline`}>Select an animal</label>
        <Dropdown
          aria-labelledby={`${dropdownId}-underline`}
          placeholder="-"
          appearance="underline"
          {...props}
        >
          <Option>Cat</Option>
          <Option>Dog</Option>
          <Option>Bird</Option>
        </Dropdown>
      </div>

      <div className={styles.filledDarker}>
        <h3>Filled Darker</h3>
        <label id={`${dropdownId}-filledDarker`}>Select an animal</label>
        <Dropdown
          aria-labelledby={`${dropdownId}-filledDarker`}
          placeholder="-"
          appearance="filled-darker"
          {...props}
        >
          <Option>Cat</Option>
          <Option>Dog</Option>
          <Option>Bird</Option>
        </Dropdown>
      </div>

      <div className={styles.filledLighter}>
        <h3>Filled Lighter</h3>
        <label id={`${dropdownId}-filledLighter`}>Select an animal</label>
        <Dropdown
          aria-labelledby={`${dropdownId}-filledLighter`}
          placeholder="-"
          appearance="filled-lighter"
          {...props}
        >
          <Option>Cat</Option>
          <Option>Dog</Option>
          <Option>Bird</Option>
        </Dropdown>
      </div>
    </div>
  );
};
```

### Grouped

Dropdown options can be semantically grouped with the `OptionGroup` element, with an optional group label.

```jsx
import * as React from "react";
import {
  Dropdown,
  makeStyles,
  Option,
  OptionGroup,
  useId,
} from "@fluentui/react-components";
import type { DropdownProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "2px",
    maxWidth: "400px",
  },
});

export const Grouped = (props: Partial<DropdownProps>) => {
  const dropdownId = useId("dropdown-grouped");
  const land = ["Cat", "Dog", "Ferret", "Hamster"];
  const water = ["Fish", "Jellyfish", "Octopus", "Seal"];
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <label id={dropdownId}>Best pet</label>
      <Dropdown
        aria-labelledby={dropdownId}
        placeholder="Select an animal"
        {...props}
      >
        <OptionGroup label="Land">
          {land.map((option) => (
            <Option key={option} disabled={option === "Ferret"}>
              {option}
            </Option>
          ))}
        </OptionGroup>
        <OptionGroup label="Sea">
          {water.map((option) => (
            <Option key={option}>{option}</Option>
          ))}
        </OptionGroup>
      </Dropdown>
    </div>
  );
};
```

### Clearable

A Dropdown can be clearable and let users remove their selection. Note: this is not supported in multiselect mode yet.

```jsx
import * as React from "react";
import {
  Dropdown,
  Label,
  makeStyles,
  Option,
  useId,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "2px",
    maxWidth: "400px",
  },
});

export const Clearable = () => {
  const dropdownId = useId("");
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Label id={dropdownId}>Pick a color</Label>
      <Dropdown
        clearable
        aria-labelledby={dropdownId}
        placeholder="Select a color"
      >
        <Option>Red</Option>
        <Option>Green</Option>
        <Option>Blue</Option>
      </Dropdown>
    </div>
  );
};
```

### Complex Options

Options are defined as JSX children, and can include nested elements or other components. When this is the case, the Option's `text` prop should be the plain text version of the option, and is used as the Dropdown button's value when the option is selected. Options should never contain interactive elements, such as buttons or links.

```jsx
import * as React from "react";
import {
  Dropdown,
  makeStyles,
  Option,
  useId,
  Persona,
} from "@fluentui/react-components";
import type { DropdownProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "2px",
    maxWidth: "400px",
  },
});

export const ComplexOptions = (props: Partial<DropdownProps>) => {
  const dropdownId = useId("dropdown");
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <label id={dropdownId}>Schedule a meeting</label>
      <Dropdown aria-labelledby={dropdownId} {...props}>
        <Option text="Katri Athokas">
          <Persona
            avatar={{ color: "colorful", "aria-hidden": true }}
            name="Katri Athokas"
            presence={{
              status: "available",
            }}
            secondaryText="Available"
          />
        </Option>
        <Option text="Elvia Atkins">
          <Persona
            avatar={{ color: "colorful", "aria-hidden": true }}
            name="Elvia Atkins"
            presence={{
              status: "busy",
            }}
            secondaryText="Busy"
          />
        </Option>
        <Option text="Cameron Evans">
          <Persona
            avatar={{ color: "colorful", "aria-hidden": true }}
            name="Cameron Evans"
            presence={{
              status: "away",
            }}
            secondaryText="Away"
          />
        </Option>
        <Option text="Wanda Howard">
          <Persona
            avatar={{ color: "colorful", "aria-hidden": true }}
            name="Wanda Howard"
            presence={{
              status: "out-of-office",
            }}
            secondaryText="Out of office"
          />
        </Option>
      </Dropdown>
    </div>
  );
};
```

### Custom Options

Options and OptionGroups can be extended and customized.Here `OptionGroup` is wrapped in `CustomOptionGroup`,which adds a custom label style and takes an `options` array prop which is mapped to child Option elements.`Option` is also wrapped in `CustomOption`, which adds a custom check icon and animal icon.The `text` prop is added to `<Option>`, since the children of `<Option>` are not a simple string.

```jsx
import * as React from "react";
import {
  Dropdown,
  makeStyles,
  Option,
  OptionGroup,
  useId,
} from "@fluentui/react-components";
import type {
  DropdownProps,
  OptionProps,
  OptionGroupProps,
} from "@fluentui/react-components";
import {
  AnimalCat24Filled,
  AnimalDog24Filled,
  AnimalRabbit24Filled,
  AnimalTurtle24Filled,
  FoodFish24Filled,
  CheckboxChecked24Regular,
} from "@fluentui/react-icons";

const animalIcons = {
  Cat: AnimalCat24Filled,
  Dog: AnimalDog24Filled,
  Rabbit: AnimalRabbit24Filled,
  Turtle: AnimalTurtle24Filled,
  Fish: FoodFish24Filled,
};

const useCustomOptionStyles = makeStyles({
  option: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  icon: { flex: "0 0 auto" },
  text: { flex: "1 1 auto" },
});

type CustomOptionProps = Partial<OptionProps> & {
  animal: keyof typeof animalIcons;
};

const CustomOption = (props: CustomOptionProps) => {
  const { animal, ...optionProps } = props;
  const Icon = animalIcons[animal];
  const styles = useCustomOptionStyles();
  return (
    <Option
      text={animal}
      className={styles.option}
      checkIcon={<CheckboxChecked24Regular />}
      {...optionProps}
    >
      <Icon className={styles.icon} />
      <span className={styles.text}>{animal}</span>
    </Option>
  );
};

const CustomOptionGroup = (
  props: Partial<OptionGroupProps> & { options: (keyof typeof animalIcons)[] }
) => {
  const { label, options, ...optionGroupProps } = props;
  const labelSlot = typeof label === "object" ? label : { children: label };

  return (
    <OptionGroup
      label={{ style: { fontStyle: "italic" }, ...labelSlot }}
      {...optionGroupProps}
    >
      {options.map((option) => (
        <CustomOption key={option} animal={option} />
      ))}
    </OptionGroup>
  );
};

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "2px",
    maxWidth: "400px",
  },
  listbox: {
    maxHeight: "200px",
  },
});

export const CustomOptions = (props: Partial<DropdownProps>) => {
  const dropdownId = useId("dropdown");
  const land = ["Cat", "Dog", "Rabbit"] as (keyof typeof animalIcons)[];
  const water = ["Fish", "Turtle"] as (keyof typeof animalIcons)[];
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <label id={dropdownId}>Best pet</label>
      <Dropdown
        aria-labelledby={dropdownId}
        listbox={{ className: styles.listbox }}
        placeholder="Select an animal"
        {...props}
      >
        <CustomOptionGroup label="Land" options={land} />
        <CustomOptionGroup label="Sea" options={water} />
      </Dropdown>
    </div>
  );
};
```

### Controlled

A Dropdown may have controlled or controlled selection and value. When the selection is controlled or a default selection is provided, a controlled value or default value must also be defined. Otherwise, the Dropdown will not be able to display a value before the Options are rendered.

```jsx
import * as React from "react";
import {
  Dropdown,
  makeStyles,
  Option,
  useId,
  Persona,
} from "@fluentui/react-components";
import type { DropdownProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    justifyItems: "start",
    gap: "20px",
    maxWidth: "400px",
  },
  field: {
    display: "grid",
    justifyItems: "start",
    gap: "2px",
  },
});

export const Controlled = (props: Partial<DropdownProps>) => {
  const comboId = useId("combo-controlled");
  const styles = useStyles();
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([
    "eatkins",
  ]);
  const [value, setValue] = React.useState("Elvia Atkins");

  const onOptionSelect: (typeof props)["onOptionSelect"] = (ev, data) => {
    setSelectedOptions(data.selectedOptions);
    setValue(data.optionText ?? "");
  };

  return (
    <div className={styles.root}>
      <div className={styles.field}>
        <label htmlFor={`${comboId}-default`}>
          Schedule a meeting (default selection)
        </label>
        <Dropdown
          id={`${comboId}-default`}
          {...props}
          defaultValue="Elvia Atkins"
          defaultSelectedOptions={["eatkins"]}
        >
          <Option text="Katri Athokas" value="kathok">
            <Persona
              avatar={{ color: "colorful", "aria-hidden": true }}
              name="Katri Athokas"
              presence={{
                status: "available",
              }}
              secondaryText="Available"
            />
          </Option>
          <Option text="Elvia Atkins" value="eatkins">
            <Persona
              avatar={{ color: "colorful", "aria-hidden": true }}
              name="Elvia Atkins"
              presence={{
                status: "busy",
              }}
              secondaryText="Busy"
            />
          </Option>
          <Option text="Cameron Evans" value="cevans">
            <Persona
              avatar={{ color: "colorful", "aria-hidden": true }}
              name="Cameron Evans"
              presence={{
                status: "away",
              }}
              secondaryText="Away"
            />
          </Option>
          <Option text="Wanda Howard" value="whoward">
            <Persona
              avatar={{ color: "colorful", "aria-hidden": true }}
              name="Wanda Howard"
              presence={{
                status: "out-of-office",
              }}
              secondaryText="Out of office"
            />
          </Option>
        </Dropdown>
      </div>

      <div className={styles.field}>
        <label htmlFor={`${comboId}-controlled`}>
          Schedule a meeting (controlled selection)
        </label>
        <Dropdown
          id={`${comboId}-controlled`}
          {...props}
          value={value}
          selectedOptions={selectedOptions}
          onOptionSelect={onOptionSelect}
        >
          <Option text="Katri Athokas" value="kathok">
            <Persona
              avatar={{ color: "colorful", "aria-hidden": true }}
              name="Katri Athokas"
              presence={{
                status: "available",
              }}
              secondaryText="Available"
            />
          </Option>
          <Option text="Elvia Atkins" value="eatkins">
            <Persona
              avatar={{ color: "colorful", "aria-hidden": true }}
              name="Elvia Atkins"
              presence={{
                status: "busy",
              }}
              secondaryText="Busy"
            />
          </Option>
          <Option text="Cameron Evans" value="cevans">
            <Persona
              avatar={{ color: "colorful", "aria-hidden": true }}
              name="Cameron Evans"
              presence={{
                status: "away",
              }}
              secondaryText="Away"
            />
          </Option>
          <Option text="Wanda Howard" value="whoward">
            <Persona
              avatar={{ color: "colorful", "aria-hidden": true }}
              name="Wanda Howard"
              presence={{
                status: "out-of-office",
              }}
              secondaryText="Out of office"
            />
          </Option>
        </Dropdown>
      </div>
    </div>
  );
};
```

### Multiselect

Dropdown supports multiselect, and options within a multiselect will display checkbox icons.

```jsx
import * as React from "react";
import {
  Dropdown,
  makeStyles,
  Option,
  useId,
} from "@fluentui/react-components";
import type { DropdownProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "2px",
    maxWidth: "400px",
  },
});

export const Multiselect = (props: Partial<DropdownProps>) => {
  const comboId = useId("combo-multi");
  const options = ["Cat", "Dog", "Ferret", "Fish", "Hamster", "Snake"];
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <label id={comboId}>Best pet</label>
      <Dropdown
        aria-labelledby={comboId}
        multiselect={true}
        placeholder="Select an animal"
        {...props}
      >
        {options.map((option) => (
          <Option key={option} disabled={option === "Ferret"}>
            {option}
          </Option>
        ))}
      </Dropdown>
    </div>
  );
};
```

### Size

A Dropdown's size can be set to `small`, `medium` (default), or `large`.

```jsx
import * as React from "react";
import {
  Dropdown,
  makeStyles,
  Option,
  useId,
} from "@fluentui/react-components";
import type { DropdownProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "20px",
    maxWidth: "400px",
    "> div": {
      display: "grid",
      gridTemplateRows: "repeat(1fr)",
      justifyItems: "start",
      gap: "2px",
    },
  },
});

export const Size = (props: Partial<DropdownProps>) => {
  const comboId = useId("combobox");
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div>
        <h3>Small</h3>
        <label id={`${comboId}-small`}>Best pet</label>
        <Dropdown
          aria-labelledby={`${comboId}-small`}
          placeholder="Select an animal"
          size="small"
          {...props}
        >
          <Option>Cat</Option>
          <Option>Dog</Option>
          <Option>Bird</Option>
        </Dropdown>
      </div>

      <div>
        <h3>Medium</h3>
        <label htmlFor={`${comboId}-med`}>Best pet</label>
        <Dropdown
          aria-labelledby={`${comboId}-med`}
          placeholder="Select an animal"
          size="medium"
          {...props}
        >
          <Option>Cat</Option>
          <Option>Dog</Option>
          <Option>Bird</Option>
        </Dropdown>
      </div>

      <div>
        <h3>Large</h3>
        <label htmlFor={`${comboId}-large`}>Best pet</label>
        <Dropdown
          aria-labelledby={`${comboId}-large`}
          placeholder="Select an animal"
          size="large"
          {...props}
        >
          <Option>Cat</Option>
          <Option>Dog</Option>
          <Option>Bird</Option>
        </Dropdown>
      </div>
    </div>
  );
};
```

### Disabled

```jsx
import * as React from "react";
import {
  Dropdown,
  makeStyles,
  Option,
  useId,
} from "@fluentui/react-components";
import type { DropdownProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "2px",
    maxWidth: "400px",
  },
});

export const Disabled = (props: Partial<DropdownProps>) => {
  const comboId = useId("combo-disabled");
  const options = ["Cat", "Dog", "Ferret", "Fish", "Hamster", "Snake"];
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <label id={comboId}>Best pet</label>
      <Dropdown
        aria-labelledby={comboId}
        disabled
        placeholder="Select an animal"
        {...props}
      >
        {options.map((option) => (
          <Option key={option}>{option}</Option>
        ))}
      </Dropdown>
    </div>
  );
};
```

### Truncated Value

The Dropdown button slot can be customized to render child JSX, which can be used to truncate the selected value text. Dropdown options can also be customized to overflow in various ways, e.g. by allowing long words to break and wrap.

```jsx
import * as React from "react";
import {
  Dropdown,
  makeStyles,
  Option,
  useId,
} from "@fluentui/react-components";
import type { DropdownProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "2px",
    maxWidth: "200px",
  },
  listbox: {
    maxHeight: "200px",
  },
  // these styles wrap the value text within the dropdown button and cause it to truncate
  truncatedText: {
    overflowX: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  // these styles allow option text to break and wrap on long words, e.g. emails
  optionText: {
    overflow: "hidden",
    overflowWrap: "break-word",
  },
});

export const TruncatedValue = (props: Partial<DropdownProps>) => {
  const dropdownId = useId("dropdown");
  const options = [
    "Cat",
    "Caterpillar",
    "Corgi",
    "Chupacabra",
    "Dog",
    "Ferret",
    "Fish",
    "Fox",
    "Hamster",
    "Snake",
    "SuperLongName_123456789_SomeMoreStuffToMakeItLonger@fluentui.dev",
    "Screaming hairy armadillo (Chaetophractus vellerosus)",
  ];

  const styles = useStyles();

  const placeholder = "Select an animal";

  // show truncated option by default
  const defaultValue = options[11];
  const [value, setValue] = React.useState(defaultValue);

  return (
    <div className={styles.root}>
      <label id={dropdownId}>Best pet</label>
      <Dropdown
        aria-labelledby={dropdownId}
        listbox={{ className: styles.listbox }}
        button={<span className={styles.truncatedText}>{value}</span>}
        onOptionSelect={(e, data) => setValue(data.optionText ?? placeholder)}
        defaultSelectedOptions={[defaultValue]}
        defaultValue={defaultValue}
        {...props}
      >
        {options.map((option) => (
          <Option key={option} text={option} disabled={option === "Ferret"}>
            <span className={styles.optionText}>{option}</span>
          </Option>
        ))}
      </Dropdown>
    </div>
  );
};
```

### Active Option Change

OnActiveOptionChange notifies the user when the active option in the Dropdown was changed by keyboard. To react on mouse hover events, use onMouseEnter on the invididual options.

```jsx
import * as React from "react";
import {
  Dropdown,
  makeStyles,
  Option,
  useId,
  Persona,
} from "@fluentui/react-components";
import type { DropdownProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "2px",
    maxWidth: "400px",
  },
});

export const ActiveOptionChange = (props: Partial<DropdownProps>) => {
  const dropdownId = useId("dropdown");
  const styles = useStyles();
  const [activeOptionText, setActiveOptionText] = React.useState("");

  const onActiveOptionChange = React.useCallback(
    (_, data) => {
      setActiveOptionText(data?.nextOption?.text);
    },
    [setActiveOptionText]
  );

  const onMouseEnter = React.useCallback(
    (e) => {
      setActiveOptionText(`${e.target.textContent} (Mouse enter)`);
    },
    [setActiveOptionText]
  );

  return (
    <div className={styles.root}>
      {activeOptionText}
      <label id={dropdownId}>Schedule a meeting</label>
      <Dropdown
        aria-labelledby={dropdownId}
        onActiveOptionChange={onActiveOptionChange}
        {...props}
      >
        <Option text="Katri Athokas" onMouseEnter={onMouseEnter}>
          <Persona
            avatar={{ color: "colorful", "aria-hidden": true }}
            name="Katri Athokas"
            presence={{
              status: "available",
            }}
            secondaryText="Available"
          />
        </Option>
        <Option text="Elvia Atkins" onMouseEnter={onMouseEnter}>
          <Persona
            avatar={{ color: "colorful", "aria-hidden": true }}
            name="Elvia Atkins"
            presence={{
              status: "busy",
            }}
            secondaryText="Busy"
          />
        </Option>
        <Option text="Cameron Evans" onMouseEnter={onMouseEnter}>
          <Persona
            avatar={{ color: "colorful", "aria-hidden": true }}
            name="Cameron Evans"
            presence={{
              status: "away",
            }}
            secondaryText="Away"
          />
        </Option>
        <Option text="Wanda Howard" onMouseEnter={onMouseEnter}>
          <Persona
            avatar={{ color: "colorful", "aria-hidden": true }}
            name="Wanda Howard"
            presence={{
              status: "out-of-office",
            }}
            secondaryText="Out of office"
          />
        </Option>
      </Dropdown>
    </div>
  );
};
```

### Controlling Open And Close

The opening and close of the `Dropdown` can be controlled with your own state. The `onOpenChange` callback will provide the hints for the state and triggers based on the appropriate event.

_When controlling the open state of the `Dropdown`, extra effort is required to ensure that interactions are_ _still appropriate and that keyboard accessibility does not degrade._

```jsx
import * as React from "react";
import type { CheckboxProps, DropdownProps } from "@fluentui/react-components";
import {
  Checkbox,
  Dropdown,
  makeStyles,
  Option,
  useId,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "2px",
    maxWidth: "400px",
  },
});

export const ControllingOpenAndClose = () => {
  const styles = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpenChange: DropdownProps["onOpenChange"] = (e, data) =>
    setOpen(data.open);
  const onChange: CheckboxProps["onChange"] = (e, data) =>
    setOpen(!!data.checked);

  const dropdownId = useId("dropdown");
  const options = [
    "Cat",
    "Caterpillar",
    "Corgi",
    "Chupacabra",
    "Dog",
    "Ferret",
    "Fish",
    "Fox",
    "Hamster",
    "Snake",
  ];

  return (
    <div className={styles.root}>
      <Checkbox
        value="open"
        name="state"
        label="open"
        checked={open}
        onChange={onChange}
      />
      <label id={dropdownId}>Best pet</label>
      <Dropdown
        aria-labelledby={dropdownId}
        placeholder="Select an animal"
        open={open}
        onOpenChange={handleOpenChange}
      >
        {options.map((option) => (
          <Option key={option} disabled={option === "Ferret"}>
            {option}
          </Option>
        ))}
      </Dropdown>
    </div>
  );
};
```