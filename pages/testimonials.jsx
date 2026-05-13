import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import TestimonialPageSection from "@/components/TestimonialPageSection";

export default function TestimonialPage() {
  const meta = {
    title:
      "Testimonials | Anondo Housing Society – Plot Owners’ Reviews & Experiences",
    description:
      "Read real testimonials, reviews, and experiences from Anondo Housing Society plot owners. Discover their trust, satisfaction, plot handover experience, service feedback, and investment journey with Anondo Housing Society.",
    keywords:
      "Anondo Housing Society testimonials, Anondo Housing reviews, plot owner reviews Bangladesh, real estate client testimonials Bangladesh, housing project customer feedback, plot handover experience, Anondo Housing plot owner experience, real estate investment reviews Bangladesh",
    author: "Anondo Housing Society",
    url: "https://anondohousing.com/testimonials",
    image: "https://anondohousing.com/testimonials/testimonials-og.jpg",
  };

  return (
    <div className="relative w-full">
      <Head>
        {/* Primary Meta Tags */}
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Canonical URL */}
        <link rel="canonical" href={meta.url} />

        {/* Open Graph / Facebook */}
        <meta property="og:site_name" content="Anondo Housing Society" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta
          property="og:image:alt"
          content="Anondo Housing Society plot owner testimonials"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={meta.url} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

        {/* Extra SEO */}
        <meta name="theme-color" content="#0072bc" />
      </Head>

      <HeroSection
        hero={{
          title: "Testimonials",
          subtitle: "Real stories from our valued plot owners",
          backgroundImage: "/testimonials/testimonials-bg.jpg",
        }}
      />

      <TestimonialPageSection />
    </div>
  );
}
