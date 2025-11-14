import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import Button from "../../../../shared/components/buttons";
import OnboardingStep from "../../components/onboarding-step";
import { OnboardingStackParamList } from "../../types";

type OnboardingStack = NativeStackNavigationProp<OnboardingStackParamList>;

export default function Email() {

    const nav = useNavigation<OnboardingStack>();
    const [email, setEmail] = useState<string | undefined>();

    const next = () => {
        if (!email) return;

        nav.navigate("Otp", { email: email });
    }

    return (
        <OnboardingStep header={"Email address"} message={"Please enlighten me with\nyour email so we can progress"}>
            <TextInput style={styles.input} placeholder="Your email@domain.com" value={email} onChangeText={setEmail} />
            <Button onPress={next} style={[styles.button, styles.buttonThick]} textStyle={{ fontSize: 20, color: "#fff" }} title="Next" />
        </OnboardingStep>
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        paddingVertical: 16,
        borderColor: "#616161",
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 16
    },
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
});