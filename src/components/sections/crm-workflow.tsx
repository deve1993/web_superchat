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

const steps = [
  {
    Icon: Globe,
    label: "Form Web",
    description: "Il prospect compila il form sul sito",
    color: "#4F60FA",
  },
  {
    Icon: Target,
    label: "Lead Odoo",
    description: "Lead creato automaticamente nel CRM",
    color: "#25D366",
  },
  {
    Icon: Bell,
    label: "Notifica",
    description: "WhatsApp + Email al team e al prospect",
    color: "#F59E0B",
  },
  {
    Icon: UserCheck,
    label: "Assegnazione",
    description: "Il manager assegna il lead al commerciale",
    color: "#E1306C",
  },
];

const details = [
  {
    title: "Creazione Lead Automatica",
    description:
      "Ogni form compilato sul sito genera un lead in Odoo CRM con tutti i dati precompilati. Nessuna azione manuale, zero lead persi.",
  },
  {
    title: "Notifiche Multi-Canale su Stato",
    description:
      "Quando il lead cambia stage — nuovo, qualificato, proposta — parte automaticamente il template giusto via WhatsApp ed Email.",
  },
  {
    title: "Dashboard Assegnazione",
    description:
      "Schermata dedicata per il team leader: vedi tutti i lead in ingresso, assegna con un click, il commerciale riceve la notifica istantanea.",
  },
];

export function CrmWorkflow() {
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
          <SectionSubtitle text="Flusso CRM" />
          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Dal Form al Commerciale
            <br />
            in Automatico
          </h2>
          <p className="mt-4 max-w-[600px] text-base text-[#73799B]">
            Un flusso end-to-end: il prospect compila, Odoo crea il lead, il
            team viene notificato e il manager assegna. Zero passaggi manuali.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 md:flex-row md:gap-0 md:justify-center">
          {steps.map((step, i) => {
            const StepIcon = step.Icon;
            return (
              <div key={step.label} className="flex items-center gap-0">
                <div className="flex flex-col items-center gap-3 px-4">
                  <div
                    className={`crm-icon-wave-${i} flex h-16 w-16 items-center justify-center rounded-2xl`}
                    style={{
                      backgroundColor: `${step.color}12`,
                      border: `2px solid ${step.color}30`,
                      "--crm-shadow": `0 0 24px ${step.color}15`,
                      "--crm-glow": `0 0 32px ${step.color}40, 0 0 48px ${step.color}20`,
                    } as React.CSSProperties}
                  >
                    <StepIcon
                      className="h-7 w-7"
                      style={{ color: step.color }}
                    />
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: step.color }}
                  >
                    {step.label}
                  </span>
                  <span className="max-w-[140px] text-center text-[11px] text-[#73799B]">
                    {step.description}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <>
                    <ArrowDown className="h-5 w-5 shrink-0 text-[#73799B]/40 md:hidden" />
                    <ArrowRight className="hidden h-5 w-5 shrink-0 text-[#73799B]/40 md:block" />
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
