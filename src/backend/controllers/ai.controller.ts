import { connectDB } from "../config/db";
import { aiService } from "../services/ai.service";
import { CreateAiOrderRequest, CreateAiOrderResponse, GetAiOrdersResponse, GetAiOrderResponse } from "@/backend/types/ai.types";

export const aiController = {
    async createOrder(userId: string, email: string, body: CreateAiOrderRequest): Promise<CreateAiOrderResponse> {
        await connectDB();
        const order = await aiService.processPrompt(userId, email, body.prompt);
        return { order };
    },

    async getOrders(userId: string) {
        await connectDB();
        return aiService.getOrders(userId);
    },

    async getOrder(userId: string, orderId: string): Promise<GetAiOrderResponse> {
        await connectDB();
        const order = await aiService.getOrderById(userId, orderId);
        return { order };
    },
};
