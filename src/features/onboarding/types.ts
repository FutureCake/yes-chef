import { ParamListBase } from "@react-navigation/native";
import { UserType } from "../../domain/user/types";

export interface OnboardingStackParamList extends ParamListBase {
    Hello: undefined;
    Authentication: undefined;
    Email: undefined;
    Otp: { email: string };
    Welcome: { userType: UserType };
}