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
      className="sticky top-0 z-[200] w-full border-b bg-bg"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span
            className="text-[22px] font-bold tracking-tight"
            style={{ color: "var(--primary)" }}
          >
            Mariposa
          </span>
          <span
            className="hidden sm:block text-xs font-medium tracking-widest uppercase"
            style={{ color: "var(--muted)", letterSpacing: "0.1em" }}
          >
            Ice Cream
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors"
              style={{
                color: pathname === l.href ? "var(--primary)" : "var(--muted)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:6192845197"
          className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded transition-opacity hover:opacity-85"
          style={{ background: "var(--primary)", color: "var(--on-primary)" }}
        >
          619-284-5197
        </a>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
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

      {open && (
        <div
          className="md:hidden border-t px-6 py-5 flex flex-col gap-5 bg-bg"
          style={{ borderColor: "var(--border)" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium"
              style={{ color: pathname === l.href ? "var(--primary)" : "var(--ink)" }}
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
