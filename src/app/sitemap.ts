import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { baseURL } from "@/resources/content";

function collectRoutes(dir: string, base = ""): { route: string; mtime: Date }[] {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const routes: { route: string; mtime: Date }[] = [];
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (
                entry.name === "api" ||
                entry.name.startsWith("_") ||
                entry.name === "node_modules" ||
                entry.name === ".next"
            ) {
                continue;
            }
            const isRouteGroup = entry.name.startsWith("(") && entry.name.endsWith(")");
            const isDynamic = entry.name.startsWith("[") && entry.name.endsWith("]");
            const nextBase = isRouteGroup
                ? base
                : isDynamic
                    ? base
                    : path.join(base, entry.name);

            if (!isDynamic) {
                routes.push(...collectRoutes(fullPath, nextBase));
            }
            continue;
        }
        const isPage =
            entry.name === "page.tsx" ||
            entry.name === "page.jsx" ||
            entry.name === "index.tsx" ||
            entry.name === "index.jsx";
        if (!isPage) continue;
        const routePath = base.replace(/\\/g, "/"); // на Windows
        const urlPath = routePath === "" ? "/" : `/${routePath.replace(/^\/+/, "")}`;
        const stat = fs.statSync(path.join(dir, entry.name));
        routes.push({ route: urlPath, mtime: stat.mtime });
    }

    return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const appDir = path.join(process.cwd(), "src", "app");
    const discovered = collectRoutes(appDir);

    const seen = new Set<string>();
    const items = discovered
        .filter(({ route }) => {
            if (seen.has(route)) return false;
            seen.add(route);
            return true;
        })
        .map(({ route, mtime }) => ({
            url: `${baseURL}${route === "/" ? "" : route}`,
            lastModified: mtime.toISOString().split("T")[0], // YYYY-MM-DD
        }));
    return items;
}
