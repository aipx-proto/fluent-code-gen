import { ArtifactVersion } from "../lib/artifact";
import { getReactVMJsx } from "../lib/react-vm";
import blankPageJsx from "./raw/blank.jsx?raw";
import fullWidthPageJsx from "./raw/full-width-page.jsx?raw";
import genericPageJsx from "./raw/generic-page.jsx?raw";
import tabbedPageJsx from "./raw/tabbed-page.jsx?raw";

const blankPage: ArtifactVersion = {
  id: "blank@1.0.0",
  name: "Blank Page",
  minimumCode: getReactVMJsx(blankPageJsx.trim()),
  isBase: true,
  isActive: false,
};

const genericPage: ArtifactVersion = {
  id: "generic-page@1.0.0",
  name: "Generic Page",
  minimumCode: getReactVMJsx(genericPageJsx.trim()),
  isBase: true,
  isActive: true,
};

const tabbedPage: ArtifactVersion = {
  id: "tabbed-page@1.0.0",
  name: "Tabbed Page",
  minimumCode: getReactVMJsx(tabbedPageJsx.trim()),
  isBase: true,
  isActive: false,
};

const fullWidthPage: ArtifactVersion = {
  id: "full-width-page@1.0.0",
  name: "Full-width Page",
  minimumCode: getReactVMJsx(fullWidthPageJsx.trim()),
  isBase: true,
  isActive: false,
};

export const baseArtifacts = [blankPage, genericPage, tabbedPage, fullWidthPage];
