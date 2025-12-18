import { media } from "@/resources/media";
import {FaTwitter, FaFacebook, FaLinkedin, FaInstagram} from "react-icons/fa";

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
        email: "info@fitplaner.co.uk",
        phone: "+1 234 567 890",
        address: "Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF",
    },

    legal: {
        companyName: "TECHGATE LIMITED",
        companyNumber: "15742364",
        address: "Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF",
    },
    socials: [
        { label: "Instagram", href: "https://www.instagram.com/fitplaner.co.uk/", icon: FaInstagram },
    ],
};
