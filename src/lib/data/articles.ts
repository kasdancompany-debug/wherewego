export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
};

export const articles: Article[] = [
  {
    slug: "where-can-a-family-of-four-go-for-5000",
    title: "Where Can a Family of Four Go for $5,000?",
    category: "Budget",
    excerpt:
      "A real answer, destination by destination — what you get, what you don't, and where the budget actually stretches.",
  },
  {
    slug: "mexico-vs-jamaica-with-kids",
    title: "Mexico vs. Jamaica With Kids",
    category: "Family Travel",
    excerpt: "Two great answers to the same question. Here's how to pick between them.",
  },
  {
    slug: "is-costa-rica-good-with-kids",
    title: "Is Costa Rica Good With Kids?",
    category: "Costa Rica",
    excerpt: "Short answer: yes, with caveats. Ages, travel time and what to actually plan for.",
  },
  {
    slug: "florida-without-disney",
    title: "Florida Without Disney",
    category: "Florida",
    excerpt: "The beaches, the towns and the trips that don't involve a single theme park.",
  },
];

export const budgetBands = [
  { amount: "$3,000", suggestions: ["All-inclusive Dominican Republic", "Florida road trip"] },
  { amount: "$5,000", suggestions: ["Mexico all-inclusive", "Florida + theme parks", "Short cruise"] },
  { amount: "$7,500", suggestions: ["Jamaica, higher-tier resort", "Caribbean cruise, balcony"] },
  { amount: "$10,000+", suggestions: ["Portugal or Greece", "Costa Rica adventure trip"] },
];
