import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
} from "@/resources/constants";

const termsSchema: PageSchema = {
    meta: {
        title: `Terms & Conditions – ${COMPANY_NAME}`,
        description: `Terms of Service for ${COMPANY_NAME}: using the platform, uploading text, credit purchases, delivery of polished PDFs, privacy, and user rights.`,
        keywords: [
            "terms",
            "terms and conditions",
            "service agreement",
            "text editing",
            "credits",
            "PDF delivery",
            "user rights",
        ],
        canonical: "/terms",
        ogImage: {
            title: `${COMPANY_NAME} – Terms & Conditions`,
            description: "Clear and transparent conditions for using our text editing services.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Overview",
            description: `These Terms govern the use of ${COMPANY_NAME}, a platform where users can upload text and receive polished documents in PDF format. By creating an account, purchasing credits, or submitting a document, you agree to these Terms.`,
        },
        {
            type: "text",
            title: "1. Service Description",
            description: `${COMPANY_NAME} provides text correction, grammar and style improvements, and formatting into professional PDFs. Documents are returned digitally, typically within 24 hours.`,
            bullets: [
                "For academic, business, or personal use",
                "Delivery exclusively in PDF format",
                "Professional editing, not legal or medical advice",
            ],
        },
        {
            type: "text",
            title: "2. Accounts",
            description: "Users must register an account to access services. Account holders are responsible for all activity linked to their credentials.",
            bullets: [
                "Provide accurate registration information",
                "Keep login details secure",
                "Accounts may be suspended for misuse or fraud",
            ],
        },
        {
            type: "text",
            title: "3. Credits & Payments",
            description: `Services are provided through a credit system. Credits must be purchased in advance and are deducted per document.`,
            bullets: [
                "Credits are linked to your account and non-transferable",
                "Credits cannot be converted to real currency",
                "Refunds follow our separate Refund Policy",
            ],
        },
        {
            type: "text",
            title: "4. Orders & Delivery",
            description: "Orders are placed by uploading text and paying with credits. Polished PDFs are typically delivered within 24 hours, but times may vary depending on document length and demand.",
        },
        {
            type: "text",
            title: "5. Acceptable Use",
            bullets: [
                "Do not upload unlawful, offensive, or harmful content",
                "No reselling of polished documents",
                "Use the service only for legitimate academic, business, or personal purposes",
            ],
        },
        {
            type: "text",
            title: "6. Privacy & Data Protection",
            description: `${COMPANY_NAME} processes personal data under UK/EU data protection laws. For details, please review our separate Privacy Policy.`,
        },
        {
            type: "text",
            title: "7. Intellectual Property",
            description: `All platform technology, branding, and software belong to ${COMPANY_LEGAL_NAME}. Documents you upload remain your intellectual property; ${COMPANY_NAME} only processes them to provide services.`,
        },
        {
            type: "text",
            title: "8. Liability",
            description: `${COMPANY_NAME} strives for accuracy but cannot guarantee absolute error-free results. Liability is limited to intent, gross negligence, and mandatory legal requirements.`,
        },
        {
            type: "text",
            title: "9. Termination",
            description: `You may close your account at any time. ${COMPANY_LEGAL_NAME} reserves the right to suspend accounts that violate these Terms. Credits may be forfeited upon termination unless required otherwise by law.`,
        },
        {
            type: "text",
            title: "10. Changes to Terms",
            description: `${COMPANY_NAME} may update these Terms for security, legal, or operational reasons. Material changes will be communicated via the website. Continued use after updates means acceptance.`,
        },
        {
            type: "text",
            title: "11. Governing Law",
            description: "These Terms are governed by the laws of England and Wales. Venue for disputes shall be London, UK, where permissible.",
        },
        {
            type: "text",
            title: "12. Contact",
            bullets: [
                `Company: ${COMPANY_LEGAL_NAME}`,
                `Company number: ${COMPANY_NUMBER}`,
                `Address: ${COMPANY_ADDRESS}`,
                `Email: ${COMPANY_EMAIL}`,
            ],
        },
        {
            type: "text",
            title: "Effective Date",
            description: "These Terms are effective from 18 September 2025 and replace any prior versions.",
        },
    ],
};

export default termsSchema;
