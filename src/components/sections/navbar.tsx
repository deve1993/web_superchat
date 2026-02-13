"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Menu, X, Globe, ChevronDown, Check } from "lucide-react";
import { Logo } from "../ui/logo";
import { motion, AnimatePresence } from "framer-motion";

const localeLabels: Record<string, string> = {
  it: "Italiano",
  en: "English",
  cs: "Čeština",
};

const localeFlags: Record<string, string> = {
  it: "🇮🇹",
  en: "🇬🇧",
  cs: "🇨🇿",
};

export function Navbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t("home"), href: "#" },
    { label: t("features"), href: "#features" },
    { label: t("modules"), href: "#modules" },
    { label: t("useCases"), href: "#use-cases" },
    { label: t("contact"), href: "#contatti" },
  ];

  function switchLocale(newLocale: (typeof routing.locales)[number]) {
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    if (langOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [langOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`flex w-full max-w-[900px] items-center justify-between rounded-full border px-6 py-2.5 transition-all duration-500 ${
          scrolled
            ? "border-[rgba(79,96,250,0.15)] bg-[#06051E]/70 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(79,96,250,0.08)] backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-[#06051E]/30 backdrop-blur-sm"
        }`}
      >
        <Link href="/" className="shrink-0">
          <Logo className="text-[22px]" />
        </Link>

        <ul className="hidden items-center gap-1 min-[844px]:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="rounded-full px-4 py-1.5 text-[13px] font-medium text-[#73799B] transition-all hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Language Dropdown — Desktop */}
          <div ref={langRef} className="relative hidden min-[844px]:block">
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium transition-all ${
                langOpen
                  ? "border-[#4F60FA]/40 bg-[#4F60FA]/10 text-white"
                  : "border-[rgba(79,96,250,0.15)] text-[#73799B] hover:border-[rgba(79,96,250,0.3)] hover:text-white"
              }`}
            >
              <Globe size={13} className="shrink-0" />
              <span>{locale.toUpperCase()}</span>
              <ChevronDown
                size={12}
                className={`shrink-0 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 mt-2 w-[160px] overflow-hidden rounded-xl border border-[rgba(79,96,250,0.15)] bg-[#06051E]/95 shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_0_1px_rgba(79,96,250,0.06)] backdrop-blur-xl"
                >
                  {routing.locales.map((availableLocale) => {
                    const isActive = locale === availableLocale;
                    return (
                      <button
                        key={availableLocale}
                        type="button"
                        onClick={() => switchLocale(availableLocale)}
                        className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-[13px] transition-all ${
                          isActive
                            ? "bg-[#4F60FA]/10 text-white"
                            : "text-[#73799B] hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span className="text-base leading-none">{localeFlags[availableLocale]}</span>
                        <span className="flex-1 font-medium">{localeLabels[availableLocale]}</span>
                        {isActive && <Check size={14} className="shrink-0 text-[#4F60FA]" />}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#contatti"
            className="hidden rounded-full bg-[#DBE3FF] px-5 py-2 text-[13px] font-semibold text-[#4F60FA] transition-all hover:bg-white hover:shadow-[0_0_16px_rgba(79,96,250,0.3)] min-[844px]:inline-block"
          >
            {t("cta")}
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t("menuClose") : t("menuOpen")}
            className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-all hover:bg-white/10 min-[844px]:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-4 right-4 mt-2 overflow-hidden rounded-2xl border border-[rgba(79,96,250,0.15)] bg-[#06051E]/80 shadow-[0_16px_48px_rgba(0,0,0,0.5)] backdrop-blur-xl backdrop-saturate-150 min-[844px]:hidden"
        >
          <ul className="flex flex-col gap-1 p-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-[#73799B] transition-all hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Language Switcher — Mobile */}
            <li className="mx-2 mt-1 border-t border-[rgba(79,96,250,0.1)] pt-2">
              <div className="flex items-center gap-1.5 px-2 pb-2">
                <Globe size={13} className="text-[#73799B]" />
                <span className="text-xs font-medium uppercase tracking-wider text-[#73799B]">Language</span>
              </div>
              <div className="flex gap-1.5">
                {routing.locales.map((availableLocale) => {
                  const isActive = locale === availableLocale;
                  return (
                    <button
                      key={availableLocale}
                      type="button"
                      onClick={() => switchLocale(availableLocale)}
                      className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-[13px] font-medium transition-all ${
                        isActive
                          ? "border border-[#4F60FA]/40 bg-[#4F60FA]/10 text-white"
                          : "border border-transparent text-[#73799B] hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span className="text-sm leading-none">{localeFlags[availableLocale]}</span>
                      <span>{availableLocale.toUpperCase()}</span>
                    </button>
                  );
                })}
              </div>
            </li>

            <li className="mt-1 px-2 pb-1">
              <a
                href="#contatti"
                className="block rounded-full bg-[#DBE3FF] py-2.5 text-center text-sm font-semibold text-[#4F60FA] transition-all hover:bg-white"
                onClick={() => setMobileOpen(false)}
              >
                {t("cta")}
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
