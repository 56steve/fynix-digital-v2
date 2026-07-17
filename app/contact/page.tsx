import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
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
      <section className="pt-12 md:pt-20 pb-24 md:pb-32 bg-background-soft">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <Reveal variant="left" className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono">
              Initiation
            </span>
            <h1 className="font-serif text-3xl md:text-5xl text-primary font-normal leading-tight mt-3">
              Every cybersecurity company has opportunities it isn&apos;t fully capturing yet.
            </h1>
            <p className="text-text-muted text-sm md:text-base font-light leading-relaxed mt-6">
              Sometimes it&apos;s a website that isn&apos;t earning trust. Sometimes it&apos;s
              technology that isn&apos;t keeping pace. Sometimes it&apos;s visibility that never
              becomes opportunity.
            </p>
            <p className="text-primary text-base md:text-lg font-serif italic leading-relaxed mt-4">
              Whatever the reason, it can be improved. Let&apos;s start there.
            </p>
          </div>

          <div className="border-t border-border pt-8 mt-12 space-y-6">
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
          </div>
        </Reveal>

        <Reveal variant="right" delay={180} className="lg:col-span-7 bg-white border border-border rounded-xl p-8 md:p-12 shadow-xs">
          <ContactForm />
        </Reveal>
        </div>
      </section>

      <section aria-labelledby="contact-faq-heading" className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono">
                Before you write
              </span>
              <h2
                id="contact-faq-heading"
                className="font-serif text-4xl md:text-5xl text-primary font-normal mt-3 leading-tight"
              >
                Answers to the questions we hear first.
              </h2>
              <p className="text-text-muted text-base font-light leading-relaxed mt-4">
                If your question isn&apos;t here, ask it in the form above. We reply within one
                business day.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-14">
            <FaqAccordion faqs={faqs} />
          </Reveal>

          <Reveal delay={200} className="mt-10 text-center">
            <Link
              href="/faqs"
              className="text-xs font-semibold uppercase tracking-widest text-accent border-b border-accent pb-1 hover:text-primary hover:border-primary transition-all duration-200"
            >
              See the full FAQs page
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
