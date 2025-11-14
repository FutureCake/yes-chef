import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Button from "../../../../shared/components/buttons";
import OnboardingStep from "../../components/onboarding-step";
import { OnboardingStackParamList } from "../../types";

type Props = NativeStackScreenProps<OnboardingStackParamList, "Welcome">;

export default function Welcome(props: Props) {

    const userType = props.route.params.userType;
    const header = userType === "business" ? "The kitcken\nis open!" : "Let’s serve!";
    const message = userType === "business" ? "Let’s fill those 86s as soon\nas possible" : "Let’s find a job as soon\nas possible";

    return (
        <OnboardingStep header={header} message={message}>
            <Button title="Let's go"></Button>
        </OnboardingStep>
    );
}