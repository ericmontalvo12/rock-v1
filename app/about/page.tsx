import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-16 sm:pb-24">
        {/* Hero Section */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Built on Evidence
              <br />
              Designed for Performance
            </h1>
            <p className="text-text-secondary text-lg">
              Supplements built with ingredients supported by human studies at fully disclosed doses.
            </p>
          </div>
        </section>

        {/* Why We Exist Section */}
        <section className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
            Why We Exist
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Most supplements are underdosed or hidden behind proprietary blends.
          </p>
          <p className="text-text-secondary leading-relaxed">
            We build formulas with research-backed ingredients, clear labeling, and measurable intent.
          </p>
        </section>

        {/* Our Standard Section */}
        <section className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
            Our Standard
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Rock Mountain Performance was created by certified coaches who care about outcomes, not trends.
          </p>
          <p className="text-text-secondary leading-relaxed mb-8">
            Every product is designed to earn its place in your routine through quality, transparency, and consistency.
          </p>
          <div>
            <p className="text-text-primary font-semibold text-lg">
              Nikolas Hrach & Eric Montalvo
            </p>
            <p className="text-primary text-sm">
              Co-Founders, Rock Mountain Performance
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
