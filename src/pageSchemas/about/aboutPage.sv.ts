import { PageSchema } from "@/components/constructor/page-render/types";

const schema: PageSchema = {
    meta: {
        title: "Om ShipsterAI — Vår vision & historia",
        description:
            "Lär känna ShipsterAI: vår mission, vårt team och hur vi driver AI-logistik i Sverige.",
        keywords: ["om oss", "logistik", "ai", "sverige"],
        canonical: "/about",
        ogImage: {
            title: "ShipsterAI",
            description: "AI-driven logistik för Sverige.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "section",
            left: {
                type: "text",
                title: "Om ShipsterAI",
                description:
                    "Vi bygger en modern, AI-driven logistikplattform anpassad för svenska behov. Vårt fokus är på precision, transparens och enkelhet för både kunder och transportörer.",
                bullets: [
                    "Grundat i Sverige, med nordiskt fokus",
                    "Datadrivna beslut och smart matchning",
                    "Skalbar plattform för alla storlekar",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image13",
                width: "100%",
                height: "420px",
                alt: "ShipsterAI team och kultur",
            },
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image14",
                width: "100%",
                height: "420px",
                alt: "Innovation och teknik",
            },
            right: {
                type: "text",
                title: "Vårt uppdrag",
                description:
                    "Att förenkla frakt i Norden genom att koppla samman rätt last med rätt transportör i rätt tid—med hjälp av AI, realtidsdata och smidig design.",
                bullets: [
                    "Mindre tomkörning, lägre utsläpp",
                    "Rätt pris i realtid",
                    "Kontroll och spårbarhet för alla parter",
                ],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "Hur vi arbetar",
                description:
                    "Vi kombinerar maskininlärning, robust infrastruktur och nära samarbete med branschen. Tillsammans med våra partners optimerar vi rutter och kapacitet.",
                bullets: ["Samarbete med svenska aktörer", "API-först arkitektur", "Snabb leverans av nya funktioner"],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image15",
                width: "100%",
                height: "420px",
                alt: "Samarbeten och processer",
            },
        },
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            style: { margin: "3rem 0" },
            cards: [
                {
                    image: "image16",
                    title: "Våra värderingar",
                    description: "Transparens, pålitlighet och användarcentrerad design.",
                    buttonLink: "/services",
                    buttonText: "Läs mer",
                },
                {
                    image: "image17",
                    title: "Teknik",
                    description: "AI-modeller, ruttoptimering och realtidsanalys.",
                    buttonLink: "/services",
                    buttonText: "Läs mer",
                },
                {
                    image: "image18",
                    title: "Hållbarhet",
                    description: "Minska tomkörning och CO₂ med smart planering.",
                    buttonLink: "/services",
                    buttonText: "Läs mer",
                },
                {
                    image: "image19",
                    title: "Support",
                    description: "Svenskspråkig support och onboarding.",
                    buttonLink: "/contact",
                    buttonText: "Kontakta oss",
                },
            ],
        },
        {
            type: "text",
            title: "Team & partners",
            description:
                "Vårt team består av utvecklare, logistikexperter och data scientists. Vi jobbar nära svenska transportörer och varuägare.",
            centerTitle: true,
            centerDescription: true,
        },
        {
            type: "slider",
            images: ["image20", "image21", "image22", "image23"],
        },
        {
            type: "faq",
            items: [
                { question: "Var är ni baserade?", answer: "Vi är baserade i Sverige med nordiskt fokus." },
                { question: "Vem kan använda plattformen?", answer: "Transportörer, avsändare och B2B-kunder i Sverige." },
                { question: "Hur börjar jag?", answer: "Skapa ett konto och följ onboarding-stegen." },
            ],
        },
    ],
};

export default schema;
