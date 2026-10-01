import Link from "next/link";
import { feelings } from "@/lib/data/feelings";

const ACCENT_BG: Record<string, string> = {
  coral: "bg-coral",
  sun: "bg-sun",
  med: "bg-med",
  palm: "bg-palm",
  ink: "bg-ink",
};
const ACCENT_TEXT: Record<string, string> = {
  coral: "text-white",
  sun: "text-ink",
  med: "text-white",
  palm: "text-white",
  ink: "text-paper",
};

export default function FeelingGrid() {
  return (
    <section className="border-b border-ink/10">
      <div className="container-wide py-24">
        <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-coral mb-3">
              Not sure where to start?
            </p>
            <h2 className="font-display font-semibold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
              Pick a feeling.
            </h2>
          </div>
          <p className="max-w-sm text-ink-soft text-[15px]">
            Not everyone knows where they want to go. Most people know how
            they want to feel.
          </p>
        </div>

        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-2">
          {feelings.map((f) => (
            <Link
              key={f.label}
              href="/vacation-finder"
              className={`group relative flex min-h-[170px] lg:min-h-[220px] items-end overflow-hidden rounded-sm p-5 transition-transform duration-500 hover:-translate-y-1 ${
                ACCENT_BG[f.accent]
              } ${f.wide ? "col-span-2" : ""}`}
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]"
              />
              <span
                className={`relative font-display font-semibold uppercase text-xl lg:text-2xl leading-[1.1] ${ACCENT_TEXT[f.accent]}`}
              >
                {f.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
