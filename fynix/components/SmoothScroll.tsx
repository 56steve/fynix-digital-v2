"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ReactLenis } from "lenis/react";

type Props = { children: ReactNode };

export default function SmoothScroll({ children }: Props) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  if (reducedMotion) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.15,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
      }}
    >
      {children}
    </ReactLenis>
  );
}
