import { parse } from "yaml";

import button from "./web-components/aipx-button.md?raw";
import flexbox from "./web-components/aipx-flexbox.md?raw";

const sources = [flexbox, button];

const frontmatterPattern = /^---\n([\s\S]*?)\n---\n/;
const templateTagPattern = /(<template[^>]*>[\s\S]*?<\/template>)/;
const consecutiveNewLinesPattern = /\n{2,}/g;

export interface RuntimeComponent {
  tagName: string;
  description: string;
  doc: string;
  template: string;
}

export const runtimeWebComponents: RuntimeComponent[] = loadWebComponents();

function loadWebComponents(): RuntimeComponent[] {
  return sources.map((source) => {
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

    return { tagName, description, doc, template };
  });
}
