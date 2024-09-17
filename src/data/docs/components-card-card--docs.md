# Card

```jsx
import * as React from "react";

import {
  makeStyles,
  Body1,
  Caption1,
  Button,
} from "@fluentui/react-components";
import { ArrowReplyRegular, ShareRegular } from "@fluentui/react-icons";
import {
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  card: {
    margin: "auto",
    width: "720px",
    maxWidth: "100%",
  },
});

export const Default = () => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardHeader
        image={
          <img
            src={resolveAsset("avatar_elvia.svg")}
            alt="Elvia Atkins avatar picture"
          />
        }
        header={
          <Body1>
            <b>Elvia Atkins</b> mentioned you
          </Body1>
        }
        description={<Caption1>5h ago · About us - Overview</Caption1>}
      />

      <CardPreview
        logo={
          <img src={resolveAsset("docx.png")} alt="Microsoft Word document" />
        }
      >
        <img
          src={resolveAsset("doc_template.png")}
          alt="Preview of a Word document: About Us - Overview"
        />
      </CardPreview>

      <CardFooter>
        <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
        <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
      </CardFooter>
    </Card>
  );
};
```

### Default

```jsx
import * as React from "react";

import {
  makeStyles,
  Body1,
  Caption1,
  Button,
} from "@fluentui/react-components";
import { ArrowReplyRegular, ShareRegular } from "@fluentui/react-icons";
import {
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  card: {
    margin: "auto",
    width: "720px",
    maxWidth: "100%",
  },
});

export const Default = () => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardHeader
        image={
          <img
            src={resolveAsset("avatar_elvia.svg")}
            alt="Elvia Atkins avatar picture"
          />
        }
        header={
          <Body1>
            <b>Elvia Atkins</b> mentioned you
          </Body1>
        }
        description={<Caption1>5h ago · About us - Overview</Caption1>}
      />

      <CardPreview
        logo={
          <img src={resolveAsset("docx.png")} alt="Microsoft Word document" />
        }
      >
        <img
          src={resolveAsset("doc_template.png")}
          alt="Preview of a Word document: About Us - Overview"
        />
      </CardPreview>

      <CardFooter>
        <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
        <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
      </CardFooter>
    </Card>
  );
};
```

### Orientation

Cards can have a different anatomy and be displayed either vertically (by default) or horizontally.

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Caption1,
  Text,
  tokens,
  Subtitle1,
} from "@fluentui/react-components";
import { MoreHorizontal20Regular } from "@fluentui/react-icons";
import { Card, CardHeader, CardPreview } from "@fluentui/react-components";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  main: {
    gap: "36px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },

  card: {
    width: "360px",
    maxWidth: "100%",
    height: "fit-content",
  },

  section: {
    width: "fit-content",
  },

  title: { margin: "0 0 12px" },

  horizontalCardImage: {
    width: "64px",
    height: "64px",
  },

  headerImage: {
    borderRadius: "4px",
    maxWidth: "44px",
    maxHeight: "44px",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  text: { margin: "0" },
});

const Title = ({ children }: React.PropsWithChildren<{}>) => {
  const styles = useStyles();

  return (
    <Subtitle1 as="h4" block className={styles.title}>
      {children}
    </Subtitle1>
  );
};

export const Orientation = () => {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <section className={styles.section}>
        <Title>'vertical' (Default)</Title>
        <p>With image as part of header</p>

        <Card className={styles.card}>
          <CardHeader
            image={
              <img
                className={styles.headerImage}
                src={resolveAsset("app_logo.svg")}
                alt="App Name Document"
              />
            }
            header={<Text weight="semibold">App Name</Text>}
            description={
              <Caption1 className={styles.caption}>Developer</Caption1>
            }
            action={
              <Button
                appearance="transparent"
                icon={<MoreHorizontal20Regular />}
                aria-label="More options"
              />
            }
          />

          <p className={styles.text}>
            Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw.
            Marshmallow pastry jujubes toffee sugar plum.
          </p>
        </Card>
      </section>

      <section className={styles.section}>
        <Title>'horizontal'</Title>
        <p>With image as part of preview</p>

        <Card className={styles.card} orientation="horizontal">
          <CardPreview className={styles.horizontalCardImage}>
            <img
              className={styles.horizontalCardImage}
              src={resolveAsset("app_logo.svg")}
              alt="App Name Document"
            />
          </CardPreview>

          <CardHeader
            header={<Text weight="semibold">App Name</Text>}
            description={
              <Caption1 className={styles.caption}>Developer</Caption1>
            }
            action={
              <Button
                appearance="transparent"
                icon={<MoreHorizontal20Regular />}
                aria-label="More options"
              />
            }
          />
        </Card>
      </section>
    </div>
  );
};
```

### Size

Size options are mainly to provide variety, and consistency when using cards for different usages. It relates to padding and border-radius and not so much the actual dimensions of the card.

```jsx
import * as React from "react";
import {
  makeStyles,
  tokens,
  Caption1,
  Subtitle1,
  mergeClasses,
  Text,
} from "@fluentui/react-components";
import { Card, CardHeader, CardProps } from "@fluentui/react-components";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    columnGap: "16px",
    rowGap: "36px",
  },

  title: { margin: "0 0 12px" },

  card: {
    width: "300px",
    maxWidth: "100%",
    height: "fit-content",
  },

  flex: {
    gap: "4px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  appIcon: {
    borderRadius: "4px",
    height: "32px",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  cardFooter: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const Title = ({ children }: React.PropsWithChildren<{}>) => {
  const styles = useStyles();

  return (
    <Subtitle1 as="h4" block className={styles.title}>
      {children}
    </Subtitle1>
  );
};

const CardExample = (props: CardProps) => {
  const styles = useStyles();

  return (
    <Card className={styles.card} {...props}>
      <header className={styles.flex}>
        <img
          className={styles.appIcon}
          src={resolveAsset("logo.svg")}
          alt="Application one logo"
        />
        <img
          className={styles.appIcon}
          src={resolveAsset("logo2.svg")}
          alt="Application two logo"
        />
      </header>

      <CardHeader
        header={
          <Text weight="semibold">
            Alert in Teams when a new document is uploaded in channel
          </Text>
        }
        description={
          <Caption1 className={styles.caption}>By Microsoft</Caption1>
        }
      />

      <footer className={mergeClasses(styles.flex, styles.cardFooter)}>
        <span>Automated</span>
        <span>3290</span>
      </footer>
    </Card>
  );
};

export const Size = () => {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <section>
        <Title>'small'</Title>
        <CardExample size="small" />
      </section>

      <section>
        <Title>'medium' (Default)</Title>
        <CardExample size="medium" />
      </section>

      <section>
        <Title>'large'</Title>
        <CardExample size="large" />
      </section>
    </div>
  );
};
```

### Appearance

Cards can have different styles depending on the situation and where it is placed.

```jsx
import * as React from "react";
import {
  makeStyles,
  tokens,
  Button,
  Text,
  Caption1,
  Subtitle1,
  Body1,
  mergeClasses,
} from "@fluentui/react-components";
import { MoreHorizontal20Regular } from "@fluentui/react-icons";
import { Card, CardHeader, CardProps } from "@fluentui/react-components";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  main: {
    gap: "36px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },

  title: { margin: "0 0 12px" },

  description: { margin: "0 0 12px" },

  card: {
    width: "480px",
    maxWidth: "100%",
    height: "fit-content",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  logo: {
    borderRadius: "4px",
    width: "48px",
    height: "48px",
  },

  text: { margin: "0" },
});

const ExampleHeader = ({ title, description }: Record<string, string>) => {
  const styles = useStyles();

  return (
    <header>
      {title ? (
        <Subtitle1 as="h4" block className={styles.title}>
          {title}
        </Subtitle1>
      ) : null}

      {description ? (
        <Body1 as="p" block className={styles.description}>
          {description}
        </Body1>
      ) : null}
    </header>
  );
};

const CardExample = ({ className, ...props }: CardProps) => {
  const styles = useStyles();

  const onClick = React.useCallback(() => console.log("Interactive!"), []);

  return (
    <Card
      {...props}
      className={mergeClasses(className, styles.card)}
      onClick={onClick}
    >
      <CardHeader
        image={
          <img
            className={styles.logo}
            src={resolveAsset("app_logo.svg")}
            alt="App name logo"
          />
        }
        header={<Text weight="semibold">App Name</Text>}
        description={<Caption1 className={styles.caption}>Developer</Caption1>}
        action={
          <Button
            appearance="transparent"
            icon={<MoreHorizontal20Regular />}
            aria-label="More options"
          />
        }
      />

      <p className={styles.text}>
        Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw.
        Marshmallow pastry jujubes toffee sugar plum.
      </p>
    </Card>
  );
};

export const Appearance = () => {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <section>
        <ExampleHeader
          title="Filled (Default)"
          description="This is the default style to use for cards. Use this style variant for most of your card
          designs."
        />

        <CardExample />
      </section>

      <section>
        <ExampleHeader
          title="Filled Alternative"
          description="Use if your card is being displayed on a lighter gray or white surface. This ensures that you
          have adequate contrast between the card surface and the background of the application."
        />

        <CardExample appearance="filled-alternative" />
      </section>

      <section>
        <ExampleHeader
          title="Outline"
          description="Use when you don't want a filled background color but a discernable outline (border) on the
          card."
        />

        <CardExample appearance="outline" />
      </section>

      <section>
        <ExampleHeader
          title="Subtle"
          description="This variant doesn't have a background or border for the card container. However, it does include
          interaction states that display a visible footprint when interacting with the card item."
        />

        <CardExample appearance="subtle" />
      </section>
    </div>
  );
};
```

### Selectable

Cards can be selectable and clicking the card surface can toggle its state to selected.

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Caption1,
  tokens,
  Text,
} from "@fluentui/react-components";
import { MoreHorizontal20Regular } from "@fluentui/react-icons";
import {
  Card,
  CardHeader,
  CardPreview,
  CardProps,
} from "@fluentui/react-components";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  main: {
    gap: "16px",
    display: "flex",
    flexWrap: "wrap",
  },

  card: {
    width: "400px",
    maxWidth: "100%",
    height: "fit-content",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  smallRadius: { borderRadius: tokens.borderRadiusSmall },

  grayBackground: {
    backgroundColor: tokens.colorNeutralBackground3,
  },

  logoBadge: {
    padding: "5px",
    borderRadius: tokens.borderRadiusSmall,
    backgroundColor: "#FFF",
    boxShadow:
      "0px 1px 2px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)",
  },
});

const CardExample = (props: CardProps) => {
  const styles = useStyles();

  return (
    <Card className={styles.card} {...props}>
      <CardPreview
        className={styles.grayBackground}
        logo={
          <img
            className={styles.logoBadge}
            src={resolveAsset("logo3.svg")}
            alt="Figma app logo"
          />
        }
      >
        <img
          className={styles.smallRadius}
          src={resolveAsset("office1.png")}
          alt="Presentation Preview"
        />
      </CardPreview>

      <CardHeader
        header={<Text weight="semibold">iOS App Prototype</Text>}
        description={
          <Caption1 className={styles.caption}>You created 53m ago</Caption1>
        }
        action={
          <Button
            appearance="transparent"
            icon={<MoreHorizontal20Regular />}
            aria-label="More actions"
          />
        }
      />
    </Card>
  );
};

export const Selectable = () => {
  const styles = useStyles();

  const [selected1, setSelected1] = React.useState(false);
  const [selected2, setSelected2] = React.useState(false);

  return (
    <div className={styles.main}>
      <CardExample
        selected={selected1}
        onSelectionChange={(_, { selected }) => setSelected1(selected)}
      />
      <CardExample
        selected={selected2}
        onSelectionChange={(_, { selected }) => setSelected2(selected)}
      />
    </div>
  );
};
```

### Selectable Indicator

By default, selectable cards do not include any element to represent its selection state. For example, checkboxes can be composed together as an additional element by using the `floatingAction` property.

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Caption1,
  tokens,
  Checkbox,
  Text,
} from "@fluentui/react-components";
import { MoreHorizontal20Regular } from "@fluentui/react-icons";
import { Card, CardHeader, CardPreview } from "@fluentui/react-components";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const flex = {
  gap: "16px",
  display: "flex",
};

const useStyles = makeStyles({
  main: {
    ...flex,
    flexDirection: "column",
  },

  row: {
    ...flex,
    flexWrap: "wrap",
  },

  card: {
    width: "400px",
    maxWidth: "100%",
    height: "fit-content",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  smallRadius: { borderRadius: tokens.borderRadiusSmall },

  grayBackground: {
    backgroundColor: tokens.colorNeutralBackground3,
  },

  logoBadge: {
    padding: "5px",
    borderRadius: tokens.borderRadiusSmall,
    backgroundColor: "#FFF",
    boxShadow:
      "0px 1px 2px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)",
  },

  actions: {
    display: "flex",
  },
});

export const SelectableIndicator = () => {
  const styles = useStyles();

  const [selected1, setSelected1] = React.useState(false);
  const [selected2, setSelected2] = React.useState(false);
  const [selected3, setSelected3] = React.useState(false);
  const [selected4, setSelected4] = React.useState(false);

  const setCheckboxState = React.useCallback(
    ({ selected, checked }, setFn) => setFn(!!(selected || checked)),
    []
  );

  const onSelected1Change = React.useCallback(
    (_, state) => setCheckboxState(state, setSelected1),
    [setCheckboxState]
  );
  const onSelected2Change = React.useCallback(
    (_, state) => setCheckboxState(state, setSelected2),
    [setCheckboxState]
  );
  const onSelected3Change = React.useCallback(
    (_, state) => setCheckboxState(state, setSelected3),
    [setCheckboxState]
  );
  const onSelected4Change = React.useCallback(
    (_, state) => setCheckboxState(state, setSelected4),
    [setCheckboxState]
  );

  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <Card
          className={styles.card}
          floatingAction={
            <Checkbox onChange={onSelected1Change} checked={selected1} />
          }
          selected={selected1}
          onSelectionChange={onSelected1Change}
        >
          <CardPreview
            className={styles.grayBackground}
            logo={
              <img
                className={styles.logoBadge}
                src={resolveAsset("logo3.svg")}
                alt="Figma app logo"
              />
            }
          >
            <img
              className={styles.smallRadius}
              src={resolveAsset("office1.png")}
              alt="Presentation Preview"
            />
          </CardPreview>

          <CardHeader
            header={<Text weight="semibold">iOS App Prototype</Text>}
            description={
              <Caption1 className={styles.caption}>
                You created 53m ago
              </Caption1>
            }
            action={
              <Button
                appearance="transparent"
                icon={<MoreHorizontal20Regular />}
                aria-label="More actions"
              />
            }
          />
        </Card>

        <Card
          className={styles.card}
          floatingAction={
            <Checkbox onChange={onSelected2Change} checked={selected2} />
          }
          selected={selected2}
          onSelectionChange={onSelected2Change}
        >
          <CardPreview
            className={styles.grayBackground}
            logo={
              <img
                className={styles.logoBadge}
                src={resolveAsset("logo3.svg")}
                alt="Figma app logo"
              />
            }
          >
            <img
              className={styles.smallRadius}
              src={resolveAsset("office1.png")}
              alt="Presentation Preview"
            />
          </CardPreview>

          <CardHeader
            header={<Text weight="semibold">iOS App Prototype</Text>}
            description={
              <Caption1 className={styles.caption}>
                You created 53m ago
              </Caption1>
            }
            action={
              <Button
                appearance="transparent"
                icon={<MoreHorizontal20Regular />}
                aria-label="More actions"
              />
            }
          />
        </Card>
      </div>

      <div className={styles.row}>
        <Card
          className={styles.card}
          selected={selected3}
          onSelectionChange={onSelected3Change}
          floatingAction={
            <Checkbox onChange={onSelected3Change} checked={selected3} />
          }
        >
          <CardHeader
            image={
              <img src={resolveAsset("docx.png")} alt="Microsoft Word Logo" />
            }
            header={<Text weight="semibold">Secret Project Briefing</Text>}
            description={
              <Caption1 className={styles.caption}>
                OneDrive &gt; Documents
              </Caption1>
            }
          />
        </Card>

        <Card
          className={styles.card}
          selected={selected4}
          onSelectionChange={onSelected4Change}
          floatingAction={
            <Checkbox onChange={onSelected4Change} checked={selected4} />
          }
        >
          <CardHeader
            image={
              <img src={resolveAsset("xlsx.png")} alt="Microsoft Excel Logo" />
            }
            header={<Text weight="semibold">Team Budget</Text>}
            description={
              <Caption1 className={styles.caption}>
                OneDrive &gt; Spreadsheets
              </Caption1>
            }
          />
        </Card>
      </div>
    </div>
  );
};
```

### With Action

When giving a card a top-level click handler, it's important to ensure the same action can be done by a button or link within the Card. This ensures the action is accesible to screen reader, touch screen reader, keyboard, and voice control users.

```jsx
import * as React from "react";
import {
  Body1,
  Button,
  Caption1,
  Card,
  CardHeader,
  CardFooter,
  CardPreview,
  Link,
  makeStyles,
  Subtitle1,
  tokens,
} from "@fluentui/react-components";
import { MoreHorizontal20Regular, Open16Regular } from "@fluentui/react-icons";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  main: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    columnGap: "16px",
    rowGap: "36px",
  },

  title: { margin: "0 0 12px" },

  description: { margin: "0 0 12px" },

  card: {
    width: "400px",
    maxWidth: "100%",
    height: "fit-content",
  },

  link: {
    color: tokens.colorNeutralForeground1,

    ":hover": {
      color: tokens.colorNeutralForeground1,
      textDecoration: "none",
    },
  },

  text: { margin: "0" },
});

const Header = ({ title, description }: Record<string, string>) => {
  const styles = useStyles();

  return (
    <>
      {title ? (
        <Subtitle1 as="h4" block className={styles.title}>
          {title}
        </Subtitle1>
      ) : null}

      {description ? (
        <Body1 as="p" block className={styles.description}>
          {description}
        </Body1>
      ) : null}
    </>
  );
};

export const WithAction = () => {
  const styles = useStyles();
  const linkRef = React.useRef<HTMLAnchorElement>(null);

  const onActionCardKeyDown = (ev: React.KeyboardEvent<HTMLDivElement>) => {
    if (ev.key === "Enter") {
      onActionCardClick();
    }
  };

  const onActionCardClick = () => {
    alert("Opened Classroom Collaboration app");
  };

  const onLinkedCardClick = () => {
    linkRef.current?.click();
  };

  const onLinkedCardKeyDown = (ev: React.KeyboardEvent<HTMLDivElement>) => {
    if (ev.key === "Enter") {
      onLinkedCardClick();
    }
  };

  return (
    <div className={styles.main}>
      <section>
        <Header
          title="Card with click event"
          description="This card has both a root click event and an Open button that performs the same action. Adding enter key handling to the card root is optional since the Open button also provides keyboard access."
        />

        <Card
          className={styles.card}
          onClick={onActionCardClick}
          onKeyDown={onActionCardKeyDown}
          focusMode="off"
        >
          <CardPreview>
            <img
              src={resolveAsset("office2.png")}
              alt="Sales Presentation Preview"
            />
          </CardPreview>

          <CardHeader
            image={
              <img
                src={resolveAsset("pptx.png")}
                width="32px"
                height="32px"
                alt="Microsoft PowerPoint logo"
              />
            }
            header={
              <Body1>
                <b>App Name</b>
              </Body1>
            }
            description={<Caption1>Developer</Caption1>}
            action={
              <Button
                appearance="transparent"
                icon={<MoreHorizontal20Regular />}
                aria-label="More options"
              />
            }
          />

          <p className={styles.text}>
            Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw.
            Marshmallow pastry jujubes toffee sugar plum.
          </p>

          <CardFooter>
            <Button
              appearance="primary"
              icon={<Open16Regular />}
              onClick={onActionCardClick}
            >
              Open
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section>
        <Header
          title="Linked Card"
          description="When a card doesn't have a separate button within its contents, it usually makes the most sense for the title text of the card to become the additional interactive element (a link in this example)."
        />

        <Card
          className={styles.card}
          onClick={onLinkedCardClick}
          onKeyDown={onLinkedCardKeyDown}
          focusMode="off"
        >
          <CardPreview>
            <img
              src={resolveAsset("office2.png")}
              alt="Sales Presentation Preview"
            />
          </CardPreview>

          <CardHeader
            image={
              <img
                src={resolveAsset("pptx.png")}
                width="32px"
                height="32px"
                alt="Microsoft PowerPoint logo"
              />
            }
            header={
              <Link
                href="https://www.microsoft.com/"
                target="_blank"
                ref={linkRef}
                className={styles.link}
              >
                <b>App Name</b>
              </Link>
            }
            description={<Caption1>Developer</Caption1>}
            action={
              <Button
                appearance="transparent"
                icon={<MoreHorizontal20Regular />}
                aria-label="More options"
              />
            }
          />
        </Card>
      </section>
    </div>
  );
};
```

### Focus Mode

Cards can be focusable and manage the focus of their contents in several different strategies. Using the `focusMode` prop, we can achieve the following:

```jsx
import * as React from "react";
import {
  makeStyles,
  Button,
  Caption1,
  Body1,
  Subtitle1,
} from "@fluentui/react-components";
import {
  MoreHorizontal20Regular,
  Open16Regular,
  Share16Regular,
} from "@fluentui/react-icons";
import {
  Card,
  CardHeader,
  CardFooter,
  CardPreview,
  CardProps,
} from "@fluentui/react-components";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  main: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    columnGap: "16px",
    rowGap: "36px",
  },

  title: { margin: "0 0 12px" },

  description: { margin: "0 0 12px" },

  card: {
    width: "400px",
    maxWidth: "100%",
    height: "fit-content",
  },

  text: { margin: "0" },
});

const Header = ({ title, description }: Record<string, string>) => {
  const styles = useStyles();

  return (
    <>
      {title ? (
        <Subtitle1 as="h4" block className={styles.title}>
          {title}
        </Subtitle1>
      ) : null}

      {description ? (
        <Body1 as="p" block className={styles.description}>
          {description}
        </Body1>
      ) : null}
    </>
  );
};

const CardExample = (props: CardProps) => {
  const styles = useStyles();

  return (
    <Card className={styles.card} {...props}>
      <CardPreview>
        <img
          src={resolveAsset("sales_template.png")}
          alt="Sales Presentation Preview"
        />
      </CardPreview>

      <CardHeader
        image={
          <img
            src={resolveAsset("pptx.png")}
            width="32px"
            height="32px"
            alt="Microsoft PowerPoint logo"
          />
        }
        header={
          <Body1>
            <b>App Name</b>
          </Body1>
        }
        description={<Caption1>Developer</Caption1>}
        action={
          <Button
            appearance="transparent"
            icon={<MoreHorizontal20Regular />}
            aria-label="More options"
          />
        }
      />

      <p className={styles.text}>
        Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw.
        Marshmallow pastry jujubes toffee sugar plum.
      </p>

      <CardFooter>
        <Button appearance="primary" icon={<Open16Regular />}>
          Open
        </Button>
        <Button icon={<Share16Regular />}>Share</Button>
      </CardFooter>
    </Card>
  );
};

export const FocusMode = () => {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <section>
        <Header
          title="'off' (Default)"
          description="The contents might still be focusable, but the Card won't manage the focus of its contents or be
          focusable."
        />

        <CardExample />
      </section>

      <section>
        <Header
          title="'no-tab'"
          description="The Card will be focusable and trap the focus. You can use Tab to navigate between the contents
          and escaping focus only by pressing the Esc key."
        />

        <CardExample focusMode="no-tab" />
      </section>

      <section>
        <Header
          title="'tab-exit'"
          description="The Card will be focusable and trap the focus, but release it on an Esc or Tab key press."
        />

        <CardExample focusMode="tab-exit" />
      </section>

      <section>
        <Header
          title="'tab-only'"
          description="The Card will not trap focus but will still be focusable and allow Tab navigation of its
          contents."
        />

        <CardExample focusMode="tab-only" />
      </section>
    </div>
  );
};
```

### Templates

Cards can be composed with other components to build rich elements for a page.

```jsx
import * as React from "react";
import {
  makeStyles,
  tokens,
  Button,
  Text,
  Caption1,
  Badge,
  Checkbox,
  Body1,
  mergeClasses,
} from "@fluentui/react-components";
import {
  AlertUrgent16Filled,
  Attach16Regular,
  CheckmarkCircle16Regular,
  CircleHalfFill16Regular,
  Comment16Regular,
  MoreHorizontal20Regular,
} from "@fluentui/react-icons";
import { Card, CardHeader, CardPreview } from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    gap: "16px",
    display: "flex",
    flexWrap: "wrap",
  },

  card: {
    width: "280px",
    height: "fit-content",
  },

  flex: {
    gap: "4px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  labels: { gap: "6px" },

  footer: { gap: "12px" },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  taskCheckbox: {
    display: "flex",
    alignItems: "flex-start",
  },

  grid: {
    gap: "16px",
    display: "flex",
    flexDirection: "column",
  },
});

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const excelLogo = resolveAsset("xlsx.png");
const wordLogo = resolveAsset("docx.png");
const powerpointLogoURL = resolveAsset("pptx.png");

export const Templates = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <header className={mergeClasses(styles.flex, styles.labels)}>
          <Badge color="severe" shape="rounded" appearance="tint">
            Red
          </Badge>

          <Badge color="success" shape="rounded" appearance="tint">
            Green
          </Badge>

          <Badge color="brand" shape="rounded" appearance="tint">
            Blue
          </Badge>
        </header>

        <div className={styles.taskCheckbox}>
          <Checkbox id="task-1" />

          <label htmlFor="task-1">
            <Text block weight="semibold">
              Task title
            </Text>

            <Caption1 block className={styles.caption}>
              Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw.
              Marshmallow pastry jujubes toffee sugar plum.
            </Caption1>
          </label>
        </div>

        <div className={styles.taskCheckbox}>
          <Checkbox id="task-2" />

          <label htmlFor="task-2">
            <Text block weight="semibold">
              Task title
            </Text>

            <Caption1 block className={styles.caption}>
              Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw.
              Marshmallow pastry jujubes toffee sugar plum.
            </Caption1>
          </label>
        </div>

        <footer className={mergeClasses(styles.flex, styles.footer)}>
          <AlertUrgent16Filled primaryFill="#C4314B" />
          <CircleHalfFill16Regular primaryFill="#0078DB" />

          <div className={styles.flex}>
            <Attach16Regular />
            <Body1>4</Body1>
          </div>

          <div className={styles.flex}>
            <CheckmarkCircle16Regular />
            <Body1>2/12</Body1>
          </div>

          <Comment16Regular />
        </footer>
      </Card>

      <Card className={styles.card}>
        <CardPreview>
          <img
            src={resolveAsset("intelligence.png")}
            alt="Intelligence - Design to Amplify"
          />
        </CardPreview>
      </Card>

      <div className={styles.grid} role="list">
        <Card className={styles.card} size="small" role="listitem">
          <CardHeader
            image={{
              as: "img",
              src: powerpointLogoURL,
              alt: "PowerPoint app logo",
            }}
            header={<Text weight="semibold">Team Offsite 2020</Text>}
            description={
              <Caption1 className={styles.caption}>
                OneDrive &gt; Presentations
              </Caption1>
            }
            action={
              <Button
                appearance="transparent"
                icon={<MoreHorizontal20Regular />}
              />
            }
          />
        </Card>

        <Card className={styles.card} size="small" role="listitem">
          <CardHeader
            image={{ as: "img", src: excelLogo, alt: "Excel app logo" }}
            header={<Text weight="semibold">Team Budget</Text>}
            description={
              <Caption1 className={styles.caption}>
                OneDrive &gt; Spreadsheets
              </Caption1>
            }
            action={
              <Button
                appearance="transparent"
                icon={<MoreHorizontal20Regular />}
              />
            }
          />
        </Card>

        <Card className={styles.card} size="small" role="listitem">
          <CardHeader
            image={{ as: "img", src: wordLogo, alt: "Word app logo" }}
            header={<Text weight="semibold">Secret Project Briefing</Text>}
            description={
              <Caption1 className={styles.caption}>
                OneDrive &gt; Documents
              </Caption1>
            }
            action={
              <Button
                appearance="transparent"
                icon={<MoreHorizontal20Regular />}
              />
            }
          />
        </Card>
      </div>
    </div>
  );
};
```