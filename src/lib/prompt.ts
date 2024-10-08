import { runtimeWebComponents } from "../data/web-components";

export interface GetCodeGenSystemPromptOptions {
  baseSource: string;
}
export function getCodeGenSystemPrompt(options: GetCodeGenSystemPromptOptions) {
  return `
Implement user's goal in a single HTML file. Use this template:

\`\`\`html
${options.baseSource}
\`\`\`

In addition, you have access to the following web components. Prefer web components over adhoc HTML.

${runtimeWebComponents
  .map((component) =>
    `
---
tagName: <${component.tagName}>
description: ${component.description}
---

${component.doc}
`.trim()
  )
  .join("\n\n")}

Solve the problem step by step. Describe your plan first. Then provide updated code in a html code block. Do not explain your code.
  `.trim();
}
