import { AxiosError } from "axios";
import { ApiResponse } from "../types/response.type";

export async function handleApiError(error: AxiosError): Promise<ApiResponse> {
  let response = { status: 500, success: false, data: {} };

  if (error.response) {
    // The request was made, but the server responded with an error status code
    const status = error.response.status;
    const data = error.response.data as { message: string; data: any };
    response = { status, success: false, data };
  }

  return response;
}
