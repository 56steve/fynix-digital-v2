"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { acts, nav, siteConfig } from "@/lib/content";
import Logo from "@/components/Logo";

const HEADER_HEIGHT = 80;
const MEGA_CLOSE_DELAY = 140;
const MEGA_ITEM_STAGGER = 70;

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const handleSamePageNav =
    (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      if (pathname !== href) return;
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

  const clearMegaTimer = () => {
    if (megaCloseTimer.current) {
      clearTimeout(megaCloseTimer.current);
      megaCloseTimer.current = null;
    }
  };

  const openMega = () => {
    clearMegaTimer();
    setMegaOpen(true);
  };

  const closeMegaDeferred = () => {
    clearMegaTimer();
    megaCloseTimer.current = setTimeout(() => setMegaOpen(false), MEGA_CLOSE_DELAY);
  };

  const closeMegaNow = () => {
    clearMegaTimer();
    setMegaOpen(false);
  };

  useEffect(() => clearMegaTimer, []);

  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clearMegaTimer();
        setMegaOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [megaOpen]);

  useEffect(() => {
    const darkSections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-nav-theme="dark"]'),
    );
    if (darkSections.length === 0) return;

    let ticking = false;
    const check = () => {
      ticking = false;
      const overDark = darkSections.some((el) => {
        const r = el.getBoundingClientRect();
        return r.top < HEADER_HEIGHT && r.bottom > 0;
      });
      setTheme(overDark ? "dark" : "light");
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(check);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const isDark = theme === "dark" && !menuOpen;

  return (
    <>
      <header
        data-theme={theme}
        className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
          menuOpen
            ? "bg-white"
            : isDark
              ? "bg-primary/85"
              : "bg-background/80"
        }`}
      >
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group shrink-0"
            aria-label="Fynix home"
            onClick={(e) => {
              setMenuOpen(false);
              handleSamePageNav("/")(e);
            }}
          >
            <Logo
              className={`transition-colors ${
                isDark
                  ? "text-white group-hover:text-accent"
                  : "text-primary group-hover:text-accent"
              }`}
            />
          </Link>

          <nav
            aria-label="Primary"
            className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10 text-sm font-medium transition-colors duration-300 ${
              isDark ? "text-white/70" : "text-text-muted"
            }`}
          >
            {nav.map((item) => {
              const isServices = item.href === "/services";
              const linkClass = `relative py-2 transition-colors duration-300 after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:mx-auto after:h-px after:transition-all ${
                isDark
                  ? "hover:text-white after:bg-white"
                  : "hover:text-primary after:bg-primary"
              } ${
                isServices && megaOpen
                  ? "after:w-full " + (isDark ? "text-white" : "text-primary")
                  : "after:w-0 hover:after:w-full"
              }`;

              if (isServices) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={openMega}
                    onMouseLeave={closeMegaDeferred}
                    onFocus={openMega}
                    onBlur={closeMegaDeferred}
                  >
                    <Link
                      href={item.href}
                      aria-haspopup="true"
                      aria-expanded={megaOpen}
                      className={linkClass}
                      onClick={(e) => {
                        closeMegaNow();
                        handleSamePageNav(item.href)(e);
                      }}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={linkClass}
                  onClick={handleSamePageNav(item.href)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 md:gap-5 shrink-0">
            <Link
              href="/contact"
              onClick={(e) => {
                setMenuOpen(false);
                handleSamePageNav("/contact")(e);
              }}
              className={`inline-flex items-center justify-center px-4 py-2.5 md:px-5 rounded-full text-[11px] md:text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                isDark
                  ? "bg-white text-primary hover:bg-accent hover:text-primary"
                  : "bg-primary text-white hover:bg-primary-hover"
              }`}
            >
              Start Project
            </Link>

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => {
                closeMegaNow();
                setMenuOpen((o) => !o);
              }}
              className={`md:hidden h-10 w-10 -mr-2 flex items-center justify-center rounded-full transition-colors ${
                isDark
                  ? "text-white hover:bg-white/10"
                  : "text-primary hover:bg-primary/5"
              }`}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          role="region"
          aria-label="Services menu"
          aria-hidden={!megaOpen}
          onMouseEnter={openMega}
          onMouseLeave={closeMegaDeferred}
          className={`hidden md:block absolute inset-x-0 top-full bg-white/95 backdrop-blur-md shadow-[0_20px_40px_-30px_rgba(0,0,0,0.25)] transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            megaOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-1 invisible"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 md:py-8">
            <div className="flex items-center gap-6 mb-4">
              <span className="text-xs uppercase tracking-widest text-text-muted font-mono">
                Growth Acts
              </span>
              <span aria-hidden className="h-px flex-1 bg-border" />
            </div>
            <ul className="grid grid-cols-4 gap-6">
              {acts.map((act, idx) => (
                <li
                  key={act.slug}
                  style={{
                    transitionDelay: megaOpen ? `${idx * MEGA_ITEM_STAGGER}ms` : "0ms",
                  }}
                  className={`transition-[opacity,transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    megaOpen
                      ? "opacity-100 translate-y-0 blur-0"
                      : "opacity-0 -translate-y-2 blur-[3px]"
                  }`}
                >
                  <Link
                    href={`/services/${act.slug}`}
                    onClick={(e) => {
                      closeMegaNow();
                      handleSamePageNav(`/services/${act.slug}`)(e);
                    }}
                    className="group inline-flex items-center gap-2 font-serif text-xl text-primary hover:text-accent transition-colors"
                  >
                    <span className="font-mono text-xs text-accent font-semibold tabular-nums">
                      {act.num}
                    </span>
                    {act.title}
                    <span
                      aria-hidden
                      className="text-accent text-base opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    >
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <div
        aria-hidden
        onClick={closeMegaNow}
        className={`hidden md:block fixed inset-x-0 top-20 bottom-0 z-40 bg-primary/20 backdrop-blur-md transition-opacity duration-300 ${
          megaOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!menuOpen}
        className={`md:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-white transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        <nav
          aria-label="Mobile primary"
          className="h-full overflow-y-auto px-6 pt-8 pb-12 flex flex-col"
        >
          <ul className="flex flex-col divide-y divide-border">
            {nav.map((item, idx) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => {
                    setMenuOpen(false);
                    handleSamePageNav(item.href)(e);
                  }}
                  className="flex items-center justify-between py-6 group"
                >
                  <span className="font-serif text-3xl text-primary group-hover:text-accent transition-colors">
                    {item.label}
                  </span>
                  <span
                    aria-hidden
                    className="text-xs font-mono text-text-muted tabular-nums"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-10 space-y-4 text-sm">
            <Link
              href="/faqs"
              onClick={(e) => {
                setMenuOpen(false);
                handleSamePageNav("/faqs")(e);
              }}
              className="block font-mono uppercase tracking-widest text-xs text-text-muted hover:text-primary transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              onClick={(e) => {
                setMenuOpen(false);
                handleSamePageNav("/contact")(e);
              }}
              className="block font-mono uppercase tracking-widest text-xs text-text-muted hover:text-primary transition-colors"
            >
              {siteConfig.email}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
