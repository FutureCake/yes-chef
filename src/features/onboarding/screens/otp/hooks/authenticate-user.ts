import { useEffect, useState } from "react";
import { useAuthStore } from "../../../../domain/auth/store";
import useGetUser from "../../../../domain/user/hooks/get-user";
import useUpdateUser from "../../../../domain/user/hooks/update-user";
import { useUserStore } from "../../../../domain/user/store";
import { UserAccount } from "../../../../domain/user/types";
import { useOnboardingStore } from "../../onboarding-store";
import useDetermineStatus from "./determine-status";
import useValidateOTP from "./validate-otp";

export default function useValidateAuthentication(email: string) {

    const [userData, setUserData] = useState<UserAccount>();

    // get the user store to set the user data after authentication
    const setUser = useUserStore(store => store.setUser);

    // get the auth store to set the authentication tokens
    const setTokens = useAuthStore(store => store.setTokens);

    // onboarding data if the user is registering
    const userType = useOnboardingStore(store => store.userType);

    // validate the OTP and get the authentication response
    const validateOTP = useValidateOTP();
    const authResponse = validateOTP.response?.data;
    const authType = authResponse?.authType;

    // update user data if the user is registering
    const updateUser = useUpdateUser();

    // get user data if the user is logging in
    const getUser = useGetUser(authType === "login");

    useEffect(() => {

        const data = updateUser.response?.data || getUser.response?.data;
        setUserData(data);

    }, [updateUser.response, getUser.response]);

    // This is called when the user submits the OTP
    const validate = (otp: number) => {
        validateOTP.validate({ email, otp });
    }

    const status = useDetermineStatus(validateOTP.status, getUser.status, updateUser.status);
    const error = validateOTP.error || updateUser.error || getUser.error || null;

    // If the user is registering, update the user data after authentication has been validated
    useEffect(() => {

        if (authType === "register") {
            updateUser.mutate({ userType });
        }

    }, [authType]);

    useEffect(() => {

        if (status === "success" && userData && authResponse) {
            setUser(userData);
            const { access, refresh } = authResponse;
            setTokens({ access, refresh });
        }

    }, [status, userData, authResponse]);

    return {
        validate,
        status,
        error
    }
}