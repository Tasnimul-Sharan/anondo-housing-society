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
      <AboutSection />
      <StatsSection data={stats} />
      <ProjectsSection data={projects} />
      <HowToBecomeOwner />
      <PresidentSection data={steps} />
      <FAQSection data={faq} />
      <NoticeSection data={documents} />
      <ContactSection data={contact} />
    </div>
  );
}
