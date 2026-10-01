import type { Metadata } from "next";
import { clashDisplay, generalSans } from "@/lib/fonts";
import RevealObserver from "@/components/RevealObserver";
import "./globals.css";

export const metadata: Metadata = {
  title: "Where We Go Vacation Co. | Family vacations worth taking",
  description:
    "Tell us who's going, when you're free and what you want to spend. We'll help narrow down the world — family vacations to Mexico, the Caribbean, Florida, Costa Rica, Europe and cruises.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${clashDisplay.variable} ${generalSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
