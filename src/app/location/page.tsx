const hours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "Closed" },
  { day: "Wednesday", hours: "Closed" },
  { day: "Thursday", hours: "1pm - 9pm" },
  { day: "Friday", hours: "1pm - 9pm" },
  { day: "Saturday", hours: "1pm - 9pm" },
  { day: "Sunday", hours: "2pm - 8pm" },
];

const today = new Date().toLocaleDateString("en-US", { weekday: "long" }) as string;

export default function LocationPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-14">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--accent)" }}
        >
          Normal Heights, San Diego
        </p>
        <h1 className="text-5xl mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Visit Us
        </h1>
        <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
          We're on Adams Avenue in the heart of Normal Heights. Always worth a call ahead to confirm we're open.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Hours */}
        <div
          className="rounded-2xl p-8 border"
          style={{ borderColor: "var(--border)", background: "var(--background)" }}
        >
          <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Hours
          </h2>
          <div className="space-y-3">
            {hours.map((h) => {
              const isToday = h.day === today;
              const isClosed = h.hours === "Closed";
              return (
                <div
                  key={h.day}
                  className="flex items-center justify-between text-sm py-2 px-3 rounded-lg"
                  style={{
                    background: isToday ? "var(--accent)" + "12" : "transparent",
                  }}
                >
                  <span
                    className="font-medium"
                    style={{
                      color: isToday ? "var(--accent)" : "var(--foreground)",
                      fontWeight: isToday ? 700 : 500,
                    }}
                  >
                    {h.day}
                    {isToday && (
                      <span
                        className="ml-2 text-[10px] font-bold uppercase"
                        style={{ color: "var(--accent)" }}
                      >
                        Today
                      </span>
                    )}
                  </span>
                  <span
                    style={{
                      color: isClosed ? "var(--muted)" : isToday ? "var(--accent)" : "var(--foreground)",
                      fontWeight: isToday ? 700 : 400,
                    }}
                  >
                    {h.hours}
                  </span>
                </div>
              );
            })}
          </div>
          <p
            className="text-xs mt-6 leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Hours may vary. We post changes on the website and answering machine. When in doubt, call ahead.
          </p>
        </div>

        {/* Address + contact */}
        <div className="flex flex-col gap-4">
          <div
            className="rounded-2xl p-8 border flex-1"
            style={{ borderColor: "var(--border)", background: "var(--background)" }}
          >
            <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Address
            </h2>
            <address className="not-italic space-y-1 text-base mb-6" style={{ color: "var(--muted)" }}>
              <p className="font-semibold text-lg" style={{ color: "var(--foreground)" }}>
                Mariposa Homemade Ice Cream
              </p>
              <p>3450 Adams Avenue</p>
              <p>Normal Heights, San Diego</p>
              <p>CA 92116</p>
            </address>
            <a
              href="https://maps.google.com/?q=3450+Adams+Ave+San+Diego+CA+92116"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors"
              style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
            >
              Open in Google Maps &rarr;
            </a>
          </div>

          <div
            className="rounded-2xl p-8"
            style={{ background: "var(--foreground)" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--accent)" }}
            >
              Call ahead
            </p>
            <p
              className="text-3xl font-bold mb-2"
              style={{ color: "#FAF8F4", fontFamily: "var(--font-display)" }}
            >
              <a href="tel:6192845197" className="hover:opacity-80 transition-opacity">
                619-284-5197
              </a>
            </p>
            <p className="text-sm" style={{ color: "#9E8878" }}>
              We always post hour changes on our answering machine.
            </p>
          </div>
        </div>
      </div>

      {/* Map embed */}
      <div
        className="rounded-2xl overflow-hidden border"
        style={{ borderColor: "var(--border)" }}
      >
        <iframe
          title="Mariposa Ice Cream location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.3!2d-117.1282!3d32.7612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9558e73a5e3b5%3A0x1!2s3450+Adams+Ave%2C+San+Diego%2C+CA+92116!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="360"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
