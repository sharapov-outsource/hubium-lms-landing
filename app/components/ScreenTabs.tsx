"use client";

import { type KeyboardEvent, type ReactNode, useRef, useState } from "react";

/** Tabs over pre-rendered panels, drawn like the design system's LinkTabs. */
export function ScreenTabs({
  label,
  tabs,
  panels,
}: {
  label: string;
  tabs: { key: string; label: string; text: string }[];
  panels: ReactNode[];
}) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: KeyboardEvent) {
    const last = tabs.length - 1;
    const next =
      e.key === "ArrowRight" ? (active === last ? 0 : active + 1)
      : e.key === "ArrowLeft" ? (active === 0 ? last : active - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }

  return (
    <div className="screens">
      <div role="tablist" aria-label={label} className="tabs" onKeyDown={onKeyDown}>
        {tabs.map((t, i) => (
          <button
            key={t.key}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`tab-${t.key}`}
            aria-selected={i === active}
            aria-controls={`panel-${t.key}`}
            tabIndex={i === active ? 0 : -1}
            className="tab"
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.key}
          role="tabpanel"
          id={`panel-${t.key}`}
          aria-labelledby={`tab-${t.key}`}
          hidden={i !== active}
          className="screens-panel"
        >
          <p className="screens-text">{t.text}</p>
          {panels[i]}
        </div>
      ))}
    </div>
  );
}
