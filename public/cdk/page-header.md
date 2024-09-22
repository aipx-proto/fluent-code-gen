# PageHeader

Props:

```ts
interface PageHeaderProps {
  pageTitle: string;
  hasBackNav?: boolean;
  toolbar?: React.ReactNode;
  details?: React.ReactNode;
  fullWidth?: boolean;
}
```

## Basic header with Title only

```jsx
import { PageHeader, PageGrid } from "ai-studio-cdk";

export default const App() => <PageGrid>
  <PageHeader pageTitle="Title" />
</PageGrid>;
```

## Full width, has back nav button and details text

```jsx
import { PageHeader } from "ai-studio-cdk";
import { Link } from "@fluentui/react-components";

export default const App() => <PageGrid>
  <PageHeader
    pageTitle="Title"
    hasBackNav={true}
    fullWidth={true}
    details={<div>Message providing information to the user with actionable insights. <Link href="#">View documentation</Link></div>}
  />
</PageGrid>;
```

## With Toolbar and TabList

```jsx
import { PageGrid, PageHeader } from "ai-studio-cdk";
import { Toolbar, ToolbarButton, ToolbarDivider, TabList, Tab } from "@fluentui/react-components";
import { CircleRegular } from "@fluentui/react-icons";

export default () => (
  <PageGrid>
    <PageHeader
      pageTitle="Title"
      toolbar={
        <Toolbar>
          <ToolbarButton aria-label="Button 1" icon={<CircleRegular />} />
          <ToolbarButton aria-label="Button 2" icon={<CircleRegular />} />
          <ToolbarDivider />
          <ToolbarButton aria-label="Button 3" icon={<CircleRegular />}>
            Action
          </ToolbarButton>
          <ToolbarButton aria-label="Button 4" appearance="primary" icon={<CircleRegular />}>
            Pirmary action
          </ToolbarButton>
        </Toolbar>
      }
      details={
        <TabList defaultSelectedValue="tab1">
          <Tab value="tab1">First Tab</Tab>
          <Tab value="tab2">Second Tab</Tab>
          <Tab value="tab3">Third Tab</Tab>
        </TabList>
      }
    />
  </PageGrid>
);
```
