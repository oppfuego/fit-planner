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
        description: `Terms and Conditions for ${COMPANY_NAME}: eligibility, credits, payments, refunds, health disclaimers, IP, liability, and governing law.`,
        keywords: [
            "terms",
            "terms and conditions",
            "service terms",
            "refund policy",
            "liability",
            "fitplaner",
        ],
        canonical: "/terms",
        ogImage: {
            title: `${COMPANY_NAME} – Terms & Conditions`,
            description: "Transparent and legally compliant terms for service usage.",
            bg: "#ffffff",
            color: "#000000",
        },
    },

    blocks: [
        {
            type: "text",
            title: "Terms and Conditions",
            description: `Effective date: 15th September 2025`,
        },

        // 1. INTRODUCTION
        {
            type: "text",
            title: "1. Introduction",
            bullets: [
                `These Terms and Conditions govern your access to and use of the ${COMPANY_NAME} website and services (“the Service”) operated by ${COMPANY_LEGAL_NAME} (company number: ${COMPANY_NUMBER}, registered office: ${COMPANY_ADDRESS}).`,
                `By accessing or using the Service, creating an account, purchasing Credits (see clause 4), booking paid services or otherwise interacting with the Service, you agree to be bound by these Terms.`,
                `If you do not agree with any part of these Terms, you must not use the Service.`,
            ],
        },

        // 2. DEFINITIONS
        {
            type: "text",
            title: "2. Definitions",
            bullets: [
                "Account – the user account created on the Service.",
                "Training Plan(s) – personalised or pre-made workout programmes, exercise routines, diet guidance or related digital content (PDF, DOCX, etc.).",
                "Credits (Tokens) – internal unit of account used to obtain Services.",
                "Service(s) / Product(s) – Training Plans, coaching, consultations, and other goods or services provided.",
                "You / Your / Customer – the person or legal entity using the Service or purchasing Credits.",
            ],
        },

        // 3. ELIGIBILITY & ACCOUNT REGISTRATION
        {
            type: "text",
            title: "3. Eligibility and Account Registration",
            bullets: [
                "You must be at least 18 years old to register and use the Service.",
                "If registering for a company, you confirm you are authorised to do so.",
                "You must provide accurate, current and complete information and keep it updated.",
                `You must notify us immediately of any unauthorised Account access at ${COMPANY_EMAIL}.`,
            ],
        },

        // 4. CREDITS (TOKENS)
        {
            type: "text",
            title: "4. Credits (Tokens)",
            bullets: [
                "Credits are a virtual internal accounting mechanism, not legal tender or investments.",
                "The nominal value of Credits is shown at checkout.",
                "We may vary the nominal value prospectively.",
                "Prices for Services may be expressed in Credits.",
                "Credits are credited after successful payment and deducted when redeemed.",
                "Unused Credits may be refundable under the Refund Policy.",
                "Promotional Credit packages or bonuses may occasionally be offered.",
            ],
        },

        // 5. ORDERING, PAYMENT, CHECKOUT
        {
            type: "text",
            title: "5. Ordering, Payment and Checkout",
            bullets: [
                "Orders placed through the Service are subject to Company acceptance.",
                "Payment methods available will be shown at checkout.",
                "At checkout you will see the Credits purchased/used, nominal value, fiat payable, and applicable taxes/fees.",
                "Where digital content is provided via download or online access, title transfers upon provision of the access link.",
            ],
        },

        // 6. REFUNDS & CONSUMER RIGHTS
        {
            type: "text",
            title: "6. Refunds, Cancellations and Consumer Rights",
            bullets: [
                "Where digital content is supplied immediately with your agreement, you may lose cancellation rights under UK law.",
                "Unused Credits may be refunded at purchase price before use (minus fees).",
                `If a Training Plan or Service is faulty or not as described, contact ${COMPANY_EMAIL} with your details.`,
                "Refund or cancellation requests must be sent with full details for review.",
            ],
        },

        // 7. HEALTH & SAFETY
        {
            type: "text",
            title: "7. Health & Safety; No Medical Advice",
            bullets: [
                "Training Plans do not constitute medical advice.",
                "Consult a healthcare professional before starting new exercise programmes.",
                "You confirm you are physically able to perform recommended exercises.",
                "The Company is not responsible for injuries or damages resulting from use of the Service.",
            ],
        },

        // 8. INTELLECTUAL PROPERTY
        {
            type: "text",
            title: "8. Intellectual Property Rights",
            description: `All IP rights in content and materials belong to ${COMPANY_LEGAL_NAME} unless stated otherwise.`,
            bullets: [
                "You receive a limited, non-transferable licence for personal, non-commercial use.",
                "You may not copy, reproduce, sell, distribute or alter Training Plans.",
                "Custom Training Plans may have separate written terms.",
            ],
        },

        // 9. WARRANTIES
        {
            type: "text",
            title: "9. Warranties and Disclaimers",
            bullets: [
                "We warrant we have rights to grant the licences described.",
                "Services are provided “as is” and “as available”.",
                "We disclaim implied warranties of fitness, quality or accuracy.",
                "Individual results may vary; we do not guarantee specific outcomes.",
            ],
        },

        // 10. LIMITATION OF LIABILITY
        {
            type: "text",
            title: "10. Limitation of Liability",
            bullets: [
                "Nothing limits liability for death/personal injury due to negligence or fraud.",
                "Liability is capped at the amount paid in the previous 12 months.",
                "We are not liable for indirect or consequential losses such as lost profits or data.",
            ],
        },

        // 11. INDEMNITY
        {
            type: "text",
            title: "11. Indemnity",
            bullets: [
                "Your breach of these Terms.",
                "Your misuse of the Service or Training Plans.",
                "Your violation of law or third-party rights.",
            ],
        },

        // 12. DATA PROTECTION
        {
            type: "text",
            title: "12. Data Protection",
            description: `${COMPANY_NAME} processes data in accordance with UK GDPR and the Data Protection Act 2018. See our Privacy Policy for details.`,
        },

        // 13. THIRD-PARTY CONTENT
        {
            type: "text",
            title: "13. Third Party Links and Content",
            description:
                "The Service may link to third-party websites or tools. We are not responsible for their content or privacy practices.",
        },

        // 14. TERMINATION
        {
            type: "text",
            title: "14. Suspension and Termination",
            bullets: [
                "We may suspend or terminate your Account if you breach Terms or for fraud/security reasons.",
                "Upon termination you must delete all Training Plans unless agreed otherwise.",
                "Termination does not affect accrued rights.",
            ],
        },

        // 15. CHANGES TO TERMS
        {
            type: "text",
            title: "15. Changes to These Terms",
            description:
                `${COMPANY_NAME} may update these Terms. Material updates will be notified by email or on the Service. Continued use constitutes acceptance.`,
        },

        // 16. NOTICES
        {
            type: "text",
            title: "16. Notices",
            description:
                `Notices to the Company must be sent to ${COMPANY_EMAIL} or the registered office. Notices to you may be sent via email or posted on the Service.`,
        },

        // 17. GOVERNING LAW
        {
            type: "text",
            title: "17. Governing Law and Jurisdiction",
            bullets: [
                "These Terms are governed by the laws of England and Wales.",
                "The courts of England and Wales have jurisdiction, subject to consumer protections.",
            ],
        },

        // 18. MISC
        {
            type: "text",
            title: "18. Miscellaneous",
            bullets: [
                "If any part of these Terms is invalid, remaining provisions continue in force.",
                "Failure to enforce any right is not a waiver of that right.",
            ],
        },

        // 19. CONTACT
        {
            type: "text",
            title: "19. Contact Details",
            bullets: [
                `Company: ${COMPANY_LEGAL_NAME}`,
                `Company number: ${COMPANY_NUMBER}`,
                `Address: ${COMPANY_ADDRESS}`,
                `Email: ${COMPANY_EMAIL}`,
            ],
        },
    ],
};

export default termsSchema;
