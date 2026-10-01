"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { airports } from "@/lib/data/airports";

function formatAirport(a: (typeof airports)[number]) {
  return `${a.city} (${a.code})`;
}

export default function AirportPicker({
  value,
  onChange,
}: {
  value: string[];
  onChange: (next: string[]) => void;
}) {
  const listId = useId();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q === "") return airports.slice(0, 8);
    return airports
      .filter(
        (a) =>
          a.city.toLowerCase().includes(q) ||
          a.code.toLowerCase().includes(q) ||
          a.name.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query]);

  const exactMatchExists = results.some((a) => formatAirport(a).toLowerCase() === query.trim().toLowerCase());
  const showCustomAdd = query.trim().length > 1 && !exactMatchExists;

  function add(label: string) {
    if (!value.includes(label)) onChange([...value, label]);
    setQuery("");
  }

  function remove(label: string) {
    onChange(value.filter((v) => v !== label));
  }

  return (
    <div ref={rootRef} className="relative">
      {value.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {value.map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full bg-coral text-white pl-4 pr-2 py-2 text-[13.5px] font-medium"
            >
              {label}
              <button
                type="button"
                aria-label={`Remove ${label}`}
                onClick={() => remove(label)}
                className="h-5 w-5 rounded-full bg-white/20 hover:bg-white/35 leading-none text-sm"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}

      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
          if (e.key === "Enter") {
            e.preventDefault();
            if (results[0]) add(formatAirport(results[0]));
            else if (showCustomAdd) add(query.trim());
          }
        }}
        placeholder="Search by city or airport code — try &ldquo;Toronto&rdquo; or &ldquo;YYZ&rdquo;"
        className="w-full rounded-sm border border-ink/15 bg-paper px-4 py-3.5 text-[15px]"
        aria-label="Search for a departure airport"
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
      />

      {open && (
        <div
          id={listId}
          role="listbox"
          aria-label="Matching airports"
          className="absolute z-20 mt-1.5 w-full rounded-sm border border-ink/15 bg-paper shadow-[0_18px_40px_-12px_rgba(22,38,61,0.25)] max-h-72 overflow-y-auto scroll-fancy"
        >
          {results.length === 0 && !showCustomAdd && (
            <p className="px-4 py-4 text-[13.5px] text-ink-soft">No matches yet — keep typing.</p>
          )}
          {results.map((a) => {
            const label = formatAirport(a);
            const selected = value.includes(label);
            return (
              <button
                key={a.code}
                type="button"
                role="option"
                aria-selected={selected}
                disabled={selected}
                onClick={() => add(label)}
                className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-[14.5px] hover:bg-surface disabled:opacity-40 ${
                  selected ? "cursor-default" : ""
                }`}
              >
                <span>
                  {a.city} <span className="text-ink-soft">— {a.name}</span>
                </span>
                <span className="font-mono text-[11px] text-ink-soft shrink-0">{a.code}</span>
              </button>
            );
          })}
          {showCustomAdd && (
            <button
              type="button"
              role="option"
              aria-selected={false}
              onClick={() => add(query.trim())}
              className="flex w-full items-center gap-2 border-t border-ink/10 px-4 py-3 text-left text-[14.5px] text-coral hover:bg-surface"
            >
              <span aria-hidden>+</span> Use &ldquo;{query.trim()}&rdquo; anyway
            </button>
          )}
        </div>
      )}
    </div>
  );
}
