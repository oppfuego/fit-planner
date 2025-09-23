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
        title: `Refund Policy – ${COMPANY_NAME}`,
        description: `Refund Policy for ${COMPANY_NAME}: clear rules for refunds on token purchases, subscription plans, and training services.`,
        keywords: [
            "refund policy",
            "refunds",
            "fitness plans",
            "subscriptions",
            "tokens",
            "training platform"
        ],
        canonical: "/refund-policy",
        ogImage: {
            title: `${COMPANY_NAME} – Refund Policy`,
            description: "Clear and transparent refund conditions for training services.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "Refund Policy – Overview",
            description: `This Refund Policy explains when and how refunds may be granted for purchases made on ${COMPANY_NAME}. By using the platform, you agree to this Refund Policy alongside our Terms & Conditions.`
        },
        {
            type: "text",
            title: "1. Token Purchases",
            description: `Users purchase tokens to unlock personalized training plans. Token purchases are generally non-refundable, except where required by local consumer protection law.`,
            bullets: [
                "Tokens are tied to the registered account and cannot be transferred.",
                "Tokens cannot be exchanged for real currency.",
                "Bonus or promotional tokens are non-refundable under all circumstances."
            ]
        },
        {
            type: "text",
            title: "2. Subscription Plans",
            description: `Refunds for subscription plans (Starter, Pro, Elite) are not usually available once the plan has started. However, exceptions may be made in the following cases:`,
            bullets: [
                "The plan or tokens were not activated after payment due to a technical error.",
                "The training plan was not delivered within a reasonable time.",
                "The order was charged but not processed correctly."
            ]
        },
        {
            type: "text",
            title: "3. How to Request a Refund",
            description: `If you believe you are eligible for a refund, please contact our support team within 14 days of purchase. Provide your account details, payment ID, and reason for the request. Each case will be reviewed individually.`
        },
        {
            type: "text",
            title: "4. Processing of Refunds",
            description: `Approved refunds will be processed back to the original payment method whenever possible. Processing times may vary depending on the payment provider.`,
            bullets: [
                "Refunds are typically processed within 5–10 business days after approval.",
                "Refunds will not exceed the amount originally paid.",
                "Tokens or services already used cannot be refunded."
            ]
        },
        {
            type: "text",
            title: "5. Fraud or Abuse",
            description: `${COMPANY_NAME} reserves the right to refuse refunds in cases of fraud, abuse, or violation of the Terms & Conditions.`
        },
        {
            type: "text",
            title: "6. Changes to the Refund Policy",
            description: `We may update this Refund Policy from time to time. Significant changes will be published in advance on the platform. Continued use after changes means acceptance of the new terms.`
        },
        {
            type: "text",
            title: "7. Governing Law",
            description: `This Refund Policy is governed by the laws of England and Wales. Exclusive venue—where permissible—shall be London, UK.`
        },
        {
            type: "text",
            title: "8. Contact",
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
            description: "This Refund Policy takes effect upon publication and supersedes any prior versions."
        },
        {
            type: "text",
            title: "Valid from",
            description: "22 September 2025"
        }
    ]
};

export default refundPolicySchema;
