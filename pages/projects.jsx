import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import ProjectPageSection from "@/components/ProjectPageSection";
export default function ProjectPage() {
  const meta = {
    title:
      "Our Projects | Anondo Housing Society – Residential Housing Projects in Bangladesh",
    description:
      "Explore the residential housing and land development projects of Anondo Housing Society in Bangladesh. Discover modern apartments, planned communities, secure environments, and quality infrastructure designed for comfortable and sustainable living.",
    keywords:
      "Anondo Housing Society projects, housing projects Bangladesh, residential projects Bangladesh, real estate projects Bangladesh, apartment projects Bangladesh, land development projects, gated community projects, ongoing housing projects Bangladesh",
    author: "Anondo Housing Society",
    url: "https://anondohousing.com/projects",
    image: "https://anondohousing.com/projects/projects-og.jpg",
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
          title: "Project",
          backgroundImage: "/about-bg.jpeg",
        }}
      />
      <ProjectPageSection />
    </div>
  );
}
