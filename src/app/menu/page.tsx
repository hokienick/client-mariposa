import Image from "next/image";
import Link from "next/link";

type Row = { name: string; price: string };
type Section = { title: string; desc?: string; rows: Row[] };

const sections: Section[] = [
  {
    title: "Scoops",
    rows: [
      { name: "Child's Scoop", price: "$4" },
      { name: "Single Scoop", price: "$5" },
      { name: "Double Scoop", price: "$8" },
    ],
  },
  {
    title: "Hand Packed",
    desc: "Take it home",
    rows: [
      { name: "Pint", price: "$10" },
      { name: "2 Pints", price: "$19" },
      { name: "Quart", price: "$14" },
      { name: "2 Quarts", price: "$27" },
    ],
  },
  {
    title: "Sundaes",
    rows: [
      { name: "1 Scoop Sundae", price: "$7" },
      { name: "2 Scoop Sundae", price: "$9" },
      { name: "3 Scoop Sundae", price: "$10.50" },
      { name: "Brownie Sundae", price: "$10" },
      { name: "Banana Split", price: "$12" },
    ],
  },
  {
    title: "Drinks",
    rows: [
      { name: "Milkshake 16oz", price: "$8" },
      { name: "Milkshake 22oz", price: "$8.50" },
      { name: "Malt 16oz", price: "$8.25" },
      { name: "Malt 22oz", price: "$9" },
      { name: "Root Beer Float 20oz", price: "$7" },
      { name: "Italian Cream Soda", price: "$7" },
      { name: "Ice Cream Soda", price: "$7" },
      { name: "Blended Iced Mocha", price: "$7" },
      { name: "Frozen Hot Chocolate", price: "$7" },
      { name: "Horchata Supreme", price: "$7" },
      { name: "Orange Creamsicle", price: "$7" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div>
      {/* ── Hero image — sundae from Instagram ── */}
      <div className="relative overflow-hidden" style={{ minHeight: "62vh" }}>
        <Image
          src="/images/sundae.jpg"
          alt="A Mariposa sundae with homemade hot fudge"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "oklch(0.10 0.02 55 / 0.48)" }}
        />
        <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-14 pb-12">
          <h1
            className="text-white leading-[0.92]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem,8vw,7rem)",
              letterSpacing: "-0.04em",
            }}
          >
            The Menu
          </h1>
          <p
            className="text-base mt-4 max-w-md wide"
            style={{ color: "oklch(0.88 0.010 55)" }}
          >
            Handmade ice cream, sundaes, shakes, and more. All made in-house on Adams Avenue.
          </p>
        </div>
      </div>

      {/* ── Pricing ── */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 mb-16">
          {sections.map((s) => (
            <div key={s.title}>
              <div className="flex items-baseline gap-3 mb-6">
                <h2
                  className="text-[clamp(1.75rem,3.5vw,2.5rem)]"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                >
                  {s.title}
                </h2>
                {s.desc && (
                  <span
                    className="text-xs font-medium"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.desc}
                  </span>
                )}
              </div>
              {s.rows.map((r) => (
                <div
                  key={r.name}
                  className="flex items-center justify-between py-3.5 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="text-base font-bold"
                    style={{ fontFamily: "var(--font-accent)", color: "var(--ink)" }}
                  >
                    {r.name}
                  </span>
                  <span
                    className="text-base font-bold tabular-nums"
                    style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
                  >
                    {r.price}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ── Special orders ── */}
        <div
          className="px-8 md:px-12 py-12"
          style={{ background: "var(--surface)" }}
        >
          <h2
            className="text-[clamp(1.75rem,3.5vw,2.75rem)] mb-10"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.025em" }}
          >
            Special Orders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {[
              {
                name: "Ice Cream Pie",
                price: "$20",
                desc: "Your choice of flavors in chocolate or vanilla crust. Serves 6–8. Requires 3 days notice.",
              },
              {
                name: "2½-Gallon Tub",
                price: "$80",
                desc: "Approximately 65 scoops. Perfect for events. Requires 1 week advance notice.",
              },
            ].map((s) => (
              <div
                key={s.name}
                className="border-b pb-8"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.name}
                  </h3>
                  <span
                    className="text-2xl font-bold"
                    style={{ color: "var(--accent)", fontFamily: "var(--font-display)" }}
                  >
                    {s.price}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed wide"
                  style={{ color: "var(--muted)" }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="tel:6192845197"
              className="px-6 py-3 text-sm font-bold transition-opacity hover:opacity-90"
              style={{
                background: "var(--accent)",
                color: "var(--on-accent)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Call 619-284-5197
            </a>
            <Link
              href="/flavors"
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "var(--muted)", fontFamily: "var(--font-sans)" }}
            >
              See today's flavors &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
