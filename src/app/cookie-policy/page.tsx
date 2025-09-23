import type {Metadata} from "next";
import enCookie from "@/pageSchemas/cookie-policy/cookiePolicy.en";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enCookie.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ sv: enCookie, en: enCookie }} />;
}

