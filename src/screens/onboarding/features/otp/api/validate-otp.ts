import API from "../../../../../libs/axios";

export default async function ValidateOTP(email: string, otp: number) {
    API.post("/auth/otp/validate", { email, otp });
}