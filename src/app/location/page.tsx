"use client";

const hours = [
  { day: "Monday",    time: "Closed", closed: true },
  { day: "Tuesday",   time: "Closed", closed: true },
  { day: "Wednesday", time: "Closed", closed: true },
  { day: "Thursday",  time: "1pm – 9pm", closed: false },
  { day: "Friday",    time: "1pm – 9pm", closed: false },
  { day: "Saturday",  time: "1pm – 9pm", closed: false },
  { day: "Sunday",    time: "2pm – 8pm", closed: false },
];

export default function LocationPage() {
  const today =
    typeof window !== "undefined"
      ? new Date().toLocaleDateString("en-US", { weekday: "long" })
      : "";

  return (
    <div>
      {/* ── Header ── */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10">
        <h1
          className="text-[clamp(3rem,7vw,6.5rem)] leading-[0.92] mb-8"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
        >
          Come find<br />us.
        </h1>
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.14em] mb-2"
              style={{ color: "var(--muted)" }}
            >
              Address
            </p>
            <address
              className="not-italic text-xl leading-relaxed font-semibold"
              style={{ color: "var(--ink)" }}
            >
              3450 Adams Avenue<br />
              Normal Heights<br />
              San Diego, CA 92116
            </address>
          </div>
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.14em] mb-2"
              style={{ color: "var(--muted)" }}
            >
              Open
            </p>
            <div className="text-xl font-semibold leading-relaxed" style={{ color: "var(--ink)" }}>
              <p>Thu – Sat &nbsp;1pm – 9pm</p>
              <p>Sun &nbsp;2pm – 8pm</p>
              <p
                className="text-base font-normal mt-1"
                style={{ color: "var(--muted)" }}
              >
                Mon – Wed closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hours + contact ── */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 mb-14">
          {/* Hours table */}
          <div>
            <h2
              className="text-2xl mb-6"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
              Weekly hours
            </h2>
            {hours.map((h) => {
              const isToday = h.day === today;
              return (
                <div
                  key={h.day}
                  className="flex items-center justify-between py-3.5 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="text-base"
                    style={{
                      color: isToday ? "var(--accent)" : "var(--ink)",
                      fontWeight: isToday ? 700 : 500,
                    }}
                  >
                    {h.day}
                    {isToday && (
                      <span
                        className="ml-2 text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5"
                        style={{
                          background: "oklch(0.93 0.05 25)",
                          color: "var(--accent)",
                          borderRadius: "3px",
                        }}
                      >
                        Today
                      </span>
                    )}
                  </span>
                  <span
                    className="text-base"
                    style={{
                      color: h.closed
                        ? "var(--muted)"
                        : isToday
                        ? "var(--accent)"
                        : "var(--ink)",
                      fontWeight: isToday ? 600 : 400,
                    }}
                  >
                    {h.time}
                  </span>
                </div>
              );
            })}
            <p
              className="text-xs mt-5 leading-relaxed wide"
              style={{ color: "var(--muted)" }}
            >
              Hours may vary on holidays. We post changes on the answering machine.
            </p>
          </div>

          {/* Call + directions */}
          <div className="flex flex-col gap-6">
            <div className="p-7" style={{ background: "var(--surface)" }}>
              <p
                className="text-xs font-bold uppercase tracking-[0.12em] mb-3"
                style={{ color: "var(--muted)" }}
              >
                Call ahead
              </p>
              <a
                href="tel:6192845197"
                className="block font-bold leading-none mb-2 transition-opacity hover:opacity-80"
                style={{
                  color: "var(--accent)",
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem,3.5vw,2.5rem)",
                }}
              >
                619-284-5197
              </a>
              <p
                className="text-sm wide"
                style={{ color: "var(--muted)" }}
              >
                We post hour changes on the answering machine when they come up.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=3450+Adams+Ave+San+Diego+CA+92116"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold border px-5 py-3 transition-colors hover:border-ink self-start"
              style={{
                borderColor: "var(--border)",
                color: "var(--ink)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Open in Google Maps &rarr;
            </a>
          </div>
        </div>

        {/* Map */}
        <div
          className="overflow-hidden border"
          style={{ borderColor: "var(--border)" }}
        >
          <iframe
            title="Mariposa Ice Cream on Adams Avenue"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.3!2d-117.1282!3d32.7612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9558e73a5e3b5%3A0x1!2s3450+Adams+Ave%2C+San+Diego%2C+CA+92116!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="380"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
