export type Airport = {
  code: string;
  city: string;
  name: string;
};

/**
 * Curated, not exhaustive — weighted toward Northern Ontario / Great Lakes
 * departure points first, since that's where most of our customers actually
 * leave from, then the rest of Canada, then major US connecting hubs.
 */
export const airports: Airport[] = [
  // Northern Ontario & nearby
  { code: "YAM", city: "Sault Ste. Marie, ON", name: "Sault Ste. Marie Airport" },
  { code: "YSB", city: "Sudbury, ON", name: "Sudbury Airport" },
  { code: "YQT", city: "Thunder Bay, ON", name: "Thunder Bay Airport" },
  { code: "YYB", city: "North Bay, ON", name: "North Bay/Jack Garland Airport" },
  { code: "YTS", city: "Timmins, ON", name: "Timmins/Victor M. Power Airport" },
  { code: "YQA", city: "Muskoka, ON", name: "Muskoka Airport" },
  // Southern Ontario
  { code: "YYZ", city: "Toronto, ON", name: "Toronto Pearson International" },
  { code: "YTZ", city: "Toronto, ON", name: "Billy Bishop Toronto City" },
  { code: "YHM", city: "Hamilton, ON", name: "John C. Munro Hamilton International" },
  { code: "YXU", city: "London, ON", name: "London International Airport" },
  { code: "YQG", city: "Windsor, ON", name: "Windsor International Airport" },
  { code: "YOW", city: "Ottawa, ON", name: "Ottawa Macdonald-Cartier International" },
  { code: "YKF", city: "Kitchener/Waterloo, ON", name: "Region of Waterloo International" },
  // Michigan border crossings
  { code: "DTW", city: "Detroit, MI", name: "Detroit Metropolitan Wayne County" },
  { code: "MBS", city: "Saginaw/Flint, MI", name: "MBS International Airport" },
  { code: "FNT", city: "Flint, MI", name: "Bishop International Airport" },
  { code: "GRR", city: "Grand Rapids, MI", name: "Gerald R. Ford International" },
  // Rest of Canada
  { code: "YUL", city: "Montreal, QC", name: "Montréal–Trudeau International" },
  { code: "YWG", city: "Winnipeg, MB", name: "Winnipeg James Armstrong Richardson Intl" },
  { code: "YYC", city: "Calgary, AB", name: "Calgary International" },
  { code: "YEG", city: "Edmonton, AB", name: "Edmonton International" },
  { code: "YVR", city: "Vancouver, BC", name: "Vancouver International" },
  { code: "YHZ", city: "Halifax, NS", name: "Halifax Stanfield International" },
  { code: "YQB", city: "Quebec City, QC", name: "Québec City Jean Lesage Intl" },
  { code: "YXE", city: "Saskatoon, SK", name: "Saskatoon John G. Diefenbaker Intl" },
  { code: "YQR", city: "Regina, SK", name: "Regina International" },
  // Major US connecting hubs
  { code: "ORD", city: "Chicago, IL", name: "O'Hare International" },
  { code: "MSP", city: "Minneapolis/St. Paul, MN", name: "Minneapolis-Saint Paul Intl" },
  { code: "EWR", city: "Newark, NJ", name: "Newark Liberty International" },
  { code: "JFK", city: "New York, NY", name: "John F. Kennedy International" },
  { code: "ATL", city: "Atlanta, GA", name: "Hartsfield-Jackson Atlanta Intl" },
  { code: "MIA", city: "Miami, FL", name: "Miami International" },
  { code: "MCO", city: "Orlando, FL", name: "Orlando International" },
  { code: "FLL", city: "Fort Lauderdale, FL", name: "Fort Lauderdale-Hollywood Intl" },
  { code: "TPA", city: "Tampa, FL", name: "Tampa International" },
  { code: "DFW", city: "Dallas/Fort Worth, TX", name: "Dallas/Fort Worth International" },
  { code: "DEN", city: "Denver, CO", name: "Denver International" },
  { code: "PHX", city: "Phoenix, AZ", name: "Phoenix Sky Harbor International" },
  { code: "LAX", city: "Los Angeles, CA", name: "Los Angeles International" },
  { code: "SEA", city: "Seattle, WA", name: "Seattle-Tacoma International" },
  { code: "BUF", city: "Buffalo, NY", name: "Buffalo Niagara International" },
];
