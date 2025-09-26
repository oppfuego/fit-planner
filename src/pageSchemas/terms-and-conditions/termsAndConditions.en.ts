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
        description: `Terms and Conditions for ${COMPANY_NAME}: eligibility, credits, payments, refunds, health disclaimers, IP rights, liability, and governing law.`,
        keywords: [
            "terms",
            "terms and conditions",
            "service agreement",
            "credits",
            "refunds",
            "liability",
            "user rights",
        ],
        canonical: "/terms",
        ogImage: {
            title: `${COMPANY_NAME} – Terms & Conditions`,
            description: "Clear and transparent conditions for using our services.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Terms and Conditions",
            description: `Effective date: 15 September 2025`,
        },
        {
            type: "text",
            title: "1. Introduction",
            description: `These Terms and Conditions govern your access to and use of the ${COMPANY_NAME} website and services (the “Service”) operated by ${COMPANY_LEGAL_NAME} (company number: ${COMPANY_NUMBER}, registered office: ${COMPANY_ADDRESS}). By using the Service, creating an account, purchasing Credits, or booking services, you agree to these Terms.`,
        },
        {
            type: "text",
            title: "2. Definitions",
            bullets: [
                "Account – the user account created on the Service.",
                "Training Plans – workout programmes, routines, diet guidance, or fitness-related digital content (PDF, DOCX or other formats).",
                "Credits (Tokens) – internal unit of account used to obtain Services.",
                "Services/Products – Training Plans, coaching, consultations, and other goods or services offered.",
                "You/Customer – the person or entity who uses the Service or purchases Services.",
            ],
        },
        {
            type: "text",
            title: "3. Eligibility and Account Registration",
            bullets: [
                "You must be at least 18 years old to register and use the Service.",
                "Provide accurate, current, and complete registration information.",
                "Keep your credentials secure and notify us of any unauthorised use.",
            ],
        },
        {
            type: "text",
            title: "4. Credits (Tokens)",
            bullets: [
                "Credits are a virtual internal mechanism, not legal tender or investments.",
                "Nominal value is shown on the Service at purchase/checkout.",
                "We may vary the nominal value prospectively.",
                "Prices may be expressed in Credits; fiat equivalent shown at checkout.",
                "Credits are credited after successful payment and deducted when redeemed.",
                "Unused Credits may be refundable under the Refund Policy.",
                "Promotions may include discounted or bonus Credit packages.",
            ],
        },
        {
            type: "text",
            title: "5. Ordering, Payment and Checkout",
            bullets: [
                "Orders are subject to Company acceptance; we may cancel for fraud, error, or mispricing.",
                "Accepted payment methods are displayed at checkout.",
                "At checkout you will see: Credits purchased/used, nominal value, fiat payable, and taxes/fees.",
                "Title and risk in digital content passes upon provision of download link or access credentials.",
            ],
        },
        {
            type: "text",
            title: "6. Refunds, Cancellations and Consumer Rights",
            bullets: [
                "Digital content may waive cancellation rights if supplied immediately with your agreement.",
                "Unused Credits may be refunded at purchase price before use (minus fees).",
                "If a Service is faulty, not as described, or not delivered, contact support for repair, replacement, or refund.",
                "Requests must be sent to our contact email with details.",
            ],
        },
        {
            type: "text",
            title: "7. Health & Safety; No Medical Advice",
            bullets: [
                "Training Plans are not medical advice; consult a professional before starting.",
                "Confirm you are physically able to undertake exercises.",
                "We are not responsible for injury, loss, or damage from use of the Service.",
            ],
        },
        {
            type: "text",
            title: "8. Intellectual Property Rights",
            description: `All intellectual property in the Service and content belongs to ${COMPANY_LEGAL_NAME} unless stated otherwise.`,
            bullets: [
                "Licence is limited, non-exclusive, non-transferable for personal, non-commercial use.",
                "You may not copy, reproduce, distribute, sell, or make Training Plans available to third parties without written consent.",
                "Custom/bespoke Training Plans may have separate ownership/licence terms.",
            ],
        },
        {
            type: "text",
            title: "9. Warranties and Disclaimers",
            bullets: [
                "We warrant that we have rights to grant licences described in these Terms.",
                "Services are provided 'as is' and 'as available'.",
                "We disclaim implied warranties of fitness, quality, accuracy, or outcomes.",
            ],
        },
        {
            type: "text",
            title: "10. Limitation of Liability",
            bullets: [
                "Nothing limits liability for death/personal injury due to negligence or fraud.",
                "Total aggregate liability is capped at the amount paid for Services in the 12 months before the claim.",
                "We are not liable for indirect or consequential losses (profits, data, goodwill).",
            ],
        },
        {
            type: "text",
            title: "11. Indemnity",
            description: "You agree to indemnify and hold harmless the Company, its officers, employees, and agents against claims or losses arising from:",
            bullets: [
                "Your breach of these Terms.",
                "Your misuse of the Service or Training Plans.",
                "Your violation of law or third-party rights.",
            ],
        },
        {
            type: "text",
            title: "12. Data Protection",
            description: `${COMPANY_NAME} processes data under UK GDPR and the Data Protection Act 2018. For details, see our Privacy Policy. By using the Service, you consent to processing of your data as set out therein.`,
        },
        {
            type: "text",
            title: "13. Third Party Links and Content",
            description: "The Service may include links to third-party websites or tools. We are not responsible for their content, privacy practices, or availability. Links are provided for convenience only.",
        },
        {
            type: "text",
            title: "14. Suspension and Termination",
            bullets: [
                "We may suspend or terminate your Account without notice if you breach Terms, commit fraud, or for security/technical reasons.",
                "On termination, licences cease and you must delete Training Plans unless otherwise agreed.",
                "Termination does not affect accrued rights or liabilities.",
            ],
        },
        {
            type: "text",
            title: "15. Changes to These Terms",
            description: `${COMPANY_NAME} may update these Terms. Material changes will be notified via email or notice on the Service. Continued use after updates means acceptance.`,
        },
        {
            type: "text",
            title: "16. Notices",
            description: `All notices to the Company should be sent by email to ${COMPANY_EMAIL} or to the registered office. Notices to you may be sent by email or posted on the Service.`,
        },
        {
            type: "text",
            title: "17. Governing Law and Jurisdiction",
            description: "These Terms are governed by the laws of England and Wales. Disputes shall be resolved in the courts of England and Wales, subject to consumer protections in other jurisdictions.",
        },
        {
            type: "text",
            title: "18. Miscellaneous",
            bullets: [
                "If any provision is invalid, the remainder continues in force.",
                "Failure to exercise a right is not a waiver of that right.",
            ],
        },
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
