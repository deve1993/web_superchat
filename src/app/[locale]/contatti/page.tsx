import { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { ContactForm } from "@/components/sections/contact-form";
import { Footer } from "@/components/sections/footer";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contactPage" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/contatti",
    },
  };
}

export default function ContattiPage() {
  return (
    <div className="relative">
      <Navbar />
      <main className="pt-20">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
