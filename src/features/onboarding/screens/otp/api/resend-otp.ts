import API from "../../../../libs/axios";
import { APIResponse } from "../../../../types/api";

export default async function resendOTP(email: string): Promise<APIResponse<void>> {
    return await API.post('/auth/otp/resend', { email });
}