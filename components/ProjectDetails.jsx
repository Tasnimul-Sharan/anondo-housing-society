// export default function ProjectDetails({ project }) {
//   const { description, priceTable, notes } = project;

//   return (
//     <div className="max-w-5xl mx-auto py-16 px-6">

//       {/* Description */}
//       <div className="mb-10 text-lg leading-loose whitespace-pre-line">
//         {description}
//       </div>

//       {/* Price Table — only if exists */}
//       {priceTable && priceTable.length > 0 && (
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold mb-4">📋 মূল্য তালিকা</h2>

//           <div className="overflow-x-auto">
//             <table className="w-full border border-gray-300">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="border p-3">ক্রমিক</th>
//                   <th className="border p-3">প্লটের ধরন</th>
//                   <th className="border p-3">ইউনিট</th>
//                   <th className="border p-3">মূল্য (টাকা)</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {priceTable.map((row) => (
//                   <tr key={row.serial} className="text-center">
//                     <td className="border p-3">{row.serial}</td>
//                     <td className="border p-3">{row.type}</td>
//                     <td className="border p-3">{row.unit}</td>
//                     <td className="border p-3">{row.price}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}

//       {/* Notes — only if exists */}
//       {notes && notes.length > 0 && (
//         <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
//           <h3 className="text-xl font-bold mb-3">📌 নোট / শর্তাবলী</h3>

//           <ul className="list-disc pl-6 space-y-2">
//             {notes.map((item, idx) => (
//               <li key={idx}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// import Image from "next/image";
// import EventMap from "@/components/EventMap";

// export default function ProjectDetails({ project }) {
//   const { banner, title, description, priceTable, notes, images } = project;

//   return (
//     <div className="w-full">
//       {/* Top Banner Image */}
//       <div className="w-full">
//         <Image
//           src={banner}
//           width={1600}
//           height={700}
//           alt="Project Banner"
//           className="w-full max-h-[420px] object-cover"
//         />
//       </div>

//       {/* Title */}
//       <h1 className="text-center text-3xl font-bold my-8">{title}</h1>

//       {/* Description */}
//       <div className="max-w-5xl mx-auto text-lg leading-relaxed px-6 whitespace-pre-line">
//         {description}
//       </div>

//       {/* Price Table */}
//       {priceTable && priceTable.length > 0 && (
//         <div className="max-w-5xl mx-auto px-6 my-12">
//           <h2 className="text-2xl font-bold mb-4">📋 মূল্য তালিকা</h2>

//           <div className="overflow-x-auto">
//             <table className="w-full border border-gray-300">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="border p-3">ক্রমিক</th>
//                   <th className="border p-3">প্লটের ধরন</th>
//                   <th className="border p-3">ইউনিট</th>
//                   <th className="border p-3">মূল্য (টাকা)</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {priceTable.map((row) => (
//                   <tr key={row.serial} className="text-center">
//                     <td className="border p-3">{row.serial}</td>
//                     <td className="border p-3">{row.type}</td>
//                     <td className="border p-3">{row.unit}</td>
//                     <td className="border p-3">{row.price}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}

//       {/* Notes Section */}
//       {notes && notes.length > 0 && (
//         <div className="max-w-5xl mx-auto bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded px-6 mb-12">
//           <h3 className="text-xl font-bold mb-3">📌 নোট / শর্তাবলী</h3>
//           <ul className="list-disc pl-6 space-y-2 text-lg">
//             {notes.map((item, idx) => (
//               <li key={idx}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Application + Brochure Buttons */}
//       <div className="max-w-5xl mx-auto flex gap-4 justify-center mt-10">
//         <a
//           href="/pdfs/application-form.pdf"
//           target="_blank"
//           className="bg-orange-500 text-white px-6 py-3 rounded font-semibold hover:bg-orange-600"
//         >
//           APPLICATION FORM
//         </a>

//         <a
//           href="/pdfs/brochure.pdf"
//           target="_blank"
//           className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700"
//         >
//           BROCHURE
//         </a>
//       </div>

//       {/* Phase Images */}
//       <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 my-12 px-6">
//         {images?.map((img, i) => (
//           <div key={i}>
//             <Image
//               src={img}
//               width={400}
//               height={300}
//               alt="Project Image"
//               className="rounded shadow"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Map */}
//       <div className="max-w-6xl mx-auto my-12 px-6">
//         <EventMap />
//       </div>

//       {/* Phase Buttons */}
//       <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center mt-6 mb-16">
//         <a
//           href="/projects/prokolpo-1"
//           className="bg-gray-200 px-6 py-3 rounded hover:bg-gray-300"
//         >
//           ফেইজ ১ লেআউট
//         </a>

//         <a
//           href="/projects/prokolpo-2"
//           className="bg-gray-200 px-6 py-3 rounded hover:bg-gray-300"
//         >
//           ফেইজ ২ লেআউট
//         </a>

//         <a
//           href="/projects/prokolpo-3"
//           className="bg-gray-200 px-6 py-3 rounded hover:bg-gray-300"
//         >
//           ফেইজ ৩ লেআউট
//         </a>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import EventMap from "@/components/EventMap";
import { FiCheckCircle } from "react-icons/fi";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";

export default function ProjectDetails({ project }) {
  const { banner, title, description, priceTable, notes, images } = project;

  return (
    <div className="w-full">
      {/* Top Banner Image */}
      <div className="w-full">
        <Image
          src={banner}
          width={1600}
          height={700}
          alt="Project Banner"
          className="w-full max-h-[420px] object-cover"
        />
      </div>

      {/* MAIN WRAPPER */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        {/* Title */}
        <h1 className="text-center text-3xl font-bold my-8">{title}</h1>

        {/* Description */}
        {/* <div className="text-lg leading-relaxed whitespace-pre-line">
          {description}
        </div> */}

        <div className="text-lg leading-relaxed space-y-3">
          {description.map((item, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <FaCheckCircle className="text-primary text-xl mt-1" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Price Table */}
        {priceTable && priceTable.length > 0 && (
          <div className="my-12">
            <h2 className="text-2xl font-bold mb-4">📋 মূল্য তালিকা</h2>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-3">ক্রমিক</th>
                    <th className="border p-3">প্লটের ধরন</th>
                    <th className="border p-3">ইউনিট</th>
                    <th className="border p-3">মূল্য (টাকা)</th>
                  </tr>
                </thead>

                <tbody>
                  {priceTable.map((row) => (
                    <tr key={row.serial} className="text-center">
                      <td className="border p-3">{row.serial}</td>
                      <td className="border p-3">{row.type}</td>
                      <td className="border p-3">{row.unit}</td>
                      <td className="border p-3">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Notes Section */}
        {notes && notes.length > 0 && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded mb-12">
            <h3 className="text-xl font-bold mb-3">📌 নোট / শর্তাবলী</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              {notes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Application + Brochure Buttons */}
        <div className="flex gap-4 justify-center mt-10">
          <a
            href="/pdfs/application-form.pdf"
            target="_blank"
            className="bg-orange-500 text-white px-6 py-3 rounded font-semibold hover:bg-orange-600"
          >
            APPLICATION FORM
          </a>

          <a
            href="/pdfs/brochure.pdf"
            target="_blank"
            className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700"
          >
            BROCHURE
          </a>
        </div>

        {/* Phase Images */}
        <div className="grid md:grid-cols-3 gap-6 my-12">
          {images?.map((img, i) => (
            <div key={i}>
              <Image
                src={img}
                width={1200}
                height={1080}
                alt="Project Image"
                className="rounded w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Map (Wrapper আলাদা কারণ width বড়) */}
      <div className="max-w-6xl mx-auto my-12 px-6">
        <EventMap />
      </div>

      {/* Phase Buttons */}
      <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center mt-6 mb-16 px-6">
        <a
          href="/projects/prokolpo-1"
          className="bg-gray-200 px-6 py-3 rounded hover:bg-gray-300"
        >
          ফেইজ ১ লেআউট
        </a>

        <a
          href="/projects/prokolpo-2"
          className="bg-gray-200 px-6 py-3 rounded hover:bg-gray-300"
        >
          ফেইজ ২ লেআউট
        </a>

        <a
          href="/projects/prokolpo-3"
          className="bg-gray-200 px-6 py-3 rounded hover:bg-gray-300"
        >
          ফেইজ ৩ লেআউট
        </a>
      </div>
    </div>
  );
}
