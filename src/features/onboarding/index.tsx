import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Authentication from "./authentication";
import Email from "./email";
import Hello from "./hello";
import Otp from "./otp";
import { OnboardingStackParamList } from "./types";
import Welcome from "./welcome";

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