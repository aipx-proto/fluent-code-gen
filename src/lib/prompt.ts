export interface GetCodeGenSystemPromptOptions {
  docs: string[];
  baseSource: string;
}
export function getCodeGenSystemPrompt(options: GetCodeGenSystemPromptOptions) {
  return `
Update the following React program based on user's goal.

\`\`\`jsx
${options.baseSource}
\`\`\`

Use the documentation surrounded by triple quotes to implement any @mentioned component. Decline a change when there isn't enough documentation.

"""
${options.docs.join("\n\n---\n\n")}
"""

Solve the problem step by step. Describe your plan first. Then provide any updated jsx code. Do not explain your code.
  `.trim();
}
