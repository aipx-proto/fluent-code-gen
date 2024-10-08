# CardPreview

The CardPreview component, used inside of a Card, allows the user to better visualize what the card's contents are.

```jsx
import * as React from "react";
import { CardPreview } from "@fluentui/react-components";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

export const Default = () => (
  <CardPreview
    logo={<img src={resolveAsset("docx.png")} alt="Microsoft Word logo" />}
  >
    <img
      src={resolveAsset("doc_template.png")}
      alt="Preview of a Word document "
    />
  </CardPreview>
);
```

### Default

```jsx
import * as React from "react";
import { CardPreview } from "@fluentui/react-components";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

export const Default = () => (
  <CardPreview
    logo={<img src={resolveAsset("docx.png")} alt="Microsoft Word logo" />}
  >
    <img
      src={resolveAsset("doc_template.png")}
      alt="Preview of a Word document "
    />
  </CardPreview>
);
```