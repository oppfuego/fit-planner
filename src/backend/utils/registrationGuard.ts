import mongoose, { Schema, Model } from "mongoose";
import { NextResponse } from "next/server";
import { connectDB } from "@/backend/config/db";

/**
 * Bot protection for the registration endpoint.
 *
 * Bots once created ~245k fake accounts on a sibling site in two days, filling the
 * shared MongoDB Atlas cluster and blocking writes (payments) for every project on it.
 * This guard caps registrations per IP and site-wide; counters live in MongoDB with a
 * TTL index, so they work across serverless instances and clean themselves up.
 */

const PER_IP_LIMIT = 5; // registrations per IP per hour
const GLOBAL_LIMIT = 100; // registrations site-wide per hour (circuit breaker against distributed bots)
const WINDOW_SEC = 60 * 60;

interface RateLimitDoc {
    key: string;
    count: number;
    expiresAt: Date;
}

const RateLimitSchema = new Schema<RateLimitDoc>({
    key: { type: String, required: true, unique: true },
    count: { type: Number, default: 0 },
    expiresAt: { type: Date, required: true, expires: 0 },
});

const RateLimit: Model<RateLimitDoc> =
    (mongoose.models.RateLimit as Model<RateLimitDoc>) ||
    mongoose.model<RateLimitDoc>("RateLimit", RateLimitSchema);

async function hit(name: string, limit: number): Promise<boolean> {
    const windowMs = WINDOW_SEC * 1000;
    const bucket = Math.floor(Date.now() / windowMs);
    const doc = await RateLimit.findOneAndUpdate(
        { key: `${name}:${bucket}` },
        { $inc: { count: 1 }, $setOnInsert: { expiresAt: new Date((bucket + 1) * windowMs) } },
        { upsert: true, returnDocument: "after" }
    ).lean();
    return (doc?.count ?? 0) <= limit;
}

export function getClientIp(headers: Headers): string {
    return (
        headers.get("x-real-ip")?.trim() ||
        headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        "unknown"
    );
}

function tooMany(message: string) {
    // Both `message` and `error` are set so every sign-up form can show the text.
    return NextResponse.json(
        { success: false, type: "RateLimitError", message, error: message },
        { status: 429 }
    );
}

/** Returns a 429 response when the request must be rejected, otherwise null. */
export async function registrationGuard(req: Request): Promise<NextResponse | null> {
    const ip = getClientIp(req.headers);
    try {
        await connectDB();

        if (!(await hit(`register:ip:${ip}`, PER_IP_LIMIT))) {
            console.warn("[registrationGuard] per-IP limit exceeded", { ip });
            return tooMany("Too many registration attempts. Please try again later.");
        }
        if (!(await hit("register:global", GLOBAL_LIMIT))) {
            console.warn("[registrationGuard] global limit exceeded", { ip });
            return tooMany("Registration is temporarily unavailable. Please try again later.");
        }
    } catch (e) {
        // Never block real users because the limiter itself failed.
        console.error("[registrationGuard] limiter unavailable, allowing request:", e);
    }
    return null;
}
