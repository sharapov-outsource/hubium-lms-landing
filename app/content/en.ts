import type { Dict } from "./types";

export const en: Dict = {
  locale: "en",
  lang: "en",
  ogLocale: "en_US",
  meta: {
    title: "Hubium LMS — an open-source learning management system",
    description:
      "Hubium LMS is an open-source learning management system and a modern alternative to Moodle: courses, roles and permissions, assignments, quizzes and a gradebook, forums, video and webinars, SCORM, LTI, Moodle course import and an AI assistant. Runs on your server with Docker Compose, licensed under AGPL-3.0.",
    keywords: [
      "Hubium LMS",
      "LMS",
      "learning management system",
      "open-source LMS",
      "Moodle alternative",
      "Moodle course import",
      "SCORM",
      "LTI 1.3",
      "gradebook",
      "AI teaching assistant",
    ],
    ogAlt: "Hubium LMS — an open-source learning management system",
    ogTitle: "An open-source learning\nmanagement system",
    ogText: "A modern alternative to Moodle with a calm interface",
  },
  nav: {
    label: "Page sections",
    links: [
      { href: "#screens", label: "Screens" },
      { href: "#features", label: "Features" },
      { href: "#moodle", label: "From Moodle" },
      { href: "#ai", label: "AI" },
      { href: "#install", label: "Install" },
      { href: "#faq", label: "FAQ" },
    ],
    github: "GitHub",
    otherLocale: "RU",
    otherLocaleLabel: "Русская версия",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skip: "Skip to content",
  },
  hero: {
    badge: "Open source · AGPL-3.0",
    title: "A learning management system with a calm interface",
    lead: "Hubium LMS covers what schools, universities and companies run Moodle for: courses, roles and permissions, assignments, quizzes and a gradebook, forums, video and webinars, SCORM and LTI. It works on a phone, in light and dark themes, in Russian and English.",
    primary: "Source code on GitHub",
    secondary: "See the features",
    install: "One command starts the whole stack",
    shotAlt: "A student's home page in Hubium LMS: courses, to-dos and upcoming events",
  },
  screens: {
    eyebrow: "Screens",
    title: "One interface for students, teachers and administrators",
    lead: "These are real Hubium LMS screens with demo data. The pictures follow your device's theme.",
    tablist: "Hubium LMS screens",
    tabs: [
      {
        key: "course",
        label: "Course",
        text: "Sections and activities, access restrictions and completion ticks.",
        alt: "A course page with sections and activities",
      },
      {
        key: "grades",
        label: "Grades",
        text: "A gradebook with categories, weights and six aggregation methods.",
        alt: "A course gradebook in the grader report",
      },
      {
        key: "admin",
        label: "Administration",
        text: "A brand colour with automatic contrast correction, and a logo. Next to it: users, roles, courses and an environment check.",
        alt: "Branding settings in administration: brand colour, preview and logo",
      },
    ],
  },
  features: {
    eyebrow: "Features",
    title: "Everything a course needs",
    lead: "Hubium LMS covers the usual Moodle jobs and adds what Moodle lacks: real-time messaging, an AI assistant and a mobile layout that is pleasant to use.",
    items: [
      {
        icon: "BookOpen",
        title: "Courses",
        text: "Categories, topic and weekly formats, a catalog with search, access restrictions, completion tracking, groups and cohorts, a recycle bin with restore.",
      },
      {
        icon: "LayoutGrid",
        title: "Activities",
        text: "Page, link, file, assignment, quiz, forum, video, live session, SCORM and LTI. Every activity is a module with one shared contract.",
      },
      {
        icon: "ClipboardCheck",
        title: "Quizzes and grades",
        text: "A question bank with seven types, a time limit enforced on the server and autosave. A gradebook with six aggregation methods, CSV import and export.",
      },
      {
        icon: "Video",
        title: "Video and webinars",
        text: "Resumable upload, HLS at 360/720/1080p, captions and optional no-skip-ahead. Webinars in BigBlueButton with recordings and in Jitsi.",
      },
      {
        icon: "MessageSquare",
        title: "Communication",
        text: "Real-time messages, forums, announcements, a calendar with reminders and iCal, notifications in the app, by email and as push.",
      },
      {
        icon: "Shield",
        title: "Moodle-grade permissions",
        text: "Contexts from site to activity, roles in the database, view-as-role, and a page that explains why a person can or cannot do something.",
      },
      {
        icon: "Plug",
        title: "Integrations",
        text: "REST API v1 with an OpenAPI 3.1 description and personal access tokens, webhooks signed with HMAC, Prometheus metrics.",
      },
      {
        icon: "Lock",
        title: "Sign-in and security",
        text: "Email or username sign-in, two-factor authentication, Google, Yandex ID and VK ID. A CSP with a nonce, SSRF protection, untrusted content on its own domain.",
      },
    ],
  },
  moodle: {
    eyebrow: "From Moodle",
    title: "Familiar concepts, no long migration",
    lead: "Hubium LMS works the way Moodle administrators expect, and takes courses straight from Moodle backups.",
    items: [
      {
        title: "Import of .mbz backups",
        text: "Moodle 4.1–5.x: pages, labels, links, files and folders, assignments, quizzes with their question bank, forums, SCORM and BigBlueButton. Other activities become labels, and every import ends with a report.",
      },
      {
        title: "GIFT and Moodle XML questions",
        text: "The question bank imports and exports both formats, with tags and drafts.",
      },
      {
        title: "Roles and permissions",
        text: "Contexts site → category → course → activity, role archetypes, a capability matrix and overrides at every level.",
      },
      {
        title: "Standards",
        text: "SCORM 1.2 and 2004 on a separate origin, LTI 1.3 Advantage: Deep Linking, grades into the gradebook, Names and Roles.",
      },
    ],
  },
  ai: {
    eyebrow: "AI assistant",
    title: "AI with privacy in mind",
    lead: "AI stays off until an administrator picks a provider: Claude or any OpenAI-compatible server, such as Ollama, vLLM or YandexGPT.",
    items: [
      {
        icon: "Sparkles",
        title: "Course tutor",
        text: "Answers from course materials with citations. It never sees hidden material or quiz questions, and is unavailable during a quiz attempt.",
      },
      {
        icon: "ListChecks",
        title: "Question generation",
        text: "Writes questions from pages and uploaded PDF, DOCX, PPTX, ODT and ODP files. They land in the bank as drafts for the teacher to review.",
      },
      {
        icon: "ClipboardCheck",
        title: "Grading assistant",
        text: "Reads the submission with its attachments and proposes a grade and feedback, which the teacher reviews before saving.",
      },
    ],
    note: "Per-feature and per-course switches, quotas per user and per course, consent from people, and pseudonymised work before grading.",
  },
  ui: {
    eyebrow: "Interface",
    title: "A calm interface in your institution's colours",
    lead: "Pick a brand colour, and Hubium LMS derives the shades for the light and dark themes so that text keeps a contrast of at least 4.5:1.",
    points: [
      { icon: "Sun", title: "Light and dark themes", text: "Everyone picks a theme or keeps the system one." },
      { icon: "Languages", title: "Russian and English", text: "Every interface text exists in both languages." },
      {
        icon: "Smartphone",
        title: "Works on a phone",
        text: "Bottom navigation, an installable PWA with an offline page and push notifications.",
      },
      {
        icon: "Accessibility",
        title: "Accessibility",
        text: "Every end-to-end scenario is checked with axe for serious and critical violations.",
      },
    ],
    mobileAlt: "Hubium LMS on a phone: the home page and the bottom navigation",
    demo: {
      title: "Try your colour",
      pick: "Brand colour",
      presets: "Preset colours",
      light: "Light theme",
      dark: "Dark theme",
      nav: "My courses",
      button: "Continue",
      badge: "New",
      link: "All courses",
      progress: "Course progress",
      checkbox: "Track completion",
      contrast: "Text on the button — {ratio}:1",
      decimal: ".",
      adjusted: "{from} was darkened to {to} so that text on it stays readable.",
      kept: "This colour passes the contrast check as it is.",
    },
  },
  install: {
    eyebrow: "Installation",
    title: "Your server, your data",
    lead: "You need a Linux server with Docker and three domain names: for the application, for untrusted content and for file downloads. One command starts PostgreSQL, S3 storage, the workers and HTTPS.",
    steps: [
      "Clone the repository and copy .env.production.example to .env.",
      "Set the addresses, secrets, mail and the first administrator.",
      "Start the stack: Caddy gets certificates for all three domains.",
    ],
    code: `git clone https://github.com/sharapov-outsource/hubium.git && cd hubium
cp .env.production.example .env
# set APP_URL, CONTENT_HOST, S3_PUBLIC_URL, APP_SECRET, S3_SECRET_KEY,
# POSTGRES_PASSWORD, SMTP_URL, MAIL_FROM and SEED_ADMIN_* in .env
docker compose -f docker/compose.yml --env-file .env up -d --build`,
    trial:
      "For a trial on one machine you can skip the addresses: the stack runs on https://lms.localhost. SEED_PROFILE=demo adds sample courses and users.",
    copy: "Copy",
    copied: "Copied",
    docs: "Backups, updates and monitoring",
  },
  faq: {
    title: "Questions",
    items: [
      {
        q: "How much does Hubium LMS cost?",
        a: "Nothing. The code is open under AGPL-3.0: you can install it on your own server for free and change it. If you offer a modified version as a service, you have to publish the source of your changes too.",
      },
      {
        q: "How is Hubium LMS different from Moodle?",
        a: "The concepts are the same: contexts, roles and permissions, activities, a gradebook. The differences are an interface that works on a phone, real-time messaging, a built-in AI assistant and a one-command Docker Compose install. The code is TypeScript.",
      },
      {
        q: "Can I bring my courses from Moodle?",
        a: "Yes, from .mbz backups of Moodle 4.1–5.x. Questions also move through GIFT or Moodle XML. Activities Hubium LMS does not have become labels, and every import ends with a report.",
      },
      {
        q: "Is there a mobile app?",
        a: "Hubium LMS is an installable web app (PWA) with bottom navigation, an offline page and push notifications. No app store download is needed.",
      },
      {
        q: "Where is the data stored?",
        a: "On your server: in PostgreSQL and S3-compatible storage. Use the bundled RustFS or any external S3, such as Yandex Object Storage, VK Cloud or Selectel.",
      },
      {
        q: "Do I have to use AI?",
        a: "No. AI stays off until an administrator picks a provider. It can be switched on per feature and per course, and limited with quotas.",
      },
      {
        q: "Which standards are supported?",
        a: "SCORM 1.2 and 2004, LTI 1.3 Advantage, GIFT and Moodle XML questions, an iCal calendar feed and a REST API described in OpenAPI 3.1.",
      },
    ],
  },
  cta: {
    title: "Try Hubium LMS on your own server",
    text: "One machine with Docker is enough for a trial.",
    github: "Source code on GitHub",
    contact: "Write to us",
  },
  footer: {
    tagline: "An open-source learning management system",
    license: "Licensed under AGPL-3.0",
    source: "Source code",
    cookies: "Cookie settings",
  },
  cookies: {
    label: "Cookie consent",
    title: "Cookies and Yandex Metrica.",
    text: "This site uses Yandex Metrica to understand how people use the page. We collect nothing else. Russian law (152-FZ) requires your consent.",
    necessaryOnly: "Necessary only",
    settings: "Settings",
    acceptAll: "Accept all",
    modalTitle: "Cookie settings",
    modalIntro: "The site uses two categories of cookies. Strictly necessary ones cannot be turned off: the site does not work without them.",
    necessaryTitle: "Strictly necessary",
    necessaryText: "Keep your choice on this page. The site does not work without them.",
    analyticsTitle: "Analytics — Yandex Metrica",
    analyticsText:
      "Counter {id}. Operator: YANDEX LLC, 16 Lva Tolstogo St., Moscow 119021. Collects anonymised data about page views, clicks and time on the site.",
    always: "Always",
    cancel: "Cancel",
    save: "Save choice",
    close: "Close",
  },
};
