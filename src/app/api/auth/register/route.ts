import { NextRequest, NextResponse } from "next/server";
import { authController } from "@/backend/controllers/auth.controller";
import { attachAuthCookies } from "@/backend/utils/cookies";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { user, tokens } = await authController.register(body);
        const res = NextResponse.json({ user }, { status: 200 });
        attachAuthCookies(res, tokens.accessToken, tokens.refreshToken, 60 * 60 * 24 * 30);
        return res;
    } catch (e: any) {
        const msg = e?.message || "Registration error";
        const code = msg.includes("registered") ? 400 : 500;
        return NextResponse.json({ type: "EmailAlreadyRegistered", message: msg }, { status: code });
    }
}
