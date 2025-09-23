import bcrypt from "bcryptjs";
import { User } from "../models/user.model";
import { RefreshSession } from "../models/refreshSession.model";
import { sha256, randomToken } from "../utils/crypto";
import { signAccessToken, signRefreshToken } from "../utils/jwt";
import { ENV } from "../config/env";
import { Types } from "mongoose";
import {sendEmail} from "@/backend/utils/sendEmail";

function parseDurationToSec(input: string): number {
    const m = input.match(/^(\d+)([smhd])?$/i);
    if (!m) return 60 * 60 * 24 * 30;
    const n = parseInt(m[1], 10);
    const unit = (m[2] || "s").toLowerCase();
    const mult = unit === "s" ? 1 : unit === "m" ? 60 : unit === "h" ? 3600 : 86400;
    return n * mult;
}

const REFRESH_TTL_SEC = parseDurationToSec(ENV.REFRESH_TOKEN_EXPIRES);

export const authService = {
    async register(data: { name: string; email: string; password: string }) {
        const existing = await User.findOne({ email: data.email.toLowerCase() });
        if (existing) throw new Error("Email already registered");

        const hashed = await bcrypt.hash(data.password, 12);
        const user = await User.create({ ...data, email: data.email.toLowerCase(), password: hashed });
        const result = await this.issueTokensAndSession(user._id, user.email, user.role, undefined, undefined);
        await sendEmail(
            user.email,
            "Welcome to TechGuide 🎉",
            `Hi ${user.name}, thanks for registering at TechGuide.`
        );

        return { user, ...result };
    },

    async login(email: string, password: string, userAgent?: string, ip?: string) {
        const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
        if (!user) throw new Error("Invalid credentials");

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) throw new Error("Invalid credentials");

        const result = await this.issueTokensAndSession(user._id, user.email, user.role, userAgent, ip);
        return { user, ...result };
    },

    async issueTokensAndSession(userId: Types.ObjectId, email: string, role: string, userAgent?: string, ip?: string) {
        // refresh як рандомний токен (не JWT); у БД зберігаємо hash
        const rawRefresh = randomToken(64);
        const tokenHash = sha256(rawRefresh);

        const expiresAt = new Date(Date.now() + REFRESH_TTL_SEC * 1000);
        const session = await RefreshSession.create({
            userId,
            tokenHash,
            userAgent,
            ip,
            expiresAt,
        });

        const accessToken = await signAccessToken({ sub: userId.toString(), email, role });
        // додатково — JWT refresh з payload (sid) для швидкої перевірки підпису:
        const refreshJWT = await signRefreshToken({ sub: userId.toString(), sid: session._id.toString() }, ENV.REFRESH_TOKEN_EXPIRES);

        // передаємо клієнту: access JWT + "rawRefresh" як cookie значення (але ми дамо саме refreshJWT у cookie, а raw — НЕ віддаємо)
        // Трюк: кладемо у cookie refresh **JWT** (підписаний), а в БД тримаємо hash від "rawRefresh".
        // Щоб зв'язати їх, в JWT тримаємо sid сесії. При refresh перевіряємо JWT (підпис) + наявність сесії (sid) + не відкликана.
        // Захист від повторного використання: ротуємо сесію (revoke + нова).
        // Альтернатива: зберігати в cookie rawRefresh, а перевіряти hash — теж ок, але тут ми перевіряємо підпис і сесію одночасно.

        return { accessToken, refreshToken: refreshJWT, session };
    },

    async refresh(refreshJWT: string, userAgent?: string, ip?: string) {
        // вериф підпису refresh JWT і дістанемо sid
        const { verifyRefreshToken } = await import("../utils/jwt");
        let payload: { sub: string; sid: string };
        try {
            payload = await verifyRefreshToken(refreshJWT);
        } catch {
            throw new Error("SessionInvalid");
        }

        const session = await RefreshSession.findById(payload.sid);
        if (!session || session.revokedAt || session.expiresAt.getTime() < Date.now()) {
            throw new Error("SessionInvalid");
        }

        // **Ротація**: відкликаємо стару, створюємо нову сесію/refresh
        session.revokedAt = new Date();
        await session.save();

        const user = await User.findById(session.userId);
        if (!user) throw new Error("UserNotFound");

        const { accessToken, refreshToken } = await this.issueTokensAndSession(user._id, user.email, user.role, userAgent, ip);

        return { user, accessToken, refreshToken };
    },

    async me(userId: string) {
        const user = await User.findById(userId).select("-password");
        if (!user) throw new Error("UserNotFound");
        return user;
    },

    async logout(refreshJWT: string) {
        const { verifyRefreshToken } = await import("../utils/jwt");
        try {
            const payload = await verifyRefreshToken<{ sub: string; sid: string }>(refreshJWT);
            await RefreshSession.findByIdAndUpdate(payload.sid, { $set: { revokedAt: new Date() } });
        } catch {
            // ідempotent
        }
    },

    async logoutAll(userId: string) {
        await RefreshSession.updateMany({ userId }, { $set: { revokedAt: new Date() } });
    },
};
