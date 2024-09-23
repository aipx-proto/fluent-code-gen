import { getBearerTokenProvider, InteractiveBrowserCredential } from "@azure/identity";
import { AzureOpenAI } from "openai";

const credential = new InteractiveBrowserCredential({
  tenantId: "72f988bf-86f1-41af-91ab-2d7cd011db47",
  clientId: "6e4c509e-2b65-40dc-b461-beb2c824f63a",
  redirectUri: location.href,
  loginStyle: "redirect",
});

export async function initializeAuthenticatedApp() {
  await credential.authenticate([]);
}

export async function logout() {
  // manual remove all local storage
  localStorage.clear();
  sessionStorage.clear();

  // manually clear cookies
  const cookies = document.cookie.split(";");
  cookies.forEach((cookie) => {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  });
}

const azureADTokenProvider = getBearerTokenProvider(credential, []);
export const client = new AzureOpenAI({ azureADTokenProvider, apiVersion: "2024-07-01-preview", endpoint: "https://proto-api.azure-api.net" });

export async function getAzureAccessToken() {
  const token = await azureADTokenProvider();
  return token;
}
