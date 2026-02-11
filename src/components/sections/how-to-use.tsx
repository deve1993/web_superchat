"use client";

import { useState } from "react";
import { StepMockup } from "../ui/mockups";
import { SectionSubtitle } from "../ui/section-subtitle";
import { MotionWrapper } from "../ui/motion-wrapper";
import { AnimatePresence, motion } from "framer-motion";

const steps = [
  {
    number: "/1",
    title: "Installa i Moduli",
    description: "Scarica e installa superchat_base nella directory addons di Odoo 18",
  },
  {
    number: "/2",
    title: "Configura il Workspace",
    description: "Inserisci le credenziali API SuperChat e attiva i webhook in Impostazioni",
  },
  {
    number: "/3",
    title: "Lead e Chat Automatici",
    description:
      "I lead arrivano dal web, le notifiche partono in automatico e il team riceve l'assegnazione — tutto dentro Odoo",
  },
];

export function HowToUse() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative px-6 py-24">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(/images/bg-element-dx.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <MotionWrapper className="flex flex-col items-center text-center">
          <SectionSubtitle text="Come Iniziare" />
          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Pronto in 3 Step
          </h2>
          <p className="mt-4 max-w-[600px] text-base text-[#73799B]">
            Dall&apos;installazione al primo lead automatico in pochi minuti.
            Nessuna configurazione complessa.
          </p>
        </MotionWrapper>

        <div className="mt-16 flex flex-col items-center">
          <div className="relative w-full max-w-[800px] aspect-[1379/902] flex items-center justify-center mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <StepMockup step={activeStep + 1} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid w-full max-w-[1000px] gap-3 grid-cols-1 sm:grid-cols-3 sm:gap-4">
            {steps.map((step, index) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`group relative flex flex-col items-start rounded-2xl border p-6 text-left transition-all ${
                  activeStep === index
                    ? "border-[#4F60FA] bg-[#1D217B]/20"
                    : "border-[rgba(79,96,250,0.2)] bg-[#06051E] hover:border-[#4F60FA]/50"
                }`}
              >
                <span className={`text-sm font-semibold transition-colors ${
                    activeStep === index ? "text-[#4F60FA]" : "text-[#73799B] group-hover:text-[#4F60FA]"
                }`}>
                  {step.number}
                </span>
                <h3 className={`mt-2 text-lg font-semibold transition-colors ${
                    activeStep === index ? "text-white" : "text-white/70 group-hover:text-white"
                }`}>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[#73799B]">
                  {step.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
