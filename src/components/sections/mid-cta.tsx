import Image from "next/image";
import { MotionWrapper } from "../ui/motion-wrapper";
import { getTranslations } from "next-intl/server";

export async function MidCta() {
  const t = await getTranslations("midCta");

  return (
    <section className="relative px-6 py-20">
      <Image
        src="/images/net-5.png"
        alt=""
        width={250}
        height={250}
        className="pointer-events-none absolute top-0 right-0 w-[250px] opacity-15"
      />
      <MotionWrapper className="relative z-10 mx-auto max-w-[800px] text-center">
        <p className="text-lg leading-relaxed text-white md:text-xl">
          {t("text")}
        </p>
        <a
          href="#contatti"
          className="btn-glow mt-8 inline-block rounded-full bg-[#DBE3FF] px-8 py-3 text-sm font-semibold text-[#4F60FA] transition-all hover:bg-white"
        >
          {t("cta")}
        </a>
      </MotionWrapper>
    </section>
  );
}
