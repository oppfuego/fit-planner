import {
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NAME,
    COMPANY_NUMBER,
    COMPANY_PHONE,
} from "@/resources/constants";

type CompanyInfo = {
    name: string;
    address: string;
    phone: string;
    legalName: string;
    number: string;
    email: string;
};

function envValue(value: string | undefined, fallback = ""): string {
    return value?.trim() || fallback;
}

export function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export function getCompanyInfo(): CompanyInfo {
    const name = envValue(COMPANY_NAME, "Averis");

    return {
        name,
        address: envValue(COMPANY_ADDRESS),
        phone: envValue(COMPANY_PHONE),
        legalName: envValue(COMPANY_LEGAL_NAME, name),
        number: envValue(COMPANY_NUMBER),
        email: envValue(COMPANY_EMAIL),
    };
}

export function companyDetailsText(): string {
    const company = getCompanyInfo();

    return [
        `Company: ${company.name}`,
        company.legalName ? `Legal name: ${company.legalName}` : null,
        company.number ? `Company number: ${company.number}` : null,
        company.address ? `Address: ${company.address}` : null,
        company.phone ? `Phone: ${company.phone}` : null,
        company.email ? `Email: ${company.email}` : null,
    ].filter(Boolean).join("\n");
}

export function withCompanyDetailsText(text: string): string {
    return [text.trim(), companyDetailsText()].filter(Boolean).join("\n\n");
}

export function companyDetailsHtml(): string {
    const company = getCompanyInfo();
    const rows = [
        ["Company", company.name],
        ["Legal name", company.legalName],
        ["Company number", company.number],
        ["Address", company.address],
        ["Phone", company.phone],
        ["Email", company.email],
    ].filter(([, value]) => value);

    return `
        <div style="font-size:13px; line-height:1.5; color:#666; text-align:center;">
            ${rows.map(([label, value]) => `<p style="margin:0 0 4px;"><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`).join("")}
        </div>
    `;
}

export function emailShell(title: string, bodyHtml: string): string {
    const company = getCompanyInfo();

    return `
        <div style="font-family: Arial, sans-serif; background:#f4faff; padding:20px; color:#333;">
            <div style="max-width:600px; margin:auto; background:#fff; border-radius:8px; padding:30px; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
                <h2 style="color:#007BFF; text-align:center;">${escapeHtml(title)}</h2>
                ${bodyHtml}
                <hr style="margin:24px 0; border:none; border-top:1px solid #eee;" />
                ${companyDetailsHtml()}
                <p style="font-size:13px; color:#777; text-align:center; margin:18px 0 0;">
                    © ${new Date().getFullYear()} ${escapeHtml(company.name)} - All rights reserved.
                </p>
            </div>
        </div>
    `;
}
