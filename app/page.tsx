import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Ingredients } from "@/components/sections/Ingredients";
import { Product } from "@/components/sections/Product";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Ingredients />
        <Product />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
