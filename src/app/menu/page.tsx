import Image from "next/image";
import Link from "next/link";

type Row = { name: string; price: string; note?: string };
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
      {/* Hero */}
      <div className="relative h-52 md:h-72 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=85"
          alt="A layered chocolate ice cream sundae with hot fudge"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0" style={{ background: "oklch(0.10 0.04 290 / 0.55)" }} />
        <div className="absolute inset-0 flex items-end px-8 md:px-14 pb-8">
          <h1
            className="text-[clamp(2.2rem,5vw,4rem)] text-white leading-none"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
          >
            The Menu
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Pricing sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14 mb-16">
          {sections.map((s) => (
            <div key={s.title}>
              <div className="flex items-baseline gap-3 mb-5">
                <h2 className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h2>
                {s.desc && <span className="text-xs font-medium" style={{ color: "var(--muted)" }}>{s.desc}</span>}
              </div>
              {s.rows.map((r) => (
                <div
                  key={r.name}
                  className="flex items-center justify-between py-3 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="text-base">{r.name}</span>
                  <span className="text-base font-semibold tabular-nums" style={{ color: "var(--primary)" }}>
                    {r.price}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Special orders */}
        <div className="border-t pt-14" style={{ borderColor: "var(--border)" }}>
          <h2 className="text-2xl mb-8" style={{ fontFamily: "var(--font-display)" }}>Special Orders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
            {[
              {
                name: "Ice Cream Pie",
                price: "$20",
                desc: "Your choice of flavors in chocolate or vanilla crust. Serves 6 – 8. Requires 3 days advance notice.",
              },
              {
                name: "2½-Gallon Tub",
                price: "$80",
                desc: "Approximately 65 scoops. Perfect for events and parties. Requires 1 week advance notice.",
              },
            ].map((s) => (
              <div key={s.name} className="border-b pb-8" style={{ borderColor: "var(--border)" }}>
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{s.name}</h3>
                  <span className="text-2xl font-bold" style={{ color: "var(--primary)", fontFamily: "var(--font-display)" }}>
                    {s.price}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-8 border-t" style={{ borderColor: "var(--border)" }}>
          <div>
            <p className="text-base font-semibold mb-0.5">Questions or advance orders?</p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>We always pick up. Call before your visit.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="tel:6192845197"
              className="px-5 py-2.5 rounded text-sm font-semibold"
              style={{ background: "var(--primary)", color: "var(--on-primary)" }}
            >
              619-284-5197
            </a>
            <Link
              href="/flavors"
              className="px-5 py-2.5 rounded border text-sm font-medium"
              style={{ borderColor: "var(--border)", color: "var(--ink)" }}
            >
              See flavors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
