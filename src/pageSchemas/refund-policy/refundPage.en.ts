import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
} from "@/resources/constants";

const refundPolicySchema: PageSchema = {
    meta: {
        title: `Refund & Returns Policy – ${COMPANY_NAME}`,
        description: `Refund & Returns Policy for ${COMPANY_NAME}: scope, definitions, refund rules, procedure, investigation, chargebacks, changes, and disputes.`,
        keywords: [
            "refund policy",
            "returns",
            "credits",
            "training plans",
            "consumer rights",
            "UK law",
        ],
        canonical: "/refund-policy",
        ogImage: {
            title: `${COMPANY_NAME} – Refund & Returns Policy`,
            description: "Clear and transparent rules for refunds and returns.",
            bg: "#ffffff",
            color: "#000000",
        },
    },

    blocks: [
        // HEADER BLOCK
        {
            type: "text",
            title: "Refund & Returns Policy",
            description: `Effective date: 18th September 2025  
Company: ${COMPANY_LEGAL_NAME}  
Company no.: ${COMPANY_NUMBER}  
Registered office: ${COMPANY_ADDRESS}  
Support email: ${COMPANY_EMAIL}  
Service: https://www.fitplaner.co.uk`,
        },

        // 1. SUMMARY
        {
            type: "text",
            title: "1. Summary (customer-facing)",
            bullets: [
                "Refunds are considered in accordance with this Policy and applicable UK consumer law.",
                "Typical processing time: refunds are usually processed within 5–10 business days after approval.",
                "Refunds will not exceed the amount originally paid for the Credits / transaction.",
                "Credits already spent (i.e. used to obtain Training Plans, coaching sessions or other Services) are not refundable, except where the Service supplied is defective, materially not as described or not supplied as contracted.",
                "Credits are account-bound, non-transferable and cannot be exchanged for real currency except where required by law.",
                "Promotional / bonus Credits are non-refundable in all circumstances unless otherwise stated in the promotion terms.",
                `Send refund requests to ${COMPANY_EMAIL} with your order reference and supporting details.`,
                "This Policy may be amended from time to time; material changes will be published and notified as set out in clause 8.",
                "If you consented at checkout to immediate supply of digital content and opened/downloaded it, your statutory right to cancel may be lost (see clause 4.7).",
            ],
        },

        // 2. SCOPE
        {
            type: "text",
            title: "2. Scope and Legal Note",
            description:
                `This Policy governs refunds for Credits and digital/online Services (Training Plans, downloadable files, coaching access, bespoke plans) provided by ${COMPANY_LEGAL_NAME} via FitPlaner.  
It does not limit statutory rights under UK law (Consumer Contracts Regulations 2013, Consumer Rights Act 2015).`,
        },

        // 3. DEFINITIONS
        {
            type: "text",
            title: "3. Definitions",
            bullets: [
                "Credits — internal account units used on the Service to purchase Training Plans, bookings or other paid Services.",
                "Unused Credits — Credits remaining in your account that have not been redeemed.",
                "Redeemed / Spent Credits — Credits used to obtain a Training Plan, coaching session or other Service.",
                "Promotional / Bonus Credits — Credits issued as part of promotions, bonuses or incentives.",
                "Bespoke / Custom Plans — personalised plans or work created specifically for you by a trainer.",
            ],
        },

        // 4. REFUND PRINCIPLES
        {
            type: "text",
            title: "4. Refund Principles (binding rules)",
            bullets: [
                "Refunds will not exceed the amount originally paid (minus non-refundable processor fees).",
                "Credits already spent are not refundable, except when the Service is defective, not as described, or not supplied.",
                "Unused Credits are generally refundable at original purchase price if requested before redemption.",
                "Credits are tied to the user's account and cannot be transferred.",
                "Credits cannot be exchanged for cash unless required by law.",
                "Promotional / bonus Credits are non-refundable unless stated otherwise in the promotion terms.",
                "If you agree to immediate supply of digital content and open/download it, the statutory cancellation right may be lost.",
                "Custom Training Plans are non-refundable once substantial work has begun unless otherwise agreed.",
            ],
        },

        // 5. REFUND PROCEDURE
        {
            type: "text",
            title: "5. How to Request a Refund (procedure)",
            bullets: [
                `Email ${COMPANY_EMAIL} with:  
– your order reference number (mandatory),  
– account email,  
– whether it concerns Unused Credits or a Redeemed Service,  
– description of issue and supporting evidence,  
– preferred refund method (normally refunded to original payment method).`,
                "We acknowledge within 5 business days.",
                "We investigate and may request additional information.",
                "If approved, the refund is processed within 5–10 business days (provider times may vary).",
            ],
        },

        // 6. INVESTIGATION
        {
            type: "text",
            title: "6. Investigation, Evidence and Decisions",
            bullets: [
                "We review purchase logs, Credit logs, checkout evidence, delivery logs, timestamps, and any evidence provided.",
                "Approved refunds are normally returned to the original payment method. Alternatives may be offered if needed.",
                "If rejected, we provide a clear explanation and escalation options.",
            ],
        },

        // 7. CHARGEBACKS
        {
            type: "text",
            title: "7. Chargebacks, Fraud and Abuse",
            description:
                "If a chargeback is initiated during a refund request, it becomes a dispute. We may provide full evidence to the payment provider. We may refuse refunds and suspend accounts in cases of fraud, abuse, or repeated chargebacks.",
        },

        // 8. CHANGES
        {
            type: "text",
            title: "8. Changes to this Policy",
            description:
                `${COMPANY_NAME} may update this Policy at any time. Material changes will be notified via email or published on the Service. Changes apply prospectively.`,
        },

        // 9. RETENTION
        {
            type: "text",
            title: "9. Record Keeping and Retention",
            description:
                "We retain necessary refund investigation records (order ID, Credit logs, checkout data, timestamps, IP, user-agent) for at least 24 months, up to 6 years for disputed or enterprise transactions.",
        },

        // 10. DISPUTES
        {
            type: "text",
            title: "10. Escalation and Disputes",
            description:
                `If you disagree with a refund decision, email ${COMPANY_EMAIL} with your reasons and order reference. We review within 10 business days.  
Consumers retain statutory rights to pursue ADR or legal remedies.`,
        },

        // 11. PRACTICAL EXAMPLES
        {
            type: "text",
            title: "11. Practical Examples",
            bullets: [
                "Unused Credits example: Purchased 2,000 Credits, used 300 → 1,700 unused → refund = £17 (minus fees).",
                "Downloaded Training Plan: If you downloaded after consenting to immediate supply, refund only if defective or not as described.",
                "Promotional Credits example: 100 bonus Credits are non-refundable.",
            ],
        },

        // 12. CONTACT
        {
            type: "text",
            title: "12. Contact Details",
            bullets: [
                `Support email: ${COMPANY_EMAIL}`,
                `Postal: ${COMPANY_LEGAL_NAME} — ${COMPANY_ADDRESS}`,
            ],
        },
    ],
};

export default refundPolicySchema;
