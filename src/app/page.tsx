import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Features } from "@/components/sections/features";
import { CrmWorkflow } from "@/components/sections/crm-workflow";
import { MidCta } from "@/components/sections/mid-cta";
import { BuiltForYou } from "@/components/sections/built-for-you";
import { Benefits } from "@/components/sections/benefits";
import { Indicators } from "@/components/sections/indicators";
import { Testimonials } from "@/components/sections/testimonials";
import { HowToUse } from "@/components/sections/how-to-use";
import { ContactForm } from "@/components/sections/contact-form";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { PageBlooms } from "@/components/ui/page-blooms";

export default function Home() {
  return (
    <div className="relative">
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
        <Indicators />
        <Testimonials />
        <HowToUse />
        <ContactForm />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
