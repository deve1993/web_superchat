import Image from "next/image";
import { Building2, ShoppingCart, Briefcase, TrendingUp, UserCog, Headphones, type LucideIcon } from "lucide-react";
import { SectionSubtitle } from "../ui/section-subtitle";
import { MotionWrapper, MotionStagger, MotionChild } from "../ui/motion-wrapper";
import { getTranslations } from "next-intl/server";

export async function Testimonials() {
  const t = await getTranslations("useCases");
  const useCases: { Icon: LucideIcon; sector: string; description: string; color: string; glow: string }[] = [
    {
      Icon: UserCog,
      sector: t("items.salesManager.sector"),
      description: t("items.salesManager.description"),
      color: "#4F60FA",
      glow: "rgba(79,96,250,0.25)",
    },
    {
      Icon: Building2,
      sector: t("items.b2b.sector"),
      description: t("items.b2b.description"),
      color: "#8B5CF6",
      glow: "rgba(139,92,246,0.25)",
    },
    {
      Icon: TrendingUp,
      sector: t("items.marketing.sector"),
      description: t("items.marketing.description"),
      color: "#14B8A6",
      glow: "rgba(20,184,166,0.25)",
    },
    {
      Icon: ShoppingCart,
      sector: t("items.ecommerce.sector"),
      description: t("items.ecommerce.description"),
      color: "#F59E0B",
      glow: "rgba(245,158,11,0.25)",
    },
    {
      Icon: Briefcase,
      sector: t("items.professional.sector"),
      description: t("items.professional.description"),
      color: "#EC4899",
      glow: "rgba(236,72,153,0.25)",
    },
    {
      Icon: Headphones,
      sector: t("items.support.sector"),
      description: t("items.support.description"),
      color: "#10B981",
      glow: "rgba(16,185,129,0.25)",
    },
  ];

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
          <SectionSubtitle text={t("subtitle")} />
          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t("title")}
            <br />
            {t("titleLine2")}
          </h2>
          <p className="mt-4 text-base text-[#73799B]">
            {t("description")}
          </p>
        </MotionWrapper>

        <MotionStagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map(({ Icon, sector, description, color, glow }) => (
            <MotionChild
              key={sector}
              className="card-hover group relative overflow-hidden rounded-[13.6px] border border-[rgba(79,96,250,0.08)] p-6 transition-colors"
              style={{
                background:
                  "radial-gradient(circle, rgba(200,210,230,0.06) 2px, transparent 2px), #050A29",
                backgroundSize: "24px 24px",
              }}
            >
              <div className="relative mb-5">
                <div
                  className="absolute -top-3 -left-3 h-[72px] w-[72px] rounded-full blur-2xl"
                  style={{ backgroundColor: glow }}
                />
                <div
                  className="relative flex h-12 w-12 items-center justify-center rounded-xl transition-colors"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${color} 20%, transparent)`,
                    color,
                  }}
                >
                  <Icon size={22} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">{sector}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#73799B]">
                {description}
              </p>
            </MotionChild>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
