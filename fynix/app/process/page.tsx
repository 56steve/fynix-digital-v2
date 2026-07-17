import type { Metadata } from "next";
import Link from "next/link";
import ProcessTimeline from "@/components/ProcessTimeline";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Process",
  description:
    "A transparent, six-step engagement (Discover, Diagnose, Design, Build, Launch, Grow) so cybersecurity teams know exactly what happens after they say yes.",
  alternates: { canonical: "/process" },
};

const promises = [
  {
    title: "One team, end to end",
    body: "The people who discover the problem are the people who design and ship the fix. No agency handoffs, no context loss.",
  },
  {
    title: "Weekly demo cadence",
    body: "Every Friday you see progress in real interfaces, not slide decks. Feedback captured live, decisions logged.",
  },
  {
    title: "Outcome-anchored",
    body: "Every workstream defends itself against a pipeline outcome. If a deliverable doesn't move a number, we don't build it.",
  },
];

const inputs = [
  "Access to product, sales, and marketing stakeholders for interviews",
  "Analytics, CRM, and existing brand assets",
  "A single decision-maker on your side for approvals",
];

export default function ProcessPage() {
  return (
    <>
      <section className="pt-12 md:pt-20 pb-24 md:pb-32 bg-gradient-to-b from-white to-background-soft">
        <Reveal variant="left" className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono">
            Process
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-primary font-normal mt-3 leading-tight">
            You&apos;ll always know where the work is.
          </h1>
          <p className="text-text-muted text-base md:text-lg font-light leading-relaxed mt-6 max-w-2xl">
            A ten-week engagement, broken into six visible steps. Each one has a duration, an owner,
            a deliverable, and a decision at the end, so{" "}
            <strong className="font-medium text-primary">you never have to guess</strong> what is
            happening or when.
          </p>
        </Reveal>
      </section>

      <section
        aria-label="Working principles"
        className="py-20 md:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 100}>
              <div className="h-full">
                <span
                  aria-hidden
                  className="inline-flex h-8 w-8 rounded-full bg-accent/10 text-accent items-center justify-center"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <h3 className="font-serif text-xl text-primary font-medium mt-4">{p.title}</h3>
                <p className="text-sm text-text-muted font-light leading-relaxed mt-3">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        aria-label="Timeline"
        className="py-24 md:py-32 bg-background-soft"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Reveal className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono">
              Six steps · Ten weeks
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary font-normal mt-3 leading-tight">
              From first conversation to a growth system that keeps compounding.
            </h2>
          </Reveal>

          <ProcessTimeline />
        </div>
      </section>

      <section
        aria-label="What we need from you"
        className="py-24 md:py-32 bg-white"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <Reveal variant="left" className="md:col-span-5">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono">
              Your side of the table
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-primary font-normal mt-3 leading-tight">
              What we need from you to move fast.
            </h2>
          </Reveal>

          <Reveal variant="right" delay={120} className="md:col-span-7">
            <ul className="space-y-4 text-base text-primary font-light leading-relaxed">
              {inputs.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-border pb-4 last:border-b-0"
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background-soft">
        <Reveal className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-primary font-normal leading-tight">
            Ready to walk through this on a call?
          </h2>
          <p className="text-text-muted text-base font-light mt-4">
            A 30-minute discovery conversation. No deck, no pitch. Just your goals and what a good
            first step looks like.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white hover:bg-primary-hover font-medium rounded-full shadow-sm transition-all duration-200"
            >
              Book the conversation
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
