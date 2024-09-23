export interface GetPreviewOptions {
  implementation: string;
}
export function getReactVMHtml(options: GetPreviewOptions) {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Auto IDE</title>
  <link rel="icon" type="image/svg+xml"
    href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMwQjBCMEIiIGQ9Ik0wIDBoMzJ2MzJIMHoiLz48Y2lyY2xlIGN4PSIxNiIgY3k9IjExIiByPSI1IiBmaWxsPSIjRTQzOTIxIi8+PGNpcmNsZSBjeD0iMTYiIGN5PSIxMiIgcj0iOC41IiBzdHJva2U9IiNmZmYiLz48Y2lyY2xlIGN4PSIxNiIgY3k9IjEyIiByPSI4LjUiIHN0cm9rZT0iI0M0QzRDNCIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjEyLjUiIHN0cm9rZT0iI2ZmZiIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjEyLjUiIHN0cm9rZT0iI0M0QzRDNCIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMzJ2MzJIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=" />
  <link rel="preconnect" href="https://esm.sh" />
  <script id="dependencies" type="application/json">{
    "react": "^18.3.1",
    "react-dom": "^18.3.1?bundle-deps",
    "@fluentui/react-components": "^9.54.13?bundle-deps",
    "@fluentui/react-icons": "^2.0.258?bundle-deps",
    "styled-components": "^6.1.13?bundle-deps",
    "ai-studio-cdk": "^0.0.18?bundle-deps"
  }</script>
  <script src="https://esm.sh/ai-studio-cdk@0.0.18/dist/react-vm.js?raw" crossorigin></script>
  <style>

  </style>
</head>

<body>
  <div id="root"></div>
  <script type="text/babel">
${options.implementation}
  </script>
</body>

</html>
  `;
}

export function getReactVMJsx(implementation: string) {
  return `
import ReactDOM from "react-dom/client";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
${implementation}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
      <App />
    </FluentProvider>
  </React.StrictMode>
);
`.trim();
}
