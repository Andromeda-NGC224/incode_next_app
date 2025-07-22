import dynamic from "next/dynamic";
import { openSans } from "@/lib/fonts";

const Header = dynamic(() => import("@/components/landing/Header/Header"));
const HeroSection = dynamic(
  () => import("@/components/landing/HeroSection/HeroSection")
);
const Stats = dynamic(() => import("@/components/landing/StatsSection/Stats"));
const FeatureSection = dynamic(
  () => import("@/components/landing/FeatureSection/FeatureSection")
);
const ShowcaseSection = dynamic(
  () => import("@/components/landing/ShowcaseSection/ShowcaseSection")
);
const TestimonialsSection = dynamic(
  () => import("@/components/landing/TestimonialsSection/TestimonialsSection")
);
const FaqSection = dynamic(
  () => import("@/components/landing/FaqSection/FaqSection")
);
const LogoSection = dynamic(
  () => import("@/components/landing/LogoSection/LogoSection")
);
const LatestNewSection = dynamic(
  () => import("@/components/landing/LatestNewSection/LatestNewSection")
);
const Footer = dynamic(() => import("@/components/landing/Footer/Footer"));

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
