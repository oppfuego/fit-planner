import type { Metadata } from "next";
import contactPage from "@/pageSchemas/contact-us/contactUsSchema.en";
import PageCreator from "@/components/features/page-creator/PageCreator";
import { metadataFromSchema } from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(contactPage.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ sv: contactPage ,en: contactPage }} />;
}

