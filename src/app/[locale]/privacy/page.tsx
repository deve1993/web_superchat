import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PrivacyContent } from "./privacy-content";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacyPage" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: "/privacy",
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacyPage" });
  const legal = await getTranslations({ locale, namespace: "legal" });

  return (
    <div className="relative">
      <Navbar />
      <main className="pt-20">
        <section className="pt-12 pb-24">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              {t("title")}
            </h1>

            <p className="text-[#73799B] text-sm mb-12">
              {legal("lastUpdated")}
            </p>

            <PrivacyContent />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
