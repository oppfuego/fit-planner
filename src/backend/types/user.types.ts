import { Document, Types } from "mongoose";

export interface IUserSchema extends Document {
    _id: Types.ObjectId;
    name: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    password: string;
    phoneNumber?: string | null;
    dateOfBirth?: Date | null;
    street?: string | null;
    city?: string | null;
    country?: string | null;
    postCode?: string | null;
    tokens: number;
    role: "user" | "admin";
    createdAt: Date;
    updatedAt: Date;
}

export interface UserType {
    _id: string;
    name: string;
    firstName: string | null;
    lastName: string | null;
    email: string;
    phoneNumber: string | null;
    dateOfBirth: Date | null;
    street: string | null;
    city: string | null;
    country: string | null;
    postCode: string | null;
    tokens: number;
    role: "user" | "admin";
    createdAt: Date;
    updatedAt: Date;
}
