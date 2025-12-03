"use client";
import Head from "next/head";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import DocumentsSection from "@/components/DocumentsSection";
import FAQSection from "@/components/FAQSection";
import HowToBecomeOwner from "@/components/HowToBecomeOwner";
import LandingPage from "@/components/LandingPage";
import PresidentSection from "@/components/PresidentSection";
import ProjectsSection from "@/components/ProjectsSection";
import StatsSection from "@/components/StatsSection";
import homepageData from "@/data/homepageData";

export default function Home() {
  const { about, stats, projects, steps, faq, documents, contact, meta } =
    homepageData;

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
      <AboutSection data={about} />
      <StatsSection data={stats} />
      <ProjectsSection data={projects} />
      <HowToBecomeOwner data={steps} />
      <PresidentSection data={steps} />
      <FAQSection data={faq} />
      <DocumentsSection data={documents} />
      <ContactSection data={contact} />
    </div>
  );
}
