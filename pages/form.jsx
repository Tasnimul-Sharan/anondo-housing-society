import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import AttachmentTable from "@/components/AttachmentTable";
export default function FormPage() {
  const meta = {
    title: "Application Form | Anondo Housing Society",
    description:
      "Explore the Anondo Housing Society Gallery featuring our security training academy, professional guard deployments, corporate event coverage, residential safety operations, and modern surveillance technology in Bangladesh.",
    keywords:
      "Anondo Universal Services gallery, security services Bangladesh, guard training academy photos, professional guards images, event security gallery, residential protection photos, industrial security visuals, CCTV and surveillance Bangladesh",
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
          title: "Application Form",
          backgroundImage: "/gallery/gallery-bg.jpeg",
        }}
      />
      <AttachmentTable />
    </div>
  );
}
