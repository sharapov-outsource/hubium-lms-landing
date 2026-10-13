import type { ReactNode } from "react";
import type { Dict } from "../content/types";
import { CookieConsentProvider } from "../context/CookieConsent";
import { METRIKA_ID } from "../lib/site";
import { CookieBanner, YandexMetrika } from "./Cookies";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import { Nav } from "./Nav";

/** The <html> of one language version; each language has its own root layout. */
export function Shell({ dict, children }: { dict: Dict; children: ReactNode }) {
  return (
    <html lang={dict.locale} data-scroll-behavior="smooth">
      <body>
        <CookieConsentProvider enabled={METRIKA_ID !== null}>
          <a href="#main" className="skip-link">
            {dict.nav.skip}
          </a>
          <Nav dict={dict.nav} locale={dict.locale} />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer dict={dict} />
          <JsonLd dict={dict} />
          {METRIKA_ID !== null ? <YandexMetrika id={METRIKA_ID} /> : null}
          <CookieBanner dict={dict.cookies} metrikaId={METRIKA_ID} />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
