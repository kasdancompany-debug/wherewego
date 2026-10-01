import localFont from "next/font/local";

export const clashDisplay = localFont({
  src: [
    { path: "../fonts/clash-display-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/clash-display-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/clash-display-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/clash-display-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-clash",
  display: "swap",
});

export const generalSans = localFont({
  src: [
    { path: "../fonts/general-sans-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/general-sans-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/general-sans-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/general-sans-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-general",
  display: "swap",
});
