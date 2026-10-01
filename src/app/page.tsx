import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeelingGrid from "@/components/FeelingGrid";
import DestinationStrip from "@/components/DestinationStrip";
import FamilyBand from "@/components/FamilyBand";
import FinderSection from "@/components/FinderSection";
import TripIdeas from "@/components/TripIdeas";
import BudgetFeature from "@/components/BudgetFeature";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
import JournalTeaser from "@/components/JournalTeaser";
import EmailSignup from "@/components/EmailSignup";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeelingGrid />
        <DestinationStrip />
        <FamilyBand />
        <FinderSection />
        <TripIdeas />
        <BudgetFeature />
        <HowItWorks />
        <TrustSection />
        <JournalTeaser />
        <EmailSignup />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
