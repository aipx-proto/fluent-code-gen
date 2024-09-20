import { AppShell } from "ai-studio-cdk";
import React from "react";

export default function App() {
  return (
    <AppShell breadcrumbs={["hub-123", "project-123"]} activeItem="home">
      {/* Your content here */}
    </AppShell>
  );
}
