import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 — Hubium LMS",
  robots: { index: false, follow: false },
};

// Unmatched URLs have no language of their own, so the page speaks both.
export default function GlobalNotFound() {
  return (
    <html lang="ru">
      <body>
        <main className="not-found">
          <p className="not-found-code" aria-hidden>
            404
          </p>
          <h1 className="display-2">Страница не найдена</h1>
          <p className="lead" lang="en">
            Page not found
          </p>
          <div className="actions">
            <a href="/" className="btn btn-primary">
              На главную
            </a>
            <a href="/en" className="btn btn-outline" lang="en">
              English version
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
