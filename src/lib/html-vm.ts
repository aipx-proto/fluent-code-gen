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
  </head>
  <body>
    <!-- page content -->
  </body>
</html>
`.trim();
}
