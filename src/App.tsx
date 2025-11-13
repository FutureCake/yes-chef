import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { loadAsync } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const queryClient = new QueryClient();
SplashScreen.preventAutoHideAsync();

export default function App() {

    const [appReady, setAppReady] = useState(false);

    useEffect(() => {

        const prepare = async () => {

            try {
                await loadAsync({
                    'comic-sans-regular': require('./assets/fonts/Comic-Sans-MS.ttf'),
                    'comic-sans-bold': require('./assets/fonts/Comic-Sans-MS-Bold.ttf'),
                });

                // do auth check 
                // load additional resources 
            } catch (error) {
                console.warn(error);
            } finally {
                setAppReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appReady) {
            await SplashScreen.hideAsync();
        }
    }, [appReady]);

    if (!appReady) {
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
