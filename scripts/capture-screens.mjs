// Captures the Hubium LMS screenshots in public/screens from a running Hubium dev server
// seeded with `pnpm db:seed --profile demo`. Playwright comes from the Hubium checkout's e2e
// package, so this repository does not depend on it.
//
//   HUBIUM_DIR=../obrportal HUBIUM_URL=http://localhost:3000 node scripts/capture-screens.mjs
//
// Writes public/screens/<locale>-<screen>-<theme>.webp. The demo accounts are the ones the
// Hubium seed creates (see its README). A development database that e2e runs have filled keeps
// their leftovers (names with a random "mv…" suffix, "E2E" courses, the same activity many times
// over); tidy() takes those rows and grade columns out of the page before each shot.
import { mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const hubium = resolve(root, process.env.HUBIUM_DIR ?? '../obrportal');
const base = process.env.HUBIUM_URL ?? 'http://localhost:3000';
const { chromium } = createRequire(join(hubium, 'e2e/package.json'))('@playwright/test');
const sharp = createRequire(join(root, 'package.json'))('sharp');

const ACCOUNTS = {
  student: ['student1', 'Demo12345!'],
  teacher: ['teacher', 'Demo12345!'],
  admin: [process.env.SEED_ADMIN_EMAIL ?? 'admin@hubium.local', process.env.SEED_ADMIN_PASSWORD ?? 'Admin12345!'],
};
const out = join(root, 'public/screens');
mkdirSync(out, { recursive: true });

async function login(page, who) {
  const [name, password] = ACCOUNTS[who];
  await page.goto(`${base}/login`);
  await page.locator('#login').fill(name);
  await page.locator('#password').fill(password);
  await page.locator('form button[type=submit]').click();
  await page.waitForURL(/\/dashboard/);
}

async function settle(page) {
  await page.waitForLoadState('networkidle').catch(() => {});
  // The Next.js dev indicator is not part of the product.
  await page.addStyleTag({ content: 'nextjs-portal{display:none!important}' });
  await page.waitForTimeout(400);
}

/** Removes e2e leftovers: list rows and grade columns with test-run names, and repeated rows. */
async function tidy(page) {
  await page.evaluate(() => {
    const junk = /\bmv\d[0-9a-z]{4,}|\bE2E\b/;
    const main = document.querySelector('main');
    if (!main) return;
    const text = (el) => el.textContent.replace(/\s+/g, ' ').trim();
    // Containers that cleanup empties go too, with the heading right before them.
    const emptied = new Set();
    const drop = (el) => {
      const parent = el.parentElement;
      el.remove();
      if (parent && !text(parent)) emptied.add(parent);
    };
    for (const table of main.querySelectorAll('table')) {
      const head = table.querySelector('thead tr');
      if (!head) continue;
      const seen = new Set();
      const columns = [];
      [...head.children].forEach((th, i) => {
        const key = text(th);
        if (i > 0 && (junk.test(key) || seen.has(key))) columns.push(i);
        seen.add(key);
      });
      for (const tr of table.querySelectorAll('tr')) {
        const cells = [...tr.children];
        for (const i of columns) cells[i]?.remove();
      }
    }
    for (const list of main.querySelectorAll('ul, ol')) {
      const seen = new Set();
      for (const li of [...list.children]) {
        const key = text(li);
        if (junk.test(key) || seen.has(key)) drop(li);
        seen.add(key);
      }
    }
    for (const el of main.querySelectorAll('article, [class*="card"], a[href^="/course/"]')) {
      if (el.isConnected && junk.test(text(el)) && el.querySelectorAll('*').length < 80) drop(el);
    }
    for (const box of emptied) {
      if (!box.isConnected || text(box)) continue;
      const prev = box.previousElementSibling;
      if (prev && /^H[1-6]$/.test(prev.tagName)) prev.remove();
      box.remove();
    }
  });
}

async function save(page, name) {
  await settle(page);
  await tidy(page);
  const png = await page.screenshot({ type: 'png' });
  await sharp(png).webp({ quality: 88 }).toFile(join(out, `${name}.webp`));
  console.log('saved', name);
}

/** Uses Hubium's language menu, which stores the choice in the profile. */
async function switchLanguage(page, code) {
  await page.locator('header button:has(svg.lucide-languages)').click();
  await page.locator(`[role="menuitem"][lang="${code}"]`).click();
  await page.waitForFunction((c) => document.documentElement.lang === c, code);
}

async function firstCourse(page) {
  const href = await page.locator('main a[href^="/course/"]').first().getAttribute('href');
  return href.match(/^\/course\/[^/?#]+/)[0];
}

const browser = await chromium.launch();
for (const locale of ['ru', 'en']) {
  for (const theme of ['light', 'dark']) {
    const context = async (opts) => {
      const ctx = await browser.newContext({ colorScheme: theme, reducedMotion: 'reduce', locale, ...opts });
      await ctx.addCookies([{ name: 'hubium-locale', value: locale, url: base }]);
      return ctx;
    };
    const desktop = { viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2 };

    const student = await context(desktop);
    let page = await student.newPage();
    await login(page, 'student');
    await save(page, `${locale}-dashboard-${theme}`);
    const course = await firstCourse(page);
    await page.goto(base + course);
    await save(page, `${locale}-course-${theme}`);
    await student.close();

    const teacher = await context(desktop);
    page = await teacher.newPage();
    await login(page, 'teacher');
    await page.goto(base + (await firstCourse(page)) + '/grades');
    await save(page, `${locale}-grades-${theme}`);
    await teacher.close();

    // A language stored in the administrator's profile wins over the cookie, so switch it with
    // the language menu for the shot and switch it back afterwards.
    const admin = await context(desktop);
    page = await admin.newPage();
    await login(page, 'admin');
    const original = await page.evaluate(() => document.documentElement.lang);
    if (original !== locale) await switchLanguage(page, locale);
    await page.goto(`${base}/admin/settings/branding`);
    await save(page, `${locale}-admin-${theme}`);
    if (original !== locale) await switchLanguage(page, original);
    await admin.close();

    const phone = await context({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
    page = await phone.newPage();
    await login(page, 'student');
    await save(page, `${locale}-mobile-${theme}`);
    await phone.close();
  }
}
await browser.close();
