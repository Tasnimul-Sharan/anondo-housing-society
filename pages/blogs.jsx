import BlogPageSection from "@/components/BlogPageSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Head from "next/head";
export default function BlogsPage() {
  const meta = {
    title: "Blogs | Anondo Housing Society - Security & Protection Insights",
    description:
      "Read blogs and articles from Anondo Housing Society on professional security training, risk management, residential protection, corporate event safety, industrial site security, and modern surveillance technology in Bangladesh.",
    keywords:
      "Anondo Universal Services blogs, security training Bangladesh, risk management articles, residential protection tips, corporate event safety, industrial site security, CCTV surveillance Bangladesh, professional guards insights",
    author: "Anondo Housing Society",
    url: "https://anondohousing.com/blogs",
    image: "https://anondohousing.com/blogs/blog-og.jpg",
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
          title: "Blogs",
          backgroundImage: "/blogs/blog-bg.jpeg",
        }}
      />
      <BlogPageSection />
    </div>
  );
}
