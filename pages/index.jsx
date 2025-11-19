"use client";

import AboutSection from "@/components/AboutSection";
// import AboutSection from "@/components/AboutUsSection";
import ContactSection from "@/components/ContactSection";
import DocumentsSection from "@/components/DocumentsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowToBecomeOwner from "@/components/HowToBecomeOwner";
import LandingPage from "@/components/LandingPage";
import PresidentSection from "@/components/PresidentSection";
import ProjectsSection from "@/components/ProjectsSection";
import StatsSection from "@/components/StatsSection";
import StepsSection from "@/components/StepsSection";
import homepageData from "@/data/homepageData";

import Head from "next/head";

export default function Home() {
  const {
    hero,
    about,
    stats,
    projects,
    steps,
    faq,
    documents,
    contact,
    footer,
    meta,
  } = homepageData;

  return (
    <div className="w-full">
      <Head>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
        <meta property="og:title" content={meta?.title} />
        <meta property="og:description" content={meta?.description} />
        <meta property="og:type" content="website" />
      </Head>
      <LandingPage />
      {/* <HeroSection data={hero} /> */}
      <AboutSection data={about} />
      <StatsSection data={stats} />
      <ProjectsSection data={projects} />
      {/* <StepsSection data={steps} /> */}
      <HowToBecomeOwner data={steps} />
      <PresidentSection data={steps} />
      <FAQSection data={faq} />
      <DocumentsSection data={documents} />
      <ContactSection data={contact} />
      {/* <Footer data={footer} /> */}
    </div>
  );
}
