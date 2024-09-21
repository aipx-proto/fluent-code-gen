# Slider

A Slider represents an input that allows user to choose a value from within a specific range.

```jsx
import * as React from "react";
import { useId, Label, Slider } from "@fluentui/react-components";

export const Default = () => {
  const id = useId();
  return (
    <>
      <Label htmlFor={id}>Basic Example</Label>
      <Slider defaultValue={20} id={id} />
    </>
  );
};
```

### Default

A default slider

```jsx
import * as React from "react";
import { useId, Label, Slider } from "@fluentui/react-components";

export const Default = () => {
  const id = useId();
  return (
    <>
      <Label htmlFor={id}>Basic Example</Label>
      <Slider defaultValue={20} id={id} />
    </>
  );
};
```

### Size

A slider comes in both medium and small size. Medium is the default.

```jsx
import * as React from "react";
import { useId, Label, Slider } from "@fluentui/react-components";

export const Size = () => {
  const smallId = useId("small");
  const mediumId = useId("medium");
  return (
    <>
      <Label htmlFor={mediumId}>Medium Slider</Label>
      <Slider size="medium" defaultValue={20} id={mediumId} />

      <Label htmlFor={smallId}>Small Slider</Label>
      <Slider size="small" defaultValue={20} id={smallId} />
    </>
  );
};
```

### Controlled

A slider can be a controlled input where the slider value is stored in state and updated with `onChange`. This is also useful for setting custom aria-valuetext

```jsx
import * as React from "react";
import { useId, Button, Label, Slider } from "@fluentui/react-components";
import type { SliderProps } from "@fluentui/react-components";

export const Controlled = () => {
  const id = useId();
  const [sliderValue, setSliderValue] = React.useState(160);
  const onSliderChange: SliderProps["onChange"] = (_, data) =>
    setSliderValue(data.value);
  const resetSlider = () => setSliderValue(0);
  return (
    <>
      <Label htmlFor={id}>
        Control Slider [ Current Value: {sliderValue} ]
      </Label>
      <Slider
        aria-valuetext={`Value is ${sliderValue}`}
        value={sliderValue}
        min={20}
        max={200}
        onChange={onSliderChange}
        id={id}
      />

      <Button onClick={resetSlider}>Reset</Button>
    </>
  );
};
```

### Step

You can define the step value of a slider so that the value will always be a mutiple of that step

```jsx
import * as React from "react";
import { useId, Label, Slider } from "@fluentui/react-components";

export const Step = () => {
  const id = useId();
  return (
    <>
      <Label htmlFor={id}>Step Example</Label>
      <Slider defaultValue={6} step={3} min={0} max={12} id={id} />
    </>
  );
};
```

### Min Max

A slider with min and max values displayed

```jsx
import * as React from "react";
import { useId, Label, Slider, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
});

export const MinMax = () => {
  const styles = useStyles();
  const id = useId();
  const min = 10;
  const max = 50;
  return (
    <>
      <Label htmlFor={id}>Min/Max Example</Label>
      <div className={styles.wrapper}>
        <Label aria-hidden>{min}</Label>
        <Slider min={min} max={max} defaultValue={20} id={id} />
        <Label aria-hidden>{max}</Label>
      </div>
    </>
  );
};
```

### Vertical

A slider can be oriented vertically where the max value is at the top of the slider.

```jsx
import * as React from "react";
import { useId, Label, Slider } from "@fluentui/react-components";

export const Vertical = () => {
  const id = useId();
  return (
    <>
      <Label htmlFor={id}>Vertical Example</Label>
      <Slider vertical step={2} defaultValue={6} min={0} max={10} id={id} />
    </>
  );
};
```

### Disabled

A disabled slider will not change or fire events on click or keyboard press.

```jsx
import * as React from "react";
import { useId, Label, Slider } from "@fluentui/react-components";

export const Disabled = () => {
  const id = useId();
  return (
    <>
      <Label htmlFor={id}>Disabled Example</Label>
      <Slider defaultValue={30} disabled id={id} />
    </>
  );
};
```