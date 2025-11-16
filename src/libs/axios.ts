import axios from "axios";
import { useAuthStore } from "../domain/auth/store";

const API = axios.create({
    baseURL: process.env.EXPO_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

API.interceptors.request.use(

    (config) => {
        const token = useAuthStore(state => state.tokens)?.access;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// use interceptor to request new access token when current one is expired and retry to original fetch with the new token.
API.interceptors.response.use(

    (response) => response,

    async (error) => {

        if (error.response?.status === 701) {

            const refreshToken = useAuthStore(state => state.tokens)?.refresh;

            if (!refreshToken) return;

            const token = await updateAccessToken(refreshToken);

            // Retry the failed request with new token
            error.config.headers.Authorization = `Bearer ${token}`;
            return axios.request(error.config);
        }

        return Promise.reject(error);
    }
);

const updateAccessToken = async (refreshToken: string): Promise<string | undefined> => {

    const access = await API.get<{ accessToken: string }>("/refresh-token", {
        data: {
            refreshToken
        }
    });

    if (!access.data.accessToken) return undefined;

    useAuthStore(state => state.updateAccessToken)(access.data.accessToken);

    return access.data.accessToken;
}

export default API;