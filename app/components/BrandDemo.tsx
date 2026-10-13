"use client";

import { BookOpen, House } from "lucide-react";
import { type CSSProperties, useId, useMemo, useState } from "react";
import type { Dict } from "../content/types";
import { contrastRatio, generateAccentPalette, hexToRgb } from "../lib/palette";

const PRESETS = ["#4f46e5", "#0e7490", "#15803d", "#f59e0b", "#e11d48", "#7c3aed"];

type Demo = Dict["ui"]["demo"];

/** Hubium's accent generator on a small mock of the interface, in both themes. */
export function BrandDemo({ dict }: { dict: Demo }) {
  const [hex, setHex] = useState(PRESETS[0]);
  const palette = useMemo(() => generateAccentPalette(hex), [hex]);
  const inputId = useId();

  const ratio = contrastRatio(hexToRgb(palette.light.accent), hexToRgb(palette.light.accentForeground));
  const note = palette.adjusted
    ? dict.adjusted.replace("{from}", hex).replace("{to}", palette.light.accent)
    : dict.kept;

  return (
    <div className="card demo">
      <div className="demo-controls">
        <h3 className="demo-title">{dict.title}</h3>
        <div className="demo-pick">
          <label htmlFor={inputId} className="label">
            {dict.pick}
          </label>
          <div className="demo-pick-row">
            <input
              id={inputId}
              type="color"
              value={hex}
              onChange={(e) => setHex(e.target.value)}
              className="demo-color"
            />
            <code className="demo-hex">{hex}</code>
          </div>
        </div>
        <div className="demo-presets" role="group" aria-label={dict.presets}>
          {PRESETS.map((p) => (
            <button
              key={p}
              type="button"
              className="demo-swatch"
              style={{ background: p }}
              aria-label={p}
              aria-pressed={p === hex}
              onClick={() => setHex(p)}
            />
          ))}
        </div>
        <p className="demo-note" aria-live="polite">
          {dict.contrast.replace("{ratio}", ratio.toFixed(1).replace(".", dict.decimal))}. {note}
        </p>
      </div>
      <div className="demo-panels">
        <Panel theme="light" title={dict.light} vars={palette.light} dict={dict} />
        <Panel theme="dark" title={dict.dark} vars={palette.dark} dict={dict} />
      </div>
    </div>
  );
}

function Panel({
  theme,
  title,
  vars,
  dict,
}: {
  theme: "light" | "dark";
  title: string;
  vars: { accent: string; accentForeground: string; accentSoft: string; ring: string };
  dict: Demo;
}) {
  const style = {
    "--accent": vars.accent,
    "--accent-foreground": vars.accentForeground,
    "--accent-soft": vars.accentSoft,
    "--ring": vars.ring,
  } as CSSProperties;
  return (
    <figure data-theme={theme} className="demo-panel" style={style}>
      <figcaption className="demo-panel-title">{title}</figcaption>
      <div className="demo-mock">
        <div className="demo-side" aria-hidden>
          <span className="demo-nav">
            <House />
            Hubium
          </span>
          <span className="demo-nav active">
            <BookOpen />
            {dict.nav}
          </span>
        </div>
        <div className="demo-main">
          <div className="demo-row">
            <span className="btn btn-primary btn-sm" aria-hidden>
              {dict.button}
            </span>
            <span className="badge badge-accent">{dict.badge}</span>
            <span className="demo-link">{dict.link}</span>
          </div>
          <div className="demo-progress">
            <span>{dict.progress}</span>
            <span className="progress" aria-hidden>
              <span style={{ width: "62%" }} />
            </span>
          </div>
          <label className="demo-check">
            <input type="checkbox" defaultChecked tabIndex={-1} />
            {dict.checkbox}
          </label>
        </div>
      </div>
    </figure>
  );
}
