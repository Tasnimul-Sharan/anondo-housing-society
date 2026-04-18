// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import Lightbox from "yet-another-react-lightbox";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Captions from "yet-another-react-lightbox/plugins/captions";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
// import "yet-another-react-lightbox/styles.css";
// import "yet-another-react-lightbox/plugins/thumbnails.css";
// import "yet-another-react-lightbox/plugins/captions.css";
// import { FiEye } from "react-icons/fi";

// export default function GalleryPageSection() {
//   const gallery = [
//     { img: "/gallery/gallery1.jpg", date: "12 January 2025" },
//     { img: "/gallery/gallery2.jpg", date: "18 January 2025" },
//     { img: "/clients/client-1.jpg", date: "02 February 2025" },
//     { img: "/clients/client-2.jpg", date: "05 February 2025" },
//     { img: "/clients/client-3.jpg", date: "10 February 2025" },
//     { img: "/clients/client-4.jpg", date: "15 February 2025" },
//     { img: "/clients/client-5.jpg", date: "18 February 2025" },
//     { img: "/clients/client-6.jpg", date: "20 February 2025" },
//     { img: "/clients/client-7.jpg", date: "22 February 2025" },
//     { img: "/clients/client-8.jpg", date: "25 February 2025" },

//     { img: "/agm/agm-01.jpg", date: "11 April 2026" },
//     { img: "/agm/agm-02.jpg", date: "11 April 2026" },
//     { img: "/agm/agm-03.jpg", date: "11 April 2026" },
//     { img: "/agm/agm-04.jpg", date: "11 April 2026" },
//     { img: "/agm/agm-05.jpg", date: "11 April 2026" },
//     { img: "/agm/agm-06.jpg", date: "11 April 2026" },
//     { img: "/agm/agm-07.jpg", date: "11 April 2026" },
//     { img: "/agm/agm-08.jpg", date: "11 April 2026" },
//     { img: "/agm/agm-09.jpg", date: "11 April 2026" },
//     { img: "/agm/agm-10.jpg", date: "11 April 2026" },
//     { img: "/agm/agm-11.jpg", date: "11 April 2026" },
//     { img: "/agm/agm-12.jpg", date: "11 April 2026" },
//     { img: "/agm/agm-13.jpg", date: "11 April 2026" },
//     { img: "/agm/agm-14.jpg", date: "11 April 2026" },
//   ];

//   const [isOpen, setIsOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleOpen = (idx) => {
//     setCurrentIndex(idx);
//     setIsOpen(true);
//   };

//   return (
//     <div className="custom-container mx-auto py-16">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {gallery.map((item, idx) => (
//           <div
//             key={idx}
//             onClick={() => handleOpen(idx)}
//             className="relative overflow-hidden rounded-md group cursor-pointer"
//           >
//             <Image
//               src={item.img}
//               alt={`gallery-${idx}`}
//               width={1200}
//               height={1200}
//               className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
//             />

//             <div className="absolute inset-0 flex items-end justify-center p-4">
//               <button
//                 className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0
//                 transition-all duration-500 bg-primary text-white px-6 py-3 rounded-md
//                 flex items-center gap-2"
//               >
//                 <FiEye className="text-lg" />
//                 View Image
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {isOpen && (
//         <Lightbox
//           open={isOpen}
//           close={() => setIsOpen(false)}
//           index={currentIndex}
//           slides={gallery.map((g) => ({
//             src: g.img,
//             title: `Date: ${g.date}`, // 👈 This shows on top
//           }))}
//           plugins={[Thumbnails, Captions, Zoom, Fullscreen, Slideshow]}
//           captions={{ titleTextAlign: "center" }}
//           thumbnails={{ position: "bottom", width: 100, height: 70 }}
//         />
//       )}
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { FiEye } from "react-icons/fi";

export default function GalleryPageSection() {
  const sections = [
    {
      title: "General Gallery",
      data: [
        { img: "/gallery/gallery1.jpg", date: "12 January 2025" },
        { img: "/gallery/gallery2.jpg", date: "18 January 2025" },
      ],
    },
    {
      title: "Our Clients",
      data: [
        { img: "/clients/client-1.jpg", date: "02 February 2025" },
        { img: "/clients/client-2.jpg", date: "05 February 2025" },
        { img: "/clients/client-3.jpg", date: "10 February 2025" },
        { img: "/clients/client-4.jpg", date: "15 February 2025" },
        { img: "/clients/client-5.jpg", date: "18 February 2025" },
        { img: "/clients/client-6.jpg", date: "20 February 2025" },
        { img: "/clients/client-7.jpg", date: "22 February 2025" },
        { img: "/clients/client-8.jpg", date: "25 February 2025" },
      ],
    },
    {
      title: "AGM 2026",
      data: [
        { img: "/agm/agm-01.jpg", date: "11 April 2026" },
        { img: "/agm/agm-02.jpg", date: "11 April 2026" },
        { img: "/agm/agm-03.jpg", date: "11 April 2026" },
        { img: "/agm/agm-04.jpg", date: "11 April 2026" },
        { img: "/agm/agm-05.jpg", date: "11 April 2026" },
        { img: "/agm/agm-06.jpg", date: "11 April 2026" },
        { img: "/agm/agm-07.jpg", date: "11 April 2026" },
        { img: "/agm/agm-08.jpg", date: "11 April 2026" },
        { img: "/agm/agm-09.jpg", date: "11 April 2026" },
        { img: "/agm/agm-10.jpg", date: "11 April 2026" },
        { img: "/agm/agm-11.jpg", date: "11 April 2026" },
        { img: "/agm/agm-12.jpg", date: "11 April 2026" },
        { img: "/agm/agm-13.jpg", date: "11 April 2026" },
        { img: "/agm/agm-14.jpg", date: "11 April 2026" },
      ],
    },
  ];

  const flatGallery = sections.flatMap((section) => section.data);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (idx) => {
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  let globalIndex = 0;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-0 py-16 space-y-16">
      {sections.map((section, sIdx) => (
        <div key={sIdx}>
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            {section.title}
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {section.data.map((item, idx) => {
              const currentGlobalIndex = globalIndex++;
              return (
                <div
                  key={idx}
                  onClick={() => handleOpen(currentGlobalIndex)}
                  className="relative overflow-hidden rounded-xl group cursor-pointer"
                >
                  <Image
                    src={item.img}
                    alt={`gallery-${idx}`}
                    width={500}
                    height={400}
                    className="w-full h-[240px] object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-end justify-center p-4">
                    <button className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500 bg-primary text-white px-5 py-2 rounded-md flex items-center gap-2">
                      <FiEye />
                      View Image
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={currentIndex}
          slides={flatGallery.map((g) => ({
            src: g.img,
            title: `Date: ${g.date}`,
          }))}
          plugins={[Thumbnails, Captions, Zoom, Fullscreen, Slideshow]}
          captions={{ titleTextAlign: "center" }}
          thumbnails={{ position: "bottom", width: 100, height: 70 }}
        />
      )}
    </div>
  );
}
