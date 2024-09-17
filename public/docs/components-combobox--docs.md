# Combobox

```jsx
import * as React from "react";
import {
  Combobox,
  makeStyles,
  Option,
  useId,
} from "@fluentui/react-components";
import type { ComboboxProps } from "@fluentui/react-components";

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

export const Default = (props: Partial<ComboboxProps>) => {
  const comboId = useId("combo-default");
  const options = ["Cat", "Dog", "Ferret", "Fish", "Hamster", "Snake"];
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <label id={comboId}>Best pet</label>
      <Combobox
        aria-labelledby={comboId}
        placeholder="Select an animal"
        {...props}
      >
        {options.map((option) => (
          <Option key={option} disabled={option === "Ferret"}>
            {option}
          </Option>
        ))}
      </Combobox>
    </div>
  );
};
```

### Default

```jsx
import * as React from "react";
import {
  Combobox,
  makeStyles,
  Option,
  useId,
} from "@fluentui/react-components";
import type { ComboboxProps } from "@fluentui/react-components";

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

export const Default = (props: Partial<ComboboxProps>) => {
  const comboId = useId("combo-default");
  const options = ["Cat", "Dog", "Ferret", "Fish", "Hamster", "Snake"];
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <label id={comboId}>Best pet</label>
      <Combobox
        aria-labelledby={comboId}
        placeholder="Select an animal"
        {...props}
      >
        {options.map((option) => (
          <Option key={option} disabled={option === "Ferret"}>
            {option}
          </Option>
        ))}
      </Combobox>
    </div>
  );
};
```

### Complex Options

Options are defined as JSX children, and can include nested elements or other components. When this is the case, the Option's `text` prop should be the plain text version of the option, and is used as the Combobox value when the option is selected. Options should never contain interactive elements, such as buttons or links.

```jsx
import * as React from "react";
import {
  Combobox,
  makeStyles,
  Option,
  useId,
  Persona,
} from "@fluentui/react-components";
import type { ComboboxProps } from "@fluentui/react-components";

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

export const ComplexOptions = (props: Partial<ComboboxProps>) => {
  const comboId = useId("combo-default");
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <label id={comboId}>Schedule a meeting</label>
      <Combobox aria-labelledby={comboId} {...props}>
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
      </Combobox>
    </div>
  );
};
```

### Custom Options

Options and OptionGroups can be extended and customized.Here `OptionGroup` is wrapped in `CustomOptionGroup`,which adds a custom label style and takes an `options` array prop which is mapped to child Option elements.`Option` is also wrapped in `CustomOption`, which adds a custom check icon.

```jsx
import * as React from "react";
import {
  Combobox,
  makeStyles,
  Option,
  OptionGroup,
  useId,
} from "@fluentui/react-components";
import type {
  ComboboxProps,
  OptionProps,
  OptionGroupProps,
} from "@fluentui/react-components";
import { CheckmarkCircle20Filled } from "@fluentui/react-icons";

const CustomOption = (props: OptionProps) => {
  return <Option {...props} checkIcon={<CheckmarkCircle20Filled />} />;
};

const CustomOptionGroup = (
  props: Partial<OptionGroupProps> & { options: string[] }
) => {
  const { label, options, ...optionGroupProps } = props;
  const labelSlot = typeof label === "object" ? label : { children: label };

  return (
    <OptionGroup
      label={{ style: { fontStyle: "italic" }, ...labelSlot }}
      {...optionGroupProps}
    >
      {options.map((option) => (
        <CustomOption key={option} disabled={option === "Ferret"}>
          {option}
        </CustomOption>
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
});

export const CustomOptions = (props: Partial<ComboboxProps>) => {
  const comboId = useId("combo-default");
  const land = ["Cat", "Dog", "Ferret", "Hamster"];
  const water = ["Fish", "Jellyfish", "Octopus", "Seal"];
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <label id={comboId}>Best pet</label>
      <Combobox
        aria-labelledby={comboId}
        placeholder="Select an animal"
        {...props}
      >
        <CustomOptionGroup label="Land" options={land} />
        <CustomOptionGroup label="Sea" options={water} />
      </Combobox>
    </div>
  );
};
```

### Controlled

A Combobox may have controlled or controlled selection and value. When the selection is controlled or a default selection is provided, a controlled value or default value must also be defined. Otherwise, the Combobox will not be able to display a value before the Options are rendered.

```jsx
import * as React from "react";
import {
  Combobox,
  makeStyles,
  Option,
  useId,
  Persona,
} from "@fluentui/react-components";
import type { ComboboxProps } from "@fluentui/react-components";

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

export const Controlled = (props: Partial<ComboboxProps>) => {
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

  const onInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };

  return (
    <div className={styles.root}>
      <div className={styles.field}>
        <label htmlFor={`${comboId}-default`}>
          Schedule a meeting (default selection)
        </label>
        <Combobox
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
        </Combobox>
      </div>

      <div className={styles.field}>
        <label htmlFor={`${comboId}-controlled`}>
          Schedule a meeting (controlled selection)
        </label>
        <Combobox
          id={`${comboId}-controlled`}
          {...props}
          value={value}
          selectedOptions={selectedOptions}
          onInput={onInput}
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
        </Combobox>
      </div>
    </div>
  );
};
```

### Clearable

A Combobox can be clearable and let users remove their selection. Note: this is not supported in multiselect mode yet.

```jsx
import * as React from "react";
import {
  Combobox,
  Label,
  makeStyles,
  Option,
  useId,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateRows: "auto auto",
    justifyItems: "start",
    gap: "2px",
  },
});

export const Clearable = () => {
  const comboboxId = useId("combobox");
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Label id={comboboxId}>Pick a color</Label>
      <Combobox
        clearable
        aria-labelledby={comboboxId}
        placeholder="Select a color"
      >
        <Option>Red</Option>
        <Option>Green</Option>
        <Option>Blue</Option>
      </Combobox>
    </div>
  );
};
```

### Filtering

We provide "useComboboxFilter()" hook to filter the options based on the user-typed string. It can be configured for a custom filter function, custom message, and custom render function.

We recommend using filtering when creating a freeform Combobox.

```jsx
import * as React from "react";
import {
  Combobox,
  ComboboxProps,
  makeStyles,
  useComboboxFilter,
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

const options = [
  { children: "Alligator", value: "Alligator" },
  { children: "Bee", value: "Bee" },
  { children: "Bird", value: "Bird" },
  { children: "Cheetah", disabled: true, value: "Cheetah" },
  { children: "Dog", value: "Dog" },
  { children: "Dolphin", value: "Dolphin" },
  { children: "Ferret", value: "Ferret" },
  { children: "Firefly", value: "Firefly" },
  { children: "Fish", value: "Fish" },
  { children: "Goat", value: "Goat" },
  { children: "Horse", value: "Horse" },
  { children: "Lion", value: "Lion" },
];

export const Filtering = () => {
  const comboId = useId();
  const styles = useStyles();

  const [query, setQuery] = React.useState<string>("");
  const children = useComboboxFilter(query, options, {
    noOptionsMessage: "No animals match your search.",
  });
  const onOptionSelect: ComboboxProps["onOptionSelect"] = (e, data) => {
    setQuery(data.optionText ?? "");
  };

  return (
    <div className={styles.root}>
      <label id={comboId}>Best pet</label>
      <Combobox
        onOptionSelect={onOptionSelect}
        aria-labelledby={comboId}
        placeholder="Select an animal"
        onChange={(ev) => setQuery(ev.target.value)}
        value={query}
      >
        {children}
      </Combobox>
    </div>
  );
};
```

### Freeform

Combobox supports the `freeform` prop, which allows freeform text input. Implementing filtering together with `freeform` is generally recommended.We also recommend displaying a custom freeform string if the user input doesn't match an existing option.

```jsx
import * as React from "react";
import {
  Combobox,
  makeStyles,
  Option,
  useId,
} from "@fluentui/react-components";
import type { ComboboxProps } from "@fluentui/react-components";

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

export const Freeform = (props: Partial<ComboboxProps>) => {
  const comboId = useId("combo-default");
  const options = [
    "Cat",
    "Caterpillar",
    "Catfish",
    "Cheetah",
    "Chicken",
    "Cockatiel",
    "Cow",
    "Dog",
    "Dolphin",
    "Ferret",
    "Firefly",
    "Fish",
    "Fox",
    "Fox Terrier",
    "Frog",
    "Hamster",
    "Snake",
  ];

  const [matchingOptions, setMatchingOptions] = React.useState([...options]);
  const [customSearch, setCustomSearch] = React.useState<string | undefined>();
  const styles = useStyles();

  const onChange: ComboboxProps["onChange"] = (event) => {
    const value = event.target.value.trim();
    const matches = options.filter(
      (option) => option.toLowerCase().indexOf(value.toLowerCase()) === 0
    );
    setMatchingOptions(matches);
    if (value.length && matches.length < 1) {
      setCustomSearch(value);
    } else {
      setCustomSearch(undefined);
    }
  };

  const onOptionSelect: ComboboxProps["onOptionSelect"] = (event, data) => {
    const matchingOption = data.optionText && options.includes(data.optionText);
    if (matchingOption) {
      setCustomSearch(undefined);
    } else {
      setCustomSearch(data.optionText);
    }
  };

  return (
    <div className={styles.root}>
      <label id={comboId}>Find pets</label>
      <Combobox
        aria-labelledby={comboId}
        freeform
        placeholder="Select an animal"
        onChange={onChange}
        onOptionSelect={onOptionSelect}
        {...props}
      >
        {customSearch ? (
          <Option key="freeform" text={customSearch}>
            Search for "{customSearch}"
          </Option>
        ) : null}
        {matchingOptions.map((option) => (
          <Option key={option}>{option}</Option>
        ))}
      </Combobox>
    </div>
  );
};
```

### Multiselect

Combobox supports multiselect, and options within a multiselect will display checkbox icons.

```jsx
import * as React from "react";
import {
  Combobox,
  makeStyles,
  Option,
  typographyStyles,
  useId,
} from "@fluentui/react-components";
import type { ComboboxProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "2px",
    maxWidth: "400px",
  },
  description: {
    ...typographyStyles.caption1,
  },
});

export const Multiselect = (props: Partial<ComboboxProps>) => {
  const comboId = useId("combo-multi");
  const selectedListId = `${comboId}-selection`;
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const options = ["Cat", "Dog", "Ferret", "Fish", "Hamster", "Snake"];
  const styles = useStyles();

  const onSelect: ComboboxProps["onOptionSelect"] = (event, data) => {
    setSelectedOptions(data.selectedOptions);
  };

  const labelledBy =
    selectedOptions.length > 0 ? `${comboId} ${selectedListId}` : comboId;

  return (
    <div className={styles.root}>
      <label id={comboId}>Best pets</label>
      <Combobox
        aria-labelledby={labelledBy}
        multiselect={true}
        placeholder="Select one or more animals"
        onOptionSelect={onSelect}
        {...props}
      >
        {options.map((option) => (
          <Option key={option} disabled={option === "Ferret"}>
            {option}
          </Option>
        ))}
      </Combobox>
      {selectedOptions.length ? (
        <span id={selectedListId} className={styles.description}>
          Chosen pets: {selectedOptions.join(", ")}
        </span>
      ) : null}
    </div>
  );
};
```

### Multiselect With Tags

Combobox can display multiselect values in custom tags. This example uses a controlled selection so the tags can be used to remove selected options.

```jsx
import * as React from "react";
import {
  Button,
  Combobox,
  makeStyles,
  Option,
  tokens,
  useId,
} from "@fluentui/react-components";
import type { ComboboxProps } from "@fluentui/react-components";
import { Dismiss12Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "2px",
    maxWidth: "400px",
  },
  tagsList: {
    listStyleType: "none",
    marginBottom: tokens.spacingVerticalXXS,
    marginTop: 0,
    paddingLeft: 0,
    display: "flex",
    gridGap: tokens.spacingHorizontalXXS,
  },
});

export const MultiselectWithTags = (props: Partial<ComboboxProps>) => {
  // generate ids for handling labelling
  const comboId = useId("combo-multi");
  const selectedListId = `${comboId}-selection`;

  // refs for managing focus when removing tags
  const selectedListRef = React.useRef<HTMLUListElement>(null);
  const comboboxInputRef = React.useRef<HTMLInputElement>(null);

  const options = ["Cat", "Dog", "Ferret", "Fish", "Hamster", "Snake"];
  const styles = useStyles();

  // Handle selectedOptions both when an option is selected or deselected in the Combobox,
  // and when an option is removed by clicking on a tag
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

  const onSelect: ComboboxProps["onOptionSelect"] = (event, data) => {
    setSelectedOptions(data.selectedOptions);
  };

  const onTagClick = (option: string, index: number) => {
    // remove selected option
    setSelectedOptions(selectedOptions.filter((o) => o !== option));

    // focus previous or next option, defaulting to focusing back to the combo input
    const indexToFocus = index === 0 ? 1 : index - 1;
    const optionToFocus = selectedListRef.current?.querySelector(
      `#${comboId}-remove-${indexToFocus}`
    );
    if (optionToFocus) {
      (optionToFocus as HTMLButtonElement).focus();
    } else {
      comboboxInputRef.current?.focus();
    }
  };

  const labelledBy =
    selectedOptions.length > 0 ? `${comboId} ${selectedListId}` : comboId;

  return (
    <div className={styles.root}>
      <label id={comboId}>Best pets</label>
      {selectedOptions.length ? (
        <ul
          id={selectedListId}
          className={styles.tagsList}
          ref={selectedListRef}
        >
          {/* The "Remove" span is used for naming the buttons without affecting the Combobox name */}
          <span id={`${comboId}-remove`} hidden>
            Remove
          </span>
          {selectedOptions.map((option, i) => (
            <li key={option}>
              <Button
                size="small"
                shape="circular"
                appearance="primary"
                icon={<Dismiss12Regular />}
                iconPosition="after"
                onClick={() => onTagClick(option, i)}
                id={`${comboId}-remove-${i}`}
                aria-labelledby={`${comboId}-remove ${comboId}-remove-${i}`}
              >
                {option}
              </Button>
            </li>
          ))}
        </ul>
      ) : null}
      <Combobox
        aria-labelledby={labelledBy}
        multiselect={true}
        placeholder="Select one or more animals"
        selectedOptions={selectedOptions}
        onOptionSelect={onSelect}
        ref={comboboxInputRef}
        {...props}
      >
        {options.map((option) => (
          <Option key={option}>{option}</Option>
        ))}
      </Combobox>
    </div>
  );
};
```

### Multiselect With Value String

Multiselect Combobox supports using a controlled value todisplay selected options when not in focus, similar to v8 behavior.We recommend using tags rather than the value string when possible,since they have better UX and accessibility.

```jsx
import * as React from "react";
import {
  Combobox,
  makeStyles,
  Option,
  useId,
} from "@fluentui/react-components";
import type { ComboboxProps } from "@fluentui/react-components";

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

export const MultiselectWithValueString = (props: Partial<ComboboxProps>) => {
  const comboId = useId("combo-multi");
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const [value, setValue] = React.useState("");
  const options = ["Cat", "Dog", "Ferret", "Fish", "Hamster", "Snake"];
  const styles = useStyles();

  const onSelect: ComboboxProps["onOptionSelect"] = (event, data) => {
    // update selectedOptions
    setSelectedOptions(data.selectedOptions);

    // reset value to an empty string after selection
    setValue("");
  };

  // clear value on focus
  const onFocus = () => {
    setValue("");
  };

  // update value to selected options on blur
  const onBlur = () => {
    setValue(selectedOptions.join(", "));
  };

  // update value on input change
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <label id={comboId}>Best pets</label>
      <Combobox
        aria-labelledby={comboId}
        multiselect={true}
        placeholder="Select one or more animals"
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onOptionSelect={onSelect}
        {...props}
      >
        {options.map((option) => (
          <Option key={option}>{option}</Option>
        ))}
      </Combobox>
    </div>
  );
};
```

### Grouped

Combobox options can be semantically grouped with the `OptionGroup` element, with an optional label.

```jsx
import * as React from "react";
import {
  Combobox,
  makeStyles,
  Option,
  OptionGroup,
  useId,
} from "@fluentui/react-components";
import type { ComboboxProps } from "@fluentui/react-components";

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

export const Grouped = (props: Partial<ComboboxProps>) => {
  const comboId = useId("combo-grouped");
  const land = ["Cat", "Dog", "Ferret", "Hamster"];
  const water = ["Fish", "Jellyfish", "Octopus", "Seal"];
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <label id={comboId}>Best pet</label>
      <Combobox
        aria-labelledby={comboId}
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
      </Combobox>
    </div>
  );
};
```

### Appearance

A Combobox can have the following `appearance` variants:

*   `outline` (default): has a border around all four sides.
*   `underline`: only has a bottom border.
*   `filled-darker`: no border, only a subtle background color difference against a white page.
*   `filled-lighter`: no border, and a white background.

```jsx
import * as React from "react";
import {
  Combobox,
  makeStyles,
  Option,
  tokens,
  useId,
} from "@fluentui/react-components";
import type { ComboboxProps } from "@fluentui/react-components";

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
  },
  filledDarker: {
    backgroundColor: tokens.colorNeutralBackgroundInverted,
    "> label": {
      color: tokens.colorNeutralForegroundInverted2,
    },
  },
});

export const Appearance = (props: Partial<ComboboxProps>) => {
  const comboId = useId("combobox");
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div>
        <label id={`${comboId}-outline`}>Outline</label>
        <Combobox
          aria-labelledby={`${comboId}-outline`}
          placeholder="Select a color"
          appearance="outline"
          {...props}
        >
          <Option>Red</Option>
          <Option>Green</Option>
          <Option>Blue</Option>
        </Combobox>
      </div>

      <div>
        <label id={`${comboId}-underline`}>Underline</label>
        <Combobox
          aria-labelledby={`${comboId}-underline`}
          placeholder="Select a color"
          appearance="underline"
          {...props}
        >
          <Option>Red</Option>
          <Option>Green</Option>
          <Option>Blue</Option>
        </Combobox>
      </div>

      <div className={styles.filledDarker}>
        <label id={`${comboId}-filledDarker`}>Filled Darker</label>
        <Combobox
          aria-labelledby={`${comboId}-filledDarker`}
          placeholder="Select a color"
          appearance="filled-darker"
          {...props}
        >
          <Option>Red</Option>
          <Option>Green</Option>
          <Option>Blue</Option>
        </Combobox>
      </div>

      <div className={styles.filledLighter}>
        <label id={`${comboId}-filledLighter`}>Filled Lighter</label>
        <Combobox
          aria-labelledby={`${comboId}-filledLighter`}
          placeholder="Select a color"
          appearance="filled-lighter"
          {...props}
        >
          <Option>Red</Option>
          <Option>Green</Option>
          <Option>Blue</Option>
        </Combobox>
      </div>
    </div>
  );
};
```

### Size

A Combobox's size can be set to `small`, `medium` (default), or `large`.

```jsx
import * as React from "react";
import {
  Combobox,
  makeStyles,
  Option,
  useId,
} from "@fluentui/react-components";
import type { ComboboxProps } from "@fluentui/react-components";

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

export const Size = (props: Partial<ComboboxProps>) => {
  const comboId = useId("combobox");
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div>
        <label id={`${comboId}-small`}>Small</label>
        <Combobox
          aria-labelledby={`${comboId}-small`}
          placeholder="Select a color"
          size="small"
          {...props}
        >
          <Option>Red</Option>
          <Option>Green</Option>
          <Option>Blue</Option>
        </Combobox>
      </div>

      <div>
        <label htmlFor={`${comboId}-med`}>Medium</label>
        <Combobox
          aria-labelledby={`${comboId}-med`}
          placeholder="Select a color"
          size="medium"
          {...props}
        >
          <Option>Red</Option>
          <Option>Green</Option>
          <Option>Blue</Option>
        </Combobox>
      </div>

      <div>
        <label htmlFor={`${comboId}-large`}>Large</label>
        <Combobox
          aria-labelledby={`${comboId}-large`}
          placeholder="Select a color"
          size="large"
          {...props}
        >
          <Option>Red</Option>
          <Option>Green</Option>
          <Option>Blue</Option>
        </Combobox>
      </div>
    </div>
  );
};
```

### Disabled

```jsx
import * as React from "react";
import {
  Combobox,
  makeStyles,
  Option,
  useId,
} from "@fluentui/react-components";
import type { ComboboxProps } from "@fluentui/react-components";

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

export const Disabled = (props: Partial<ComboboxProps>) => {
  const comboId = useId("combo-disabled");
  const options = ["Cat", "Dog", "Ferret", "Fish", "Hamster", "Snake"];
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <label id={comboId}>Best pet</label>
      <Combobox
        aria-labelledby={comboId}
        disabled
        placeholder="Select an animal"
        {...props}
      >
        {options.map((option) => (
          <Option key={option}>{option}</Option>
        ))}
      </Combobox>
    </div>
  );
};
```

### Virtualizer

A Combobox can use Virtualizer to display a large number of options To manually control the maxHeight of the listbox, refer to the positioning autoSize property

```jsx
import * as React from "react";
import {
  Combobox,
  Option,
  makeStyles,
  useId,
} from "@fluentui/react-components";
import type { ComboboxProps } from "@fluentui/react-components";

import {
  Virtualizer,
  useStaticVirtualizerMeasure,
} from "@fluentui/react-components/unstable";

const useStyles = makeStyles({
  listbox: {
    // maxHeight will be applied only positioning autoSize set.
    maxHeight: "250px",
  },
  option: {
    height: "32px",
  },
});

export const ComboboxVirtualizer = (props: Partial<ComboboxProps>) => {
  const comboId = useId("combobox");

  const itemHeight = 32; //This should match the height of each item in the listbox
  const numberOfItems = 10000;

  const { virtualizerLength, bufferItems, bufferSize, scrollRef } =
    useStaticVirtualizerMeasure({
      defaultItemSize: itemHeight,
      direction: "vertical",
    });

  const styles = useStyles();

  return (
    <div>
      <div>
        <label htmlFor={`${comboId}`}>Medium</label>
        <Combobox
          id={`${comboId}`}
          placeholder="Select a number"
          positioning={{ autoSize: "width" }}
          listbox={{ ref: scrollRef, className: styles.listbox }}
        >
          <Virtualizer
            numItems={numberOfItems}
            virtualizerLength={virtualizerLength}
            bufferItems={bufferItems}
            bufferSize={bufferSize}
            itemSize={itemHeight}
          >
            {(index) => {
              return (
                <Option
                  className={styles.option}
                  aria-posinset={index}
                  aria-setsize={numberOfItems}
                  key={`item-${index}`}
                >
                  {`Item ${index + 1}`}
                </Option>
              );
            }}
          </Virtualizer>
        </Combobox>
      </div>
    </div>
  );
};
```

### Active Option Change

OnActiveOptionChange notifies the user when the active option in the Combobox was changed by keyboard. To react on mouse hover events, use onMouseEnter on the invididual options.

```jsx
import * as React from "react";
import {
  Combobox,
  makeStyles,
  Option,
  useId,
} from "@fluentui/react-components";
import type { ComboboxProps } from "@fluentui/react-components";

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

export const ActiveOptionChange = (props: Partial<ComboboxProps>) => {
  const comboId = useId("combo-active-option-change");
  const options = ["Cat", "Dog", "Ferret", "Fish", "Hamster", "Snake"];
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
      <label id={comboId}>Best pet</label>
      <Combobox
        aria-labelledby={comboId}
        placeholder="Select an animal"
        onActiveOptionChange={onActiveOptionChange}
        {...props}
      >
        {options.map((option) => (
          <Option
            key={option}
            disabled={option === "Ferret"}
            onMouseEnter={onMouseEnter}
          >
            {option}
          </Option>
        ))}
      </Combobox>
    </div>
  );
};
```

### Controlling Open And Close

The opening and close of the `Combobox` can be controlled with your own state. The `onOpenChange` callback will provide the hints for the state and triggers based on the appropriate event.

_When controlling the open state of the `Combobox`, extra effort is required to ensure that interactions are_ _still appropriate and that keyboard accessibility does not degrade._

```jsx
import * as React from "react";
import {
  Checkbox,
  Combobox,
  makeStyles,
  Option,
  useId,
} from "@fluentui/react-components";
import type { CheckboxProps, ComboboxProps } from "@fluentui/react-components";

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

export const ControllingOpenAndClose = (props: Partial<ComboboxProps>) => {
  const comboId = useId("combo-default");
  const options = ["Cat", "Dog", "Ferret", "Fish", "Hamster", "Snake"];
  const styles = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpenChange: ComboboxProps["onOpenChange"] = (e, data) =>
    setOpen(data.open);
  const onChange: CheckboxProps["onChange"] = (e, data) =>
    setOpen(!!data.checked);

  return (
    <div className={styles.root}>
      <Checkbox
        value="open"
        name="state"
        label="open"
        capture="user"
        checked={open}
        onChange={onChange}
      />
      <label id={comboId}>Best pet</label>
      <Combobox
        aria-labelledby={comboId}
        placeholder="Select an animal"
        open={open}
        onOpenChange={handleOpenChange}
        {...props}
      >
        {options.map((option) => (
          <Option key={option} disabled={option === "Ferret"}>
            {option}
          </Option>
        ))}
      </Combobox>
    </div>
  );
};
```