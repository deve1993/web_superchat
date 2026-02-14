export type ConsentCategories = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const CONSENT_COOKIE = "cookie_consent";
const CONSENT_DURATION_DAYS = 365;

export function getConsent(): ConsentCategories | null {
  if (typeof document === "undefined") return null;

  const cookie = document.cookie
    .split(";")
    .find((c) => c.trim().startsWith(`${CONSENT_COOKIE}=`));

  if (!cookie) return null;

  try {
    return JSON.parse(decodeURIComponent(cookie.split("=")[1]));
  } catch {
    return null;
  }
}

export function setConsent(consent: ConsentCategories): void {
  const expires = new Date(
    Date.now() + CONSENT_DURATION_DAYS * 24 * 60 * 60 * 1000,
  );

  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(
    JSON.stringify(consent),
  )};expires=${expires.toUTCString()};path=/;SameSite=Lax`;

  window.dispatchEvent(
    new CustomEvent("consent-updated", { detail: consent }),
  );
}

export function hasConsent(): boolean {
  return getConsent() !== null;
}
