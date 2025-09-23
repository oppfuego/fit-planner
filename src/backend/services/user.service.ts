import { User } from "../models/user.model";

export const userService = {
    async addTokens(userId: string, amount: number) {
        const user = await User.findById(userId);
        if (!user) throw new Error("UserNotFound");

        user.tokens = (user.tokens || 0) + amount;
        await user.save();
        return user;
    },
};
