import VacationFinder from "./VacationFinder";

export default function FinderSection() {
  return (
    <section id="vacation-finder" className="border-b border-ink/10 bg-surface">
      <div className="container-xl py-24">
        <div className="reveal text-center max-w-xl mx-auto mb-12">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-coral mb-4">
            The vacation finder
          </p>
          <h2 className="font-display font-semibold uppercase text-4xl sm:text-5xl leading-[0.95]">
            Where should we go?
          </h2>
          <p className="mt-4 text-ink-soft text-[15px]">
            Eight quick questions. No account, no spam, no 74 browser tabs.
          </p>
        </div>
        <div className="reveal max-w-3xl mx-auto">
          <VacationFinder />
        </div>
      </div>
    </section>
  );
}
