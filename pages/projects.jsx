import AboutUsSection from "@/components/AboutUsSection";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import WorkProcess from "@/components/WorkProcess";
import WhyUsSection from "@/components/WhyUsSection";
import Head from "next/head";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import VisionMissionGoals from "@/components/VisionMissionGoals";
import FutureVision from "@/components/FutureVision";
import ProjectPageSection from "@/components/ProjectPageSection";
export default function ProjectPage() {
  const meta = {
    title:
      "About Us | Anondo Housing Society - Security & Professional Services in Bangladesh",
    description:
      "Learn about Anondo Housing Society (AUSL), a trusted provider of security, engineering, real estate, logistics, and business support services in Bangladesh. Discover our mission, vision, nationwide operations, and commitment to safety, efficiency, and integrity.",
    keywords:
      "Anondo Housing Society, AUSL Bangladesh, security services Bangladesh, armed guards, logistics services, engineering solutions, real estate Bangladesh, CCTV installation, event management Bangladesh, business support services",
    author: "Anondo Housing Society",
    url: "https://anondohousing.com/about",
    image: "https://anondohousing.com/about/about-og.jpg",
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
          title: "About",
          //   subtitle: "About",
          backgroundImage: "/about-bg.jpeg",
        }}
      />
      <ProjectPageSection />
    </div>
  );
}
