export function handlePlayerTabSwitch(action: string, previewIFrame: HTMLIFrameElement, sourceElement: HTMLElement) {
  if (action !== "open-preview" && action !== "open-source") return;
  switch (action) {
    case "open-preview": {
      previewIFrame.dataset.activeTab = "true";
      sourceElement.dataset.activeTab = "false";
      break;
    }
    case "open-source": {
      previewIFrame.dataset.activeTab = "false";
      sourceElement.dataset.activeTab = "true";
      break;
    }
  }
}
