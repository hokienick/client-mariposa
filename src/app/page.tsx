"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const ease = [0.25, 1, 0.5, 1] as const;

const facts = [
  { label: "No eggs in most flavors", detail: "Cleaner, lighter — no compromise on richness." },
  { label: "One-third less sugar", detail: "Compared to commercial ice cream. You taste the dairy, not the sweetener." },
  { label: "Half the air", detail: "Denser scoops. What you're paying for is actually there." },
  { label: "Fresh local dairy", detail: "Sourced weekly from California dairies. Not a powder, not a mix." },
];

const todaysFlavors = [
  "Heath Butter Toffee",
  "Mexican Chocolate",
  "Coconut Almond Fudge",
  "Mint Chip",
  "Cookies & Cream",
  "Rocky Road",
  "Strawberry",
  "Banana Walnut",
  "Vegan Mango Sorbet",
  "Vegan Cookies & Cream",
  "Coffee",
  "Vanilla",
];

export default function Home() {
  return (
    <div>
      {/* ── Hero: split layout ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-64px)]">
        {/* Left: dark eggplant */}
        <div
          className="flex flex-col justify-center px-8 md:px-14 py-16 md:py-24 order-2 md:order-1"
          style={{ background: "var(--primary)" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-xs font-semibold uppercase tracking-[0.14em] mb-8"
            style={{ color: "oklch(0.58 0.09 290)" }}
          >
            Normal Heights, San Diego · Est. 2000
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-[clamp(2.6rem,5vw,4.5rem)] leading-[1.05] mb-6"
            style={{ color: "var(--on-primary)", fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
          >
            25 years.<br />
            No&nbsp;gimmicks.<br />
            Just&nbsp;ice&nbsp;cream.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
            className="text-base leading-relaxed mb-10"
            style={{ color: "oklch(0.78 0.05 290)", maxWidth: "38ch" }}
          >
            Handmade on Adams Avenue since 2000. Fresh local dairy, made by the same family who learned from Grandpa Pete.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34, ease: "easeOut" }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/flavors"
              className="px-6 py-3 rounded text-sm font-semibold transition-opacity hover:opacity-90 active:scale-[0.98]"
              style={{ background: "var(--accent)", color: "var(--on-accent)" }}
            >
              See Today's Flavors
            </Link>
            <Link
              href="/location"
              className="px-6 py-3 rounded text-sm font-medium border transition-colors"
              style={{ borderColor: "oklch(0.42 0.09 290)", color: "oklch(0.82 0.04 290)" }}
            >
              Hours & Location
            </Link>
          </motion.div>
        </div>

        {/* Right: hero image */}
        <div className="relative min-h-[50vw] md:min-h-0 order-1 md:order-2 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1200&q=85"
            alt="Colorful handmade ice cream cones with berries and flowers"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ── Press: dark strip ── */}
      <section style={{ background: "oklch(0.22 0.07 290)" }}>
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-10 md:gap-0 md:divide-x" style={{ "--tw-divide-opacity": 1 } as React.CSSProperties}>
          {[
            { outlet: "The New York Times", quote: "A must-visit when in San Diego." },
            { outlet: "San Diego Magazine", quote: "Best Ice Cream in San Diego.", note: "Multiple years running" },
          ].map((p) => (
            <div key={p.outlet} className="flex-1 md:px-10 first:pl-0 last:pr-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] mb-2" style={{ color: "var(--accent)" }}>
                {p.outlet}
                {p.note && <span className="ml-2 opacity-50 normal-case tracking-normal font-normal">{p.note}</span>}
              </p>
              <p className="text-xl font-bold leading-snug" style={{ color: "var(--on-primary)", fontFamily: "var(--font-display)" }}>
                "{p.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Today's flavors: editorial list ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] mb-3" style={{ fontFamily: "var(--font-display)" }}>
              What's in the case today
            </h2>
            <p className="text-base mb-8" style={{ color: "var(--muted)" }}>
              The rotation changes. Call ahead or just show up and be surprised.
            </p>
            <Link
              href="/flavors"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-75"
              style={{ color: "var(--primary)" }}
            >
              Full flavor list (48 total) &rarr;
            </Link>
          </div>

          <div>
            {todaysFlavors.map((name, i) => (
              <div
                key={name}
                className="flex items-center justify-between py-3 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <span className="text-base font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                  {name}
                </span>
                {name.startsWith("Vegan") && (
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{ background: "oklch(0.88 0.06 155)", color: "oklch(0.30 0.09 155)" }}
                  >
                    Vegan
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The cold facts: ruled list on surface ── */}
      <section style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3.25rem)] mb-4" style={{ fontFamily: "var(--font-display)" }}>
                The cold facts
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                What makes Mariposa different isn't a story we tell. It's what we don't put in.
              </p>
            </div>
            <div>
              {facts.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                  className="py-5 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p className="text-base font-semibold mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    {f.label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {f.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Heritage: image + quote ── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[340px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=900&q=85"
            alt="Blackberry and berry ice cream bars on parchment paper"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center px-8 md:px-14 py-14"
          style={{ background: "var(--primary)" }}
        >
          <blockquote
            className="text-[clamp(1.35rem,2.8vw,2.1rem)] font-bold leading-snug mb-6"
            style={{ color: "var(--on-primary)", fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            "Grandpa Pete told him it's simple. Fresh milk, good cream, quality ingredients. The rest takes care of itself."
          </blockquote>
          <p className="text-sm mb-8" style={{ color: "oklch(0.65 0.06 290)" }}>
            Dick VanRansom, founder. Fourth-generation Dutch dairy farmer. Still making every batch the same way.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-75"
            style={{ color: "var(--accent)" }}
          >
            The full story &rarr;
          </Link>
        </motion.div>
      </section>

      {/* ── Hours bar ── */}
      <section className="border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>
              3450 Adams Avenue, Normal Heights
            </h2>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              Thu – Sat &nbsp;1pm – 9pm &nbsp;&nbsp; Sun &nbsp;2pm – 8pm &nbsp;&nbsp; Mon – Wed &nbsp;Closed
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="tel:6192845197"
              className="px-5 py-2.5 rounded border text-sm font-medium transition-colors hover:border-ink"
              style={{ borderColor: "var(--border)", color: "var(--ink)" }}
            >
              Call ahead
            </a>
            <Link
              href="/location"
              className="px-5 py-2.5 rounded text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: "var(--primary)", color: "var(--on-primary)" }}
            >
              Get directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
