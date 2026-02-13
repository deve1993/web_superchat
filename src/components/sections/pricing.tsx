import Image from "next/image";
import { Check } from "lucide-react";
import { SectionSubtitle } from "../ui/section-subtitle";
import { MotionWrapper, MotionStagger, MotionChild } from "../ui/motion-wrapper";
import { getTranslations } from "next-intl/server";

export async function Pricing() {
  const t = await getTranslations("pricing");
  const plans = [
    {
      name: t("plans.starter.name"),
      icon: "/images/diamond-basic.svg",
      price: t("plans.starter.price"),
      period: t("plans.starter.period"),
      description: t("plans.starter.description"),
      features: t.raw("plans.starter.features") as string[],
      cta: t("plans.starter.cta"),
      featured: false,
    },
    {
      name: t("plans.pro.name"),
      icon: "/images/diamond-standard.svg",
      price: t("plans.pro.price"),
      period: t("plans.pro.period"),
      description: t("plans.pro.description"),
      features: t.raw("plans.pro.features") as string[],
      cta: t("plans.pro.cta"),
      featured: true,
    },
    {
      name: t("plans.enterprise.name"),
      icon: "/images/diamond-enterprise.svg",
      price: t("plans.enterprise.price"),
      period: t("plans.enterprise.period"),
      description: t("plans.enterprise.description"),
      features: t.raw("plans.enterprise.features") as string[],
      cta: t("plans.enterprise.cta"),
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="relative px-6 py-24">
      <Image
        src="/images/net-3.png"
        alt=""
        width={250}
        height={250}
        className="pointer-events-none absolute top-0 left-0 w-[250px] opacity-10"
      />
      <Image
        src="/images/net-4.png"
        alt=""
        width={280}
        height={280}
        className="pointer-events-none absolute bottom-0 right-0 w-[280px] opacity-10"
      />
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <MotionWrapper className="flex flex-col items-center text-center">
          <SectionSubtitle text={t("subtitle")} />
          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-[#73799B]">
            {t("description")}
          </p>
        </MotionWrapper>

        <MotionStagger className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <MotionChild
              key={plan.name}
              className={`card-hover relative overflow-hidden rounded-3xl border px-8 pt-[73px] pb-10 ${
                plan.featured
                  ? "border-[#4F60FA] shadow-[0_0_40px_rgba(79,96,250,0.2)]"
                  : "border-[rgba(79,96,250,0.08)] bg-[#06051E]"
              }`}
              style={
                plan.featured
                  ? {
                      background:
                        "linear-gradient(174.14deg, #05061D 4.66%, #0B0D2B 77.35%, #0D0C2E 93.85%)",
                    }
                  : {}
              }
            >
              <Image src={plan.icon} alt="" width={40} height={40} className="mb-4 h-10 w-10" />
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#73799B]">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-[#73799B]"
                  >
                    <Check size={16} className="shrink-0 text-[#4F60FA]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <span className="text-3xl font-bold text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-[#73799B]"> {plan.period}</span>
                )}
              </div>

              <a
                href="#"
                className={`mt-6 block rounded-full py-3 text-center text-sm font-semibold transition-all ${
                  plan.featured
                    ? "btn-glow bg-[#DBE3FF] text-[#4F60FA] hover:bg-white"
                    : "border border-[rgba(79,96,250,0.3)] text-white hover:border-[#4F60FA] hover:bg-[#4F60FA]/10"
                }`}
              >
                {plan.cta}
              </a>
            </MotionChild>
          ))}
        </MotionStagger>

        <MotionWrapper delay={0.4} className="mt-10 text-center space-y-2">
          <p className="text-xs text-[#73799B]">
            {t("notes.apiRequired")}
          </p>
          <p className="text-xs text-[#73799B]">
            {t("notes.enterpriseRequired")}
          </p>
        </MotionWrapper>
      </div>
    </section>
  );
}
