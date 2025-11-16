import { loadAsync } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../domain/auth/store";
import { ContentState } from "../helpers/types";

export default function usePrepare() {

    const loadTokens = useAuthStore(s => s.loadTokens);
    const [appState, setAppState] = useState<ContentState>("loading");

    useEffect(() => {

        const prepare = async () => {

            try {
                await SplashScreen.preventAutoHideAsync();

                await loadAsync({
                    'comic-sans': require('../../assets/fonts/Comic-Sans-MS.ttf'),
                    'comic-sans-bold': require('../../assets/fonts/Comic-Sans-MS-Bold.ttf'),
                });

                const hasTokens = await loadTokens();

                if (hasTokens !== null) {
                    setAppState("content");
                } else {
                    setAppState("welcome");
                }

            } catch (error) {
                console.warn(error);
                setAppState("error");
            }
        }

        prepare();
    }, []);

    return appState;
}