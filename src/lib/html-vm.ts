import { runtimeWebComponents } from "../data/web-components";

const tagNames = runtimeWebComponents.map((component) => `<${component.tagName}[^>]*>`);
const anyTagNameRegex = new RegExp(`(${tagNames.join("|")})`, "g");

function replaceTagNamesInTemplateHtml(templateHtml: string): string {
  return templateHtml.replace(anyTagNameRegex, (match) => {
    const templateEntry = runtimeWebComponents.find((entry) => new RegExp(`<${entry.tagName}[^>]*>`).test(match));
    if (!templateEntry) return match;
    return `${match}\n${replaceTagNamesInTemplateHtml(templateEntry.template)}`;
  });
}

export function renderServerHtml(source: string) {
  return replaceTagNamesInTemplateHtml(source);
}

export function getStarterHtml() {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Prototype</title>
    <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah&display=swap" rel="stylesheet" />
    <style>
      body {
        margin: 0;
        font-family: "Gloria Hallelujah", cursive;
        font-size: 16px;
        line-height: 1.8;
      }
    </style>
    <script type="module" src="https://esm.sh/wired-elements@latest?deps=roughjs@4.4"></script>
  </head>
  <body>
    <!-- page content -->
  </body>
</html>
`.trim();
}
