"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const todaysFlavors = [
  { name: "Heath Butter Toffee", note: "Fan favorite" },
  { name: "Mexican Chocolate", note: "House specialty" },
  { name: "Coconut Almond Fudge" },
  { name: "Mint Chip" },
  { name: "Cookies & Cream" },
  { name: "Rocky Road" },
  { name: "Strawberry" },
  { name: "Banana Walnut" },
  { name: "Vegan Mango Sorbet", vegan: true },
  { name: "Vegan Cookies & Cream", vegan: true },
  { name: "Coffee" },
  { name: "Vanilla" },
] as const;

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative grid grid-cols-1 md:grid-cols-[55fr_45fr] overflow-hidden"
        style={{ minHeight: "calc(100vh - 64px)" }}
      >
        {/* Ghost watermark */}
        <div
          className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none"
          aria-hidden
        >
          <span
            className="font-bold leading-none"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(7rem, 22vw, 20rem)",
              color: "oklch(0.935 0.016 40)",
              letterSpacing: "-0.04em",
              whiteSpace: "nowrap",
            }}
          >
            Mariposa
          </span>
        </div>

        {/* Left: copy */}
        <div className="relative flex flex-col justify-center px-8 md:px-14 py-20 order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="font-bold leading-[1.15] mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3.2vw, 2.6rem)",
              letterSpacing: "-0.025em",
              maxWidth: "18ch",
            }}
          >
            Mariposa is a family-run ice cream shop on Adams Avenue. We've been making it the same way for 25 years.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: "easeOut" }}
            className="text-base leading-relaxed mb-10"
            style={{ color: "var(--muted)", maxWidth: "34ch" }}
          >
            Fresh local dairy. No shortcuts. No gimmicks. Come in and pick a scoop.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26, ease: "easeOut" }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/flavors"
              className="px-7 py-3.5 text-sm font-bold tracking-wide transition-opacity hover:opacity-90"
              style={{ background: "var(--primary)", color: "var(--on-primary)" }}
            >
              SEE TODAY'S FLAVORS
            </Link>
            <Link
              href="/location"
              className="px-7 py-3.5 text-sm font-medium border transition-colors hover:border-ink"
              style={{ borderColor: "var(--border)", color: "var(--ink)" }}
            >
              Hours &amp; Location
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="mt-14 flex flex-col gap-4"
          >
            {[
              { outlet: "New York Times", quote: "A must-visit when in San Diego." },
              { outlet: "San Diego Magazine", quote: "Best Ice Cream in San Diego." },
            ].map((p) => (
              <div key={p.outlet} className="flex items-start gap-4">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.13em] mt-0.5 w-24 shrink-0"
                  style={{ color: "var(--muted)" }}
                >
                  {p.outlet}
                </span>
                <p className="text-sm font-semibold leading-snug" style={{ color: "var(--ink)" }}>
                  "{p.quote}"
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: hero image */}
        <div className="relative min-h-[55vw] md:min-h-0 order-1 md:order-2 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=900&q=85"
            alt="A hand holding a strawberry ice cream cone against a warm background"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
      </section>

      {/* ── Marquee strip ── */}
      <div
        className="overflow-hidden border-y py-3"
        style={{ borderColor: "var(--border)", background: "var(--primary)" }}
      >
        <div
          className="flex whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.16em]"
          style={{
            color: "var(--on-primary)",
            animation: "marquee 28s linear infinite",
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="pr-6">
              OPEN THURSDAY THROUGH SUNDAY &nbsp;&middot;&nbsp; 25 YEARS ON ADAMS AVENUE &nbsp;&middot;&nbsp; NORMAL HEIGHTS, SAN DIEGO &nbsp;&middot;&nbsp; HANDMADE SINCE 2000 &nbsp;&middot;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── Product showcase ── */}
      <section style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-baseline justify-between mb-10">
            <h2
              className="text-[clamp(1.75rem,3.5vw,3rem)]"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
            >
              What's in the case today
            </h2>
            <Link
              href="/flavors"
              className="text-sm font-bold hidden sm:block transition-opacity hover:opacity-70"
              style={{ color: "var(--primary)" }}
            >
              See all 48 →
            </Link>
          </div>

          {/* 3 product images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
            {[
              {
                src: "photo-1501443762994-82bd5dace89a",
                alt: "Colorful ice cream cones",
                label: "All flavors in the case",
              },
              {
                src: "photo-1570197788417-0e82375c9371",
                alt: "Caramel ice cream scoops on a ceramic pedestal",
                label: "Made fresh daily",
              },
              {
                src: "photo-1497034825429-c343d7c6a68f",
                alt: "Strawberry ice cream cone held up",
                label: "48 flavors, rotating daily",
              },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/${img.src}?auto=format&fit=crop&w=600&q=85`}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.10 0.01 50 / 0.65), transparent)",
                  }}
                >
                  <p className="text-white text-xs font-bold uppercase tracking-[0.1em]">
                    {img.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Flavor text list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16">
            {todaysFlavors.map((f) => (
              <div
                key={f.name}
                className="flex items-center justify-between py-3.5 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <span className="text-base font-medium">{f.name}</span>
                <div className="flex items-center gap-2">
                  {"note" in f && f.note && (
                    <span className="text-xs hidden sm:block" style={{ color: "var(--muted)" }}>
                      {f.note}
                    </span>
                  )}
                  {"vegan" in f && f.vegan && (
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
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Link href="/flavors" className="text-sm font-bold" style={{ color: "var(--primary)" }}>
              See all 48 flavors →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Heritage split ── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[400px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=900&q=85"
            alt="Blackberry ice cream bars on parchment paper"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div
          className="flex flex-col justify-center px-8 md:px-14 py-14"
          style={{ background: "var(--bg)" }}
        >
          <p
            className="text-xs font-bold uppercase tracking-[0.14em] mb-5"
            style={{ color: "var(--muted)" }}
          >
            Normal Heights, San Diego
          </p>
          <blockquote
            className="font-bold leading-snug mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.25rem, 2.4vw, 1.85rem)",
              letterSpacing: "-0.02em",
            }}
          >
            "Fresh milk, good cream, quality ingredients. The rest takes care of itself."
          </blockquote>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
            Dick VanRansom learned this from his grandfather Pete in 1970. That 1923 hand-cranked ice cream maker still sets the standard at Mariposa today.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-70"
            style={{ color: "var(--primary)" }}
          >
            OUR STORY →
          </Link>
        </div>
      </section>

      {/* ── The craft: 4 warm stats ── */}
      <section style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2
            className="text-[clamp(1.75rem,3.5vw,3rem)] mb-14 text-center"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
          >
            Why it tastes different
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { stat: "1/3 less", label: "Sugar than commercial ice cream" },
              { stat: "Half the air", label: "Dense scoops — you pay for ice cream, not air" },
              { stat: "No eggs", label: "In most flavors. Cleaner and lighter" },
              { stat: "Local dairy", label: "Sourced weekly from California farms" },
            ].map((f) => (
              <div key={f.stat} className="text-center">
                <p
                  className="font-bold mb-2 leading-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)",
                    color: "var(--primary)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {f.stat}
                </p>
                <p className="text-sm leading-snug" style={{ color: "var(--muted)" }}>
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hours bar ── */}
      <section style={{ background: "var(--accent)" }}>
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2
              className="text-xl font-bold mb-1"
              style={{ fontFamily: "var(--font-display)", color: "var(--on-accent)" }}
            >
              3450 Adams Avenue, Normal Heights
            </h2>
            <p className="text-sm" style={{ color: "oklch(0.72 0.06 290)" }}>
              Thu – Sat 1pm – 9pm &nbsp;&middot;&nbsp; Sun 2pm – 8pm &nbsp;&middot;&nbsp; Mon – Wed Closed
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="tel:6192845197"
              className="px-5 py-2.5 border text-sm font-medium transition-colors"
              style={{ borderColor: "oklch(0.42 0.09 290)", color: "oklch(0.82 0.04 290)" }}
            >
              Call ahead
            </a>
            <Link
              href="/location"
              className="px-5 py-2.5 text-sm font-bold transition-opacity hover:opacity-90"
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
