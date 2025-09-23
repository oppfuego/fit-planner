import { PageSchema } from "@/components/constructor/page-render/types";

const termsSchema: PageSchema = {
    meta: {
        title: "Allmänna villkor – ShipsterAI Sverige",
        description:
            "Villkor för användning av ShipsterAI:s logistikplattform i Sverige: tjänster, priser, parternas skyldigheter, dataskydd, ansvar, uppsägning och jurisdiktion.",
        keywords: [
            "villkor",
            "terms and conditions",
            "avtal",
            "shipsterai",
            "sverige",
            "logistik",
            "dataskydd",
            "ansvar",
            "uppsägning",
            "priser"
        ],
        canonical: "/terms",
        ogImage: {
            title: "ShipsterAI – Villkor",
            description: "Tydliga villkor. Svensk precision.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "Allmänna villkor – Översikt",
            description:
                "Dessa villkor reglerar användningen av ShipsterAI-plattformen av avsändare (kunder) och transportörer (carriers) i Sverige och, i tillämpliga delar, inom EU/EES. Genom registrering eller användning av plattformen godkänner du villkoren. Villkoren riktar sig till företag (B2B)."
        },
        {
            type: "text",
            title: "1. Definitioner",
            bullets: [
                "”Plattform” – den webb-/mobilapplikation som drivs av ShipsterAI.",
                "”Avsändare” – företagskund som beställer transporttjänster.",
                "”Transportör” – transporttjänsteleverantör som erbjuder och utför uppdrag.",
                "”Användare” – fysisk person som använder ett företagskonto.",
                "”Uppdrag” – specifikt transportjobb inklusive parametrar och dokument.",
                "”SLA” – överenskomna servicenivåer (t.ex. svarstid, ETA-kvalitet)."
            ]
        },
        {
            type: "text",
            title: "2. Tillämpningsområde och avtalets ingående",
            description:
                "Villkoren gäller för alla funktioner (disposition, matchning, spårning, kommunikation, fakturastöd). Avtal ingås genom registrering, uttryckligt godkännande av villkoren eller användning av plattformen. Avvikande individuella avtal har företräde; i övrigt kompletterar reglerna varandra."
        },
        {
            type: "text",
            title: "3. Konton, roller och aktsamhetskrav",
            description:
                "Företag hanterar åtkomst, roller och behörigheter självständigt (least-privilege). Inloggningsuppgifter ska hållas konfidentiella. Kontoinnehavaren ansvarar för handlingar som sker via kontot om inte obehörig användning kan bevisas trots rimliga skyddsåtgärder.",
            bullets: [
                "Rekommenderas: MFA, starka lösenord, regelbundna behörighetsgenomgångar.",
                "Avsluta omedelbart åtkomst för personal som slutar.",
                "Anmäl misstänkt missbruk till support@shipster.ai."
            ]
        },
        {
            type: "text",
            title: "4. Tjänstebeskrivning",
            description:
                "ShipsterAI tillhandahåller en AI-stödd logistikplattform: intelligent last-/transportörsmatchning, ETA-prognoser, prisindikationer, spårning, dokumentflöde, in-app-chatt samt faktureringsstöd. Om inget annat avtalats tillhandahålls tjänsten som SaaS utan källkodslämnande."
        },
        {
            type: "text",
            title: "5. Tillgänglighet, underhåll och support",
            description:
                "ShipsterAI levererar med rimlig omsorg och eftersträvar hög drifttid. Planerat underhåll och incidenter kommuniceras transparent. Support ges enligt publicerade servicetider; individuella SLA kan avtalas separat."
        },
        {
            type: "text",
            title: "6. Priser, avgifter och debitering",
            description:
                "Gällande prislista eller avtalade priser tillämpas (exkl. moms). Avgifter kan tas per uppdrag eller användningsbaserat. Kampanjer och rabatter gäller endast om de framgår uttryckligen.",
            bullets: [
                "Elektronisk faktura (PDF/e-faktura) till angiven adress.",
                "Betalningsvillkor enligt avtal/offert; om inget annat – 30 dagar netto.",
                "Vid dröjsmål: lagstadgade dröjsmålsräntor samt eventuella påminnelse-/inkassokostnader."
            ]
        },
        {
            type: "text",
            title: "7. Uppdrag mellan avsändare och transportör",
            description:
                "Plattformen stödjer ingående av transportavtal mellan avsändare och transportör. Transportavtalet ingås direkt mellan parterna. Skyldigheter (t.ex. lastsäkring, ADR, kylkedja), tider, dokumentation och ansvar följer av uppdraget och tillämplig rätt (t.ex. svensk rätt, CMR)."
        },
        {
            type: "text",
            title: "8. Tillåten användning",
            bullets: [
                "Inga olagliga, vilseledande eller säkerhetsriskerande handlingar eller innehåll.",
                "Ingen kringgång av säkerhet; inget otillåtet scraping eller reverse engineering.",
                "Efterlevnad av sanktions-, export-, tull- och branschregler.",
                "Endast sanningsenliga och verifierbara företags- och uppdragsdata."
            ]
        },
        {
            type: "text",
            title: "9. Innehåll, rättigheter och immateriell egendom",
            description:
                "Samtliga rättigheter till plattform, varumärken, design och modeller tillhör ShipsterAI eller licensgivare. Användare ges en icke-exklusiv, icke-överlåtbar, uppsägningsbar nyttjanderätt under avtalstiden. Data som tillhandahålls av användaren förblir användarens; ShipsterAI får de nyttjanderätter som krävs för drift/uppfyllelse."
        },
        {
            type: "text",
            title: "10. Dataskydd (GDPR/Dataskyddslagen)",
            description:
                "ShipsterAI behandlar personuppgifter enligt GDPR och svensk dataskyddslag. Principerna om ändamålsbegränsning, uppgiftsminimering och transparens gäller. Se separat integritetspolicy.",
            bullets: [
                "Tekniska/organisatoriska åtgärder (kryptering, loggning).",
                "Datahosting inom EU/EES; personuppgiftsbiträdesavtal vid behov.",
                "Registrerades rättigheter respekteras enligt lag."
            ]
        },
        {
            type: "text",
            title: "11. Säkerhet och regelefterlevnad",
            bullets: [
                "Roll-/behörighetsmodell (least-privilege), audit-spår, övervakning.",
                "Responsible Disclosure: responsible-disclosure@shipster.ai.",
                "Åtagande om aktsamhet, antikorruption och sund konkurrens."
            ]
        },
        {
            type: "text",
            title: "12. Tredjeparter och integrationer",
            description:
                "Plattformen kan använda tredjepartstjänster (kartor, telematik, EDI, betalning). Dessa leverantörers tillgänglighet, villkor och dataskydd ansvarar respektive leverantör för. ShipsterAI väljer partners noggrant och strävar efter stabila integrationer men garanterar inte felfrihet."
        },
        {
            type: "text",
            title: "13. Betalningar och skatter",
            description:
                "Betalningar hanteras via angivna leverantörer. Skatter, avgifter och tullar bärs av respektive avtalspart om inte annat avtalats."
        },
        {
            type: "text",
            title: "14. Ändringar av tjänster och villkor",
            description:
                "ShipsterAI kan vidareutveckla, anpassa eller avveckla funktioner vid legitima skäl (säkerhet, juridik, prestanda). Väsentliga ändringar av villkoren aviseras i förväg. Fortsatt användning efter ikraftträdande utgör godkännande."
        },
        {
            type: "text",
            title: "15. Avtalstid och uppsägning",
            description:
                "Avtalet gäller tills vidare om inget annat anges. Ordinarie uppsägning kan göras av båda parter med skälig uppsägningstid. Avtalet kan sägas upp med omedelbar verkan vid väsentligt avtalsbrott, betalningsdröjsmål eller säkerhetsrisk.",
            bullets: [
                "Efter avtalsslut: åtkomster stängs; dataexport på begäran.",
                "Lagstadgade arkiveringstider påverkas inte."
            ]
        },
        {
            type: "text",
            title: "16. Garanti",
            description:
                "ShipsterAI levererar enligt god sed och teknikens ståndpunkt. Ingen garanti lämnas – i den mån lag tillåter – för viss säljbarhet, lämplighet för särskilt ändamål eller avbrottsfri tillgänglighet. Beta-/förhandsfunktioner kan vara begränsade."
        },
        {
            type: "text",
            title: "17. Ansvarsbegränsning",
            description:
                "ShipsterAI ansvarar obegränsat för uppsåt/grov vårdslöshet samt personskador enligt tvingande lag. Vid enkel vårdslöshet ansvar endast vid åsidosättande av väsentliga avtalsförpliktelser, begränsat till typiskt förutsebar skada. Indirekta skador, utebliven vinst och dataförlust undantas i den mån lagen medger."
        },
        {
            type: "text",
            title: "18. Skadeslöshet",
            description:
                "Användaren håller ShipsterAI skadeslös från tredje parts anspråk som uppkommer ur avtals- eller lagstridig användning av dennes konto (t.ex. otillåtet innehåll, IP-intrång), i den mån användaren bär ansvaret."
        },
        {
            type: "text",
            title: "19. Force majeure",
            description:
                "Ingen part ansvarar för underlåtenhet om orsaken ligger utanför partens kontroll (naturhändelser, krig, strejk, myndighetsåtgärder, omfattande nätavbrott)."
        },
        {
            type: "text",
            title: "20. Export-, sanktions- och tullregler",
            description:
                "Parterna ska följa tillämpliga export-, sanktions-, tull- och handelskontrollagar. ShipsterAI kan vägra eller begränsa tjänster om rättsliga krav så fordrar."
        },
        {
            type: "text",
            title: "21. Sekretess",
            description:
                "Icke-offentlig information (affärs-/driftshemligheter, avtal, tekniska detaljer) ska behandlas konfidentiellt. Lagstadgade upplysningsplikter gäller fortsatt."
        },
        {
            type: "text",
            title: "22. Överlåtelse och underleverantörer",
            description:
                "Rättigheter/skyldigheter får inte överlåtas utan den andra partens samtycke (förutom vid universalsuccession). ShipsterAI får anlita underleverantörer och ansvarar för deras prestation."
        },
        {
            type: "text",
            title: "23. Separationsklausul",
            description:
                "Om någon bestämmelse helt/delvis är ogiltig påverkar det inte övriga bestämmelser. En giltig reglering som ligger närmast syftet ska gälla istället."
        },
        {
            type: "text",
            title: "24. Tillämplig lag och forum",
            description:
                "Materiell svensk rätt tillämpas med undantag för dess internationella privaträtt. Exklusivt forum – i den mån det är tillåtet – är Stockholm, Sverige."
        },
        {
            type: "text",
            title: "25. Tvistlösning",
            description:
                "Parterna ska först söka en godöverenskommelse. Om det misslyckas kan, om avtalat, medling eller skiljeförfarande initieras enligt separat klausul."
        },
        {
            type: "text",
            title: "26. Kontakt",
            bullets: [
                "Allmänt: hello@shipster.ai",
                "Support: support@shipster.ai",
                "Sälj/Demo: sales@shipster.ai",
                "Säkerhet: responsible-disclosure@shipster.ai",
                "Adress: ShipsterAI AB • Exempelgatan 10 • 111 20 Stockholm • Sverige"
            ]
        },
        {
            type: "text",
            title: "Ikraftträdande",
            description:
                "Denna version träder i kraft vid publicering och ersätter tidigare versioner. Den version som publiceras på webbplatsen/plattformen är den gällande."
        },
        {
            type: "text",
            title: "Giltig från",
            description: "18 augusti 2025"
        }
    ]
};

export default termsSchema;
