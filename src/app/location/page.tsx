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
  const today = typeof window !== "undefined"
    ? new Date().toLocaleDateString("en-US", { weekday: "long" })
    : "";

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1
        className="text-[clamp(2.5rem,6vw,5rem)] leading-none mb-4"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
      >
        Visit Us
      </h1>
      <p className="text-base mb-14" style={{ color: "var(--muted)" }}>
        3450 Adams Avenue, Normal Heights, San Diego. Always worth a call ahead.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 mb-14">
        {/* Hours */}
        <div>
          <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)" }}>Hours</h2>
          <div>
            {hours.map((h) => {
              const isToday = h.day === today;
              return (
                <div
                  key={h.day}
                  className="flex items-center justify-between py-3.5 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="text-base font-medium"
                    style={{ color: isToday ? "var(--primary)" : "var(--ink)", fontWeight: isToday ? 700 : 500 }}
                  >
                    {h.day}
                    {isToday && (
                      <span
                        className="ml-2 text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                        style={{ background: "oklch(0.93 0.05 290)", color: "var(--primary)" }}
                      >
                        Today
                      </span>
                    )}
                  </span>
                  <span
                    className="text-base"
                    style={{
                      color: h.closed ? "var(--muted)" : isToday ? "var(--primary)" : "var(--ink)",
                      fontWeight: isToday ? 600 : 400,
                    }}
                  >
                    {h.time}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="text-xs mt-5 leading-relaxed" style={{ color: "var(--muted)" }}>
            Hours may vary on holidays. We post changes on the website and answering machine — if in doubt, call.
          </p>
        </div>

        {/* Address + call */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)" }}>Address</h2>
            <address className="not-italic text-base leading-loose mb-6" style={{ color: "var(--muted)" }}>
              <strong style={{ color: "var(--ink)", display: "block", marginBottom: "4px" }}>
                Mariposa Homemade Ice Cream
              </strong>
              3450 Adams Avenue<br />
              Normal Heights<br />
              San Diego, CA 92116
            </address>
            <a
              href="https://maps.google.com/?q=3450+Adams+Ave+San+Diego+CA+92116"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold border rounded px-4 py-2.5 transition-colors hover:border-ink"
              style={{ borderColor: "var(--border)", color: "var(--ink)" }}
            >
              Open in Google Maps &rarr;
            </a>
          </div>

          <div
            className="rounded p-7"
            style={{ background: "var(--primary)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "oklch(0.58 0.09 290)" }}>
              Call ahead
            </p>
            <a
              href="tel:6192845197"
              className="block text-[2rem] font-bold leading-none mb-2 transition-opacity hover:opacity-80"
              style={{ color: "var(--on-primary)", fontFamily: "var(--font-display)" }}
            >
              619-284-5197
            </a>
            <p className="text-sm" style={{ color: "oklch(0.65 0.06 290)" }}>
              We post hour changes on the answering machine when they come up.
            </p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="rounded overflow-hidden border" style={{ borderColor: "var(--border)" }}>
        <iframe
          title="Mariposa Ice Cream on Adams Avenue"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.3!2d-117.1282!3d32.7612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9558e73a5e3b5%3A0x1!2s3450+Adams+Ave%2C+San+Diego%2C+CA+92116!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="340"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
