"use client";

import { useState, useEffect, useCallback } from "react";
import { Shield, Settings } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  getConsent,
  setConsent,
  type ConsentCategories,
} from "@/lib/consent";

function Toggle({
  checked,
  onChange,
  disabled,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4F60FA]/40 disabled:cursor-not-allowed disabled:opacity-60 ${
        checked ? "bg-[#4F60FA]" : "bg-[#73799B]/30"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export function CookieConsent() {
  const t = useTranslations("cookieConsent");
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [prefs, setPrefs] = useState<ConsentCategories>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = getConsent();
    if (!consent) {
      /* small delay so banner doesn't flash on page load */
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = useCallback(() => {
    setConsent({ necessary: true, analytics: true, marketing: true });
    setVisible(false);
  }, []);

  const reject = useCallback(() => {
    setConsent({ necessary: true, analytics: false, marketing: false });
    setVisible(false);
  }, []);

  const save = useCallback(() => {
    setConsent({ ...prefs, necessary: true });
    setVisible(false);
  }, [prefs]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[rgba(79,96,250,0.15)] bg-[#06051E]/95 backdrop-blur-xl"
      role="dialog"
      aria-label={t("title")}
    >
      <div className="mx-auto max-w-[1280px] px-6 py-6">
        {!showSettings && (
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3 sm:items-center">
              <Shield size={20} className="mt-0.5 shrink-0 text-[#4F60FA] sm:mt-0" />
              <div>
                <h3 className="text-sm font-semibold text-white">
                  {t("title")}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#73799B]">
                  {t("description")}{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-[#4F60FA] underline underline-offset-2 hover:text-[#DBE3FF]"
                  >
                    {t("learnMore")}
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <button
                onClick={() => setShowSettings(true)}
                className="text-sm text-[#4F60FA] underline underline-offset-2 hover:text-[#DBE3FF]"
              >
                {t("customize")}
              </button>
              <button
                onClick={reject}
                className="rounded-full border border-[#73799B]/30 px-5 py-2 text-sm text-[#73799B] transition-colors hover:border-[#73799B] hover:text-white"
              >
                {t("rejectAll")}
              </button>
              <button
                onClick={accept}
                className="rounded-full bg-[#4F60FA] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#5a6dff]"
              >
                {t("acceptAll")}
              </button>
            </div>
          </div>
        )}

        {showSettings && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Settings size={20} className="shrink-0 text-[#4F60FA]" />
              <h3 className="text-sm font-semibold text-white">
                {t("settingsTitle")}
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4 rounded-xl border border-[rgba(79,96,250,0.1)] bg-[#0a0a2a]/60 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-white">
                    {t("necessary")}
                  </p>
                  <p className="mt-0.5 text-xs text-[#73799B]">
                    {t("necessaryDescription")}
                  </p>
                </div>
                <Toggle checked disabled onChange={() => {}} />
              </div>

              <div className="flex items-center justify-between gap-4 rounded-xl border border-[rgba(79,96,250,0.1)] bg-[#0a0a2a]/60 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-white">
                    {t("analytics")}
                  </p>
                  <p className="mt-0.5 text-xs text-[#73799B]">
                    {t("analyticsDescription")}
                  </p>
                </div>
                <Toggle
                  checked={prefs.analytics}
                  onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
                />
              </div>

              <div className="flex items-center justify-between gap-4 rounded-xl border border-[rgba(79,96,250,0.1)] bg-[#0a0a2a]/60 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-white">
                    {t("marketing")}
                  </p>
                  <p className="mt-0.5 text-xs text-[#73799B]">
                    {t("marketingDescription")}
                  </p>
                </div>
                <Toggle
                  checked={prefs.marketing}
                  onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowSettings(false)}
                className="text-sm text-[#73799B] hover:text-white"
              >
                ← {t("back")}
              </button>
              <div className="flex-1" />
              <button
                onClick={reject}
                className="rounded-full border border-[#73799B]/30 px-5 py-2 text-sm text-[#73799B] transition-colors hover:border-[#73799B] hover:text-white"
              >
                {t("rejectAll")}
              </button>
              <button
                onClick={save}
                className="rounded-full bg-[#4F60FA] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#5a6dff]"
              >
                {t("save")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
