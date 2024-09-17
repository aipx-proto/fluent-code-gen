# Setups

## Prerequisite

- Create an [Entra ID app registration](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app?tabs=certificate)
- Create an [Azure OpenAI resource](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource?pivots=web-portal)
- Create an [API Management](https://learn.microsoft.com/en-us/azure/api-management/get-started-create-service-instance)

## Entra ID

Entra ID -> App registration -> SPA Redirect URI: add `http://localhost:5200`

## API Management service

Follow [this documentation](https://learn.microsoft.com/en-us/azure/api-management/azure-openai-api-from-specification) to create the API managment

```xml
<policies>
  <inbound>
    <set-backend-service id="apim-generated-policy" backend-id="{{will_be_auto_populated_when_creating_the_endpoint}}" />
    <!-- validate-azure-ad-token rule checks if the client sent a valid Entra ID token. Customize to meet your authorization goals.
    Ref: https://learn.microsoft.com/en-us/azure/api-management/validate-azure-ad-token-policy -->
    <validate-azure-ad-token tenant-id="{{replace_with_your_tenant_id}}">
      <client-application-ids>
        <application-id>{{replace_with_your_client_id}}</application-id>
      </client-application-ids>
    </validate-azure-ad-token>
    <!-- authentication-managed-identity rule replaces the Entra ID token in the Authorization header with a managed identity token. -->
    <authentication-managed-identity resource="https://cognitiveservices.azure.com/" />
    <cors>
      <allowed-origins>
        <origin>*</origin>
      </allowed-origins>
      <allowed-methods>
        <method>*</method>
      </allowed-methods>
      <allowed-headers>
        <header>*</header>
      </allowed-headers>
      <expose-headers>
        <header>*</header>
      </expose-headers>
    </cors>
    <base />
  </inbound>
  <backend>
    <base />
  </backend>
  <outbound>
    <base />
  </outbound>
  <on-error>
    <base />
  </on-error>
</policies>
```
