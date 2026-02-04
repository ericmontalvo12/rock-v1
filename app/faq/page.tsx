import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const faqs = [
  {
    question: "What is Rock Mountain Peak Performance?",
    answer:
      "Rock Mountain Peak Performance is a daily testosterone support formula designed to support strength, recovery, and overall vitality. It's built with ingredients supported by human studies, fully transparent dosing, and no proprietary blends.",
  },
  {
    question: "Who is this product for?",
    answer: `This product is best suited for:

- Men who train regularly or stay physically active
- Men focused on long-term performance and recovery
- Men looking to support healthy testosterone levels naturally`,
  },
  {
    question: "How do I take Rock Mountain Peak Performance?",
    answer:
      "Take 3 capsules daily with food. For best results, use consistently for at least 30 days, alongside proper training, sleep, and nutrition.",
  },
  {
    question: "How long does it take to notice results?",
    answer:
      "Results vary by individual. Many users report noticing improvements in energy, recovery, or training drive within 2–4 weeks of consistent use. Full evaluation is best made after 30 days.",
  },
  {
    question: "Is this safe for daily use?",
    answer:
      "Peak Performance is formulated with well-researched ingredients at evidence-based doses intended for daily use. Always follow the recommended serving size.\n\nIf you have a medical condition or take prescription medications, consult your physician before use.",
  },
  {
    question: "Can I take this if I'm on medication or have a medical condition?",
    answer:
      "If you are taking prescription medications or have a medical condition, consult your healthcare provider before using this product. Dietary supplements may interact with certain medications.",
  },
  {
    question: "Is Peak Performance backed by a guarantee?",
    answer:
      "Yes. Rock Mountain Peak Performance is backed by a 30-day money-back guarantee. If you're not satisfied, contact us within 30 days of purchase for a refund.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const renderAnswer = () => {
    const lines = answer.split("\n");
    const hasBullets = lines.some((line) => line.trim().startsWith("- "));

    if (hasBullets) {
      const parts: JSX.Element[] = [];
      let currentText = "";

      lines.forEach((line, i) => {
        if (line.trim().startsWith("- ")) {
          if (currentText) {
            parts.push(
              <p key={`text-${i}`} className="text-text-secondary leading-relaxed mb-3">
                {currentText.trim()}
              </p>
            );
            currentText = "";
          }
          if (parts.length > 0 && parts[parts.length - 1].type !== "ul") {
            parts.push(<ul key={`ul-${i}`} className="space-y-2 text-text-secondary leading-relaxed list-disc pl-5 mb-3"></ul>);
          }
          if (parts.length === 0) {
            parts.push(<ul key={`ul-${i}`} className="space-y-2 text-text-secondary leading-relaxed list-disc pl-5 mb-3"></ul>);
          }
          const lastUl = parts[parts.length - 1];
          if (lastUl.type === "ul") {
            parts[parts.length - 1] = (
              <ul key={lastUl.key} className="space-y-2 text-text-secondary leading-relaxed list-disc pl-5 mb-3">
                {lastUl.props.children}
                <li key={`li-${i}`}>{line.trim().substring(2)}</li>
              </ul>
            );
          }
        } else if (line.trim()) {
          currentText += (currentText ? "\n" : "") + line;
        } else if (currentText) {
          parts.push(
            <p key={`text-${i}`} className="text-text-secondary leading-relaxed mb-3">
              {currentText.trim()}
            </p>
          );
          currentText = "";
        }
      });

      if (currentText) {
        parts.push(
          <p key="text-final" className="text-text-secondary leading-relaxed">
            {currentText.trim()}
          </p>
        );
      }

      return <div>{parts}</div>;
    }

    return (
      <p className="text-text-secondary leading-relaxed whitespace-pre-line">
        {answer}
      </p>
    );
  };

  return (
    <div className="pt-10 first:pt-0">
      <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-4">
        {question}
      </h3>
      {renderAnswer()}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full">
              FAQ
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Everything you need to know about Rock Mountain Peak Performance.
            </p>
          </div>

          <div className="mx-auto max-w-[720px] rounded-2xl bg-surface border border-border/50 shadow-sm p-8 sm:p-10">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mx-auto max-w-[720px] mt-16 text-center p-8 sm:p-10 rounded-2xl bg-surface border border-border/50 shadow-sm">
            <h2 className="text-xl font-semibold text-text-primary mb-2">
              Still have questions?
            </h2>
            <p className="text-text-secondary mb-6">
              Email us anytime — we respond within 24 hours.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-background font-medium hover:bg-primary-hover transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
