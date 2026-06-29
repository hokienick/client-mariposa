import Link from "next/link";

const navLinks = [
  { href: "/flavors", label: "Flavors" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/location", label: "Visit Us" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark)" }}>
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b"
          style={{ borderColor: "oklch(0.32 0.05 55)" }}
        >
          {/* Brand column */}
          <div>
            <p
              className="text-2xl font-bold mb-3 leading-none"
              style={{ fontFamily: "var(--font-display)", color: "var(--on-dark)" }}
            >
              Mariposa
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.65 0.020 55)" }}
            >
              Homemade ice cream, sorbet, and vegan options. Made fresh in Normal Heights since 2000.
            </p>
          </div>

          {/* Hours column */}
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
              style={{ color: "oklch(0.50 0.030 55)" }}
            >
              Hours
            </p>
            <div
              className="space-y-1.5 text-sm"
              style={{ color: "oklch(0.65 0.020 55)" }}
            >
              <p>Mon – Wed &nbsp; Closed</p>
              <p>Thu – Sat &nbsp;&nbsp; 1pm – 9pm</p>
              <p>Sun &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2pm – 8pm</p>
            </div>
          </div>

          {/* Location column */}
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
              style={{ color: "oklch(0.50 0.030 55)" }}
            >
              Find Us
            </p>
            <div
              className="space-y-1 text-sm"
              style={{ color: "oklch(0.65 0.020 55)" }}
            >
              <p>3450 Adams Avenue</p>
              <p>Normal Heights, San Diego CA 92116</p>
              <a
                href="tel:6192845197"
                className="block mt-3 font-semibold transition-opacity hover:opacity-80"
                style={{ color: "var(--accent)" }}
              >
                619-284-5197
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs"
          style={{ color: "oklch(0.42 0.025 55)" }}
        >
          <div className="flex gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition-opacity hover:opacity-70"
                style={{ color: "oklch(0.42 0.025 55)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <p>Est. 2000. Still on Adams Avenue.</p>
        </div>
      </div>
    </footer>
  );
}
