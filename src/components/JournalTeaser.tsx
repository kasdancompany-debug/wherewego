import Link from "next/link";
import { articles } from "@/lib/data/articles";

export default function JournalTeaser() {
  const [lead, ...rest] = articles;

  return (
    <section className="border-b border-ink/10">
      <div className="container-wide py-24">
        <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="font-display font-semibold uppercase text-4xl sm:text-5xl leading-[0.95]">
            Where We Go
            <br className="hidden sm:block" /> Next.
          </h2>
          <Link href="/journal" className="link-draw font-mono text-[12px] uppercase tracking-[0.1em] text-coral">
            Read the journal →
          </Link>
        </div>

        <div className="reveal grid lg:grid-cols-[1.3fr_1fr] gap-5">
          <Link
            href={`/journal/${lead.slug}`}
            className="group block bg-ink text-paper p-8 sm:p-10 min-h-[320px] flex flex-col justify-end"
          >
            <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-sun mb-3">
              {lead.category}
            </p>
            <h3 className="font-display font-semibold uppercase text-2xl sm:text-3xl leading-tight group-hover:text-coral transition-colors">
              {lead.title}
            </h3>
            <p className="mt-3 text-[14.5px] text-paper/70 max-w-md">{lead.excerpt}</p>
          </Link>

          <div className="grid gap-5">
            {rest.map((a) => (
              <Link
                key={a.slug}
                href={`/journal/${a.slug}`}
                className="group block bg-surface p-6 hover:bg-surface-2 transition-colors"
              >
                <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-coral mb-2">
                  {a.category}
                </p>
                <h3 className="font-display font-semibold uppercase text-lg leading-tight group-hover:text-coral transition-colors">
                  {a.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
