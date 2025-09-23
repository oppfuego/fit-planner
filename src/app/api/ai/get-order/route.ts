import { NextRequest, NextResponse } from "next/server";
import { aiController } from "@/backend/controllers/ai.controller";
import { requireAuth } from "@/backend/middlewares/auth.middleware";

export async function GET(req: NextRequest) {
    try {
        const user = await requireAuth(req);
        if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

        const { searchParams } = new URL(req.url);
        const orderId = searchParams.get("id");
        if (!orderId) return NextResponse.json({ message: "OrderId required" }, { status: 400 });

        const order = await aiController.getOrder(user._id, orderId);
        return NextResponse.json({ order });
    } catch (err: any) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}
