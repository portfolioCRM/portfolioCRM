interface EndPoints {
  loginEndpoint: string;
  logoutEndpoint: string;
}

interface Configuration {
  [key: string]: string;
}

interface StorageToken {
  storageTokenKeyName: string;
  storageRefreshTokenKeyName: string;
  storageUser: string;
}

const endPoints: EndPoints = {
  // -- auth endPoints
  loginEndpoint: "/api/login",
  logoutEndpoint: "/api/logout",
};

function getEndPoints(): Configuration {
  const configWithBaseUrl: Configuration = {};
  for (const endpoint in endPoints) {
    configWithBaseUrl[endpoint] = endPoints[endpoint as keyof EndPoints];
  }
  return configWithBaseUrl;
}

const tokenType: string = "Bearer";

const storageToken: StorageToken = {
  storageTokenKeyName: "accessToken",
  storageRefreshTokenKeyName: "refreshToken",
  storageUser: "user",
};

const apiConfig: Configuration = {
  ...getEndPoints(),
  tokenType,
  ...storageToken,
};

export default apiConfig;
