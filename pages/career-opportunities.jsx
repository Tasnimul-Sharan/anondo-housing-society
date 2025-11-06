"use client";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import EventMap from "@/components/EventMap";
import Navbar from "@/components/Navbar";
import CareerPageSection from "@/components/CareerPageSection";
export default function CareerOpportunitiesPage() {
  const meta = {
    title:
      "Career Opportunities | Anondo Housing Society - Professional Security Services in Bangladesh",
    description:
      "Get in touch with Anondo Housing Society for inquiries, service requests, or consultations. Serving Bangladesh with manned guarding, corporate event protection, residential and industrial security, CCTV surveillance, and training programs.",
    keywords:
      "Anondo Universal contact, security services Bangladesh, manned guarding inquiry, corporate event security contact, residential security, industrial security, CCTV services, security training, Anondo Universal phone, Anondo Universal email",
    author: "Anondo Housing Society",
    url: "https://anondohousing.com/contact",
    image: "https://anondohousing.com/contact/contact-og.jpg",
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
          title: "Career Opportunities",
          backgroundImage: "/contact-bg.jpeg",
        }}
      />
      <CareerPageSection />
    </div>
  );
}
