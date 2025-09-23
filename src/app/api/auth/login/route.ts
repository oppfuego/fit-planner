import { NextRequest, NextResponse } from "next/server";
import { authController } from "@/backend/controllers/auth.controller";
import { attachAuthCookies } from "@/backend/utils/cookies";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const ua = req.headers.get("user-agent") || undefined;
        const ip =
            req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            (req as any).ip ||
            undefined;

        const { user, tokens } = await authController.login(body, ua, ip);

        const res = NextResponse.json({ user }, { status: 200 });
        attachAuthCookies(res, tokens.accessToken, tokens.refreshToken, 60 * 60 * 24 * 30);
        return res;
    } catch (e: any) {
        return NextResponse.json(
            { type: "InvalidCredentials", message: e?.message || "Login error" },
            { status: 400 }
        );
    }
}
