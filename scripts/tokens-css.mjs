// Generates app/tokens.css from the Hubium design system's tokens.json.
// Run `npm run tokens` after replacing design-system/tokens.json with a newer export.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const tokens = JSON.parse(readFileSync(join(root, 'design-system/tokens.json'), 'utf8'));

const themes = tokens.color.themes.map((t) => t.id);
const [first, ...rest] = themes;
const name = (n) => `--${n.replace(/\./g, '\\.')}`;
const value = (v) => {
  const alias = /^\{(.+)\}$/.exec(v);
  return alias ? `var(--${alias[1]})` : v;
};
const themed = (t, theme) =>
  typeof t.value === 'string' ? (theme === first ? t.value : undefined) : t.value[theme];
const decls = (list, theme) =>
  list
    .map((t) => [t.name, themed(t, theme)])
    .filter(([, v]) => v !== undefined)
    .map(([n, v]) => `  ${name(n)}: ${value(v)};`)
    .join('\n');

const themedTokens = [...tokens.color.tokens, ...(tokens.shadow?.tokens ?? [])];
const plainFamilies = Object.entries(tokens).filter(
  ([k, v]) => !['color', 'type', 'shadow', 'meta'].includes(k) && v && Array.isArray(v.tokens),
);

let css = `/* Hubium design system — generated from design-system/tokens.json by scripts/tokens-css.mjs. Do not edit by hand. */\n\n`;
css += `:root,\n[data-theme="${first}"] {\n  color-scheme: ${first};\n${decls(themedTokens, first)}\n}\n`;
for (const theme of rest) {
  const block = decls(themedTokens.filter((t) => typeof t.value !== 'string'), theme);
  // The page follows the visitor's system theme; [data-theme] forces one for a block.
  css += `\n@media (prefers-color-scheme: ${theme}) {\n  :root:not([data-theme="${first}"]) {\n    color-scheme: ${theme};\n${block.replace(/^/gm, '  ')}\n  }\n}\n`;
  css += `\n[data-theme="${theme}"] {\n  color-scheme: ${theme};\n${block}\n}\n`;
}
css += `\n:root {\n`;
for (const [, family] of plainFamilies) css += `${decls(family.tokens, first)}\n`;
for (const [key, stack] of Object.entries(tokens.type.families)) css += `  --font-${key}: ${stack};\n`;
css += `}\n`;

writeFileSync(join(root, 'app/tokens.css'), css);
console.log(`app/tokens.css: ${tokens.color.tokens.length} colours × ${themes.length} themes`);
