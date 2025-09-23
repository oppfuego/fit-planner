import mongoose from "mongoose";
import { ENV } from "./env";

let isConnected = 0;

export async function connectDB(): Promise<void> {
    if (isConnected) return;
    const conn = await mongoose.connect(ENV.MONGODB_URI);
    isConnected = conn.connections[0].readyState;
    if (ENV.NODE_ENV !== "production") console.log("MongoDB connected");
}
