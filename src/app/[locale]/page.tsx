import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Features } from "@/components/sections/features";
import { CrmWorkflow } from "@/components/sections/crm-workflow";
import { MidCta } from "@/components/sections/mid-cta";
import { BuiltForYou } from "@/components/sections/built-for-you";
import { Benefits } from "@/components/sections/benefits";
import { Testimonials } from "@/components/sections/use-cases";
import { HowToUse } from "@/components/sections/how-to-use";
import { ContactForm } from "@/components/sections/contact-form";
import { Footer } from "@/components/sections/footer";
import { PageBlooms } from "@/components/ui/page-blooms";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <PageBlooms />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <CrmWorkflow />
        <MidCta />
        <BuiltForYou />
        <Benefits />
        <Testimonials />
        <HowToUse />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
