import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import Button from "../../../../shared/components/buttons";
import OnboardingStep from "../../components/onboarding-step";
import { OnboardingStackParamList } from "../../types";

type OnboardingStack = NativeStackNavigationProp<OnboardingStackParamList>;

export default function Otp() {

    const nav = useNavigation<OnboardingStack>();
    const [otp, setOtp] = useState<string | undefined>();

    const next = () => {
        if (!otp) return;

        nav.navigate("Welcome", { userType: "individual" });
    }

    return (
        <OnboardingStep header={"Nearly done"} message={"Paste the code from your email\nand you’re good to go"}>
            <TextInput style={styles.input} placeholder="your 6 digits" value={otp} onChangeText={setOtp} keyboardType="number-pad" />
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