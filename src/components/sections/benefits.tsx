"use client";
import { BenefitMockup } from "../ui/mockups";
import { MessageCircle, Instagram, Facebook, Mail, MessageSquare, Send } from "lucide-react";
import { SectionSubtitle } from "../ui/section-subtitle";
import { MotionWrapper, MotionStagger, MotionChild } from "../ui/motion-wrapper";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

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
const channels = [
  { Icon: MessageCircle, label: "WhatsApp", color: "#25D366" },
  { Icon: Instagram, label: "Instagram", color: "#E1306C" },
  { Icon: Facebook, label: "Messenger", color: "#0084FF" },
  { Icon: Mail, label: "Email", color: "#4F60FA" },
  { Icon: MessageSquare, label: "SMS", color: "#F59E0B" },
  { Icon: Send, label: "Telegram", color: "#0088CC" },
];

export function Benefits() {
  const t = useTranslations("benefits");
  const stats = [
    { value: 7, suffix: "", label: t("stats.modules") },
    { value: 0, suffix: "", label: t("stats.zeroLeads") },
    { value: 3, suffix: "s", label: t("stats.assignTime") },
    { value: 6, suffix: "", label: t("stats.channels") },
  ];
  const channelRow = [...channels, ...channels, ...channels, ...channels];

  return (
    <section id="benefits" className="relative px-6 py-24">
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <MotionWrapper className="flex flex-col items-center text-center">
          <SectionSubtitle text={t("subtitle")} />
          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-[700px] text-base text-[#73799B]">
            {t("description")}
          </p>
        </MotionWrapper>

        <MotionStagger className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <MotionChild key={`${stat.label}-${i}`} className="text-center">
              <div className="text-3xl font-bold text-[#DBE3FF] md:text-4xl lg:text-5xl flex justify-center">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-[#73799B]">{stat.label}</p>
            </MotionChild>
          ))}
        </MotionStagger>

        <MotionStagger className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-6">
          <MotionChild className="card-hover overflow-hidden rounded-[13.6px] border border-[rgba(79,96,250,0.08)] p-6 md:col-span-2 md:p-8" style={{ background: `radial-gradient(circle, rgba(200,210,230,0.06) 2px, transparent 2px), #050A29`, backgroundSize: '24px 24px' }}>
            <h3 className="mb-2 text-xl font-semibold text-white">
              {t("cards.channels.title")}
            </h3>
            <p className="mb-6 text-sm text-[#73799B]">
              {t("cards.channels.description")}
            </p>
            <div
              className="-mx-6 mt-14 space-y-6 overflow-hidden md:-mx-8"
              style={{
                maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <div className="animate-marquee-fast flex gap-10">
                {channelRow.map((ch, i) => (
                  <div
                    key={`fwd-${ch.label}-${i}`}
                    className="flex shrink-0 flex-col items-center gap-2"
                  >
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-xl border bg-[#00031C]"
                      style={{ borderColor: `${ch.color}30`, boxShadow: `0 0 16px ${ch.color}15` }}
                    >
                      <ch.Icon size={26} style={{ color: ch.color }} />
                    </div>
                    <span className="text-[10px] font-medium" style={{ color: `${ch.color}99` }}>{ch.label}</span>
                  </div>
                ))}
              </div>
              <div className="animate-marquee-reverse-fast flex gap-10">
                {channelRow.map((ch, i) => (
                  <div
                    key={`rev-${ch.label}-${i}`}
                    className="flex shrink-0 flex-col items-center gap-2"
                  >
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-xl border bg-[#00031C]"
                      style={{ borderColor: `${ch.color}30`, boxShadow: `0 0 16px ${ch.color}15` }}
                    >
                      <ch.Icon size={26} style={{ color: ch.color }} />
                    </div>
                    <span className="text-[10px] font-medium" style={{ color: `${ch.color}99` }}>{ch.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </MotionChild>

          <MotionChild className="card-hover overflow-hidden rounded-[13.6px] border border-[rgba(79,96,250,0.08)] p-6 md:col-span-2 md:p-8" style={{ background: `radial-gradient(circle, rgba(200,210,230,0.06) 2px, transparent 2px), #050A29`, backgroundSize: '24px 24px' }}>
            <h3 className="mb-2 text-xl font-semibold text-white">
              {t("cards.leadAutomation.title")}
            </h3>
            <p className="mb-4 text-sm text-[#73799B]">
              {t("cards.leadAutomation.description")}
            </p>
            <BenefitMockup variant="crm" />
          </MotionChild>

          <MotionChild className="card-hover overflow-hidden rounded-[13.6px] border border-[rgba(79,96,250,0.08)] p-6 md:col-span-2 md:p-8" style={{ background: `radial-gradient(circle, rgba(200,210,230,0.06) 2px, transparent 2px), #050A29`, backgroundSize: '24px 24px' }}>
            <h3 className="mb-2 text-xl font-semibold text-white">
              {t("cards.marketingAutomation.title")}
            </h3>
            <p className="mb-4 text-sm text-[#73799B]">
              {t("cards.marketingAutomation.description")}
            </p>
            <BenefitMockup variant="marketing-auto-benefit" />
          </MotionChild>

          <MotionChild className="card-hover overflow-hidden rounded-[13.6px] border border-[rgba(79,96,250,0.08)] p-6 md:col-span-3 md:p-8" style={{ background: `radial-gradient(circle, rgba(200,210,230,0.06) 2px, transparent 2px), #050A29`, backgroundSize: '24px 24px' }}>
            <h3 className="mb-2 text-xl font-semibold text-white">
              {t("cards.teamAssignment.title")}
            </h3>
            <p className="mb-4 text-sm text-[#73799B]">
              {t("cards.teamAssignment.description")}
            </p>
            <BenefitMockup variant="assignment-benefit" />
          </MotionChild>

          <MotionChild className="card-hover overflow-hidden rounded-[13.6px] border border-[rgba(79,96,250,0.08)] p-6 md:col-span-3 md:p-8" style={{ background: `radial-gradient(circle, rgba(200,210,230,0.06) 2px, transparent 2px), #050A29`, backgroundSize: '24px 24px' }}>
            <h3 className="mb-2 text-xl font-semibold text-white">
              {t("cards.security.title")}
            </h3>
            <p className="mb-4 text-sm text-[#73799B]">
              {t("cards.security.description")}
            </p>
            <BenefitMockup variant="security" />
          </MotionChild>
        </MotionStagger>


      </div>
    </section>
  );
}
