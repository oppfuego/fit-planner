import {sendEmail} from "@/backend/utils/sendEmail";
import {COMPANY_EMAIL} from "@/resources/constants";

export const contactService = {
    async sendContact(data: {
        name: string;
        secondName: string;
        email: string;
        phone: string;
        message?: string;
    }) {
        const text = `
Name: ${data.name}
Second Name: ${data.secondName}
Email: ${data.email}
Phone: ${data.phone}
Message: ${data.message || "(none)"}
        `;

        await sendEmail(
            COMPANY_EMAIL ?? "",
            "📩 Contact form request",
            text
        );

        return {message: "Contact request sent"};
    },
};
