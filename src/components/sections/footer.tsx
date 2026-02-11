import Link from "next/link";
import { Linkedin, Github, Globe, ArrowUp } from "lucide-react";
import { Logo } from "../ui/logo";
import { MotionWrapper } from "../ui/motion-wrapper";

export function Footer() {
  return (
    <footer className="relative border-t border-[rgba(79,96,250,0.1)] bg-[#06051E]/85 px-6 py-16">
      <MotionWrapper className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div>
              <Link href="/">
                <Logo className="text-2xl" />
              </Link>
              <p className="mt-6 max-w-[400px] text-base leading-relaxed text-[#73799B]">
                La piattaforma di messaggistica multi-canale completamente integrata in Odoo 18. Sviluppato da Persevida es.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1D217B]/30 text-[#4F60FA]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <span className="text-[#73799B]">info@fl1.cz</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1D217B]/30 text-[#4F60FA]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <span className="text-[#73799B]">fl1.cz</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1D217B]/30 text-[#4F60FA]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <span className="text-[#73799B]">Praga, Repubblica Ceca</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:items-end">
            <div className="w-full max-w-[500px]">
              <h3 className="mb-6 text-xl font-semibold text-white">Resta aggiornato su SuperChat</h3>
              <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:rounded-full sm:bg-[#1D217B] sm:p-1.5 sm:gap-0">
                <input
                  type="email"
                  placeholder="Inserisci la tua email"
                  className="flex-1 rounded-full bg-[#1D217B] px-5 py-3 text-sm text-white placeholder-[#73799B] outline-none sm:rounded-none sm:bg-transparent"
                />
                <button className="btn-glow w-full rounded-full bg-[#DBE3FF] px-8 py-3 text-sm font-semibold text-[#4F60FA] transition-all hover:bg-white sm:w-auto">
                  Iscriviti
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/persevida-sro" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(79,96,250,0.2)] text-white transition-all hover:bg-[#4F60FA] hover:border-[#4F60FA]">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/nicothll" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(79,96,250,0.2)] text-white transition-all hover:bg-[#4F60FA] hover:border-[#4F60FA]">
                <Github size={18} />
              </a>
              <a href="https://fl1.cz" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(79,96,250,0.2)] text-white transition-all hover:bg-[#4F60FA] hover:border-[#4F60FA]">
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[rgba(79,96,250,0.1)] pt-8">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-start">
            <Link href="/privacy" className="text-sm text-[#73799B] transition-colors hover:text-[#4F60FA]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-[#73799B] transition-colors hover:text-[#4F60FA]">
              Termini e Condizioni
            </Link>
            <Link href="/cookie-policy" className="text-sm text-[#73799B] transition-colors hover:text-[#4F60FA]">
              Cookie Policy
            </Link>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-[#73799B]">
              &copy; 2025 Persevida es — SuperChat per Odoo 18 · made with{" "}
              <span className="inline-block bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                ♥
              </span>{" "}
              by{" "}
              <a href="https://pixarts.eu/" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-megrim)] text-base tracking-wider text-white transition-colors hover:text-[#4F60FA]">
                Pixarts
              </a>
            </p>
            <a href="#" className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#4F60FA]">
              Back to top <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </MotionWrapper>
    </footer>
  );
}
