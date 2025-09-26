import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
} from "@/resources/constants";

const privacyPolicySchema: PageSchema = {
    meta: {
        title: `Privacy Policy – ${COMPANY_NAME}`,
        description: `Privacy Policy for ${COMPANY_NAME}: what data we collect, why we process it, retention periods, your rights, and security measures.`,
        keywords: [
            "privacy policy",
            "data protection",
            "UK GDPR",
            "user rights",
            "data security",
            "cookies",
        ],
        canonical: "/privacy-policy",
        ogImage: {
            title: `${COMPANY_NAME} – Privacy Policy`,
            description: "Clear explanation of how we handle your personal data.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Privacy Policy",
            description: `Effective date: 15th September 2025  
Data controller: ${COMPANY_LEGAL_NAME}  
Company no.: ${COMPANY_NUMBER}  
Registered office: ${COMPANY_ADDRESS}  
Contact / Data Protection / Support: ${COMPANY_EMAIL}  
Service: https://www.fitplaner.co.uk`,
        },
        {
            type: "text",
            title: "1. Introduction",
            description:
                `We respect your privacy. This Privacy Policy explains what personal data we collect, why we use it, how long we keep it and how you can exercise your rights. It applies to data collected when you use the ${COMPANY_NAME} website and services.`,
        },
        {
            type: "text",
            title: "2. What Data We Collect",
            bullets: [
                "Identity & contact: name, email, postal/billing address (if required).",
                "Account data: username, hashed password, profile details, preferences.",
                "Transactions: order references, payment metadata (amounts, dates) — card numbers and CVV are never stored.",
                "Service use: order history, Credits/token ledger, purchased Training Plans, downloads, logs.",
                "Technical & device: IP address, device type, browser/user-agent, timestamps.",
                "Support: correspondence with support (emails, chats, attachments).",
                "Optional: marketing preferences and consent records.",
            ],
        },
        {
            type: "text",
            title: "3. Why We Process Your Data & Legal Bases",
            bullets: [
                "To provide and operate the Service — performance of a contract.",
                "To process payments and prevent fraud — legal obligation & legitimate interests.",
                "To respond to support requests, refunds, complaints — contract / legitimate interests.",
                "To send marketing communications — consent (can be withdrawn).",
                "To improve and secure the Service (analytics, error logs, abuse detection) — legitimate interests balanced with your rights.",
            ],
        },
        {
            type: "text",
            title: "4. Sharing and International Transfers",
            description:
                "We share data with third parties where necessary: payment processors, cloud hosting/storage, analytics, crash reporting, support tools, and professional advisers. Some providers may be outside the UK/EEA. In such cases, safeguards are applied (adequacy decisions, SCCs, or lawful mechanisms).",
        },
        {
            type: "text",
            title: "5. Cookies and Similar Technologies",
            description:
                "We use cookies, localStorage, sessionStorage, and pixels to operate the Service, remember preferences, enable login, measure performance, and (with consent) support analytics and marketing. Essential cookies do not require consent. See our Cookie Policy for details.",
        },
        {
            type: "text",
            title: "6. How Long We Keep Your Data",
            bullets: [
                "Order/payment/transaction records: kept for 24 months minimum, up to 6 years for disputes or compliance.",
                "Account profiles and logs: kept while active + reasonable period after closure for fraud prevention and compliance.",
                "Support correspondence: retained as long as necessary to resolve, then for a reasonable period.",
                "Data is deleted or anonymised when no longer required, unless law requires longer retention.",
            ],
        },
        {
            type: "text",
            title: "7. Your Rights",
            bullets: [
                "Right of access — obtain a copy of your data.",
                "Right to rectification — correct inaccurate or incomplete data.",
                "Right to erasure — request deletion in certain circumstances.",
                "Right to restriction — limit how your data is used.",
                "Right to data portability — re-use your data for own purposes.",
                "Right to object — to processing for legitimate interests or marketing.",
                "Right to withdraw consent — withdraw marketing/consent at any time.",
                `To exercise rights, contact ${COMPANY_EMAIL}. We may require ID verification. Response time: normally 1 month.`,
            ],
        },
        {
            type: "text",
            title: "8. Security",
            description:
                "We apply access controls, encryption, secure backups, logging, vulnerability management, and least-privilege access. No system is 100% secure; we cannot guarantee absolute security.",
        },
        {
            type: "text",
            title: "9. Children",
            description:
                "The Service is not intended for children under 18. We do not knowingly collect their data. If you believe we have done so, contact us and we will delete it.",
        },
        {
            type: "text",
            title: "10. Changes to this Policy",
            description:
                "We may update this Privacy Policy from time to time. Material changes will be notified via email or a prominent notice on the Service. The effective date will be updated.",
        },
        {
            type: "text",
            title: "11. Contact & Complaints",
            description: `For questions or to exercise your rights, contact: ${COMPANY_EMAIL}.  
If dissatisfied, you can lodge a complaint with the UK Information Commissioner’s Office (ICO).`,
        },
    ],
};

export default privacyPolicySchema;
