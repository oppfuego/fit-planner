import type { Metadata } from "next";

import enHome from "@/pageSchemas/home/homePage.en";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enHome.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ sv: enHome, en: enHome }} />;
}
