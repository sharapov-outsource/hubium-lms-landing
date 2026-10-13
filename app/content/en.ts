import type { Dict } from "./types";

export const en: Dict = {
  locale: "en",
  lang: "en",
  ogLocale: "en_US",
  meta: {
    title: "Hubium LMS — an open-source learning management system",
    description:
      "Hubium LMS is a free, open-source learning management system and a modern alternative to Moodle: courses, assignments, quizzes, a gradebook, forums, video and webinars, SCORM and LTI, Moodle course import and an AI assistant. Install it on your own server.",
    keywords: [
      "Hubium LMS",
      "LMS",
      "learning management system",
      "open-source LMS",
      "free LMS",
      "Moodle alternative",
      "Moodle course migration",
      "SCORM",
      "LTI 1.3",
      "gradebook",
      "AI teaching assistant",
    ],
    ogAlt: "Hubium LMS — an open-source learning management system",
    ogTitle: "An open-source learning\nmanagement system",
    ogText: "A modern, easy-to-use alternative to Moodle",
  },
  nav: {
    label: "Page sections",
    links: [
      { href: "#screens", label: "Tour" },
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
    badge: "Free and open source",
    title: "Online learning without the clutter",
    lead: "Hubium LMS is an open-source alternative to Moodle. Courses, assignments, quizzes and a gradebook, forums, video and webinars, SCORM and LTI — everything schools, universities and companies need from a learning platform. It works on phones, in light and dark mode, in English and Russian.",
    primary: "View the code on GitHub",
    secondary: "Explore features",
    install: "Installs with one command",
    shotAlt: "A student's home page in Hubium LMS: courses, assignments and upcoming events",
  },
  screens: {
    eyebrow: "Tour",
    title: "Built for students, teachers and administrators",
    lead: "These are real Hubium LMS screens with demo data. They follow your device's light or dark mode.",
    tablist: "Hubium LMS screens",
    tabs: [
      {
        key: "course",
        label: "Course",
        text: "Course sections and materials, access rules and completion tracking.",
        alt: "A course page with sections and materials",
      },
      {
        key: "grades",
        label: "Gradebook",
        text: "Every grade in a course in one table, with categories, weights and six ways to calculate the total.",
        alt: "A course gradebook as a teacher sees it",
      },
      {
        key: "admin",
        label: "Administration",
        text: "Your institution's colour and logo. If the colour lacks contrast, Hubium LMS darkens it for you. Users, roles, courses and server checks live here too.",
        alt: "Branding settings: brand colour, preview and logo",
      },
    ],
  },
  features: {
    eyebrow: "Features",
    title: "Everything your courses need",
    lead: "What you expect from Moodle, plus what it lacks: real-time messaging, an AI assistant and a mobile-friendly interface.",
    items: [
      {
        icon: "BookOpen",
        title: "Courses",
        text: "A searchable catalog, categories, and topic or weekly formats. Access rules, completion tracking, groups and cohorts. Anything deleted can be restored from the recycle bin.",
      },
      {
        icon: "LayoutGrid",
        title: "Materials and activities",
        text: "Pages, files and links, assignments, quizzes, forums, video, live sessions, SCORM packages and external LTI tools.",
      },
      {
        icon: "ClipboardCheck",
        title: "Quizzes and grades",
        text: "A question bank with seven question types, autosaved answers, and time limits that hold even if the browser is closed. A gradebook with CSV import and export.",
      },
      {
        icon: "Video",
        title: "Video and webinars",
        text: "Resumable uploads of large files, playback up to 1080p, captions and an option to block skipping ahead. Live sessions in BigBlueButton with recordings, or in Jitsi.",
      },
      {
        icon: "MessageSquare",
        title: "Communication",
        text: "Real-time direct and group messages, forums, announcements and a calendar with reminders. Notifications in the app, by email and as push.",
      },
      {
        icon: "Shield",
        title: "Moodle-style permissions",
        text: "Assign roles for the whole site, a category, a course or a single activity. View a course as a student, and see why someone can or cannot do something.",
      },
      {
        icon: "Plug",
        title: "Integrations",
        text: "A REST API documented with OpenAPI, personal access tokens, signed webhooks and Prometheus metrics.",
      },
      {
        icon: "Lock",
        title: "Sign-in and security",
        text: "Sign in with an email or username, two-factor authentication, or Google, Yandex ID and VK ID. A strict CSP, SSRF protection, and SCORM packages served from a separate domain.",
      },
    ],
  },
  moodle: {
    eyebrow: "From Moodle",
    title: "Familiar to anyone who has used Moodle",
    lead: "Roles, permissions and activities work the way they do in Moodle, and courses come straight from Moodle backups.",
    items: [
      {
        title: "Import of .mbz backups",
        text: "From Moodle 4.1–5.x: pages, labels, links, files and folders, assignments, quizzes with their question bank, forums, SCORM and BigBlueButton. Anything else becomes a label, so nothing disappears silently, and every import ends with a report.",
      },
      {
        title: "GIFT and Moodle XML questions",
        text: "Import and export the question bank in both formats, with tags and drafts.",
      },
      {
        title: "Roles and permissions",
        text: "The same levels as in Moodle: site, category, course and activity. Standard Moodle roles, a permission matrix and overrides at every level.",
      },
      {
        title: "Standards",
        text: "SCORM 1.2 and 2004, and LTI 1.3 Advantage: external tools, grades sent back to the gradebook, and participant lists.",
      },
    ],
  },
  ai: {
    eyebrow: "AI assistant",
    title: "AI that stays under your control",
    lead: "AI is off until an administrator connects a provider: Claude or any server with an OpenAI-compatible API, such as Ollama, vLLM or YandexGPT.",
    items: [
      {
        icon: "Sparkles",
        title: "Course tutor",
        text: "Answers questions from the course materials and cites its sources. It never sees hidden materials or quiz questions, and it is unavailable while a student takes a quiz.",
      },
      {
        icon: "ListChecks",
        title: "Question generation",
        text: "Writes questions from course pages and uploaded PDF, DOCX, PPTX, ODT and ODP files. They go to the question bank as drafts, and the teacher decides which to keep.",
      },
      {
        icon: "ClipboardCheck",
        title: "Grading assistant",
        text: "Reads a student's submission with its attachments and suggests a grade and feedback. The teacher has the final say.",
      },
    ],
    note: "AI is switched on separately for each feature and each course. Quotas apply per user and per course, people give their consent first, and student names are replaced with pseudonyms before grading.",
  },
  ui: {
    eyebrow: "Branding",
    title: "In your institution's colours",
    lead: "Pick your brand colour, and Hubium LMS works out shades for light and dark mode that keep text readable, with a contrast of at least 4.5:1.",
    points: [
      { icon: "Sun", title: "Light and dark mode", text: "Everyone picks a mode or follows their system setting." },
      { icon: "Languages", title: "English and Russian", text: "The whole interface is available in both languages." },
      {
        icon: "Smartphone",
        title: "Works on phones",
        text: "A bottom navigation bar, install to the home screen (PWA) and push notifications.",
      },
      {
        icon: "Accessibility",
        title: "Accessibility",
        text: "Every automated end-to-end test also checks the page for serious accessibility issues.",
      },
    ],
    mobileAlt: "Hubium LMS on a phone: the home page and the bottom navigation bar",
    demo: {
      title: "Try your colour",
      pick: "Brand colour",
      presets: "Preset colours",
      light: "Light mode",
      dark: "Dark mode",
      nav: "My courses",
      button: "Continue",
      badge: "New",
      link: "All courses",
      progress: "Course progress",
      checkbox: "Track completion",
      contrast: "Button text contrast: {ratio}:1",
      decimal: ".",
      adjusted: "{from} is too light for white text, so Hubium LMS darkens it to {to}.",
      kept: "This colour works as it is.",
    },
  },
  install: {
    eyebrow: "Installation",
    title: "Your server, your data",
    lead: "You need a Linux server with Docker and three domains: one for the LMS, one for learning packages and one for file downloads. One command starts everything: the PostgreSQL database, file storage, background jobs and HTTPS.",
    steps: [
      "Clone the repository and create a .env settings file from the example.",
      "Fill in the addresses, passwords and keys, the mail server and the first administrator.",
      "Start the system. Certificates for all three domains are issued automatically.",
    ],
    code: `git clone https://github.com/sharapov-outsource/hubium.git && cd hubium
cp .env.production.example .env
# set APP_URL, CONTENT_HOST, S3_PUBLIC_URL, APP_SECRET, S3_SECRET_KEY,
# POSTGRES_PASSWORD, SMTP_URL, MAIL_FROM and SEED_ADMIN_* in .env
docker compose -f docker/compose.yml --env-file .env up -d --build`,
    trial:
      "For a trial on one computer you can skip the addresses: the system opens at https://lms.localhost. Add SEED_PROFILE=demo to start with sample courses and users.",
    copy: "Copy",
    copied: "Copied",
    docs: "Backups, updates and monitoring (in Russian)",
  },
  faq: {
    title: "Questions",
    items: [
      {
        q: "How much does Hubium LMS cost?",
        a: "Nothing. It is free and open source under AGPL-3.0: install it on your own server and adapt it as you like. If you offer a modified version to others as a service, you must publish the source code of your changes.",
      },
      {
        q: "How is Hubium LMS different from Moodle?",
        a: "The core concepts are the same: roles and permissions, activities, a gradebook. The difference is an interface that works well on phones, real-time messaging, a built-in AI assistant and installation with a single command.",
      },
      {
        q: "Can I move my courses from Moodle?",
        a: "Yes, from .mbz backups of Moodle 4.1–5.x. Questions can also be moved on their own in GIFT or Moodle XML. Activities that Hubium LMS does not have become labels, and you get a report after each import.",
      },
      {
        q: "Is there a mobile app?",
        a: "You don't need one. Hubium LMS installs on a phone straight from the browser (PWA) and sends push notifications, and the interface is designed for small screens.",
      },
      {
        q: "Where is the data stored?",
        a: "Only on your server: in a PostgreSQL database and S3-compatible storage. Use the built-in storage or an external one, such as Yandex Object Storage, VK Cloud or Selectel.",
      },
      {
        q: "Do I have to use AI?",
        a: "No. AI stays off until an administrator connects a provider. You can then enable it only for the features and courses you choose, with quotas.",
      },
      {
        q: "Which standards are supported?",
        a: "SCORM 1.2 and 2004, LTI 1.3 Advantage, GIFT and Moodle XML question formats, iCal calendar feeds and a REST API described with OpenAPI 3.1.",
      },
    ],
  },
  cta: {
    title: "Try Hubium LMS on your own server",
    text: "One computer with Docker is enough for a trial.",
    github: "View the code on GitHub",
    contact: "Contact us",
  },
  footer: {
    tagline: "An open-source learning management system",
    license: "AGPL-3.0 license",
    source: "Source code",
    cookies: "Cookie settings",
  },
  cookies: {
    label: "Cookie consent",
    title: "Cookies and Yandex Metrica.",
    text: "We use Yandex Metrica to understand how visitors use this site. We collect no other data. Russian data protection law (152-FZ) requires your consent.",
    necessaryOnly: "Necessary only",
    settings: "Settings",
    acceptAll: "Accept all",
    modalTitle: "Cookie settings",
    modalIntro: "This site uses two categories of cookies. Strictly necessary cookies cannot be turned off: the site does not work without them.",
    necessaryTitle: "Strictly necessary",
    necessaryText: "Remember which cookies you have allowed.",
    analyticsTitle: "Analytics — Yandex Metrica",
    analyticsText:
      "Counter {id}. Operator: YANDEX LLC, 16 Lva Tolstogo St., Moscow 119021. Collects anonymised data on page views, clicks and time on site.",
    always: "Always",
    cancel: "Cancel",
    save: "Save my choice",
    close: "Close",
  },
};
