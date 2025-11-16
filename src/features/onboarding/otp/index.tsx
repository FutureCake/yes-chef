import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { StrongButton } from "../../../shared/components/buttons/variants";
import OnboardingStep from "../components/onboarding-step";
import { useOnboardingStore } from "../onboarding-store";
import { OnboardingStackParamList } from "../types";

type OnboardingStack = NativeStackNavigationProp<OnboardingStackParamList>;

export default function Otp() {

    const userType = useOnboardingStore(s => s.userType);
    const nav = useNavigation<OnboardingStack>();
    const [otp, setOtp] = useState<string | undefined>();

    const next = () => {
        if (!otp) return;
        nav.navigate("Welcome", { userType: userType });
    }

    return (
        <OnboardingStep header={"Nearly done"} message={"Paste the code from your email\nand you’re good to go"}>
            <TextInput style={styles.input} placeholder="your 6 digits" value={otp} onChangeText={setOtp} keyboardType="number-pad" />
            <StrongButton title="Next" onPress={next} />
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
    }
});