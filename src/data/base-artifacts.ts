import { ArtifactVersion } from "../lib/artifact";
import { generateScriptContent } from "../lib/react-vm";
import blankPageJsx from "./raw/blank.jsx?raw";

const blankPage: ArtifactVersion = {
  id: "blank@1.0.0",
  name: "Blank Page",
  source: generateScriptContent(blankPageJsx.trim()),
  isBase: true,
  isActive: true,
};

export const baseArtifacts = [blankPage];
