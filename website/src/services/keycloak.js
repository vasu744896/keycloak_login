import Keycloak from "keycloak-js";

let keycloak = null;

export const initKeycloak = () => {
  keycloak = new Keycloak({
    url: "http://127.0.0.1:8180",
    realm: "baion",
    clientId: "baion-app",
  });

  return new Promise((resolve, reject) => {
    keycloak.init({
      onLoad: "login-required", // Force login for testing
      checkLoginIframe: false,
      pkceMethod: "S256",
      redirectUri: "http://localhost:5173",
    }).then((authenticated) => {
      if (authenticated) {
        console.log("Keycloak authenticated");
        resolve(authenticated);
      } else {
        console.warn("Keycloak not authenticated");
        reject("Keycloak authentication failed");
      }
    }).catch((error) => {
      console.error("Keycloak initialization error:", error);
      reject(error);
    });
  });
};

export const getToken = () => keycloak?.token;

export const processAuthCallback = () => {
  return new Promise((resolve, reject) => {
    keycloak.init({
      onLoad: "check-sso",
      checkLoginIframe: false,
      pkceMethod: "S256",
      redirectUri: "http://localhost:5173",
    }).then((authenticated) => {
      if (authenticated) {
        console.log("Authenticated during callback");
        resolve();
      } else {
        reject("Authentication failed during callback.");
      }
    }).catch((error) => {
      console.error("Callback initialization error:", error);
      reject(error);
    });
  });
};

export const isAuthenticated = () => !!keycloak?.token;

export const logout = () => {
  keycloak.logout({
    redirectUri: "http://localhost:5173",
  });
};
