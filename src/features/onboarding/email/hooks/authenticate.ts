import { useMutation } from "@tanstack/react-query";
import authenticate from "../api/authenticate";

export default function useRequestAuth() {

    const mutation = useMutation({
        mutationKey: ['authenticate'],
        mutationFn: authenticate,
        retry: 3,
        retryDelay: 250
    });


    return mutation.mutate
}