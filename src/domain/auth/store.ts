import { create } from "zustand";
import { getAuthenticationTokens, removeAuthenticationTokens, setAuthenticationTokens } from "../../libs/keychain";
import { JWTs } from "./types";

export interface JWTStore {
    tokens: JWTs | null;
    setTokens: (tokens: JWTs) => Promise<JWTs>;
    updateAccessToken: (token: string) => Promise<JWTs | null>;
    loadTokens: () => Promise<JWTs | null>;
    clearTokens: () => Promise<void>;
}

export const useAuthStore = create<JWTStore>()(
    (set, get) => ({

        tokens: null,

        setTokens: async (tokens: JWTs): Promise<JWTs> => {
            await setAuthenticationTokens(tokens.access, tokens.refresh);
            set({ tokens });
            return tokens;
        },

        updateAccessToken: async (token: string): Promise<JWTs | null> => {
            const { tokens, setTokens } = get();

            if (tokens) {
                const updatedTokens: JWTs = { ...tokens, access: token };
                setTokens(updatedTokens);
                return updatedTokens
            }

            return null;
        },

        loadTokens: async (): Promise<JWTs | null> => {

            const tokens = await getAuthenticationTokens();

            if (tokens) {
                set({ tokens });
                return tokens;
            }

            return null;
        },

        clearTokens: async (): Promise<void> => {
            await removeAuthenticationTokens();
            set({ tokens: null });
        }
    }),
)