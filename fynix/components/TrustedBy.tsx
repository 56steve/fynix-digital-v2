import { clients } from "@/lib/content";

export default function TrustedBy() {
  return (
    <section
      aria-labelledby="trusted-by-heading"
      className="py-14 md:py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2
          id="trusted-by-heading"
          className="text-xs uppercase tracking-widest text-text-muted font-mono font-semibold text-center"
        >
          Trusted by cybersecurity leaders
        </h2>

        <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center">
          {clients.map((client) => (
            <li
              key={client}
              className="font-serif text-lg md:text-xl text-primary/70 text-center tracking-wide"
            >
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
