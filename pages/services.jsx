import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import Navbar from "@/components/Navbar";

import ServicesSection from "@/components/ServicesSection";
import QualityAssuranceSection from "@/components/QualityAssuranceSection";
import CompetitiveAdvantageSection from "@/components/CompetitiveAdvantageSection";
import ClientFocusSection from "@/components/ClientFocusSection";

export default function ServicesPage() {
  const meta = {
    title:
      "Services | Anondo Housing Society - Professional Security Solutions in Bangladesh",
    description:
      "Explore Anondo Housing Society’s professional security services in Bangladesh. From manned guarding, corporate event protection, residential and industrial security to CCTV surveillance, risk management, and our state-of-the-art training academy — we ensure safety with discipline and trust.",
    keywords:
      "Anondo Universal Services, security services Bangladesh, manned guarding, corporate event protection, residential security, industrial site safety, CCTV surveillance, risk management, security training academy",
    author: "Anondo Housing Society",
    url: "https://anondohousing.com/services",
    image: "https://anondohousing.com/services/services-og.jpg",
  };

  return (
    <div className="w-full relative">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <Navbar hasBackground={true} />
      <HeroSection
        hero={{
          title: "Services",
          backgroundImage: "/services/services-bg.jpeg",
        }}
      />

      <ServicesSection />
      <QualityAssuranceSection />
      <CompetitiveAdvantageSection />
      <ClientFocusSection />
    </div>
  );
}
