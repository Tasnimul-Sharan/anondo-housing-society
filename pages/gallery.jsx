import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import GalleryPageSection from "@/components/GalleryPageSection";
export default function GalleryPage() {
  const meta = {
    title:
      "Gallery | Anondo Housing Society – Residential Projects in Bangladesh",
    description:
      "Explore the gallery of Anondo Housing Society showcasing our residential housing projects, land development sites, modern infrastructure, green spaces, construction progress, and community facilities across Bangladesh.",
    keywords:
      "Anondo Housing Society gallery, housing project gallery Bangladesh, residential project photos, real estate development gallery, apartment project images Bangladesh, land development photos, housing construction progress",
    author: "Anondo Housing Society",
    url: "https://anondohousing.com/gallery",
    image: "https://anondohousing.com/gallery/gallery-og.jpg",
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
          title: "Gallery",
          backgroundImage: "/gallery/gallery-bg.jpeg",
        }}
      />
      <GalleryPageSection />
    </div>
  );
}
