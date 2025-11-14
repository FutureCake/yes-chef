import { ParamListBase } from "@react-navigation/native";

export interface RootStackParamList extends ParamListBase {
    Onboarding: undefined;
    Main: undefined;
    Error: { message?: string } | undefined;
};