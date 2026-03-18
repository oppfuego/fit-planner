import { IUserSchema } from "@/backend/types/user.types";
import { sendEmail } from "@/backend/utils/sendEmail";
import { AiOrderDocument } from "@/backend/models/aiOrder.model";

interface TokenPurchaseEmailInput {
    email: string;
    firstName?: string | null;
    tokensAdded: number;
    balance: number;
    currency?: string | null;
    paymentAmount?: number | null;
    transactionDate: Date;
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function formatDate(date: Date): string {
    return new Intl.DateTimeFormat("en-GB", {
        dateStyle: "medium",
        timeStyle: "short",
    }).format(date);
}

function formatGreeting(firstName?: string | null): string {
    return firstName?.trim() ? `Hi ${escapeHtml(firstName.trim())},` : "Hi,";
}

async function sendSafeEmail(to: string, subject: string, text: string, html: string) {
    try {
        await sendEmail(to, subject, text, html);
        return true;
    } catch (error) {
        console.error(`Email delivery failed for ${subject}:`, error);
        return false;
    }
}

export async function sendRegistrationWelcomeEmail(user: IUserSchema) {
    const firstName = user.firstName || user.name;
    const text = `Hi ${firstName}, thanks for registering at FitPlanner.`;
    const html = `
        <div style="font-family: Arial, sans-serif; background:#f4faff; padding:20px; color:#333;">
            <div style="max-width:600px; margin:auto; background:#fff; border-radius:8px; padding:30px;">
                <h2 style="color:#007BFF; text-align:center;">Welcome to FitPlanner</h2>
                <p style="font-size:16px; line-height:1.6;">${escapeHtml(text)}</p>
            </div>
        </div>
    `;

    await sendSafeEmail(user.email, "Welcome to FitPlanner", text, html);
}

export async function sendTokenPurchaseConfirmationEmail(input: TokenPurchaseEmailInput) {
    const moneyLine = input.currency && typeof input.paymentAmount === "number"
        ? `Payment received: ${input.paymentAmount.toFixed(2)} ${input.currency}`
        : null;

    const summaryText = [
        `Token top-up confirmed.`,
        `Tokens added: ${input.tokensAdded}.`,
        moneyLine,
        `New balance: ${input.balance} tokens.`,
        `Transaction date: ${formatDate(input.transactionDate)}.`,
    ].filter(Boolean).join(" ");

    const html = `
        <div style="font-family: Arial, sans-serif; background:#f4faff; padding:20px; color:#333;">
            <div style="max-width:600px; margin:auto; background:#fff; border-radius:8px; padding:30px; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
                <h2 style="color:#007BFF; text-align:center;">Payment Confirmation</h2>
                <p style="font-size:16px; line-height:1.6;">${formatGreeting(input.firstName)}</p>
                <p style="font-size:16px; line-height:1.6;">Your token purchase has been completed successfully.</p>
                <div style="margin:24px 0; padding:16px; border:1px solid #dbe7f0; border-radius:8px; background:#f9fcff;">
                    <p style="margin:0 0 8px;"><strong>Service:</strong> Token top-up</p>
                    <p style="margin:0 0 8px;"><strong>Tokens added:</strong> ${input.tokensAdded}</p>
                    ${moneyLine ? `<p style="margin:0 0 8px;"><strong>Amount:</strong> ${input.paymentAmount?.toFixed(2)} ${escapeHtml(input.currency || "")}</p>` : ""}
                    <p style="margin:0 0 8px;"><strong>New balance:</strong> ${input.balance} tokens</p>
                    <p style="margin:0;"><strong>Transaction date:</strong> ${formatDate(input.transactionDate)}</p>
                </div>
            </div>
        </div>
    `;

    return sendSafeEmail(input.email, "Your FitPlanner payment confirmation", summaryText, html);
}

export async function sendAiOrderConfirmationEmail(user: IUserSchema, order: AiOrderDocument) {
    const summaryText = [
        `Your FitPlanner order is confirmed.`,
        `Service: AI training plan generation.`,
        `Tokens used: ${order.cost}.`,
        `Transaction date: ${formatDate(order.createdAt)}.`,
    ].join(" ");

    const html = `
        <div style="font-family: Arial, sans-serif; background:#f4faff; padding:20px; color:#333;">
            <div style="max-width:600px; margin:auto; background:#fff; border-radius:8px; padding:30px; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
                <h2 style="color:#007BFF; text-align:center;">Order Confirmation</h2>
                <p style="font-size:16px; line-height:1.6;">${formatGreeting(user.firstName)}</p>
                <p style="font-size:16px; line-height:1.6;">Your AI-generated plan has been created successfully.</p>
                <div style="margin:24px 0; padding:16px; border:1px solid #dbe7f0; border-radius:8px; background:#f9fcff;">
                    <p style="margin:0 0 8px;"><strong>Service:</strong> AI training plan generation</p>
                    <p style="margin:0 0 8px;"><strong>Order ID:</strong> ${order._id.toString()}</p>
                    <p style="margin:0 0 8px;"><strong>Tokens used:</strong> ${order.cost}</p>
                    <p style="margin:0 0 8px;"><strong>Transaction date:</strong> ${formatDate(order.createdAt)}</p>
                    <p style="margin:0;"><strong>Request summary:</strong> ${escapeHtml(order.prompt.slice(0, 180))}${order.prompt.length > 180 ? "..." : ""}</p>
                </div>
            </div>
        </div>
    `;

    return sendSafeEmail(user.email, "Your FitPlanner order confirmation", summaryText, html);
}
