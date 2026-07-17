import { processSteps } from "@/lib/content";
import Reveal from "./Reveal";

export default function ProcessTimeline() {
  return (
    <ol className="relative">
      <div
        aria-hidden
        className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px bg-border md:-translate-x-1/2"
      />

      {processSteps.map((step, idx) => {
        const isLeft = idx % 2 === 0;
        return (
          <Reveal
            key={step.num}
            variant={isLeft ? "left" : "right"}
            delay={40}
            className="relative"
          >
            <li
              className={`relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12 py-10 md:py-14 ${
                isLeft ? "" : "md:[&>*:first-child]:col-start-2"
              }`}
            >
              <span
                aria-hidden
                className="absolute left-6 md:left-1/2 top-14 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-accent ring-4 ring-background"
              />

              <div
                className={`bg-white border border-border rounded-xl p-8 shadow-xs ${
                  isLeft ? "md:mr-6" : "md:ml-6 md:col-start-2 md:row-start-1"
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-xs text-accent font-bold">{step.num}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-primary font-normal mt-4">
                  {step.title}
                </h3>

                <p className="text-sm md:text-base text-text-muted font-light leading-relaxed mt-4">
                  {step.summary}
                </p>

                <div className="mt-6 border-t border-border pt-6">
                  <span className="text-xs uppercase font-mono tracking-widest text-primary font-semibold block mb-3">
                    Activities
                  </span>
                  <ul className="space-y-2 text-sm text-text-muted font-light">
                    {step.activities.map((a) => (
                      <li key={a} className="flex gap-2">
                        <span
                          aria-hidden
                          className="h-1.5 w-1.5 rounded-full bg-accent/60 mt-2 flex-shrink-0"
                        />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-border pt-6 flex items-baseline justify-between gap-4">
                  <span className="text-xs uppercase font-mono tracking-widest text-text-muted font-bold">
                    Deliverable
                  </span>
                  <span className="text-xs text-accent font-semibold text-right">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            </li>
          </Reveal>
        );
      })}
    </ol>
  );
}
