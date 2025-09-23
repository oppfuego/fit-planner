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
        description: `Privacy Policy for ${COMPANY_NAME}: how we collect, use, and protect your fitness and account data when you use our training platform.`,
        keywords: [
            "privacy policy",
            "fitness app data",
            "GDPR",
            "training platform security",
            "personal data protection"
        ],
        canonical: "/privacy-policy",
        ogImage: {
            title: `${COMPANY_NAME} – Privacy Policy`,
            description: "Clear and transparent privacy practices for your training journey.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "Privacy Policy – Overview",
            description: `This Privacy Policy explains how ${COMPANY_NAME} collects, uses, and protects your data when you use our training platform. By signing up, buying tokens, or entering your fitness data, you agree to the practices described here.`
        },
        {
            type: "text",
            title: "1. Data We Collect",
            bullets: [
                "Account information: name, email, password.",
                "Payment details (processed securely via third-party providers).",
                "Fitness data: age, weight, goals, preferences, and training history.",
                "Usage data such as IP address, browser type, and login activity."
            ]
        },
        {
            type: "text",
            title: "2. How We Use Your Data",
            bullets: [
                "To generate personalized training plans.",
                "To provide nutrition and recovery recommendations (if applicable).",
                "To manage your account and purchased tokens.",
                "To improve the platform, features, and user experience."
            ]
        },
        {
            type: "text",
            title: "3. Legal Basis for Processing",
            description: "We process your personal data under the legal bases of consent, contract performance, compliance with legal obligations, and legitimate interest (e.g., improving training services)."
        },
        {
            type: "text",
            title: "4. Data Sharing",
            description: "We never sell your fitness data. Limited information may be shared with trusted partners only to deliver services (e.g., payment processors, hosting providers) under confidentiality agreements."
        },
        {
            type: "text",
            title: "5. Data Retention",
            description: "We keep personal and fitness data only as long as needed to provide training services or comply with legal requirements. You may request deletion of your account and data at any time."
        },
        {
            type: "text",
            title: "6. Data Security",
            bullets: [
                "Encrypted storage of sensitive data.",
                "Authentication and role-based access controls.",
                "Regular monitoring and security updates."
            ]
        },
        {
            type: "text",
            title: "7. Your Rights",
            bullets: [
                "Access your stored fitness and account data.",
                "Request corrections or updates.",
                "Request deletion of your account.",
                "Restrict or object to certain processing activities.",
                "Request a copy of your data (data portability)."
            ]
        },
        {
            type: "text",
            title: "8. Cookies and Tracking",
            description: "We use cookies and analytics to track app usage and improve performance. You can disable cookies in your browser or device settings, but some features may not work properly."
        },
        {
            type: "text",
            title: "9. International Data Transfers",
            description: "If your data is transferred outside the UK/EU, we ensure proper safeguards (such as Standard Contractual Clauses) to maintain protection."
        },
        {
            type: "text",
            title: "10. Children’s Privacy",
            description: `${COMPANY_NAME} is not intended for users under 16. If we learn we have collected data from minors, it will be deleted promptly.`
        },
        {
            type: "text",
            title: "11. Changes to the Privacy Policy",
            description: "We may update this Privacy Policy to reflect platform changes. Updates will be announced on the site. Continued use after changes means acceptance of the new terms."
        },
        {
            type: "text",
            title: "12. Contact",
            bullets: [
                `Company: ${COMPANY_LEGAL_NAME}`,
                `Company number: ${COMPANY_NUMBER}`,
                `Address: ${COMPANY_ADDRESS}`,
                `Support: ${COMPANY_EMAIL}`
            ]
        },
        {
            type: "text",
            title: "Effective Date",
            description: "This Privacy Policy is effective upon publication and replaces previous versions."
        },
        {
            type: "text",
            title: "Valid from",
            description: "22 September 2025"
        }
    ]
};

export default privacyPolicySchema;
