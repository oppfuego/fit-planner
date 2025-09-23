import type {Metadata} from "next";
import enTerms from "@/pageSchemas/terms-and-conditions/termsAndConditions.en";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enTerms.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ sv: enTerms, en: enTerms }} />;
}

