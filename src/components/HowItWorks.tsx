const STEPS = [
  { n: "1", title: "Tell us.", body: "Who's going, when you're free and what sounds fun." },
  { n: "2", title: "We narrow it down.", body: "No need to compare 74 resorts yourself." },
  { n: "3", title: "You pick.", body: "We'll help you understand the trade-offs." },
  { n: "4", title: "Let's go.", body: "Once you're happy, we'll help with the booking." },
];

export default function HowItWorks() {
  return (
    <section className="border-b border-ink/10">
      <div className="container-wide py-24">
        <h2 className="reveal font-display font-semibold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95] mb-16 max-w-2xl">
          Less searching.
          <br />
          More going.
        </h2>

        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative">
              <span className="font-display font-semibold text-7xl text-ink/10 leading-none">
                {s.n}
              </span>
              <h3 className="font-display font-semibold uppercase text-xl mt-2">{s.title}</h3>
              <p className="mt-2 text-[14.5px] text-ink-soft leading-relaxed max-w-[22ch]">
                {s.body}
              </p>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="hidden lg:block absolute top-8 -right-3 text-ink/20 text-2xl"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
