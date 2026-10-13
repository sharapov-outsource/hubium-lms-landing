import Image from "next/image";
import type { Dict } from "../content/types";
import { GITHUB_URL, HOME, METRIKA_ID } from "../lib/site";
import { CookieSettingsButton } from "./Cookies";

export function Footer({ dict }: { dict: Dict }) {
  const other = dict.locale === "ru" ? "en" : "ru";
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand">
            <Image src="/brand/icon-192.png" alt="" width={28} height={28} className="brand-mark" />
            Hubium LMS
          </span>
          <p className="footer-text">{dict.footer.tagline}</p>
        </div>
        <nav className="footer-links" aria-label="Hubium LMS">
          <a href={GITHUB_URL} className="footer-link">
            {dict.footer.source}
          </a>
          <a href={`${GITHUB_URL}/blob/main/LICENSE`} className="footer-link">
            {dict.footer.license}
          </a>
          <a href={HOME[other]} hrefLang={other} lang={other} className="footer-link">
            {dict.nav.otherLocaleLabel}
          </a>
          {METRIKA_ID !== null ? <CookieSettingsButton label={dict.footer.cookies} /> : null}
        </nav>
      </div>
    </footer>
  );
}
