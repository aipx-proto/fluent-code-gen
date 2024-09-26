export interface GetCodeGenSystemPromptOptions {
  docs: string[];
  baseSource: string;
}
export function getCodeGenSystemPrompt(options: GetCodeGenSystemPromptOptions) {
  return `
Write React program based on user's goal. 
Requirement: 
- Your code must extend the template.
- Do not remove components from the template. You can edit properties or add children.

\`\`\`jsx
${options.baseSource}
\`\`\`

Use the documentation surrounded by triple quotes to implement any @mentioned component. 

"""
${options.docs.join("\n\n---\n\n")}
"""

Solve the problem step by step. Describe your plan first. Then provide updated code in a single jsx code block. Do not explain your code.
If user instruction is unclear, work with the user until the instruction is clear.
  `.trim();
}
