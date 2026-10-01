import Link from "next/link";

const COLUMNS = [
  {
    heading: "Where to Go",
    links: [
      { href: "/mexico", label: "Mexico" },
      { href: "/florida", label: "Florida" },
      { href: "/costa-rica", label: "Costa Rica" },
      { href: "/europe", label: "Europe" },
      { href: "/cruises", label: "Cruises" },
    ],
  },
  {
    heading: "Trips",
    links: [
      { href: "/family-vacations", label: "Family Vacations" },
      { href: "/all-inclusives", label: "All-Inclusives" },
      { href: "/vacation-finder", label: "Vacation Finder" },
      { href: "/journal", label: "Journal" },
    ],
  },
  {
    heading: "Where We Go",
    links: [
      { href: "/about", label: "About Dan" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-wide pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <div className="font-display font-bold text-3xl uppercase leading-none">
              Where We Go
            </div>
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-coral mt-2">
              Vacation Co.
            </div>
            <p className="mt-6 max-w-xs text-sm text-paper/65 leading-relaxed">
              Family vacations worth taking — Mexico, the Caribbean, Florida,
              Costa Rica, Europe and cruises. Operated by a Canadian travel
              advisor affiliated with Fora.
            </p>
            <Link href="/vacation-finder" className="btn-go mt-7 w-fit !bg-coral">
              Find Our Vacation
            </Link>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/50 mb-4">
                {col.heading}
              </div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="link-draw text-[14.5px] text-paper/85 hover:text-paper">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-paper/15 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-paper/45 leading-relaxed max-w-2xl">
            Where We Go Vacation Co. is a trade name of an independent travel
            advisor affiliated with Fora Travel. Ontario registration /
            TICO # [pending]. Not every trip earns commission and not every
            itinerary is fee-free — ask for specifics before booking.
          </p>
          <p className="font-mono text-[11px] text-paper/45">
            © {new Date().getFullYear()} Where We Go Vacation Co.
          </p>
        </div>
      </div>
    </footer>
  );
}
