import mongoose, { Schema, Document } from "mongoose";

export interface AiOrderDocument extends Document {
    userId: mongoose.Types.ObjectId;
    email: string;
    prompt: string;
    response: string;
    createdAt: Date;
}

const aiOrderSchema = new Schema<AiOrderDocument>({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    email: { type: String, required: true },
    prompt: { type: String, required: true },
    response: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export const AiOrder =
    mongoose.models.AiOrder || mongoose.model<AiOrderDocument>("AiOrder", aiOrderSchema);
