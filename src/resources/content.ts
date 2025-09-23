import { media } from "@/resources/media";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export const baseURL =
    typeof window !== "undefined"
        ? window.location.origin
        : process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

export const headerContent = {
    logo: {
        src: media.logo.src,
        alt: "Site Logo",
        href: "/"
    },
    links: [
        { label: "About Us", href: "/about-us" },
        { label: "Pricing", href: "/pricing" },
        { label: "Faq", href: "/faq" },
        { label: "Get Started", href: "/get-started" },
        { label: "Contact", href: "/contact-us" },
        { label: "Services", href: "/services" },

    ]
};

export const footerContent = {
    logo: { src: media.logo_black.src, alt: "Site Logo", href: "/" },
    columns: [
        {
            title: "Details",
            links: [
                { label: "About Us", href: "/about-us" },
                { label: "Pricing", href: "/pricing" },
                { label: "Faq", href: "/faq" },
                { label: "Get Started", href: "/get-started" },
            ],
        },
        {
            title: "Privacy & Terms",
            links: [
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
                { label: "Cookie Policy", href: "/cookie-policy" },
                { label: "Refund Policy", href: "/refund-policy" },
                { label: "Privacy Policy", href: "/cookie-policy" },
            ],
        },
    ],
    contact: {
        email: "info@tech-text.co.uk",
        phone: "+1 234 567 890",
        address: "20 Wenlock Road, London, England, N1 7GU",
    },

    legal: {
        companyName: "JUNGLE SAPPHIRE LTD",
        companyNumber: "15545389",
        addressLines: [
            "20 Wenlock Road",
            "London, England",
            "N1 7GU",
        ],
    },
    socials: [
        { label: "Twitter", href: "https://x.com/...", icon: FaTwitter },
        { label: "Facebook", href: "https://facebook.com/...", icon: FaFacebook },
        { label: "LinkedIn", href: "https://linkedin.com/...", icon: FaLinkedin },
    ],
};