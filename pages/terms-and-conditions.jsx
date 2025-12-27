"use client";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import TermsAndConditions from "@/components/TermsAndConditions";
export default function TermsAndConditionPage() {
  const meta = {
    title:
      "Terms & Conditions | Anondo Housing Society – Residential Project Policies",
    description:
      "Read the terms and conditions of Anondo Housing Society regarding plot and apartment ownership, booking rules, payment policies, and usage guidelines. Ensure a clear understanding of your rights and responsibilities within our residential projects in Bangladesh.",
    keywords:
      "Anondo Housing Society terms and conditions, housing project rules, apartment booking policies, plot ownership terms, residential project guidelines, housing society regulations Bangladesh",
    author: "Anondo Housing Society",
    url: "https://anondohousing.com/terms-and-conditions",
    image: "https://anondohousing.com/terms/terms-og.jpg",
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
          title: "Terms And Conditions",
          backgroundImage: "/contact-bg.jpeg",
        }}
      />
      <TermsAndConditions />
    </div>
  );
}
