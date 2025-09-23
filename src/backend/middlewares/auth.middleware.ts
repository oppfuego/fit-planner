import { NextRequest } from "next/server";
import { ENV } from "../config/env";
import { verifyAccessToken } from "../utils/jwt";

export async function requireAuth(req: NextRequest) {
    const access = req.cookies.get(ENV.ACCESS_COOKIE_NAME)?.value
        || req.headers.get("authorization")?.replace(/^Bearer\s+/i, "");

    if (!access) throw new Error("Missing auth");

    try {
        const payload = await verifyAccessToken<{ sub: string; email: string; role: string }>(access);
        return payload;
    } catch {
        throw new Error("Invalid or expired token");
    }
}
