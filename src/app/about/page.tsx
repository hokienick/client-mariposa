import Link from "next/link";

const facts = [
  { label: "No eggs", detail: "Most flavors are egg-free" },
  { label: "1/3 less sugar", detail: "Compared to typical commercial ice cream" },
  { label: "Half the air", detail: "Denser, richer scoops" },
  { label: "Dairy-free sorbet", detail: "All sorbets are completely dairy-free" },
];

const timeline = [
  { year: "1923", event: "The White Mountain hand-crank maker is used on the VanRansom family farm in New York" },
  { year: "1970s", event: "A 12-year-old Dick VanRansom learns the craft from his grandfather, Pete" },
  { year: "2000", event: "Mariposa moves from Mariposa, California to San Diego's Adams Avenue" },
  { year: "2005+", event: "Voted Best Ice Cream in San Diego by San Diego Magazine, multiple years" },
  { year: "2010s", event: "Featured in The New York Times as a must-visit San Diego destination" },
  { year: "2025", event: "Celebrating 25 years in Normal Heights" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: "var(--accent)" }}
        >
          Four generations of dairy farming
        </p>
        <h1
          className="text-[clamp(2.5rem,6vw,5rem)] leading-tight mb-6 max-w-3xl"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
        >
          The simplest recipe is usually the best one.
        </h1>
        <p
          className="text-lg max-w-xl leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Mariposa was built on one idea: that honest ingredients, properly handled, don't need to be dressed up. A lesson learned on a farm in New York, brought to San Diego, and still practiced every day on Adams Avenue.
        </p>
      </section>

      {/* Founder story */}
      <section style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="text-3xl mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Dick learned to make ice cream when he was 12 years old.
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              <p>
                His grandfather, Pete, a fourth-generation Dutch dairy farmer from New York, sat him down with a 1923 White Mountain hand-cranked ice cream maker and taught him the only rule that matters: fresh milk, good cream, quality ingredients.
              </p>
              <p>
                That machine still sits in the shop on Adams Avenue today.
              </p>
              <p>
                Dick started Mariposa in Mariposa, California, and moved to San Diego in the summer of 2000. "Mariposa" means butterfly in Spanish, a name that fits a business built on transformation: raw dairy, turned into something you remember.
              </p>
              <p>
                Every batch is still made in-house using a batch freezer designed to exactly duplicate the hand-cranked process. Nothing has changed. That's the point.
              </p>
            </div>
          </div>

          <div
            className="rounded-3xl p-10 flex flex-col gap-6"
            style={{ background: "var(--foreground)" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              The cold facts
            </p>
            <div className="grid grid-cols-1 gap-4">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0"
                  style={{ borderColor: "#3D2418" }}
                >
                  <span
                    className="mt-0.5 w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "var(--accent)" }}
                  />
                  <div>
                    <p
                      className="text-sm font-bold mb-0.5"
                      style={{ color: "#FAF8F4" }}
                    >
                      {f.label}
                    </p>
                    <p className="text-xs" style={{ color: "#9E8878" }}>
                      {f.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--accent)" }}
        >
          History
        </p>
        <h2 className="text-3xl mb-12" style={{ fontFamily: "var(--font-display)" }}>
          From the farm to Adams Avenue
        </h2>
        <div className="space-y-8">
          {timeline.map((t, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div
                className="text-sm font-bold tabular-nums flex-shrink-0 w-12 pt-0.5"
                style={{ color: "var(--accent)", fontFamily: "var(--font-display)" }}
              >
                {t.year}
              </div>
              <div
                className="flex-1 pb-8 border-b last:border-0"
                style={{ borderColor: "var(--border)" }}
              >
                <p className="text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
                  {t.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="border-t"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className="text-2xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The best way to understand it is to taste it.
          </p>
          <Link
            href="/flavors"
            className="px-6 py-3 rounded-full text-sm font-semibold flex-shrink-0 transition-opacity hover:opacity-90"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            See today's flavors
          </Link>
        </div>
      </section>
    </div>
  );
}
