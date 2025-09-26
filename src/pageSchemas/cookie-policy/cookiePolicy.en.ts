import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
} from "@/resources/constants";

const cookiePolicySchema: PageSchema = {
    meta: {
        title: `Cookies Policy – ${COMPANY_NAME}`,
        description: `Cookies Policy for ${COMPANY_NAME}: categories, consent, examples, retention, third parties, and user controls.`,
        keywords: [
            "cookies policy",
            "cookie consent",
            "privacy",
            "analytics",
            "marketing",
            "security",
        ],
        canonical: "/cookie-policy",
        ogImage: {
            title: `${COMPANY_NAME} – Cookies Policy`,
            description: "How cookies are used and how you can manage them.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Cookies Policy",
            description: `Effective date: 15th September 2025  
Data controller: ${COMPANY_LEGAL_NAME}  
Company no.: ${COMPANY_NUMBER}  
Registered office: ${COMPANY_ADDRESS}  
Service / site: https://www.fitplaner.co.uk  
Contact: ${COMPANY_EMAIL}`,
        },
        {
            type: "text",
            title: "1. Overview",
            description: `This Cookie Policy explains how FitPlaner (operated by ${COMPANY_LEGAL_NAME} — “we”, “us”, “our”) uses cookies and similar technologies (for example localStorage, sessionStorage and pixels) on the Service. It complements our Privacy Policy. By using the site or interacting with our cookie banner you can accept, decline or customise non-essential cookies as described below.`,
        },
        {
            type: "text",
            title: "2. What are cookies?",
            description: `Cookies are small text files placed on your device when you visit websites. They help deliver core functionality (for example keeping you logged in), remember preferences, measure and improve site performance, and — with your consent — enable analytics and marketing features.`,
        },
        {
            type: "text",
            title: "3. Cookie categories we use",
            bullets: [
                "Necessary / Essential — required for core platform functions (account login, security, session management). These cookies do not require consent.",
                "Functional — remember your settings and preferences (language, layout, UI choices).",
                "Performance / Analytics — measure site usage, errors and load times to improve reliability and performance. These may operate under legitimate interests or consent depending on the tool.",
                "Marketing / Advertising — used only if you enable them: campaign attribution, remarketing and interest-based content (consent required).",
                "Security / Anti-abuse — detect unusual patterns and protect the site and users from fraud and bots.",
            ],
        },
        {
            type: "text",
            title: "4. Typical cookies (examples)",
            bullets: [
                "session_id — Purpose: login session (necessary). Lifetime: session.",
                "csrf_token — Purpose: CSRF protection (necessary). Lifetime: session.",
                "consent_state — Purpose: stores your cookie consent choice (functional). Lifetime: 6–12 months.",
                "ui_prefs — Purpose: language / layout preferences (functional). Lifetime: ~6 months.",
                "perf_metrics — Purpose: performance analytics (analytics). Lifetime: 1–3 months.",
                "campaign_src — Purpose: campaign attribution (marketing). Lifetime: 1–3 months.",
                "Note: exact cookie names, lifetimes and third-party providers can change — current details are available in the cookie control panel on the site.",
            ],
        },
        {
            type: "text",
            title: "5. Consent and lawful basis",
            bullets: [
                "Essential cookies: strictly necessary for the Service to function and used without consent.",
                "Non-essential cookies (functional, analytics, marketing): set only after you give consent via our cookie banner or settings, except where we rely on legitimate interests for limited analytics or security purposes.",
                "The lawful bases we rely on include: performance of contract, consent and legitimate interests (for fraud prevention, service improvement and dispute defence).",
                "Where processing depends on consent you can withdraw it at any time.",
            ],
        },
        {
            type: "text",
            title: "6. How we record and retain consent",
            description: `When you give consent we record: the consent text/version presented, an ISO 8601 timestamp, and technical metadata (IP address and user-agent) as evidence. Consent records and related transaction/order evidence are retained for a minimum of 24 months and up to 6 years for enterprise or disputed matters, in line with our Privacy Policy.`,
        },
        {
            type: "text",
            title: "7. Third parties and international transfers",
            description: `We use third-party providers (for example payment processors, analytics, hosting and marketing platforms) that may set cookies. Some providers may process data outside the UK/EEA; where transfers occur we use appropriate safeguards such as UK adequacy, Standard Contractual Clauses (SCCs) or equivalent measures to protect your personal data. A current list of third-party providers and their cookie behaviour is available in the cookie control panel on the site.`,
        },
        {
            type: "text",
            title: "8. How to manage or withdraw cookie consent",
            bullets: [
                "Use the cookie banner or cookie settings on the site to accept, decline or customise non-essential cookies.",
                "You can withdraw consent at any time using the cookie settings link in the footer.",
                "You may also remove cookies via your browser settings (clear cookies / site data) or use private/incognito mode.",
                "Note that deleting or blocking certain cookies may degrade site functionality (for example you may be logged out or preferences forgotten).",
            ],
        },
        {
            type: "text",
            title: "9. Changes to this Policy",
            description: `We may update this Cookie Policy (for example when adding new integrations). Material changes will be notified by a prominent notice on the Service or by e-mail to registered users. The policy’s effective date will be updated.`,
        },
        {
            type: "text",
            title: "10. Contact",
            description: `For questions about cookies or this Policy contact: ${COMPANY_EMAIL}.  
Postal enquiries: ${COMPANY_LEGAL_NAME} — ${COMPANY_ADDRESS}.`,
        },
    ],
};

export default cookiePolicySchema;
