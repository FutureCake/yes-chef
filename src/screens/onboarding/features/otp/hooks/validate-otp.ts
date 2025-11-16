import { useMutation } from "@tanstack/react-query";
import ValidateOTP from "../api/validate-otp";

export default function useValidateOTP() {

    const validateMutation = useMutation({
        mutationKey: ['validate-otp'],
        mutationFn: (data: { email: string, otp: number }) => ValidateOTP(data.email, data.otp),
        retry: 3,
        retryDelay: 250,
    });

    return {
        validate: validateMutation.mutate,
        status: validateMutation.status,
        response: validateMutation.data,
        error: validateMutation.error,
    };
} 