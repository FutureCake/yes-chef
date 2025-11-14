import { ParamListBase } from "@react-navigation/native";

export type UserType = "individual" | "business";
export type HelloMethod = "login" | "new";

export interface OnboardingStackParamList extends ParamListBase {
    Hello: undefined;
    Authentication: { origin: HelloMethod };
    Email: undefined;
    Otp: { email: string };
    Welcome: { userType: UserType };
}