import { InboxMockup } from "../ui/mockups";
import { SectionSubtitle } from "../ui/section-subtitle";
import { MotionWrapper } from "../ui/motion-wrapper";

export function Hero() {
  return (
    <section 
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16"
    >
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-50"
        style={{ 
          backgroundImage: 'url(/images/bg-element-2.svg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat' 
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <MotionWrapper delay={0} className="flex flex-col items-center">
          <SectionSubtitle text="Integrazione Nativa Odoo 18" />
        </MotionWrapper>

        <MotionWrapper delay={0.1} className="flex flex-col items-center">
          <h1 className="mt-6 max-w-[800px] text-center text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[64px] lg:leading-[1.15]">
            Tutti i Tuoi Canali,{" "}
            <span className="lg:whitespace-nowrap">Un&apos;Unica Inbox in Odoo</span>
          </h1>

          <p className="mt-6 max-w-[600px] text-center text-base text-[#73799B] md:text-lg">
            WhatsApp, Instagram, Messenger, Email, SMS e Telegram — gestiti direttamente dal tuo Odoo
          </p>
        </MotionWrapper>

        <MotionWrapper delay={0.2} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pricing"
            className="btn-glow rounded-full bg-[#DBE3FF] px-8 py-3 text-sm font-semibold text-[#4F60FA] transition-all hover:bg-white"
          >
            Richiedi una Demo
          </a>
          <a
            href="#features"
            className="rounded-full border border-[rgba(79,96,250,0.3)] px-8 py-3 text-sm font-semibold text-white transition-all hover:border-[#4F60FA] hover:bg-[#4F60FA]/10"
          >
            Scopri i Moduli
          </a>
        </MotionWrapper>

        <MotionWrapper delay={0.4} className="relative mt-12 w-full max-w-[1000px]">
          <InboxMockup />
        </MotionWrapper>
      </div>
    </section>
  );
}
