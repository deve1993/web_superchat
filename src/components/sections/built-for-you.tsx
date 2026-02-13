"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ModuleMockup } from "../ui/mockups";
import { SectionSubtitle } from "../ui/section-subtitle";
import { MotionWrapper } from "../ui/motion-wrapper";
import { useTranslations } from "next-intl";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function BuiltForYou() {
  const t = useTranslations("builtForYou");
  const [activeIndex, setActiveIndex] = useState(0);
  const modules = [
    {
      title: t("modules.base.title"),
      description: t("modules.base.description"),
    },
    {
      title: t("modules.chatter.title"),
      description: t("modules.chatter.description"),
    },
    {
      title: t("modules.chatterExtend.title"),
      description: t("modules.chatterExtend.description"),
    },
    {
      title: t("modules.crm.title"),
      description: t("modules.crm.description"),
    },
    {
      title: t("modules.sale.title"),
      description: t("modules.sale.description"),
    },
    {
      title: t("modules.campaign.title"),
      description: t("modules.campaign.description"),
    },
    {
      title: t("modules.marketingAuto.title"),
      description: t("modules.marketingAuto.description"),
    },
  ];

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="modules"
      className="built-for-you-section relative px-6 pt-24 pb-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -right-[200px] -left-[200px] z-0 opacity-40"
        style={{
          backgroundImage: "url(/images/elemento-bg.svg)",
          backgroundSize: "80%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <MotionWrapper className="flex flex-col items-center text-center">
          <SectionSubtitle text={t("subtitle")} />
          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t("title")}
            <br />
            {t("titleLine2")}
          </h2>
          <p className="mt-4 max-w-[600px] text-base text-[#73799B]">
            {t("description")}
          </p>
          <a
            href="#contatti"
            className="mt-6 inline-block rounded-full border border-[rgba(79,96,250,0.3)] px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#4F60FA] hover:bg-[#4F60FA]/10"
          >
            {t("cta")}
          </a>
        </MotionWrapper>

        <MotionWrapper delay={0.2} className="mt-[84px] hidden lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10 lg:items-start">
          <div className="flex flex-col gap-2">
            {modules.map((mod, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={mod.title}
                  onClick={() => handleSelect(i)}
                  className={`group relative w-full rounded-r-2xl border text-left transition-all duration-300 ${
                    isActive
                      ? "border-[#4F60FA]/40 bg-[#050A29]/90"
                      : "border-[rgba(79,96,250,0.1)] bg-[#050A29]/45 hover:border-[rgba(79,96,250,0.2)] hover:bg-[#050A29]/55"
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-0 left-0 h-full w-[3px] bg-[#4F60FA]" />
                  )}

                  <div className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors duration-300 ${
                          isActive
                            ? "bg-[#4F60FA] text-white"
                            : "bg-[#1D217B]/30 text-[#73799B] group-hover:text-[#DBE3FF]"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className={`text-sm font-semibold transition-colors duration-300 ${
                          isActive ? "text-white" : "text-[#73799B] group-hover:text-[#DBE3FF]"
                        }`}
                      >
                        {mod.title}
                      </h3>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease }}
                          className="overflow-hidden pl-10 text-sm leading-relaxed text-[#73799B]"
                        >
                          <span className="block pt-2">{mod.description}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="sticky top-24">
            <div
              className="overflow-hidden rounded-3xl border border-[rgba(79,96,250,0.08)]"
              style={{
                background: `radial-gradient(circle, rgba(200,210,230,0.06) 2px, transparent 2px), #050A29`,
                backgroundSize: "24px 24px",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, ease }}
                >
                  <ModuleMockup moduleIndex={activeIndex} />
                </motion.div>
              </AnimatePresence>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${activeIndex}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease }}
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {modules[activeIndex].title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#73799B]">
                      {modules[activeIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper delay={0.2} className="mt-12 flex flex-col gap-3 lg:hidden">
          {modules.map((mod, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={mod.title}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "border-[#4F60FA]/40 bg-[#4F60FA]/[0.06]"
                    : "border-[rgba(79,96,250,0.08)]"
                }`}
                style={
                  isActive
                    ? {
                        background: `radial-gradient(circle, rgba(200,210,230,0.06) 2px, transparent 2px), #050A29`,
                        backgroundSize: "24px 24px",
                      }
                    : undefined
                }
              >
                <button
                  onClick={() => handleSelect(i)}
                  className="flex w-full items-center gap-3 px-5 py-4 text-left"
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors duration-300 ${
                      isActive
                        ? "bg-[#4F60FA] text-white"
                        : "bg-[#1D217B]/30 text-[#73799B]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`flex-1 text-sm font-semibold transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#73799B]"
                    }`}
                  >
                    {mod.title}
                  </h3>
                  <svg
                    className={`h-4 w-4 shrink-0 text-[#73799B] transition-transform duration-300 ${
                      isActive ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <p className="mb-4 text-sm leading-relaxed text-[#73799B]">
                          {mod.description}
                        </p>
                        <div className="overflow-hidden rounded-xl">
                          <ModuleMockup moduleIndex={i} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
