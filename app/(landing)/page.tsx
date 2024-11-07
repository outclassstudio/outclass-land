import ApproachSection from "@/components/landing/approach-section";
import HeroSection from "@/components/landing/hero-section";
import PromblemSection from "@/components/landing/problem-section";
import ServicesSection from "@/components/landing/service-section";
import CTASection from "@/components/landing/cta-section";

export const metadata = {
  title: "홈 | Outclass Land",
};

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center mt-[70px] min-h-screen">
      <HeroSection />
      <PromblemSection />
      <ServicesSection />
      <ApproachSection />
      <CTASection />
    </div>
  );
}
