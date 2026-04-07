"use client";
import EventDetails from "@/components/EventDetails";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
export default function EventPage() {
  const meta = {
    title:
      "Event | Anondo Housing Society – Residential Housing in Bangladesh",
    description:
      "Discover upcoming events and activities at Anondo Housing Society. Join us for exclusive gatherings, property tours, and community engagement opportunities in Bangladesh.",
    keywords:
      "Event Anondo Housing Society, housing events Bangladesh, real estate events Bangladesh, apartment events, plot events, housing project events, residential housing events Bangladesh",
    author: "Anondo Housing Society",
    url: "https://anondohousing.com/event",
    image: "https://anondohousing.com/event/event-og.jpg",
  };

  return (
    <div className="w-full relative">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
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
          title: "Events",
          backgroundImage: "/event-bg.jpeg",
        }}
          />
          <EventDetails />
    </div>
  );
}
