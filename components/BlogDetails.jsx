"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineTag } from "react-icons/ai";
import { FaQuoteLeft, FaRegCheckCircle, FaReply } from "react-icons/fa";

export default function NoticeDetails({ blogsData }) {
  const { blogPost } = blogsData;
  const noticeImages = blogPost.images?.length
    ? blogPost.images
    : [blogPost.image];

  return (
    <div className="max-w-6xl mx-auto md:px-0 px-6 space-y-8 py-20">
      <div className="space-y-6">
        {noticeImages.map((image, index) => (
          <div
            key={image}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 shadow-sm"
          >
            <Image
              src={image}
              alt={`${blogPost.title} - page ${index + 1}`}
              width={1400}
              height={1800}
              priority={index === 0}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
        {blogPost.title}
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {blogPost.description}
      </p>
      <p className="text-center text-sm text-gray-500">{blogPost.date}</p>
      <hr className="border-gray-200" />
      <div className="flex justify-center items-center gap-3">
        {blogsData.socialIcons.map(({ icon: Icon, link }, index) => {
          const currentUrl = `https://anondohousing.com/notice/${blogsData.slug}`;
          return (
            <a
              key={index}
              href={link(currentUrl, blogPost.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-primary hover:border-transparent hover:text-white transition-all transform duration-500"
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
