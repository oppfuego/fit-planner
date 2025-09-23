import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

function getBaseUrl(req: Request): string {
    const url = new URL(req.url);
    const proto = url.protocol.replace(":", "") || "https";
    const host = url.host || "localhost:3000";
    return `${proto}://${host}`;
}

function parseColor(s: string | null | undefined, fallback = "#ffffff"): string {
    return typeof s === "string" && s.trim() ? s : fallback;
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const title = (searchParams.get("title") ?? "").slice(0, 140);
    const desc  = (searchParams.get("desc") ?? "").slice(0, 240);
    const bg    = parseColor(searchParams.get("bg"), "#ffffff");
    const color = parseColor(searchParams.get("color"), "#000000");

    const logoPath = "/logo.png";
    const logoUrl = `${getBaseUrl(req)}${logoPath}`;

    return new ImageResponse(
        (
            <div
                style={{
                    width: `${size.width}px`,
                    height: `${size.height}px`,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "72px",
                    backgroundColor: bg,
                    color,
                    fontFamily:
                        'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
                }}
            >
                <div
                    style={{
                        width: 120,
                        height: 120,
                        borderRadius: "50%",
                        overflow: "hidden",
                        marginRight: 48,
                        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src={logoUrl}
                        alt="Logo"
                        width={120}
                        height={120}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "50%",
                        }}
                    />
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div
                        style={{
                            fontSize: 64,
                            fontWeight: 800,
                            lineHeight: 1.1,
                            whiteSpace: "pre-wrap",
                            wordBreak: "break-word",
                        }}
                    >
                        {title}
                    </div>
                    {desc ? (
                        <div
                            style={{
                                marginTop: 24,
                                fontSize: 30,
                                opacity: 0.9,
                                whiteSpace: "pre-wrap",
                                wordBreak: "break-word",
                            }}
                        >
                            {desc}
                        </div>
                    ) : null}
                </div>
            </div>
        ),
        size
    );
}