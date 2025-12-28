import AboutUsSection from "@/components/AboutUsSection";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import Head from "next/head";
import FAQ from "@/components/FAQ";
export default function AboutPage() {
  const meta = {
    title:
      "About Us | Anondo Housing Society – Trusted Residential & Community Development in Bangladesh",
    description:
      "Learn about Anondo Housing Society, a trusted residential housing and community development organization in Bangladesh. Discover our vision, mission, values, leadership, and commitment to secure, modern, and well-planned living environments.",
    keywords:
      "About Anondo Housing Society, housing society Bangladesh, residential community Bangladesh, real estate development Bangladesh, housing project company Bangladesh, trusted housing developer, gated community Bangladesh, modern housing society",
    author: "Anondo Housing Society",
    url: "https://anondohousing.com/about",
    image: "https://anondohousing.com/about/about-og.jpg",
  };

  const faqData = {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is Anondo Housing Society?",
        answer:
          "Anondo Housing Society (AUSL) is a multidisciplinary service provider in Bangladesh. We specialize in safety & security, engineering & real estate, and logistics & business support solutions. Our mission is to ensure safety, efficiency, and sustainable growth for individuals, businesses, and communities.",
      },
      {
        question: "Where is Anondo Housing Society located?",
        answer:
          "Our Head Office is at Printers Building, 12–14th Floor, 5 Rajuk Avenue, Motijheel, Dhaka–1000, Bangladesh. We operate nationwide, serving residential, commercial, and industrial clients with 24/7 support and rapid response services.",
      },
      {
        question: "What is the vision of AUSL?",
        answer:
          "Our vision is to become the most trusted security and service provider in South Asia by delivering innovative, reliable, and people-focused solutions.",
      },
      {
        question: "What is the mission of AUSL?",
        answer:
          "Our mission is to ensure safety, efficiency, and peace of mind through professionalism, modern technology, and uncompromising integrity.",
      },
      {
        question: "What types of services do you provide?",
        answer:
          "AUSL offers a wide range of services, including security guards, armed guards, caretakers, supervisors, peons, drivers, courier & cargo services, ERP & digital solutions, CCTV installation, event management, office management, digital marketing, and media & advertising services.",
      },
      {
        question: "How many security professionals are employed by AUSL?",
        answer:
          "We have more than 2,000 trained security professionals deployed across Bangladesh, supported by supervisors, caretakers, drivers, and specialized operational teams.",
      },
      {
        question: "How is safety and quality ensured?",
        answer:
          "All AUSL personnel undergo rigorous training in crisis response, fire safety, first aid, customer service, and advanced security protocols. We also operate a Central Command & Monitoring Center with 24/7 oversight and dedicated rapid response teams to ensure uncompromising service quality.",
      },
      {
        question: "Do you provide customized solutions?",
        answer:
          "Yes. AUSL delivers tailored security and support solutions for corporate offices, industrial sites, residential complexes, events, and high-risk facilities — ensuring each client receives the right protection and services for their needs.",
      },
      {
        question: "What technology-enabled services do you offer?",
        answer:
          "Our technology-driven services include CCTV surveillance, biometric access control, remote monitoring, ERP solutions, e-commerce platforms, and integrated alarm systems designed for businesses and individuals.",
      },
      {
        question: "How can I contact Anondo Housing Society?",
        answer:
          "📍 Head Office: Printers Building, 12–14th Floor, 5 Rajuk Avenue, Motijheel, Dhaka–1000, Bangladesh.\n📞 Phone: +880 1313-775333\n📧 Email: contact@anondouniversalserviceslimited.com\n🌐 Website: https://anondouniversalserviceslimited.com/",
      },
    ],
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
          title: "About",
          backgroundImage: "/hero-bg.jpg",
        }}
      />
      <AboutUsSection />
      {/* <TeamSection /> */}
      {/* <FAQ faqData={faqData} /> */}
    </div>
  );
}
