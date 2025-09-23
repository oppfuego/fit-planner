import { NextRequest, NextResponse } from "next/server";
import { authController } from "@/backend/controllers/auth.controller";
import { attachAuthCookies } from "@/backend/utils/cookies";
import { ENV } from "@/backend/config/env";

export async function POST(req: NextRequest) {
    try {
        const refresh = req.cookies.get(ENV.REFRESH_COOKIE_NAME)?.value;
        if (!refresh) throw new Error("No refresh");

        const ua = req.headers.get("user-agent") || undefined;
        const ip =
            req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            (req as any).ip ||
            undefined;

        const { user, tokens } = await authController.refresh(refresh, ua, ip);
        const res = NextResponse.json({ user }, { status: 200 });
        attachAuthCookies(res, tokens.accessToken, tokens.refreshToken, 60 * 60 * 24 * 30);
        return res;
    } catch {
        return NextResponse.json({ type: "SessionInvalid", message: "Invalid session" }, { status: 401 });
    }
}
