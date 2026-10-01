import { faq } from "@/lib/data/feelings";

export default function FAQSection() {
  return (
    <section className="border-b border-ink/10">
      <div className="container-xl py-24 max-w-2xl">
        <h2 className="reveal font-display font-semibold uppercase text-4xl sm:text-5xl leading-[0.95] mb-10">
          Questions, answered quickly.
        </h2>
        <div className="reveal divide-y divide-ink/10 border-t border-ink/10">
          {faq.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-lg">
                {f.q}
                <span className="shrink-0 text-coral transition-transform duration-300 group-open:rotate-45 text-2xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[14.5px] text-ink-soft leading-relaxed max-w-xl">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
