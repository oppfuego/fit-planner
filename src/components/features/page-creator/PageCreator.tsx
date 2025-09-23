"use client";

import React, { useMemo } from "react";
import PageRenderer from "@/components/constructor/page-render/PageRender";
import { pickSchemaByLang } from "@/utils/schemaByLang";
import type { PageSchema } from "@/components/constructor/page-render/types";
import {LangCode, useI18n} from "@/context/i18nContext";

export type SchemaMap = Partial<Record<LangCode, PageSchema>>;

type PageCreatorProps = {
    schemaMap: SchemaMap;
    fallback?: LangCode;
};

export default function PageCreator({ schemaMap, fallback = "sv" }: PageCreatorProps) {
    const { lang } = useI18n();

    const schema = useMemo(
        () => pickSchemaByLang(lang, schemaMap, fallback),
        [lang, schemaMap, fallback]
    );

    return <PageRenderer schema={schema} />;
}
