import { connectDB } from "../config/db";
import { userService } from "../services/user.service";
import { UserType } from "@/backend/types/user.types";
import { sendTokenPurchaseConfirmationEmail } from "@/backend/services/email.service";
import { mapUserToResponse } from "@/backend/utils/userMapper";

interface BuyTokensInput {
    userId: string;
    tokensAdded: number;
    currency?: string;
    paymentAmount?: number;
}

export const userController = {
    async buyTokens(input: BuyTokensInput): Promise<UserType> {
        await connectDB();
        const { user, purchase } = await userService.addTokens(input);

        if (!purchase.confirmationEmailSentAt) {
            const sent = await sendTokenPurchaseConfirmationEmail({
                email: user.email,
                firstName: user.firstName,
                tokensAdded: purchase.tokensAdded,
                balance: purchase.balanceAfter,
                currency: purchase.currency,
                paymentAmount: purchase.paymentAmount,
                transactionDate: purchase.createdAt,
            });

            if (sent) {
                purchase.confirmationEmailSentAt = new Date();
                await purchase.save();
            }
        }

        return mapUserToResponse(user);
    },
};
