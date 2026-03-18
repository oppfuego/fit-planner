import mongoose, { Document, Schema } from "mongoose";

export interface TokenPurchaseDocument extends Document {
    userId: mongoose.Types.ObjectId;
    email: string;
    tokensAdded: number;
    balanceAfter: number;
    currency?: string | null;
    paymentAmount?: number | null;
    confirmationEmailSentAt?: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

const tokenPurchaseSchema = new Schema<TokenPurchaseDocument>(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        email: { type: String, required: true },
        tokensAdded: { type: Number, required: true },
        balanceAfter: { type: Number, required: true },
        currency: { type: String, trim: true, default: null },
        paymentAmount: { type: Number, default: null },
        confirmationEmailSentAt: { type: Date, default: null },
    },
    { timestamps: true }
);

export const TokenPurchase =
    mongoose.models.TokenPurchase || mongoose.model<TokenPurchaseDocument>("TokenPurchase", tokenPurchaseSchema);
