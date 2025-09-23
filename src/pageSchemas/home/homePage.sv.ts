import { PageSchema } from "@/components/constructor/page-render/types";

const schema: PageSchema = {
    meta: {
        title: "ShipsterAI — AI-logistik för Sverige",
        description: "Nästa generations AI-logistikplattform för transportörer och avsändare i Sverige.",
        keywords: ["logistik", "ai", "sverige"],
        canonical: "/",
        ogImage: {
            title: "ShipsterAI",
            description: "AI-driven logistik. Snabb. Träffsäker. Automatiserad.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "media",
            mediaType: "video",
            src: "video1",
            width: "100%",
            height: "500px",
            controls: false,
            loop: true,
            autoPlay: true,
            muted: true,
        },
        {
            type: "section",
            left: { type: "media", mediaType: "image", src: "image1", width: "100%", height: "400px", alt: "AI-logistikplattform" },
            right: {
                type: "text",
                title: "AI-driven logistik i Sverige",
                description:
                    "ShipsterAI är nästa generations AI-logistikplattform byggd för Sverige. Den kopplar samman lokala transportörer och kunder med oöverträffad hastighet, precision och automatisering.",
                bullets: [
                    "Omedelbar AI-baserad matchning av laster",
                    "Betrodd av tusentals svenska transportörer",
                    "Optimerade rutter och uppdateringar i realtid",
                ],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "Varför välja ShipsterAI?",
                description:
                    "ShipsterAI kombinerar maskininlärning, ruttprediktion och logistikkunskap för att automatisera din supply chain. Få konkurrenskraftiga priser och minskat klimatavtryck vid varje sändning.",
                bullets: [
                    "AI för rutt- och prisprognoser",
                    "Stöd för alla sändningstyper: LTL, FTL, pallar",
                    "Helt digital logistik för den svenska marknaden",
                ],
            },
            right: { type: "media", mediaType: "image", src: "image2", width: "100%", height: "400px", alt: "AI-optimering av rutter" },
        },
        {
            type: "section",
            left: { type: "media", mediaType: "image", src: "image3", width: "100%", height: "400px", alt: "Transportörens dashboard" },
            right: {
                type: "text",
                title: "Kraftfullt dashboard för svenska transportörer",
                description:
                    "Hitta relevanta laster på sekunder, undvik tomkörning och maximera bränsleeffektivitet. ShipsterAI ger svenska förare intelligenta beslutsstöd.",
                bullets: ["Smarta rekommendationer", "Minska bränsle- och servicekostnader", "Stöd & status i realtid"],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "Byggt för Sverige",
                description:
                    "Systemet är anpassat för svensk infrastruktur och regelverk – med lokalisering och lokal ruttkunskap inbyggd.",
                bullets: ["Klar för svenska regelverk", "Inbyggd lokalisering", "Integrerat med nordiska aktörer"],
            },
            right: { type: "media", mediaType: "image", src: "image4", width: "100%", height: "400px", alt: "Byggt för Sverige" },
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: "Redo att frakta smartare?",
                description:
                    "Gå med i logistikrevolutionen i Sverige med ShipsterAI. Oavsett om du är kund eller transportör ger våra AI-verktyg dig ett försprång.",
                bullets: ["Direkt onboarding", "AI för last & ruttplanering", "Spårning dygnet runt"],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            style: { margin: "3rem 0" },
            cards: [
                { image: "image5", title: "AI-logistikplattform", description: "Nästa gen AI-logistik för Sverige. Snabbt, exakt, automatiserat.", buttonLink: "/sign-up", buttonText: "Kom igång" },
                { image: "image6", title: "Ruttoptimering", description: "AI-driven ruttprognos för kostnads- och koldioxidbesparingar.", buttonLink: "/sign-up", buttonText: "Kom igång" },
                { image: "image7", title: "Dashboard för transportör", description: "Ge transportörer smarta lastrekommendationer.", buttonLink: "/sign-up", buttonText: "Kom igång" },
                { image: "image8", title: "Byggt för Sverige", description: "Anpassat för svenska regler och lokal infrastruktur.", buttonLink: "/sign-up", buttonText: "Kom igång" },
            ],
        },
        {
            type: "text",
            title: "Kraftfullt dashboard för svenska transportörer",
            description:
                "Hitta relevanta laster på sekunder, undvik tomkörning och maximera bränsleeffektivitet. ShipsterAI ger svenska förare intelligenta beslutsstöd.",
            centerTitle: true,
            centerDescription: true,
        },
        {
            type: "slider",
            images: ["image9", "image10", "image11", "image12"],
        },
        {
            type: "faq",
            items: [
                { question: "Vad är ShipsterAI?", answer: "ShipsterAI är en AI-driven logistikplattform för Sverige." },
                { question: "Hur registrerar jag mig?", answer: "Klicka på “Kom igång” och följ stegen." },
                { question: "Är mina uppgifter säkra?", answer: "Ja, vi använder branschstandard för säkerhet." },
            ],
        },
    ],
};

export default schema;
