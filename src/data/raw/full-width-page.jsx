import { Link } from "@fluentui/react-components";
import { AppShell, PageContent, PageGrid, PageHeader } from "ai-studio-cdk";
import React from "react";

export default function App() {
  return (
    <AppShell breadcrumbs={["hub-123", "project-123", "feature-area"]} activeItem="home">
      <PageGrid>
        <PageHeader
          fullWidth={true}
          hasBackNav={true}
          pageTitle="Title"
          details={
            <div>
              Message providing information to the user with actionable insights. <Link href="#">View documentation</Link>
            </div>
          }
        />
        <PageContent fullWidth={true}>{/* Page content goes here */}</PageContent>
      </PageGrid>
    </AppShell>
  );
}
