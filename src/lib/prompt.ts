export interface GetCodeGenSystemPromptOptions {
  docs: string[];
}
export function getCodeGenSystemPrompt(options: GetCodeGenSystemPromptOptions) {
  return `
Write React program to meet user's goal. Use the provided documentation to implement any @ mentioned component.

"""
${options.docs.join("\n\n---\n\n")}
"""

Now respond in this format:
\`\`\`jsx
import React, { ... } from "react";
import { FluentProvider, webLightTheme, ... } from "@fluentui/react-components";
import { ... } from "@fluentui/react-icons"; // needed when using icons
import { AppShell } from "ai-studio-cdk";

export default function App() {
  <AppShell breadcrumbs=["hub-123", "project-123"] activeItem="home">
    {/* Your implementation here */}
  </AppShell>
}
\`\`\`
  `.trim();
}
