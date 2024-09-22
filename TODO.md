# TOOD

- "Counter Badge" cannot have space in component name
- Leaking markdown parser destorys dom
- Up arrow to get history input
- Base versions with Page header, full width, and clamped with
- Add previous chat context for RAG entity recognition
- Auto import docs based on source code
- Token counter
- Export via URL
- Patch Text documentation to avoid using the "as=" pattern
- Use proper markdown parser

# DONE

- Ease resize handle
- Heal from React VM Compiler Error (require vm refactor)
- Abort chat
- Voice interop with chat: clear chat and attachment. Use attachment
- Export as file
- Source editor with syntax highlight
- Rich docs for Fluent react
- Handle errors
- Use base as system prompt
- Rebase on previous artifacts
- Display compressed chat history
- Re-open artifact
- Voice control
- Source code viewer
- Paste screenshot
- Cleanup history
- Side nav customization
- Top nav customization

# Notes

Diff compression prompt

```txt
Edit the code based on user's goal. Requirements:

- Only respond with changed code
- Hide the unchanged code with the comment: `/** lines xx - xx unchanged */`
- Keep lines unchanged best you can
- DO NOT show line numbers in the edited code.
```
