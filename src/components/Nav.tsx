"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
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
      className="sticky top-0 z-[200] w-full border-b"
      style={{ background: "var(--background)", borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span
            className="text-2xl"
            style={{ fontFamily: "var(--font-serif)", color: "var(--accent)" }}
          >
            M
          </span>
          <span
            className="text-sm font-semibold tracking-wide uppercase"
            style={{ color: "var(--foreground)", letterSpacing: "0.08em" }}
          >
            Mariposa Ice Cream
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors"
              style={{
                color:
                  pathname === l.href ? "var(--accent)" : "var(--muted)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:6192845197"
          className="hidden md:flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          style={{
            background: "var(--accent)",
            color: "#fff",
          }}
        >
          619-284-5197
        </a>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: "var(--foreground)" }}
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className="block h-0.5 transition-all"
              style={{
                background: "var(--foreground)",
                transform: open ? "rotate(45deg) translate(4px,4px)" : "none",
              }}
            />
            <span
              className="block h-0.5 transition-all"
              style={{
                background: "var(--foreground)",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block h-0.5 transition-all"
              style={{
                background: "var(--foreground)",
                transform: open ? "rotate(-45deg) translate(4px,-4px)" : "none",
              }}
            />
          </div>
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ background: "var(--background)", borderColor: "var(--border)" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium"
              style={{
                color: pathname === l.href ? "var(--accent)" : "var(--foreground)",
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
