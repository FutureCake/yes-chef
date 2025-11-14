import { RootStackParamList } from "../../types/navigation";
import { ContentState } from "../helpers/types";

type RootStackKeys = Extract<keyof RootStackParamList, string>;

export default function useRoute(status: ContentState): RootStackKeys {

    switch (status) {
        case "welcome":
            return "Onboarding";
        case "content":
            return "Main";
        case "error":
            return "Error";
        default:
            return "Onboarding";
    }
}