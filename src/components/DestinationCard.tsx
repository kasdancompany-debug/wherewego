import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/lib/data/destinations";

const ACCENT_GRADIENT: Record<string, string> = {
  coral: "from-coral to-ink",
  sun: "from-sun to-coral",
  med: "from-med to-ink",
  palm: "from-palm to-med",
};

export default function DestinationCard({ d }: { d: Destination }) {
  return (
    <Link
      href={`/${d.slug}`}
      className="group flex-none w-[250px] sm:w-[270px] snap-start bg-paper border border-ink/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_40px_-16px_rgba(22,38,61,0.25)]"
    >
      <div className="relative h-[190px] overflow-hidden">
        {d.image ? (
          <Image
            src={d.image}
            alt={`${d.name} — ${d.tagline}`}
            fill
            sizes="270px"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div
            className={`h-full w-full bg-gradient-to-br ${ACCENT_GRADIENT[d.accent]} flex items-end p-3`}
          >
            <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-white/80">
              Photography pending
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold uppercase text-xl">{d.name}</h3>
        <p className="italic text-[13.5px] text-ink-soft mt-1.5 mb-3">{d.tagline}</p>
        <p className="font-mono text-[10px] tracking-[0.04em] uppercase text-coral">
          {d.tags.join(" · ")}
        </p>
      </div>
    </Link>
  );
}
