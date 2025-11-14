import { ParamListBase } from "@react-navigation/native";

export type UserType = "individual" | "business";

export interface OnboardingStackParamList extends ParamListBase {
    Hello: undefined;
    Otp: undefined;
    CustomerType: undefined;
    Welcome: { userType: UserType };
}