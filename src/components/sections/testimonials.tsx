"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Building2, ShoppingCart, Briefcase, TrendingUp, UserCog } from "lucide-react";
import { SectionSubtitle } from "../ui/section-subtitle";
import { MotionWrapper } from "../ui/motion-wrapper";
import { AnimatePresence, motion } from "framer-motion";

const useCases = [
  {
    Icon: UserCog,
    sector: "Sales Manager",
    description:
      "Vedi tutti i lead in arrivo nella dashboard. Assegna ogni lead al commerciale giusto con un click, riceve notifica istantanea. Monitora chi segue cosa, senza riunioni.",
  },
  {
    Icon: Building2,
    sector: "Aziende B2B",
    description:
      "Il prospect compila il form, il lead arriva in Odoo, parte il template WhatsApp al commerciale. Follow-up automatico se non c'è risposta in 48h.",
  },
  {
    Icon: TrendingUp,
    sector: "Marketing & Vendite",
    description:
      "Workflow automatici basati sullo stage: benvenuto su qualifica, proposta su interesse, reminder su inattività. Nurturing multi-canale senza intervento manuale.",
  },
  {
    Icon: ShoppingCart,
    sector: "E-Commerce & Retail",
    description:
      "Conferme ordine, tracking spedizioni e campagne promozionali massive su WhatsApp. Il supporto post-vendita diventa immediato.",
  },
  {
    Icon: Briefcase,
    sector: "Servizi Professionali",
    description:
      "Promemoria appuntamenti, conferme prenotazioni e comunicazioni urgenti. Tutto gestito centralmente da Odoo senza app esterne.",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % useCases.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section id="use-cases" className="relative px-6 py-24">
      <Image
        src="/images/net-9.png"
        alt=""
        width={250}
        height={250}
        className="pointer-events-none absolute top-0 right-0 w-[250px] opacity-20"
      />
      <Image
        src="/images/net-10.png"
        alt=""
        width={250}
        height={250}
        className="pointer-events-none absolute bottom-0 left-0 w-[250px] opacity-20"
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <MotionWrapper className="flex flex-col items-center text-center">
          <SectionSubtitle text="Casi d'Uso" />
          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            SuperChat Lavora
            <br />
            per il Tuo Settore
          </h2>
          <p className="mt-4 text-base text-[#73799B]">
            Dalla logistica al marketing, ogni team trova il suo canale
          </p>
        </MotionWrapper>

        <div className="mt-16 mx-auto max-w-[800px] text-center relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1D217B]/50 text-[#4F60FA]">
                {(() => {
                  const IconComp = useCases[active].Icon;
                  return <IconComp size={28} />;
                })()}
              </div>

              <h3 className="text-xl font-semibold text-white md:text-2xl">
                {useCases[active].sector}
              </h3>

              <p className="mt-4 text-lg md:text-xl leading-relaxed text-white/90">
                {useCases[active].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex justify-center gap-1">
            {useCases.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="relative flex items-center justify-center h-11 w-11"
                aria-label={`Vai al caso d'uso ${i + 1}`}
              >
                <span className={`block rounded-full transition-all ${
                  i === active
                    ? "w-8 h-2 bg-[#4F60FA]"
                    : "w-2 h-2 bg-[#73799B]/50 hover:bg-[#73799B]"
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
