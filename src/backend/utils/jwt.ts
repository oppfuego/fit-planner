import { SignJWT, jwtVerify } from "jose";
import { ENV } from "../config/env";

const encoder = new TextEncoder();

export type AccessPayload = { sub: string; email: string; role: string };
export type RefreshPayload = { sub: string; sid: string }; // sid = session id (Mongo _id)

export async function signAccessToken(payload: AccessPayload, expiresIn = ENV.ACCESS_TOKEN_EXPIRES) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(expiresIn)
        .sign(encoder.encode(ENV.JWT_ACCESS_SECRET));
}

export async function verifyAccessToken<T = AccessPayload>(token: string) {
    const { payload } = await jwtVerify(token, encoder.encode(ENV.JWT_ACCESS_SECRET));
    return payload as T;
}

export async function signRefreshToken(payload: RefreshPayload, expiresIn = ENV.REFRESH_TOKEN_EXPIRES) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(expiresIn)
        .sign(encoder.encode(ENV.JWT_REFRESH_SECRET));
}

export async function verifyRefreshToken<T = RefreshPayload>(token: string) {
    const { payload } = await jwtVerify(token, encoder.encode(ENV.JWT_REFRESH_SECRET));
    return payload as T;
}
