import { NextRequest, NextResponse } from "next/server";
import { cvController } from "../../../../../../cv-maker/src/backend/controllers/cv.controller";
import { requireAuth } from "@/backend/middlewares/auth.middleware";

export async function POST(req: NextRequest) {
    try {
        const user = await requireAuth(req);
        if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

        const body = await req.json();
        const result = await cvController.createOrder(user.sub, user.email, body);
        return NextResponse.json(result);
    } catch (err: any) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}
