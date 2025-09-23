import { NextRequest, NextResponse } from "next/server";
import { authController } from "@/backend/controllers/auth.controller";
import { clearAuthCookies } from "@/backend/utils/cookies";
import { ENV } from "@/backend/config/env";

export async function POST(req: NextRequest) {
    const res = NextResponse.json({ message: "Logged out" }, { status: 200 });
    try {
        const refresh = req.cookies.get(ENV.REFRESH_COOKIE_NAME)?.value;
        if (refresh) await authController.logout(refresh);
    } finally {
        clearAuthCookies(res);
    }
    return res;
}
