
import { useMutation } from "@tanstack/react-query";
import resendOTP from "../api/resend-otp";

export default function useResendOTP(email: string) {

    const resendMutation = useMutation({
        mutationKey: ['resend-otp', email],
        mutationFn: () => resendOTP(email),
        retry: 3,
        retryDelay: 250
    });

    return {
        resendOTP: resendMutation.mutate,
        status: resendMutation.status
    };

}