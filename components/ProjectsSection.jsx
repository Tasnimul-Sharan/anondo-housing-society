// import Image from "next/image";

// export default function ProjectsSection({ data }) {
//   return (
//     <section className="py-16 px-6 bg-white text-center">
//       <h2 className="text-3xl font-bold mb-10 text-gray-800">আনন্দ প্রকল্প</h2>
//       <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {data.map((p, i) => (
//           <div
//             key={i}
//             className="border rounded-lg shadow hover:shadow-lg transition"
//           >
//             <Image
//               src={p.image}
//               alt={p.title}
//               width={400}
//               height={250}
//               className="rounded-t-lg object-cover w-full"
//             />
//             <div className="p-4">
//               <h3 className="font-semibold mb-2">{p.title}</h3>
//               <button className="bg-orange-500 text-white px-4 py-2 rounded">
//                 বিস্তারিত
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

export default function ProjectsSection() {
  const projects = [
    {
      img: "/images/project-1.jpg",
      title: "ফেইজ - ১",
    },
    {
      img: "/images/project-2.jpg",
      title: "ফেইজ - ২",
    },
    {
      img: "/images/project-3.jpg",
      title: "ফেইজ - ৩",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-4">আমাদের প্রকল্প</h2>

        {/* Subtitle */}
        <p className="text-center max-w-3xl mx-auto text-gray-700 leading-relaxed mb-16">
          আনন্দ হাউজিং সোসাইটি তার ক্লায়েন্টদের মন জয় করার জন্য প্রতিটি
          প্রকল্পের সমস্ত দিকগুলিতে শ্রেষ্ঠত্বের জন্য প্রচেষ্টা করে, কারণ, দিনের
          শেষে, ছাদের যেখানে থাকে সেখানেই বাড়ি।
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {projects.map((item, index) => (
            <div key={index} className="group">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[380px] object-cover rounded-md shadow-lg"
              />

              {/* Button */}
              <button className="mt-6 bg-[#F5AF17] text-white font-semibold px-8 py-2 rounded shadow-md transition-all hover:bg-[#e0990d]">
                {item.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
