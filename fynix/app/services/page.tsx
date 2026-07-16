import type { Metadata } from "next";
import Link from "next/link";
import ActsStack from "@/components/ActsStack";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import EngagementModels from "@/components/EngagementModels";
import { acts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Fynix delivers UI/UX, custom development, technical SEO/AEO, and B2B lead generation for cybersecurity companies, delivered as one integrated growth system.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-12 md:pt-20 pb-14 md:pb-20 bg-gradient-to-b from-white to-background-soft">
        <Reveal className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono">
            Capabilities
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-primary font-normal mt-3 leading-tight max-w-4xl">
            The Four Growth Acts. One connected system.
          </h1>
          <p className="text-text-muted text-base md:text-lg font-light leading-relaxed mt-6 max-w-2xl">
            A potential client forms a brand perception in seconds. Our four interconnected pillars
            build trust, guarantee speed, secure visibility, and generate pipeline.
          </p>
        </Reveal>
      </section>

      <section className="pt-4 md:pt-8 bg-background-soft">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ActsStack acts={acts} />
        </div>
      </section>

      <section className="pt-16 md:pt-24 pb-24 md:pb-32 bg-background-soft">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal className="mb-16">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono">
              Service Catalog
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary font-normal mt-2">
              Built for cybersecurity marketing and growth teams
            </h2>
            <p className="text-text-muted text-sm md:text-base font-light mt-3 max-w-xl">
              An exhaustive breakdown of services engineered specifically to solve cybersecurity
              sales, messaging, and scaling challenges.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {acts.map((act, idx) => (
              <Reveal key={act.slug} delay={idx * 100}>
                <div id={act.slug} className="scroll-mt-24 h-full">
                  <ServiceCard act={act} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EngagementModels />

      <section className="py-20 md:py-28 bg-white">
        <Reveal className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-primary font-normal leading-tight">
            Not sure which pillar to start with?
          </h2>
          <p className="text-text-muted text-base font-light mt-4">
            Most engagements begin with a discovery audit that maps the strongest lever for your
            pipeline. It&apos;s a conversation, not a pitch.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white hover:bg-primary-hover font-medium rounded-full shadow-sm transition-all duration-200"
            >
              Book a discovery call
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
