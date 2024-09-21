# Image

An image displays graphical content such as a photo or illustration.

```jsx
import * as React from "react";
import { Image } from "@fluentui/react-components";
import type { ImageProps } from "@fluentui/react-components";
import type { ArgTypes, Parameters } from "@storybook/react";

export const Default = (props: ImageProps) => {
  return <Image {...props} />;
};
```

### Default

```jsx
import * as React from "react";
import { Image } from "@fluentui/react-components";
import type { ImageProps } from "@fluentui/react-components";
import type { ArgTypes, Parameters } from "@storybook/react";

export const Default = (props: ImageProps) => {
  return <Image {...props} />;
};
```

### Shape

Images can be styled as square (default), circular, or with rounded corners.

```jsx
import * as React from "react";
import { Image } from "@fluentui/react-components";

export const Shape = () => (
  <div style={{ display: "flex", gap: 8 }}>
    <Image
      alt="Allan's avatar"
      src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/AllanMunger.jpg"
      height={200}
      width={200}
    />

    <Image
      alt="Erik's avatar"
      shape="circular"
      src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/ErikNason.jpg"
      height={200}
      width={200}
    />

    <Image
      alt="Amanda's avatar"
      shape="rounded"
      src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/AmandaBrady.jpg"
      height={200}
      width={200}
    />
  </div>
);
```

### Bordered

The `bordered` prop will apply a border style to images regardless of its shape.

```jsx
import * as React from "react";
import { Image } from "@fluentui/react-components";

export const Bordered = () => (
  <div>
    <div style={{ display: "flex", gap: 8 }}>
      <Image
        alt="Allan's avatar"
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/AllanMunger.jpg"
        height={200}
        width={200}
      />

      <Image
        alt="Amanda's avatar"
        shape="rounded"
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/AmandaBrady.jpg"
        height={200}
        width={200}
      />

      <Image
        alt="Erik's avatar"
        shape="circular"
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/ErikNason.jpg"
        height={200}
        width={200}
      />
    </div>
    <div style={{ display: "flex", gap: 8, marginTop: "15px" }}>
      <Image
        alt="Allan's avatar"
        bordered
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/AllanMunger.jpg"
        height={200}
        width={200}
      />

      <Image
        alt="Amanda's avatar"
        bordered
        shape="rounded"
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/AmandaBrady.jpg"
        height={200}
        width={200}
      />

      <Image
        alt="Erik's avatar"
        bordered
        shape="circular"
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/ErikNason.jpg"
        height={200}
        width={200}
      />
    </div>
  </div>
);
```

### Fallback

In cases when images fail to load, the Image component will result into the native `<img/>` browser fallback.

```jsx
import * as React from "react";
import { Image } from "@fluentui/react-components";

export const Fallback = () => (
  <div style={{ display: "flex", gap: 8 }}>
    <Image
      alt="Allan's avatar"
      bordered
      src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/AllanMunger.jpg"
      height={200}
      width={200}
    />

    <Image
      alt="Non-existing avatar"
      bordered
      src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/non-existing-png.jpg"
      height={200}
      width={200}
    />
  </div>
);
```

### Block

An Image can be maximized in order to fill its parent container.

```jsx
import * as React from "react";
import { Image } from "@fluentui/react-components";

export const Block = () => (
  <>
    <Image
      block
      src="https://fabricweb.azureedge.net/fabric-website/placeholders/900x50.png"
      alt="Image placeholder"
    />
    <Image
      block
      src="https://fabricweb.azureedge.net/fabric-website/placeholders/100x100.png"
      alt="Image placeholder"
    />
  </>
);
```

### Fit

The `fit` prop is used to determine how the image should be resized in order to fit its container.

The image can be resized in various ways: centering to its container(`center`), filling its container (`cover`) or preserving the aspect ratio (`contain`).

```jsx
import * as React from "react";
import { Image } from "@fluentui/react-components";

export const Fit = () => (
  <>
    <h1>None</h1>
    <div style={{ border: "1px solid green", height: 150, width: 300 }}>
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/placeholders/600x200.png"
        alt="Image placeholder"
        fit="none"
      />
    </div>
    <br />
    <div style={{ border: "1px solid green", height: 150, width: 300 }}>
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/placeholders/200x100.png"
        alt="Image placeholder"
        fit="none"
      />
    </div>

    <h1>Center</h1>
    <div style={{ border: "1px solid green", height: 150, width: 300 }}>
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/placeholders/600x200.png"
        alt="Image placeholder"
        fit="center"
      />
    </div>
    <br />
    <div style={{ border: "1px solid green", height: 150, width: 300 }}>
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/placeholders/200x100.png"
        alt="Image placeholder"
        fit="center"
      />
    </div>

    <h1>Contain</h1>
    <div style={{ border: "1px solid green", height: 200, width: 400 }}>
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/placeholders/400x200.png"
        alt="Image placeholder"
        fit="contain"
      />
    </div>
    <br />
    <div style={{ border: "1px solid green", height: 250, width: 400 }}>
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/placeholders/400x200.png"
        alt="Image placeholder"
        fit="contain"
      />
    </div>
    <br />
    <div style={{ border: "1px solid green", height: 200, width: 450 }}>
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/placeholders/400x200.png"
        alt="Image placeholder"
        fit="contain"
      />
    </div>

    <h1>Cover</h1>
    <div style={{ border: "1px solid green", height: 200, width: 400 }}>
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/placeholders/400x250.png"
        alt="Image placeholder"
        fit="cover"
      />
    </div>
    <br />
    <div style={{ border: "1px solid green", height: 200, width: 400 }}>
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/placeholders/400x300.png"
        alt="Image placeholder"
        fit="cover"
      />
    </div>
    <br />
    <div style={{ border: "1px solid green", height: 200, width: 400 }}>
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/placeholders/600x200.png"
        alt="Image placeholder"
        fit="cover"
      />
    </div>
  </>
);
```

### Shadow

The shadow prop will apply box shadow styling to the image.

```jsx
import * as React from "react";
import { Image } from "@fluentui/react-components";

export const Shadow = () => (
  <Image
    shadow
    src="https://fabricweb.azureedge.net/fabric-website/placeholders/300x300.png"
    alt="Image placeholder"
  />
);
```