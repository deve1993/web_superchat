"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Funzionalit\u00e0", href: "#features" },
  { label: "Moduli", href: "#modules" },
  { label: "Casi d'Uso", href: "#use-cases" },
  { label: "Contatti", href: "#contatti" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <img src="/icons/logo-mobile.svg" alt="SuperChat per Odoo" className="h-7 w-auto" />
        </Link>

        <ul className="hidden items-center gap-1 min-[844px]:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-1.5 text-[13px] font-medium text-[#73799B] transition-all hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="#contatti"
            className="hidden rounded-full bg-[#DBE3FF] px-5 py-2 text-[13px] font-semibold text-[#4F60FA] transition-all hover:bg-white hover:shadow-[0_0_16px_rgba(79,96,250,0.3)] min-[844px]:inline-block"
          >
            Richiedi Demo
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-all hover:bg-white/10 min-[844px]:hidden"
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
                <Link
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-[#73799B] transition-all hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-1 px-2 pb-1">
              <Link
                href="#contatti"
                className="block rounded-full bg-[#DBE3FF] py-2.5 text-center text-sm font-semibold text-[#4F60FA] transition-all hover:bg-white"
                onClick={() => setMobileOpen(false)}
              >
                Richiedi Demo
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
