# Avatar

```jsx
import type { ArgTypes } from "@storybook/react";
import * as React from "react";
import { Avatar } from "@fluentui/react-components";
import type { AvatarProps } from "@fluentui/react-components";

export const Default = (props: Partial<AvatarProps>) => (
  <Avatar aria-label="Guest" {...props} />
);

const argTypes: ArgTypes = {
  initials: {
    control: "text",
    type: "string",
  },
  badge: {
    control: {
      type: "inline-radio",
      options: [{ status: "away" }, { status: "busy" }],
    },
  },
  size: {
    control: {
      type: "select",
      options: [16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128],
    },
  },
  name: {
    control: {
      control: "text",
      type: "string",
    },
  },
};
```

### Default

```jsx
import type { ArgTypes } from "@storybook/react";
import * as React from "react";
import { Avatar } from "@fluentui/react-components";
import type { AvatarProps } from "@fluentui/react-components";

export const Default = (props: Partial<AvatarProps>) => (
  <Avatar aria-label="Guest" {...props} />
);

const argTypes: ArgTypes = {
  initials: {
    control: "text",
    type: "string",
  },
  badge: {
    control: {
      type: "inline-radio",
      options: [{ status: "away" }, { status: "busy" }],
    },
  },
  size: {
    control: {
      type: "select",
      options: [16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128],
    },
  },
  name: {
    control: {
      control: "text",
      type: "string",
    },
  },
};
```

### Name

The name is used to determine the initials displayed by the Avatar. It is also read by screen readers.

```jsx
import * as React from "react";
import { Avatar } from "@fluentui/react-components";

export const Name = () => <Avatar name="Ashley McCarthy" />;
```

### Image

An avatar can display an image.  
It is recommended to also include a name in addition to the image: the initials from the name are displayed while the image is loading, and the name makes the Avatar accessible to screen readers.

```jsx
import * as React from "react";
import { Avatar } from "@fluentui/react-components";

export const Image = () => (
  <Avatar
    name="Katri Athokas"
    image={{
      src: "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
    }}
  />
);
```

### Icon

An avatar can display an icon. The icon will only be shown when there is no image or initials available.

```jsx
import * as React from "react";
import {
  BriefcaseRegular,
  CalendarLtrRegular,
  ConferenceRoomRegular,
  GuestRegular,
  PeopleRegular,
  PeopleTeamRegular,
  PersonCallRegular,
} from "@fluentui/react-icons";

import { Avatar } from "@fluentui/react-components";

export const Icon = () => (
  <>
    <Avatar icon={<GuestRegular />} aria-label="Guest" />
    <Avatar icon={<PeopleRegular />} aria-label="Group" />
    <Avatar icon={<PeopleTeamRegular />} shape="square" aria-label="Team" />
    <Avatar icon={<PersonCallRegular />} aria-label="Phone Contact" />
    <Avatar icon={<CalendarLtrRegular />} aria-label="Meeting" />
    <Avatar icon={<BriefcaseRegular />} shape="square" aria-label="Tenant" />
    <Avatar icon={<ConferenceRoomRegular />} shape="square" aria-label="Room" />
  </>
);
```

### Badge

An avatar can have a badge to indicate presence status. See the PresenceBadge component for more info.

```jsx
import * as React from "react";
import { Avatar } from "@fluentui/react-components";

export const Badge = () => (
  <>
    <Avatar name="Lydia Bauer" badge={{ status: "available" }} />
    <Avatar name="Amanda Brady" badge={{ status: "busy" }} />
    <Avatar name="Henry Brill" badge={{ status: "out-of-office" }} />
    <Avatar name="Robin Counts" badge={{ status: "away" }} />
    <Avatar name="Tim Deboer" badge={{ status: "offline" }} />
    <Avatar name="Cameron Evans" badge={{ status: "do-not-disturb" }} />
    <Avatar name="Wanda Howard" badge={{ status: "blocked" }} />
    <Avatar
      name="Mona Kane"
      badge={{ status: "available", outOfOffice: true }}
    />
    <Avatar name="Allan Munger" badge={{ status: "busy", outOfOffice: true }} />
    <Avatar
      name="Erik Nason"
      badge={{ status: "out-of-office", outOfOffice: true }}
    />
    <Avatar
      name="Daisy Phillips"
      badge={{ status: "away", outOfOffice: true }}
    />
    <Avatar
      name="Kevin Sturgis"
      badge={{ status: "offline", outOfOffice: true }}
    />
    <Avatar
      name="Elliot Woodward"
      badge={{ status: "do-not-disturb", outOfOffice: true }}
    />
    <Avatar
      name="Wanda Howard"
      badge={{ status: "blocked", outOfOffice: true }}
    />
  </>
);
```

### Badge Icon

An Avatar can have a custom icon inside the badge.

```jsx
import * as React from "react";
import { Avatar } from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";

export const BadgeIcon = () => (
  <Avatar name="John Doe" badge={{ icon: <CalendarMonthRegular /> }} />
);
```

### Shape: square

An avatar can have a square shape.

```jsx
import * as React from "react";
import { Avatar } from "@fluentui/react-components";
import { PeopleTeamRegular } from "@fluentui/react-icons";

export const Square = () => (
  <Avatar
    shape="square"
    aria-label="square avatar"
    icon={<PeopleTeamRegular />}
  />
);
```

### Color: brand

An avatar can use the brand color from the theme's palette.

```jsx
import * as React from "react";
import { Avatar } from "@fluentui/react-components";

export const ColorBrand = () => (
  <Avatar color="brand" initials="BR" name="brand color avatar" />
);
```

### Color: colorful

An avatar can have the color be automatically picked based on the `name` prop (or `idForColor` can be used if a name is not available).

```jsx
import * as React from "react";
import { Avatar } from "@fluentui/react-components";
import { GuestRegular } from "@fluentui/react-icons";

export const ColorColorful = () => (
  <>
    <Avatar color="colorful" name="Katri Athokas" />
    <Avatar color="colorful" name="Elvia Atkins" />
    <Avatar color="colorful" name="Cameron Evans" />
    <Avatar color="colorful" name="Wanda Howard" />
    <Avatar color="colorful" name="Mona Kane" />
    <Avatar color="colorful" name="Allan Munger" />
    <Avatar color="colorful" name="Daisy Phillips" />
    <Avatar color="colorful" name="Robert Tolbert" />
    <Avatar color="colorful" name="Kevin Sturgis" />
    <Avatar color="colorful" name="Elliot Woodward" />
    <Avatar
      color="colorful"
      idForColor="id-123"
      icon={<GuestRegular />}
      aria-label="Guest"
    />
    <Avatar
      color="colorful"
      idForColor="42"
      icon={<GuestRegular />}
      aria-label="Guest"
    />
    <Avatar
      color="colorful"
      idForColor="93"
      icon={<GuestRegular />}
      aria-label="Guest"
    />
    <Avatar
      color="colorful"
      idForColor="Guest-23"
      icon={<GuestRegular />}
      aria-label="Guest"
    />
  </>
);
```

### Color: named color

An avatar can have a specific named color from the theme's color palette (e.g. `seafoam`, `grape`, or `pumpkin`)

```jsx
import * as React from "react";
import { Avatar } from "@fluentui/react-components";

export const ColorPalette = () => (
  <>
    <Avatar initials="DR" color="dark-red" name="darkRed avatar" />
    <Avatar initials="CR" color="cranberry" name="cranberry avatar" />
    <Avatar initials="RE" color="red" name="red avatar" />
    <Avatar initials="PU" color="pumpkin" name="pumpkin avatar" />
    <Avatar initials="PE" color="peach" name="peach avatar" />
    <Avatar initials="MA" color="marigold" name="marigold avatar" />
    <Avatar initials="GO" color="gold" name="gold avatar" />
    <Avatar initials="BS" color="brass" name="brass avatar" />
    <Avatar initials="BR" color="brown" name="brown avatar" />
    <Avatar initials="FO" color="forest" name="forest avatar" />
    <Avatar initials="SE" color="seafoam" name="seafoam avatar" />
    <Avatar initials="DG" color="dark-green" name="darkGreen avatar" />
    <Avatar initials="LT" color="light-teal" name="lightTeal avatar" />
    <Avatar initials="TE" color="teal" name="teal avatar" />
    <Avatar initials="ST" color="steel" name="steel avatar" />
    <Avatar initials="BL" color="blue" name="blue avatar" />
    <Avatar initials="RB" color="royal-blue" name="royalBlue avatar" />
    <Avatar initials="CO" color="cornflower" name="cornflower avatar" />
    <Avatar initials="NA" color="navy" name="navy avatar" />
    <Avatar initials="LA" color="lavender" name="lavender avatar" />
    <Avatar initials="PU" color="purple" name="purple avatar" />
    <Avatar initials="GR" color="grape" name="grape avatar" />
    <Avatar initials="LI" color="lilac" name="lilac avatar" />
    <Avatar initials="PI" color="pink" name="pink avatar" />
    <Avatar initials="MA" color="magenta" name="magenta avatar" />
    <Avatar initials="PL" color="plum" name="plum avatar" />
    <Avatar initials="BE" color="beige" name="beige avatar" />
    <Avatar initials="MI" color="mink" name="mink avatar" />
    <Avatar initials="PL" color="platinum" name="platinum avatar" />
    <Avatar initials="AN" color="anchor" name="anchor avatar" />
  </>
);
```

### Active

An avatar can communicate whether a user is currently active (for example, speaking or typing). Avatar supports `active`, `inactive`, and `unset`. The default is `unset`.

```jsx
import * as React from "react";
import { Avatar } from "@fluentui/react-components";

export const Active = () => (
  <div style={{ display: "flex", gap: "20px" }}>
    <Avatar active="active" name="Ashley McCarthy" />
    <Avatar active="inactive" name="Isaac Fielder" badge={{ status: "away" }} />
  </div>
);
```

### Active Appearance

An avatar can have different appearances when `active="active"`. Avatar supports `ring`, `shadow`, and `ring-shadow`. The default is `ring`.

```jsx
import * as React from "react";
import { Avatar } from "@fluentui/react-components";

export const ActiveAppearance = () => (
  <div style={{ display: "flex", gap: "20px" }}>
    <Avatar active="active" activeAppearance="ring" name="Ring" />
    <Avatar active="active" activeAppearance="shadow" name="Shadow" />
    <Avatar active="active" activeAppearance="ring-shadow" name="Ring Shadow" />
  </div>
);
```

### Initials: Custom Initials

An avatar can display custom initials by setting the initials prop. It is generally recommended to use the `name` prop instead, as that will automatically determine the initials and display them.

```jsx
import * as React from "react";
import { Avatar } from "@fluentui/react-components";

export const Initials = () => <Avatar name="Cecil Robin Folk" initials="CRF" />;
```

### Size

An avatar supports a range of sizes from 16 to 128. The default is 32.

Avoid using sizes 16 and 20 for interactive Avatars, or ensure that there is at least 8px or 4px spacing respectively to meet WCAG target size requirements.

```jsx
import * as React from "react";
import { Avatar } from "@fluentui/react-components";

export const Size = () => (
  <>
    <Avatar initials="16" size={16} />
    <Avatar initials="20" size={20} />
    <Avatar initials="24" size={24} />
    <Avatar initials="28" size={28} />
    <Avatar initials="32" size={32} />
    <Avatar initials="36" size={36} />
    <Avatar initials="40" size={40} />
    <Avatar initials="48" size={48} />
    <Avatar initials="56" size={56} />
    <Avatar initials="64" size={64} />
    <Avatar initials="72" size={72} />
    <Avatar initials="96" size={96} />
    <Avatar initials="120" size={120} />
    <Avatar initials="128" size={128} />
  </>
);
```