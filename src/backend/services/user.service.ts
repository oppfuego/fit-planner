import { User } from "../models/user.model";
import { TokenPurchase } from "@/backend/models/tokenPurchase.model";

interface AddTokensInput {
    userId: string;
    tokensAdded: number;
    currency?: string;
    paymentAmount?: number;
}

export const userService = {
    async addTokens({ userId, tokensAdded, currency, paymentAmount }: AddTokensInput) {
        const user = await User.findById(userId);
        if (!user) throw new Error("UserNotFound");

        user.tokens = (user.tokens || 0) + tokensAdded;
        await user.save();

        const purchase = await TokenPurchase.create({
            userId: user._id,
            email: user.email,
            tokensAdded,
            balanceAfter: user.tokens,
            currency: currency || null,
            paymentAmount: typeof paymentAmount === "number" ? paymentAmount : null,
        });

        return { user, purchase };
    },
};
