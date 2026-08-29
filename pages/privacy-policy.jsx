import HeroSection from "@/components/HeroSection";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Head from "next/head";

export default function PrivacyPolicyPage() {
  const meta = {
    title:
      "Privacy Policy | Anondo Housing Society – Data Protection & Website Privacy",
    description:
      "Read the Privacy Policy of Anondo Housing Society to understand how we collect, use, protect, and manage personal information shared through our website and services.",
    keywords:
      "Anondo Housing Society privacy policy, data protection, personal information, website privacy, housing society Bangladesh privacy",
    author: "Anondo Housing Society",
    url: "https://anondohousing.com/privacy-policy",
    image: "https://anondohousing.com/privacy/privacy-og.jpg",
  };

  return (
    <div className="relative w-full">
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
          title: "Privacy Policy",
          backgroundImage: "/contact-bg.jpeg",
        }}
      />
      <PrivacyPolicy />
    </div>
  );
}
