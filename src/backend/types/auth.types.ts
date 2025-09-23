import {UserType} from "@/backend/types/user.types";

export type AuthError =
    | { type: "Unauthorized"; message: string }
    | { type: "UserNotFound"; message: string }
    | { type: "InvalidCredentials"; message: string }
    | { type: "EmailAlreadyRegistered"; message: string }
    | { type: "MissingAuthHeader"; message: string }
    | { type: "InvalidOrExpiredToken"; message: string }
    | { type: "GenericError"; message: string };

export interface AuthPayload {
    id: string;
    email: string;
    [key: string]: unknown;
}

export interface AuthResponse {
    user: UserType;
    token: string;
}

export interface LogoutResponse {
    message: string;
}

export interface TokensResponse {
    accessToken: string;
    refreshToken: string;
}

