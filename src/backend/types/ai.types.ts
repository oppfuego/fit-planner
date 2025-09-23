import { Types } from "mongoose";

export interface AiOrderType {
    _id: Types.ObjectId;
    userId: Types.ObjectId;
    email: string;
    prompt: string;
    response: string;
    createdAt: Date;
}

export interface CreateAiOrderRequest {
    prompt: string;
}

export interface CreateAiOrderResponse {
    order: AiOrderType;
}

export interface GetAiOrdersResponse {
    orders: AiOrderType[];
}

export interface GetAiOrderResponse {
    order: AiOrderType | null;
}

export type AiError =
    | { type: "UserNotFound"; message: string }
    | { type: "InsufficientTokens"; message: string }
    | { type: "OpenAIError"; message: string }
    | { type: "GenericError"; message: string };
