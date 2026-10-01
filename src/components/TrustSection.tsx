export default function TrustSection() {
  return (
    <section className="border-b border-ink/10 bg-med text-white">
      <div className="container-wide py-24 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
        <div className="reveal">
          <div className="aspect-[4/5] max-w-sm bg-white/10 border border-white/20 flex items-center justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/60 text-center px-6">
              Real photo of Dan goes here —
              <br />
              not a generated image
            </span>
          </div>
        </div>

        <div className="reveal">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-sun mb-4">
            The person behind this
          </p>
          <h2 className="font-display font-semibold uppercase text-4xl sm:text-5xl leading-[0.95]">
            Hey, I&rsquo;m Dan.
          </h2>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/85">
            I&rsquo;m a Canadian travel advisor based in Northern Ontario,
            affiliated with Fora. I&rsquo;m also a parent. There are a
            ridiculous number of places to go — and once you&rsquo;re
            spending thousands of dollars taking your family somewhere,
            choosing the right one actually matters. I get travelling with
            kids, working around school schedules, flying with a baby,
            driving farther for a better flight, and finding something both
            the kids and the parents enjoy.
          </p>

          <div className="mt-8 max-w-xl border-t border-white/20 pt-6">
            <p className="font-display font-semibold uppercase text-lg mb-2">
              So, how does this work?
            </p>
            <p className="text-[14.5px] leading-relaxed text-white/75">
              For many hotels, resorts, cruises and vacation packages, the
              travel supplier pays the advisor a commission — which means a
              lot of straightforward bookings don&rsquo;t need an extra
              planning fee from you. More complex or custom itineraries may
              involve one; if a fee applies, you&rsquo;ll know before any
              work begins.
            </p>
            <p className="mt-4 font-mono text-[11px] text-white/50 leading-relaxed">
              Fora-affiliated independent travel advisor. Ontario registration
              / TICO # [pending]. Not every trip is commission-paid and not
              every itinerary is fee-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
