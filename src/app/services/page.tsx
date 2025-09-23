import type { Metadata } from "next";

import enServices from "@/pageSchemas/services/servicesPage.en";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enServices.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ sv: enServices, en: enServices }} />;
}
