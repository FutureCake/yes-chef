import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LightButton, StrongButton } from "../../../../shared/components/buttons/variants";
import OnboardingStep from "../../components/onboarding-step";
import { OnboardingStackParamList } from "../../types";

type RootStackNavProp = NativeStackNavigationProp<OnboardingStackParamList>;
// type Props = NativeStackScreenProps<OnboardingStackParamList, "Authentication">

export default function Authentication() {

    // const { route } = props;
    const nav = useNavigation<RootStackNavProp>();

    const handleGoogleContinue = () => {
        // Handle Google continue action
    };

    const handleEmailContinue = () => {
        nav.navigate("Email");
    }

    return (
        <OnboardingStep header={"Welcome"} message={"Access your account in less\nthan onion is sautéed"}>
            <StrongButton title={"Continue with Google"} onPress={handleGoogleContinue} />
            <LightButton title="Or use your email instead" onPress={handleEmailContinue} />
        </OnboardingStep>
    );
}