"use client";

import { X } from "lucide-react";
import Script from "next/script";
import { useEffect, useState } from "react";
import type { Dict } from "../content/types";
import { useConsent } from "../context/CookieConsent";

type CookieText = Dict["cookies"];

/**
 * Yandex Metrika gated by analytics consent: the script and the noscript pixel mount only after
 * the visitor agrees to analytics cookies, as 152-FZ requires.
 */
export function YandexMetrika({ id }: { id: number }) {
  const { consent } = useConsent();
  if (consent?.analytics !== true) return null;
  return (
    <>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=${id}", "ym");

          ym(${id}, "init", {ssr:true, webvisor:true, clickmap:true, referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
        `}
      </Script>
      <noscript>
        <div>
          <img src={`https://mc.yandex.ru/watch/${id}`} style={{ position: "absolute", left: "-9999px" }} alt="" />
        </div>
      </noscript>
    </>
  );
}

export function CookieBanner({ dict, metrikaId }: { dict: CookieText; metrikaId: number | null }) {
  const { bannerOpen, modalOpen, acceptAll, rejectAll, openModal } = useConsent();
  return (
    <>
      {bannerOpen && (
        <div className="cookie-banner" role="dialog" aria-label={dict.label}>
          <div className="container cookie-banner-inner">
            <p className="cookie-banner-text">
              <strong>{dict.title}</strong> {dict.text}
            </p>
            <div className="cookie-banner-actions">
              <button type="button" className="btn btn-secondary" onClick={rejectAll}>
                {dict.necessaryOnly}
              </button>
              <button type="button" className="btn btn-secondary" onClick={openModal}>
                {dict.settings}
              </button>
              <button type="button" className="btn btn-primary" onClick={acceptAll}>
                {dict.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}
      {modalOpen && <CookieSettings dict={dict} metrikaId={metrikaId} />}
    </>
  );
}

export function CookieSettingsButton({ label }: { label: string }) {
  const { openModal } = useConsent();
  return (
    <button type="button" className="footer-link" onClick={openModal}>
      {label}
    </button>
  );
}

function CookieSettings({ dict, metrikaId }: { dict: CookieText; metrikaId: number | null }) {
  const { consent, saveCustom, closeModal } = useConsent();
  const [analytics, setAnalytics] = useState(consent?.analytics ?? false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [closeModal]);

  return (
    <div className="overlay" onClick={closeModal} role="presentation">
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="dialog-close" onClick={closeModal} aria-label={dict.close}>
          <X aria-hidden />
        </button>
        <h2 id="cookie-title" className="dialog-title">
          {dict.modalTitle}
        </h2>
        <p className="dialog-description">{dict.modalIntro}</p>
        <div className="cookie-categories">
          <div className="cookie-category">
            <div>
              <div className="cookie-category-title">{dict.necessaryTitle}</div>
              <p className="cookie-category-text">{dict.necessaryText}</p>
            </div>
            <span className="badge">{dict.always}</span>
          </div>
          <div className="cookie-category">
            <div>
              <div className="cookie-category-title">{dict.analyticsTitle}</div>
              <p className="cookie-category-text">{dict.analyticsText.replace("{id}", String(metrikaId ?? ""))}</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={analytics}
              aria-label={dict.analyticsTitle}
              className="switch"
              onClick={() => setAnalytics((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
        <div className="dialog-footer">
          <button type="button" className="btn btn-secondary" onClick={closeModal}>
            {dict.cancel}
          </button>
          <button type="button" className="btn btn-primary" onClick={() => saveCustom({ analytics })}>
            {dict.save}
          </button>
        </div>
      </div>
    </div>
  );
}
