import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/backend/middlewares/auth.middleware";
import { userController } from "@/backend/controllers/user.controller";

const TOKENS_PER_GBP = 100; // 1 фунт = 100 токенів
const RATES_TO_GBP = { GBP: 1, EUR: 1.17 }; // 1 фунт = 1.17 євро

export async function POST(req: NextRequest) {
    try {
        const payload = await requireAuth(req);
        const body = await req.json();

        // 💰 Custom Pack
        if (body.currency && body.amount) {
            const { currency, amount } = body;

            if (!["GBP", "EUR"].includes(currency)) {
                return NextResponse.json({ message: "Unsupported currency" }, { status: 400 });
            }

            // мінімум — 0.01 фунта еквівалентом
            const gbpEquivalent = amount / RATES_TO_GBP[currency as "GBP" | "EUR"];
            if (gbpEquivalent < 0.01) {
                return NextResponse.json({ message: "Minimum is 0.01" }, { status: 400 });
            }

            // розрахунок токенів пропорційно курсу
            const tokens = Math.floor(gbpEquivalent * TOKENS_PER_GBP);

            const user = await userController.buyTokens(payload.sub, tokens);
            return NextResponse.json({
                user,
                info: `Converted ${amount} ${currency} → ${tokens} tokens`,
            });
        }

        // 🧱 Fixed plans
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
