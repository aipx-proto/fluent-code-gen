import { ArtifactVersion } from "../lib/artifact";
import { getStarterHtml } from "../lib/html-vm";

const blankPage: ArtifactVersion = {
  id: "blank@1.0.0",
  name: "Blank Page",
  minimumCode: getStarterHtml(),
  isBase: true,
  isActive: true,
};

export const baseArtifacts = [blankPage];
