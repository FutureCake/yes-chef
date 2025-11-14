import { ParamListBase } from "@react-navigation/native";

export type UserType = "individual" | "business";

export interface OnboardingStackParamList extends ParamListBase {
    Hello: undefined;
    Authentication: undefined;
    Email: undefined;
    Otp: { email: string };
    Welcome: { userType: UserType };
}