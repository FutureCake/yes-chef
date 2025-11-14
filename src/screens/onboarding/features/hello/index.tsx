import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Button from "../../../../shared/components/buttons";
import OnboardingStep from "../../components/onboarding-step";
import { OnboardingStackParamList, UserType } from "../../types";

type OnboardingStack = NativeStackNavigationProp<OnboardingStackParamList>;

export default function Hello() {

    const nav = useNavigation<OnboardingStack>();

    const selectOption = (option: UserType) => {
        nav.navigate("Authentication", { origin: "new" });
    }

    const login = () => {
        nav.navigate("Authentication", { origin: "login" });
    }

    return (
        <OnboardingStep header={"Welcome to\nYesChef"} message={"First things first.\nHow can we serve you today?"}>
            <Button onPress={() => selectOption("business")} style={styles.option} textStyle={styles.optionText} title="I’m a Restaurant manager"></Button>
            <Button onPress={() => selectOption("individual")} style={styles.option} textStyle={styles.optionText} title="I’m looking for jobs"></Button>
            <Button onPress={login} style={styles.login} title="login" />
        </OnboardingStep>
    );
}

const styles = StyleSheet.create({
    option: {
        height: 200,
        backgroundColor: "#616161",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    optionText: {
        color: "#FFFFFF",
        fontSize: 20
    },
    login: {
        marginTop: 16,
        alignItems: "center"
    }
});