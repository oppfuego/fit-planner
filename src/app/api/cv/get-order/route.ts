import { NextRequest, NextResponse } from "next/server";
import { cvController } from "../../../../../../cv-maker/src/backend/controllers/cv.controller";
import { requireAuth } from "@/backend/middlewares/auth.middleware";

export async function GET(req: NextRequest) {
    try {
        const user = await requireAuth(req);
        if (!user) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        if (!id) {
            return NextResponse.json({ message: "Missing order id" }, { status: 400 });
        }

        const result = await cvController.getOrder(user.sub, id);
        if (!result.order) {
            return NextResponse.json({ message: "Order not found" }, { status: 404 });
        }

        return NextResponse.json(result);
    } catch (err: any) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}
