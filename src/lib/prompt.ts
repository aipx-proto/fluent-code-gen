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

export interface GetDomEditSystemPromptOptions {
  html: string;
}
export function getDomEditSystemPrompt(options: GetDomEditSystemPromptOptions) {
  return `
Write javascript function to update the DOM based on user's goal. DOM is already loaded with following HTML:

\`\`\`html
${options.html}
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

When instruction is clear, respond with code directly. When instruction is complex, solve the problem step by step. Describe your plan first. Then write a javascript function named \`main\` that takes the dom as input and performs the updates.

Requirements:
- Do not call the function.
- Do not explain your code.
- Respond in this format:

\`\`\`javascript
function main(document) {
  /* your implementation here */
}
\`\`\`
  `.trim();
}
