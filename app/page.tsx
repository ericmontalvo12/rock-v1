import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhyMostFail } from "@/components/sections/WhyMostFail";
import { HowFormulaWorks } from "@/components/sections/HowFormulaWorks";
import { EducationBlock } from "@/components/sections/EducationBlock";
import { ResearchTrust } from "@/components/sections/ResearchTrust";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <WhyMostFail />
        <HowFormulaWorks />
        <EducationBlock />
        <ResearchTrust />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
