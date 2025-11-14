import { PropsWithChildren } from "react";
import { DimensionValue, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import { SafeAreaView } from "react-native-safe-area-context";

export interface OnboardingStepProps extends PropsWithChildren {
    header: string;
    message: string;
    gap?: DimensionValue;
}

export default function OnboardingStep(props: OnboardingStepProps) {

    const { header, message, gap = 100, children } = props;

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
                <SafeAreaView edges={["top", "bottom"]} >
                    <View style={{ marginBottom: gap }}>
                        <Text style={styles.header}>{header}</Text>
                        <Text style={styles.message}>{message}</Text>
                    </View>
                    <View style={styles.actions}>
                        {children}
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        paddingHorizontal: 16,
        paddingBottom: 16,
        justifyContent: "flex-end"
    },
    header: {
        fontSize: 36,
        marginBottom: 14
    },
    message: {
        fontSize: 20,
    },
    actions: {
        gap: 12
    }
});