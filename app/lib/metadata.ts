import type { Metadata, Viewport } from "next";
import type { Dict } from "../content/types";
import { HOME, SITE_URL } from "./site";

export function buildMetadata(dict: Dict): Metadata {
  const path = HOME[dict.locale];
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: dict.meta.title, template: "%s — Hubium LMS" },
    description: dict.meta.description,
    applicationName: "Hubium LMS",
    keywords: dict.meta.keywords,
    category: "education",
    alternates: {
      canonical: path,
      languages: { ru: HOME.ru, en: HOME.en, "x-default": HOME.ru },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: path,
      siteName: "Hubium LMS",
      locale: dict.ogLocale,
      alternateLocale: dict.locale === "ru" ? ["en_US"] : ["ru_RU"],
      type: "website",
    },
    twitter: { card: "summary_large_image", title: dict.meta.title, description: dict.meta.description },
    robots: { index: true, follow: true },
  };
}

// The page background of each theme, from the design system's `background` token.
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111318" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};
