import type { Metadata } from "next";

import enPricing from "@/pageSchemas/pricing/pricingPage.en";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enPricing.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ sv: enPricing, en: enPricing }} />;
}
