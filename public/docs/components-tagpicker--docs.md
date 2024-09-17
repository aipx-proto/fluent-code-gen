# TagPicker

```jsx
import * as React from "react";
import {
  TagPicker,
  TagPickerList,
  TagPickerInput,
  TagPickerControl,
  TagPickerProps,
  TagPickerOption,
  TagPickerGroup,
} from "@fluentui/react-components";
import { Tag, Avatar, Field } from "@fluentui/react-components";

const options = [
  "John Doe",
  "Jane Doe",
  "Max Mustermann",
  "Erika Mustermann",
  "Pierre Dupont",
  "Amelie Dupont",
  "Mario Rossi",
  "Maria Rossi",
];

export const Default = () => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const onOptionSelect: TagPickerProps["onOptionSelect"] = (e, data) => {
    setSelectedOptions(data.selectedOptions);
  };
  const tagPickerOptions = options.filter(
    (option) => !selectedOptions.includes(option)
  );

  return (
    <Field label="Select Employees" style={{ maxWidth: 400 }}>
      <TagPicker
        onOptionSelect={onOptionSelect}
        selectedOptions={selectedOptions}
      >
        <TagPickerControl>
          <TagPickerGroup aria-label="Selected Employees">
            {selectedOptions.map((option) => (
              <Tag
                key={option}
                shape="rounded"
                media={<Avatar aria-hidden name={option} color="colorful" />}
                value={option}
              >
                {option}
              </Tag>
            ))}
          </TagPickerGroup>
          <TagPickerInput aria-label="Select Employees" />
        </TagPickerControl>
        <TagPickerList>
          {tagPickerOptions.length > 0
            ? tagPickerOptions.map((option) => (
                <TagPickerOption
                  secondaryContent="Microsoft FTE"
                  media={
                    <Avatar
                      shape="square"
                      aria-hidden
                      name={option}
                      color="colorful"
                    />
                  }
                  value={option}
                  key={option}
                >
                  {option}
                </TagPickerOption>
              ))
            : "No options available"}
        </TagPickerList>
      </TagPicker>
    </Field>
  );
};
```

### Default

```jsx
import * as React from "react";
import {
  TagPicker,
  TagPickerList,
  TagPickerInput,
  TagPickerControl,
  TagPickerProps,
  TagPickerOption,
  TagPickerGroup,
} from "@fluentui/react-components";
import { Tag, Avatar, Field } from "@fluentui/react-components";

const options = [
  "John Doe",
  "Jane Doe",
  "Max Mustermann",
  "Erika Mustermann",
  "Pierre Dupont",
  "Amelie Dupont",
  "Mario Rossi",
  "Maria Rossi",
];

export const Default = () => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const onOptionSelect: TagPickerProps["onOptionSelect"] = (e, data) => {
    setSelectedOptions(data.selectedOptions);
  };
  const tagPickerOptions = options.filter(
    (option) => !selectedOptions.includes(option)
  );

  return (
    <Field label="Select Employees" style={{ maxWidth: 400 }}>
      <TagPicker
        onOptionSelect={onOptionSelect}
        selectedOptions={selectedOptions}
      >
        <TagPickerControl>
          <TagPickerGroup aria-label="Selected Employees">
            {selectedOptions.map((option) => (
              <Tag
                key={option}
                shape="rounded"
                media={<Avatar aria-hidden name={option} color="colorful" />}
                value={option}
              >
                {option}
              </Tag>
            ))}
          </TagPickerGroup>
          <TagPickerInput aria-label="Select Employees" />
        </TagPickerControl>
        <TagPickerList>
          {tagPickerOptions.length > 0
            ? tagPickerOptions.map((option) => (
                <TagPickerOption
                  secondaryContent="Microsoft FTE"
                  media={
                    <Avatar
                      shape="square"
                      aria-hidden
                      name={option}
                      color="colorful"
                    />
                  }
                  value={option}
                  key={option}
                >
                  {option}
                </TagPickerOption>
              ))
            : "No options available"}
        </TagPickerList>
      </TagPicker>
    </Field>
  );
};
```

### Button

The component `TagPickerButton` renders an "invisible" button that can be used instead of `TagPickerInput` to opt-out of a text field and to provide something similar to a Dropdown behavior.

```jsx
import * as React from "react";
import {
  TagPicker,
  TagPickerList,
  TagPickerButton,
  TagPickerControl,
  TagPickerProps,
  TagPickerOption,
  TagPickerGroup,
} from "@fluentui/react-components";
import { Tag, Avatar, Field } from "@fluentui/react-components";

const options = [
  "John Doe",
  "Jane Doe",
  "Max Mustermann",
  "Erika Mustermann",
  "Pierre Dupont",
  "Amelie Dupont",
  "Mario Rossi",
  "Maria Rossi",
];

export const Button = () => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const onOptionSelect: TagPickerProps["onOptionSelect"] = (e, data) => {
    setSelectedOptions(data.selectedOptions);
  };
  const tagPickerOptions = options.filter(
    (option) => !selectedOptions.includes(option)
  );

  return (
    <Field label="Select Employees" style={{ maxWidth: 400 }}>
      <TagPicker
        onOptionSelect={onOptionSelect}
        selectedOptions={selectedOptions}
      >
        <TagPickerControl>
          <TagPickerGroup aria-label="Selected Employees">
            {selectedOptions.map((option) => (
              <Tag
                key={option}
                shape="rounded"
                media={<Avatar aria-hidden name={option} color="colorful" />}
                value={option}
              >
                {option}
              </Tag>
            ))}
          </TagPickerGroup>
          <TagPickerButton aria-label="Select Employees" />
        </TagPickerControl>

        <TagPickerList>
          {tagPickerOptions.length > 0
            ? tagPickerOptions.map((option) => (
                <TagPickerOption
                  secondaryContent="Microsoft FTE"
                  media={
                    <Avatar
                      shape="square"
                      aria-hidden
                      name={option}
                      color="colorful"
                    />
                  }
                  value={option}
                  key={option}
                >
                  {option}
                </TagPickerOption>
              ))
            : "No options available"}
        </TagPickerList>
      </TagPicker>
    </Field>
  );
};
```

### Filtering

`TagPicker` can take advantage of the provided `useTagPickerFilter` hook to filter the options based on the user-typed string. It can be configured for a custom filter function, custom message, and custom render function.

```jsx
import * as React from "react";
import {
  TagPicker,
  TagPickerList,
  TagPickerInput,
  TagPickerControl,
  TagPickerProps,
  TagPickerOption,
  TagPickerGroup,
  useTagPickerFilter,
} from "@fluentui/react-components";
import { Tag, Avatar, Field } from "@fluentui/react-components";

const options = [
  "John Doe",
  "Jane Doe",
  "Max Mustermann",
  "Erika Mustermann",
  "Pierre Dupont",
  "Amelie Dupont",
  "Mario Rossi",
  "Maria Rossi",
];

export const Filtering = () => {
  const [query, setQuery] = React.useState<string>("");
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const onOptionSelect: TagPickerProps["onOptionSelect"] = (e, data) => {
    if (data.value === "no-matches") {
      return;
    }
    setSelectedOptions(data.selectedOptions);
    setQuery("");
  };

  const children = useTagPickerFilter({
    query,
    options,
    noOptionsElement: (
      <TagPickerOption value="no-matches">
        We couldn't find any matches
      </TagPickerOption>
    ),
    renderOption: (option) => (
      <TagPickerOption
        secondaryContent="Microsoft FTE"
        key={option}
        media={
          <Avatar shape="square" aria-hidden name={option} color="colorful" />
        }
        value={option}
      >
        {option}
      </TagPickerOption>
    ),

    filter: (option) =>
      !selectedOptions.includes(option) &&
      option.toLowerCase().includes(query.toLowerCase()),
  });
  return (
    <Field label="Select Employees" style={{ maxWidth: 400 }}>
      <TagPicker
        onOptionSelect={onOptionSelect}
        selectedOptions={selectedOptions}
      >
        <TagPickerControl>
          <TagPickerGroup aria-label="Selected Employees">
            {selectedOptions.map((option) => (
              <Tag
                key={option}
                shape="rounded"
                media={<Avatar aria-hidden name={option} color="colorful" />}
                value={option}
              >
                {option}
              </Tag>
            ))}
          </TagPickerGroup>
          <TagPickerInput
            aria-label="Select Employees"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </TagPickerControl>

        <TagPickerList>{children}</TagPickerList>
      </TagPicker>
    </Field>
  );
};
```

### Size

A `TagPicker`'s size can be set to `medium` (default), `large` or `extra-large`.

```jsx
import * as React from "react";
import {
  TagPicker,
  TagPickerList,
  TagPickerInput,
  TagPickerControl,
  TagPickerProps,
  TagPickerOption,
  TagPickerGroup,
} from "@fluentui/react-components";
import { Tag, Avatar, Field } from "@fluentui/react-components";

const options = [
  "John Doe",
  "Jane Doe",
  "Max Mustermann",
  "Erika Mustermann",
  "Pierre Dupont",
  "Amelie Dupont",
  "Mario Rossi",
  "Maria Rossi",
];

const Example = ({ size }: Pick<TagPickerProps, "size">) => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([
    options[0],
  ]);
  const onOptionSelect: TagPickerProps["onOptionSelect"] = (e, data) => {
    setSelectedOptions(data.selectedOptions);
  };
  const tagPickerOptions = options.filter(
    (option) => !selectedOptions.includes(option)
  );

  return (
    <Field label="Select Employees" style={{ maxWidth: 400 }}>
      <TagPicker
        size={size}
        onOptionSelect={onOptionSelect}
        selectedOptions={selectedOptions}
      >
        <TagPickerControl>
          <TagPickerGroup aria-label="Selected Employees">
            {selectedOptions.map((option) => (
              <Tag
                key={option}
                shape="rounded"
                media={<Avatar aria-hidden name={option} color="colorful" />}
                value={option}
              >
                {option}
              </Tag>
            ))}
          </TagPickerGroup>
          <TagPickerInput aria-label="Select Employees" />
        </TagPickerControl>
        <TagPickerList>
          {tagPickerOptions.length > 0
            ? tagPickerOptions.map((option) => (
                <TagPickerOption
                  secondaryContent="Microsoft FTE"
                  media={
                    <Avatar
                      shape="square"
                      aria-hidden
                      name={option}
                      color="colorful"
                    />
                  }
                  value={option}
                  key={option}
                >
                  {option}
                </TagPickerOption>
              ))
            : "No options available"}
        </TagPickerList>
      </TagPicker>
    </Field>
  );
};

export const Size = () => (
  <>
    <div>
      <h4>Extra Large</h4>
      <Example size="extra-large" />
    </div>
    <div>
      <h4>Large</h4>
      <Example size="large" />
    </div>
    <div>
      <h4>Medium</h4>
      <Example size="medium" />
    </div>
  </>
);
```

### Appearance

A `TagPicker` can have the following appearance variants:

*   `outline` (default): has a border around all four sides.
*   `underline`: only has a bottom border.
*   `filled-darker`: no border, only a subtle background color difference against a white page. All tags will be by default `outline`.
*   `filled-lighter`: no border, and a white background.

This is equivalent to the Combobox `appearance` property.

```jsx
import * as React from "react";
import {
  TagPicker,
  TagPickerList,
  TagPickerInput,
  TagPickerControl,
  TagPickerProps,
  TagPickerOption,
  TagPickerGroup,
} from "@fluentui/react-components";
import {
  Tag,
  Avatar,
  tokens,
  makeStyles,
  Field,
} from "@fluentui/react-components";

const options = [
  "John Doe",
  "Jane Doe",
  "Max Mustermann",
  "Erika Mustermann",
  "Pierre Dupont",
  "Amelie Dupont",
  "Mario Rossi",
  "Maria Rossi",
];

const Example = ({ appearance }: Pick<TagPickerProps, "appearance">) => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([
    options[0],
  ]);
  const onOptionSelect: TagPickerProps["onOptionSelect"] = (e, data) => {
    setSelectedOptions(data.selectedOptions);
  };
  const tagPickerOptions = options.filter(
    (option) => !selectedOptions.includes(option)
  );

  const labelColor =
    appearance === "filled-lighter" || appearance === "filled-darker"
      ? tokens.colorNeutralForegroundInverted2
      : tokens.colorNeutralForeground1;

  const label = <span style={{ color: labelColor }}>Select Employees</span>;

  return (
    <Field label={label} style={{ maxWidth: 400 }}>
      <TagPicker
        appearance={appearance}
        onOptionSelect={onOptionSelect}
        selectedOptions={selectedOptions}
      >
        <TagPickerControl>
          <TagPickerGroup aria-label="Selected Employees">
            {selectedOptions.map((option) => (
              <Tag
                key={option}
                shape="rounded"
                media={<Avatar aria-hidden name={option} color="colorful" />}
                value={option}
              >
                {option}
              </Tag>
            ))}
          </TagPickerGroup>
          <TagPickerInput aria-label="Select Employees" />
        </TagPickerControl>
        <TagPickerList>
          {tagPickerOptions.length > 0
            ? tagPickerOptions.map((option) => (
                <TagPickerOption
                  secondaryContent="Microsoft FTE"
                  media={
                    <Avatar
                      shape="square"
                      aria-hidden
                      name={option}
                      color="colorful"
                    />
                  }
                  value={option}
                  key={option}
                >
                  {option}
                </TagPickerOption>
              ))
            : "No options available"}
        </TagPickerList>
      </TagPicker>
    </Field>
  );
};

const useStyles = makeStyles({
  darkBG: {
    backgroundColor: tokens.colorNeutralBackgroundInverted,
    color: tokens.colorNeutralForegroundInverted2,
    padding: "20px",
    marginBlock: "10px",
    borderRadius: tokens.borderRadiusMedium,
  },
});

export const Appearance = () => {
  const styles = useStyles();
  return (
    <>
      <div>
        <h1>Outline</h1>
        <Example appearance="outline" />
      </div>
      <div>
        <h1>Underline</h1>
        <Example appearance="underline" />
      </div>
      <div className={styles.darkBG}>
        <h1>Filled Darker</h1>
        <Example appearance="filled-darker" />
      </div>
      <div className={styles.darkBG}>
        <h1>Filled Lighter</h1>
        <Example appearance="filled-lighter" />
      </div>
    </>
  );
};
```

### Disabled

A `TagPicker` can be `disabled`. Disabling `TagPicker` will disable the access to the `TagPickerList`, but it'll still allow modifications to the `selectedOptions`.

> The `Tag` component can also be disabled, in the case where that given tag should not be reachable

```jsx
import * as React from "react";
import {
  TagPicker,
  TagPickerList,
  TagPickerInput,
  TagPickerControl,
  TagPickerProps,
  TagPickerOption,
  TagPickerGroup,
} from "@fluentui/react-components";
import { Tag, Avatar, Field } from "@fluentui/react-components";

const options = [
  "John Doe",
  "Jane Doe",
  "Max Mustermann",
  "Erika Mustermann",
  "Pierre Dupont",
  "Amelie Dupont",
  "Mario Rossi",
  "Maria Rossi",
];

export const Disabled = () => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>(
    options.slice(0, 4)
  );
  const onOptionSelect: TagPickerProps["onOptionSelect"] = (e, data) => {
    setSelectedOptions(data.selectedOptions);
  };
  const tagPickerOptions = options.filter(
    (option) => !selectedOptions.includes(option)
  );

  return (
    <Field label="Select Employees" style={{ maxWidth: 400 }}>
      <TagPicker
        disabled
        onOptionSelect={onOptionSelect}
        selectedOptions={selectedOptions}
      >
        <TagPickerControl>
          <TagPickerGroup aria-label="Selected Employees">
            {selectedOptions.map((option) => (
              <Tag
                key={option}
                shape="rounded"
                media={<Avatar aria-hidden name={option} color="colorful" />}
                value={option}
              >
                {option}
              </Tag>
            ))}
          </TagPickerGroup>
          <TagPickerInput aria-label="Select Employees" />
        </TagPickerControl>
        <TagPickerList>
          {tagPickerOptions.length > 0
            ? tagPickerOptions.map((option) => (
                <TagPickerOption
                  secondaryContent="Microsoft FTE"
                  media={
                    <Avatar
                      shape="square"
                      aria-hidden
                      name={option}
                      color="colorful"
                    />
                  }
                  value={option}
                  key={option}
                >
                  {option}
                </TagPickerOption>
              ))
            : "No options available"}
        </TagPickerList>
      </TagPicker>
    </Field>
  );
};
```

### Expand Icon

`TagPickerControl` provides an `expandIcon` slot for modifying the default `expandIcon` chevron. You can also remove the slot entirely by providing `null` to it.

```jsx
import * as React from "react";
import {
  TagPicker,
  TagPickerList,
  TagPickerInput,
  TagPickerControl,
  TagPickerProps,
  TagPickerOption,
  TagPickerGroup,
} from "@fluentui/react-components";
import { Tag, Avatar, Field } from "@fluentui/react-components";
import { ArrowDownFilled } from "@fluentui/react-icons";

const options = [
  "John Doe",
  "Jane Doe",
  "Max Mustermann",
  "Erika Mustermann",
  "Pierre Dupont",
  "Amelie Dupont",
  "Mario Rossi",
  "Maria Rossi",
];

export const ExpandIcon = () => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([
    options[0],
  ]);
  const onOptionSelect: TagPickerProps["onOptionSelect"] = (event, data) => {
    setSelectedOptions(data.selectedOptions);
  };
  const tagPickerOptions = options.filter(
    (option) => !selectedOptions.includes(option)
  );

  return (
    <Field label="Select Employees" style={{ maxWidth: 400 }}>
      <TagPicker
        onOptionSelect={onOptionSelect}
        selectedOptions={selectedOptions}
      >
        <TagPickerControl expandIcon={<ArrowDownFilled />}>
          <TagPickerGroup aria-label="Selected Employees">
            {selectedOptions.map((option) => (
              <Tag
                key={option}
                shape="rounded"
                media={<Avatar aria-hidden name={option} color="colorful" />}
                value={option}
              >
                {option}
              </Tag>
            ))}
          </TagPickerGroup>
          <TagPickerInput aria-label="Select Employees" />
        </TagPickerControl>
        <TagPickerList>
          {tagPickerOptions.length > 0
            ? tagPickerOptions.map((option) => (
                <TagPickerOption
                  secondaryContent="Microsoft FTE"
                  media={
                    <Avatar
                      shape="square"
                      aria-hidden
                      name={option}
                      color="colorful"
                    />
                  }
                  value={option}
                  key={option}
                >
                  {option}
                </TagPickerOption>
              ))
            : "No options available"}
        </TagPickerList>
      </TagPicker>
    </Field>
  );
};
```

### Secondary Action

`TagPickerControl` provides a `secondaryAction` slot for possible extra functionalities that may be desired. `secondaryAction` slot is `absolute` positioned on the top right corner of the control component together with `expandIcon` slot.

```jsx
import * as React from "react";
import {
  TagPicker,
  TagPickerList,
  TagPickerInput,
  TagPickerControl,
  TagPickerProps,
  TagPickerOption,
  TagPickerGroup,
} from "@fluentui/react-components";
import { Tag, Avatar, Button, Field } from "@fluentui/react-components";

const options = [
  "John Doe",
  "Jane Doe",
  "Max Mustermann",
  "Erika Mustermann",
  "Pierre Dupont",
  "Amelie Dupont",
  "Mario Rossi",
  "Maria Rossi",
];

export const SecondaryAction = () => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([
    options[0],
  ]);
  const onOptionSelect: TagPickerProps["onOptionSelect"] = (event, data) => {
    setSelectedOptions(data.selectedOptions);
  };
  const handleAllClear: React.MouseEventHandler = (event) => {
    setSelectedOptions([]);
  };
  const tagPickerOptions = options.filter(
    (option) => !selectedOptions.includes(option)
  );

  return (
    <Field label="Select Employees" style={{ maxWidth: 400 }}>
      <TagPicker
        onOptionSelect={onOptionSelect}
        selectedOptions={selectedOptions}
      >
        <TagPickerControl
          secondaryAction={
            <Button
              appearance="transparent"
              size="small"
              shape="rounded"
              onClick={handleAllClear}
            >
              All Clear
            </Button>
          }
        >
          <TagPickerGroup aria-label="Selected Employees">
            {selectedOptions.map((option) => (
              <Tag
                key={option}
                shape="rounded"
                media={<Avatar aria-hidden name={option} color="colorful" />}
                value={option}
              >
                {option}
              </Tag>
            ))}
          </TagPickerGroup>
          <TagPickerInput aria-label="Select Employees" />
        </TagPickerControl>
        <TagPickerList>
          {tagPickerOptions.length > 0
            ? tagPickerOptions.map((option) => (
                <TagPickerOption
                  secondaryContent="Microsoft FTE"
                  media={
                    <Avatar
                      shape="square"
                      aria-hidden
                      name={option}
                      color="colorful"
                    />
                  }
                  value={option}
                  key={option}
                >
                  {option}
                </TagPickerOption>
              ))
            : "No options available"}
        </TagPickerList>
      </TagPicker>
    </Field>
  );
};
```

### Grouped

```jsx
import * as React from "react";
import {
  TagPicker,
  TagPickerList,
  TagPickerInput,
  TagPickerControl,
  TagPickerProps,
  TagPickerOption,
  TagPickerGroup,
  TagPickerOptionGroup,
} from "@fluentui/react-components";
import { Tag, Avatar, Field } from "@fluentui/react-components";

const managers = ["John Doe", "Jane Doe", "Max Mustermann", "Erika Mustermann"];
const devs = ["Pierre Dupont", "Amelie Dupont", "Mario Rossi", "Maria Rossi"];

export const Grouped = () => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const onOptionSelect: TagPickerProps["onOptionSelect"] = (e, data) => {
    setSelectedOptions(data.selectedOptions);
  };
  const unSelectedManagers = managers.filter(
    (option) => !selectedOptions.includes(option)
  );
  const unSelectedDevs = devs.filter(
    (option) => !selectedOptions.includes(option)
  );

  return (
    <Field label="Select Employees" style={{ maxWidth: 400 }}>
      <TagPicker
        onOptionSelect={onOptionSelect}
        selectedOptions={selectedOptions}
      >
        <TagPickerControl>
          <TagPickerGroup aria-label="Selected Employees">
            {selectedOptions.map((option) => (
              <Tag
                key={option}
                shape="rounded"
                media={<Avatar aria-hidden name={option} color="colorful" />}
                value={option}
              >
                {option}
              </Tag>
            ))}
          </TagPickerGroup>
          <TagPickerInput aria-label="Select Employees" />
        </TagPickerControl>
        <TagPickerList>
          {unSelectedManagers.length === 0 &&
            unSelectedDevs.length === 0 &&
            "No options available"}
          {unSelectedManagers.length > 0 && (
            <TagPickerOptionGroup label="Managers">
              {unSelectedManagers.map((option) => (
                <TagPickerOption
                  secondaryContent="Microsoft FTE"
                  media={
                    <Avatar
                      shape="square"
                      aria-hidden
                      name={option}
                      color="colorful"
                    />
                  }
                  value={option}
                  key={option}
                >
                  {option}
                </TagPickerOption>
              ))}
            </TagPickerOptionGroup>
          )}

          {unSelectedDevs.length > 0 && (
            <TagPickerOptionGroup label="Devs">
              {unSelectedDevs.map((option) => (
                <TagPickerOption
                  secondaryContent="Microsoft FTE"
                  media={
                    <Avatar
                      shape="square"
                      aria-hidden
                      name={option}
                      color="colorful"
                    />
                  }
                  value={option}
                  key={option}
                >
                  {option}
                </TagPickerOption>
              ))}
            </TagPickerOptionGroup>
          )}
        </TagPickerList>
      </TagPicker>
    </Field>
  );
};
```

### Truncated Text

Text truncation is a common pattern used to handle long text that doesn't fit within the available space. There are all sorts of ways to truncate text, in this example we're show casing two ways to truncate text:

*   Using CSS to truncate text with ellipsis when the element reaches the end of its container.
*   Using fixed width to truncate text with ellipsis when the text is longer than a certain width (50px in this case).

We do not support text truncation out of the box, as it's a complex and opinionated problem. However, you can easily achieve text truncation by using patterns like the ones shown in this example.

```jsx
import * as React from "react";
import {
  TagPicker,
  TagPickerList,
  TagPickerInput,
  TagPickerControl,
  TagPickerProps,
  TagPickerOption,
  TagPickerGroup,
} from "@fluentui/react-components";
import {
  Tag,
  Avatar,
  makeStyles,
  mergeClasses,
  Field,
} from "@fluentui/react-components";

type Option = { value: string; fixedWidth?: boolean };
const options: Option[] = [
  { value: "John Doe" },
  { value: "Jane Doe" },
  { value: "Max Mustermann" },
  { value: "Erika Mustermann" },
  { value: "Pierre Dupont" },
  { value: "Amelie Dupont" },
  { value: "Maria Rossi" },
  {
    value: "This tag has text truncation based on a fixed width of 50px",
    fixedWidth: true,
  },
  {
    value:
      "This tag has text truncation based on its container width. This is a long text that will be truncated when it reaches the end of the container.",
  },
];

const useStyles = makeStyles({
  tagTruncatedPrimaryText: {
    whiteSpace: "nowrap",
    overflowX: "hidden",
    textOverflow: "ellipsis",
  },
  tagPrimaryTextFixedWidth: {
    width: "50px",
  },
  optionContent: {
    whiteSpace: "nowrap",
    overflowX: "hidden",
    textOverflow: "ellipsis",
  },
  optionSecondaryContent: {
    whiteSpace: "nowrap",
  },
});

export const TruncatedText = () => {
  const [selectedOptions, setSelectedOptions] =
    React.useState<Option[]>(options);
  const onOptionSelect: TagPickerProps["onOptionSelect"] = (e, data) => {
    setSelectedOptions(
      data.selectedOptions.map(
        (option) => options.find((o) => o.value === option)!
      )
    );
  };
  const tagPickerOptions = options.filter(
    (option) => !selectedOptions.includes(option)
  );
  const styles = useStyles();

  return (
    <Field label="Select Employees" style={{ maxWidth: 400 }}>
      <TagPicker
        onOptionSelect={onOptionSelect}
        selectedOptions={selectedOptions.map((option) => option.value)}
      >
        <TagPickerControl>
          <TagPickerGroup aria-label="Selected Employees">
            {selectedOptions.map((option) => (
              <Tag
                key={option.value}
                shape="rounded"
                media={
                  <Avatar aria-hidden name={option.value} color="colorful" />
                }
                value={option.value}
                title={option.value}
                primaryText={{
                  className: mergeClasses(
                    styles.tagTruncatedPrimaryText,
                    option.fixedWidth && styles.tagPrimaryTextFixedWidth
                  ),
                }}
              >
                {option.value}
              </Tag>
            ))}
          </TagPickerGroup>
          <TagPickerInput aria-label="Select Employees" />
        </TagPickerControl>
        <TagPickerList>
          {tagPickerOptions.length > 0
            ? tagPickerOptions.map((option) => (
                <TagPickerOption
                  secondaryContent={{
                    children: "Microsoft FTE",
                    className: styles.optionSecondaryContent,
                  }}
                  media={
                    <Avatar
                      shape="square"
                      aria-hidden
                      name={option.value}
                      color="colorful"
                    />
                  }
                  value={option.value}
                  key={option.value}
                  title={option.value}
                  text={option.value}
                >
                  <div className={styles.optionContent}>{option.value}</div>
                </TagPickerOption>
              ))
            : "No options available"}
        </TagPickerList>
      </TagPicker>
    </Field>
  );
};
```

### Single Select

By default, the `TagPicker` allows you to have multiple tags selected . To enable single selection, you can manage the selected options state yourself and pass only one selected option to the `TagPicker` component.

```jsx
import * as React from "react";
import {
  TagPicker,
  TagPickerList,
  TagPickerInput,
  TagPickerControl,
  TagPickerProps,
  TagPickerOption,
  TagPickerGroup,
} from "@fluentui/react-components";
import { Tag, Avatar, Field } from "@fluentui/react-components";

const options = [
  "John Doe",
  "Jane Doe",
  "Max Mustermann",
  "Erika Mustermann",
  "Pierre Dupont",
  "Amelie Dupont",
  "Mario Rossi",
  "Maria Rossi",
];

export const SingleSelect = () => {
  const [selectedOption, setSelectedOption] = React.useState<
    string | undefined
  >();
  const selectedOptions = React.useMemo(
    () => (selectedOption ? [selectedOption] : []),
    [selectedOption]
  );
  const onOptionSelect: TagPickerProps["onOptionSelect"] = (e, data) => {
    setSelectedOption(selectedOption === data.value ? undefined : data.value);
  };

  return (
    <Field label="Select Employees" style={{ maxWidth: 400 }}>
      <TagPicker
        onOptionSelect={onOptionSelect}
        selectedOptions={selectedOptions}
      >
        <TagPickerControl>
          {selectedOption && (
            <TagPickerGroup aria-label="Selected Employees">
              <Tag
                key={selectedOption}
                shape="rounded"
                media={
                  <Avatar aria-hidden name={selectedOption} color="colorful" />
                }
                value={selectedOption}
              >
                {selectedOption}
              </Tag>
            </TagPickerGroup>
          )}

          <TagPickerInput aria-label="Select Employees" />
        </TagPickerControl>
        <TagPickerList>
          {options
            .filter((option) => selectedOption !== option)
            .map((option) => (
              <TagPickerOption
                secondaryContent="Microsoft FTE"
                media={
                  <Avatar
                    shape="square"
                    aria-hidden
                    name={option}
                    color="colorful"
                  />
                }
                value={option}
                key={option}
              >
                {option}
              </TagPickerOption>
            ))}
        </TagPickerList>
      </TagPicker>
    </Field>
  );
};
```

### No Popover

You can use the `TagPicker` without the popover with the list of options by providing the `noPopover` property. This is useful when you want to allow users to input their own tags. All you have to do is control the `TagPickerInput` value and handle the `onKeyDown` event to add the tag to the `TagPicker` when the user presses the Enter key.

```jsx
import * as React from "react";
import {
  TagPicker,
  TagPickerInput,
  TagPickerControl,
  TagPickerProps,
  TagPickerGroup,
} from "@fluentui/react-components";
import { Tag, Avatar, Field } from "@fluentui/react-components";

export const NoPopover = () => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState("");

  const onOptionSelect: TagPickerProps["onOptionSelect"] = (_, data) => {
    setSelectedOptions(data.selectedOptions);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && inputValue) {
      setInputValue("");
      setSelectedOptions((curr) =>
        curr.includes(inputValue) ? curr : [...curr, inputValue]
      );
    }
  };

  return (
    <Field label="Add Employees" style={{ maxWidth: 400 }}>
      <TagPicker
        noPopover
        onOptionSelect={onOptionSelect}
        selectedOptions={selectedOptions}
      >
        <TagPickerControl>
          <TagPickerGroup aria-label="Selected Employees">
            {selectedOptions.map((option, index) => (
              <Tag
                key={index}
                shape="rounded"
                media={<Avatar aria-hidden name={option} color="colorful" />}
                value={option}
              >
                {option}
              </Tag>
            ))}
          </TagPickerGroup>
          <TagPickerInput
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            aria-label="Add Employees"
          />
        </TagPickerControl>
      </TagPicker>
    </Field>
  );
};
```