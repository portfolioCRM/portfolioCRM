// ========================== Web service controller for API ========================== //

//--- import creator HTTP request
import axios, { AxiosResponse } from "axios";
//--- import based constance variables for APi handler
import Cookies from "js-cookie";
import jwtDefaultConfig from "./config";
/**
 * @see [handleApiError](./handleApi/handleErrors.ts)
 * @see [handleApiResponse](./handleApi/handleResponse.ts)
 * @description scale the responses types return as uniform ones
 */
import { handleApiError } from "./handleApi/handleErrors";
import { handleApiResponse } from "./handleApi/handleResponse";
/**
 * @see [handleApiError](./types/response.type.ts)
 * @see [handleApiResponse](./types/authPayload.ts)
 * @description scale the responses types return as uniform ones
 */
import { ApiResponse } from "./types/response.type";

/**
 * JWT Service class for handling JWT authentication and API requests.
 */
export default class JwtService {
  // ** jwtConfig <= Will be used by this service
  jwtConfig = { ...jwtDefaultConfig };

  // ** For Refreshing Token
  isAlreadyFetchingAccessToken = false; //--- getting token access finished status

  // ** For Refreshing Token
  jwtOverrideConfig: any;

  /**
   * Constructs a new JwtService instance.
   * @param {Object} jwtOverrideConfig - Custom JWT configuration to override default settings.
   */
  constructor(jwtOverrideConfig: any) {
    this.jwtConfig = { ...this.jwtConfig }; //--- getting based info
    this.jwtOverrideConfig = jwtOverrideConfig;

    //================= Request Interceptor === configuration request before sending HTTP request to the server
    /**
     * @see [axios_interceptors] (https://axios-http.com/docs/interceptors)
     */
    axios.interceptors.request.use(
      (config) => {
        // ** Get token from localStorage
        const accessToken = Cookies.get(this.jwtConfig.storageTokenKeyName);
        // ** add headers from jwtOverrideConfig if it is send as type {key: string, value: string}[]
        if (this.jwtOverrideConfig && Array.isArray(this.jwtOverrideConfig)) {
          this.jwtOverrideConfig.forEach((header) => {
            const headerName = Object.keys(header)[0];
            const headerValue = Object.values(header)[0];
            config.headers[headerName] = headerValue;
          });
        }
        // ** If token is present add it to request's Authorization Header
        config.headers.Accept = "application/json";
        config.headers["Cache-Control"] = "no-cache";
        config.headers.Pragma = "no-cache";
        if (accessToken) {
          config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      },
    );

    // ** Add request/response interceptor
    axios.interceptors.response.use(
      async function (response) {
        // Any status code that lies within the range of 2xx causes this function to trigger
        const handledResponse = await handleApiResponse(response);
        return handledResponse as unknown as AxiosResponse<ApiResponse>;
      },
      async function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        const handledError = await handleApiError(error);
        return handledError as unknown as AxiosResponse<ApiResponse>;
      },
    );
  }

  // ============== web services methods list ============== //

  /**
   * web service for login as```login as Food trucker```
   * @name ```loginFoodTrucker```
   * @param {loginFoodTruckerPayloadT} payload
   */
  loginFoodTrucker(payload: any) {
    return axios.post(this.jwtConfig.loginEndpoint, payload);
  }
}
