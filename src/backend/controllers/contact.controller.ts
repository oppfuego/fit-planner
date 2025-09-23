import { contactService } from "../services/contact.service";

export const contactController = {
    async send(req: Request) {
        const body = await req.json();
        await contactService.sendContact(body);

        return new Response(JSON.stringify({ message: "Contact request sent" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    },
};
