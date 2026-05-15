import { IUserSchema } from "@/backend/types/user.types";
import { sendEmail } from "@/backend/utils/sendEmail";
import { AiOrderDocument } from "@/backend/models/aiOrder.model";
import { emailShell, escapeHtml, getCompanyInfo } from "@/backend/utils/companyEmail";

interface TokenPurchaseEmailInput {
    email: string;
    firstName?: string | null;
    tokensAdded: number;
    balance: number;
    currency?: string | null;
    paymentAmount?: number | null;
    transactionDate: Date;
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
    const company = getCompanyInfo();
    const firstName = user.firstName || user.name;
    const text = `${firstName?.trim() ? `Hi ${firstName.trim()},` : "Hi,"} thanks for registering at ${company.name}.`;
    const html = emailShell(
        `Welcome to ${company.name}`,
        `
            <p style="font-size:16px; line-height:1.6;">${formatGreeting(firstName)}</p>
            <p style="font-size:16px; line-height:1.6;">Thanks for registering at ${escapeHtml(company.name)}.</p>
        `
    );

    await sendSafeEmail(user.email, `Welcome to ${company.name}`, text, html);
}

export async function sendTokenPurchaseConfirmationEmail(input: TokenPurchaseEmailInput) {
    const company = getCompanyInfo();
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

    const html = emailShell(
        "Payment Confirmation",
        `
            <p style="font-size:16px; line-height:1.6;">${formatGreeting(input.firstName)}</p>
            <p style="font-size:16px; line-height:1.6;">Your token purchase has been completed successfully.</p>
            <div style="margin:24px 0; padding:16px; border:1px solid #dbe7f0; border-radius:8px; background:#f9fcff;">
                <p style="margin:0 0 8px;"><strong>Service:</strong> Token top-up</p>
                <p style="margin:0 0 8px;"><strong>Tokens added:</strong> ${input.tokensAdded}</p>
                ${moneyLine ? `<p style="margin:0 0 8px;"><strong>Amount:</strong> ${input.paymentAmount?.toFixed(2)} ${escapeHtml(input.currency || "")}</p>` : ""}
                <p style="margin:0 0 8px;"><strong>New balance:</strong> ${input.balance} tokens</p>
                <p style="margin:0;"><strong>Transaction date:</strong> ${formatDate(input.transactionDate)}</p>
            </div>
        `
    );

    return sendSafeEmail(input.email, `Your ${company.name} payment confirmation`, summaryText, html);
}

export async function sendAiOrderConfirmationEmail(user: IUserSchema, order: AiOrderDocument) {
    const company = getCompanyInfo();
    const summaryText = [
        `Your ${company.name} order is confirmed.`,
        `Service: AI training plan generation.`,
        `Tokens used: ${order.cost}.`,
        `Transaction date: ${formatDate(order.createdAt)}.`,
    ].join(" ");

    const html = emailShell(
        "Order Confirmation",
        `
            <p style="font-size:16px; line-height:1.6;">${formatGreeting(user.firstName)}</p>
            <p style="font-size:16px; line-height:1.6;">Your AI-generated plan has been created successfully.</p>
            <div style="margin:24px 0; padding:16px; border:1px solid #dbe7f0; border-radius:8px; background:#f9fcff;">
                <p style="margin:0 0 8px;"><strong>Service:</strong> AI training plan generation</p>
                <p style="margin:0 0 8px;"><strong>Order ID:</strong> ${String(order._id)}</p>
                <p style="margin:0 0 8px;"><strong>Tokens used:</strong> ${order.cost}</p>
                <p style="margin:0 0 8px;"><strong>Transaction date:</strong> ${formatDate(order.createdAt)}</p>
                <p style="margin:0;"><strong>Request summary:</strong> ${escapeHtml(order.prompt.slice(0, 180))}${order.prompt.length > 180 ? "..." : ""}</p>
            </div>
        `
    );

    return sendSafeEmail(user.email, `Your ${company.name} order confirmation`, summaryText, html);
}
