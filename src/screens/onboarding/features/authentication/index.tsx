import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Button from "../../../../shared/components/buttons";
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
            <Button onPress={handleGoogleContinue} style={[styles.button, styles.buttonThick]} textStyle={{ fontSize: 20, color: "#fff" }} title="Continue with Google" />
            <Button onPress={handleEmailContinue} style={[styles.button, styles.buttonSkinny]} textStyle={{ fontSize: 20 }} title="Or use your email instead" />
            {/* {route.params.origin === "<Button onPress={handleEmailContinue} style={[styles.button, styles.buttonSkinny]} textStyle={{ fontSize: 20 }} title="I already have an account" /> */}
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

    },
    buttonSkinny: {
        borderColor: "#3D3935",
        borderWidth: 1,
    }
});