import Image from "next/image";
import Link from "next/link";

const CHECKLIST = [
  "Kids' ages",
  "Flight length",
  "Pools & kids' clubs",
  "Room setup",
  "Transfer times",
  "Parents' downtime, too",
];

export default function FamilyBand() {
  return (
    <section className="bg-ink text-paper border-b border-paper/10 overflow-hidden">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-[360px] lg:min-h-[560px]">
          <div
            className="reveal absolute inset-0"
            style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0% 100%)" }}
          >
            <Image
              src="/images/mexico.jpg"
              alt="A family of four floating together at a resort pool in Mexico, laughing"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="reveal flex flex-col justify-center px-6 md:px-10 lg:pl-8 lg:pr-16 py-20">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-sun mb-4">
            The honest truth
          </p>
          <h2 className="font-display font-semibold uppercase text-4xl sm:text-5xl leading-[0.95]">
            Take the kids.
          </h2>
          <p className="mt-4 text-[17px] text-paper/80">
            They&rsquo;ll talk about it for years. You might need a nap after.
          </p>
          <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-paper/60">
            We specialize in trips where the kids&rsquo; ages actually change
            the answer — flight length, pool depth, kids&rsquo; club age
            cut-offs, waterpark hours, room setups that fit a crib, transfer
            times that matter at 11pm with a toddler.
          </p>

          <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {CHECKLIST.map((item) => (
              <li key={item} className="font-mono text-[11.5px] tracking-[0.01em] text-paper/80 flex items-center gap-2">
                <span className="h-1 w-3 bg-coral" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <Link href="/family-vacations" className="btn-go mt-9 w-fit">
            Find Our Family Vacation
          </Link>
        </div>
      </div>
    </section>
  );
}
