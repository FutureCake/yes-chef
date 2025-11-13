import SecureStore from 'expo-secure-store';

const SECURE_KEY = 'auth-tokens';

export async function getAuthenticationTokens(): Promise<{ access: string, refresh: string } | undefined> {

    const tokensString = await SecureStore.getItemAsync(SECURE_KEY);

    if (tokensString) {
        return JSON.parse(tokensString);
    }

    return undefined;
}

export async function setAuthenticationTokens(access: string, refresh: string): Promise<void> {
    const tokenPair = { access, refresh };
    await SecureStore.setItemAsync(SECURE_KEY, JSON.stringify(tokenPair))
}

export async function removeAuthenticationTokens(): Promise<void> {
    return SecureStore.deleteItemAsync(SECURE_KEY);
}