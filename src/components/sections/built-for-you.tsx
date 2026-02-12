"use client";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { ModuleMockup } from "../ui/mockups";
import { SectionSubtitle } from "../ui/section-subtitle";
import { MotionWrapper } from "../ui/motion-wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const modules = [
  { title: "SuperChat Base", description: "Il cuore del sistema: API, webhook, gestione 6 canali e coda eventi real-time" },
  { title: "Chatter Interface", description: "Interfaccia chat a 3 colonne con 17 componenti OWL reattivi e ricerca full-text" },
  { title: "Chatter Extension", description: "Pulsante WhatsApp in qualsiasi modulo Odoo con mail.thread — rispondi dal preventivo, dal ticket, dall'ordine" },
  { title: "CRM Integration", description: "Creazione lead automatica da form web, trigger template su cambio stage, variabili dinamiche dai dati lead, logging nel chatter" },
  { title: "Sale Integration", description: "Invio veloce preventivi via WhatsApp + Email con link portale e conferma automatica" },
  { title: "Campaign", description: "Campagne WhatsApp massive con scheduling, rate limiting, progress tracking e report delivery" },
  { title: "Marketing Automation", description: "Workflow multi-step nel Marketing Automation di Odoo Enterprise: WhatsApp + Email + SMS con branching su stato lead e inattività" },
];

export function BuiltForYou() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="modules"
      className="built-for-you-section relative px-6 pt-24 pb-24"
    >
      <div 
        className="pointer-events-none absolute inset-0 -right-[200px] -left-[200px] z-0 opacity-40"
        style={{
          backgroundImage: "url(/images/elemento-bg.svg)",
          backgroundSize: "80%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <MotionWrapper className="flex flex-col items-center text-center">
          <SectionSubtitle text="I Moduli" />
          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            7 Moduli, Un Ecosistema
            <br />
            Completo
          </h2>
          <p className="mt-4 max-w-[600px] text-base text-[#73799B]">
            Ogni modulo aggiunge una capacità specifica. Installa solo ciò che ti serve.
          </p>
          <a
            href="#contatti"
            className="mt-6 inline-block rounded-full border border-[rgba(79,96,250,0.3)] px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#4F60FA] hover:bg-[#4F60FA]/10"
          >
            Contattaci
          </a>
        </MotionWrapper>

        <MotionWrapper delay={0.2} className="mt-[84px]">
          <Swiper
            modules={[Autoplay, Pagination]}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ el: ".built-for-you-pagination", clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="built-for-you-swiper"
          >
            {modules.map((mod, i) => (
              <SwiperSlide key={`${mod.title}-${i}`}>
                <div
                  className="card-hover overflow-hidden rounded-3xl border border-[rgba(79,96,250,0.08)]"
                  style={{
                    background: `radial-gradient(circle, rgba(200,210,230,0.06) 2px, transparent 2px), #050A29`,
                    backgroundSize: '24px 24px',
                  }}
                >
                  <ModuleMockup moduleIndex={i} />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white">{mod.title}</h3>
                    <p className="mt-2 text-sm text-[#73799B]">{mod.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </MotionWrapper>
      </div>

      <div className="relative z-10 mt-8 flex items-center justify-center gap-6">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(79,96,250,0.3)] bg-[rgba(5,10,41,0.8)] backdrop-blur-sm transition-all hover:border-[#4F60FA] hover:bg-[#4F60FA]/10"
          aria-label="Slide precedente"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F60FA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="built-for-you-pagination flex items-center gap-2" />

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(79,96,250,0.3)] bg-[rgba(5,10,41,0.8)] backdrop-blur-sm transition-all hover:border-[#4F60FA] hover:bg-[#4F60FA]/10"
          aria-label="Slide successiva"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F60FA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
