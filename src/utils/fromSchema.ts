import type { Metadata } from "next";
import { headers } from "next/headers";
import type { MetaSchema } from "@/components/constructor/page-render/types";

async function absoluteUrl(path: string): Promise<string> {
    const envBase = process.env.NEXT_PUBLIC_FRONTEND_URL;
    if (envBase) return path.startsWith("http") ? path : `${envBase}${path}`;

    const h = await headers();
    const host  = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
    const proto = h.get("x-forwarded-proto") ?? "http";
    const base  = `${proto}://${host}`;
    return path.startsWith("http") ? path : `${base}${path}`;
}

export async function metadataFromSchema(meta: MetaSchema): Promise<Metadata> {
    const title = meta.ogTitle ?? meta.title;
    const description = meta.ogDescription ?? meta.description ?? "";

    const ogImagePath =
        typeof meta.ogImage === "string"
            ? meta.ogImage
            : `/api/og` +
            `?title=${encodeURIComponent(meta.ogImage?.title ?? title)}` +
            `&desc=${encodeURIComponent(meta.ogImage?.description ?? description)}` +
            `&bg=${encodeURIComponent(meta.ogImage?.bg ?? "#ffffff")}` +
            `&color=${encodeURIComponent(meta.ogImage?.color ?? "#000000")}`;

    const [canonicalAbs, ogImageAbs] = await Promise.all([
        absoluteUrl(meta.canonical ?? "/"),
        absoluteUrl(ogImagePath),
    ]);

    return {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        alternates: {
            canonical: canonicalAbs,
        },
        openGraph: {
            title,
            description,
            url: canonicalAbs,
            siteName: "TechGuide",
            type: "website",
            locale: "uk_UA",
            images: [
                {
                    url: ogImageAbs,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImageAbs],
        },
        robots: { index: true, follow: true },
    };
}
