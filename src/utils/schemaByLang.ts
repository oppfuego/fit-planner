import { PageSchema } from "@/components/constructor/page-render/types";
import { LangCode } from "@/context/i18nContext";

export function pickSchemaByLang(
    lang: LangCode,
    map: Partial<Record<LangCode, PageSchema>>,
    fallback: LangCode = "en"
): PageSchema {
    return map[lang] ?? map[fallback]!;
}
