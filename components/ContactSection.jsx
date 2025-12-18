// import { useState } from "react";

// export default function ContactSection() {
//   const [result, setResult] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     // Web3Forms Access Key
//     formData.append("access_key", "999c880a-c5fa-4ec5-bdf3-7fdbe0583aa6");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const res = await response.json();
//     setResult(res.success ? "বার্তাটি পাঠানো হয়েছে!" : "কোনো সমস্যা হয়েছে!");
//   };

//   return (
//     <section className="py-16 bg-gray-100 text-center">
//       <h2 className="text-3xl font-bold mb-4 text-gray-800">{data.title}</h2>
//       <p className="mb-8 text-gray-600">{data.subtitle}</p>

//       <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="নাম"
//           className="w-full p-3 border rounded"
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="ইমেইল"
//           className="w-full p-3 border rounded"
//           required
//         />

//         <textarea
//           name="message"
//           placeholder="বার্তা"
//           className="w-full p-3 border rounded h-32"
//           required
//         ></textarea>

//         <button className="bg-orange-500 text-white px-6 py-3 rounded">
//           পাঠান
//         </button>

//         {result && (
//           <div
//             className={`mt-4 p-4 rounded-lg text-left animate-fade-in
//       ${
//         result === "বার্তাটি পাঠানো হয়েছে!"
//           ? "bg-green-100 text-green-800 border border-green-300"
//           : "bg-red-100 text-red-800 border border-red-300"
//       }`}
//           >
//             <p className="font-semibold flex items-center gap-2">
//               {result === "বার্তাটি পাঠানো হয়েছে!" ? (
//                 <span>✅</span>
//               ) : (
//                 <span>⚠️</span>
//               )}
//               {result}
//             </p>
//           </div>
//         )}
//       </form>
//     </section>
//   );
// }
import { useState } from "react";

export default function ContactSection() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "999c880a-c5fa-4ec5-bdf3-7fdbe0583aa6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const res = await response.json();
    setResult(res.success ? "বার্তাটি পাঠানো হয়েছে!" : "কোনো সমস্যা হয়েছে!");
    event.target.reset();
  };

  return (
    <>
      {/* ===== Heading Section ===== */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-800">যোগাযোগ করুন</h2>
        <div className="w-20 h-[3px] bg-primary mt-4 mb-4 mx-auto"></div>
        <p className="mt-2 text-gray-600">আমাদের সাথে যোগাযোগ করুন</p>
      </section>

      {/* ===== Form Section ===== */}
      <section className="py-20 bg-[#f7f7f7]">
        <form onSubmit={onSubmit} className="max-w-4xl mx-auto px-4 space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              className="w-full bg-[#e9e9e9] p-4 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              className="w-full bg-[#e9e9e9] p-4 outline-none"
              required
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject *"
            className="w-full bg-[#e9e9e9] p-4 outline-none"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            className="w-full bg-[#e9e9e9] p-4 h-40 resize-none outline-none"
            required
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 transition"
          >
            SEND MESSAGE
          </button>

          {/* Result */}
          {result && (
            <p
              className={`mt-4 font-medium ${
                result.includes("পাঠানো") ? "text-green-600" : "text-red-600"
              }`}
            >
              {result}
            </p>
          )}
        </form>
      </section>
    </>
  );
}
