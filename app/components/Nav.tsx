"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dict } from "../content/types";
import { GITHUB_URL, HOME, type Locale } from "../lib/site";
import { GithubMark } from "./GithubMark";

export function Nav({ dict, locale }: { dict: Dict["nav"]; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const other: Locale = locale === "ru" ? "en" : "ru";

  // Escape and a resize to desktop close the menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`topbar${open ? " open" : ""}`}>
      <div className="container topbar-inner">
        <Link href={HOME[locale]} className="brand" onClick={() => setOpen(false)}>
          <Image src="/brand/icon-192.png" alt="" width={28} height={28} className="brand-mark" />
          Hubium LMS
        </Link>
        <nav aria-label={dict.label} className="topbar-links">
          {dict.links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="topbar-actions">
          <a
            href={HOME[other]}
            hrefLang={other}
            lang={other}
            className="btn btn-ghost btn-sm"
            aria-label={dict.otherLocaleLabel}
          >
            {dict.otherLocale}
          </a>
          <a href={GITHUB_URL} className="btn btn-outline btn-sm topbar-github">
            <GithubMark />
            {dict.github}
          </a>
          <button
            type="button"
            className="btn btn-ghost btn-icon topbar-burger"
            aria-label={open ? dict.closeMenu : dict.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </div>
      </div>
      <nav id="mobile-menu" aria-label={dict.label} className="mobile-menu" hidden={!open}>
        <div className="container">
          {dict.links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={GITHUB_URL} onClick={() => setOpen(false)}>
            {dict.github}
          </a>
        </div>
      </nav>
    </header>
  );
}
