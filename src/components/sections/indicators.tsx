"use client";
import { SectionSubtitle } from "../ui/section-subtitle";
import { MotionWrapper, MotionStagger, MotionChild } from "../ui/motion-wrapper";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 7, suffix: "", label: "Moduli Specializzati" },
  { value: 2, suffix: "ms", label: "Risposta Webhook" },
  { value: 31000, suffix: "+", label: "Righe di Codice" },
  { value: 6, suffix: "", label: "Canali Integrati" },
];



function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useSpring(0, { duration: 2000 });
  const rounded = useTransform(count, (latest: number): string => {
    if (Number.isInteger(value)) {
      return String(Math.round(latest));
    }
    return latest.toFixed(1);
  });

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref} className="flex justify-center">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export function Indicators() {
  return (
    <section className="relative px-6 py-24">
      <img
        src="/images/net-10.png"
        alt=""
        className="pointer-events-none absolute top-0 left-0 w-[300px] opacity-20"
      />
      <img
        src="/images/net-9.png"
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 w-[300px] opacity-20"
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <MotionWrapper className="flex flex-col items-center text-center">
          <SectionSubtitle text="I Numeri" />
          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Ingegneria d&apos;Eccellenza
            <br />
            per Odoo 18
          </h2>
        </MotionWrapper>

        <MotionStagger className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <MotionChild key={`${stat.label}-${i}`} className="text-center">
              <div className="text-3xl font-bold text-[#DBE3FF] md:text-4xl lg:text-5xl flex justify-center">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-[#73799B]">{stat.label}</p>
            </MotionChild>
          ))}
        </MotionStagger>

        <MotionWrapper delay={0.4} className="mt-16">
          <p className="mb-8 text-center text-sm font-medium text-[#73799B]">
            Compatibile con Odoo 18.0 Community & Enterprise
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {["WhatsApp", "Instagram", "Messenger", "Email", "SMS", "Telegram"].map((channel) => (
              <span
                key={channel}
                className="rounded-full border border-[rgba(79,96,250,0.2)] bg-[#06051E] px-4 py-2 text-xs font-medium text-[#DBE3FF]"
              >
                {channel}
              </span>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
