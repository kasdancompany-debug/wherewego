import Image from "next/image";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative min-h-[460px] flex items-center overflow-hidden border-b border-ink/10">
      <Image
        src="/images/florida.jpg"
        alt="Kids running toward the ocean waves on a Florida beach, parents following behind"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/60 to-ink/20"
      />
      <div className="container-wide relative py-24">
        <p className="reveal font-mono text-[11px] tracking-[0.2em] uppercase text-sun mb-4">
          Ready when you are
        </p>
        <h2 className="reveal font-display font-semibold uppercase text-paper text-[13vw] sm:text-6xl lg:text-7xl leading-[0.9] max-w-2xl">
          Where should we go?
        </h2>
        <Link href="/vacation-finder" className="btn-go reveal mt-9">
          Find Our Vacation
        </Link>
      </div>
    </section>
  );
}
