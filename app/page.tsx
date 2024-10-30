import ApproachSection from "@/components/landing/approach-section";
import IntroSection from "@/components/landing/intro-section";
import PromblemSection from "@/components/landing/problem-section";
import ServicesSection from "@/components/landing/service-section";
import CTASection from "@/components/landing/cta-section";

// import Image from "next/image";
// import Link from "next/link";
// import "@/lib/db";

export const metadata = {
  title: "홈 | Outclass Land",
};

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center mt-[70px] min-h-screen">
      <IntroSection />
      <PromblemSection />
      <ServicesSection />
      <ApproachSection />
      <CTASection />
    </div>
  );
}

//bg-gradient-to-b from-[#fffae0] to-white
