import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/backend/middlewares/auth.middleware";
import { authController } from "@/backend/controllers/auth.controller";

export async function GET(req: NextRequest) {
    try {
        const payload = await requireAuth(req);
        const user = await authController.me(payload.sub);
        return NextResponse.json({ user });
    } catch {
        return NextResponse.json({ type: "Unauthorized", message: "Unauthorized" }, { status: 401 });
    }
}
