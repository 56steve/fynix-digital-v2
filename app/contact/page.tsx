import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import PreFooterBackdrop from "@/components/PreFooterBackdrop";
import { faqs, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Brief your project with Fynix. We respond within 24 hours to cybersecurity growth enquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-12 md:pt-20 pb-14 md:pb-20 bg-gradient-to-b from-white to-background-soft">
        <Reveal className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono">
            Initiation
          </span>
          <h1 className="font-serif italic text-4xl md:text-[56px] text-primary font-normal mt-3 leading-tight max-w-4xl">
            Every cybersecurity company has opportunities it isn&apos;t fully capturing yet.
          </h1>
          <p className="text-text-muted text-base md:text-lg font-light leading-relaxed mt-6 max-w-2xl">
            Sometimes it&apos;s a website that isn&apos;t earning trust. Sometimes it&apos;s
            technology that isn&apos;t keeping pace. Sometimes it&apos;s visibility that never
            becomes opportunity.
          </p>
          <p className="text-primary text-base md:text-lg font-serif italic leading-relaxed mt-4 max-w-2xl">
            Whatever the reason, it can be improved. Let&apos;s start there.
          </p>
        </Reveal>
      </section>

      <section className="py-16 md:py-24 bg-background-soft">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal variant="left" className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase font-mono text-text-muted font-bold block mb-2">
                Direct Inquiry
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm font-serif text-primary hover:text-accent transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
            <div>
              <span className="text-xs uppercase font-mono text-text-muted font-bold block mb-2">
                Locations
              </span>
              <span className="text-sm font-serif text-primary">{siteConfig.locations}</span>
            </div>
            <div>
              <span className="text-xs uppercase font-mono text-text-muted font-bold block mb-2">
                Response
              </span>
              <span className="text-sm font-serif text-primary">Within 24 business hours</span>
            </div>
          </Reveal>

          <Reveal variant="right" delay={180} className="lg:col-span-7 bg-white border border-border rounded-xl p-8 md:p-12 shadow-xs">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="contact-faq-heading"
        className="relative isolate overflow-hidden py-24 md:py-32 bg-transparent"
      >
        <PreFooterBackdrop />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono">
              Before you write
            </span>
            <h2
              id="contact-faq-heading"
              className="font-serif text-4xl md:text-5xl text-primary font-normal mt-3 leading-tight max-w-4xl"
            >
              Answers to the questions we hear first.
            </h2>
            <p className="text-text-muted text-base md:text-lg font-light leading-relaxed mt-6 max-w-2xl">
              If your question isn&apos;t here, ask it in the form above. We reply{" "}
              <strong className="font-medium text-primary">within one business day</strong>.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-14 max-w-4xl">
            <FaqAccordion faqs={faqs} />
          </Reveal>

          <Reveal delay={200} className="mt-10">
            <Link
              href="/faqs"
              className="text-xs font-semibold uppercase tracking-widest text-accent border-b border-accent pb-1 hover:text-primary hover:border-primary cta-underline transition-all duration-200"
            >
              See the full FAQs page
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
