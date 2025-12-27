"use client";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import CareerPageSection from "@/components/CareerPageSection";
export default function CareerOpportunitiesPage() {
  const meta = {
    title:
      "Career Opportunities | Anondo Housing Society – Join Our Housing Team",
    description:
      "Explore career opportunities at Anondo Housing Society. Join our team in residential project development, engineering, sales, marketing, administration, and site operations. Build your career with a trusted housing organization in Bangladesh.",
    keywords:
      "Anondo Housing Society careers, housing jobs Bangladesh, real estate jobs Bangladesh, construction jobs Bangladesh, engineering jobs housing, sales marketing jobs real estate, site supervisor jobs Bangladesh",
    author: "Anondo Housing Society",
    url: "https://anondohousing.com/career",
    image: "https://anondohousing.com/career/career-og.jpg",
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
          title: "Career Opportunities",
          backgroundImage: "/contact-bg.jpeg",
        }}
      />
      <CareerPageSection />
    </div>
  );
}
