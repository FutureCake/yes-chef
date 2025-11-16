import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Content from '../features/content';
import Onboarding from '../features/onboarding';
import { RootStackParamList } from '../types/navigation';
import useRoute from './hooks/determine-route';
import usePrepare from './hooks/prepare';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

    const status = usePrepare();
    const route = useRoute(status)

    const onLayoutRootView = useCallback(async () => {
        if (status !== "loading") {
            await SplashScreen.hideAsync();
        }
    }, [status]);

    if (status === "loading") {
        return null;
    }

    return (
        <QueryClientProvider client={queryClient}>
            <KeyboardProvider>
                <NavigationContainer>
                    <SafeAreaProvider onLayout={onLayoutRootView}>
                        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={route}>
                            <Stack.Screen name="Onboarding" component={Onboarding} />
                            <Stack.Screen name="Content" component={Content} />
                        </Stack.Navigator>
                    </SafeAreaProvider>
                </NavigationContainer>
            </KeyboardProvider>
        </QueryClientProvider>
    );
}
