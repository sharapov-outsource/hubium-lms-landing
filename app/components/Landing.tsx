import { ArrowRight, BookOpen, Mail } from "lucide-react";
import type { Dict, SectionHead } from "../content/types";
import { CONTACT_EMAIL, GITHUB_URL } from "../lib/site";
import { BrandDemo } from "./BrandDemo";
import { CopyButton } from "./CopyButton";
import { GithubMark } from "./GithubMark";
import { IconTile } from "./Icon";
import { ScreenTabs } from "./ScreenTabs";
import { Shot } from "./Shot";

export function Landing({ dict }: { dict: Dict }) {
  return (
    <>
      <Hero dict={dict} />
      <Screens dict={dict} />
      <Features dict={dict} />
      <Moodle dict={dict} />
      <Ai dict={dict} />
      <Interface dict={dict} />
      <Install dict={dict} />
      <Faq dict={dict} />
      <Cta dict={dict} />
    </>
  );
}

function Head({ head, id }: { head: SectionHead; id: string }) {
  return (
    <div className="section-head">
      <span className="badge badge-accent">{head.eyebrow}</span>
      <h2 id={id} className="display-2">
        {head.title}
      </h2>
      <p className="lead">{head.lead}</p>
    </div>
  );
}

function Hero({ dict }: { dict: Dict }) {
  const h = dict.hero;
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-text">
          <span className="badge badge-accent">{h.badge}</span>
          <h1 id="hero-title" className="display-1">
            {h.title}
          </h1>
          <p className="lead">{h.lead}</p>
          <div className="actions">
            <a href={GITHUB_URL} className="btn btn-primary btn-lg">
              <GithubMark />
              {h.primary}
            </a>
            <a href="#features" className="btn btn-outline btn-lg">
              {h.secondary}
              <ArrowRight aria-hidden />
            </a>
          </div>
          <p className="hero-install">
            {h.install}: <code>sudo bash install-hubium.sh</code>
          </p>
        </div>
        <div className="frame hero-shot">
          <Shot
            locale={dict.locale}
            screen="dashboard"
            alt={h.shotAlt}
            sizes="(min-width: 1200px) 1152px, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function Screens({ dict }: { dict: Dict }) {
  const s = dict.screens;
  return (
    <section id="screens" className="section section-alt" aria-labelledby="screens-title">
      <div className="container">
        <Head head={s} id="screens-title" />
        <ScreenTabs
          label={s.tablist}
          tabs={s.tabs}
          panels={s.tabs.map((t) => (
            <div key={t.key} className="frame">
              <Shot
                locale={dict.locale}
                screen={t.key}
                alt={t.alt}
                sizes="(min-width: 1200px) 1152px, 100vw"
              />
            </div>
          ))}
        />
      </div>
    </section>
  );
}

function Features({ dict }: { dict: Dict }) {
  const f = dict.features;
  return (
    <section id="features" className="section" aria-labelledby="features-title">
      <div className="container">
        <Head head={f} id="features-title" />
        <ul className="grid grid-4">
          {f.items.map((item) => (
            <li key={item.title} className="card card-body">
              <IconTile name={item.icon} />
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Moodle({ dict }: { dict: Dict }) {
  const m = dict.moodle;
  return (
    <section id="moodle" className="section section-alt" aria-labelledby="moodle-title">
      <div className="container">
        <Head head={m} id="moodle-title" />
        <ol className="grid grid-2 steps-grid">
          {m.items.map((item, i) => (
            <li key={item.title} className="card card-body">
              <span className="step-number" aria-hidden>
                {i + 1}
              </span>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Ai({ dict }: { dict: Dict }) {
  const a = dict.ai;
  return (
    <section id="ai" className="section" aria-labelledby="ai-title">
      <div className="container">
        <Head head={a} id="ai-title" />
        <ul className="grid grid-3">
          {a.items.map((item) => (
            <li key={item.title} className="card card-body">
              <IconTile name={item.icon} />
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </li>
          ))}
        </ul>
        <p className="alert">{a.note}</p>
      </div>
    </section>
  );
}

function Interface({ dict }: { dict: Dict }) {
  const u = dict.ui;
  return (
    <section id="interface" className="section section-alt" aria-labelledby="interface-title">
      <div className="container">
        <Head head={u} id="interface-title" />
        <div className="interface">
          <ul className="points">
            {u.points.map((p) => (
              <li key={p.title} className="point">
                <IconTile name={p.icon} />
                <div>
                  <h3 className="card-title">{p.title}</h3>
                  <p className="card-text">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="phone">
            <Shot
              locale={dict.locale}
              screen="mobile"
              kind="mobile"
              alt={u.mobileAlt}
              sizes="(min-width: 768px) 280px, 70vw"
            />
          </div>
        </div>
        <BrandDemo dict={u.demo} />
      </div>
    </section>
  );
}

function Install({ dict }: { dict: Dict }) {
  const s = dict.install;
  return (
    <section id="install" className="section" aria-labelledby="install-title">
      <div className="container">
        <Head head={s} id="install-title" />
        <div className="install">
          <ol className="install-steps">
            {s.steps.map((step, i) => (
              <li key={step}>
                <span className="step-number" aria-hidden>
                  {i + 1}
                </span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
          <div className="code-block">
            <div className="code-block-bar">
              <span>bash</span>
              <CopyButton text={s.code} label={s.copy} done={s.copied} />
            </div>
            <pre>
              <code>{s.code}</code>
            </pre>
          </div>
        </div>
        <p className="install-trial">{s.trial}</p>
        <a href={`${GITHUB_URL}/blob/main/docs/operations.md`} className="btn btn-link">
          <BookOpen aria-hidden />
          {s.docs}
        </a>
      </div>
    </section>
  );
}

function Faq({ dict }: { dict: Dict }) {
  return (
    <section id="faq" className="section section-alt" aria-labelledby="faq-title">
      <div className="container container-narrow">
        <h2 id="faq-title" className="display-2">
          {dict.faq.title}
        </h2>
        <div className="faq">
          {dict.faq.items.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta({ dict }: { dict: Dict }) {
  const c = dict.cta;
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta">
          <h2 id="cta-title" className="display-2">
            {c.title}
          </h2>
          <p className="lead">{c.text}</p>
          <div className="actions">
            <a href={GITHUB_URL} className="btn btn-primary btn-lg">
              <GithubMark />
              {c.github}
            </a>
            {CONTACT_EMAIL ? (
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-outline btn-lg">
                <Mail aria-hidden />
                {c.contact}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
