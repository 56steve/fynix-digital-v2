import Image from "next/image";
import type { CaseStudy } from "@/lib/content";

type Props = { study: CaseStudy };

export default function CaseStudyCard({ study }: Props) {
  return (
    <a
      href={study.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full bg-white border border-border rounded-lg overflow-hidden hover:shadow-sm hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-background-soft">
        <Image
          src={study.image}
          alt={study.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        />
      </div>

      <div className="flex flex-col flex-1 p-6 md:p-7">
        <h3 className="font-serif text-2xl text-primary font-normal group-hover:text-accent transition-colors">
          {study.name}
        </h3>
        <span className="mt-2 text-xs font-mono text-text-muted group-hover:text-accent transition-colors">
          {study.domain}
        </span>

        <div className="mt-auto pt-6 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-border px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
