import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import NoticePageSection from "@/components/NoticePageSection";
export default function NoticePage() {
  const meta = {
    title:
      "Notice & Updates | Anondo Housing Society – Housing Project Announcements",
    description:
      "Stay updated with the latest notices, announcements, project updates, and important information from Anondo Housing Society. Get news about housing projects, plot and apartment ownership, booking updates, and official circulars.",
    keywords:
      "Anondo Housing Society notice, housing project notices Bangladesh, real estate updates Bangladesh, apartment booking notice, plot ownership updates, housing society announcements, Anondo Housing news",
    author: "Anondo Housing Society",
    url: "https://anondohousing.com/notice",
    image: "https://anondohousing.com/notice/notice-og.jpg",
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
          title: "Notice",
          backgroundImage: "/blogs/blog-bg.jpeg",
        }}
      />
      <NoticePageSection />
    </div>
  );
}
