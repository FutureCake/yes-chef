import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Hello from "./features/hello";
import Otp from "./features/otp";
import Welcome from "./features/welcome";
import { OnboardingStackParamList } from "./helpers/types";

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export default function Onboarding() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Hello" component={Hello} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
    );
}