import API from "../../../../../libs/axios";
import { APIResponse } from "../../../../../types/api";

export default async function authenticate(email: string): Promise<APIResponse<void>> {
    return await API.post("/auth/authenticate", { email });
}