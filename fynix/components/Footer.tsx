import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/content";
import Logo from "@/components/Logo";

const importantLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
  { href: "/faqs", label: "FAQs" },
];

const socialLinks = [
  { href: "https://x.com/", label: "Twitter" },
  { href: "https://www.linkedin.com/", label: "LinkedIn" },
];

const legalLinks = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-white overflow-hidden mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-6">
            <Logo className="text-white" />
            <div className="mt-6 h-px w-24 bg-white/20" />
            <p className="mt-6 text-sm text-white/60 font-light leading-relaxed max-w-md">
              {siteConfig.description}
            </p>
            <p className="mt-6 text-xs text-white/40 font-light">
              {siteConfig.email} · {siteConfig.locations}
            </p>
          </div>

          {/* Important Links */}
          <nav aria-label="Important links" className="md:col-span-3">
            <h4 className="text-sm font-medium text-white mb-5">Important Links</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {importantLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <nav aria-label="Social links" className="md:col-span-3">
            <h4 className="text-sm font-medium text-white mb-5">Social Links</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {socialLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider + legal row */}
        <div className="mt-16 md:mt-20 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <span>&copy; {year} Fynix Digital</span>
          <div className="flex items-center gap-6">
            {legalLinks.map((item, idx) => (
              <span key={item.label} className="flex items-center gap-6">
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
                {idx < legalLinks.length - 1 && (
                  <span aria-hidden className="text-white/20">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Ghost brand wordmark — big, cropped, middle band of the image */}
      <div
        aria-hidden
        className="relative select-none pointer-events-none overflow-hidden bg-primary h-[28vw] md:h-[24vw]"
      >
        <Image
          src="/new_footer.png"
          alt=""
          width={1536}
          height={1024}
          sizes="100vw"
          loading="lazy"
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-auto opacity-40 invert"
        />
      </div>
    </footer>
  );
}
