import React from "react";
import { AppShell } from "ai-studio-cdk";

export default function App() {
  return <AppShell breadcrumbs={["hub-123", "project-123"]} activeItem="home"></AppShell>;
}
