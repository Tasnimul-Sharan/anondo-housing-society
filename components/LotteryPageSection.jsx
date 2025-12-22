export default function LotteryPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 leading-relaxed">
      {/* =======================
          লটারী অনুষ্ঠানের পদ্ধতি
      ========================== */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        লটারী অনুষ্ঠানের পদ্ধতি
      </h1>

      <p className="mb-4">
        ১. লে-আউট প্ল্যান প্রণয়নের সুবিধার্থে ২য় পর্যায়ের সমস্ত জমি প্লটের আয়তন
        অনুযায়ী কয়েকটি জোনে ভাগ করা হয়েছে। অর্থাৎ ৫ কাঠার সমস্ত প্লট একটি জোনে,
        ৪ কাঠার জন্য একটি জোন, এভাবে ৩ কাঠার জন্য পৃথক পৃথক জোন নির্ধারণ করা
        হয়েছে।
      </p>

      <p className="mb-4">
        ২. জমির সর্বোত্তম ব্যবহার নিশ্চিত করার স্বার্থে ৫ কাঠার সেক্টরে কয়েকটি
        ৪ ও ৩ কাঠার প্লট রয়েছে।
      </p>

      <p className="mb-6">
        ৩. সমিতির ঘোষিত নীতিমালা অনুসারে যাদের একাধিক প্লট রয়েছে তাঁরা তাঁদের
        প্লট সমূহ একত্রে নিতে পারবেন। এছাড়া বন্ধু/আত্মীয়বর্গ তাদের প্লট সমূহ
        একত্রে নিতে পারবেন। যারা ইতোমধ্যে প্লট সমূহ একত্রে নেওয়ার জন্য আবেদন
        করেছেন কেবল মাত্র তাঁদের প্লটই এভাবে বরাদ্দ দেওয়া হবে। নির্ধারিত সময়
        সীমার পর আবেদনকৃত অনুরোধ বিবেচনা করা সম্ভব হবে না।
      </p>

      {/* =======================
             লটারী অনুষ্ঠানের নিয়ম
      ========================== */}
      <h2 className="text-2xl font-bold mb-4">লটারী অনুষ্ঠানের নিয়মঃ</h2>

      <p className="mb-4">
        ১. প্রথমে ৫ কাঠার জন্য লটারী হবে। এরপর ৪ কাঠা, ৩ কাঠার লটারী হবে।
      </p>

      <p className="mb-4">
        ২. (লটারী অনুষ্ঠান কালে) যাদের প্লট সংখ্যা সবচেয়ে বেশী তাঁদের ড্র প্রথমে
        অনুষ্টিত হবে। প্লটের সর্বোচ্চ সংখ্যা থেকে সর্ব নিম্ন ক্রমানুসারে ড্র
        হবে। যেমন কোন সদস্যের যদি ৮টি প্লট থাকে এবং সেটাই সর্বোচ্চ হয় তবে তাঁর
        ড্র আগে হবে। এরপর ৭টি প্লটের মালিকদের ড্র হবে। এরপর ৬টি প্লটের মালিকদের
        ড্র হবে। এভাবে ক্রমান্বয়ে চলতে থাকবে।
      </p>

      <p className="mb-4">
        ৩. একাধিক প্লটের মালিকের ক্ষেত্রে (একসাথে প্লট নেওয়ার ক্ষেত্রে) লটারীতে
        প্রথমে যে প্লটটি তাঁর নামের বিপরীতে উঠবে সেটি তাঁর হবে। তাঁর ২য় প্লটটি
        হবে সরাসরি পিছনের প্লট। ৩য় প্লটটি হবে তাঁর ১ম প্লটের ডানের প্লট (খালি
        থাকা সাপেক্ষে), ডানপাশ খালি না থাকলে বামের প্লটটি হবে। ৪র্থ প্লটটি হবে
        ৩য় প্লটের সরাসরি পিছনের দিকে। একইভাবে ৫ম, ৬ষ্ঠ বা যে কোন সংখ্যক প্লটের
        অবস্থান নির্ধারিত হবে।
      </p>

      <p className="mb-4">
        ৪. যদি কোন সদস্যের ক্ষেত্রে উক্তরূপে বরাদ্দ সম্ভব না হয় তবে পূনরায় লটারী
        করা হবে। যতক্ষণ পর্যন্ত বরাদ্দ সম্ভব না হয় ততক্ষণ পর্যন্ত লটারী করা হবে।
      </p>

      <p className="mb-4">
        ৫. এক আয়তনের সমস্ত প্লটের জন্য শুরু থেকে শেষ পর্যন্ত একটি নির্দিষ্ট
        ক্রমিক সংখ্যা দেওয়া থাকবে। উদাহরণ স্বরূপ— ৫ কাঠা আয়তনের মোট প্লট সংখ্যা
        ৫৬ টি হলে এই ৫৬ টি প্লটের জন্য ১ থেকে ৫৬ পর্যন্ত ক্রমিক দেওয়া থাকবে। একই
        ভাবে ৪ কাঠা ও ৩ কাঠার জন্যও নিজস্ব ক্রমিক নির্ধারিত থাকবে।
      </p>

      <p className="mb-4">
        ৬. প্রতিটি প্লট সাইজের মালিকানা (১টি, ২টি, ৩টি বা ৪টি ইত্যাদি) অনুযায়ী
        পৃথক গ্রুপ করা হবে। যেমন ৫ কাঠার লটারীতে সর্বোচ্চ সংখ্যক প্লট (যেমন
        ১০টি) যাদের আছে তাঁদের জন্য একটি গ্রুপ করা হবে। সেই গ্রুপের জন্য আলাদা
        ক্রমিক নিয়ে ড্র হবে। এরপর ৯ প্লটের মালিকদের গ্রুপের লটারী হবে— এভাবে
        প্রতিটি গ্রুপের জন্য পৃথক লটারী হবে।
      </p>

      <p className="mb-6">
        বন্ধু বা আত্মীয়রা একত্রে প্লট নিতে চাইলে তাঁদের একজন মালিক ধরে একই
        গ্রুপে লটারী হবে।
      </p>

      <p className="mb-6">
        ৭. একজন সদস্যের দুইটি ভিন্ন আয়তনের প্লট থাকলে তাঁর প্লট দুইটি একত্রে
        দেওয়া সম্ভব নয়।
      </p>

      <p className="mb-8">
        ৮. লটারীর স্থলে একটি বড় লে-আউট প্ল্যান থাকবে। ড্র এর সাথে সাথে ফলাফল ঐ
        লে-আউট প্লটে রেকর্ড করা হবে। লটারী শেষে সকল প্লট মালিকদের লিখিত ফলাফল
        প্রদান করা হবে।
      </p>

      {/* =======================
                লটারী ক্রম
      ========================== */}
      <h2 className="text-2xl font-bold mb-4 text-center">লটারী ক্রম</h2>

      <p className="mb-6">
        প্রথমে ৫ কাঠার প্লট মালিকদের প্লট সংখ্যার উপর ভিত্তি করে বিভিন্ন গ্রুপে
        ভাগ করা হবে। প্রত্যেক গ্রুপের জন্য আলাদা ড্র হবে। ড্র এর ক্রম নিম্নরূপ —
      </p>

      {/* Group Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border rounded-xl p-4 shadow">
          <h3 className="font-semibold text-lg mb-2">১ম গ্রুপ</h3>
          <p className="text-sm mb-1">১ম সর্বোচ্চ সংখ্যক প্লট মালিকদের লটারী</p>
          <p className="text-sm mb-1">মালিকদের নিজস্ব ক্রমিক নির্ধারণ</p>
          <p className="text-sm">মালিকদের জন্য লটারী</p>
        </div>

        <div className="border rounded-xl p-4 shadow">
          <h3 className="font-semibold text-lg mb-2">২য় গ্রুপ</h3>
          <p className="text-sm mb-1">সর্বোচ্চ সংখ্যক প্লট মালিকদের লটারী</p>
          <p className="text-sm mb-1">নিজস্ব ক্রমিক নির্ধারণ</p>
          <p className="text-sm">মালিকদের জন্য লটারী</p>
        </div>

        <div className="border rounded-xl p-4 shadow">
          <h3 className="font-semibold text-lg mb-2">৩য় গ্রুপ</h3>
          <p className="text-sm mb-1">সর্বোচ্চ সংখ্যক প্লট মালিকদের লটারী</p>
          <p className="text-sm mb-1">নিজস্ব ক্রমিক নির্ধারণ</p>
          <p className="text-sm">মালিকদের জন্য লটারী</p>
        </div>
      </div>

      <p className="mb-8">
        এভাবে ৪ কাঠার জন্য ৩টি, ৪টি বা যতটি প্রয়োজন ততটি গ্রুপ তৈরি করে লটারী
        অনুষ্ঠিত হবে। ৫ কাঠার পর ৪ কাঠা এবং তারপর ৩ কাঠার লটারী করা হবে।
      </p>

      {/* =======================
             লটারী অনুষ্ঠান
      ========================== */}
      <h2 className="text-2xl font-bold mb-6 text-center">লটারী অনুষ্ঠান</h2>

      <div className="mb-6">
        <p>
          কোন একটি গ্রুপের মালিকদের সিরিয়াল লেখা কুপন — <b>১ম পাত্র</b>
        </p>
        <p>
          প্লটের ক্রমিক লেখা কুপন — <b>২য় পাত্র</b>
        </p>
      </div>

      <ul className="list-disc pl-6 space-y-2 text-sm">
        <li>১. প্রথমে ১ম পাত্র থেকে কুপন তোলা হবে।</li>

        <li>
          ২. এরপর ২য় পাত্র থেকে কুপন তোলা হবে — ২য় কুপনে লেখা প্লট নম্বরটাই হবে
          তাঁর প্লট।
        </li>

        <li>
          ৩. একাধিক প্লট মালিক যারা একত্রে প্লট নিতে চান, তাঁদের ক্ষেত্রে ২য়
          পাত্র থেকে উঠা প্লটের পিছনের প্লটটি হবে ২য় প্লট। ৩য় প্লটটি হবে ডানের
          প্লট (না থাকলে বামের)। ৪র্থ প্লট হবে ৩য় প্লটের পিছনের প্লট। ৫ম প্লট
          হবে ৩য় প্লটের ডানে বা বামে। ৬ষ্ঠ প্লট হবে ৫ম প্লটের পিছনে।
        </li>
      </ul>
    </div>
  );
}

// export default function LotteryPage() {
//   return (
//     <div className="max-w-5xl mx-auto p-6 text-gray-800 leading-relaxed">
//       {/* =============== HEADER =============== */}
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide mb-3">
//           লটারী অনুষ্ঠানের পদ্ধতি
//         </h1>
//         <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full" />
//       </div>

//       {/* =============== SECTION 01 =============== */}
//       <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 mb-10">
//         <p className="mb-4">
//           ১. লে-আউট প্ল্যান প্রণয়নের সুবিধার্থে ২য় পর্যায়ের সমস্ত জমি প্লটের
//           আয়তন অনুযায়ী কয়েকটি জোনে ভাগ করা হয়েছে।
//         </p>

//         <p className="mb-4">
//           ২. জমির সর্বোত্তম ব্যবহার নিশ্চিত করার স্বার্থে ৫ কাঠার সেক্টরে
//           কয়েকটি ৪ ও ৩ কাঠার প্লট রয়েছে।
//         </p>

//         <p className="mb-0">
//           ৩. সমিতির ঘোষিত নীতিমালা অনুযায়ী যাদের একাধিক প্লট রয়েছে তাঁরা তাঁদের
//           প্লট সমূহ একত্রে নিতে পারবেন। তবে নির্ধারিত সময়ের পর আবেদন গ্রহণযোগ্য
//           নয়।
//         </p>
//       </div>

//       {/* Divider */}
//       <div className="my-10">
//         <div className="w-full h-[1px] bg-gray-300"></div>
//       </div>

//       {/* =============== RULES SECTION =============== */}
//       <h2 className="text-3xl font-bold mb-6">লটারী অনুষ্ঠানের নিয়মঃ</h2>

//       <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 mb-10 space-y-4">
//         <p>১. প্রথমে ৫ কাঠার লটারী হবে। তারপর ৪ কাঠা ও ৩ কাঠা।</p>
//         <p>২. যাদের প্লট সংখ্যা সবচেয়ে বেশী তাঁদের ড্র আগে অনুষ্ঠিত হবে।</p>
//         <p>
//           ৩. একাধিক প্লট মালিকের ক্ষেত্রে ১ম প্লট লটারী থেকে, বাকিগুলো
//           সাইড/পিছনের নিয়মে নির্ধারণ।
//         </p>
//         <p>৪. অসম্ভব হলে পুনরায় ড্র অনুষ্ঠিত হবে।</p>
//         <p>৫. প্রতিটি আয়তনের জন্য আলাদা ক্রমিক থাকবে।</p>
//         <p>
//           ৬. সর্বোচ্চ প্লট মালিকদের জন্য পৃথক গ্রুপ করা হবে এবং প্রতিটি গ্রুপের
//           ড্র আলাদা হবে।
//         </p>
//         <p>৭. ভিন্ন আয়তনের প্লট একত্রে দেওয়া যাবে না।</p>
//         <p className="mb-0">
//           ৮. লটারী শেষে লে-আউট প্ল্যানে আপডেট করা হবে এবং সকলকে লিখিত ফলাফল
//           দেওয়া হবে।
//         </p>
//       </div>

//       {/* =============== GROUP CARDS SECTION =============== */}
//       <h2 className="text-3xl font-bold mb-4 text-center">লটারী ক্রম</h2>

//       <p className="text-center text-gray-700 mb-8">
//         প্লট সংখ্যার ভিত্তিতে গ্রুপ তৈরি করা হবে এবং প্রতিটি গ্রুপের ড্র
//         আলাদাভাবে অনুষ্ঠিত হবে।
//       </p>

//       <div className="grid md:grid-cols-3 gap-6 mb-10">
//         {[1, 2, 3].map((num) => (
//           <div
//             key={num}
//             className="bg-white border border-gray-200 rounded-xl p-5 shadow hover:shadow-lg transition"
//           >
//             <h3 className="text-xl font-semibold mb-2">{num}ম গ্রুপ</h3>
//             <p className="text-sm mb-1">সর্বোচ্চ সংখ্যক প্লট মালিকদের লটারী</p>
//             <p className="text-sm mb-1">নিজস্ব ক্রমিক নির্ধারণ</p>
//             <p className="text-sm">মালিকদের জন্য লটারী</p>
//           </div>
//         ))}
//       </div>

//       <p className="mb-10">
//         এভাবে ৪ কাঠা ও ৩ কাঠার জন্য প্রয়োজন অনুযায়ী আলাদা গ্রুপ তৈরি করে ড্র
//         অনুষ্ঠিত হবে।
//       </p>

//       {/* Divider */}
//       <div className="my-10">
//         <div className="w-full h-[1px] bg-gray-300"></div>
//       </div>

//       {/* =============== FINAL LOTTERY PROCESS =============== */}
//       <h2 className="text-3xl font-bold mb-6 text-center">লটারী অনুষ্ঠান</h2>

//       <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-md shadow-sm mb-6">
//         <p>
//           মালিকদের সিরিয়াল লেখা কুপন — <b>১ম পাত্র</b>
//         </p>
//         <p>
//           প্লটের ক্রমিক লেখা কুপন — <b>২য় পাত্র</b>
//         </p>
//       </div>

//       <ul className="list-disc pl-6 space-y-3 text-gray-800">
//         <li>১. প্রথমে ১ম পাত্র থেকে কুপন তোলা হবে।</li>

//         <li>
//           ২. এরপর ২য় পাত্র থেকে কুপন তোলা হবে — এই কুপনেই নির্ধারিত হবে তাঁর
//           প্লট।
//         </li>

//         <li>
//           ৩. একাধিক প্লট মালিক হলে — পিছনের প্লট, ডান/বাম প্লটের নিয়মে বাকি প্লট
//           নির্ধারণ করা হবে।
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default function LotteryPage() {
//   return (
//     <div className="p-6 text-gray-800 bg-orange-50">

//       {/* HEADER */}
//       <header className="text-center mb-14">
//         <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide">
//           লটারী প্রক্রিয়া ও নির্দেশাবলী
//         </h1>
//         <p className="text-gray-500 mt-2">
//           জমির সুষ্ঠু ব্যবহার ও ন্যায্য বণ্টন নিশ্চিতে আধুনিক লটারী সিস্টেম
//         </p>
//         <div className="w-20 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
//       </header>

//       {/* SECTION WRAPPER */}
//       <section className="space-y-12">

//         {/* BLOCK 1 */}
//         <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
//           <h2 className="text-2xl font-bold mb-4 text-indigo-700">
//             প্রাথমিক নির্দেশনা
//           </h2>

//           <div className="space-y-4 text-gray-700 leading-relaxed">
//             <p>
//               ১. ২য় পর্যায়ের প্লটগুলো আয়তন অনুযায়ী বিভিন্ন জোনে বিভক্ত করা হয়েছে
//               যাতে লে-আউট যথাযথভাবে প্রস্তুত করা যায়।
//             </p>
//             <p>
//               ২. জমির সর্বোচ্চ ব্যবহার নিশ্চিত করতে ৫ কাঠার সেক্টরে কিছু ৪ ও ৩
//               কাঠার প্লট সংযুক্ত রয়েছে।
//             </p>
//             <p>
//               ৩. একাধিক প্লট মালিকেরা নিয়ম অনুযায়ী তাদের প্লট একসাথে নিতে
//               পারবেন — তবে নির্ধারিত সময়ের পর আবেদন গ্রহণযোগ্য নয়।
//             </p>
//           </div>
//         </div>

//         {/* BLOCK 2 - RULES */}
//         <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-sm">
//           <h2 className="text-2xl font-bold mb-6 text-indigo-700">
//             লটারী অনুষ্ঠানের নিয়মাবলী
//           </h2>

//           {/* TIMELINE STYLE */}
//           <div className="space-y-8 border-l-2 border-indigo-300 pl-6">

//             {[
//               "প্রথমে ৫ কাঠা, তারপর ৪ ও ৩ কাঠার প্লটের লটারী অনুষ্ঠিত হবে।",
//               "যাদের প্লট সংখ্যা সবচেয়ে বেশি, তাঁদের ড্র প্রথমে অনুষ্ঠিত হবে।",
//               "একাধিক প্লট মালিকের ক্ষেত্রে — প্রথম প্লট লটারী থেকে, বাকিগুলো সাইড/পিছনের নিয়মে নির্ধারণ করা হবে।",
//               "সমন্বয় সম্ভব না হলে পুনরায় ড্র করা হবে।",
//               "প্রতিটি আয়তনের জন্য আলাদা ক্রমিক থাকবে।",
//               "বেশি প্লট মালিকদের পৃথক গ্রুপ করা হবে এবং প্রতিটি গ্রুপের ড্র আলাদা হবে।",
//               "ভিন্ন আয়তনের প্লট একত্রে নেওয়া যাবে না।",
//               "লটারী শেষে হালনাগাদ লে-আউট প্ল্যান প্রদান করা হবে।",
//             ].map((rule, index) => (
//               <div key={index} className="relative">
//                 <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow"></div>
//                 <p className="text-gray-700">{rule}</p>
//               </div>
//             ))}

//           </div>
//         </div>

//         {/* BLOCK 3 - GROUP CARDS */}
//         <div>
//           <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
//             লটারী গ্রুপিং
//           </h2>

//           <div className="grid md:grid-cols-3 gap-6">
//             {[1, 2, 3].map((num) => (
//               <div
//                 key={num}
//                 className="bg-white shadow-lg border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition"
//               >
//                 <div className="text-5xl font-black text-indigo-500 mb-3">
//                   {num}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{num}ম গ্রুপ</h3>
//                 <p className="text-gray-600 text-sm">
//                   সর্বোচ্চ সংখ্যক প্লট মালিকের লটারী এই গ্রুপে অনুষ্ঠিত হবে।
//                 </p>
//               </div>
//             ))}
//           </div>

//           <p className="text-center text-gray-600 mt-6">
//             এভাবেই ৪ ও ৩ কাঠার জন্যও প্রয়োজনমতো গ্রুপ তৈরি করে ড্র করা হবে।
//           </p>
//         </div>

//         {/* BLOCK 4 - PROCESS BOX */}
//         <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-200 shadow-sm">
//           <h2 className="text-2xl font-bold mb-4 text-indigo-700">
//             লটারী পরিচালনা পদ্ধতি
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6 font-medium text-gray-700">
//             <div className="bg-white rounded-xl p-5 border shadow">
//               <h4 className="font-bold text-indigo-600 mb-2">১ম পাত্র</h4>
//               <p className="text-sm">মালিকদের সিরিয়াল লেখা কুপন</p>
//             </div>

//             <div className="bg-white rounded-xl p-5 border shadow">
//               <h4 className="font-bold text-indigo-600 mb-2">২য় পাত্র</h4>
//               <p className="text-sm">প্লটের ক্রমিক লেখা কুপন</p>
//             </div>
//           </div>

//           <ul className="list-disc pl-6 mt-6 space-y-2 text-gray-800">
//             <li>১. প্রথমে ১ম পাত্র থেকে কুপন তোলা হবে।</li>
//             <li>২. এরপর ২য় পাত্র থেকে কুপন তোলা হবে।</li>
//             <li>
//               ৩. একাধিক প্লট মালিকের ক্ষেত্রে — বাকি প্লট সাইড/পিছনের নিয়মে
//               নির্ধারণ করা হবে।
//             </li>
//           </ul>
//         </div>

//       </section>
//     </div>
//   );
// }
