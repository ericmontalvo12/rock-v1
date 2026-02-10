import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function About() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-16 sm:pb-24">
        {/* Hero Section */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Why We Built This
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Rock Mountain Performance exists because we couldn't find testosterone support formulas built for men who actually research what they're putting in their bodies.
            </p>
          </div>
        </section>

        {/* The Problem We Saw */}
        <section className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6 text-center">
            The Problem We Saw
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Most testosterone supplements are either underdosed to save costs or hidden behind proprietary blends to avoid scrutiny. The market is full of products that look credible on the surface but fall apart when you check the doses against the actual research.
            </p>
            <p>
              We've seen it personally — trying products that promised results, only to realize the active ingredients were at 20% of the clinically studied dose. Or worse, bundled with stimulants to create the illusion of "working" while doing nothing for actual hormone optimization.
            </p>
            <p>
              For men who understand the mechanism — who know that free testosterone availability matters more than total testosterone, who've read about SHBG and cortisol's role in suppression — most supplements feel insulting. They're built for buyers who don't ask questions, not for men who do their homework.
            </p>
          </div>
        </section>

        {/* The Alternative Didn't Make Sense Either */}
        <section className="bg-surface py-16 sm:py-20 mb-16">
          <div className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6 text-center">
              The Alternative Didn't Make Sense Either
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                The other path men face is TRT — testosterone replacement therapy. It works. But it's often presented as the only real solution, which felt incomplete.
              </p>
              <p>
                TRT is a commitment, often for life. It shuts down natural production, requires ongoing management, and comes with tradeoffs around fertility, side effects, and dependency. For men who still have natural testosterone production and haven't optimized the fundamentals, jumping straight to injections felt premature.
              </p>
              <p>
                We wanted to create what should exist in between: a formula you try <span className="text-text-primary font-medium">before</span> TRT, not after you've already committed to it.
              </p>
              <p>
                Something that addresses the mechanisms most supplements ignore. Something transparent enough that you can verify every claim. Something dosed to match what actually works in human studies, not what fits a marketing budget.
              </p>
            </div>
          </div>
        </section>

        {/* How We Approach Formulation */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-10 text-center">
            How We Approach Formulation
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Research First</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Every ingredient is chosen because peer-reviewed studies link it to the outcome we're targeting. If the research isn't there, neither is the ingredient.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Clinical Doses</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                We use the doses that were proven effective in human trials. Not inflated for marketing claims. Not reduced to cut costs. What worked in the study is what goes in the bottle.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Full Disclosure</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                No proprietary blends. No hiding behind "complexes." Every ingredient and its exact amount is listed on the label. You can verify it against the research yourself.
              </p>
            </div>
          </div>
          <div className="mt-10 max-w-[700px] mx-auto">
            <p className="text-text-secondary leading-relaxed text-center">
              We're not interested in creating products that work through placebo or stimulant effects. We're interested in formulas that address the actual mechanisms — free testosterone availability, SHBG reduction, cortisol management, nutrient deficiencies.
            </p>
            <p className="text-text-secondary leading-relaxed text-center mt-4">
              The kind of optimization that takes weeks to notice but compounds over months. The kind you can measure in blood work, not just in how you feel on day one.
            </p>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="bg-surface py-16 sm:py-20 mb-16">
          <div className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">
              Who This Is For
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6 text-center">
              Rock Mountain Performance was built for men who:
            </p>
            <ul className="space-y-3 max-w-lg mx-auto mb-8">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-text-secondary">Have tried generic test boosters and saw nothing happen</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-text-secondary">Understand that free testosterone matters more than total testosterone</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-text-secondary">Want to optimize naturally before considering TRT</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-text-secondary">Value transparency and clinical dosing over marketing hype</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-text-secondary">Are willing to commit to consistency rather than chasing quick fixes</span>
              </li>
            </ul>
            <p className="text-text-muted text-sm text-center">
              If you're looking for a stimulant buzz or overnight transformation, this isn't it. If you're looking for intelligent optimization that respects both the science and your ability to understand it, we built this for you.
            </p>
          </div>
        </section>

        {/* What We're Not */}
        <section className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6 text-center">
            What We're Not
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              We're not a lifestyle brand selling a version of masculinity. We're not influencer-founded or built on hype cycles. We're not claiming to replace TRT or promising results that would require us to lie about what supplements can do.
            </p>
            <p>
              We're coaches who got tired of recommending supplements we didn't actually trust. So we built what we wanted to exist: formulas that earn their place in your routine through results, not through marketing volume.
            </p>
            <p className="text-text-primary font-medium">
              If it works, you'll know because you feel better and your labs improve. If it doesn't work after 60 days, we'll refund you. That's the deal.
            </p>
          </div>
        </section>

        {/* Founders Section */}
        <section className="bg-surface py-16 sm:py-20 mb-16">
          <div className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6">
              <p className="text-text-primary font-semibold text-xl">
                Nikolas Hrach & Eric Montalvo
              </p>
              <p className="text-primary text-sm font-medium">
                Co-Founders, Rock Mountain Performance
              </p>
            </div>
            <p className="text-text-secondary leading-relaxed">
              We're not scientists. We're coaches who work with men who want to perform at a high level without shortcuts or dependency. Rock Mountain Performance is what we built when we couldn't find supplements that matched that standard.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/product">
            <Button size="lg" className="h-12 px-8 text-base">
              View Peak Performance
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
