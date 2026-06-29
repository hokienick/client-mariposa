"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

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

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 1, 0.5, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative grid grid-cols-1 md:grid-cols-[58fr_42fr] overflow-hidden"
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
              color: "oklch(0.935 0.018 75)",
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
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="font-bold leading-[1.12] mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem, 3.4vw, 2.8rem)",
              letterSpacing: "-0.028em",
              color: "var(--ink)",
              maxWidth: "18ch",
            }}
          >
            Family-run. Adams Avenue. 26 years of the same recipe.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: [0.25, 1, 0.5, 1] }}
            className="text-base leading-relaxed mb-10"
            style={{ color: "var(--muted)", maxWidth: "38ch" }}
          >
            No gimmicks. No expensive mix-ins. Just good old-fashioned ice cream, made and served by the people who make it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/flavors"
              className="px-7 py-3.5 text-sm font-bold tracking-wide transition-opacity hover:opacity-90"
              style={{
                background: "var(--accent)",
                color: "var(--on-accent)",
                fontFamily: "var(--font-sans)",
              }}
            >
              SEE TODAY'S FLAVORS
            </Link>
            <Link
              href="/location"
              className="px-7 py-3.5 text-sm font-medium border transition-colors hover:border-ink"
              style={{
                borderColor: "var(--border)",
                color: "var(--ink)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Hours &amp; Location
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
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
                <p
                  className="text-sm font-semibold leading-snug wide"
                  style={{ color: "var(--ink)" }}
                >
                  "{p.quote}"
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: hero image */}
        <div className="relative min-h-[60vw] md:min-h-0 order-1 md:order-2 overflow-hidden">
          <Image
            src="/images/cone-mar2026.jpg"
            alt="A waffle cone with fresh scoops from Mariposa Ice Cream"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>
      </section>

      {/* ── Marquee strip ── */}
      <div
        className="overflow-hidden border-y py-3"
        style={{ borderColor: "var(--accent)", background: "var(--accent)" }}
      >
        <div
          className="flex whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.16em]"
          style={{
            color: "var(--on-accent)",
            animation: "marquee 32s linear infinite",
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="pr-6">
              OPEN THURSDAY THROUGH SUNDAY &nbsp;&middot;&nbsp; 26 YEARS ON ADAMS AVENUE &nbsp;&middot;&nbsp; NORMAL HEIGHTS, SAN DIEGO &nbsp;&middot;&nbsp; HANDMADE SINCE 2000 &nbsp;&middot;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── Product showcase ── */}
      <section style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <FadeUp>
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
                style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
              >
                See all 48 →
              </Link>
            </div>
          </FadeUp>

          {/* 3 product images — all Instagram */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
            {[
              {
                src: "/images/lemon-sorbet.jpg",
                alt: "Lemon sorbet — bright and refreshing",
                label: "Fresh sorbet daily",
              },
              {
                src: "/images/blueberry-bowl.jpg",
                alt: "Blueberry ice cream with fresh blueberries",
                label: "Made from real fruit",
              },
              {
                src: "/images/raspberry-ripple.jpg",
                alt: "White chocolate raspberry ripple ice cream",
                label: "48 flavors, rotating daily",
              },
            ].map((img, i) => (
              <FadeUp key={img.src} delay={i * 0.08}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 px-4 py-3"
                    style={{
                      background: "linear-gradient(to top, oklch(0.10 0.02 55 / 0.55), transparent)",
                    }}
                  >
                    <p className="text-white text-xs font-bold uppercase tracking-[0.1em]">
                      {img.label}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Flavor text list */}
          <FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16">
              {todaysFlavors.map((f) => (
                <div
                  key={f.name}
                  className="flex items-center justify-between py-3.5 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="text-base font-bold"
                    style={{ fontFamily: "var(--font-accent)", color: "var(--ink)" }}
                  >
                    {f.name}
                  </span>
                  <div className="flex items-center gap-2">
                    {"note" in f && f.note && (
                      <span
                        className="text-xs hidden sm:block"
                        style={{ color: "var(--muted)" }}
                      >
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
              <Link
                href="/flavors"
                className="text-sm font-bold"
                style={{ color: "var(--accent)" }}
              >
                See all 48 flavors →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Heritage split ── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[400px] overflow-hidden order-2 md:order-1">
          <Image
            src="/images/storefront.jpg"
            alt="Mariposa Ice Cream storefront on Adams Avenue, Normal Heights"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <FadeUp className="order-1 md:order-2">
          <div
            className="flex flex-col justify-center h-full px-8 md:px-14 py-14"
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
                fontSize: "clamp(1.3rem, 2.4vw, 1.9rem)",
                letterSpacing: "-0.02em",
                color: "var(--ink)",
              }}
            >
              "Fresh milk, good cream, quality ingredients. The rest takes care of itself."
            </blockquote>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "var(--muted)", maxWidth: "42ch" }}
            >
              Dick VanRansom learned this from his grandfather Pete at age 12. That 1923 White Mountain hand-cranked ice cream maker is still proudly displayed at Mariposa today. Mariposa means butterfly in Spanish.
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

      {/* ── The craft: 4 warm stats ── */}
      <section style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <FadeUp>
            <h2
              className="text-[clamp(1.75rem,3.5vw,3rem)] mb-14 text-center"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
            >
              Why it tastes different
            </h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { stat: "1/3 less", label: "Sugar than commercial ice cream" },
              { stat: "Half the air", label: "Dense scoops — you pay for ice cream, not air" },
              { stat: "No eggs", label: "In most flavors. Cleaner and lighter" },
              { stat: "Local dairy", label: "Sourced weekly from California farms" },
            ].map((f, i) => (
              <FadeUp key={f.stat} delay={i * 0.07}>
                <div className="text-center">
                  <p
                    className="font-bold mb-2 leading-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)",
                      color: "var(--accent)",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {f.stat}
                  </p>
                  <p className="text-sm leading-snug wide" style={{ color: "var(--muted)" }}>
                    {f.label}
                  </p>
                </div>
              </FadeUp>
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
            <p className="text-sm wide" style={{ color: "oklch(0.90 0.040 15)" }}>
              Thu – Sat 1pm – 9pm &nbsp;&middot;&nbsp; Sun 2pm – 8pm &nbsp;&middot;&nbsp; Mon – Wed Closed
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="tel:6192845197"
              className="px-5 py-2.5 border text-sm font-medium transition-colors hover:bg-white/10"
              style={{
                borderColor: "oklch(0.85 0.06 15)",
                color: "var(--on-accent)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Call ahead
            </a>
            <Link
              href="/location"
              className="px-5 py-2.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{
                background: "var(--on-accent)",
                color: "var(--accent)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Get directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
