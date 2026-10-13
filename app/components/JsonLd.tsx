import type { Dict } from "../content/types";
import { GITHUB_URL, HOME, SITE_URL } from "../lib/site";

export function JsonLd({ dict }: { dict: Dict }) {
  const url = `${SITE_URL}${HOME[dict.locale] === "/" ? "" : HOME[dict.locale]}`;
  const appId = `${SITE_URL}/#software`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Hubium LMS",
      inLanguage: ["ru-RU", "en"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: dict.meta.title,
      description: dict.meta.description,
      inLanguage: dict.lang,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": appId },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": appId,
      name: "Hubium LMS",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Linux (Docker)",
      description: dict.meta.description,
      url,
      license: "https://www.gnu.org/licenses/agpl-3.0.html",
      offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
      inLanguage: ["ru", "en"],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      name: "Hubium LMS",
      codeRepository: GITHUB_URL,
      programmingLanguage: "TypeScript",
      license: "https://www.gnu.org/licenses/agpl-3.0.html",
      targetProduct: { "@id": appId },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: dict.lang,
      mainEntity: dict.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];
  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          // JSON from our own constants; `<` is escaped so no text can close the script tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
