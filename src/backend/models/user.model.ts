import mongoose, { Schema, Model } from "mongoose";
import { IUserSchema } from "@/backend/types/user.types";

const UserSchema: Schema<IUserSchema> = new Schema(
    {
        name: { type: String, required: true, trim: true },
        firstName: { type: String, trim: true, default: null },
        lastName: { type: String, trim: true, default: null },
        email: { type: String, required: true, unique: true, lowercase: true, index: true },
        password: { type: String, required: true, select: false },
        phoneNumber: { type: String, trim: true, default: null },
        dateOfBirth: { type: Date, default: null },
        street: { type: String, trim: true, default: null },
        city: { type: String, trim: true, default: null },
        country: { type: String, trim: true, uppercase: true, default: null },
        postCode: { type: String, trim: true, default: null },
        role: { type: String, enum: ["user", "admin"], default: "user" },
        tokens: { type: Number, default: 10 }
    },
    { timestamps: true }
);

export const User: Model<IUserSchema> =
    mongoose.models.User || mongoose.model<IUserSchema>("User", UserSchema);
