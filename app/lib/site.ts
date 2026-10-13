// Site-wide settings. The domain, counter and contact address are placeholders until they are known.

/** Public address of the landing, without a trailing slash. Canonical URLs, sitemap and OG use it. */
export const SITE_URL = "https://hubium.example";

export const GITHUB_URL = "https://github.com/sharapov-outsource/hubium";

/** Yandex Metrika counter. While null, neither the counter nor the cookie banner is shown. */
export const METRIKA_ID: number | null = null;

/** Public contact address. While null, the "Write to us" button is hidden. */
export const CONTACT_EMAIL: string | null = null;

export const LOCALES = ["ru", "en"] as const;
export type Locale = (typeof LOCALES)[number];

/** Path of the landing in each language: Russian is the default at the root. */
export const HOME: Record<Locale, string> = { ru: "/", en: "/en" };
