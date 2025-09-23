import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const contactPage: PageSchema = {
    meta: {
        title: `Contact Us — ${COMPANY_NAME}`,
        description: `Reach out to ${COMPANY_NAME}. Whether you have questions, need support, or want to collaborate — we’re here to help.`,
        keywords: [
            `${COMPANY_NAME} contact`,
            "support",
            "get in touch",
            "customer service",
        ],
        canonical: "/contact-us",
        ogImage: {
            title: `Contact ${COMPANY_NAME}`,
            description: "Your message matters — let’s talk.",
            bg: "#f9fafb",
            color: "#111827",
        },
    },
    blocks: [
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Send Us a Message",
                description: `Fill out the form below and our team will respond within 24 hours.`,
                centerTitle: true,
                centerDescription: true,
            },
        },
        {
            type: "custom",
            component: "ContactForm",
        },
    ],
};

export default contactPage;
