import Link from "next/link";

type Item = { name: string; price: string };
type Section = { title: string; items: Item[]; note?: string };

const menu: Section[] = [
  {
    title: "Scoops",
    items: [
      { name: "Child's Scoop", price: "$4" },
      { name: "Single Scoop", price: "$5" },
      { name: "Double Scoop", price: "$8" },
    ],
  },
  {
    title: "Hand Packed",
    note: "Take home by the pint or quart",
    items: [
      { name: "Pint", price: "$10" },
      { name: "2 Pints", price: "$19" },
      { name: "Quart", price: "$14" },
      { name: "2 Quarts", price: "$27" },
    ],
  },
  {
    title: "Sundaes",
    items: [
      { name: "1 Scoop Sundae", price: "$7" },
      { name: "2 Scoop Sundae", price: "$9" },
      { name: "3 Scoop Sundae", price: "$10.50" },
      { name: "Brownie Sundae", price: "$10" },
      { name: "Banana Split", price: "$12" },
    ],
  },
  {
    title: "Drinks",
    items: [
      { name: "Shake 16oz", price: "$8" },
      { name: "Shake 22oz", price: "$8.50" },
      { name: "Malt 16oz", price: "$8.25" },
      { name: "Malt 22oz", price: "$9" },
      { name: "Root Beer Float 20oz", price: "$7" },
      { name: "Italian Cream Soda 20oz", price: "$7" },
      { name: "Ice Cream Soda 20oz", price: "$7" },
      { name: "Blended Iced Mocha", price: "$7" },
      { name: "Frozen Hot Chocolate", price: "$7" },
      { name: "Horchata Supreme", price: "$7" },
      { name: "Orange Creamsicle", price: "$7" },
    ],
  },
];

const specialty = [
  {
    name: "Ice Cream Pie",
    price: "$20",
    desc: "Custom-made with your choice of flavors in chocolate or vanilla crust. Serves 6-8. Requires 3 days advance notice.",
  },
  {
    name: "2.5-Gallon Tub",
    price: "$80",
    desc: "Approximately 65 scoops. Perfect for parties and events. Requires 1 week advance notice.",
  },
];

export default function MenuPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-14">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--accent)" }}
        >
          Pricing
        </p>
        <h1 className="text-5xl mb-4" style={{ fontFamily: "var(--font-display)" }}>
          The Menu
        </h1>
        <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
          Simple pricing for handmade ice cream. Always made fresh, always made here.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {menu.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl border p-6"
            style={{ borderColor: "var(--border)", background: "var(--background)" }}
          >
            <h2
              className="text-xl mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {section.title}
            </h2>
            {section.note && (
              <p className="text-xs mb-4" style={{ color: "var(--muted)" }}>
                {section.note}
              </p>
            )}
            {!section.note && <div className="mb-4" />}
            <div className="space-y-2.5">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between text-sm"
                >
                  <span style={{ color: "var(--foreground)" }}>{item.name}</span>
                  <span
                    className="font-semibold tabular-nums"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Specialty orders */}
      <div className="mb-12">
        <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
          Special Orders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specialty.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl p-6 border"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.name}
                </h3>
                <span
                  className="text-xl font-bold ml-4 flex-shrink-0"
                  style={{ color: "var(--accent)", fontFamily: "var(--font-display)" }}
                >
                  {item.price}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call CTA */}
      <div
        className="rounded-2xl p-8 text-center"
        style={{ background: "var(--foreground)" }}
      >
        <p
          className="text-xl font-bold mb-2"
          style={{ color: "#FAF8F4", fontFamily: "var(--font-display)" }}
        >
          Questions or special orders?
        </p>
        <p className="text-sm mb-6" style={{ color: "#9E8878" }}>
          Call ahead to confirm flavors or place a special order.
        </p>
        <a
          href="tel:6192845197"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          619-284-5197
        </a>
      </div>

      <p className="text-center text-xs mt-6" style={{ color: "var(--muted)" }}>
        Also see our full{" "}
        <Link href="/flavors" style={{ color: "var(--accent)" }}>
          flavor list
        </Link>
      </p>
    </div>
  );
}
