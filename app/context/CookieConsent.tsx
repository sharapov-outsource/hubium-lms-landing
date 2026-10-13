"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  ALL_DENIED,
  ALL_GRANTED,
  CONSENT_VERSION,
  ConsentState,
  STORAGE_KEY,
  readConsent,
  writeConsent,
} from "../lib/cookie-consent";

type CustomOverrides = Partial<Pick<ConsentState, "analytics">>;

type ConsentContextValue = {
  consent: ConsentState | null;
  bannerOpen: boolean;
  modalOpen: boolean;
  hydrated: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  saveCustom: (overrides: CustomOverrides) => void;
  openModal: () => void;
  closeModal: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

const BANNER_DELAY_MS = 700;

/** `enabled` is false while the site has no analytics counter: then nothing asks for consent. */
export function CookieConsentProvider({
  enabled,
  children,
}: {
  enabled: boolean;
  children: React.ReactNode;
}) {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Hydration: read stored consent, schedule banner if absent
  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    setHydrated(true);
    if (!stored && enabled) {
      const t = setTimeout(() => setBannerOpen(true), BANNER_DELAY_MS);
      return () => clearTimeout(t);
    }
  }, [enabled]);

  // Cross-tab sync
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY) return;
      const stored = readConsent();
      setConsent(stored);
      if (stored) {
        setBannerOpen(false);
        setModalOpen(false);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const persist = useCallback((state: Omit<ConsentState, "timestamp">) => {
    const full: ConsentState = { ...state, timestamp: Date.now() };
    writeConsent(full);
    setConsent(full);
    setBannerOpen(false);
    setModalOpen(false);
  }, []);

  const acceptAll = useCallback(() => persist(ALL_GRANTED), [persist]);
  const rejectAll = useCallback(() => persist(ALL_DENIED), [persist]);

  const saveCustom = useCallback(
    (overrides: CustomOverrides) => {
      persist({
        version: CONSENT_VERSION,
        necessary: true,
        analytics: overrides.analytics ?? false,
      });
    },
    [persist],
  );

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <ConsentContext.Provider
      value={{
        consent,
        bannerOpen,
        modalOpen,
        hydrated,
        acceptAll,
        rejectAll,
        saveCustom,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used within CookieConsentProvider");
  }
  return ctx;
}
