"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/where-to-go", label: "Where to Go" },
  { href: "/family-vacations", label: "Family Vacations" },
  { href: "/all-inclusives", label: "All-Inclusives" },
  { href: "/florida", label: "Florida" },
  { href: "/europe", label: "Europe" },
  { href: "/cruises", label: "Cruises" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-paper/90 backdrop-blur-md border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        <Link href="/" className="flex flex-col leading-none group" onClick={() => setOpen(false)}>
          <span className="font-display font-bold text-xl tracking-tight uppercase">
            Where We Go
          </span>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-coral mt-1">
            Vacation Co.
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-draw font-body text-[14.5px] font-medium text-ink/85 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/vacation-finder" className="btn-go hidden sm:inline-flex">
            Find Our Vacation
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden relative h-11 w-11 flex items-center justify-center rounded-full border border-ink/15"
          >
            <span className="sr-only">Menu</span>
            <div className="relative h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-ink transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-[1.5px] w-full bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* full-screen mobile overlay nav */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-paper transition-[opacity,visibility] duration-400 ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="container-wide flex flex-col gap-1 pt-6">
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display font-semibold uppercase text-[9vw] sm:text-4xl leading-[1.25] text-ink/90 hover:text-coral transition-colors"
              style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/vacation-finder" onClick={() => setOpen(false)} className="btn-go mt-8 w-fit">
            Find Our Vacation
          </Link>
        </nav>
      </div>
    </header>
  );
}
