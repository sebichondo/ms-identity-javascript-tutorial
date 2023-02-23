/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */
const msalConfig = {
    auth: {
        clientId: "0f78d93e-ac10-48ac-b22f-866342a16b91",
        authority: "https://login.microsoftonline.com/1138f922-44fa-4f84-b647-488ad8e11040",
        redirectUri: "http://localhost:3000",
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
};

// Add here the endpoints and scopes for the web API you would like to use.
const apiConfig = {
    uri: "http://localhost:5000/api", // e.g. http://localhost:5000/api
    scopes: [ "api://3f643443-0748-415c-923b-2e64925e2fa4/.default" ] // e.g. [api//middle_tier_api_client_id/.default]
};


/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
const loginRequest = {
    scopes: ["openid", "profile"]
};

/**
 * Scopes you add here will be used to request a token from Azure AD to be used for accessing a protected resource.
 * To learn more about how to work with scopes and resources, see: 
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
const tokenRequest = {
    scopes: [...apiConfig.scopes],
};

// exporting config object for jest
if (typeof exports !== 'undefined') {
    module.exports = {
        msalConfig: msalConfig,
    };
}
