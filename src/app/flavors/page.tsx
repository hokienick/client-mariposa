"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const categories = ["All", "Today's Flavors", "Vegan & Sorbet", "Seasonal", "Rotating"] as const;
type Category = typeof categories[number];

type Flavor = {
  name: string;
  category: Category[];
};

const flavors: Flavor[] = [
  { name: "Coffee", category: ["Today's Flavors"] },
  { name: "Cookies & Cream", category: ["Today's Flavors"] },
  { name: "Banana Walnut", category: ["Today's Flavors"] },
  { name: "Maple Walnut", category: ["Today's Flavors"] },
  { name: "Coconut Almond Fudge", category: ["Today's Flavors"] },
  { name: "Chocolate", category: ["Today's Flavors"] },
  { name: "Peanut Butter Fudge", category: ["Today's Flavors"] },
  { name: "Heath Butter Toffee", category: ["Today's Flavors"] },
  { name: "Rocky Road", category: ["Today's Flavors"] },
  { name: "Cookies & Coffee", category: ["Today's Flavors"] },
  { name: "Strawberry", category: ["Today's Flavors"] },
  { name: "Mexican Chocolate", category: ["Today's Flavors"] },
  { name: "Vanilla", category: ["Today's Flavors"] },
  { name: "Mint Chip", category: ["Today's Flavors"] },
  { name: "Chocolate Chip Cookie Dough", category: ["Today's Flavors"] },
  { name: "Blueberry", category: ["Today's Flavors"] },
  { name: "Vegan Mango Sorbet", category: ["Today's Flavors", "Vegan & Sorbet"] },
  { name: "Vegan Cookies & Cream", category: ["Today's Flavors", "Vegan & Sorbet"] },
  { name: "Vegan Mexican Chocolate", category: ["Rotating", "Vegan & Sorbet"] },
  { name: "Watermelon Sorbet", category: ["Rotating", "Vegan & Sorbet", "Seasonal"] },
  { name: "Strawberry Sorbet", category: ["Vegan & Sorbet", "Seasonal"] },
  { name: "Nuez", category: ["Rotating"] },
  { name: "Vanilla Fudge", category: ["Rotating"] },
  { name: "Eggnog", category: ["Rotating", "Seasonal"] },
  { name: "Grape", category: ["Rotating"] },
  { name: "Peanut Butter & Jelly", category: ["Rotating"] },
  { name: "Peppermint", category: ["Rotating", "Seasonal"] },
  { name: "Pumpkin", category: ["Seasonal"] },
  { name: "Lemon", category: ["Seasonal"] },
];

const toppings = [
  "Hot Fudge (homemade)",
  "Dulce de Leche (homemade)",
  "Marshmallow",
  "Caramel",
  "Butterscotch",
  "Chocolate",
  "Pineapple (homemade)",
  "Strawberry (homemade)",
  "Wet Walnuts",
];

export default function FlavorsPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered = flavors.filter(
    (f) => active === "All" || f.category.includes(active)
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--accent)" }}
        >
          The Lineup
        </p>
        <h1 className="text-5xl mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Our Flavors
        </h1>
        <p className="text-base max-w-lg leading-relaxed" style={{ color: "var(--muted)" }}>
          48 flavors made in-house. Rotating daily case, seasonal specials, and vegan options always available.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
            style={{
              background: active === cat ? "var(--accent)" : "var(--surface)",
              color: active === cat ? "#fff" : "var(--muted)",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Flavor grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-16">
        <AnimatePresence mode="popLayout">
          {filtered.map((flavor) => {
            const isVegan = flavor.category.includes("Vegan & Sorbet");
            const isSeasonal = flavor.category.includes("Seasonal");
            return (
              <motion.div
                key={flavor.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="p-4 rounded-xl border flex flex-col gap-2"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--background)",
                }}
              >
                <p
                  className="text-sm font-semibold leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {flavor.name}
                </p>
                <div className="flex flex-wrap gap-1">
                  {isVegan && (
                    <span
                      className="text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded"
                      style={{ background: "#4A7C5918", color: "#4A7C59" }}
                    >
                      Vegan
                    </span>
                  )}
                  {isSeasonal && (
                    <span
                      className="text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded"
                      style={{ background: "#D4634A18", color: "#D4634A" }}
                    >
                      Seasonal
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Toppings */}
      <div
        className="rounded-2xl p-8 border"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      >
        <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
          Sundae Toppings
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {toppings.map((t) => (
            <div
              key={t}
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--muted)" }}
            >
              <span style={{ color: "var(--accent)" }}>+</span>
              {t}
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs" style={{ color: "var(--muted)" }}>
          Hot fudge, pineapple, and strawberry toppings are made in-house.
        </p>
      </div>
    </div>
  );
}
