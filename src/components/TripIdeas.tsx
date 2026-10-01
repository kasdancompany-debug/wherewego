import { tripIdeas, pricingDisclosure } from "@/lib/data/trips";

const ACCENT_BORDER: Record<string, string> = {
  coral: "border-t-coral",
  sun: "border-t-sun",
  med: "border-t-med",
  palm: "border-t-palm",
};

export default function TripIdeas() {
  return (
    <section className="border-b border-ink/10">
      <div className="container-wide py-24">
        <div className="reveal mb-12">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-coral mb-3">
            Not deals. Ideas.
          </p>
          <h2 className="font-display font-semibold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
            Where we could go.
          </h2>
        </div>

        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tripIdeas.map((t) => (
            <div key={t.slug} className={`border-t-4 ${ACCENT_BORDER[t.accent]} bg-surface p-6`}>
              <h3 className="font-display font-semibold uppercase text-xl leading-tight">
                {t.title}
              </h3>
              <p className="mt-1 text-[13.5px] text-ink-soft">{t.destination}</p>

              <dl className="mt-5 space-y-1.5 font-mono text-[11.5px] text-ink-soft">
                <div className="flex justify-between">
                  <dt>Nights</dt>
                  <dd className="tabular-nums">{t.nights}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt>Occupancy</dt>
                  <dd className="text-right">{t.occupancy}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt>Includes</dt>
                  <dd className="text-right">{t.includes}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Example</dt>
                  <dd>{t.exampleMonth}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt>From</dt>
                  <dd className="text-right">{t.departureAirport}</dd>
                </div>
              </dl>

              <p className="mt-5 font-display font-semibold text-2xl">
                From ${t.fromPricePerPerson.toLocaleString()}
                <span className="text-xs font-body font-normal text-ink-soft"> /pp CAD</span>
              </p>

              <a href="/vacation-finder" className="link-draw mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.08em] text-coral">
                Price this trip →
              </a>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 max-w-2xl text-[12.5px] text-ink-soft leading-relaxed">
          {pricingDisclosure}
        </p>
      </div>
    </section>
  );
}
