import { EcosystemMockup } from "../ui/mockups";
import { SectionSubtitle } from "../ui/section-subtitle";
import { MotionWrapper, MotionStagger, MotionChild } from "../ui/motion-wrapper";
import { LetterAnimation } from "../ui/letter-animation";
import { Shield, Blocks, Code, Puzzle } from "lucide-react";

const techPills = [
  { label: "Integrazione Nativa Odoo", icon: Puzzle },
  { label: "Open Source LGPL-3", icon: Code },
  { label: "Architettura a 7 Moduli", icon: Blocks },
  { label: "Sicurezza a 3 Livelli", icon: Shield },
];

export function About() {
  return (
    <section id="about" className="relative px-6 pt-24 pb-34 lg:pb-24">
      <img
        src="/images/net-3.png"
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 w-[300px] opacity-20"
      />
      <img
        src="/images/net-4.png"
        alt=""
        className="pointer-events-none absolute top-0 right-0 w-[300px] opacity-20"
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <MotionWrapper className="flex flex-col items-center text-center">
          <SectionSubtitle text="Chi Siamo" />
        </MotionWrapper>

        <div className="mt-12 flex flex-col items-center gap-30 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <LetterAnimation
              text="SuperChat trasforma Odoo 18 nel centro nevralgico della tua comunicazione aziendale. Potenza Open Source, integrazione nativa, zero compromessi."
              className="text-2xl font-semibold leading-snug text-white md:text-3xl lg:text-[36px] lg:leading-[1.4]"
            />

            <MotionStagger className="mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {techPills.map((pill) => {
                const Icon = pill.icon;
                return (
                  <MotionChild key={pill.label}>
                    <span className="flex items-center gap-2 rounded-full border border-[rgba(79,96,250,0.2)] bg-[#06051E] px-5 py-2.5 text-sm text-[#73799B]">
                      <Icon className="w-4 h-4 text-[#4F60FA]" />
                      {pill.label}
                    </span>
                  </MotionChild>
                );
              })}
            </MotionStagger>

          </div>

          <MotionWrapper delay={0.2} className="relative flex flex-1 items-center justify-center">
            <EcosystemMockup />
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
