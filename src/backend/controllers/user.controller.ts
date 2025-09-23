import { connectDB } from "../config/db";
import { userService } from "../services/user.service";
import { UserType } from "@/backend/types/user.types";
import {sendEmail} from "@/backend/utils/sendEmail";

export const userController = {
    async buyTokens(userId: string, amount: number): Promise<UserType> {
        await connectDB();
        const user = await userService.addTokens(userId, amount);
        sendEmail(user.email, 'Tokens Purchased', `You have successfully purchased ${amount} tokens. Your new balance is ${user.tokens} tokens.`);
        return {
            _id: user._id.toString(),
            name: user.name,
            email: user.email,
            role: user.role,
            tokens: user.tokens,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };
    },
};
