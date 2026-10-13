import type { MetadataRoute } from "next";
import { HOME, SITE_URL } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { ru: `${SITE_URL}${HOME.ru}`, en: `${SITE_URL}${HOME.en}` };
  return (["ru", "en"] as const).map((locale) => ({
    url: languages[locale],
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "ru" ? 1 : 0.9,
    alternates: { languages },
  }));
}
