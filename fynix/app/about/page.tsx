import type { Metadata } from "next";
import Link from "next/link";
import PhilosophyDiagram from "@/components/PhilosophyDiagram";
import Reveal from "@/components/Reveal";
import TeamGrid from "@/components/TeamGrid";

export const metadata: Metadata = {
  title: "Philosophy",
  description:
    "Most agencies deliver activities. Fynix builds systems for growth: a unified UX, engineering, SEO, and lead-generation pipeline for cybersecurity companies.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-12 md:pt-20 pb-24 md:pb-32 bg-gradient-to-b from-white to-background-soft">
        <Reveal className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono">
            Philosophy
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-primary font-normal mt-3 leading-tight">
            Most agencies deliver activities. <br />
            <span className="italic text-accent">
              We build systems for cybersecurity growth.
            </span>
          </h1>
          <p className="text-text-muted text-base md:text-lg font-light leading-relaxed mt-6">
            Activity without alignment is noise. True commercial momentum is achieved when design,
            technology, search placement, and outbound channels operate under a unified, continuous
            pipeline cycle.
          </p>
        </Reveal>
      </section>

      <section className="py-24 md:py-32 bg-background-soft">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <PhilosophyDiagram />
          </Reveal>

          <Reveal delay={140} className="mt-16 max-w-3xl mx-auto text-center">
            <p className="font-serif text-xl md:text-2xl text-primary font-normal leading-relaxed">
              UX creates trust. Development supports the experience. SEO/AEO creates visibility.
              Lead generation turns visibility into opportunity.
            </p>
            <p className="text-sm md:text-base uppercase tracking-widest text-accent font-mono font-semibold mt-6">
              When all four work together, marketing starts conversations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal>
            <span className="text-xs font-mono text-accent font-semibold">01</span>
            <h3 className="font-serif text-xl text-primary font-medium mt-3">Sector Focus</h3>
            <p className="text-sm text-text-muted font-light leading-relaxed mt-3">
              We work almost exclusively with cybersecurity companies. Our messaging, sales-cycle
              understanding, and buyer research are calibrated to that market.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <span className="text-xs font-mono text-accent font-semibold">02</span>
            <h3 className="font-serif text-xl text-primary font-medium mt-3">One Team</h3>
            <p className="text-sm text-text-muted font-light leading-relaxed mt-3">
              Design, engineering, SEO, and demand generation share a single roadmap. No agency
              handoffs, no context loss, no finger-pointing when metrics move.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <span className="text-xs font-mono text-accent font-semibold">03</span>
            <h3 className="font-serif text-xl text-primary font-medium mt-3">Outcome Contracts</h3>
            <p className="text-sm text-text-muted font-light leading-relaxed mt-3">
              We anchor every engagement to a pipeline outcome: qualified conversations, sourced
              opportunities, or booked revenue. Not the number of assets delivered.
            </p>
          </Reveal>
        </div>
      </section>

      <TeamGrid />

      <section className="py-20 md:py-28 bg-background-soft">
        <Reveal className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-primary font-normal leading-tight">
            Ready to see what this looks like for you?
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 text-primary hover:text-accent font-medium rounded-full border border-border bg-white hover:bg-background-soft transition-all duration-200"
            >
              See our case studies
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white hover:bg-primary-hover font-medium rounded-full shadow-sm transition-all duration-200"
            >
              Start a conversation
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
