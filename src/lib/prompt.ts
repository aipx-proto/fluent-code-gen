export interface GetCodeGenSystemPromptOptions {
  baseSource: string;
}
export function getCodeGenSystemPrompt(options: GetCodeGenSystemPromptOptions) {
  return `
Implement user's goal in a single HTML file. Use this template:

\`\`\`html
${options.baseSource}
\`\`\`

Solve the problem step by step. Describe your plan first. Then provide updated code in a html code block. Do not explain your code.
  `.trim();
}
