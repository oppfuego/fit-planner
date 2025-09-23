import type {Metadata} from "next";
import enRefund from "@/pageSchemas/refund-policy/refundPage.en";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enRefund.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ sv: enRefund, en: enRefund }} />;
}

