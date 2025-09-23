import { baseURL } from "@/resources/content";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
