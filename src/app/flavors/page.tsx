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
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-14">
        <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-none mb-4" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}>
          Our Flavors
        </h1>
        <p className="text-base" style={{ color: "var(--muted)" }}>
          48 flavors. All made here. Rotation changes daily — call ahead if a specific flavor matters.
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className="px-4 py-1.5 rounded text-sm font-medium transition-all"
            style={{
              background: active === c ? "var(--primary)" : "transparent",
              color: active === c ? "var(--on-primary)" : "var(--muted)",
              border: `1px solid ${active === c ? "var(--primary)" : "var(--border)"}`,
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="mb-16">
        <AnimatePresence mode="popLayout">
          {filtered.map((f) => (
            <motion.div
              key={f.name}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-between py-3.5 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="text-base font-medium">{f.name}</span>
              <div className="flex items-center gap-2">
                {f.note && (
                  <span className="text-xs" style={{ color: "var(--muted)" }}>{f.note}</span>
                )}
                {f.cats.includes("Vegan & Sorbet") && (
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{ background: "oklch(0.88 0.06 155)", color: "oklch(0.28 0.10 155)" }}
                  >
                    Vegan
                  </span>
                )}
                {f.cats.includes("Seasonal") && (
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{ background: "oklch(0.93 0.05 55)", color: "oklch(0.42 0.11 55)" }}
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
      <div className="border-t pt-12" style={{ borderColor: "var(--border)" }}>
        <h2 className="text-2xl mb-8" style={{ fontFamily: "var(--font-display)" }}>Sundae Toppings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
          {toppings.map((t) => (
            <div key={t.name} className="flex items-center justify-between py-3 border-b" style={{ borderColor: "var(--border)" }}>
              <span className="text-base font-medium">{t.name}</span>
              {t.note && <span className="text-xs" style={{ color: "var(--muted)" }}>{t.note}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
