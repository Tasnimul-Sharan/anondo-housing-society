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
// import { motion } from "framer-motion";

// export default function Gallery() {
//   const gallery = [
//     { img: "/gallery/gallery1.jpeg", title: "Gallery Image 1" },
//     { img: "/gallery/gallery2.jpeg", title: "Gallery Image 2" },
//     { img: "/gallery/gallery3.jpeg", title: "Gallery Image 3" },
//     { img: "/gallery/gallery4.jpeg", title: "Gallery Image 4" },
//     { img: "/gallery/gallery5.jpeg", title: "Gallery Image 5" },
//     { img: "/gallery/gallery6.jpeg", title: "Gallery Image 6" },
//   ];

//   const subtitle = "Our Works";
//   const title = "Explore Our Gallery";

//   const [isOpen, setIsOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleOpen = (idx) => {
//     setCurrentIndex(idx);
//     setIsOpen(true);
//   };

//   // Animation Variants
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 50, scale: 0.9 },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   };

//   return (
//     <div className="custom-container mx-auto py-16">
//       {/* Title Section */}
//       <motion.div
//         className="text-center mb-12"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <p className="uppercase font-medium text-primary tracking-[0.15em] text-sm">
//           {subtitle}
//         </p>
//         <h2 className="text-secondary text-3xl md:text-4xl font-bold mt-2">
//           {title}
//         </h2>
//       </motion.div>

//       {/* Gallery Grid */}
//       <motion.div
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         {gallery.map((itemData, idx) => (
//           <motion.div
//             key={idx}
//             variants={item}
//             className="relative overflow-hidden rounded-md group cursor-pointer"
//             onClick={() => handleOpen(idx)}
//           >
//             <Image
//               src={itemData.img}
//               alt={`gallery-${idx}`}
//               width={1200}
//               height={1200}
//               className="w-full h-full object-cover transition-all transform duration-1000 ease-in group-hover:scale-125"
//             />

//             <div className="absolute inset-0 flex items-end justify-center p-4">
//               <button
//                 className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0
//                 transition-all duration-500 ease-out bg-primary text-white px-6 py-4 rounded-md
//                 flex items-center gap-2"
//               >
//                 <FiEye className="text-lg" />
//                 View Image
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Lightbox */}
//       {isOpen && (
//         <Lightbox
//           open={isOpen}
//           close={() => setIsOpen(false)}
//           index={currentIndex}
//           slides={gallery.map((g) => ({
//             src: g.img,
//             title: g.title,
//             description: g.desc,
//           }))}
//           plugins={[Thumbnails, Captions, Zoom, Fullscreen, Slideshow]}
//           thumbnails={{ position: "bottom", width: 100, height: 70 }}
//           captions={{ descriptionTextAlign: "center" }}
//           zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
//           slideshow={{ autoplay: false, delay: 4000 }}
//         />
//       )}
//     </div>
//   );
// }



"use client";
import { SlideshowLightbox } from "lightbox.js-react";
import SectionHeader from "./SectionHeader";
// import "lightbox.js-react/style.css";

export default function Gallery() {
  const gallery = [
    {
      img: "/gallery/gallery1.jpeg",
      title: "Gallery Image 1",
    },
    {
      img: "/gallery/gallery2.jpeg",
      title: "Gallery Image 2",
    },
    {
      img: "/gallery/gallery3.jpeg",
      title: "Gallery Image 3",
    },
    {
      img: "/gallery/gallery4.jpeg",
      title: "Gallery Image 4",
    },
    {
      img: "/gallery/gallery5.jpeg",
      title: "Gallery Image 5",
    },
    {
      img: "/gallery/gallery6.jpeg",
      title: "Gallery Image 6",
    },
  ];

  return (
    <div className="custom-container mx-auto py-16">
     <SectionHeader
  subtitle="Our Works"
  title="Explore Our Gallery"
  details="Take a look at our security operations, events, and on-field activities that highlight our commitment to safety and protection."
/>


      <SlideshowLightbox modalClose="clickOutside"  showThumbnails={true} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, idx) => (
          <img
            key={idx}
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover rounded-md hover:scale-105 transition-all duration-500"
          />
        ))}
        </SlideshowLightbox> 
    </div>
  );
}

