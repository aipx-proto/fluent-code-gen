# SwatchPicker

```jsx
import * as React from "react";
import {
  makeStyles,
  SwatchPicker,
  ColorSwatch,
} from "@fluentui/react-components";
import type { SwatchPickerOnSelectEventHandler } from "@fluentui/react-components";

const useStyles = makeStyles({
  example: {
    width: "100px",
    height: "100px",
    border: "1px solid #ccc",
    margin: "20px 0",
    "@media (forced-colors: active)": {
      forcedColorAdjust: "none",
    },
  },
});

export const Default = () => {
  const [selectedValue, setSelectedValue] = React.useState("00B053");
  const [selectedColor, setSelectedColor] = React.useState("#00B053");
  const handleSelect: SwatchPickerOnSelectEventHandler = (_, data) => {
    setSelectedValue(data.selectedValue);
    setSelectedColor(data.selectedSwatch);
  };

  const styles = useStyles();

  return (
    <>
      <SwatchPicker
        aria-label="SwatchPicker default"
        selectedValue={selectedValue}
        onSelectionChange={handleSelect}
      >
        <ColorSwatch color="#FF1921" value="FF1921" aria-label="red" />
        <ColorSwatch color="#FF7A00" value="FF7A00" aria-label="orange" />
        <ColorSwatch color="#90D057" value="90D057" aria-label="light green" />
        <ColorSwatch color="#00B053" value="00B053" aria-label="green" />
        <ColorSwatch color="#00AFED" value="00AFED" aria-label="light blue" />
        <ColorSwatch color="#006EBD" value="006EBD" aria-label="blue" />
        <ColorSwatch
          disabled
          color="#011F5E"
          value="011F5E"
          aria-label="dark blue"
        />
        <ColorSwatch color="#712F9E" value="712F9E" aria-label="purple" />
      </SwatchPicker>

      <div
        className={styles.example}
        style={{
          backgroundColor: selectedColor,
        }}
      />
    </>
  );
};
```

### Default

```jsx
import * as React from "react";
import {
  makeStyles,
  SwatchPicker,
  ColorSwatch,
} from "@fluentui/react-components";
import type { SwatchPickerOnSelectEventHandler } from "@fluentui/react-components";

const useStyles = makeStyles({
  example: {
    width: "100px",
    height: "100px",
    border: "1px solid #ccc",
    margin: "20px 0",
    "@media (forced-colors: active)": {
      forcedColorAdjust: "none",
    },
  },
});

export const Default = () => {
  const [selectedValue, setSelectedValue] = React.useState("00B053");
  const [selectedColor, setSelectedColor] = React.useState("#00B053");
  const handleSelect: SwatchPickerOnSelectEventHandler = (_, data) => {
    setSelectedValue(data.selectedValue);
    setSelectedColor(data.selectedSwatch);
  };

  const styles = useStyles();

  return (
    <>
      <SwatchPicker
        aria-label="SwatchPicker default"
        selectedValue={selectedValue}
        onSelectionChange={handleSelect}
      >
        <ColorSwatch color="#FF1921" value="FF1921" aria-label="red" />
        <ColorSwatch color="#FF7A00" value="FF7A00" aria-label="orange" />
        <ColorSwatch color="#90D057" value="90D057" aria-label="light green" />
        <ColorSwatch color="#00B053" value="00B053" aria-label="green" />
        <ColorSwatch color="#00AFED" value="00AFED" aria-label="light blue" />
        <ColorSwatch color="#006EBD" value="006EBD" aria-label="blue" />
        <ColorSwatch
          disabled
          color="#011F5E"
          value="011F5E"
          aria-label="dark blue"
        />
        <ColorSwatch color="#712F9E" value="712F9E" aria-label="purple" />
      </SwatchPicker>

      <div
        className={styles.example}
        style={{
          backgroundColor: selectedColor,
        }}
      />
    </>
  );
};
```

### Swatch Picker Size

The `size` prop sets width and height of the Swatch. The default is `medium` which is 28x28px. `extra-small` is 20x20px, `small` is 24x24px, `large` is 32x32px.

```jsx
import * as React from "react";
import {
  makeStyles,
  SwatchPicker,
  ColorSwatch,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  example: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});

const colors = [
  { color: "#FF1921", value: "FF1921", "aria-label": "red" },
  { color: "#FF7A00", value: "FF7A00", "aria-label": "orange" },
  { color: "#90D057", value: "90D057", "aria-label": "light green" },
  { color: "#00B053", value: "00B053", "aria-label": "green" },
  { color: "#00AFED", value: "00AFED", "aria-label": "light blue" },
  { color: "#006EBD", value: "006EBD", "aria-label": "blue" },
  { color: "#011F5E", value: "011F5E", "aria-label": "dark blue" },
  { color: "#712F9E", value: "712F9E", "aria-label": "purple" },
];

export const SwatchPickerSize = () => {
  const styles = useStyles();
  return (
    <div className={styles.example}>
      <h3>Large</h3>
      <SwatchPicker aria-label="SwatchPicker large size" size="large">
        {colors.map((color) => {
          return <ColorSwatch key={color.value} {...color} />;
        })}
      </SwatchPicker>
      <h3>Medium</h3>
      <SwatchPicker aria-label="SwatchPicker medium size">
        {colors.map((color) => {
          return <ColorSwatch key={color.value} {...color} />;
        })}
      </SwatchPicker>
      <h3>Small</h3>
      <SwatchPicker aria-label="SwatchPicker small size" size="small">
        {colors.map((color) => {
          return <ColorSwatch key={color.value} {...color} />;
        })}
      </SwatchPicker>
      <h3>Extra small</h3>
      <SwatchPicker
        aria-label="SwatchPicker extra small size"
        size="extra-small"
      >
        {colors.map((color) => {
          return <ColorSwatch key={color.value} {...color} />;
        })}
      </SwatchPicker>
    </div>
  );
};
```

### Swatch Picker Shape

The `shape` prop sets border-radius of the Swatch. The default is `square`.

```jsx
import * as React from "react";
import {
  makeStyles,
  SwatchPicker,
  ColorSwatch,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  example: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});

const colors = [
  { color: "#FF1921", value: "FF1921", "aria-label": "red" },
  { color: "#FF7A00", value: "FF7A00", "aria-label": "dark orange" },
  { color: "#FFC12E", value: "FFC12E", "aria-label": "orange" },
  { color: "#90D057", value: "90D057", "aria-label": "light green" },
  { color: "#00B053", value: "00B053", "aria-label": "green" },
  { color: "#00AFED", value: "00AFED", "aria-label": "light blue" },
  { color: "#006EBD", value: "006EBD", "aria-label": "blue" },
  { color: "#011F5E", value: "011F5E", "aria-label": "dark blue" },
  { color: "#712F9E", value: "712F9E", "aria-label": "purple" },
];

export const SwatchPickerShape = () => {
  const styles = useStyles();
  return (
    <div className={styles.example}>
      <h3>Square</h3>
      <SwatchPicker aria-label="SwatchPicker square shape">
        {colors.map((color) => (
          <ColorSwatch key={color.value} {...color} />
        ))}
      </SwatchPicker>
      <h3>Circular</h3>
      <SwatchPicker aria-label="SwatchPicker circular shape" shape="circular">
        {colors.map((color) => (
          <ColorSwatch key={color.value} {...color} />
        ))}
      </SwatchPicker>
      <h3>Rounded</h3>
      <SwatchPicker aria-label="SwatchPicker rounded shape" shape="rounded">
        {colors.map((color) => (
          <ColorSwatch key={color.value} {...color} />
        ))}
      </SwatchPicker>
    </div>
  );
};
```

### Swatch Picker Layout

The `layout` prop places items in a `row` or a `grid`.

```jsx
import * as React from "react";
import { makeStyles } from "@fluentui/react-components";
import {
  SwatchPicker,
  ColorSwatch,
  renderSwatchPickerGrid,
} from "@fluentui/react-components";
import type { SwatchPickerOnSelectEventHandler } from "@fluentui/react-components";

const useStyles = makeStyles({
  example: {
    width: "100px",
    height: "100px",
    border: "1px solid #ccc",
    margin: "20px 0",
    "@media (forced-colors: active)": {
      forcedColorAdjust: "none",
    },
  },
});

const colors = [
  { color: "#FF1921", value: "FF1921", "aria-label": "red" },
  { color: "#FF7A00", value: "FF7A00", "aria-label": "orange" },
  { color: "#90D057", value: "90D057", "aria-label": "light green" },
  { color: "#00B053", value: "00B053", "aria-label": "green" },
  { color: "#00AFED", value: "00AFED", "aria-label": "light blue" },
  { color: "#006EBD", value: "006EBD", "aria-label": "blue" },
  { color: "#011F5E", value: "011F5E", "aria-label": "dark blue" },
  { color: "#712F9E", value: "712F9E", "aria-label": "purple" },
  { color: "#FF0099", value: "FF0099", "aria-label": "pink" },
];

export const SwatchPickerLayout = () => {
  const [selectedValue, setSelectedValue] = React.useState("00B053");
  const [selectedSwatch, setSelectedSwatch] = React.useState("#00B053");
  const handleSelect: SwatchPickerOnSelectEventHandler = (_, data) => {
    setSelectedValue(data.selectedValue);
    setSelectedSwatch(data.selectedSwatch);
  };

  const styles = useStyles();
  return (
    <>
      <h3>Row</h3>
      <SwatchPicker
        aria-label="SwatchPicker row layout"
        selectedValue={selectedValue}
        onSelectionChange={handleSelect}
      >
        {colors.map((color) => {
          return <ColorSwatch key={color.value} {...color} />;
        })}
      </SwatchPicker>
      <h3>Grid</h3>
      <SwatchPicker
        layout="grid"
        aria-label="SwatchPicker grid layout"
        selectedValue={selectedValue}
        onSelectionChange={handleSelect}
      >
        {renderSwatchPickerGrid({
          items: colors,
          columnCount: 3,
        })}
      </SwatchPicker>
      <div
        className={styles.example}
        style={{
          background: selectedSwatch,
        }}
      />
    </>
  );
};
```

### Swatch Picker Spacing

The `spacing` prop sets gap between swatches.

```jsx
import * as React from "react";
import {
  makeStyles,
  SwatchPicker,
  renderSwatchPickerGrid,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  example: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});

const colors = [
  { color: "#FF1921", value: "FF1921", "aria-label": "red" },
  { color: "#FF7A00", value: "FF7A00", "aria-label": "dark orange" },
  { color: "#FFC12E", value: "FFC12E", "aria-label": "orange" },
  { color: "#90D057", value: "90D057", "aria-label": "light green" },
  { color: "#00B053", value: "00B053", "aria-label": "green" },
  { color: "#00AFED", value: "00AFED", "aria-label": "light blue" },
  { color: "#006EBD", value: "006EBD", "aria-label": "blue" },
  { color: "#011F5E", value: "011F5E", "aria-label": "dark blue" },
  { color: "#712F9E", value: "712F9E", "aria-label": "purple" },
];

export const SwatchPickerSpacing = () => {
  const styles = useStyles();

  return (
    <div className={styles.example}>
      <h3>Medium</h3>
      <SwatchPicker layout="grid" aria-label="SwatchPicker medium spacing">
        {renderSwatchPickerGrid({
          items: colors,
          columnCount: 3,
        })}
      </SwatchPicker>
      <h3>Small</h3>
      <SwatchPicker
        layout="grid"
        aria-label="SwatchPicker small spacing"
        spacing="small"
      >
        {renderSwatchPickerGrid({
          items: colors,
          columnCount: 3,
        })}
      </SwatchPicker>
    </div>
  );
};
```

### Swatch Picker Image

A swatch can be represented as an image.

```jsx
import * as React from "react";
import {
  makeStyles,
  SwatchPicker,
  ImageSwatch,
} from "@fluentui/react-components";
import type { SwatchPickerOnSelectEventHandler } from "@fluentui/react-components";

const useStyles = makeStyles({
  example: {
    width: "100%",
    height: "466px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    margin: "20px 0",
  },
  swatch: {
    width: "100px",
    height: "100px",
    "@media (max-width: 768px)": {
      width: "50px",
      height: "50px",
    },
  },
});

const DEFAULT_IMAGE =
  "https://fabricweb.azureedge.net/fabric-website/assets/images/swatch-picker/bridge-full-img.jpg";

const images = [
  {
    swatchSrc:
      "https://fabricweb.azureedge.net/fabric-website/assets/images/swatch-picker/sea-swatch.jpg",
    value: "0",
    label: "sea",
    fullImageSrc:
      "https://fabricweb.azureedge.net/fabric-website/assets/images/swatch-picker/sea-full-img.jpg",
  },
  {
    swatchSrc:
      "https://fabricweb.azureedge.net/fabric-website/assets/images/swatch-picker/bridge-swatch.jpg",
    value: "1",
    label: "bridge",
    fullImageSrc:
      "https://fabricweb.azureedge.net/fabric-website/assets/images/swatch-picker/bridge-full-img.jpg",
  },
  {
    swatchSrc:
      "https://fabricweb.azureedge.net/fabric-website/assets/images/swatch-picker/park-swatch.jpg",
    value: "2",
    label: "park",
    fullImageSrc:
      "https://fabricweb.azureedge.net/fabric-website/assets/images/swatch-picker/park-full-img.jpg",
  },
];

export const SwatchPickerImage = () => {
  const [selectedValue, setSelectedValue] = React.useState("1");
  const [selectedImage, setSelectedImage] = React.useState(DEFAULT_IMAGE);
  const handleSelect: SwatchPickerOnSelectEventHandler = (_, data) => {
    setSelectedValue(data.selectedValue);
    const image =
      images.find((img) => img.value === data.selectedValue) || images[0];
    setSelectedImage(image.fullImageSrc);
  };

  const styles = useStyles();

  return (
    <>
      <SwatchPicker
        aria-label="SwatchPicker with images"
        selectedValue={selectedValue}
        onSelectionChange={handleSelect}
      >
        {images.map((image) => (
          <ImageSwatch
            className={styles.swatch}
            key={image.value}
            src={image.swatchSrc}
            value={image.value}
            aria-label={image.label}
          />
        ))}
      </SwatchPicker>
      <div
        className={styles.example}
        style={{
          backgroundImage: `url(${selectedImage})`,
        }}
      />
    </>
  );
};
```

### Empty Swatch Example

Empty swatch is used for cases where new swatches can be added.

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Label,
  SwatchPicker,
  EmptySwatch,
  ColorSwatch,
} from "@fluentui/react-components";
import type { SwatchPickerOnSelectEventHandler } from "@fluentui/react-components";

const useStyles = makeStyles({
  example: {
    width: "100px",
    height: "100px",
    border: "1px solid #ccc",
    margin: "20px 0",
    "@media (forced-colors: active)": {
      forcedColorAdjust: "none",
    },
  },
  button: {
    marginRight: "8px",
  },
  input: {
    display: "block",
    margin: "10px 0",
  },
});

const ITEMS_LIMIT = 8;

const defaultItems = [
  { color: "#FF1921", value: "FF1921", "aria-label": "red" },
  { color: "#FF7A00", value: "FF7A00", "aria-label": "dark orange" },
  { color: "#90D057", value: "90D057", "aria-label": "light green" },
  { color: "#00B053", value: "00B053", "aria-label": "green" },
];

export const EmptySwatchExample = () => {
  const styles = useStyles();

  const [selectedValue, setSelectedValue] = React.useState("00B053");
  const [selectedColor, setSelectedColor] = React.useState("#00B053");

  const inputRef = React.useRef<HTMLInputElement>(null);
  const colorFocusTargetRef = React.useRef<HTMLButtonElement>(null);
  const [colorFocusTarget, setColorFocusTarget] = React.useState<string | null>(
    null
  );
  const [items, setItems] =
    React.useState<
      Array<{ color: string; value: string; "aria-label": string }>
    >(defaultItems);
  const emptyItems = new Array(ITEMS_LIMIT - items.length).fill(null);

  const handleSelect: SwatchPickerOnSelectEventHandler = (_, data) => {
    setSelectedValue(data.selectedValue);
    setSelectedColor(data.selectedSwatch);
  };
  const handleAddColor = () => {
    const newColor = inputRef.current?.value as string;
    // "value" should be unique as it's used as a key and for selection
    const newValue = `custom-${newColor} [${items.length - ITEMS_LIMIT}]`;

    setItems([
      ...items,
      { color: newColor, value: newValue, "aria-label": newColor },
    ]);
    setColorFocusTarget(newValue);
  };

  const resetColors = () => {
    setItems(defaultItems);
    setColorFocusTarget(selectedValue);
  };

  React.useEffect(() => {
    if (colorFocusTarget) {
      colorFocusTargetRef.current?.focus();
    }
  }, [colorFocusTarget]);

  return (
    <>
      <SwatchPicker
        aria-label="SwatchPicker with empty swatches"
        selectedValue={selectedValue}
        onSelectionChange={handleSelect}
      >
        {items.map((item) => (
          <ColorSwatch
            key={item.value}
            ref={item.value === colorFocusTarget ? colorFocusTargetRef : null}
            {...item}
          />
        ))}
        {emptyItems.map((_, index) => (
          <EmptySwatch disabled key={index} aria-label="empty swatch" />
        ))}
      </SwatchPicker>

      <div
        className={styles.example}
        style={{ backgroundColor: selectedColor }}
      />
      <Label htmlFor="color-select">Add more colors:</Label>
      <input
        className={styles.input}
        ref={inputRef}
        type="color"
        id="color-select"
        name="color-select"
      />
      <Button
        id="add-new-color"
        className={styles.button}
        appearance="primary"
        disabled={items.length >= ITEMS_LIMIT}
        onClick={handleAddColor}
      >
        Add new color
      </Button>
      <Button
        id="reset-example"
        className={styles.button}
        onClick={resetColors}
      >
        Reset example
      </Button>
    </>
  );
};
```

### Color Swatch Variants

`ColorSwatch` component can have color, gradient, icon and initials.

```jsx
import * as React from "react";
import { HeartFilled } from "@fluentui/react-icons";
import { makeStyles, ColorSwatch } from "@fluentui/react-components";

const useStyles = makeStyles({
  example: {
    display: "flex",
    gap: "8px",
  },
  icon: {
    "@media (forced-colors: active)": {
      forcedColorAdjust: "none",
    },
  },
});

export const ColorSwatchVariants = () => {
  const styles = useStyles();
  return (
    <div className={styles.example}>
      <ColorSwatch
        color="#E3008C"
        value="hot-pink-color"
        aria-label="Hot pink"
      />
      <ColorSwatch
        color="linear-gradient(0deg, #E3008C, #fff232)"
        value="gradient"
        aria-label="Gradient yellow pink"
      />
      <ColorSwatch
        color="#c8eeff"
        icon={<HeartFilled color="red" className={styles.icon} />}
        value="icon"
        aria-label="heart icon"
      />

      <ColorSwatch color="#016ab0" disabled value="blue" aria-label="blue" />
      <ColorSwatch color="#ff659a" value="initials" aria-label="initials">
        A
      </ColorSwatch>
      <ColorSwatch
        disabled
        color="#c8eeff"
        value="light-blue"
        aria-label="light blue"
      />
    </div>
  );
};
```

### Swatch Picker Mixed Swatches

It's possible to use `ColorSwatch` and `ImageSwatch` in one SwatchPicker.

```jsx
import * as React from "react";
import {
  makeStyles,
  SwatchPicker,
  renderSwatchPickerGrid,
} from "@fluentui/react-components";
import type {
  ColorSwatchProps,
  ImageSwatchProps,
  SwatchProps,
  SwatchPickerOnSelectEventHandler,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  example: {
    width: "100px",
    height: "100px",
    border: "1px solid #ccc",
    margin: "20px 0",
    "@media (forced-colors: active)": {
      forcedColorAdjust: "none",
    },
  },
});

const colors: ColorSwatchProps[] = [
  { color: "#FF1921", value: "FF1921", "aria-label": "red" },
  { color: "#FF7A00", value: "FF7A00", "aria-label": "orange" },
  { color: "#90D057", value: "90D057", "aria-label": "light green" },
  { color: "#00B053", value: "00B053", "aria-label": "green" },
  { color: "#00AFED", value: "00AFED", "aria-label": "light blue" },
  { color: "#006EBD", value: "006EBD", "aria-label": "blue" },
];

const images: ImageSwatchProps[] = [
  {
    src: "https://fabricweb.azureedge.net/fabric-website/assets/images/swatch-picker/sea-swatch.jpg",
    value: "sea",
    "aria-label": "sea",
  },
  {
    src: "https://fabricweb.azureedge.net/fabric-website/assets/images/swatch-picker/bridge-swatch.jpg",
    value: "bridge",
    "aria-label": "bridge",
  },
  {
    src: "https://fabricweb.azureedge.net/fabric-website/assets/images/swatch-picker/park-swatch.jpg",
    value: "park",
    "aria-label": "park",
  },
];

const items: SwatchProps[] = [...colors, ...images];

export const SwatchPickerMixedSwatches = () => {
  const [selectedValue, setSelectedValue] = React.useState("00B053");
  const [selectedSwatch, setSelectedSwatch] = React.useState("#00B053");
  const handleSelect: SwatchPickerOnSelectEventHandler = (_, data) => {
    setSelectedValue(data.selectedValue);
    const swatch =
      items.find((item) => item.value === data.selectedValue) || items[0];
    const src = (swatch as ImageSwatchProps).src;
    if (swatch.color) {
      setSelectedSwatch(swatch.color);
    } else if (src) {
      setSelectedSwatch(`url(${src}`);
    }
  };

  const styles = useStyles();
  return (
    <>
      <SwatchPicker
        layout="grid"
        aria-label="SwatchPicker with both colors and images"
        selectedValue={selectedValue}
        onSelectionChange={handleSelect}
      >
        {renderSwatchPickerGrid({
          items,
          columnCount: 3,
        })}
      </SwatchPicker>
      <div
        className={styles.example}
        style={{
          background: selectedSwatch,
        }}
      />
    </>
  );
};
```

### Swatch Picker With Tooltip

Each swatch should have a descriptive tooltip.

```jsx
import * as React from "react";
import {
  makeStyles,
  Tooltip,
  SwatchPicker,
  ColorSwatch,
  renderSwatchPickerGrid,
} from "@fluentui/react-components";
import type {
  ColorSwatchProps,
  SwatchProps,
  SwatchPickerOnSelectEventHandler,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  example: {
    width: "100px",
    height: "100px",
    border: "1px solid #ccc",
    margin: "20px 0",
    "@media (forced-colors: active)": {
      forcedColorAdjust: "none",
    },
  },
});

const colors = [
  { color: "#FF1921", value: "FF1921", "aria-label": "red" },
  { color: "#FF7A00", value: "FF7A00", "aria-label": "orange" },
  { color: "#90D057", value: "90D057", "aria-label": "light green" },
  { color: "#00B053", value: "00B053", "aria-label": "green" },
  { color: "#00AFED", value: "00AFED", "aria-label": "light blue" },
  { color: "#006EBD", value: "006EBD", "aria-label": "blue" },
  { color: "#011F5E", value: "011F5E", "aria-label": "dark blue" },
  { color: "#712F9E", value: "712F9E", "aria-label": "purple" },
  { color: "#FF0099", value: "FF0099", "aria-label": "pink" },
];

export const SwatchPickerWithTooltip = () => {
  const [selectedValue, setSelectedValue] = React.useState("00B053");
  const [selectedColor, setSelectedColor] = React.useState("#00B053");
  const handleSelect: SwatchPickerOnSelectEventHandler = (_, data) => {
    setSelectedValue(data.selectedValue);
    setSelectedColor(data.selectedSwatch);
  };

  const styles = useStyles();

  return (
    <>
      <h3>Row layout</h3>
      <SwatchPicker
        aria-label="SwatchPicker row layout"
        selectedValue={selectedValue}
        onSelectionChange={handleSelect}
      >
        {colors.map((color) => {
          return <ColorSwatchWithTooltip key={color.value} {...color} />;
        })}
      </SwatchPicker>
      <h3>Grid layout</h3>
      <SwatchPicker
        layout="grid"
        aria-label="SwatchPicker grid layout"
        selectedValue={selectedValue}
        onSelectionChange={handleSelect}
      >
        {renderSwatchPickerGrid({
          items: colors,
          columnCount: 3,
          renderSwatch: (item: SwatchProps) => (
            <ColorSwatchWithTooltip
              key={item.value}
              color={item.color ?? ""}
              {...item}
            />
          ),
        })}
      </SwatchPicker>

      <div
        className={styles.example}
        style={{
          backgroundColor: selectedColor,
        }}
      />
    </>
  );
};

const ColorSwatchWithTooltip = (props: ColorSwatchProps) => {
  const { color, value } = props;
  const label = props["aria-label"] ?? "color swatch";
  return (
    <Tooltip withArrow content={label} relationship="label">
      <ColorSwatch color={color} value={value} />
    </Tooltip>
  );
};
```

### Swatch Picker Popup

The swatch picker can be integrated within a popover or similar element.

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  SwatchPicker,
  ColorSwatch,
  renderSwatchPickerGrid,
} from "@fluentui/react-components";
import type { SwatchPickerOnSelectEventHandler } from "@fluentui/react-components";

const useStyles = makeStyles({
  example: {
    width: "100px",
    height: "100px",
    border: "1px solid #ccc",
    margin: "20px 0",
    "@media (forced-colors: active)": {
      forcedColorAdjust: "none",
    },
  },
});

const colorSet1 = [
  { color: "#FF1921", value: "FF1921", "aria-label": "red" },
  { color: "#00B053", value: "00B053", "aria-label": "green" },
  { color: "#00AFED", value: "00AFED", "aria-label": "light blue" },
  { color: "#006EBD", value: "006EBD", "aria-label": "blue" },
  { color: "#712F9E", value: "712F9E", "aria-label": "purple" },
];

const colorSet2 = [
  { color: "#FF7A00", value: "FF7A00", "aria-label": "dark orange" },
  { color: "#90D057", value: "90D057", "aria-label": "light green" },
  { color: "#3BC4F5", value: "3BC4F5", "aria-label": "light blue 10" },
  { color: "#1F93E6", value: "1F93E6", "aria-label": "blue 10" },
  { color: "#A01CFa", value: "A01CFa", "aria-label": "bright purple" },
  {
    color: "linear-gradient(0deg, #FF1921, #FFB92E)",
    value: "orange-red",
    "aria-label": "gradient orange-red",
  },
  {
    color: "linear-gradient(0deg, #00B053, #90D057)",
    value: "light-green-gradient",
    "aria-label": "gradient light green",
  },
  {
    color: "linear-gradient(0deg, #006EBD, #00AFED)",
    value: "blue gradient",
    "aria-label": "gradient blue",
  },
  {
    color: "linear-gradient(0deg, #712F9E, #00AFED)",
    value: "blue-purple",
    "aria-label": "gradient blue-purple",
  },
  {
    color: "linear-gradient(0deg, #fA1CBC, #A01CFa)",
    value: "blue-purple",
    "aria-label": "gradient pink-purple",
  },
  {
    color: "linear-gradient(0deg, #FFC12E, #FEFF37)",
    value: "yellow-orange",
    "aria-label": "gradient yellow-orange",
  },
  {
    color: "linear-gradient(0deg, #90D057, #FEFF37)",
    value: "yellow-green",
    "aria-label": "gradient yellow-green",
  },
  {
    color: "linear-gradient(0deg, #00B053, #00AFED)",
    value: "green-blue",
    "aria-label": "gradient green-blue",
  },
  {
    color: "linear-gradient(0deg, #A01CFA, #00AFED)",
    value: "blue-purple gradient",
    "aria-label": "gradient blue",
  },
  {
    color:
      "linear-gradient(0deg, #FF1921 0%, #FFC12E 10%, #FEFF37 20%, #90D057 30%, #00B053 40%, #00AFED 50%, #006EBD 60%, #011F5E 70%, #712F9E 80%)",
    value: "gradient",
    "aria-label": "gradient rainbow",
  },
];

export const SwatchPickerPopup = () => {
  const [selectedValue, setSelectedValue] = React.useState("00B053");
  const [selectedColor, setSelectedColor] = React.useState("#00B053");

  const [popoverOpen, setPopoverOpen] = React.useState(false);

  const handleSelect: SwatchPickerOnSelectEventHandler = (_, data) => {
    setSelectedValue(data.selectedValue);
    setSelectedColor(data.selectedSwatch);

    setPopoverOpen(false);
  };

  const styles = useStyles();

  return (
    <>
      <Popover
        open={popoverOpen}
        trapFocus
        onOpenChange={(_, data) => setPopoverOpen(data.open)}
      >
        <PopoverTrigger disableButtonEnhancement>
          <Button>Choose color</Button>
        </PopoverTrigger>

        <PopoverSurface>
          <h3>Color set 1</h3>
          <SwatchPicker
            aria-label="SwatchPicker set 1"
            selectedValue={selectedValue}
            onSelectionChange={handleSelect}
          >
            {colorSet1.map((color, index) => {
              return <ColorSwatch key={`${color.value}-${index}`} {...color} />;
            })}
          </SwatchPicker>
          <h3>Color set 2</h3>
          <SwatchPicker
            layout="grid"
            aria-label="SwatchPicker set 2"
            selectedValue={selectedValue}
            onSelectionChange={handleSelect}
          >
            {renderSwatchPickerGrid({
              items: colorSet2,
              columnCount: 5,
            })}
          </SwatchPicker>
        </PopoverSurface>
      </Popover>
      <div
        className={styles.example}
        style={{
          background: selectedColor,
        }}
      />
    </>
  );
};
```