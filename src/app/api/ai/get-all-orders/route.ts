import { NextRequest, NextResponse } from "next/server";
import { aiController } from "@/backend/controllers/ai.controller";
import { requireAuth } from "@/backend/middlewares/auth.middleware";

export async function GET(req: NextRequest) {
    try {
        const user = await requireAuth(req);
        if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        const orders = await aiController.getOrders(user.sub);
        console.log(orders)
        return NextResponse.json({ orders });
    } catch (err: any) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}
