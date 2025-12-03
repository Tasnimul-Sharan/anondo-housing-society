"use client";
import { useRouter } from "next/router";
import Head from "next/head";
import { RiLoader2Fill } from "react-icons/ri";
import HeroSection from "@/components/HeroSection";
import ProjectDetails from "@/components/ProjectDetails";
import { projectDetailsData } from "@/data/projectDetailsData";

export default function ProjectDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Loader
  if (!slug) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center min-h-screen text-secondary">
        <RiLoader2Fill className="animate-spin w-6 h-6" />
        <p className="font-medium text-xl">Loading...</p>
      </div>
    );
  }

  // Data
  const { projects } = projectDetailsData;
  const project = projects.find((item) => item.slug === slug);

  // Not found
  if (!project) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-secondary font-medium text-xl">
          Project details not found.
        </p>
      </div>
    );
  }

  // Meta tags
  const meta = {
    title: `${project.title} | Anondo Housing Projects`,
    description:
      project.description ||
      `${project.title} – Full project layout, pricing table, gallery & location map.`,
    keywords: `${project.keywords?.join(", ")}, Anondo Housing Projects`,
    author: "Anondo Housing",
    url: `https://www.anondohousing.com/prokolpo/${project.slug}`,
    image: project.banner || "/projects/project-og.jpg",
  };

  return (
    <div>
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

      <HeroSection
        hero={{
          title: project.title,
          backgroundImage: project.banner || "/projects/project-bg.jpg",
        }}
      />

      <ProjectDetails project={project} />
    </div>
  );
}
