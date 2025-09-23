export function env(name: string, fallback?: string): string {
    const value = process.env[name] ?? fallback;
    if (!value) {
        throw new Error(`${name} is not defined in environment variables.`);
    }
    return value;
}

export const ENV = {
    MONGODB_URI: env("MONGODB_URI"),
    JWT_ACCESS_SECRET: env("JWT_ACCESS_SECRET"),
    JWT_REFRESH_SECRET: env("JWT_REFRESH_SECRET"),
    ACCESS_TOKEN_EXPIRES: env("ACCESS_TOKEN_EXPIRES", "15m"),
    REFRESH_TOKEN_EXPIRES: env("REFRESH_TOKEN_EXPIRES", "30d"),
    ACCESS_COOKIE_NAME: env("ACCESS_COOKIE_NAME", "access_token"),
    REFRESH_COOKIE_NAME: env("REFRESH_COOKIE_NAME", "refresh_token"),
    APP_URL: env("APP_URL", "http://localhost:3000"),
    NODE_ENV: env("NODE_ENV", "development"),
    OPENAI_API_KEY: env("OPENAI_API_KEY", "none"),
    AI_COST_PER_REQUEST: env("AI_COST_PER_REQUEST", "tokens_per_request"),
    SMTP_HOST: env("SMTP_HOST", "smtp.tech-text.co.uk"),
    SMTP_PORT: env("SMTP_PORT", "465"),
    SMTP_SECURE: env("SMTP_SECURE", "true") === "true",
    SMTP_USER: env("SMTP_USER", ""),
    SMTP_PASS: env("SMTP_PASS", ""),
    EMAIL_FROM: env("EMAIL_FROM", ""),
    RESEND_API: env("RESEND_API", ""),
};