import { contactController } from "@/backend/controllers/contact.controller";

export async function POST(req: Request) {
    return contactController.send(req);
}
