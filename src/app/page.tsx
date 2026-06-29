"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function FadeUp({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 1, 0.5, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const showcaseFlavors = [
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

      {/* ── HERO — type-as-visual, ice cream floating center ── */}
      <section
        className="relative overflow-x-hidden flex flex-col items-center"
        style={{ minHeight: "calc(100vh - 64px)", background: "var(--bg)" }}
      >
        {/* Top label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 text-[11px] font-bold uppercase tracking-[0.22em] text-center"
          style={{ color: "var(--muted)" }}
        >
          Normal Heights · San Diego · Est. 2000
        </motion.p>

        {/* Type + photo sandwich — photo floats between MARIPOSA and ICE CREAM */}
        <div className="relative w-full flex flex-col items-center" style={{ marginTop: "2vw" }}>

          {/* MARIPOSA — z-0, behind the photo */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-0 w-full text-center"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4.5rem, 19.5vw, 19.5rem)",
              letterSpacing: "-0.045em",
              lineHeight: 0.88,
              textTransform: "uppercase",
              color: "var(--ink)",
              whiteSpace: "nowrap",
            }}
          >
            MARIPOSA
          </motion.h1>

          {/* Cone photo — z-10, negative margins so it bites into both text lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 overflow-hidden"
            style={{
              width: "clamp(160px, 26vw, 380px)",
              aspectRatio: "3/4",
              marginTop: "clamp(-1.5rem, -4.5vw, -4.5rem)",
              marginBottom: "clamp(-1.5rem, -4.5vw, -4.5rem)",
              boxShadow: "0 40px 100px oklch(0.10 0.02 55 / 0.22)",
            }}
          >
            <Image
              src="/images/cone-mar2026.jpg"
              alt="A waffle cone from Mariposa Ice Cream"
              fill
              className="object-cover object-center"
              priority
              sizes="26vw"
            />
          </motion.div>

          {/* ICE CREAM — z-0, behind the photo */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-0 w-full text-center"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 14.5vw, 14.5rem)",
              letterSpacing: "-0.045em",
              lineHeight: 0.88,
              textTransform: "uppercase",
              color: "var(--ink)",
              whiteSpace: "nowrap",
            }}
          >
            ICE CREAM
          </motion.p>

        </div>

        {/* Subline + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="flex flex-col items-center gap-5 mt-8 mb-12 px-6"
        >
          <p
            className="text-base text-center"
            style={{ color: "var(--muted)", maxWidth: "38ch" }}
          >
            No gimmicks. No mix-ins. Made and served by the same family for 26 years.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/flavors"
              className="px-7 py-3.5 text-sm font-bold tracking-wider transition-opacity hover:opacity-85"
              style={{ background: "var(--accent)", color: "var(--on-accent)", fontFamily: "var(--font-sans)" }}
            >
              SEE TODAY'S FLAVORS
            </Link>
            <Link
              href="/location"
              className="px-7 py-3.5 text-sm font-medium border transition-colors hover:border-ink"
              style={{ borderColor: "var(--border)", color: "var(--ink)", fontFamily: "var(--font-sans)" }}
            >
              Hours & Location
            </Link>
          </div>

          {/* Press quotes — side by side */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 mt-3">
            {[
              { outlet: "New York Times", quote: "A must-visit when in San Diego." },
              { outlet: "San Diego Magazine", quote: "Best Ice Cream in San Diego." },
            ].map((p) => (
              <div key={p.outlet} className="flex items-start gap-2.5">
                <span
                  className="text-[9px] font-bold uppercase tracking-[0.12em] shrink-0 mt-0.5"
                  style={{ color: "var(--muted)" }}
                >
                  {p.outlet}
                </span>
                <p className="text-xs font-semibold" style={{ color: "var(--ink)" }}>
                  "{p.quote}"
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Marquee ── */}
      <div
        className="overflow-hidden py-3.5"
        style={{ background: "var(--secondary)" }}
      >
        <div
          className="flex whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{ color: "var(--on-secondary)", animation: "marquee 30s linear infinite" }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="pr-8">
              OPEN THURSDAY THROUGH SUNDAY &nbsp;&middot;&nbsp; 26 YEARS ON ADAMS AVENUE &nbsp;&middot;&nbsp; NORMAL HEIGHTS, SAN DIEGO &nbsp;&middot;&nbsp; HANDMADE SINCE 2000 &nbsp;&middot;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── Full-bleed quote feature ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "70vh" }}>
        <Image
          src="/images/lemon-sorbet.jpg"
          alt="Lemon sorbet from Mariposa"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "oklch(0.10 0.02 55 / 0.62)" }}
        />
        <FadeUp className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
          <p
            className="text-white mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5.5vw, 5.5rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              maxWidth: "16ch",
            }}
          >
            "A MUST-VISIT WHEN IN SAN DIEGO."
          </p>
          <p
            className="text-sm font-bold uppercase tracking-[0.18em]"
            style={{ color: "oklch(0.80 0.030 55)" }}
          >
            — New York Times
          </p>
          <Link
            href="/flavors"
            className="mt-10 px-8 py-4 text-sm font-bold tracking-wider transition-opacity hover:opacity-90"
            style={{ background: "var(--accent)", color: "var(--on-accent)", fontFamily: "var(--font-sans)" }}
          >
            SEE TODAY'S FLAVORS
          </Link>
        </FadeUp>
      </section>

      {/* ── Flavors — 48 as giant watermark ── */}
      <section style={{ background: "var(--surface)" }}>
        <div className="relative max-w-6xl mx-auto px-6 py-16 overflow-hidden">
          {/* Giant watermark number */}
          <div
            aria-hidden
            className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none font-bold leading-none"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(14rem, 38vw, 38rem)",
              color: "oklch(0.918 0.014 85)",
              letterSpacing: "-0.06em",
            }}
          >
            48
          </div>

          <div className="relative z-10">
            <FadeUp>
              <div className="flex items-baseline justify-between mb-10">
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 4.5vw, 4rem)",
                    letterSpacing: "-0.035em",
                    lineHeight: 1.0,
                  }}
                >
                  What's in the case
                </h2>
                <Link
                  href="/flavors"
                  className="text-sm font-bold hidden sm:block transition-opacity hover:opacity-70"
                  style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
                >
                  See all 48 →
                </Link>
              </div>
            </FadeUp>

            {/* 3 photos */}
            <div className="grid grid-cols-3 gap-2 mb-10">
              {[
                { src: "/images/blueberry-bowl.jpg", alt: "Blueberry ice cream" },
                { src: "/images/raspberry-ripple.jpg", alt: "White chocolate raspberry ripple" },
                { src: "/images/sundae.jpg", alt: "Mariposa sundae" },
              ].map((img, i) => (
                <FadeUp key={img.src} delay={i * 0.07}>
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-[1.04]"
                      sizes="33vw"
                    />
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Flavor list */}
            <FadeUp>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16">
                {showcaseFlavors.map((f) => (
                  <div
                    key={f.name}
                    className="flex items-center justify-between py-3.5 border-b"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <span
                      className="text-lg font-bold"
                      style={{ fontFamily: "var(--font-accent)", color: "var(--ink)" }}
                    >
                      {f.name}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      {"note" in f && f.note && (
                        <span className="text-xs hidden sm:block" style={{ color: "var(--muted)" }}>
                          {f.note}
                        </span>
                      )}
                      {"vegan" in f && f.vegan && (
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5"
                          style={{ background: "oklch(0.88 0.06 155)", color: "oklch(0.28 0.10 155)", borderRadius: "9999px" }}
                        >
                          Vegan
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Story — storefront + walnut ── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
          <Image
            src="/images/storefront.jpg"
            alt="Mariposa Ice Cream on Adams Avenue"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <FadeUp>
          <div
            className="flex flex-col justify-center h-full px-8 md:px-14 py-16"
            style={{ background: "var(--dark)" }}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.16em] mb-6"
              style={{ color: "var(--accent)" }}
            >
              Normal Heights · San Diego
            </p>
            <blockquote
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                color: "var(--on-dark)",
              }}
              className="mb-6"
            >
              "Fresh milk, good cream, quality ingredients. The rest takes care of itself."
            </blockquote>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "oklch(0.62 0.018 55)", maxWidth: "42ch" }}
            >
              Dick VanRansom learned this from his grandfather Pete at age 12. That 1923 White Mountain hand-cranked ice cream maker is still on display at Mariposa today.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-70"
              style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
            >
              OUR STORY →
            </Link>
          </div>
        </FadeUp>
      </section>

      {/* ── Manifesto stats ── */}
      <section style={{ background: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <FadeUp>
            <p
              className="text-xs font-bold uppercase tracking-[0.16em] mb-10"
              style={{ color: "var(--muted)" }}
            >
              Why it tastes different
            </p>
          </FadeUp>
          {[
            { stat: "1/3 less sugar", note: "than commercial ice cream" },
            { stat: "Half the air", note: "denser scoops — you pay for ice cream, not filler" },
            { stat: "No eggs", note: "in most flavors — lighter, cleaner, Grandpa Pete's rule" },
            { stat: "Local dairy", note: "sourced fresh weekly from California farms" },
          ].map((f, i) => (
            <FadeUp key={f.stat} delay={i * 0.06}>
              <div
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-6 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.0,
                    color: "var(--accent)",
                  }}
                >
                  {f.stat}
                </span>
                <span className="text-base" style={{ color: "var(--muted)", fontFamily: "var(--font-sans)" }}>
                  {f.note}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── Two-up photos ── */}
      <div className="grid grid-cols-2">
        {[
          { src: "/images/blueberry-bowl.jpg", alt: "Blueberry ice cream" },
          { src: "/images/cone-mar2026.jpg", alt: "Waffle cone" },
        ].map((img) => (
          <div key={img.src} className="relative overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
            <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-[1.03] transition-transform duration-500" sizes="50vw" />
          </div>
        ))}
      </div>

      {/* ── Hours CTA ── */}
      <section style={{ background: "var(--accent)" }}>
        <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
                letterSpacing: "-0.03em",
                color: "var(--on-accent)",
                lineHeight: 1.0,
              }}
            >
              3450 Adams Avenue, Normal Heights
            </h2>
            <p className="mt-2 text-sm wide" style={{ color: "oklch(0.90 0.040 15)" }}>
              Thu – Sat 1pm – 9pm &nbsp;&middot;&nbsp; Sun 2pm – 8pm &nbsp;&middot;&nbsp; Mon – Wed Closed
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="tel:6192845197"
              className="px-5 py-3 border text-sm font-bold transition-colors hover:bg-white/10"
              style={{ borderColor: "var(--on-accent)", color: "var(--on-accent)", fontFamily: "var(--font-sans)" }}
            >
              619-284-5197
            </a>
            <Link
              href="/location"
              className="px-5 py-3 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ background: "var(--on-accent)", color: "var(--accent)", fontFamily: "var(--font-sans)" }}
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
