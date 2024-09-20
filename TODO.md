# TOOD

- Display compressed chat history
- Rebase on previous artifacts
- Handle errors
- Page header customization
- Source editor with syntax highlight
- Token counter
- Adjust documentation position in thread
- Export as file
- Export via URL
- Ease resize handle

# DONE

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
