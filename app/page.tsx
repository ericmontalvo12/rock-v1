import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { EducationBlock } from "@/components/sections/EducationBlock";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <EducationBlock />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
