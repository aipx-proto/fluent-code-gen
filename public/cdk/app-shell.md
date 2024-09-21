# AppShell

Basic setup

```jsx
import { AppShell } from "ai-studio-cdk";

export default function App() {
  return <AppShell>Hello world</AppShell>:
}
```

With breadcrumb

```jsx
import { AppShell } from "ai-studio-cdk";

export default function App() {
  return <AppShell breadcrumbs={["path", "to", "current", "page"]}>Hello world</AppShell>;
}
```

With active left nav item.

```jsx
import { AppShell } from "ai-studio-cdk";

export default function App() {
  return <AppShell activeItem="playground">{/*Playground page content */}</AppShell>;
}
```

Left nav item values must be one of the following:

```jsx
<AppShell activeItem="home">{/*Home page content */}</AppShell>
<AppShell activeItem="model-catalog">{/*Model catalog page content */}</AppShell>
<AppShell activeItem="playground">{/*Playgrounds page content */}</AppShell>
<AppShell activeItem="ai-services">{/*AI Services page content */}</AppShell>
<AppShell activeItem="code">{/*Code page content */}</AppShell>
<AppShell activeItem="fine-tuning">{/*Fine-tuning page content */}</AppShell>
<AppShell activeItem="tracing">{/*Tracing page content */}</AppShell>
<AppShell activeItem="evaluation">{/*Evaluation page content */}</AppShell>
<AppShell activeItem="content-filters ">{/*Content filters page content */}</AppShell>
<AppShell activeItem="model-deployments">{/*Model deployments page content */}</AppShell>
<AppShell activeItem="endpoints-apps">{/*Endpoints + apps page content */}</AppShell>
<AppShell activeItem="data-indexes">{/*Data + Indexes page content */}</AppShell>
```

Realistic example, with both breadcrumb and active left nav item.

```jsx
import { AppShell } from "ai-studio-cdk";

export default function App() {
  return (
    <AppShell breadcrumbs={["hub-123", "project-456", "playground"]} activeItem="playground">
      {/*Playground page content */}
    </AppShell>
  );
}
```
