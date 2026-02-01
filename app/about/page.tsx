import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-16 sm:pb-24">
        {/* Hero Section */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full">
              Our Story
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Born from frustration, forged for results
            </h1>
          </div>
        </section>

        {/* The Roots Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
                The Roots
              </h2>
              <blockquote className="text-lg text-text-secondary leading-relaxed mb-8 border-l-4 border-primary pl-6 italic">
                "In 2021, we hit a wall. As fitness enthusiasts and certified
                personal trainers, we were constantly searching for supplements
                that actually delivered on their promises. Instead, we found
                underdosed products filled with flashy claims but little
                evidence. We knew there had to be a better way.
                <br />
                <br />
                So, we decided to make it ourselves."
              </blockquote>
              <div>
                <p className="text-text-primary font-semibold text-lg">
                  Nikolas Hrach & Eric Montalvo
                </p>
                <p className="text-primary text-sm">
                  Co-Founders, Rock Mountain Performance
                </p>
              </div>
            </div>
            <div>
              {/* TODO: Replace with actual founders image */}
              <div className="aspect-[4/3] rounded-2xl bg-surface border border-border overflow-hidden">
                <Image
                  src="https://placehold.co/800x600/141414/2d94ff?text=Founders+Image"
                  alt="Nikolas Hrach and Eric Montalvo - Co-Founders"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Voice Section */}
        <section className="bg-surface/50 py-20 mb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
                Our Voice
              </h2>
              <p className="text-xl text-primary font-semibold">
                Driven by Science, Crafted for Performance
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-text-secondary leading-relaxed text-center text-lg">
                Our journey began in the gym and in the lab. We weren't
                satisfied with guesswork or hype. We wanted supplements backed
                by real research, with clinically dosed ingredients that
                actually work. Every product we make is designed with the same
                mindset we bring to training: precision, consistency, and
                results.
              </p>
            </div>
          </div>
        </section>

        {/* Ingredients Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              {/* TODO: Replace with actual ingredients/research image */}
              <div className="aspect-square rounded-2xl bg-surface border border-border overflow-hidden">
                <Image
                  src="https://placehold.co/600x600/141414/2d94ff?text=Ingredients"
                  alt="Premium Ingredients"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
                A Relentless Search for the Best Ingredients
              </h2>
              <p className="text-text-secondary leading-relaxed text-lg">
                We scoured the globe and combed through the latest scientific
                research to find ingredients with proven effects on performance
                and hormonal health. From Fenugreek Extract for endurance to
                Ashwagandha for stress and strength, each component was selected
                for its real-world impact, not just marketing appeal.
              </p>
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
                Clinically Dosed, Transparently Crafted
              </h2>
              <p className="text-text-secondary leading-relaxed text-lg">
                Our Test Support formula is more than a supplement. It is the
                culmination of years of study, testing, and personal experience.
                Every ingredient is present at a clinically effective dose, with
                full transparency on sourcing and quality. We are committed to
                clean, sustainable formulations that you can trust, from Zinc
                Citrate to Boron Citrate, Tongkat Ali, and Magnesium
                Bisglycinate.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              {/* TODO: Replace with actual product/lab image */}
              <div className="aspect-square rounded-2xl bg-surface border border-border overflow-hidden">
                <Image
                  src="https://placehold.co/600x600/141414/2d94ff?text=Lab+Testing"
                  alt="Quality Testing"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-surface/50 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
              Performance Without Compromise
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              At Rock Mountain Performance, our mission goes beyond efficacy. We
              believe in supplements that are sustainable, clean, and backed by
              science because you shouldn't have to choose between results and
              integrity.
            </p>
            <div className="inline-block p-6 rounded-2xl bg-background border border-primary/30">
              <p className="text-xl text-primary font-semibold">
                This is Rock Mountain Performance: a brand born from frustration,
                built for performance, and designed to deliver results you can
                feel.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
