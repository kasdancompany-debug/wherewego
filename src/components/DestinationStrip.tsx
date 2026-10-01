import Link from "next/link";
import { destinations } from "@/lib/data/destinations";
import DestinationCard from "./DestinationCard";

export default function DestinationStrip() {
  return (
    <section className="border-b border-ink/10 bg-surface">
      <div className="container-wide py-24">
        <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <h2 className="font-display font-semibold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
            Okay.
            <br className="hidden sm:block" /> Where to?
          </h2>
          <Link href="/where-to-go" className="link-draw font-mono text-[12px] uppercase tracking-[0.1em] text-coral">
            See all destinations →
          </Link>
        </div>
      </div>

      <div className="reveal pl-6 md:pl-10 lg:pl-16">
        <div className="scroll-fancy flex gap-4 overflow-x-auto snap-x snap-mandatory pb-5 pr-6 md:pr-10 lg:pr-16">
          {destinations.map((d) => (
            <DestinationCard key={d.slug} d={d} />
          ))}
        </div>
      </div>
    </section>
  );
}
