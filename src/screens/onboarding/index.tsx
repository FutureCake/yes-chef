import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingStackParamList } from "./helpers/types";

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export default function Onboarding() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
        </Stack.Navigator>
    );
}