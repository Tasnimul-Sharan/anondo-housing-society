"use client";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import PaymentInfo from "@/components/PaymentInfo";
export default function PaymentProceduresPage() {
  const meta = {
    title:
      "Payment Procedures | Anondo Housing Society – Plot & Apartment Payment Guide",
    description:
      "Learn about the payment procedures for plots and apartments at Anondo Housing Society. Find detailed guidance on booking payments, installment plans, bank transfers, and secure payment methods for residential ownership in Bangladesh.",
    keywords:
      "Anondo Housing Society payment procedures, housing payment guide Bangladesh, apartment payment steps, plot payment process, installment plans housing Bangladesh, secure payment housing project",
    author: "Anondo Housing Society",
    url: "https://anondohousing.com/payment-procedures",
    image: "https://anondohousing.com/payment/payment-og.jpg",
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
          title: "Payment Procedures",
          backgroundImage: "/contact-bg.jpeg",
        }}
      />
      <PaymentInfo />
    </div>
  );
}
