import { PageSchema } from "@/components/constructor/page-render/types";

const cookiePolicySv: PageSchema = {
    meta: {
        title: "Cookiepolicy – ShipsterAI Sverige",
        description:
            "Läs om vilka cookies ShipsterAI använder, i vilka syften, hur länge de lagras och hur du hanterar ditt samtycke.",
        keywords: [
            "cookies",
            "cookiepolicy",
            "integritet",
            "spårning",
            "samtycke",
            "sverige",
            "shipsterai"
        ],
        canonical: "/cookie-policy",
        ogImage: {
            title: "Cookiepolicy",
            description: "Tydlig information om cookies och samtycke.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "Cookiepolicy – Översikt",
            description:
                "Denna cookiepolicy förklarar hur ShipsterAI (”vi”, ”oss”) använder cookies och liknande tekniker på vår plattform. Policyn kompletterar vår integritetspolicy. Genom att klicka på ”Acceptera” i bannern eller fortsätta använda webbplatsen samtycker du – i den mån det krävs – till användningen av icke nödvändiga cookies."
        },
        {
            type: "text",
            title: "Vad är cookies?",
            description:
                "Cookies är små textfiler som lagras på din enhet när du besöker webbplatser. De hjälper till att tillhandahålla funktioner (t.ex. inloggningssessioner), förstå användning och förbättra tjänster. Utöver cookies kan vi använda Local Storage, Session Storage och pixlar (gemensamt ”spårare”)."
        },
        {
            type: "text",
            title: "Cookie-kategorier",
            bullets: [
                "Nödvändiga – krävs för grundläggande funktioner (inloggning, säkerhet, betalflöde). Utan dessa fungerar plattformen inte korrekt.",
                "Funktionella – kommer ihåg dina inställningar (språk, layout, preferenser).",
                "Prestanda/Analys – mäter användning, fel och laddtider för att förbättra stabilitet (t.ex. aggregerad statistik).",
                "Marknadsföring/Annonser – endast om aktiverat: räckviddsmätning, kampanjattribution, intressebaserat innehåll.",
                "Säkerhet/Missbruks­skydd – upptäcker ovanliga mönster, skyddar mot bedrägerier och bot-trafik."
            ]
        },
        {
            type: "text",
            title: "Exempel på cookies & lagringstid",
            bullets: [
                "shipster_session – Syfte: inloggningssession (nödvändig) • Lagring: sessionsbaserad",
                "csrf_token – Syfte: skydd mot CSRF (nödvändig) • Lagring: sessionsbaserad",
                "consent_state – Syfte: sparar ditt samtyckesval (nödvändig) • Lagring: 6–12 månader",
                "ui_prefs – Syfte: språk/tema (funktionell) • Lagring: ca 6 månader",
                "perf_metrics – Syfte: prestandamått (analys) • Lagring: 1–3 månader",
                "campaign_src – Syfte: kampanjattribution (marknadsföring) • Lagring: 1–3 månader"
            ]
        },
        {
            type: "text",
            title: "Tredjepart & liknande tekniker",
            description:
                "Vi kan använda tredjepartstjänster (t.ex. kartor, analys, betalningar, felspårning). Dessa leverantörer kan använda egna cookies/ID:n. Vi väljer partners omsorgsfullt och värnar integriteten. Se integritetspolicyn och – där tillgängligt – vår samtyckesbanner (CMP) under ”Detaljer”.",
            bullets: [
                "Analys (aggregerad, pseudonymiserad, IP-maskering där möjligt)",
                "Fel-/kraschrapportering",
                "Betalnings-/faktureringsleverantörer",
                "Inbäddade medier (t.ex. video-CDN)"
            ]
        },
        {
            type: "text",
            title: "Samtycke & återkallelse",
            description:
                "Icke nödvändiga cookies sätts endast med ditt samtycke. Du kan när som helst ändra ditt val via länken ”Cookie-inställningar” i sidfoten eller genom att radera/blockera cookies i din webbläsare. Ett återkallat samtycke gäller framåt i tiden; redan behandlade uppgifter påverkas inte."
        },
        {
            type: "text",
            title: "Hantera cookies i webbläsaren (snabbguide)",
            bullets: [
                "Chrome: Inställningar → Sekretess och säkerhet → Cookies och andra webbplatsdata",
                "Safari (macOS/iOS): Inställningar → Sekretess → Hantera webbplatsdata",
                "Firefox: Inställningar → Sekretess & säkerhet → Cookies och webbplatsdata",
                "Edge: Inställningar → Cookies och webbplatsbehörigheter"
            ]
        },
        {
            type: "text",
            title: "Do Not Track & opt-out",
            description:
                "Om din webbläsare skickar ”Do Not Track” (DNT) försöker vi – i den mån det är tekniskt rimligt – respektera detta. Observera att inte alla tredjepartsleverantörer tillförlitligt känner igen DNT; använd i så fall deras egna opt-out-mekanismer."
        },
        {
            type: "text",
            title: "Ändringar av denna policy",
            description:
                "Vi kan uppdatera policyn (t.ex. vid nya tjänster eller rättsliga krav). Den version som publiceras här är den gällande. Större ändringar kommuniceras i bannern eller via avisering i appen."
        },
        {
            type: "text",
            title: "Kontakt",
            bullets: [
                "Allmänna frågor: hello@shipster.ai",
                "Integritet: privacy@shipster.ai",
                "Adress: ShipsterAI AB, Vasagatan 10, 111 20 Stockholm, Sverige"
            ]
        },
        {
            type: "text",
            title: "Uppdaterad",
            description: "14 augusti 2025"
        }
    ]
};

export default cookiePolicySv;
