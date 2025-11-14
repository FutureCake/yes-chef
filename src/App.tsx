import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import usePrepare from './screens/setup/hooks/prepare';

const queryClient = new QueryClient();
SplashScreen.preventAutoHideAsync();

export default function App() {

    const status = usePrepare();

    useEffect(() => {
        console.log("App status:", status);
    }, [status])

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
                    </SafeAreaProvider>
                </NavigationContainer>
            </KeyboardProvider>
        </QueryClientProvider>
    );
}
