import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export interface OnboardingStepProps extends PropsWithChildren {
    header: string;
    message: string;
}

export default function OnboardingStep(props: OnboardingStepProps) {

    const { header, message, children } = props;

    return (
        <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
            <View style={styles.texts}>
                <Text style={styles.header}>{header}</Text>
                <Text style={styles.message}>{message}</Text>
            </View>
            <View style={styles.actions}>
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        paddingHorizontal: 16,
        paddingBottom: 16,
        justifyContent: "flex-end"
    },
    texts: {
        marginBottom: 100
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