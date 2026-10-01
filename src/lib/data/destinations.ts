export type Accent = "coral" | "sun" | "med" | "palm";

export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  tags: string[];
  /** Path under /public/images, or null while photography is still pending. */
  image: string | null;
  accent: Accent;
  region: "mexico" | "caribbean" | "florida" | "central-america" | "europe" | "cruise";
};

export const destinations: Destination[] = [
  {
    slug: "mexico",
    name: "Mexico",
    tagline: "All-inclusive, made easy.",
    tags: ["Families", "Beaches", "Value", "Food"],
    image: "/images/mexico.jpg",
    accent: "coral",
    region: "mexico",
  },
  {
    slug: "italy",
    name: "Italy",
    tagline: "Come for the pasta. Stay for everything else.",
    tags: ["Food", "Culture", "Families"],
    image: "/images/italy.jpg",
    accent: "sun",
    region: "europe",
  },
  {
    slug: "florida",
    name: "Florida",
    tagline: "The kids are going to lose their minds.",
    tags: ["Theme Parks", "Beaches", "Family Fun"],
    image: "/images/florida.jpg",
    accent: "med",
    region: "florida",
  },
  {
    slug: "costa-rica",
    name: "Costa Rica",
    tagline: "For families who don't sit still.",
    tags: ["Wildlife", "Beaches", "Adventure"],
    image: "/images/costarica.jpg",
    accent: "palm",
    region: "central-america",
  },
  {
    slug: "jamaica",
    name: "Jamaica",
    tagline: "Loud music, warm water, slower clocks.",
    tags: ["Families", "Beaches", "Food", "Value"],
    image: null,
    accent: "sun",
    region: "caribbean",
  },
  {
    slug: "dominican-republic",
    name: "Dominican Republic",
    tagline: "More resort for the money.",
    tags: ["Families", "Beaches", "Value"],
    image: null,
    accent: "coral",
    region: "caribbean",
  },
  {
    slug: "bahamas",
    name: "Bahamas",
    tagline: "Close enough for a long weekend, good enough to stay.",
    tags: ["Beaches", "Short Flights", "Families"],
    image: null,
    accent: "med",
    region: "caribbean",
  },
  {
    slug: "barbados",
    name: "Barbados",
    tagline: "Friendly island, serious beaches.",
    tags: ["Beaches", "Food", "Couples", "Families"],
    image: null,
    accent: "coral",
    region: "caribbean",
  },
  {
    slug: "aruba",
    name: "Aruba",
    tagline: "One happy island, zero rainy days.",
    tags: ["Beaches", "Value", "Families"],
    image: null,
    accent: "sun",
    region: "caribbean",
  },
  {
    slug: "portugal",
    name: "Portugal",
    tagline: "Lisbon's hills, the Algarve's beaches.",
    tags: ["Culture", "Food", "Families", "Value"],
    image: null,
    accent: "med",
    region: "europe",
  },
  {
    slug: "greece",
    name: "Greece",
    tagline: "Blue water, white towns, slow dinners.",
    tags: ["Beaches", "Culture", "Couples"],
    image: null,
    accent: "med",
    region: "europe",
  },
  {
    slug: "cruises",
    name: "Cruises",
    tagline: "One ship, five places, one unpack.",
    tags: ["Families", "Easy", "Value"],
    image: null,
    accent: "palm",
    region: "cruise",
  },
];

export const featuredDestinationSlugs = ["mexico", "italy", "florida", "costa-rica"] as const;
