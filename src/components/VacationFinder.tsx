"use client";

import { useMemo, useState } from "react";

type FinderData = {
  adults: number;
  children: number;
  childAges: (number | "")[];
  when: string;
  departures: string[];
  willDrive: boolean;
  destinations: string[];
  tripType: string;
  matters: string[];
  budget: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const WHEN_OPTIONS = [
  "Exact dates",
  "Flexible dates",
  "March Break",
  "Summer",
  "Christmas",
  "Just looking",
];

const DEPARTURE_OPTIONS = ["Sault Ste. Marie", "Toronto", "Detroit", "Other"];

const DESTINATION_OPTIONS = [
  "Mexico",
  "Caribbean",
  "Florida",
  "Costa Rica",
  "Portugal",
  "Italy",
  "Greece",
  "Cruise",
  "Surprise us",
];

const TRIP_TYPES = [
  "All-inclusive",
  "Beach",
  "Disney / theme parks",
  "Adventure",
  "Cruise",
  "Europe",
  "Road trip",
  "Resort",
  "Not sure",
];

const MATTERS_OPTIONS = [
  "Great beach",
  "Great food",
  "Waterpark",
  "Kids club",
  "Great pools",
  "Adventure",
  "Luxury",
  "Quiet",
  "Nightlife",
  "Wildlife",
  "Culture",
  "Walkability",
  "Shortest travel time",
  "Best value",
];

const BUDGET_OPTIONS = [
  "Under $3,000",
  "$3,000–$5,000",
  "$5,000–$7,500",
  "$7,500–$10,000",
  "$10,000–$15,000",
  "$15,000+",
  "Help us figure it out",
];

const TOTAL_STEPS = 8;

const initial: FinderData = {
  adults: 2,
  children: 0,
  childAges: [],
  when: "",
  departures: [],
  willDrive: false,
  destinations: [],
  tripType: "",
  matters: [],
  budget: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-5 py-3 text-[14.5px] font-medium transition-colors duration-200 text-left ${
        active
          ? "border-coral bg-coral text-white"
          : "border-ink/15 bg-paper text-ink hover:border-ink/35"
      }`}
    >
      {children}
    </button>
  );
}

function Stepper({
  label,
  value,
  onChange,
  min = 0,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
}) {
  return (
    <div className="flex items-center justify-between rounded-sm border border-ink/15 px-5 py-4">
      <span className="font-display font-semibold text-lg">{label}</span>
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label={`Decrease ${label}`}
          onClick={() => onChange(Math.max(min, value - 1))}
          className="h-10 w-10 rounded-full border border-ink/20 text-xl leading-none hover:bg-surface-2"
        >
          –
        </button>
        <span className="w-6 text-center font-mono text-lg tabular-nums">{value}</span>
        <button
          type="button"
          aria-label={`Increase ${label}`}
          onClick={() => onChange(value + 1)}
          className="h-10 w-10 rounded-full border border-ink/20 text-xl leading-none hover:bg-surface-2"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function VacationFinder() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FinderData>(initial);
  const [submitted, setSubmitted] = useState(false);

  const canContinue = useMemo(() => {
    switch (step) {
      case 0:
        return data.adults >= 1 && data.childAges.every((a) => a !== "");
      case 1:
        return data.when !== "";
      case 2:
        return data.departures.length > 0;
      case 3:
        return data.destinations.length > 0;
      case 4:
        return data.tripType !== "";
      case 5:
        return true;
      case 6:
        return data.budget !== "";
      case 7:
        return data.firstName.trim() !== "" && data.email.trim().includes("@");
      default:
        return false;
    }
  }, [step, data]);

  function setChildren(n: number) {
    setData((d) => {
      const ages = [...d.childAges];
      while (ages.length < n) ages.push("");
      while (ages.length > n) ages.pop();
      return { ...d, children: n, childAges: ages };
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production this posts to the lead API (CRM + email), carrying UTM params.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-ink/12 bg-paper px-6 py-16 text-center sm:px-16">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-coral mb-4">
          Got it
        </p>
        <h3 className="font-display font-semibold uppercase text-4xl sm:text-5xl">
          Pack your bags.
        </h3>
        <p className="mt-3 text-ink-soft italic">Okay, maybe not yet.</p>
        <p className="mx-auto mt-5 max-w-md text-[15px] text-ink-soft leading-relaxed">
          We&rsquo;ve got what we need to start thinking about where you
          could go. Dan reviews every submission personally — we&rsquo;ll be
          in touch.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-sm border border-ink/12 bg-paper">
      <div className="h-1 w-full bg-surface-2">
        <div
          className="h-full bg-coral transition-[width] duration-500"
          style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
        />
      </div>

      <form onSubmit={handleSubmit} className="px-6 py-10 sm:px-12 sm:py-14">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-coral mb-6">
          Step {step + 1} of {TOTAL_STEPS}
        </p>

        {step === 0 && (
          <fieldset className="m-0 border-0 p-0 min-w-0">
            <legend className="font-display font-semibold uppercase text-3xl sm:text-4xl mb-7">
              Who&rsquo;s going?
            </legend>
            <div className="space-y-3 max-w-md">
              <Stepper
                label="Adults"
                value={data.adults}
                min={1}
                onChange={(v) => setData((d) => ({ ...d, adults: v }))}
              />
              <Stepper label="Children" value={data.children} onChange={setChildren} />
            </div>
            {data.children > 0 && (
              <div className="mt-6 max-w-md">
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft mb-3">
                  How old?
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {data.childAges.map((age, i) => (
                    <label key={i} className="block">
                      <span className="sr-only">Child {i + 1} age</span>
                      <select
                        value={age}
                        onChange={(e) =>
                          setData((d) => {
                            const ages = [...d.childAges];
                            ages[i] = e.target.value === "" ? "" : Number(e.target.value);
                            return { ...d, childAges: ages };
                          })
                        }
                        className="w-full rounded-sm border border-ink/15 bg-paper px-3 py-3 text-[14.5px]"
                      >
                        <option value="">Age</option>
                        {Array.from({ length: 18 }, (_, n) => n).map((n) => (
                          <option key={n} value={n}>
                            {n === 0 ? "Under 1" : n}
                          </option>
                        ))}
                      </select>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </fieldset>
        )}

        {step === 1 && (
          <fieldset className="m-0 border-0 p-0 min-w-0">
            <legend className="font-display font-semibold uppercase text-3xl sm:text-4xl mb-7">
              When can you go?
            </legend>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {WHEN_OPTIONS.map((opt) => (
                <Pill
                  key={opt}
                  active={data.when === opt}
                  onClick={() => setData((d) => ({ ...d, when: opt }))}
                >
                  {opt}
                </Pill>
              ))}
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="m-0 border-0 p-0 min-w-0">
            <legend className="font-display font-semibold uppercase text-3xl sm:text-4xl mb-7">
              Where can you leave from?
            </legend>
            <div className="grid grid-cols-2 gap-3">
              {DEPARTURE_OPTIONS.map((opt) => (
                <Pill
                  key={opt}
                  active={data.departures.includes(opt)}
                  onClick={() => setData((d) => ({ ...d, departures: toggle(d.departures, opt) }))}
                >
                  {opt}
                </Pill>
              ))}
            </div>
            <label className="mt-6 flex items-center gap-3 text-[14.5px]">
              <input
                type="checkbox"
                checked={data.willDrive}
                onChange={(e) => setData((d) => ({ ...d, willDrive: e.target.checked }))}
                className="h-5 w-5 accent-coral"
              />
              We&rsquo;ll drive to save money.
            </label>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset className="m-0 border-0 p-0 min-w-0">
            <legend className="font-display font-semibold uppercase text-3xl sm:text-4xl mb-7">
              What sounds good?
            </legend>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {DESTINATION_OPTIONS.map((opt) => (
                <Pill
                  key={opt}
                  active={data.destinations.includes(opt)}
                  onClick={() => setData((d) => ({ ...d, destinations: toggle(d.destinations, opt) }))}
                >
                  {opt}
                </Pill>
              ))}
            </div>
          </fieldset>
        )}

        {step === 4 && (
          <fieldset className="m-0 border-0 p-0 min-w-0">
            <legend className="font-display font-semibold uppercase text-3xl sm:text-4xl mb-7">
              What kind of trip?
            </legend>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {TRIP_TYPES.map((opt) => (
                <Pill
                  key={opt}
                  active={data.tripType === opt}
                  onClick={() => setData((d) => ({ ...d, tripType: opt }))}
                >
                  {opt}
                </Pill>
              ))}
            </div>
          </fieldset>
        )}

        {step === 5 && (
          <fieldset className="m-0 border-0 p-0 min-w-0">
            <legend className="font-display font-semibold uppercase text-3xl sm:text-4xl mb-7">
              What matters?
            </legend>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {MATTERS_OPTIONS.map((opt) => (
                <Pill
                  key={opt}
                  active={data.matters.includes(opt)}
                  onClick={() => setData((d) => ({ ...d, matters: toggle(d.matters, opt) }))}
                >
                  {opt}
                </Pill>
              ))}
            </div>
          </fieldset>
        )}

        {step === 6 && (
          <fieldset className="m-0 border-0 p-0 min-w-0">
            <legend className="font-display font-semibold uppercase text-3xl sm:text-4xl mb-7">
              What&rsquo;s the budget?
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BUDGET_OPTIONS.map((opt) => (
                <Pill
                  key={opt}
                  active={data.budget === opt}
                  onClick={() => setData((d) => ({ ...d, budget: opt }))}
                >
                  {opt}
                </Pill>
              ))}
            </div>
          </fieldset>
        )}

        {step === 7 && (
          <fieldset className="m-0 border-0 p-0 min-w-0">
            <legend className="font-display font-semibold uppercase text-3xl sm:text-4xl mb-7">
              Who should we send ideas to?
            </legend>
            <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
              <label className="block">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft">
                  First name
                </span>
                <input
                  required
                  value={data.firstName}
                  onChange={(e) => setData((d) => ({ ...d, firstName: e.target.value }))}
                  className="mt-2 w-full rounded-sm border border-ink/15 bg-paper px-4 py-3"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft">
                  Last name
                </span>
                <input
                  value={data.lastName}
                  onChange={(e) => setData((d) => ({ ...d, lastName: e.target.value }))}
                  className="mt-2 w-full rounded-sm border border-ink/15 bg-paper px-4 py-3"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft">
                  Email
                </span>
                <input
                  type="email"
                  required
                  value={data.email}
                  onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
                  className="mt-2 w-full rounded-sm border border-ink/15 bg-paper px-4 py-3"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft">
                  Phone <span className="text-ink-soft/60 normal-case">(optional)</span>
                </span>
                <input
                  type="tel"
                  value={data.phone}
                  onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
                  className="mt-2 w-full rounded-sm border border-ink/15 bg-paper px-4 py-3"
                />
              </label>
            </div>
          </fieldset>
        )}

        <div className="mt-10 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className={`font-mono text-[12px] uppercase tracking-[0.08em] text-ink-soft hover:text-ink ${
              step === 0 ? "invisible" : ""
            }`}
          >
            ← Back
          </button>

          {step < TOTAL_STEPS - 1 ? (
            <button
              type="button"
              disabled={!canContinue}
              onClick={() => setStep((s) => Math.min(TOTAL_STEPS - 1, s + 1))}
              className="btn-go disabled:opacity-35 disabled:pointer-events-none"
            >
              Continue
            </button>
          ) : (
            <button type="submit" disabled={!canContinue} className="btn-go disabled:opacity-35 disabled:pointer-events-none">
              Show Me Where We Could Go
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
