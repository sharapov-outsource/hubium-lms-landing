import type { Locale } from "../lib/site";

/** lucide icons the page uses; see app/components/Icon.tsx. */
export type IconName =
  | "BookOpen"
  | "LayoutGrid"
  | "ClipboardCheck"
  | "Video"
  | "MessageSquare"
  | "Shield"
  | "Plug"
  | "Lock"
  | "Sparkles"
  | "ListChecks"
  | "FolderInput"
  | "Users"
  | "Sun"
  | "Languages"
  | "Smartphone"
  | "Accessibility";

export type ScreenKey = "dashboard" | "course" | "grades" | "admin";

export interface Item {
  title: string;
  text: string;
}

export interface IconItem extends Item {
  icon: IconName;
}

export interface SectionHead {
  eyebrow: string;
  title: string;
  lead: string;
}

export interface Dict {
  locale: Locale;
  /** BCP 47 tag for <html lang> and JSON-LD. */
  lang: string;
  ogLocale: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogAlt: string;
    ogTitle: string;
    ogText: string;
  };
  nav: {
    label: string;
    links: { href: string; label: string }[];
    github: string;
    otherLocale: string;
    otherLocaleLabel: string;
    openMenu: string;
    closeMenu: string;
    skip: string;
  };
  hero: {
    badge: string;
    title: string;
    lead: string;
    primary: string;
    secondary: string;
    install: string;
    shotAlt: string;
  };
  screens: SectionHead & {
    tablist: string;
    tabs: { key: ScreenKey; label: string; text: string; alt: string }[];
  };
  features: SectionHead & { items: IconItem[] };
  moodle: SectionHead & { items: Item[] };
  ai: SectionHead & { items: IconItem[]; note: string };
  ui: SectionHead & {
    points: IconItem[];
    mobileAlt: string;
    demo: {
      title: string;
      pick: string;
      presets: string;
      light: string;
      dark: string;
      nav: string;
      button: string;
      badge: string;
      link: string;
      progress: string;
      checkbox: string;
      /** "{ratio}" is replaced with the contrast of text on the button. */
      contrast: string;
      /** Decimal separator for the ratio. */
      decimal: string;
      /** "{from}" and "{to}" are replaced with the picked and the corrected colour. */
      adjusted: string;
      kept: string;
    };
  };
  install: SectionHead & {
    steps: string[];
    code: string;
    trial: string;
    copy: string;
    copied: string;
    docs: string;
  };
  faq: { title: string; items: { q: string; a: string }[] };
  cta: { title: string; text: string; github: string; contact: string };
  footer: { tagline: string; license: string; source: string; cookies: string };
  cookies: {
    label: string;
    title: string;
    text: string;
    necessaryOnly: string;
    settings: string;
    acceptAll: string;
    modalTitle: string;
    modalIntro: string;
    necessaryTitle: string;
    necessaryText: string;
    analyticsTitle: string;
    /** "{id}" is replaced with the counter number. */
    analyticsText: string;
    always: string;
    cancel: string;
    save: string;
    close: string;
  };
}
