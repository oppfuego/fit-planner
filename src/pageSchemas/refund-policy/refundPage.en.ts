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
        description: `Refund & Returns Policy for ${COMPANY_NAME}: scope, definitions, refund principles, procedure, investigation, chargebacks, changes, and disputes.`,
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
        {
            type: "text",
            title: "Refund & Returns Policy",
            description: `Effective date: 18 September 2025  
Company: ${COMPANY_LEGAL_NAME}  
Company no.: ${COMPANY_NUMBER}  
Registered office: ${COMPANY_ADDRESS}  
Support email: ${COMPANY_EMAIL}  
Service: https://www.fitplaner.co.uk`,
        },
        {
            type: "text",
            title: "1. Summary (customer-facing)",
            bullets: [
                "Refunds are considered in accordance with this Policy and applicable UK consumer law.",
                "Typical processing time: refunds are usually processed within 5–10 business days after approval.",
                "Refunds will not exceed the amount originally paid for the Credits / transaction.",
                "Credits already spent are not refundable, except where defective, not as described, or not supplied.",
                "Credits are account-bound, non-transferable and cannot be exchanged for real currency (unless required by law).",
                "Promotional / bonus Credits are non-refundable unless stated otherwise in the promotion terms.",
                `Send refund requests to ${COMPANY_EMAIL} with your order reference and supporting details.`,
                "This Policy may be amended; material changes will be published and notified as set out in clause 8.",
                "If you consented at checkout to immediate supply of digital content and opened/downloaded it, you may lose statutory cancellation rights (see clause 4.7).",
            ],
        },
        {
            type: "text",
            title: "2. Scope and Legal Note",
            description: `This Policy governs refunds for Credits and digital/online Services (Training Plans, downloadable files, coaching access, bespoke plans) provided by ${COMPANY_LEGAL_NAME}. It does not limit statutory rights under UK law (Consumer Contracts Regulations 2013, Consumer Rights Act 2015).`,
        },
        {
            type: "text",
            title: "3. Definitions",
            bullets: [
                "Credits — internal account units used to purchase Services.",
                "Unused Credits — Credits not yet redeemed.",
                "Redeemed/Spent Credits — Credits already used to obtain Services.",
                "Promotional/Bonus Credits — issued as part of promotions or incentives.",
                "Bespoke/Custom Plans — personalised plans created specifically for you.",
            ],
        },
        {
            type: "text",
            title: "4. Refund Principles (binding rules)",
            bullets: [
                "Refunds capped at the amount originally paid (minus non-refundable processor fees).",
                "No refund for spent Credits, except if the Service is defective, not as described, or not supplied.",
                "Unused Credits eligible for refund at purchase price (minus fees).",
                "Credits are account-bound and non-transferable.",
                "Credits cannot be exchanged for cash, except where required by law.",
                "Promotional/bonus Credits are always non-refundable unless promotion terms say otherwise.",
                "Immediate supply of digital content (if opened/downloaded) may remove statutory cancellation rights; refunds then only apply under clause 4.2.",
                "Bespoke/custom work is non-refundable once substantial work has started, unless otherwise agreed.",
            ],
        },
        {
            type: "text",
            title: "5. How to Request a Refund (procedure)",
            bullets: [
                `Email ${COMPANY_EMAIL} with: order reference, account email, whether it concerns unused Credits or a redeemed Service, description of issue, supporting evidence, and preferred refund method.`,
                "We acknowledge within 5 business days.",
                "We investigate and may request further information.",
                "We provide a decision and, if approved, process refund within 5–10 business days (provider times may vary).",
            ],
        },
        {
            type: "text",
            title: "6. Investigation, Evidence and Decisions",
            bullets: [
                "We review purchase and Credit logs, checkout confirmations, delivery logs, and provided evidence.",
                "Refunds normally processed to original payment method; alternatives possible if necessary.",
                "If rejected, we provide a clear explanation and information about escalation options.",
            ],
        },
        {
            type: "text",
            title: "7. Chargebacks, Fraud and Abuse",
            description: "If a chargeback is initiated while a refund request is pending, it will be treated as a dispute. We may provide evidence to the payment provider. We reserve the right to refuse refunds and suspend/close accounts in cases of fraud, abuse, or repeated chargebacks.",
        },
        {
            type: "text",
            title: "8. Changes to this Policy",
            description: `${COMPANY_NAME} may update this Policy at any time. Material changes will be notified to registered users by email or via a prominent notice on the Service. Changes apply prospectively only.`,
        },
        {
            type: "text",
            title: "9. Record Keeping and Retention",
            description: "We retain records necessary for refund investigations (order id, purchase/redemption logs, checkout acknowledgements, timestamps, IP, user-agent) for 24 months minimum, up to 6 years for enterprise or disputed transactions.",
        },
        {
            type: "text",
            title: "10. Escalation and Disputes",
            description: `If you disagree with a refund decision, escalate to ${COMPANY_EMAIL} with reasons and order reference. We review within 10 business days. Consumers may pursue alternative dispute resolution or legal remedies.`,
        },
        {
            type: "text",
            title: "11. Practical Examples",
            bullets: [
                "Unused Credits: Bought 2,000 Credits, used 300 → 1,700 unused → refund £17 (less fees).",
                "Downloaded Training Plan: If consented and downloaded, refund only if defective or not as described.",
                "Promotional Credits: 100 bonus Credits are non-refundable.",
            ],
        },
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
