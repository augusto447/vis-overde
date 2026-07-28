import { About } from "@/components/about";
import { Benefits } from "@/components/benifits";

import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/howItWorks";
import { Impact } from "@/components/impact";
import { Testimonials } from "@/components/tesmonials";

export function Home() {
  return (
    <div>
      <main>
        <header>
          <Header />
        </header>
        <Hero />
        <About />
        <HowItWorks />

        <Benefits />
        <Impact />
        <Testimonials />
        <Cta />
        <Footer />
      </main>
    </div>
  );
}
