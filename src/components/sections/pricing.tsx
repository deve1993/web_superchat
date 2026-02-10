import { Check } from "lucide-react";
import { SectionSubtitle } from "../ui/section-subtitle";
import { MotionWrapper, MotionStagger, MotionChild } from "../ui/motion-wrapper";
const plans = [
  {
    name: "Avvio",
    icon: "/images/diamond-basic.svg",
    price: "A partire da \u20acX",
    period: "/anno",
    description:
      "L'infrastruttura completa SuperChat per iniziare a gestire le comunicazioni multi-canale in Odoo.",
    features: [
      "SuperChat Base + Chatter + Chatter Extend",
      "6 canali di comunicazione integrati",
      "Interfaccia chat con 17 componenti OWL",
      "Pulsante WhatsApp universale",
      "Onboarding e configurazione standard",
      "Aggiornamenti e supporto base",
    ],
    cta: "Richiedi Demo Tecnica",
    featured: false,
  },
  {
    name: "Pro",
    icon: "/images/diamond-standard.svg",
    price: "A partire da \u20acX",
    period: "/anno",
    description:
      "Tutto il pacchetto Avvio più automazione CRM e invio veloce preventivi per team commerciali.",
    features: [
      "Tutti i moduli Avvio inclusi",
      "Automazioni CRM su cambio stage lead",
      "Invio preventivi WhatsApp + Email",
      "Template e trigger per team vendite",
      "Setup processi con best practice",
      "Supporto prioritario e tuning flussi",
    ],
    cta: "Prenota Call Commerciale",
    featured: true,
  },
  {
    name: "Enterprise",
    icon: "/images/diamond-enterprise.svg",
    price: "Contattaci",
    period: "",
    description:
      "La suite completa con campagne massive e Marketing Automation per organizzazioni strutturate.",
    features: [
      "Tutti i moduli Pro inclusi",
      "Campagne WhatsApp massive con scheduling",
      "Marketing Automation omnicanale",
      "Segmentazione avanzata e journey",
      "Workshop dedicato e rollout multi-team",
      "SLA enterprise e referente dedicato",
    ],
    cta: "Parla con un Architect",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-24">
      <img
        src="/images/net-3.png"
        alt=""
        className="pointer-events-none absolute top-0 left-0 w-[250px] opacity-10"
      />
      <img
        src="/images/net-4.png"
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 w-[280px] opacity-10"
      />
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <MotionWrapper className="flex flex-col items-center text-center">
          <SectionSubtitle text="Pacchetti" />
          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Scegli il Tuo Pacchetto
          </h2>
          <p className="mt-4 text-base text-[#73799B]">
            Installa solo i moduli che ti servono, scala quando vuoi
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
              <img src={plan.icon} alt="" className="mb-4 h-10 w-10" />
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
            * Account SuperChat API obbligatorio (non incluso nel pacchetto)
          </p>
          <p className="text-xs text-[#73799B]">
            * Il modulo Marketing Automation richiede Odoo Enterprise
          </p>
        </MotionWrapper>
      </div>
    </section>
  );
}
