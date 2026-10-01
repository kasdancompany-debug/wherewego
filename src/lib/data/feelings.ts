export type Feeling = {
  label: string;
  accent: "coral" | "sun" | "med" | "palm" | "ink";
  wide?: boolean;
};

export const feelings: Feeling[] = [
  { label: "We want a beach.", accent: "med" },
  { label: "We want an adventure.", accent: "palm" },
  { label: "We want all-inclusive.", accent: "sun" },
  { label: "We want Disney.", accent: "coral" },
  { label: "We want Europe.", accent: "ink" },
  { label: "We want a cruise.", accent: "med" },
  { label: "We just want somewhere warm.", accent: "sun", wide: true },
];

export const faq = [
  {
    q: "Does this cost anything?",
    a: "Often not directly — many bookings are commission-paid by the travel supplier. Some complex, custom itineraries may involve a planning fee, which we'll always tell you about before starting any work.",
  },
  {
    q: "Can I just book it myself online?",
    a: "Sure. We're here for the part where you'd otherwise be fifty tabs deep comparing resorts at midnight.",
  },
  {
    q: "How fast will I hear back?",
    a: "Dan personally reviews every submission. Response times vary by season — we won't promise a number we can't keep.",
  },
  {
    q: "Do you only do all-inclusive resorts?",
    a: "No — all-inclusives are a big part of it, but Europe, cruises and custom itineraries come up constantly too.",
  },
];
