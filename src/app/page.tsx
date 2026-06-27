"use client";
import Link from "next/link";
import { motion } from "motion/react";

const featuredFlavors = [
  { name: "Heath Butter Toffee", tag: "Fan Favorite" },
  { name: "Mexican Chocolate", tag: "House Specialty" },
  { name: "Coconut Almond Fudge", tag: "Classic" },
  { name: "Mint Chip", tag: "Classic" },
  { name: "Vegan Mango Sorbet", tag: "Vegan" },
  { name: "Cookies & Cream", tag: "Classic" },
];

const tagColors: Record<string, string> = {
  "Fan Favorite": "#D4634A",
  "House Specialty": "#8B4513",
  "Classic": "#6B4F3A",
  "Vegan": "#4A7C59",
};

const facts = [
  {
    icon: "🥛",
    title: "Fresh local dairy",
    body: "We source fresh milk and cream from local California dairies every week.",
  },
  {
    icon: "✋",
    title: "Made by hand",
    body: "Every batch is made in-house using the same technique Grandpa Pete taught Dick at age 12.",
  },
  {
    icon: "🌱",
    title: "No gimmicks",
    body: "No eggs in most flavors, one-third less sugar, half the air. Just ice cream.",
  },
];

const press = [
  {
    outlet: "The New York Times",
    quote: "A must-visit when in San Diego.",
  },
  {
    outlet: "San Diego Magazine",
    quote: "Best Ice Cream in San Diego.",
    note: "Multiple years",
  },
];

function fadeProps(i: number) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const, margin: "-60px" },
    transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" as const },
  };
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[calc(100vh-64px)] flex flex-col justify-center px-6 overflow-hidden"
        style={{ background: "var(--background)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 translate-x-1/3 -translate-y-1/4"
          style={{ background: "var(--accent)" }}
        />

        <div className="relative max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-widest mb-8"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}
          >
            25 Years in Normal Heights
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
            className="text-[clamp(3rem,8vw,7rem)] leading-[0.95] mb-6 max-w-3xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--foreground)",
              letterSpacing: "-0.02em",
            }}
          >
            Good ice cream needs no introduction.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
            className="text-lg max-w-md mb-10 leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Handmade on Adams Avenue since 2000. No gimmicks, no mix-ins. Just ice cream made the way Grandpa taught us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26, ease: "easeOut" }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Link
              href="/flavors"
              className="px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90 active:scale-[0.98]"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              See Today's Flavors
            </Link>
            <Link
              href="/location"
              className="px-6 py-3 rounded-full font-semibold text-sm border transition-colors"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
            >
              Hours & Location
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14 inline-flex items-center gap-3 px-4 py-3 rounded-xl text-sm"
            style={{ background: "var(--surface)" }}
          >
            <span style={{ color: "var(--accent)" }}>★</span>
            <span style={{ color: "var(--muted)" }}>
              First visit? Mention this site for{" "}
              <strong style={{ color: "var(--foreground)" }}>10% off your first scoop.</strong>
            </span>
          </motion.div>
        </div>
      </section>

      {/* Press strip */}
      <section style={{ background: "var(--foreground)" }}>
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8 md:gap-0 md:divide-x divide-[#3D2418]">
          {press.map((p) => (
            <div key={p.outlet} className="flex-1 md:px-10 first:pl-0 last:pr-0">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "var(--accent)" }}
              >
                {p.outlet}
                {p.note && <span className="ml-2 opacity-60 normal-case tracking-normal font-normal">{p.note}</span>}
              </p>
              <p
                className="text-xl font-bold leading-snug"
                style={{ color: "#FAF8F4", fontFamily: "var(--font-display)" }}
              >
                "{p.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Flavors */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--accent)" }}
            >
              In the case today
            </p>
            <h2 className="text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Featured Flavors
            </h2>
          </div>
          <Link
            href="/flavors"
            className="text-sm font-semibold hidden md:block"
            style={{ color: "var(--accent)" }}
          >
            View all 48 flavors &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {featuredFlavors.map((flavor, i) => (
            <motion.div
              key={flavor.name}
              {...fadeProps(i)}
              className="p-6 rounded-2xl border transition-shadow hover:shadow-md"
              style={{
                borderColor: "var(--border)",
                background: "var(--background)",
              }}
            >
              <span
                className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-4"
                style={{
                  background: tagColors[flavor.tag] + "18",
                  color: tagColors[flavor.tag],
                }}
              >
                {flavor.tag}
              </span>
              <p
                className="text-lg font-bold leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {flavor.name}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 md:hidden text-center">
          <Link
            href="/flavors"
            className="text-sm font-semibold"
            style={{ color: "var(--accent)" }}
          >
            View all 48 flavors &rarr;
          </Link>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--accent)" }}
          >
            Why it tastes different
          </p>
          <h2 className="text-4xl mb-12 max-w-xl" style={{ fontFamily: "var(--font-display)" }}>
            The cold facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facts.map((fact, i) => (
              <motion.div
                key={fact.title}
                {...fadeProps(i)}
              >
                <div className="text-3xl mb-4">{fact.icon}</div>
                <h3 className="text-xl mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  {fact.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                  {fact.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage callout */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="rounded-3xl p-10 md:p-16 relative overflow-hidden"
          style={{ background: "var(--foreground)" }}
        >
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-5 translate-x-1/4 -translate-y-1/4"
            style={{ background: "var(--accent)" }}
          />
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--accent)" }}
          >
            Our story
          </p>
          <blockquote
            className="text-[clamp(1.5rem,4vw,2.75rem)] font-bold leading-tight mb-6 max-w-2xl relative"
            style={{ color: "#FAF8F4", fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            "Grandpa told him it's very simple. Fresh milk, good cream, quality ingredients."
          </blockquote>
          <p className="text-sm mb-8" style={{ color: "#9E8878" }}>
            Dick VanRansom, founder. Fourth-generation Dutch dairy farmer. Still making every batch by hand.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors"
            style={{ borderColor: "#4D3020", color: "#FAF8F4" }}
          >
            Read our story &rarr;
          </Link>
        </motion.div>
      </section>

      {/* Hours CTA */}
      <section
        className="border-t"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl mb-1" style={{ fontFamily: "var(--font-display)" }}>
              Come find us on Adams Avenue
            </h2>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              3450 Adams Avenue, Normal Heights, San Diego. Thu-Sat 1-9pm, Sun 2-8pm.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="tel:6192845197"
              className="px-5 py-2.5 rounded-full text-sm font-semibold border"
              style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
            >
              Call ahead
            </a>
            <Link
              href="/location"
              className="px-5 py-2.5 rounded-full text-sm font-semibold"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              Get directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
