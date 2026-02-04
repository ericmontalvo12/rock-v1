import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-16 sm:pb-24">
        {/* Hero Section */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Evidence-First Supplements
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Ingredients dosed based on published research.
              <br className="hidden sm:block" />
              Fully disclosed labels. No proprietary blends.
            </p>
          </div>
        </section>

        {/* Why We Exist Section */}
        <section className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
            Why We Exist
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Most testosterone supplements are underdosed to save costs or hidden behind proprietary blends to avoid scrutiny.
          </p>
          <p className="text-text-secondary leading-relaxed">
            We wanted formulas you could trust, with transparent labeling and doses aligned with human studies.
          </p>
        </section>

        {/* Our Approach Section */}
        <section className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
            Our Approach
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            We start with research, not marketing trends. Every ingredient is chosen because studies link it to the outcome we're targeting.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            Doses match what was used in those studies. Not inflated for claims or reduced to cut costs.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Labels are fully disclosed. No guessing, no filler, no shortcuts.
          </p>
        </section>

        {/* Founders Section */}
        <section className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <p className="text-text-secondary leading-relaxed mb-8">
            Rock Mountain Performance was created by coaches who believe supplements should earn their place in your routine through results, not hype.
          </p>
          <div>
            <p className="text-text-primary font-semibold text-lg">
              Nikolas Hrach & Eric Montalvo
            </p>
            <p className="text-primary text-sm">
              Co-Founders
            </p>
          </div>
        </section>

        {/* Soft CTA */}
        <section className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/product"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover text-sm font-medium transition-colors"
          >
            View Peak Performance
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
