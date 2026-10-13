import {
  Accessibility,
  BookOpen,
  ClipboardCheck,
  FolderInput,
  Languages,
  LayoutGrid,
  ListChecks,
  Lock,
  MessageSquare,
  Plug,
  Shield,
  Smartphone,
  Sparkles,
  Sun,
  Users,
  Video,
} from "lucide-react";
import type { IconName } from "../content/types";

const icons = {
  Accessibility,
  BookOpen,
  ClipboardCheck,
  FolderInput,
  Languages,
  LayoutGrid,
  ListChecks,
  Lock,
  MessageSquare,
  Plug,
  Shield,
  Smartphone,
  Sparkles,
  Sun,
  Users,
  Video,
} satisfies Record<IconName, unknown>;

/** A feature icon on an accent-soft tile, as the design system draws icons beside headings. */
export function IconTile({ name }: { name: IconName }) {
  const Icon = icons[name];
  return (
    <span className="icon-tile" aria-hidden>
      <Icon />
    </span>
  );
}
