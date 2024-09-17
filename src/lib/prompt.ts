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
import React, { ... } from 'react'
import ReactDOM from 'react-dom/client'
import { FluentProvider, webLightTheme, ... } from '@fluentui/react-components'

function App() {
  /** Your code here */
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
      <App />
    </FluentProvider>
  </React.StrictMode>)
\`\`\`
  `.trim();
}
