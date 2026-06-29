"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/flavors", label: "Flavors" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/location", label: "Visit Us" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 w-full border-b bg-bg"
      style={{ borderColor: "var(--border)", zIndex: "var(--z-sticky)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Wordmark */}
        <Link
          href="/"
          className="shrink-0 leading-none"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span
            className="text-[21px] font-bold tracking-tight"
            style={{ color: "var(--ink)" }}
          >
            Mariposa
          </span>
          <span
            className="hidden sm:inline ml-2 text-[12px] font-medium tracking-[0.08em] uppercase"
            style={{ color: "var(--muted)" }}
          >
            Ice Cream
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium transition-colors"
              style={{
                color: pathname === l.href ? "var(--ink)" : "var(--muted)",
                fontFamily: "var(--font-sans)",
                fontWeight: pathname === l.href ? "600" : "500",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:6192845197"
          className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 transition-opacity hover:opacity-85"
          style={{
            background: "var(--accent)",
            color: "var(--on-accent)",
            fontFamily: "var(--font-sans)",
          }}
        >
          619-284-5197
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <div className="w-5 flex flex-col gap-[5px]">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-px transition-all duration-200"
                style={{
                  background: "var(--ink)",
                  opacity: open && i === 1 ? 0 : 1,
                  transform:
                    open && i === 0
                      ? "rotate(45deg) translate(4px, 4px)"
                      : open && i === 2
                      ? "rotate(-45deg) translate(4px, -4px)"
                      : "none",
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-6 flex flex-col gap-5 bg-bg"
          style={{ borderColor: "var(--border)" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium"
              style={{
                color: pathname === l.href ? "var(--ink)" : "var(--muted)",
                fontWeight: pathname === l.href ? "600" : "500",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:6192845197"
            className="text-base font-semibold"
            style={{ color: "var(--accent)" }}
          >
            619-284-5197
          </a>
        </div>
      )}
    </header>
  );
}
