import Image from "next/image";
import { BenefitMockup } from "../ui/mockups";
import { MessageCircle, Instagram, Facebook, Mail, MessageSquare, Send } from "lucide-react";
import { SectionSubtitle } from "../ui/section-subtitle";
import { MotionWrapper, MotionStagger, MotionChild } from "../ui/motion-wrapper";
const channels = [
  { Icon: MessageCircle, label: "WhatsApp", color: "#25D366" },
  { Icon: Instagram, label: "Instagram", color: "#E1306C" },
  { Icon: Facebook, label: "Messenger", color: "#0084FF" },
  { Icon: Mail, label: "Email", color: "#4F60FA" },
  { Icon: MessageSquare, label: "SMS", color: "#F59E0B" },
  { Icon: Send, label: "Telegram", color: "#0088CC" },
];

export function Benefits() {
  const channelRow = [...channels, ...channels, ...channels, ...channels];

  return (
    <section id="benefits" className="relative px-6 py-24">
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
        <MotionWrapper className="flex flex-col items-center text-center">
          <SectionSubtitle text="Vantaggi" />
          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            I Tuoi Vantaggi
          </h2>
          <p className="mt-4 max-w-[700px] text-base text-[#73799B]">
            Dal lead alla vendita: automazione CRM, notifiche intelligenti e assegnazione
            team integrati nativamente in Odoo.
          </p>
        </MotionWrapper>

        <MotionStagger className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-6">
          <MotionChild className="card-hover overflow-hidden rounded-[13.6px] border border-[rgba(79,96,250,0.08)] p-6 md:col-span-2 md:p-8" style={{ background: `radial-gradient(circle, rgba(200,210,230,0.06) 2px, transparent 2px), #050A29`, backgroundSize: '24px 24px' }}>
            <h3 className="mb-2 text-xl font-semibold text-white">
              6 Canali, Zero App Esterne
            </h3>
            <p className="mb-6 text-sm text-[#73799B]">
              WhatsApp, Instagram, Messenger, Email, SMS, Telegram — tutto in
              un&apos;unica inbox nativa Odoo.
            </p>
            <div className="-mx-6 mt-20 overflow-hidden md:-mx-8">
              <div className="animate-marquee-fast flex gap-12">
                {channelRow.map((ch, i) => (
                  <div
                    key={`${ch.label}-${i}`}
                    className="flex shrink-0 items-center opacity-60 transition-opacity hover:opacity-100"
                  >
                    <ch.Icon size={60} style={{ color: ch.color }} />
                  </div>
                ))}
              </div>
            </div>
          </MotionChild>

          <MotionChild className="card-hover overflow-hidden rounded-[13.6px] border border-[rgba(79,96,250,0.08)] p-6 md:col-span-2 md:p-8" style={{ background: `radial-gradient(circle, rgba(200,210,230,0.06) 2px, transparent 2px), #050A29`, backgroundSize: '24px 24px' }}>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Lead Automation
            </h3>
            <p className="mb-4 text-sm text-[#73799B]">
              Form web → lead Odoo → notifica al commerciale. Trigger automatici
              su ogni cambio stage, variabili dinamiche dai dati lead, retry e
              logging nel chatter.
            </p>
            <BenefitMockup variant="crm" />
          </MotionChild>

          <MotionChild className="card-hover overflow-hidden rounded-[13.6px] border border-[rgba(79,96,250,0.08)] p-6 md:col-span-2 md:p-8" style={{ background: `radial-gradient(circle, rgba(200,210,230,0.06) 2px, transparent 2px), #050A29`, backgroundSize: '24px 24px' }}>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Marketing Automation
            </h3>
            <p className="mb-4 text-sm text-[#73799B]">
              Workflow multi-step basati sullo stato del lead: benvenuto su
              qualifica, reminder su inattività, escalation automatica al
              manager. WhatsApp + Email + SMS.
            </p>
            <BenefitMockup variant="marketing-auto-benefit" />
          </MotionChild>

          <MotionChild className="card-hover overflow-hidden rounded-[13.6px] border border-[rgba(79,96,250,0.08)] p-6 md:col-span-3 md:p-8" style={{ background: `radial-gradient(circle, rgba(200,210,230,0.06) 2px, transparent 2px), #050A29`, backgroundSize: '24px 24px' }}>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Assegnazione Team
            </h3>
            <p className="mb-4 text-sm text-[#73799B]">
              Dashboard di assegnazione per il team leader: vedi lead e
              conversazioni in ingresso, assegna con un click al commerciale
              giusto. Notifiche istantanee, ruoli granulari.
            </p>
            <BenefitMockup variant="assignment-benefit" />
          </MotionChild>

          <MotionChild className="card-hover overflow-hidden rounded-[13.6px] border border-[rgba(79,96,250,0.08)] p-6 md:col-span-3 md:p-8" style={{ background: `radial-gradient(circle, rgba(200,210,230,0.06) 2px, transparent 2px), #050A29`, backgroundSize: '24px 24px' }}>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Sicurezza Enterprise-Grade
            </h3>
            <p className="mb-4 text-sm text-[#73799B]">
              Sistema a 3 livelli (User/Assignator/Admin), webhook protetti con UUID,
              whitelist metodi, licenza LGPL-3.
            </p>
            <BenefitMockup variant="security" />
          </MotionChild>
        </MotionStagger>

        <MotionWrapper delay={0.2} className="mt-8 text-center">
          <a
            href="#"
            className="inline-block rounded-full border border-[rgba(79,96,250,0.3)] px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#4F60FA] hover:bg-[#4F60FA]/10"
          >
            Scopri Tutti i Vantaggi
          </a>
        </MotionWrapper>
      </div>
    </section>
  );
}
