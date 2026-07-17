import Link from "next/link";
import { acts, caseStudies } from "@/lib/content";
import CaseStudyCard from "@/components/CaseStudyCard";
import Reveal from "@/components/Reveal";
import TrustedBy from "@/components/TrustedBy";
import ImpactStats from "@/components/ImpactStats";
import TestimonialsRail from "@/components/TestimonialsRail";
import HeroBackdrop from "@/components/HeroBackdrop";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden py-20 md:py-24 min-h-[calc(100vh-5rem)] flex flex-col justify-center bg-gradient-to-b from-white to-background-soft">
        <HeroBackdrop />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <Reveal variant="left" className="max-w-4xl flex flex-col items-start">
<h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary font-normal tracking-tight leading-[1.1] md:leading-[1.05]">
              Your Cybersecurity <br />
              <span className="italic text-accent">Growth Partner</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-text-muted max-w-2xl font-light leading-relaxed mt-8">
              We help cybersecurity companies transform their websites into{" "}
              <strong className="font-medium text-primary">growth engines</strong> through
              better user experience, technical excellence, AI-ready SEO, and{" "}
              <strong className="font-medium text-primary">predictable lead generation</strong>.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white hover:bg-primary-hover font-medium rounded-full shadow-sm transition-all duration-200 text-center text-base"
              >
                Let&apos;s Start Improving This Today
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-10 py-5 text-primary hover:text-accent font-medium rounded-full border border-border bg-white hover:bg-background-soft transition-all duration-200 text-center text-base"
              >
                Explore Our Model
              </Link>
            </div>
          </Reveal>

          <Reveal
            variant="up"
            delay={200}
            className="mt-20 lg:mt-24 lg:ml-auto lg:w-fit"
          >
            <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:flex lg:items-start lg:gap-x-12 lg:justify-end border-t border-border/70 pt-8 lg:pt-6">
              {[
                { value: "1,000+", label: "Ideas Pitched" },
                { value: "50,000+", label: "Hours Spent" },
                { value: "30+", label: "Brands Transformed" },
                { value: "230%", label: "SEO Growth in 3 Months" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary font-normal leading-none tabular-nums">
                    {stat.value}
                  </dd>
                  <span className="mt-3 text-[11px] uppercase tracking-widest text-text-muted font-mono whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* TRUSTED BY */}
      <TrustedBy />

      {/* FOUR ACTS PREVIEW */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 border-b border-border pb-8">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono">
                Capabilities
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-primary font-normal mt-2">
                The Four Growth Acts
              </h2>
            </div>
            <div className="lg:col-span-8 flex items-end justify-end gap-6 flex-wrap">
              <Link
                href="/services"
                className="text-xs font-semibold uppercase tracking-widest text-accent border-b border-accent pb-1 hover:text-primary hover:border-primary transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {acts.map((act, idx) => (
              <Reveal key={act.slug} delay={idx * 100}>
              <Link
                href={`/services/${act.slug}`}
                className="h-full p-6 border border-border rounded-lg bg-background-soft/40 hover:bg-background-soft hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-mono text-accent font-semibold">{act.num}</span>
                  <h3 className="font-serif text-2xl text-primary font-medium mt-3 group-hover:text-accent transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-sm text-text-muted font-light mt-3 leading-relaxed">
                    {act.subtitle}
                  </p>
                </div>
                <span className="text-xs uppercase font-semibold text-accent tracking-widest mt-8 inline-flex items-center gap-2">
                  Learn more <span aria-hidden>&rarr;</span>
                </span>
              </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY TEASER */}
      <section className="py-24 md:py-32 bg-background-soft">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-border pb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono">
                Case Studies
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-primary font-normal mt-2">
                Recent Work
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="text-xs font-semibold uppercase tracking-widest text-accent border-b border-accent pb-1 hover:text-primary hover:border-primary transition-all duration-200 mt-4 md:mt-0"
            >
              View All Case Studies
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.slice(0, 3).map((study, idx) => (
              <Reveal key={study.slug} delay={idx * 120} className="h-full">
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <ImpactStats />

      {/* TESTIMONIALS */}
      <TestimonialsRail />

      {/* CTA */}
      <section className="py-24 md:py-32 bg-background-soft">
        <Reveal className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono">
            Initiation
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary font-normal leading-tight mt-3">
            Every cybersecurity company has opportunities it isn&apos;t fully capturing yet.
          </h2>
          <p className="text-text-muted text-base md:text-lg font-light leading-relaxed mt-6 max-w-2xl mx-auto">
            Sometimes it&apos;s a website that isn&apos;t earning trust. Sometimes it&apos;s
            technology that isn&apos;t keeping pace. Sometimes it&apos;s visibility that never
            becomes opportunity. Whatever the reason,{" "}
            <strong className="font-medium text-primary">it can be improved.</strong> Let&apos;s
            start there.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white hover:bg-primary-hover font-medium rounded-full shadow-sm transition-all duration-200"
            >
              Start The Conversation
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
