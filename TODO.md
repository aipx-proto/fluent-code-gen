# TOOD

- Rich docs for Fluent react
- Base versions with Page header, full width, and clamped with
- Source editor with syntax highlight
- Auto import docs based on source code
- Token counter
- Export as file
- Export via URL
- Ease resize handle

# DONE

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
