import API from "../../../libs/axios";
import { UserAccount } from "../types";

export default async function updateUser(data: Partial<UserAccount>) {
    return API.patch('/user', data);
}