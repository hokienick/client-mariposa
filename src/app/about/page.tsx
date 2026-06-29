"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

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

const coldFacts = [
  { fact: "No eggs in most flavors", why: "Exceptions: Pumpkin and Cookie Dough. Grandpa Pete's rule: if there are eggs in it, it's custard." },
  { fact: "One-third less sugar", why: "Compared to typical commercial ice cream." },
  { fact: "Half the air", why: "Denser scoops. You're paying for ice cream, not air." },
  { fact: "Fresh California dairy", why: "Sourced weekly from local dairies. Always a fresh mix." },
  { fact: "Sorbet — pronounced sor-bay — is dairy-free", why: "Completely plant-based. No dairy, no exceptions." },
  { fact: "Sherbet has a little dairy", why: "A small amount of lowfat milk. Not the same as sorbet." },
];

const timeline = [
  { year: "1923", event: "The White Mountain hand-cranked ice cream maker is used on the VanRansom family farm in upstate New York." },
  { year: "1970s", event: "At age 12, Dick learns the craft from his grandfather Pete. Good ingredients. Don't complicate it." },
  { year: "2000", event: "Mariposa opens in San Diego on Adams Avenue, Normal Heights. Same recipes, new neighborhood." },
  { year: "2000s", event: "Voted Best Ice Cream in San Diego by San Diego Magazine. The first of several years." },
  { year: "2010s", event: "The New York Times names Mariposa a must-visit destination in San Diego." },
  { year: "2026", event: "26 years on Adams Avenue. Still making it the same way." },
];

export default function AboutPage() {
  return (
    <div>
      {/* ── Hero headline ── */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-14">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[1.0] mb-8 max-w-3xl"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
        >
          A fourth-generation dairy farmer walks into a shop on Adams Avenue.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14, ease: [0.25, 1, 0.5, 1] }}
          className="text-lg leading-relaxed max-w-xl mb-5"
          style={{ color: "var(--muted)" }}
        >
          That's not a joke. It's the reason everything here tastes the way it does.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="text-sm font-medium wide"
          style={{ color: "var(--accent)" }}
        >
          Mariposa means butterfly in Spanish.
        </motion.p>
      </section>

      {/* ── Story + Dick photo ── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden">
          <Image
            src="/images/dick-owner.jpg"
            alt="Dick VanRansom, owner of Mariposa Ice Cream"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <FadeUp>
          <div
            className="px-8 md:px-14 py-14 flex flex-col justify-center h-full"
            style={{ background: "var(--surface)" }}
          >
            <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              <p>
                Dick VanRansom is a fourth-generation Dutch dairy farmer from upstate New York. When he was 12, his grandfather Pete sat him down with a 1923 White Mountain hand-cranked ice cream maker and gave him the only lesson he ever needed:
              </p>
              <blockquote
                className="text-xl font-bold leading-snug my-6"
                style={{
                  color: "var(--ink)",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.02em",
                }}
              >
                "Fresh milk, good cream, quality ingredients. The rest takes care of itself."
              </blockquote>
              <p>
                Grandpa Pete had strong opinions. One of them: if there are eggs in it, it's custard, not ice cream. Most of Mariposa's flavors still don't have eggs.
              </p>
              <p>
                Dick started Mariposa in Mariposa, California and moved to San Diego in 2000. That same 1923 ice cream maker is proudly displayed in the shop today. The batch freezer they use is designed to replicate its hand-cranked process exactly.
              </p>
              <p>No gimmicks. No expensive mix-ins. Just good old-fashioned ice cream, served by the people who make it.</p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Cold facts ── */}
      <section style={{ background: "var(--bg)" }}>
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4">
            <FadeUp>
              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] mb-4 leading-[1.05]"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
              >
                The cold facts
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                What goes in matters. Here's what makes Mariposa ice cream taste the way it does.
              </p>
            </FadeUp>
            <div>
              {coldFacts.map((f, i) => (
                <FadeUp key={f.fact} delay={i * 0.06}>
                  <div
                    className="py-4 border-b"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <p className="font-semibold text-base mb-0.5" style={{ color: "var(--ink)" }}>{f.fact}</p>
                    <p className="text-sm wide" style={{ color: "var(--muted)" }}>{f.why}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline on walnut ── */}
      <section style={{ background: "var(--dark)" }}>
        <div className="max-w-5xl mx-auto px-6 py-20">
          <FadeUp>
            <h2
              className="text-[clamp(1.75rem,3.5vw,3rem)] mb-12"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--on-dark)",
                letterSpacing: "-0.02em",
              }}
            >
              From the farm to Adams Avenue
            </h2>
          </FadeUp>
          <div>
            {timeline.map((t, i) => (
              <FadeUp key={t.year} delay={i * 0.07}>
                <div
                  className="flex gap-8 py-6 border-b"
                  style={{ borderColor: "oklch(0.32 0.05 55)" }}
                >
                  <span
                    className="text-sm font-bold tabular-nums shrink-0 pt-0.5 w-10"
                    style={{ color: "var(--accent)", fontFamily: "var(--font-display)" }}
                  >
                    {t.year}
                  </span>
                  <p className="text-base leading-relaxed wide" style={{ color: "oklch(0.72 0.018 55)" }}>
                    {t.event}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <FadeUp>
            <p className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              The best way to understand what we're talking about is to have a scoop.
            </p>
          </FadeUp>
          <Link
            href="/flavors"
            className="px-6 py-3 text-sm font-bold shrink-0 transition-opacity hover:opacity-90"
            style={{
              background: "var(--accent)",
              color: "var(--on-accent)",
              fontFamily: "var(--font-sans)",
            }}
          >
            See today's flavors
          </Link>
        </div>
      </section>
    </div>
  );
}
