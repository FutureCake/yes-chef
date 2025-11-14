import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppError from '../screens/app-error';
import Content from '../screens/content';
import Onboarding from '../screens/onboarding';
import { RootStackParamList } from '../types/navigation';
import useRoute from './hooks/determine-route';
import usePrepare from './hooks/prepare';

SplashScreen.preventAutoHideAsync();

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
                    <SafeAreaProvider style={StyleSheet.absoluteFill} onLayout={onLayoutRootView}>
                        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={route}>
                            <Stack.Screen name="Onboarding" component={Onboarding} />
                            <Stack.Screen name="Content" component={Content} />
                            <Stack.Screen name="Error" component={AppError} />
                        </Stack.Navigator>
                    </SafeAreaProvider>
                </NavigationContainer>
            </KeyboardProvider>
        </QueryClientProvider>
    );
}
