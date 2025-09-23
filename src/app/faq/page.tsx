import type { Metadata } from "next";

import enFaq from "@/pageSchemas/faq/faqPage.en";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enFaq.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ sv: enFaq, en: enFaq }} />;
}
