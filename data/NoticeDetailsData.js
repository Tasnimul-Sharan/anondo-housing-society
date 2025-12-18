import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { noticeData } from "./noticeData";

export const NoticeDetailsData = {
  meta: {
    title: "Notices | Anondo Housing Society",
    description:
      "Official notices, announcements, committee updates, registration updates and important information from Anondo Housing Society.",
    keywords:
      "Anondo Housing Society notice, committee update, registration notice, official announcement",
    author: "Anondo Housing Society",
    url: "https://anondohousingsociety.com/notices",
    image: "https://anondohousingsociety.com/notices/notice-og.jpg",
  },

  blogDetails: noticeData.map((item) => ({
    slug: item.slug,
    blogPost: {
      title: item.title,
      image: item.image,
      author: item.author,
      date: item.date,
      description: item.description,
      postTags: [],
    },
    socialIcons: social(),
  })),
};

function social() {
  return [
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
  ];
}
