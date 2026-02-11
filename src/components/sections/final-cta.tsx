import Image from "next/image";
import { MotionWrapper } from "../ui/motion-wrapper";

export function FinalCta() {
  return (
    <section className="relative px-6 py-24">
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
        className="pointer-events-none absolute top-0 right-0 w-[250px] opacity-10"
      />
      <MotionWrapper className="relative z-10 mx-auto max-w-[800px] text-center">
        <h2 className="text-3xl font-bold leading-snug text-white md:text-4xl lg:text-5xl lg:leading-tight">
          Automatizza il Tuo CRM,
          <br />
          Chiudi Più Vendite
        </h2>
        <p className="mt-6 text-base text-[#73799B]">
          Lead automatici, notifiche intelligenti, assegnazione istantanea.
          Il tuo team commerciale vende, SuperChat fa il resto.
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
