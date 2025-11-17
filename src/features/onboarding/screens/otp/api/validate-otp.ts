import API from "../../../../../libs/axios";
import { APIResponse } from "../../../../../types/api";
import { AuthResponse } from "../types";

export default async function ValidateOTP(email: string, otp: number): Promise<APIResponse<AuthResponse>> {
    return API.post("/auth/otp/validate", { email, otp });
}