"use client";

import { useActionState, useRef, useEffect } from "react";
import Image from "next/image";
import { Send, ChevronDown } from "lucide-react";
import { SectionSubtitle } from "../ui/section-subtitle";
import { MotionWrapper } from "../ui/motion-wrapper";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/actions/contact";

const initialState: ContactFormState = { success: false, message: "" };

const packages = [
  { value: "", label: "Seleziona (opzionale)" },
  { value: "Avvio", label: "Avvio" },
  { value: "Pro", label: "Pro" },
  { value: "Enterprise", label: "Enterprise" },
];

const inputClasses =
  "w-full rounded-xl border border-[rgba(79,96,250,0.15)] bg-[#0a0a2a] px-4 py-3 text-sm text-white placeholder:text-[#73799B] transition-all focus:border-[#4F60FA] focus:outline-none focus:ring-2 focus:ring-[#4F60FA]/40";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <section id="contatti" className="relative overflow-hidden px-6 py-24">
      <Image
        src="/images/bg-contact.webp"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-20"
        loading="lazy"
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <MotionWrapper className="flex flex-col items-center text-center">
          <SectionSubtitle text="Contattaci" />
          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Richiedi una Demo
          </h2>
          <p className="mt-4 max-w-[520px] text-base text-[#73799B]">
            Compila il form e il nostro team ti ricontatter&agrave; per
            mostrarti SuperChat in azione sul tuo Odoo
          </p>
        </MotionWrapper>

        <MotionWrapper delay={0.2} className="mt-16 flex justify-center">
          <form
            ref={formRef}
            action={formAction}
            className="card-hover w-full max-w-[560px] overflow-hidden rounded-3xl border border-[#4F60FA] px-5 py-8 shadow-[0_0_40px_rgba(79,96,250,0.15)] sm:px-8 sm:py-10 md:px-10"
            style={{
              background: `radial-gradient(circle, rgba(200,210,230,0.06) 2px, transparent 2px), #050A29`,
              backgroundSize: "24px 24px",
            }}
          >
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
                    Nome <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    placeholder="Il tuo nome"
                    aria-describedby={!state.success && state.message ? "form-feedback" : undefined}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-[#DBE3FF]"
                  >
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="nome@azienda.com"
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
                    Telefono
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+39 333 123 4567"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-1.5 block text-sm font-medium text-[#DBE3FF]"
                  >
                    Azienda
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nome azienda"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="pacchetto"
                  className="mb-1.5 block text-sm font-medium text-[#DBE3FF]"
                >
                  Pacchetto di interesse
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

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-[#DBE3FF]"
                >
                  Messaggio <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={4}
                  placeholder="Raccontaci il tuo progetto o cosa vorresti approfondire..."
                  aria-describedby={!state.success && state.message ? "form-feedback" : undefined}
                  className={inputClasses + " resize-none"}
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-[rgba(79,96,250,0.3)] bg-[#0a0a2a] text-[#4F60FA] accent-[#4F60FA] focus:ring-2 focus:ring-[#4F60FA]/40"
                />
                <label htmlFor="privacy" className="text-xs leading-relaxed text-[#73799B]">
                  Acconsento al trattamento dei miei dati personali ai sensi del{" "}
                  <a
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4F60FA] underline underline-offset-2 hover:text-[#DBE3FF]"
                  >
                    GDPR (Reg. UE 2016/679)
                  </a>
                  . <span className="text-red-400">*</span>
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
              {isPending ? "Invio in corso..." : "Invia Richiesta"}
            </button>
          </form>
        </MotionWrapper>
      </div>
    </section>
  );
}
