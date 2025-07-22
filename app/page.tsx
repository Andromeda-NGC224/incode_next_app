import {
  FaqSection,
  FeatureSection,
  Footer,
  Header,
  HeroSection,
  LatestNewSection,
  LogoSection,
  ShowcaseSection,
  Stats,
  TestimonialsSection,
} from "@/components/landing";

import { openSans } from "@/lib/fonts";

export default function Page() {
  return (
    <main
      className={`flex min-h-screen flex-col bg-background ${openSans.className}`}
    >
      <Header />
      <HeroSection />
      <Stats />
      <FeatureSection />
      <div className="relative overflow-hidden">
        <ShowcaseSection />
        <TestimonialsSection />
      </div>
      <FaqSection />
      <LogoSection />
      <div className="relative overflow-hidden">
        <LatestNewSection />
        <Footer />
      </div>
    </main>
  );
}
