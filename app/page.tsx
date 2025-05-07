import { Metadata } from "next";
import HeroSection from "@/components/landing-page/HeroSection";
import AboutSection from "@/components/landing-page/AboutSection";
import WhyUsSection from "@/components/landing-page/WhyUsSection";
import PricingSection from "@/components/landing-page/PricingSection";
import ContactUs from "@/components/landing-page/ContactUs";
import Script from "next/script";

export const metadata: Metadata = {
  title: "TrackZero - Smart Maintenance & Breakdown Management Software",
  description:
    "AI-powered maintenance and breakdown tracking software built by engineers. Streamline defect management, reduce downtime, and improve efficiency with our modern CMMS solution.",
  alternates: {
    canonical: "https://trackzero.app",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TrackZero",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "100",
    priceCurrency: "USD",
    priceValidUntil: new Date(
      new Date().setFullYear(new Date().getFullYear() + 1)
    )
      .toISOString()
      .split("T")[0],
  },
  description:
    "AI-powered maintenance and breakdown tracking software built by engineers. Streamline defect management, reduce downtime, and improve efficiency.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "127",
  },
  featureList: [
    "AI-Powered Insights",
    "Real-time Defect Tracking",
    "Preventive Maintenance",
    "Equipment Management",
    "Performance Analytics",
    "Mobile Access",
  ],
};

const HomePage = () => {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyUsSection />
        <PricingSection />
        <ContactUs />
      </main>
    </>
  );
};

export default HomePage;
