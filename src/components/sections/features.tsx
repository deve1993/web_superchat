import Image from "next/image";
import { FeatureMockup } from "../ui/mockups";
import { MessagesSquare, Target, BotMessageSquare, UserCheck } from "lucide-react";
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
    Icon: Target,
    title: "Modulo CRM Lead",
    description:
      "Ogni form web crea un lead in Odoo automaticamente. Trigger su cambio stage inviano template personalizzati al cliente e notifiche al team commerciale.",
    color: "#4F60FA",
  },
  {
    Icon: BotMessageSquare,
    title: "Marketing Automation",
    description:
      "Workflow automatici basati sullo stato del lead: email + WhatsApp su qualifica, reminder su inattività, nurturing multi-step con branch condizionali.",
    color: "#F59E0B",
  },
  {
    Icon: UserCheck,
    title: "Assegnazione & Ruoli",
    description:
      "Schermata di assegnazione dedicata: assegna lead e conversazioni ai membri del team. Notifiche istantanee, permessi granulari User/Assignator/Admin.",
    color: "#28C840",
  },
];

export function Features() {
  return (
    <section id="features" className="relative px-6 pt-16 pb-24 lg:pt-24">
      <Image
        src="/images/net-6.png"
        alt=""
        width={300}
        height={300}
        className="pointer-events-none absolute bottom-0 left-0 w-[300px] opacity-15"
      />
      <Image
        src="/images/net-5.png"
        alt=""
        width={250}
        height={250}
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
          {features.map((feature, index) => {
            const variants: Array<'channels' | 'crm-lead' | 'marketing-auto' | 'assignment'> = [
              'channels', 'crm-lead', 'marketing-auto', 'assignment',
            ];
            return (
              <MotionChild
                key={feature.title}
                className="card-hover group relative overflow-hidden rounded-[14.4px] border border-[rgba(200,210,230,0.12)]"
                style={{
                  background: `radial-gradient(circle, rgba(200,210,230,0.06) 2px, transparent 2px), #050A29`,
                  backgroundSize: '24px 24px',
                }}
              >
                <div className="relative z-10 p-6 pb-0 md:p-8 md:pb-0">
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
                  variant={variants[index]}
                  className="mt-6 pb-6"
                />
              </MotionChild>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
