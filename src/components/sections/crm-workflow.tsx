import Image from "next/image";
import { SectionSubtitle } from "../ui/section-subtitle";
import {
  Globe,
  Target,
  Bell,
  UserCheck,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function CrmWorkflow() {
  const t = await getTranslations("crmWorkflow");
  const steps = [
    {
      Icon: Globe,
      label: t("steps.formCapture.label"),
      description: t("steps.formCapture.description"),
      color: "#4F60FA",
    },
    {
      Icon: Target,
      label: t("steps.leadCreation.label"),
      description: t("steps.leadCreation.description"),
      color: "#25D366",
    },
    {
      Icon: Bell,
      label: t("steps.notification.label"),
      description: t("steps.notification.description"),
      color: "#F59E0B",
    },
    {
      Icon: UserCheck,
      label: t("steps.teamAssignment.label"),
      description: t("steps.teamAssignment.description"),
      color: "#E1306C",
    },
  ];

  const details = [
    {
      title: t("details.autoLead.title"),
      description: t("details.autoLead.description"),
    },
    {
      title: t("details.multiChannelNotifications.title"),
      description: t("details.multiChannelNotifications.description"),
    },
    {
      title: t("details.assignmentDashboard.title"),
      description: t("details.assignmentDashboard.description"),
    },
  ];

  return (
    <section className="relative px-6 py-24">
      <Image
        src="/images/net-9.png"
        alt=""
        width={250}
        height={250}
        className="pointer-events-none absolute top-0 left-0 w-[250px] opacity-15"
      />
      <Image
        src="/images/net-10.png"
        alt=""
        width={280}
        height={280}
        className="pointer-events-none absolute bottom-0 right-0 w-[280px] opacity-10"
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center text-center">
          <SectionSubtitle text={t("subtitle")} />
          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t("title")}
            <br />
            {t("titleLine2")}
          </h2>
          <p className="mt-4 max-w-[600px] text-base text-[#73799B]">
            {t("description")}
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 md:flex-row md:gap-0 md:justify-center">
          {steps.map((step, i) => {
            const StepIcon = step.Icon;
            return (
              <div key={step.label} className="flex items-center gap-0">
                <div className="flex flex-col items-center gap-3 px-6">
                  <div className="relative flex items-center justify-center">
                    <div
                      className={`crm-ring-${i} absolute h-16 w-16 rounded-full`}
                      style={{ borderColor: `${step.color}40` }}
                    />
                    <div
                      className={`crm-ring-outer-${i} absolute h-24 w-24 rounded-full`}
                      style={{ borderColor: `${step.color}20` }}
                    />
                    <StepIcon
                      className={`crm-step-icon-${i} relative h-8 w-8`}
                      style={{
                        color: step.color,
                        filter: `drop-shadow(0 0 0 transparent)`,
                        "--step-glow": `drop-shadow(0 0 12px ${step.color})`,
                      } as React.CSSProperties}
                    />
                  </div>
                  <span
                    className={`crm-step-label-${i} text-sm font-semibold`}
                    style={{ color: `${step.color}60` }}
                  >
                    {step.label}
                  </span>
                  <span className="max-w-[140px] text-center text-xs text-[#73799B]">
                    {step.description}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <>
                    <ArrowDown className={`crm-arrow-${i} h-5 w-5 shrink-0 text-[#73799B]/20 md:hidden`} />
                    <div className="relative hidden md:block">
                      <ArrowRight className={`crm-arrow-${i} h-5 w-5 shrink-0 text-[#73799B]/20`} />
                      <div
                        className={`crm-arrow-glow-${i} absolute inset-0 flex items-center justify-center`}
                      >
                        <ArrowRight className="h-5 w-5" style={{ color: steps[i].color }} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {details.map((detail) => (
            <div
              key={detail.title}
              className="card-hover rounded-2xl border border-[rgba(79,96,250,0.08)] p-6 md:p-8"
              style={{
                background: `radial-gradient(circle, rgba(200,210,230,0.06) 2px, transparent 2px), #050A29`,
                backgroundSize: "24px 24px",
              }}
            >
              <h3 className="mb-3 text-lg font-semibold text-white">
                {detail.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#73799B]">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
