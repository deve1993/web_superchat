"use client";

import { useActionState, useRef, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUp } from "lucide-react";
import { Logo } from "../ui/logo";
import { MotionWrapper } from "../ui/motion-wrapper";
import {
  submitNewsletter,
  type NewsletterFormState,
} from "@/app/actions/newsletter";

const initialState: NewsletterFormState = { success: false, message: "" };

export function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const navbarT = useTranslations("navbar");
  const [state, formAction, isPending] = useActionState(
    submitNewsletter,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);
  const quickLinks = [
    { label: t("links.home"), href: "#" },
    { label: t("links.features"), href: "#features" },
    { label: t("links.modules"), href: "#modules" },
    { label: navbarT("useCases"), href: "#use-cases" },
    { label: t("links.contact"), href: "#contatti" },
  ];

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <footer className="relative border-t border-[rgba(79,96,250,0.1)] bg-[#06051E]/85 px-6 py-16">
      <MotionWrapper className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Col 1: Logo + Description */}
          <div>
            <Link href="/">
              <Logo className="text-2xl" />
            </Link>
            <p className="mt-6 max-w-[320px] text-sm leading-relaxed text-[#73799B]">
              {t("description")}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center text-sm text-[#73799B] transition-colors hover:text-[#4F60FA]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Newsletter + Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              {t("newsletter")}
            </h3>
            <form
              ref={formRef}
              action={formAction}
              className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:rounded-full sm:bg-[#1D217B] sm:p-1.5 sm:gap-0"
            >
              <input type="hidden" name="locale" value={locale} />
              <input
                type="email"
                name="email"
                required
                placeholder={t("newsletterPlaceholder")}
                className="flex-1 rounded-full bg-[#1D217B] px-5 py-3 text-sm text-white placeholder-[#73799B] outline-none sm:rounded-none sm:bg-transparent"
              />
              <button
                type="submit"
                disabled={isPending}
                className="btn-glow w-full rounded-full bg-[#DBE3FF] px-8 py-3 text-sm font-semibold text-[#4F60FA] transition-all hover:bg-white disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto"
              >
                {isPending ? t("newsletterSubmitting") : t("newsletterSubmit")}
              </button>
            </form>
            {state.message && (
              <p
                role="alert"
                className={`mt-3 text-sm font-medium ${
                  state.success ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {state.message}
              </p>
            )}


          </div>
        </div>

        <div className="mt-16 border-t border-[rgba(79,96,250,0.1)] pt-8">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 md:justify-start">
            <Link href="/privacy" className="inline-flex min-h-[44px] items-center text-sm text-[#73799B] transition-colors hover:text-[#4F60FA]">
              {t("links.privacy")}
            </Link>
            <Link href="/terms" className="inline-flex min-h-[44px] items-center text-sm text-[#73799B] transition-colors hover:text-[#4F60FA]">
              {t("links.terms")}
            </Link>
            <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center text-sm text-[#73799B] transition-colors hover:text-[#4F60FA]">
              {t("links.cookies")}
            </Link>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-[#73799B]">
              {t("copyright", { year: new Date().getFullYear() })}
            </p>
            <p className="text-sm text-[#73799B]">
              made with{" "}
              <span className="text-white">&#x1F90D;</span>{" "}
              <a
                href="https://pixarts.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-[#4F60FA]"
                style={{ fontFamily: "var(--font-megrim)" }}
              >
                pixart
              </a>
            </p>
            <a href="#" className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-white hover:text-[#4F60FA]">
              Back to top <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </MotionWrapper>
    </footer>
  );
}
