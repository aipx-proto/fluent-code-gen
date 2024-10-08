import { parse } from "yaml";

import flexboxMd from "./web-components/aipx-flexbox.md?raw";

const sources = [flexboxMd];
const frontmatterPattern = /^---\n([\s\S]*?)\n---\n/;
const templateTagPattern = /(<template[^>]*>[\s\S]*?<\/template>)/;
const consecutiveNewLinesPattern = /\n{2,}/g;

export interface RuntimeComponent {}
export async function load() {
  sources.map((source) => {
    let data = {};
    let content = source;
    let template = "";

    const frontMatterMatch = content.match(frontmatterPattern);
    if (frontMatterMatch) {
      data = parse(frontMatterMatch[1]);
      content = content.slice(frontMatterMatch[0].length).trim();
    }

    const templateMatch = content.match(templateTagPattern);
    if (templateMatch) {
      // template can be anywhere in the file
      template = templateMatch[1].trim();
      content = content.replace(templateTagPattern, "");
    }

    const doc = content.replace(consecutiveNewLinesPattern, "\n\n").trim();

    const { tagName, description } = data as any;
    if (!tagName || !description) {
      throw new Error("Missing tagName or description in frontmatter");
    }

    console.log({ tagName, description, doc, template });
  });
}