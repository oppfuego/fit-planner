import { NextResponse } from "next/server";
import { ENV } from "../config/env";

const isProd = ENV.NODE_ENV === "production";

export function attachAuthCookies(
    res: NextResponse,
    accessToken: string,
    refreshToken: string,
    refreshMaxAgeSec: number
) {
    res.cookies.set(ENV.ACCESS_COOKIE_NAME, accessToken, {
        httpOnly: true,
        secure: isProd,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
    });

    res.cookies.set(ENV.REFRESH_COOKIE_NAME, refreshToken, {
        httpOnly: true,
        secure: isProd,
        sameSite: "lax",
        path: "/",
        maxAge: refreshMaxAgeSec,
    });
}

export function clearAuthCookies(res: NextResponse) {
    res.cookies.set(ENV.ACCESS_COOKIE_NAME, "", {
        httpOnly: true,
        secure: isProd,
        sameSite: "lax",
        path: "/",
        maxAge: 0,
    });
    res.cookies.set(ENV.REFRESH_COOKIE_NAME, "", {
        httpOnly: true,
        secure: isProd,
        sameSite: "lax",
        path: "/",
        maxAge: 0,
    });
}
