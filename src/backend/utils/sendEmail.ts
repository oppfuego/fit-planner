import { Resend } from "resend";
import { ENV } from "@/backend/config/env";
import { emailShell, escapeHtml, withCompanyDetailsText } from "@/backend/utils/companyEmail";

const resend = new Resend(ENV.RESEND_API);

export async function sendEmail(
    to: string,
    subject: string,
    text: string,
    html?: string
) {
    try {
        const emailText = withCompanyDetailsText(text || "");

        const response = await resend.emails.send({
            from: ENV.EMAIL_FROM,
            to,
            subject,
            text: emailText,
            html: html || defaultTemplate(subject, text),
        });

        console.log("✅ Email sent via Resend:", response);
        return response;
    } catch (error) {
        console.error("❌ Resend email failed:", error);
        throw error;
    }
}

function defaultTemplate(title: string, message: string) {
    return emailShell(
        title,
        `
            <div style="font-size:16px; line-height:1.6; color:#333; white-space:pre-line;">
                ${escapeHtml(message)}
            </div>
            <div style="text-align:center; margin:30px 0;">
                <a href="${escapeHtml(ENV.APP_URL)}/dashboard"
                   style="background:#007BFF; color:#fff; text-decoration:none; padding:12px 24px; border-radius:6px; font-weight:bold;">
                   Go to Dashboard
                </a>
            </div>
        `
    );
}
