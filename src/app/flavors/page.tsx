"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Cat = "All" | "In the Case" | "Vegan & Sorbet" | "Seasonal" | "Rotating";
const cats: Cat[] = ["All", "In the Case", "Vegan & Sorbet", "Seasonal", "Rotating"];

type Flavor = { name: string; cats: Cat[]; note?: string };

const flavors: Flavor[] = [
  { name: "Coffee",                      cats: ["In the Case"] },
  { name: "Cookies & Cream",             cats: ["In the Case"] },
  { name: "Banana Walnut",               cats: ["In the Case"] },
  { name: "Maple Walnut",                cats: ["In the Case"] },
  { name: "Coconut Almond Fudge",        cats: ["In the Case"] },
  { name: "Chocolate",                   cats: ["In the Case"] },
  { name: "Peanut Butter Fudge",         cats: ["In the Case"] },
  { name: "Heath Butter Toffee",         cats: ["In the Case"], note: "Fan favorite" },
  { name: "Rocky Road",                  cats: ["In the Case"] },
  { name: "Cookies & Coffee",            cats: ["In the Case"] },
  { name: "Strawberry",                  cats: ["In the Case"] },
  { name: "Mexican Chocolate",           cats: ["In the Case"], note: "House specialty" },
  { name: "Vanilla",                     cats: ["In the Case"] },
  { name: "Mint Chip",                   cats: ["In the Case"] },
  { name: "Chocolate Chip Cookie Dough", cats: ["In the Case"] },
  { name: "Blueberry",                   cats: ["In the Case"] },
  { name: "Vegan Mango Sorbet",          cats: ["In the Case", "Vegan & Sorbet"] },
  { name: "Vegan Cookies & Cream",       cats: ["In the Case", "Vegan & Sorbet"] },
  { name: "Vegan Mexican Chocolate",     cats: ["Rotating", "Vegan & Sorbet"] },
  { name: "Watermelon Sorbet",           cats: ["Rotating", "Vegan & Sorbet", "Seasonal"] },
  { name: "Strawberry Sorbet",           cats: ["Vegan & Sorbet", "Seasonal"] },
  { name: "Nuez",                        cats: ["Rotating"] },
  { name: "Vanilla Fudge",               cats: ["Rotating"] },
  { name: "Eggnog",                      cats: ["Rotating", "Seasonal"] },
  { name: "Grape",                       cats: ["Rotating"] },
  { name: "Peanut Butter & Jelly",       cats: ["Rotating"] },
  { name: "Peppermint",                  cats: ["Rotating", "Seasonal"] },
  { name: "Pumpkin",                     cats: ["Seasonal"] },
  { name: "Lemon",                       cats: ["Seasonal"] },
];

const toppings = [
  { name: "Hot Fudge", note: "homemade" },
  { name: "Dulce de Leche", note: "homemade" },
  { name: "Pineapple", note: "homemade" },
  { name: "Strawberry", note: "homemade" },
  { name: "Marshmallow" },
  { name: "Caramel" },
  { name: "Butterscotch" },
  { name: "Chocolate" },
  { name: "Wet Walnuts" },
];

export default function FlavorsPage() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = flavors.filter((f) => active === "All" || f.cats.includes(active));

  return (
    <div>
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1
              className="text-[clamp(3rem,8vw,7rem)] leading-[0.92] mb-4"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.04em",
              }}
            >
              Our<br />Flavors.
            </h1>
            <p className="text-base" style={{ color: "var(--muted)" }}>
              All made here on Adams Avenue. The rotation changes daily.
            </p>
          </div>
          <div className="shrink-0 text-right md:pb-2">
            <span
              className="block leading-none font-bold tabular-nums"
              style={{
                fontSize: "clamp(5rem,13vw,10rem)",
                color: "var(--primary)",
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.06em",
                lineHeight: 1,
              }}
            >
              48
            </span>
            <span
              className="text-xs font-bold uppercase tracking-[0.14em]"
              style={{ color: "var(--muted)" }}
            >
              flavors total
            </span>
          </div>
        </div>
      </section>

      {/* Filter + List */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className="px-5 py-2 text-sm font-semibold transition-all"
              style={{
                background: active === c ? "var(--primary)" : "transparent",
                color: active === c ? "var(--on-primary)" : "var(--ink)",
                border: `1.5px solid ${active === c ? "var(--primary)" : "var(--border)"}`,
                borderRadius: "9999px",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Flavor list */}
        <div className="mb-16">
          <AnimatePresence mode="popLayout">
            {filtered.map((f) => (
              <motion.div
                key={f.name}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="flex items-center justify-between py-4 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <span className="text-lg font-medium">{f.name}</span>
                <div className="flex items-center gap-2 shrink-0">
                  {f.note && (
                    <span className="text-xs hidden sm:block" style={{ color: "var(--muted)" }}>
                      {f.note}
                    </span>
                  )}
                  {f.cats.includes("Vegan & Sorbet") && (
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5"
                      style={{
                        background: "oklch(0.88 0.06 155)",
                        color: "oklch(0.28 0.10 155)",
                        borderRadius: "9999px",
                      }}
                    >
                      Vegan
                    </span>
                  )}
                  {f.cats.includes("Seasonal") && (
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5"
                      style={{
                        background: "oklch(0.93 0.05 55)",
                        color: "oklch(0.42 0.11 55)",
                        borderRadius: "9999px",
                      }}
                    >
                      Seasonal
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toppings */}
        <div className="px-8 py-10" style={{ background: "var(--surface)" }}>
          <h2 className="text-3xl mb-8" style={{ fontFamily: "var(--font-display)" }}>
            Sundae Toppings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
            {toppings.map((t) => (
              <div
                key={t.name}
                className="flex items-center justify-between py-3 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <span className="text-base font-medium">{t.name}</span>
                {t.note && (
                  <span className="text-xs" style={{ color: "var(--muted)" }}>
                    {t.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
