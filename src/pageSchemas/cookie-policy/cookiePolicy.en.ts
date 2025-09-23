import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_LEGAL_NAME,
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
} from "@/resources/constants";

const cookiePolicyEn: PageSchema = {
    meta: {
        title: `Cookie Policy – ${COMPANY_NAME}`,
        description: `Understand how ${COMPANY_NAME} uses cookies to keep your fitness journey secure, smooth, and personalized.`,
        keywords: [
            "cookies",
            "cookie policy",
            "privacy",
            "fitness data",
            "tracking",
            "consent",
        ],
        canonical: "/cookie-policy",
        ogImage: {
            title: `Cookie Policy – ${COMPANY_NAME}`,
            description: "Clear info about cookies & data use.",
            bg: "#0a2540",
            color: "#ffffff",
        },
    },
    blocks: [
        {
            type: "text",
            title: `Cookie Policy – Stay in Control`,
            description: `At ${COMPANY_NAME}, transparency matters. Just like tracking your workouts, we also track essential activity on our platform — but only with your consent. This page explains what cookies we use, why, and how you can manage them.`,
        },

        {
            type: "text",
            title: "What are cookies?",
            description:
                "Think of cookies like a workout logbook: small files stored on your device that help us remember your preferences, keep you signed in, and improve performance. Alongside cookies, we may also use Local Storage, Session Storage, and tracking pixels (together: 'trackers').",
        },

        {
            type: "text",
            title: "Cookie Categories",
            bullets: [
                "✅ **Necessary** – for login, payments, and platform security.",
                "⚙️ **Functional** – remembers your language, theme, and layout.",
                "📈 **Analytics** – helps us understand how users train with the app.",
                "🎯 **Marketing** – optional; used only if you agree (campaigns, offers).",
                "🛡️ **Security** – protects against fraud and suspicious activity.",
            ],
        },

        {
            type: "text",
            title: "Examples of cookies & lifetime",
            bullets: [
                "csrf_token – secures forms (necessary) • Lifetime: session",
                "consent_state – stores your choice (necessary) • Lifetime: 12 months",
                "ui_prefs – saves your theme/language (functional) • Lifetime: 6 months",
                "perf_metrics – performance data (analytics) • Lifetime: 3 months",
                "campaign_src – tracks referral campaign (marketing) • Lifetime: 3 months",
            ],
        },

        {
            type: "text",
            title: "Third-party tools we use",
            description:
                `Just like we rely on certified trainers for your fitness progress, we rely on trusted third-party services to keep our platform running. They may place their own cookies.`,
            bullets: [
                "📊 Analytics (Google Analytics, IP anonymization enabled)",
                "⚡ Error/crash reporting",
                "💳 Secure payments (Stripe, WayforPay, etc.)",
                "🎥 Media/CDN providers (for videos & workouts)",
            ],
        },

        {
            type: "text",
            title: "Your consent matters",
            description:
                "Non-essential cookies are set only if you allow them. You can change or withdraw your choice at any time via the “Cookie Settings” link in the footer. Withdrawal does not affect past processing but applies going forward.",
        },

        {
            type: "faq",
            items: [
                {
                    question: "How can I manage cookies in Chrome?",
                    answer:
                        "Go to Settings → Privacy and security → Cookies and other site data.",
                },
                {
                    question: "What about Safari on iOS/macOS?",
                    answer: "Go to Settings → Safari → Advanced → Website Data.",
                },
                {
                    question: "Firefox?",
                    answer: "Preferences → Privacy & Security → Cookies and Site Data.",
                },
                {
                    question: "Microsoft Edge?",
                    answer: "Settings → Cookies and site permissions.",
                },
            ],
        },

        {
            type: "text",
            title: "Do Not Track",
            description:
                "If your browser sends a Do Not Track (DNT) signal, we attempt to honor it where technically feasible. Note: not all third parties reliably respect DNT — please check their opt-out policies.",
        },

        {
            type: "text",
            title: "Changes to this policy",
            description:
                "We may update this Cookie Policy from time to time (e.g., when introducing new services or to comply with new legal requirements). The latest version is always available on this page.",
        },

        {
            type: "text",
            title: "Contact us",
            bullets: [
                `📧 Email: ${COMPANY_EMAIL}`,
                `🏢 Address: ${COMPANY_LEGAL_NAME}, ${COMPANY_ADDRESS}`,
            ],
        },

        {
            type: "text",
            title: "Last updated",
            description: "21 September 2025",
        },
    ],
};

export default cookiePolicyEn;
