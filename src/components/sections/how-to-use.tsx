"use client";

import { useState } from "react";
import { StepMockup } from "../ui/mockups";
import { SectionSubtitle } from "../ui/section-subtitle";
import { MotionWrapper } from "../ui/motion-wrapper";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function HowToUse() {
  const t = useTranslations("howToUse");
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      number: "/1",
      title: t("steps.install.title"),
      description: t("steps.install.description"),
    },
    {
      number: "/2",
      title: t("steps.configure.title"),
      description: t("steps.configure.description"),
    },
    {
      number: "/3",
      title: t("steps.automate.title"),
      description: t("steps.automate.description"),
    },
  ];

  return (
    <section className="relative px-6 py-24">
      <img
        src="/images/bg-element-dx.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-30"
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <MotionWrapper className="flex flex-col items-center text-center">
          <SectionSubtitle text={t("subtitle")} />
          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-[600px] text-base text-[#73799B]">
            {t("description")}
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
