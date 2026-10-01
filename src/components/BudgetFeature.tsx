import Link from "next/link";
import { budgetBands } from "@/lib/data/articles";

export default function BudgetFeature() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-sun">
      <div
        aria-hidden
        className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-coral/15"
      />
      <div className="container-wide relative py-24">
        <p className="reveal font-mono text-[11px] tracking-[0.2em] uppercase text-ink/60 mb-4">
          A recurring feature
        </p>
        <h2 className="reveal font-display font-semibold uppercase text-[11vw] sm:text-6xl lg:text-7xl leading-[0.9] max-w-4xl">
          Where could we go for $5,000?
        </h2>

        <div className="reveal mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {budgetBands.map((b) => (
            <div key={b.amount} className="bg-ink text-paper p-6">
              <p className="font-display font-semibold text-3xl">{b.amount}</p>
              <ul className="mt-4 space-y-2 border-t border-paper/15 pt-4">
                {b.suggestions.map((s) => (
                  <li key={s} className="text-[13.5px] text-paper/80">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Link href="/journal/where-can-we-go-for" className="link-draw reveal mt-10 inline-block font-mono text-[12px] uppercase tracking-[0.1em] text-ink">
          Read the full budget breakdowns →
        </Link>
      </div>
    </section>
  );
}
