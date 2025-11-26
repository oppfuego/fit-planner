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
        // HEADER
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

        // 1. INTRODUCTION
        {
            type: "text",
            title: "1. Introduction",
            description:
                "We respect your privacy. This short Privacy Policy explains what personal data we collect, why we use it, how long we keep it and how you can exercise your rights. It applies to personal data we collect when you use the FitPlaner website and services.",
        },

        // 2. WHAT DATA WE COLLECT
        {
            type: "text",
            title: "2. What Data We Collect",
            bullets: [
                "Identity & contact: name, email address, postal/billing address (where required).",
                "Account data: username, hashed password, profile details, preferences.",
                "Transactions: order references, payment metadata (provider reference, amounts, dates) — we do not store card numbers or CVV.",
                "Service use: order history, Credits/token ledger, purchased Training Plans, downloads and access logs.",
                "Technical & device: IP address, device type, browser/user-agent, timestamps and access logs.",
                "Support: emails, chat transcripts, attachments you provide.",
                "Optional: marketing preferences and consent records (if you opt in).",
            ],
        },

        // 3. WHY WE PROCESS DATA
        {
            type: "text",
            title: "3. Why We Process Your Data & Legal Bases",
            bullets: [
                "To provide and operate the Service (accounts, Training Plans, downloads) — performance of a contract.",
                "To process payments and prevent fraud (reconciliation, anti-fraud checks, chargebacks) — legal obligation & legitimate interests.",
                "To manage support requests, refunds, complaints — contract / legitimate interests.",
                "To send marketing communications — consent (may be withdrawn at any time).",
                "To improve and secure the Service (analytics, error logs, abuse detection) — legitimate interests, balanced against your rights.",
            ],
        },

        // 4. SHARING & TRANSFERS
        {
            type: "text",
            title: "4. Sharing and International Transfers",
            description:
                "We share data with third parties where necessary to deliver the Service, including payment processors, cloud hosting, analytics providers, crash-reporting tools, customer support platforms and professional advisers. Some may be outside the UK/EEA. Where transfers occur, we use appropriate safeguards such as adequacy decisions or standard contractual clauses (SCCs).",
        },

        // 5. COOKIES
        {
            type: "text",
            title: "5. Cookies and Similar Technologies",
            description:
                "We use cookies and similar technologies (localStorage, sessionStorage, pixels) to operate the Service, maintain sessions, remember preferences, measure performance and, with consent, enable analytics and marketing. Essential cookies do not require consent. See our Cookie Policy for details.",
        },

        // 6. RETENTION
        {
            type: "text",
            title: "6. How Long We Keep Your Data",
            bullets: [
                "Order, payment and transaction data: retained for at least 24 months and up to 6 years for disputes or compliance.",
                "Account profile and access logs: retained while account is active + a reasonable period after closure for fraud prevention and compliance.",
                "Support correspondence: retained as long as needed to resolve the issue + reasonable additional period.",
                "We delete or anonymise personal data when no longer required unless law requires longer retention.",
            ],
        },

        // 7. RIGHTS
        {
            type: "text",
            title: "7. Your Rights",
            bullets: [
                "Right of access — obtain a copy of your personal data.",
                "Right to rectification — correct inaccurate or incomplete data.",
                "Right to erasure — request deletion in certain cases.",
                "Right to restriction — limit how your data is processed.",
                "Right to data portability — receive certain data and reuse it.",
                "Right to object — to processing based on legitimate interests or for direct marketing.",
                "Right to withdraw consent — applicable to marketing and other optional consents.",
                `To exercise any right, contact ${COMPANY_EMAIL}. Proof of identity may be required. We respond within statutory timeframes (usually 1 month).`,
            ],
        },

        // 8. SECURITY
        {
            type: "text",
            title: "8. Security",
            description:
                "We implement technical and organisational measures including access controls, encryption, backups, logging, vulnerability management and least-privilege access. No system is completely secure; we cannot guarantee absolute security.",
        },

        // 9. CHILDREN
        {
            type: "text",
            title: "9. Children",
            description:
                "The Service is not intended for children under 18. We do not knowingly collect their data. If you believe we have done so, contact us and we will delete it.",
        },

        // 10. CHANGES
        {
            type: "text",
            title: "10. Changes to this Policy",
            description:
                "We may update this Privacy Policy from time to time. Material changes will be communicated via email or a prominent notice on the Service. The effective date will be updated accordingly.",
        },

        // 11. CONTACT
        {
            type: "text",
            title: "11. Contact & Complaints",
            description: `If you have questions or wish to exercise your rights, contact: ${COMPANY_EMAIL}.  
If you remain dissatisfied, you may lodge a complaint with the UK Information Commissioner’s Office (ICO).`,
        },
    ],
};

export default privacyPolicySchema;
