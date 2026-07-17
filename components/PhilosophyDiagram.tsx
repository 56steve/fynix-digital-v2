const mobileNodes = [
  { label: "UX", step: "01. BUILD TRUST", desc: "Thoughtful interface builds customer confidence immediately." },
  { label: "DEV", step: "02. DELIVER SPEED", desc: "Flawless, clean code executes faster and retains interest." },
  { label: "SEO", step: "03. COMPETE SEARCH", desc: "Targeted strategies place your website in front of active buyers." },
  { label: "GEN", step: "04. CONVERT PIPELINE", desc: "Converting traffic into real, intent-driven conversations." },
];

export default function PhilosophyDiagram() {
  return (
    <div className="bg-white border border-border rounded-xl p-8 md:p-12 shadow-xs">
      <div className="hidden md:block">
        <svg
          className="w-full h-auto max-h-[160px]"
          viewBox="0 0 1000 120"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Growth flow: UX to Development to SEO to Lead Generation"
        >
          <line x1="120" y1="60" x2="880" y2="60" stroke="#E8E7E3" strokeWidth="2" strokeDasharray="6 4" />
          <circle cx="120" cy="60" r="30" fill="#FCFCFB" stroke="#E9AF88" strokeWidth="2" />
          <text x="120" y="65" fontFamily="Figtree, system-ui, sans-serif" fontSize="12" fill="#0C1E2E" textAnchor="middle" fontWeight="bold">UX</text>
          <text x="120" y="110" fontFamily="Figtree, system-ui, sans-serif" fontSize="11" fill="#565D64" textAnchor="middle" fontWeight="bold">01. BUILD TRUST</text>
          <path d="M 330 60 L 340 60" stroke="#E9AF88" strokeWidth="2" fill="none" />
          <circle cx="370" cy="60" r="30" fill="#FCFCFB" stroke="#1D2125" strokeWidth="1" />
          <text x="370" y="65" fontFamily="Figtree, system-ui, sans-serif" fontSize="12" fill="#0C1E2E" textAnchor="middle">DEV</text>
          <text x="370" y="110" fontFamily="Figtree, system-ui, sans-serif" fontSize="11" fill="#565D64" textAnchor="middle">02. DELIVER SPEED</text>
          <circle cx="620" cy="60" r="30" fill="#FCFCFB" stroke="#1D2125" strokeWidth="1" />
          <text x="620" y="65" fontFamily="Figtree, system-ui, sans-serif" fontSize="12" fill="#0C1E2E" textAnchor="middle">SEO</text>
          <text x="620" y="110" fontFamily="Figtree, system-ui, sans-serif" fontSize="11" fill="#565D64" textAnchor="middle">03. COMPETE SEARCH</text>
          <circle cx="870" cy="60" r="30" fill="#FCFCFB" stroke="#1D2125" strokeWidth="1" />
          <text x="870" y="65" fontFamily="Figtree, system-ui, sans-serif" fontSize="12" fill="#0C1E2E" textAnchor="middle">GEN</text>
          <text x="870" y="110" fontFamily="Figtree, system-ui, sans-serif" fontSize="11" fill="#565D64" textAnchor="middle">04. CONVERT PIPELINE</text>
        </svg>
      </div>

      <div className="flex flex-col md:hidden gap-8 items-center">
        {mobileNodes.map((flow, idx) => (
          <div key={flow.label} className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full border border-primary bg-background-soft flex items-center justify-center font-serif text-lg font-bold text-primary mb-3">
              {flow.label}
            </div>
            <span className="text-xs font-mono font-bold text-accent">{flow.step}</span>
            <p className="text-xs text-text-muted max-w-xs mt-1">{flow.desc}</p>
            {idx < mobileNodes.length - 1 && (
              <div className="h-8 w-px border-l border-dashed border-border mt-4" aria-hidden />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border mt-12 pt-8">
        <div className="p-4">
          <h4 className="font-serif text-lg text-primary font-medium mb-2">Connected Integration</h4>
          <p className="text-xs md:text-sm text-text-muted leading-relaxed font-light">
            Rather than managing multiple disconnected agencies (design studios, SEO groups, and
            engineering teams), we handle the system. Design informs the SEO hierarchy, development
            secures speed, and marketing maps clear conversion triggers.
          </p>
        </div>
        <div className="p-4">
          <h4 className="font-serif text-lg text-primary font-medium mb-2">Outcomes Over Deliverables</h4>
          <p className="text-xs md:text-sm text-text-muted leading-relaxed font-light">
            We measure success not by the number of design mockups or the volume of code commits,
            but by inbound conversions and qualified lead generation pipeline.
          </p>
        </div>
      </div>
    </div>
  );
}
