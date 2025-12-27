"use client";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import EventMap from "@/components/EventMap";
import Navbar from "@/components/Navbar";
import CareerPageSection from "@/components/CareerPageSection";
import LotteryPage from "@/components/LotteryPageSection";
export default function ProjectLotteryPolicy() {
  const meta = {
    title:
      "Project Lottery Policy | Anondo Housing Society – Housing Project Guidelines",
    description:
      "Learn about the project lottery policy of Anondo Housing Society. Understand the rules, eligibility criteria, selection process, and official guidelines for plot and apartment allocation in our residential projects across Bangladesh.",
    keywords:
      "Anondo Housing Society lottery policy, housing project lottery Bangladesh, apartment allocation guidelines, plot allocation rules, residential project policy, housing society selection process Bangladesh",
    author: "Anondo Housing Society",
    url: "https://anondohousing.com/project-lottery-policy",
    image: "https://anondohousing.com/lottery/lottery-og.jpg",
  };

  return (
    <div className="w-full relative">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={meta.url} />
        <meta property="og:site_name" content="Anondo Housing Society" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <HeroSection
        hero={{
          title: "Project Lottery Policy",
          backgroundImage: "/contact-bg.jpeg",
        }}
      />
      <LotteryPage />
    </div>
  );
}
