import type { ReactNode } from "react";
import { Shell } from "../components/Shell";
import { ru } from "../content/ru";
import { buildMetadata } from "../lib/metadata";
import "../globals.css";

export const metadata = buildMetadata(ru);
export { viewport } from "../lib/metadata";

export default function RussianLayout({ children }: { children: ReactNode }) {
  return <Shell dict={ru}>{children}</Shell>;
}
