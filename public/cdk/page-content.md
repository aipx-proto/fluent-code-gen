# PageContent

Props:

```ts
interface PageHeaderProps {
  fullWidth?: boolean;
  children?: React.ReactNode;
}
```

## Basic usage

```jsx
import { PageGrid, PageHeader, PageContent } from "ai-studio-cdk";

export default function App() {
  return (
    <PageGrid>
      <PageHeader pageTitle="Title" />
      <PageContent>{/* replace with main content */}</PageContent>
    </PageGrid>
  );
}
```

## Full width

Full width content is useful in multi-column layouts, such as chat playground and wide dashboards.
`PageHeader` and `PageContent` should generally have the same `fullWidth` value.

```jsx
import { PageGrid, PageHeader, PageContent } from "ai-studio-cdk";

export default function App() {
  return (
    <PageGrid>
      <PageHeader fullWidth={true} pageTitle="Title" />
      <PageContent fullWidth={true}>{/* replace with main content */}</PageContent>
    </PageGrid>
  );
}
```
