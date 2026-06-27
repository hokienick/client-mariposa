import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t mt-24"
      style={{ borderColor: "var(--border)", background: "var(--foreground)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p
              className="text-2xl font-bold mb-1"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--accent)",
                letterSpacing: "-0.01em",
              }}
            >
              Mariposa
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#9E8878" }}>
              Handmade ice cream, sorbet, and vegan options. Made fresh in Normal Heights since 2000.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#6B5546" }}>
              Hours
            </p>
            <div className="space-y-1 text-sm" style={{ color: "#9E8878" }}>
              <p>Mon - Wed: Closed</p>
              <p>Thu - Sat: 1pm - 9pm</p>
              <p>Sun: 2pm - 8pm</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#6B5546" }}>
              Find Us
            </p>
            <div className="space-y-1 text-sm" style={{ color: "#9E8878" }}>
              <p>3450 Adams Avenue</p>
              <p>Normal Heights, San Diego CA 92116</p>
              <a
                href="tel:6192845197"
                className="block mt-2 transition-colors"
                style={{ color: "var(--accent)" }}
              >
                619-284-5197
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs"
          style={{ borderColor: "#3D2418", color: "#6B5546" }}
        >
          <div className="flex gap-6">
            <Link href="/flavors" style={{ color: "#6B5546" }}>Flavors</Link>
            <Link href="/menu" style={{ color: "#6B5546" }}>Menu</Link>
            <Link href="/about" style={{ color: "#6B5546" }}>Our Story</Link>
            <Link href="/location" style={{ color: "#6B5546" }}>Visit Us</Link>
          </div>
          <p>Est. 2000 in Mariposa, CA. Serving San Diego since 2000.</p>
        </div>
      </div>
    </footer>
  );
}
