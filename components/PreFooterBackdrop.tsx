"use client";

import { useEffect, useRef, type CSSProperties } from "react";

// Backdrop for pre-footer CTA sections. Four stacked layers:
//   1. Cream fill (the section's "island" tone)
//   2. Low-opacity dot-grid texture
//   3. Static warm-peach ambient glow (off-center)
//   4. Cursor-tracked peach spotlight (lerped so it trails smoothly)
//
// All four share a linear-gradient edge mask, composited to intersect,
// so the whole backdrop fades to zero at top / bottom / sides — no
// visible seam with neighbouring sections. The parent <section> must
// be `relative isolate overflow-hidden` and should be `bg-transparent`.
const EDGE_FADE: CSSProperties = {
  maskImage:
    "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%), linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%), linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
  maskComposite: "intersect",
  WebkitMaskComposite: "source-in",
};

// How aggressively the spotlight chases the cursor each frame.
// 1 = instant, lower = smoother trailing.
const LERP = 0.18;

export default function PreFooterBackdrop() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const spotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const spot = spotRef.current;
    if (!root || !spot) return;

    // Respect users who prefer reduced motion — skip the interactive layer.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // Spotlight is only meaningful on real pointing devices.
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    const parent = root.parentElement;
    if (!parent) return;

    let raf = 0;
    let running = false;
    let hovering = false;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let initialized = false;

    const loop = () => {
      // Lerp toward the latest cursor position — buttery trailing follow.
      currentX += (targetX - currentX) * LERP;
      currentY += (targetY - currentY) * LERP;
      spot.style.setProperty("--spot-x", `${currentX}px`);
      spot.style.setProperty("--spot-y", `${currentY}px`);

      const dx = targetX - currentX;
      const dy = targetY - currentY;
      const distSq = dx * dx + dy * dy;

      if (hovering || distSq > 0.5) {
        raf = requestAnimationFrame(loop);
      } else {
        running = false;
        raf = 0;
      }
    };

    const ensureRunning = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    const onEnter = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      if (!initialized) {
        // Start at the entry point — avoids a big sweep on first move.
        currentX = targetX;
        currentY = targetY;
        initialized = true;
      }
      hovering = true;
      spot.style.opacity = "1";
      ensureRunning();
    };

    const onMove = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      hovering = true;
      spot.style.opacity = "1";
      ensureRunning();
    };

    const onLeave = () => {
      hovering = false;
      spot.style.opacity = "0";
      // Keep the loop running long enough for the current lerp to finish.
      ensureRunning();
    };

    parent.addEventListener("pointerenter", onEnter);
    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);

    return () => {
      parent.removeEventListener("pointerenter", onEnter);
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
    >
      {/* Cream fill — the section's tinted "island" surface. */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--background-soft)", ...EDGE_FADE }}
      />

      {/* Dot grid — the "texture" layer. */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)",
          backgroundSize: "26px 26px",
          ...EDGE_FADE,
        }}
      />

      {/* Warm peach glow — off-center ambient wash. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 30% 50%, color-mix(in srgb, var(--accent) 18%, transparent) 0%, color-mix(in srgb, var(--accent) 8%, transparent) 45%, transparent 78%)",
          ...EDGE_FADE,
        }}
      />

      {/* Cursor spotlight — lerped follow, boosts peach + brightness where the user looks. */}
      <div
        ref={spotRef}
        className="absolute -inset-x-8 -inset-y-6 opacity-0 transition-opacity duration-500 ease-out"
        style={{
          background:
            "radial-gradient(360px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in srgb, var(--accent) 22%, transparent) 0%, color-mix(in srgb, var(--accent) 10%, transparent) 35%, transparent 65%)",
          willChange: "opacity, background",
          transform: "translateZ(0)",
          ...EDGE_FADE,
        }}
      />
    </div>
  );
}
