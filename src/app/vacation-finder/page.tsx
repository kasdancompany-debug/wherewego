import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VacationFinder from "@/components/VacationFinder";

export const metadata: Metadata = {
  title: "Vacation Finder | Where We Go Vacation Co.",
  description:
    "Tell us who's going, when you're free and what you want to spend. Eight quick questions and we'll start narrowing down the world.",
};

export default function VacationFinderPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="border-b border-ink/10 bg-surface">
          <div className="container-xl py-20 sm:py-24">
            <div className="text-center max-w-xl mx-auto mb-12">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-coral mb-4">
                The vacation finder
              </p>
              <h1 className="font-display font-semibold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
                Where should we go?
              </h1>
              <p className="mt-4 text-ink-soft text-[15px]">
                Eight quick questions. No account, no spam, no 74 browser tabs.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <VacationFinder />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
