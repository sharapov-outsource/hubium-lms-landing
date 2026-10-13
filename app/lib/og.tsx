import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { Dict } from "../content/types";

export const ogSize = { width: 1200, height: 630 };

/**
 * Downloads a Google Font cut to the characters in `text`; Satori needs the font bytes to draw
 * Cyrillic. Returns undefined when offline, and the image falls back to Satori's default face.
 */
async function loadGoogleFont(family: string, weight: number, text: string) {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(text)}&display=swap`;
    const css = await (await fetch(url)).text();
    const src = css.match(/src: url\((.+?)\) format/)?.[1];
    if (!src) return undefined;
    return await (await fetch(src)).arrayBuffer();
  } catch {
    return undefined;
  }
}

// Colours from the design system's light theme (tokens.json): background, foreground,
// muted-foreground, accent, accent-soft.
const C = { bg: "#ffffff", ink: "#1b1d22", muted: "#565c68", accent: "#4f46e5", soft: "#eef1fe" };

/** The share image: name and headline on the left, the design system's cover motif on the right. */
export async function renderOg(dict: Dict) {
  const icon = await readFile(join(process.cwd(), "public/brand/icon-192.png"));
  const iconSrc = `data:image/png;base64,${icon.toString("base64")}`;
  const text = `Hubium LMS${dict.meta.ogTitle}${dict.meta.ogText}`;
  const [semibold, regular] = await Promise.all([
    loadGoogleFont("Inter", 600, text),
    loadGoogleFont("Inter", 400, text),
  ]);
  const fonts = [
    semibold && { name: "Inter", data: semibold, weight: 600 as const, style: "normal" as const },
    regular && { name: "Inter", data: regular, weight: 400 as const, style: "normal" as const },
  ].filter((f) => !!f);

  // A month of calendar days cut from the tint, one day selected — as on the system's cover.
  const tiles = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 6; c++) {
      if (r === 0 && c < 2) continue;
      tiles.push({ x: 16 + c * 40, y: 16 + r * 40, on: r === 1 && c === 3 });
    }
  }

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: C.bg, fontFamily: "Inter", position: "relative" }}>
      <div style={{ position: "absolute", left: 790, top: -20, width: 150, height: 610, background: C.accent, borderRadius: 10 }} />
      <div style={{ position: "absolute", left: 956, top: 40, width: 280, height: 192, background: C.soft, borderRadius: 10, display: "flex" }}>
        {tiles.map((t) => (
          <div
            key={`${t.x}-${t.y}`}
            style={{ position: "absolute", left: t.x, top: t.y, width: 32, height: 32, borderRadius: 8, background: t.on ? C.accent : C.bg }}
          />
        ))}
      </div>
      <div style={{ position: "absolute", left: 956, top: 248, width: 280, height: 342, background: C.ink, borderRadius: 10 }} />
      <div style={{ display: "flex", flexDirection: "column", padding: "72px 0 64px 72px", width: 700, height: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={iconSrc} width={64} height={64} alt="" style={{ borderRadius: 14 }} />
          <div style={{ fontSize: 40, fontWeight: 600, color: C.ink, letterSpacing: "-0.025em" }}>Hubium LMS</div>
        </div>
        <div style={{ display: "flex", flex: 1 }} />
        <div style={{ fontSize: 58, fontWeight: 600, color: C.ink, lineHeight: 1.1, letterSpacing: "-0.025em", whiteSpace: "pre-line" }}>
          {dict.meta.ogTitle}
        </div>
        <div style={{ fontSize: 26, fontWeight: 400, color: C.muted, marginTop: 20 }}>{dict.meta.ogText}</div>
      </div>
    </div>,
    { ...ogSize, fonts: fonts.length ? fonts : undefined },
  );
}
