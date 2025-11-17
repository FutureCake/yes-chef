import API from "../../../libs/axios";
import { APIResponse } from "../../../types/api";
import { UserAccount } from "../types";

export default async function getUser(): Promise<APIResponse<UserAccount>> {
    return await API.get('/user');
}