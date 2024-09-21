# Persona

A Persona is a visual representation of a person or status that showcases an Avatar, PresenceBadge, or an Avatar with a PresenceBadge.

```jsx
import * as React from "react";
import { Persona } from "@fluentui/react-components";
import type { PersonaProps } from "@fluentui/react-components";

export const Default = (props: Partial<PersonaProps>) => {
  return (
    <Persona
      name="Kevin Sturgis"
      secondaryText="Available"
      presence={{ status: "available" }}
      avatar={{
        image: {
          src: "https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-male.png",
        },
      }}
      {...props}
    />
  );
};
```

### Default

```jsx
import * as React from "react";
import { Persona } from "@fluentui/react-components";
import type { PersonaProps } from "@fluentui/react-components";

export const Default = (props: Partial<PersonaProps>) => {
  return (
    <Persona
      name="Kevin Sturgis"
      secondaryText="Available"
      presence={{ status: "available" }}
      avatar={{
        image: {
          src: "https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-male.png",
        },
      }}
      {...props}
    />
  );
};
```

### Text Alignment

A Persona supports two text alignments, `start` being the default position.

```jsx
import * as React from "react";
import { makeStyles, Persona } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    justifyItems: "center",
  },
});

export const TextAlignment = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Persona
        textAlignment="start"
        name="Kevin Sturgis"
        presence={{ status: "available" }}
        secondaryText="Available"
        tertiaryText="Software Engineer"
        quaternaryText="Microsoft"
      />

      <Persona
        textAlignment="center"
        name="Kevin Sturgis"
        presence={{ status: "available" }}
        secondaryText="Available"
        tertiaryText="Software Engineer"
        quaternaryText="Microsoft"
      />
    </div>
  );
};
```

### Text Position

A Persona supports three text positions, `after` being the default position.

```jsx
import * as React from "react";
import { makeStyles, Persona } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    justifyItems: "center",
  },
});

export const TextPosition = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Persona
        textPosition="after"
        name="Kevin Sturgis"
        presence={{ status: "available" }}
        secondaryText="Available"
      />
      <Persona
        textPosition="below"
        name="Kevin Sturgis"
        presence={{ status: "available" }}
        secondaryText="Available"
      />
      <Persona
        textPosition="before"
        name="Kevin Sturgis"
        presence={{ status: "available" }}
        secondaryText="Available"
      />
    </div>
  );
};
```

### Presence Previous Behavior

PresenceBadge maps its presence to the behavior in v8. If the previous behavior is desired, it is possible to override the icon and className to match it. Note that Persona maps to one size smaller, such as `huge` to `large` and `medium` to `small`. As the size prop shows, Persona does not support tiny.

```jsx
import * as React from "react";
import {
  makeStyles,
  Persona,
  presenceAvailableRegular,
  presenceOfflineRegular,
  tokens,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  statusAway: {
    color: tokens.colorPaletteMarigoldBackground3,
  },
  statusOffline: {
    color: tokens.colorNeutralForeground3,
  },

  root: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "repeat(2, max-content)",
    gridTemplateRows: "repeat(3, auto)",
    columnGap: "20px",
    rowGap: "10px",
  },
});

export const PresencePreviousBehavior = () => {
  const styles = useStyles();
  const AwayFilledIcon = presenceAvailableRegular.small;
  const OfflineRegularIcon = presenceOfflineRegular.small;

  return (
    <div className={styles.root}>
      <span>Current Behavior</span>
      <Persona
        presence={{ status: "away", outOfOffice: true }}
        name="Kevin Sturgis"
        secondaryText="Away - OOF"
      />
      <Persona
        presence={{ status: "offline", outOfOffice: true }}
        name="Kevin Sturgis"
        secondaryText="Offline - OOF"
      />

      <span>Previous Behavior</span>
      <Persona
        presence={{
          status: "away",
          outOfOffice: true,
          icon: <AwayFilledIcon />,
          className: styles.statusAway,
        }}
        name="Kevin Sturgis"
        secondaryText="Away - OOF"
      />

      <Persona
        presence={{
          status: "offline",
          outOfOffice: true,
          icon: <OfflineRegularIcon />,
          className: styles.statusOffline,
        }}
        name="Kevin Sturgis"
        secondaryText="Offline - OOF"
      />
    </div>
  );
};
```

### Presence Size

A Persona supports different sizes, medium being the default.

```jsx
import * as React from "react";
import { makeStyles, Persona } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(2, max-content)",
    columnGap: "10px",
    rowGap: "10px",
  },
});

export const PresenceSize = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Persona
        size="extra-small"
        presenceOnly
        presence={{ status: "available" }}
        name="Kevin Sturgis"
        secondaryText="Available"
      />

      <Persona
        size="small"
        presenceOnly
        presence={{ status: "available" }}
        name="Kevin Sturgis"
        secondaryText="Available"
      />

      <Persona
        size="medium"
        presenceOnly
        presence={{ status: "available" }}
        name="Kevin Sturgis"
        secondaryText="Available"
      />

      <Persona
        size="large"
        presenceOnly
        presence={{ status: "available" }}
        name="Kevin Sturgis"
        secondaryText="Available"
      />

      <Persona
        size="extra-large"
        presenceOnly
        presence={{ status: "available" }}
        name="Kevin Sturgis"
        secondaryText="Available"
      />

      <Persona
        size="huge"
        presenceOnly
        presence={{ status: "available" }}
        name="Kevin Sturgis"
        secondaryText="Available"
      />
    </div>
  );
};
```

### Avatar Size

A Persona supports different sizes, medium being the default.

```jsx
import * as React from "react";
import { makeStyles, Persona } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(2, max-content)",
    columnGap: "10px",
    rowGap: "10px",
  },
});

export const AvatarSize = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Persona
        presence={{ status: "available" }}
        size="extra-small"
        name="Kevin Sturgis"
        avatar={{ color: "colorful" }}
        secondaryText="Available"
      />

      <Persona
        presence={{ status: "available" }}
        size="small"
        name="Kevin Sturgis"
        avatar={{ color: "colorful" }}
        secondaryText="Available"
      />

      <Persona
        presence={{ status: "available" }}
        size="medium"
        name="Kevin Sturgis"
        avatar={{ color: "colorful" }}
        secondaryText="Available"
      />

      <Persona
        presence={{ status: "available" }}
        size="large"
        name="Kevin Sturgis"
        avatar={{ color: "colorful" }}
        secondaryText="Available"
      />

      <Persona
        presence={{ status: "available" }}
        size="extra-large"
        name="Kevin Sturgis"
        avatar={{ color: "colorful" }}
        secondaryText="Available"
      />

      <Persona
        presence={{ status: "available" }}
        size="huge"
        name="Kevin Sturgis"
        avatar={{ color: "colorful" }}
        secondaryText="Available"
      />
    </div>
  );
};
```