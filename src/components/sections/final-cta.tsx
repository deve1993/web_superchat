import { MotionWrapper } from "../ui/motion-wrapper";

export function FinalCta() {
  return (
    <section className="relative px-6 py-24">
      <img
        src="/images/net-6.png"
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 w-[300px] opacity-15"
      />
      <img
        src="/images/net-5.png"
        alt=""
        className="pointer-events-none absolute top-0 right-0 w-[250px] opacity-10"
      />
      <MotionWrapper className="relative z-10 mx-auto max-w-[800px] text-center">
        <h2 className="text-3xl font-bold leading-snug text-white md:text-4xl lg:text-5xl lg:leading-tight">
          Trasforma Odoo nel Tuo Hub
          <br />
          di Comunicazione Aziendale
        </h2>
        <p className="mt-6 text-base text-[#73799B]">
          7 moduli, 6 canali, un&apos;unica piattaforma. Inizia oggi a gestire
          tutte le conversazioni clienti da Odoo.
        </p>
        <a
          href="#contatti"
          className="btn-glow mt-8 inline-block rounded-full bg-[#DBE3FF] px-8 py-3 text-sm font-semibold text-[#4F60FA] transition-all hover:bg-white"
        >
          Richiedi una Demo Gratuita
        </a>
      </MotionWrapper>
    </section>
  );
}
