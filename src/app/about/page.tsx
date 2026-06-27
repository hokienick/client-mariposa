import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Hero headline */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-14">
        <h1
          className="text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[1.0] mb-8 max-w-3xl"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
        >
          A fourth-generation dairy farmer walks into a shop on Adams Avenue.
        </h1>
        <p className="text-lg leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
          That's not a joke. It's the reason everything here tastes the way it does.
        </p>
      </section>

      {/* Story + image */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1516559828984-fb3b99548b21?auto=format&fit=crop&w=900&q=85"
            alt="Close-up of a handmade strawberry ice cream scoop"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div
          className="px-8 md:px-14 py-14 flex flex-col justify-center"
          style={{ background: "var(--surface)" }}
        >
          <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              Dick VanRansom's family has been in dairy farming for four generations, stretching back to New York. When he was 12, his grandfather Pete sat him down with a 1923 White Mountain hand-cranked ice cream maker and taught him the only thing he needed to know:
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
            <p>That machine still sits in the shop today. Not as decoration -- as the standard.</p>
            <p>
              Dick started Mariposa in Mariposa, California and moved to San Diego in 2000. Every batch is still made in-house using a freezer designed to replicate the hand-cranked method.
            </p>
            <p>No gimmicks. No story that needs a press release. Just the ice cream.</p>
          </div>
        </div>
      </section>

      {/* Cold facts on warm surface */}
      <section style={{ background: "var(--bg)" }}>
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4">
            <div>
              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] mb-4 leading-[1.05]"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
              >
                The cold facts
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                What goes in matters. Here's what makes Mariposa ice cream taste the way it does.
              </p>
            </div>
            <div>
              {[
                { fact: "No eggs in most flavors", why: "Exceptions: Pumpkin and Cookie Dough." },
                { fact: "One-third less sugar", why: "Compared to typical commercial ice cream." },
                { fact: "Half the air", why: "Denser scoops. You're paying for ice cream, not air." },
                { fact: "Fresh California dairy", why: "Sourced weekly from local dairies." },
                { fact: "Sorbet is dairy-free", why: "All sorbets are completely plant-based." },
                { fact: "Sherbet has minimal dairy", why: "Small amounts of lowfat milk only." },
              ].map((f) => (
                <div
                  key={f.fact}
                  className="py-4 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p className="font-semibold text-base mb-0.5">{f.fact}</p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{f.why}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline on eggplant — just this one dark section, earned */}
      <section style={{ background: "var(--accent)" }}>
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2
            className="text-[clamp(1.75rem,3.5vw,3rem)] mb-12"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--on-accent)",
              letterSpacing: "-0.02em",
            }}
          >
            From the farm to Adams Avenue
          </h2>
          <div>
            {[
              { year: "1923", event: "The White Mountain hand-cranked ice cream maker is used on the VanRansom family farm in upstate New York." },
              { year: "1970s", event: "At age 12, Dick learns the craft from his grandfather Pete. Good ingredients. Don't complicate it." },
              { year: "2000", event: "Mariposa opens in San Diego on Adams Avenue, Normal Heights. Same recipes, new neighborhood." },
              { year: "2000s", event: "Voted Best Ice Cream in San Diego by San Diego Magazine. The first of several years." },
              { year: "2010s", event: "The New York Times names Mariposa a must-visit destination in San Diego." },
              { year: "2025", event: "25 years on Adams Avenue. Still making it the same way." },
            ].map((t) => (
              <div
                key={t.year}
                className="flex gap-8 py-6 border-b"
                style={{ borderColor: "oklch(0.38 0.09 290)" }}
              >
                <span
                  className="text-sm font-bold tabular-nums shrink-0 pt-0.5 w-10"
                  style={{ color: "var(--primary)", fontFamily: "var(--font-display)" }}
                >
                  {t.year}
                </span>
                <p className="text-base leading-relaxed" style={{ color: "oklch(0.80 0.05 290)" }}>
                  {t.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xl font-bold max-w-lg" style={{ fontFamily: "var(--font-display)" }}>
            The best way to understand what we're talking about is to have a scoop.
          </p>
          <Link
            href="/flavors"
            className="px-6 py-3 text-sm font-bold shrink-0 transition-opacity hover:opacity-90"
            style={{ background: "var(--primary)", color: "var(--on-primary)" }}
          >
            See today's flavors
          </Link>
        </div>
      </section>
    </div>
  );
}
