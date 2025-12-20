"use client";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      img: "/prokolpo/prokolpo1.jpeg",
      title: "ফেইজ - ১",
      slug: "prokolpo-1",
    },
    {
      img: "/prokolpo/prokolpo2.jpeg",
      title: "ফেইজ - ২",
      slug: "prokolpo-2",
    },
    {
      img: "/prokolpo/prokolpo3.jpg",
      title: "ফেইজ - ৩",
      slug: "prokolpo-3",
    },
    {
      img: "/prokolpo/prokolpo4.jpg",
      title: "C & D Block",
      slug: "c-d-block",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <h2 className="text-4xl font-bold text-center mb-4">আমাদের প্রকল্প</h2>
        <div className="w-20 h-[3px] bg-primary mt-4 mb-8 mx-auto"></div>

        <p className="text-center max-w-3xl mx-auto text-gray-700 leading-relaxed mb-16">
          আনন্দ হাউজিং সোসাইটি তার ক্লায়েন্টদের মন জয় করার জন্য প্রতিটি
          প্রকল্পের সমস্ত দিকগুলিতে শ্রেষ্ঠত্বের জন্য প্রচেষ্টা করে।
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {projects.map((item, index) => (
            <div key={index} className="group">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[380px] object-cover rounded-md"
              />

              <Link href={`/prokolpo/${item.slug}`}>
                <button className="mt-6 bg-primary text-white font-semibold px-8 py-3 rounded shadow-md transition-all hover:bg-secondary transform duration-500">
                  {item.title}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
