import Image from "next/image";
import Link from "next/link";

const STRIP = ["Mexico", "Caribbean", "Florida", "Costa Rica", "Europe", "Cruises"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 pt-20">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] min-h-[88vh] lg:min-h-[92vh]">
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-10 lg:pl-16 lg:pr-10 py-16 lg:py-0">
          <p className="reveal font-mono text-[11px] tracking-[0.22em] uppercase text-coral mb-6">
            A vacation worth the anticipation
          </p>
          <h1 className="reveal font-display font-semibold uppercase leading-[0.92] text-[15vw] sm:text-[9vw] lg:text-[5.2vw] xl:text-[88px]">
            Where
            <br />
            Should We
            <br />
            <span className="text-coral">Go?</span>
          </h1>
          <p className="reveal max-w-md mt-8 text-[17px] leading-relaxed text-ink-soft">
            Tell us who&rsquo;s going, when you&rsquo;re free and what you want
            to spend. We&rsquo;ll help narrow down the world.
          </p>
          <div className="reveal mt-9 flex flex-wrap items-center gap-4">
            <Link href="/vacation-finder" className="btn-go">
              Find Our Vacation
              <span aria-hidden>→</span>
            </Link>
            <Link href="/journal" className="btn-ghost">
              Get Inspired
            </Link>
          </div>

          <div className="reveal mt-14 overflow-hidden max-w-full">
            <div className="marquee-track">
              {[...STRIP, ...STRIP].map((d, i) => (
                <span
                  key={i}
                  className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-soft/70 whitespace-nowrap pr-8 flex items-center gap-8"
                >
                  {d}
                  <span className="h-1 w-1 rounded-full bg-coral/60" aria-hidden />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[46vh] lg:min-h-0">
          <div
            className="absolute inset-0 lg:inset-y-0 lg:-right-[1px]"
            style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }}
          >
            <Image
              src="/images/hero.jpg"
              alt="Two boys mid-air jumping into a resort pool, splashing, laughing, with parents relaxing on loungers in the background"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* floating secondary photo chip — depth + collage energy */}
          <div className="hidden md:block absolute left-[6%] bottom-10 w-[34%] max-w-[220px] -rotate-6 rounded-sm overflow-hidden shadow-[0_24px_60px_-12px_rgba(22,38,61,0.45)] ring-4 ring-paper">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/mexico.jpg"
                alt="A family floating together on pool noodles at a swim-up bar"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="hidden sm:flex absolute top-8 right-8 rotate-3 items-center gap-2 rounded-full bg-paper px-4 py-2 shadow-lg">
            <span className="h-2 w-2 rounded-full bg-coral animate-pulse" aria-hidden />
            <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink">
              Families welcome
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
