export type TripIdea = {
  slug: string;
  title: string;
  destination: string;
  nights: number;
  occupancy: string;
  includes: string;
  fromPricePerPerson: number;
  exampleMonth: string;
  departureAirport: string;
  accent: "coral" | "sun" | "med" | "palm";
};

/**
 * Placeholder pricing only — never real-time rates. Every card must show its
 * assumptions (occupancy, dates, airport, what's included) alongside the number.
 */
export const tripIdeas: TripIdea[] = [
  {
    slug: "mexico-family-all-inclusive",
    title: "7 Nights in Mexico",
    destination: "Riviera Maya, Mexico",
    nights: 7,
    occupancy: "Family of 4, one room",
    includes: "All-inclusive resort, flights, transfers",
    fromPricePerPerson: 1690,
    exampleMonth: "March 2026",
    departureAirport: "Toronto (YYZ)",
    accent: "coral",
  },
  {
    slug: "florida-family-week",
    title: "Florida Family Week",
    destination: "Orlando, Florida",
    nights: 7,
    occupancy: "Family of 4, 2-bed suite",
    includes: "Hotel, flights, rental car",
    fromPricePerPerson: 1240,
    exampleMonth: "July 2026",
    departureAirport: "Toronto (YYZ)",
    accent: "med",
    },
  {
    slug: "greek-island-escape",
    title: "Greek Island Escape",
    destination: "Santorini, Greece",
    nights: 7,
    occupancy: "Family of 4, two rooms",
    includes: "Hotel, flights",
    fromPricePerPerson: 2450,
    exampleMonth: "June 2026",
    departureAirport: "Toronto (YYZ)",
    accent: "sun",
  },
  {
    slug: "portugal-lisbon-algarve",
    title: "Lisbon + the Algarve",
    destination: "Portugal",
    nights: 9,
    occupancy: "Family of 4, 2 rooms",
    includes: "Hotels, flights, trains",
    fromPricePerPerson: 2190,
    exampleMonth: "August 2026",
    departureAirport: "Toronto (YYZ)",
    accent: "palm",
  },
];

export const pricingDisclosure =
  "Prices shown are illustrative examples only, based on the occupancy, dates and departure airport noted on each card — not live rates. Taxes and resort fees are not included unless stated. Ask Dan for a real quote.";
