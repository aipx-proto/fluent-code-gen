import { Toolbar, ToolbarButton, ToolbarDivider } from "@fluentui/react-components";
import { CircleRegular } from "@fluentui/react-icons";
import { AppShell, PageContent, PageGrid, PageHeader } from "ai-studio-cdk";
import React from "react";

export default function App() {
  return (
    <AppShell breadcrumbs={["hub-123", "project-123"]} activeItem="home">
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
        />
        <PageContent>{/* Page content goes here */}</PageContent>
      </PageGrid>
    </AppShell>
  );
}
