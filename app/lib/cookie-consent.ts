/**
 * Cookie consent — single source of truth for state shape, persistence,
 * and version policy. Bump CONSENT_VERSION whenever:
 *   - new processor / vendor added to policy
 *   - category gains a new purpose
 *   - legal text changes such that a regulator would call it new processing
 * On bump, all users see the banner again.
 *
 * Current scope: only Yandex Metrika analytics is collected on this site.
 * If functional cookies (theme, filters) or marketing pixels are added
 * later, add their fields back and bump the version.
 */

export const CONSENT_VERSION = "2026-10-13-v1";

export const STORAGE_KEY = "hb_cookie_consent";
export const COOKIE_KEY = "hb_cookie_consent";

export type ConsentCategory = "necessary" | "analytics";

export type ConsentState = {
  version: string;
  timestamp: number;
  necessary: true;
  analytics: boolean;
};

export const ALL_GRANTED: Omit<ConsentState, "timestamp"> = {
  version: CONSENT_VERSION,
  necessary: true,
  analytics: true,
};

export const ALL_DENIED: Omit<ConsentState, "timestamp"> = {
  version: CONSENT_VERSION,
  necessary: true,
  analytics: false,
};

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (
      !parsed ||
      typeof parsed !== "object" ||
      parsed.version !== CONSENT_VERSION ||
      parsed.necessary !== true ||
      typeof parsed.analytics !== "boolean"
    ) {
      return null;
    }
    return parsed as ConsentState;
  } catch {
    return null;
  }
}

export function writeConsent(state: ConsentState): void {
  if (typeof window === "undefined") return;
  const value = JSON.stringify(state);
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Safari private mode or quota — silently degrade
  }
  try {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `${COOKIE_KEY}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
  } catch {
    // Cookies disabled — silently degrade
  }
}

export function isCategoryAllowed(
  consent: ConsentState | null,
  category: ConsentCategory,
): boolean {
  if (category === "necessary") return true;
  if (!consent) return false;
  return consent[category] === true;
}
