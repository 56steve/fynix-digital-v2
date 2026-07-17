"use client";

/**
 * HeroCards — the editorial composition that sits under the hero copy.
 *
 * Layout intent (matches the sketch):
 *   1. A large italic "fynix" wordmark bleeds off the right edge, behind
 *      everything, at very low opacity — an editorial watermark.
 *   2. The Growth Session card sits on the left, keeping its upright
 *      "picked-up-off-the-desk" angle.
 *   3. The Calendar card recedes into the right, laid flatter on the z-axis
 *      as if it's on a table receding into the horizon.
 *
 * Everything under this composition is aria-hidden — it's a decorative
 * visual, not the source of any content that isn't already in the copy.
 */

// Kept as constants so tuning the composition is a one-line change.
// Card tilts as "/" — left edge drops, right edge lifts up. Pivot sits
// at the bottom-center so both sides swing symmetrically; rotateY brings
// the raised right edge slightly forward for real 3D elevation.
const SESSION_TRANSFORM =
  "rotateX(0deg) rotateY(35deg) rotateZ(-5deg) translateZ(40px)";
const SESSION_ORIGIN = "0% 100%";
// Card stands upright and swings back on its vertical left edge: the right
// side and CONFIRM corner recede into the distance while the AVAILABLE
// corner stays close to the viewer. A small rotateX brings the top edge
// forward for a subtle "leaning off the desk" feel.
const CALENDAR_TRANSFORM = "rotateY(28deg) rotateX(-4deg)";
const CALENDAR_ORIGIN = "0% 100%";

export default function HeroCards() {
  return (
    <div
      aria-hidden
      className="relative w-full h-[520px] md:h-[560px] lg:h-[600px] xl:h-[640px]"
      style={{
        perspective: "2600px",
        perspectiveOrigin: "45% 20%",
      }}
    >
      <FynixWatermark />

      {/* GROWTH SESSION — hinges from bottom-right, left edge lifts out of plane */}
      <div
        className="absolute left-7 md:left-12 lg:left-7 top-4 md:top-6 lg:top-8 w-[40px] xl:w-[520px] rounded-2xl bg-white border border-border overflow-hidden"
        style={{
          transform: SESSION_TRANSFORM,
          transformOrigin: SESSION_ORIGIN,
          transformStyle: "preserve-3d",
          boxShadow:
            "0 40px 80px -20px rgba(12,30,46,0.28), 0 12px 24px -12px rgba(12,30,46,0.18)",
        }}
      >
        <SessionPanel />
      </div>

      {/* CALENDAR — right, hinges from bottom-right (next to Confirm) at 30° */}
      <div
        className="absolute right-0 top-2 md:top-4 lg:top-6 w-[360px] xl:w-[440px] rounded-2xl bg-white border border-border overflow-hidden"
        style={{
          transform: CALENDAR_TRANSFORM,
          transformOrigin: CALENDAR_ORIGIN,
          transformStyle: "preserve-3d",
          boxShadow:
            "0 80px 160px -30px rgba(12,30,46,0.42), 0 24px 48px -20px rgba(12,30,46,0.25)",
        }}
      >
        <CalendarPanel />
      </div>
    </div>
  );
}

/* ------------------------------- watermark -------------------------------- */

function FynixWatermark() {
  return (
    <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-visible">
      <span
        className="font-serif italic leading-[0.85] tracking-tighter select-none whitespace-nowrap"
        style={{
          fontSize: "clamp(240px, 28vw, 420px)",
          fontWeight: 500,
          color: "rgba(12, 30, 46, 0.11)",
          transform: "translateX(15%) translateY(-8%)",
        }}
      >
        fynix
      </span>
    </div>
  );
}

/* ------------------------------ session card ------------------------------ */

function SessionPanel() {
  return (
    <div className="px-7 pt-6 pb-5">
      <div className="flex items-center justify-between pb-5 mb-6 border-b border-border">
        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
          Session &middot; #024
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden />
          Scheduled
        </span>
      </div>

      <div className="mb-7">
        <div className="text-[10px] font-mono uppercase tracking-widest text-accent font-semibold">
          Cybersecurity growth engagement
        </div>
        <div className="font-serif text-2xl text-primary leading-tight mt-2">
          Q3 Growth Audit &amp; Roadmap
        </div>
        <div className="text-[12.5px] text-text-muted font-light mt-2 leading-relaxed">
          A working session to review pipeline, positioning, and technical
          surface before we lock the quarter&apos;s plan.
        </div>
      </div>

      <div className="flex items-start gap-4 mb-8">
        <div className="w-11 h-11 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0">
          <span className="font-mono text-[11px] uppercase tracking-widest text-primary font-semibold">
            AF
          </span>
        </div>
        <div className="min-w-0">
          <div className="text-[10px] font-mono uppercase tracking-widest text-accent font-semibold">
            Growth Session
          </div>
          <div className="font-serif text-xl text-primary leading-tight mt-1.5">
            Audit Kickoff
          </div>
          <div className="text-[12.5px] text-text-muted font-light mt-1.5 leading-relaxed">
            A working chat to run through your growth surface.
          </div>
        </div>
      </div>

      <ul className="space-y-3 text-[13px] text-text-muted font-light">
        <li className="flex items-center gap-3">
          <IconClock />
          <span>Fri, Aug 30 · 9:30–10:00 AM</span>
        </li>
        <li className="flex items-center gap-3">
          <IconTimer />
          <span>30 min</span>
        </li>
        <li className="flex items-center gap-3">
          <IconVideo />
          <span>Video · Fynix Studio</span>
        </li>
        <li className="flex items-center gap-3">
          <IconPin />
          <span>Hosted by Alex Fisher</span>
        </li>
      </ul>

      <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
        <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
          Confirmed
        </span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-semibold">
          Add to calendar →
        </span>
      </div>
    </div>
  );
}

/* ------------------------------ calendar card ----------------------------- */

function CalendarPanel() {
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"] as const;

  // Aug 2025: month starts on Fri (5 leading blanks), 31 days.
  const leadingBlanks = 5;
  const daysInMonth = 31;
  const highlightDay = 24;
  const dottedDays = new Set([4, 11, 15, 17, 22, 28]);

  const cells: (number | null)[] = [
    ...Array.from({ length: leadingBlanks }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-accent font-semibold">
            Schedule
          </div>
          <div className="font-serif text-base text-primary mt-0.5">
            August 2025
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-text-muted">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-text-muted">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-1.5">
        {weekdays.map((d, i) => (
          <div
            key={`${d}-${i}`}
            className="text-center text-[10px] font-mono uppercase tracking-widest text-text-muted"
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (day === null) return <div key={`b-${i}`} className="aspect-square" />;
          const isHighlighted = day === highlightDay;
          const hasDot = dottedDays.has(day);
          return (
            <div
              key={day}
              className={[
                "aspect-square rounded-md flex items-center justify-center text-xs font-medium relative",
                isHighlighted
                  ? "bg-primary text-white"
                  : "text-primary",
              ].join(" ")}
            >
              {day}
              {hasDot && !isHighlighted && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-accent" />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
        <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
          Available · 6 slots
        </span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-semibold">
          Confirm →
        </span>
      </div>
    </div>
  );
}

/* --------------------------------- icons ---------------------------------- */

function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconTimer() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <path
        d="M9 3h6M12 8v5l3 2M5 14a7 7 0 1 0 14 0 7 7 0 0 0-14 0z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconVideo() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <rect x="3" y="7" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 10l5-2v8l-5-2v-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <path
        d="M12 21s-7-6.4-7-11a7 7 0 1 1 14 0c0 4.6-7 11-7 11z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
