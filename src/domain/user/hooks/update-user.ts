import { useMutation } from "@tanstack/react-query";
import updateUser from "../api/update-user";

export default function useUpdateUser() {

    const updateUserMutation = useMutation({
        mutationKey: ['update-user'],
        mutationFn: updateUser,
        retry: 3,
        retryDelay: 250,
    });

    const mutate = (updates: Partial<UserAccount>) => {
        updateUserMutation.mutate(updates);
    }

    return {
        mutate,
        status: updateUserMutation.status,
        error: updateUserMutation.error,
        response: updateUserMutation.data,
    }
}