import { media } from "@/resources/media";
import {FaLinkedin, FaInstagram} from "react-icons/fa";
import {
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_PHONE,
} from "@/resources/constants";

const companyAddress = COMPANY_ADDRESS ?? "";

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
            title: "Navigate",
            links: [
                { label: "About Us", href: "/about-us" },
                { label: "Pricing", href: "/pricing" },
                { label: "Faq", href: "/faq" },
                { label: "Get Started", href: "/get-started" },
                { label: "Contact", href: "/contact-us" },
                { label: "Services", href: "/services" },
            ],
        },
        {
            title: "Legal",
            links: [
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
                { label: "Cookie Policy", href: "/cookie-policy" },
                { label: "Refund Policy", href: "/refund-policy" },
                { label: "Privacy Policy", href: "/privacy-policy" },
            ],
        },

    ],
    contact: {
        email: COMPANY_EMAIL ?? "",
        phone: COMPANY_PHONE ?? "",
        address: companyAddress,
    },

    legal: {
        companyName: COMPANY_LEGAL_NAME ?? "",
        companyNumber: COMPANY_NUMBER ?? "",
        address: companyAddress,
        addressLines: companyAddress ? [companyAddress] : [],
    },
    socials: [
        { label: "Instagram", href: "https://www.instagram.com/fitplaner.co.uk/", icon: FaInstagram },
        { label: "Linkedin", href: "https://www.linkedin.com/company/fitplaner/", icon: FaLinkedin },
    ],
};
