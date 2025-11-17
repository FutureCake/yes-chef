import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { StrongButton } from "../../../shared/components/buttons/variants";
import { RootStackParamList } from "../../../types/navigation";
import OnboardingStep from "../components/onboarding-step";
import { OnboardingStackParamList } from "../types";

type Props = NativeStackScreenProps<OnboardingStackParamList, "Welcome">;
type RootStack = NativeStackNavigationProp<RootStackParamList>;

export default function Welcome(props: Props) {

    const userType = props.route.params.userType;
    const header = userType === "business" ? "The kitchen\nis open!" : "Let’s serve!";
    const message = userType === "business" ? "Let’s fill those 86s as soon\nas possible" : "Let’s find a job as soon\nas possible";

    const nav = useNavigation<RootStack>();

    const enter = () => {
        nav.replace("Content");
    }

    return (
        <OnboardingStep header={header} message={message} gap={300}>
            <StrongButton onPress={enter} title="Let's go" />
        </OnboardingStep>
    );
}