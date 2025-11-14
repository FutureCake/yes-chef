import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Authentication from "./features/authentication";
import Email from "./features/email";
import Hello from "./features/hello";
import Otp from "./features/otp";
import Welcome from "./features/welcome";
import { OnboardingStackParamList } from "./types";

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export default function Onboarding() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Hello">
            <Stack.Screen name="Hello" component={Hello} />
            <Stack.Screen name="Authentication" component={Authentication} />
            <Stack.Screen name="Email" component={Email} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
    );
}