import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Features } from "@/components/sections/features";
import { MidCta } from "@/components/sections/mid-cta";
import { BuiltForYou } from "@/components/sections/built-for-you";
import { Benefits } from "@/components/sections/benefits";
import { Indicators } from "@/components/sections/indicators";
import { Testimonials } from "@/components/sections/testimonials";
import { HowToUse } from "@/components/sections/how-to-use";
import { ContactForm } from "@/components/sections/contact-form";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { GradientSeparator } from "@/components/ui/gradient-separator";
import { PageBlooms } from "@/components/ui/page-blooms";

export default function Home() {
  return (
    <div className="relative">
      <PageBlooms />
      <Navbar />
      <main>
        <Hero />
        <GradientSeparator />
        <About />
        <GradientSeparator />
        <Features />
        <GradientSeparator />
        <MidCta />
        <GradientSeparator />
        <BuiltForYou />
        <GradientSeparator />
        <Benefits />
        <GradientSeparator />
        <Indicators />
        <GradientSeparator />
        <Testimonials />
        <GradientSeparator />
        <HowToUse />
        <GradientSeparator />
        <ContactForm />
        <GradientSeparator />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
