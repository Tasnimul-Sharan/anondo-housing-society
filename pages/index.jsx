"use client";
import Head from "next/head";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import HowToBecomeOwner from "@/components/HowToBecomeOwner";
import LandingPage from "@/components/LandingPage";
import PresidentSection from "@/components/PresidentSection";
import ProjectsSection from "@/components/ProjectsSection";
import StatsSection from "@/components/StatsSection";
import homepageData from "@/data/homepageData";
import NoticeSection from "@/components/NoticeSection";
import AGMGallery from "@/components/AGMGallery";
import AGMDocumentary from "@/components/AGMDocumentary";

export default function Home() {
  const meta = {
    title:
      "Home | Anondo Housing Society - Modern & Secure Residential Community in Bangladesh",
    description:
      "Anondo Housing Society offers a modern, secure, and well-planned residential community in Bangladesh with quality housing, reliable utilities, green spaces, and a peaceful living environment for families and investors.",
    keywords:
      "Anondo Housing Society, housing society Bangladesh, residential housing project Bangladesh, modern housing society, secure residential area, apartment housing Bangladesh, land development project Bangladesh, gated community Bangladesh, real estate Bangladesh, housing project Dhaka",
    author: "Anondo Housing Society",
    url: "https://anondohousing.com",
    image: "https://anondohousing.com/og/home-og.jpg",
  };

  return (
    <div className="w-full">
      <Head>
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <link rel="canonical" href={meta.url} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={meta.url} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.image} />
      </Head>
      <LandingPage />
      <AboutSection />
      <StatsSection />
      <ProjectsSection />
      <HowToBecomeOwner />
      <AGMDocumentary />
      <AGMGallery />
      <PresidentSection />
      <FAQSection />
      <NoticeSection />
      <ContactSection />
    </div>
  );
}
