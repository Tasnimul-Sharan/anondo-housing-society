import { FaInstagram } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const blogDetailsData = {
  meta: {
    title: "Blogs | Anondo Housing Society",
    description:
      "Explore in-depth blogs from Anondo Housing Society covering our training academy, 30-day training program, security services, mission & vision, future vision, and quality assurance in the security industry of Bangladesh.",
    keywords:
      "Anondo Universal Services blog, security training Bangladesh, 30-day training program, mission and vision, future security vision, quality assurance, comprehensive security services",
    author: "Anondo Housing Society",
    url: "https://anondouniversalserviceslimited.com/blogs",
    image: "https://anondouniversalserviceslimited.com/blogs/blogs-og.jpg",
  },
  blogDetails: [
    {
      slug: "training-academy-overview",
      blogPost: {
        title: "Inside Our State-of-the-Art Training Academy",
        image: "/blogs/blog-1.jpeg",
        author: "Anondo Universal Team",
        date: "25 SEPTEMBER, 2025",
        description:
          "Take an inside look at Anondo Universal’s Training Academy — a two-acre facility designed to prepare disciplined security professionals through modern infrastructure and training tools.",
        checklist: [
          "Two-acre campus with dormitories and fitness grounds.",
          "Dedicated CCTV labs and simulation areas.",
          "Professional trainers ensuring disciplined development.",
        ],
        subImages: ["/blogs/blog-2.jpeg", "/blogs/blog-3.jpeg"],
        quote: "Training builds discipline, discipline builds trust.",
        postTags: ["Training Academy", "Security Training", "Discipline"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "importance-of-security-training",
      blogPost: {
        title: "Why Training Defines Reliable Security",
        image: "/blogs/blog-2.jpeg",
        author: "Anondo Universal Team",
        date: "20 SEPTEMBER, 2025",
        description:
          "Unlike traditional providers, Anondo Universal ensures every guard completes a rigorous 30-day program blending physical drills, legal awareness, and personal development for complete readiness.",
        checklist: [
          "Physical training and endurance building.",
          "Legal rights and compliance awareness.",
          "Soft skills and professional behavior training.",
        ],
        subImages: ["/blogs/blog-1.jpeg", "/blogs/blog-3.jpeg"],
        quote: "A well-trained guard is the foundation of secure environments.",
        postTags: ["Security Training", "Professional Guards", "Preparedness"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "comprehensive-security-services",
      blogPost: {
        title: "Comprehensive Services for Every Sector",
        image: "/blogs/blog-3.jpeg",
        author: "Anondo Universal Team",
        date: "15 SEPTEMBER, 2025",
        description:
          "From households and offices to factories, events, and financial institutions — explore how our tailored services deliver discipline, trust, and professionalism in every assignment.",
        checklist: [
          "Residential and corporate security solutions.",
          "Event and crowd management expertise.",
          "Industrial and financial institution security.",
        ],
        subImages: ["/blogs/blog-1.jpeg", "/blogs/blog-2.jpeg"],
        quote: "One company, all-round security for every need.",
        postTags: ["Security Services", "Corporate Safety", "Event Security"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "mission-vision-anondo-universal",
      blogPost: {
        title: "Our Mission & Vision: Redefining Security in Bangladesh",
        image: "/blogs/blog-1.jpeg",
        author: "Anondo Universal Team",
        date: "10 SEPTEMBER, 2025",
        description:
          "Learn how Anondo Universal is setting new benchmarks in private security through uncompromising training quality, ethical values, and future-focused practices.",
        checklist: [
          "Clear mission to deliver disciplined services.",
          "Vision to expand nationwide academies.",
          "Commitment to ethical values and professionalism.",
        ],
        subImages: ["/blogs/blog-2.jpeg", "/blogs/blog-3.jpeg"],
        quote: "Our mission drives us, our vision guides us.",
        postTags: ["Mission", "Vision", "Security Standards"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "30-day-training-program",
      blogPost: {
        title: "The 30-Day Training Curriculum Explained",
        image: "/blogs/blog-2.jpeg",
        author: "Anondo Universal Team",
        date: "07 SEPTEMBER, 2025",
        description:
          "Discover the four pillars of our training program — Field Training, Professional Skills, Theoretical Knowledge, and Personal Development — that shape disciplined and trustworthy guards.",
        checklist: [
          "Intensive field and drill sessions.",
          "Communication and professional skill-building.",
          "Theoretical understanding of law and ethics.",
          "Focus on discipline and personal growth.",
        ],
        subImages: ["/blogs/blog-1.jpeg", "/blogs/blog-3.jpeg"],
        quote: "Training isn’t a phase, it’s a foundation for life.",
        postTags: ["Training Program", "Skill Development", "Discipline"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "future-vision-security",
      blogPost: {
        title: "Future Vision: Building Tomorrow’s Security Standards",
        image: "/blogs/blog-3.jpeg",
        author: "Anondo Universal Team",
        date: "03 SEPTEMBER, 2025",
        description:
          "Our roadmap includes nationwide academies, AI-based surveillance, drone monitoring, and international guard deployment to meet global security demands.",
        checklist: [
          "Nationwide training centers expansion.",
          "AI surveillance and drone deployment.",
          "International guard services for global markets.",
        ],
        subImages: ["/blogs/blog-1.jpeg", "/blogs/blog-2.jpeg"],
        quote: "The future of security is smart, global, and disciplined.",
        postTags: ["Future Vision", "AI Surveillance", "Global Security"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "quality-assurance-in-security",
      blogPost: {
        title: "Quality Assurance in Every Guard Deployment",
        image: "/blogs/blog-1.jpeg",
        author: "Anondo Universal Team",
        date: "30 AUGUST, 2025",
        description:
          "Strict evaluation, surprise inspections, refresher courses, and client feedback loops ensure every guard remains disciplined, alert, and professional.",
        checklist: [
          "Surprise inspections and performance checks.",
          "Refresher training programs.",
          "Continuous client feedback and monitoring.",
        ],
        subImages: ["/blogs/blog-2.jpeg", "/blogs/blog-3.jpeg"],
        quote: "Quality assurance is the heartbeat of security.",
        postTags: ["Quality Control", "Professional Guards", "Client Trust"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "competitive-advantage-anondo-universal",
      blogPost: {
        title: "Competitive Advantage: Why Clients Trust Us",
        image: "/blogs/blog-2.jpeg",
        author: "Anondo Universal Team",
        date: "25 AUGUST, 2025",
        description:
          "With our own academy, professional trainers, cutting-edge practices, and a strong value system, Anondo Universal stands apart in Bangladesh’s security industry.",
        checklist: [
          "In-house training academy with expert trainers.",
          "Ethical and professional value system.",
          "Adoption of modern practices and technology.",
        ],
        subImages: ["/blogs/blog-1.jpeg", "/blogs/blog-3.jpeg"],
        quote: "Our edge is our discipline, values, and training.",
        postTags: ["Competitive Advantage", "Security Industry", "Trust"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
  ],
};
