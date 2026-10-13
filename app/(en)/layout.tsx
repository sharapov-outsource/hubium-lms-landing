import type { ReactNode } from "react";
import { Shell } from "../components/Shell";
import { en } from "../content/en";
import { buildMetadata } from "../lib/metadata";
import "../globals.css";

export const metadata = buildMetadata(en);
export { viewport } from "../lib/metadata";

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <Shell dict={en}>{children}</Shell>;
}
