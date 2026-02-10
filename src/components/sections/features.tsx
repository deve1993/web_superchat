import { FeatureMockup } from "../ui/mockups";
import { MessagesSquare, Zap, BotMessageSquare } from "lucide-react";
import { SectionSubtitle } from "../ui/section-subtitle";
import { MotionWrapper, MotionStagger, MotionChild } from "../ui/motion-wrapper";
const features = [
  {
    Icon: MessagesSquare,
    title: "Inbox Multi-Canale Unificata",
    description:
      "Gestisci WhatsApp, Instagram, Facebook Messenger, Email, SMS e Telegram da un'unica interfaccia a 3 colonne direttamente in Odoo.",
    color: "#25D366",
  },
  {
    Icon: Zap,
    title: "Webhook Ultra-Rapidi (~2ms)",
    description:
      "Architettura fire-and-forget con risposta webhook in ~2ms. 66 volte più veloce dello standard, senza mai bloccare Odoo.",
    color: "#F59E0B",
  },
  {
    Icon: BotMessageSquare,
    title: "Automazione Intelligente dal CRM alle Vendite",
    description:
      "Regole automatiche su cambio stage lead, invio preventivi WhatsApp+Email con un click, campagne massive programmate.",
    color: "#4F60FA",
  },
];

export function Features() {
  return (
    <section id="features" className="relative px-6 pt-16 pb-24 lg:pt-24">
      <img
        src="/images/net-6.png"
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 w-[300px] opacity-15"
      />
      <img
        src="/images/net-5.png"
        alt=""
        className="pointer-events-none absolute top-0 right-0 w-[250px] opacity-15"
      />
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <MotionWrapper className="flex flex-col items-center text-center">
          <SectionSubtitle text="Funzionalità" />
          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Potenza e Semplicità
            <br />
            in Ogni Modulo
          </h2>
          <p className="mt-4 text-base text-[#73799B] md:text-lg">
            Libera il tuo team dalle attività ripetitive
          </p>
        </MotionWrapper>

        <MotionStagger className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <MotionChild
              key={feature.title}
              className={`card-hover group relative overflow-hidden rounded-[14.4px] border border-[rgba(200,210,230,0.12)] ${
                index === 2 ? "md:col-span-2 flex flex-col md:flex-row items-center" : ""
              }`}
              style={{
                background: `radial-gradient(circle, rgba(200,210,230,0.06) 2px, transparent 2px), #050A29`,
                backgroundSize: '24px 24px',
              }}
            >
              <div className={`relative z-10 p-6 pb-0 md:p-8 md:pb-0 ${index === 2 ? "md:w-1/2 md:pb-8" : ""}`}>
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.Icon className="h-6 w-6" style={{ color: feature.color }} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#73799B]">
                  {feature.description}
                </p>
              </div>
              <FeatureMockup
                variant={index === 0 ? 'channels' : index === 1 ? 'webhook' : 'automation'}
                className={`mt-6 pb-6 ${index === 2 ? "md:mt-0 md:w-1/2 md:py-8" : ""}`}
              />
            </MotionChild>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
