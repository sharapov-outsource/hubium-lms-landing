import { ru } from "../content/ru";
import { ogSize, renderOg } from "../lib/og";

export const alt = ru.meta.ogAlt;
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOg(ru);
}
