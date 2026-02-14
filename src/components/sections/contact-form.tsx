"use client";

import { useActionState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Send, ChevronDown } from "lucide-react";
import { SectionSubtitle } from "../ui/section-subtitle";
import { MotionWrapper } from "../ui/motion-wrapper";
import { useTranslations, useLocale } from "next-intl";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/actions/contact";

declare global {
  interface Window {
    turnstile: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          theme?: "light" | "dark" | "auto";
          callback?: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
          size?: "normal" | "compact";
        },
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

const initialState: ContactFormState = { success: false, message: "" };

const inputClasses =
  "w-full rounded-xl border border-[rgba(79,96,250,0.15)] bg-[#0a0a2a] px-4 py-3 text-sm text-white placeholder:text-[#73799B] transition-all focus:border-[#4F60FA] focus:outline-none focus:ring-2 focus:ring-[#4F60FA]/40";

export function ContactForm() {
  const locale = useLocale();
  const t = useTranslations("contact");
  const pricingT = useTranslations("pricing");
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileTokenRef = useRef("");
  const turnstileWidgetId = useRef("");
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const packages = [
    { value: "", label: t("form.packageDefault") },
    { value: "Avvio", label: pricingT("plans.starter.name") },
    { value: "Pro", label: pricingT("plans.pro.name") },
    { value: "Enterprise", label: pricingT("plans.enterprise.name") },
  ];

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.reset(turnstileWidgetId.current);
        turnstileTokenRef.current = "";
      }
    }
  }, [state.success]);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !turnstileContainerRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad";
    script.async = true;

    window.onTurnstileLoad = () => {
      if (turnstileContainerRef.current) {
        turnstileWidgetId.current = window.turnstile.render(
          turnstileContainerRef.current,
          {
            sitekey: TURNSTILE_SITE_KEY,
            theme: "dark",
            callback: (token: string) => {
              turnstileTokenRef.current = token;
            },
            "expired-callback": () => {
              turnstileTokenRef.current = "";
            },
            "error-callback": () => {
              turnstileTokenRef.current = "";
            },
          },
        );
      }
    };

    document.head.appendChild(script);

    return () => {
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetId.current);
      }
      script.remove();
      delete window.onTurnstileLoad;
    };
  }, []);

  const handleSubmit = useCallback(
    async (formData: FormData) => {
      if (TURNSTILE_SITE_KEY && turnstileTokenRef.current) {
        formData.set("turnstileToken", turnstileTokenRef.current);
      }
      return formAction(formData);
    },
    [formAction],
  );

  return (
    <section id="contatti" className="relative overflow-hidden px-6 py-24">
      <Image
        src="/images/bg-contact-new.webp"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-20"
        loading="lazy"
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <MotionWrapper className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <SectionSubtitle text={t("subtitle")} />
            <h2 className="mt-6 text-3xl font-bold leading-snug text-white md:text-4xl lg:text-5xl lg:leading-tight">
              {t("title")}
              <br />
              {t("titleLine2")}
            </h2>
            <p className="mt-6 max-w-[480px] text-base leading-relaxed text-[#73799B]">
              {t("description")}
            </p>
            <p className="mt-4 max-w-[480px] text-sm leading-relaxed text-[#73799B]/70">
              {t("formIntro")}
            </p>
          </MotionWrapper>

          <MotionWrapper delay={0.2} className="flex justify-center lg:justify-end">
            <form
              ref={formRef}
              action={handleSubmit}
              className="w-full max-w-[560px] overflow-hidden rounded-3xl border border-[#4F60FA] px-5 py-8 shadow-[0_0_40px_rgba(79,96,250,0.15)] sm:px-8 sm:py-10 md:px-10"
              style={{
                background: `radial-gradient(circle, rgba(200,210,230,0.06) 2px, transparent 2px), #050A29`,
                backgroundSize: "24px 24px",
              }}
            >
            <input type="hidden" name="locale" value={locale} />
            <input
              type="text"
              name="website"
              autoComplete="off"
              tabIndex={-1}
              aria-hidden="true"
              className="absolute h-0 w-0 overflow-hidden opacity-0"
            />

            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-[#DBE3FF]"
                  >
                    {t("form.name")} <span className="text-red-400">{t("form.required")}</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    placeholder={t("form.namePlaceholder")}
                    aria-describedby={!state.success && state.message ? "form-feedback" : undefined}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-[#DBE3FF]"
                  >
                    {t("form.email")} <span className="text-red-400">{t("form.required")}</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t("form.emailPlaceholder")}
                    aria-describedby={!state.success && state.message ? "form-feedback" : undefined}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-[#DBE3FF]"
                  >
                    {t("form.phone")}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t("form.phonePlaceholder")}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-1.5 block text-sm font-medium text-[#DBE3FF]"
                  >
                    {t("form.company")}
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder={t("form.companyPlaceholder")}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="website_url"
                    className="mb-1.5 block text-sm font-medium text-[#DBE3FF]"
                  >
                    {t("form.website")}
                  </label>
                  <input
                    id="website_url"
                    name="website_url"
                    type="url"
                    placeholder={t("form.websitePlaceholder")}
                    className={inputClasses}
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="pacchetto"
                    className="mb-1.5 block text-sm font-medium text-[#DBE3FF]"
                  >
                    {t("form.package")}
                  </label>
                  <select
                    id="pacchetto"
                    name="pacchetto"
                    className={inputClasses + " appearance-none pr-10"}
                  >
                    {packages.map((pkg) => (
                      <option key={pkg.value} value={pkg.value}>
                        {pkg.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-4 top-[38px] text-[#73799B]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-[#DBE3FF]"
                >
                  {t("form.message")} <span className="text-red-400">{t("form.required")}</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={4}
                  placeholder={t("form.messagePlaceholder")}
                  aria-describedby={!state.success && state.message ? "form-feedback" : undefined}
                  className={inputClasses + " resize-none"}
                />
              </div>

              <div className="flex items-start gap-3">
                <div className="relative mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    className="h-5 w-5 cursor-pointer rounded border-[rgba(79,96,250,0.3)] bg-[#0a0a2a] text-[#4F60FA] accent-[#4F60FA] focus:ring-2 focus:ring-[#4F60FA]/40"
                  />
                </div>
                <label htmlFor="privacy" className="cursor-pointer text-xs leading-relaxed text-[#73799B]">
                  {t("form.privacy")} {" "}
                  <a
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4F60FA] underline underline-offset-2 hover:text-[#DBE3FF]"
                  >
                    {t("form.privacyLink")}
                  </a>
                  . <span className="text-red-400">{t("form.required")}</span>
                </label>
              </div>
            </div>

            {state.message && (
              <div
                id="form-feedback"
                role="alert"
                className={`mt-5 rounded-xl px-4 py-3 text-sm font-medium ${
                  state.success
                    ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                    : "border border-red-500/30 bg-red-500/10 text-red-300"
                }`}
              >
                {state.message}
              </div>
            )}

            {TURNSTILE_SITE_KEY && (
              <div ref={turnstileContainerRef} className="mt-4 flex justify-center" />
            )}

            <button
              type="submit"
              disabled={isPending}
              className="btn-glow mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#DBE3FF] py-3 text-sm font-semibold text-[#4F60FA] transition-all hover:bg-white disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-[#4F60FA] border-t-transparent" />
              ) : (
                <Send size={16} />
              )}
              {isPending ? t("form.submitting") : t("form.submit")}
            </button>

            {TURNSTILE_SITE_KEY && (
              <p className="mt-4 text-center text-[10px] leading-relaxed text-[#73799B]/60">
                {t("form.turnstileProtected")}{" "}
                <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#73799B]">{t("form.turnstilePrivacy")}</a>
              </p>
            )}
          </form>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
