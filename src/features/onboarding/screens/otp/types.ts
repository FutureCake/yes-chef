import { JWTs } from "../../../../domain/auth/types";

export type AuthType = "login" | "register";

export interface AuthResponse extends JWTs {
    authType: AuthType;
}