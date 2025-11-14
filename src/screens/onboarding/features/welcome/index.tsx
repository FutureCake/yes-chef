import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Button from "../../../../shared/components/buttons";
import OnboardingStep from "../../components/onboarding-step";
import { OnboardingStackParamList } from "../../types";

type Props = NativeStackScreenProps<OnboardingStackParamList, "Welcome">;

export default function Welcome(props: Props) {

    const userType = props.route.params.userType;
    const header = userType === "business" ? "The kitcken\nis open!" : "Let’s serve!";
    const message = userType === "business" ? "Let’s fill those 86s as soon\nas possible" : "Let’s find a job as soon\nas possible";

    const enter = () => {

    }

    return (
        <OnboardingStep header={header} message={message} gap={300}>
            <Button onPress={enter} style={[styles.button, styles.buttonThick]} textStyle={{ fontSize: 20, color: "#fff" }} title="Let's go" />
        </OnboardingStep>
    );
}

const styles = StyleSheet.create({
    button: {
        fontFamily: "comic-sans-regular",
        borderRadius: 8,
        paddingVertical: 16,
        alignItems: "center"
    },
    buttonThick: {
        color: "#fff",
        backgroundColor: "#616161"
    }
})