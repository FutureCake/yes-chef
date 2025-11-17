import { useQuery } from "@tanstack/react-query";
import getUser from "../api/get-user";

export default function useGetUser(enabled: boolean) {

    const userQuery = useQuery({
        queryKey: ['get-user'],
        queryFn: getUser,
        retry: 3,
        retryDelay: 250,
        enabled
    });

    return {
        response: userQuery.data,
        status: userQuery.status,
        error: userQuery.error
    }
}