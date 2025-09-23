import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/backend/middlewares/auth.middleware";
import { userController } from "@/backend/controllers/user.controller";

const TOKENS_PER_UNIT = 10; // 1 EUR/GBP = 10 токенів

export async function POST(req: NextRequest) {
    try {
        const payload = await requireAuth(req);
        const body = await req.json();

        // Custom Pack (валюта + сума)
        if (body.currency && body.amount) {
            const { currency, amount } = body;
            if (!["GBP", "EUR"].includes(currency)) {
                return NextResponse.json({ message: "Unsupported currency" }, { status: 400 });
            }
            if (amount < 5) {
                return NextResponse.json({ message: "Minimum is 5" }, { status: 400 });
            }

            const tokens = Math.round(amount * TOKENS_PER_UNIT);
            const user = await userController.buyTokens(payload.sub, tokens);

            return NextResponse.json({
                user,
                info: `Converted ${amount} ${currency} → ${tokens} tokens`,
            });
        }

        // Fixed plans
        const { amount } = body;
        if (!amount || amount <= 0) {
            return NextResponse.json({ message: "Invalid token amount" }, { status: 400 });
        }

        const user = await userController.buyTokens(payload.sub, amount);
        return NextResponse.json({ user });
    } catch (err: any) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}
