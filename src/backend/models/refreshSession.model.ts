import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface IRefreshSession extends Document {
    userId: Types.ObjectId;
    tokenHash: string;
    userAgent?: string;
    ip?: string;
    expiresAt: Date;
    revokedAt?: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

const RefreshSessionSchema = new Schema<IRefreshSession>(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
        tokenHash: { type: String, required: true, unique: true },
        userAgent: { type: String },
        ip: { type: String },
        expiresAt: { type: Date, required: true, index: true },
        revokedAt: { type: Date, default: null },
    },
    { timestamps: true }
);

export const RefreshSession: Model<IRefreshSession> =
    mongoose.models.RefreshSession ||
    mongoose.model<IRefreshSession>("RefreshSession", RefreshSessionSchema);
