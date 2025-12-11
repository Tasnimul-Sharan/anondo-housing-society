// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import Button from "./Button";

// export default function ProjectPageSection() {
//   return (
//     <section className="w-full bg-white text-gray-800 py-10 md:py-16 max-w-6xl mx-auto px-6 md:px-0">
//       {/* Top Image */}
//       <div className="w-full mb-10">
//         <Image
//           src="/about.jpg"
//           alt="প্রকল্পের ছবি"
//           width={1600}
//           height={600}
//           className="w-full h-auto rounded-md object-cover"
//         />
//       </div>

//       {/* Title */}
//       <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-">
//         প্রকল্প সম্পর্কিত সাধারণ তথ্যাদি
//       </h2>

//       <div className="space-y-8 text-justify leading-relaxed text-[17px]">
//         {/* Location */}
//         <div>
//           <p className="font-semibold text-lg mb-2">• প্রকল্পের অবস্থান :</p>
//           <p>
//             আনন্দ হাউজিং সোসাইটির প্রকল্প আনন্দ হাউজিং ডেভেলপমেন্ট এর উদ্যোগে
//             পূর্বাচল ৩০০ ফিট মহাসড়কের অতি সন্নিকটে দক্ষিণ পুবাইলের আমসা মৌজায়
//             অবস্থিত। সেখান থেকে মাত্র ২ মিনিটের হাঁটার পথ (মোট ৫০০ থেকে ৬০০
//             মিটার দূরত্ব)। ঢাকা শহরের নিকটতম এই প্রকল্পটি অত্যন্ত দ্রুত
//             উন্নয়নশীল। প্রকল্পের সন্নিকটে রয়েছে আন্তর্জাতিক মানসম্পন্ন আবাসন
//             প্রকল্প, স্কুল, কলেজ, মসজিদ, মার্কেট ও আধুনিক অবকাঠামো।
//           </p>
//         </div>

//         {/* Communication */}
//         <div>
//           <p className="font-semibold text-lg mb-2">• সড়ক যোগাযোগ :</p>
//           <p>
//             কুড়িল বিশ্বরোড থেকে পূর্বাচল ৩০০ ফিট মহাসড়ক ধরে মাত্র ২৫ মিনিটের
//             মধ্যে সহজেই প্রকল্পে পৌঁছানো যায়। পূর্বাচল হাইওয়ের পাশ ঘেঁষে
//             প্রকল্পের প্রবেশ পথ রয়েছে। ঢাকার যেকোনো স্থান থেকে আসা একদমই সহজ ও
//             দ্রুত।
//           </p>
//         </div>

//         {/* Plot Size */}
//         <div>
//           <p className="font-semibold text-lg mb-2">• প্লটের আকার ও সংখ্যা :</p>
//           <p>
//             প্রকল্পে মোট আনুমানিক ১৫০০টি প্লট রয়েছে। প্লটের আকার ৩ কাঠা, ৪ কাঠা,
//             ৫ কাঠা, ৬ কাঠা, ১০ কাঠা ও ২০ কাঠা।
//           </p>
//         </div>

//         {/* Price and Policy */}
//         <div>
//           <p className="font-semibold text-lg mb-2">
//             • প্লটের মূল্য পরিশোধ পদ্ধতি :
//           </p>
//           <p>
//             আনন্দ হাউজিং সোসাইটিতে প্লট ক্রয়ের ক্ষেত্রে গ্রাহকগণকে সহজ ও
//             সুদমুক্ত কিস্তিতে পরিশোধের সুযোগ প্রদান করা হয়। প্লট ক্রয়ের জন্য
//             আবেদন করার সময় নির্দিষ্ট পরিমাণ অগ্রিম জমা দিতে হয়। অবশিষ্ট টাকা
//             মাসিক বা এককালীন পরিশোধ করা যায়। প্রকল্পের মূল্য নির্ধারণ স্বচ্ছভাবে
//             করা হয়।
//           </p>
//         </div>

//         {/* Extra Costs */}
//         <div>
//           <p className="font-semibold text-lg mb-2">
//             • প্লটের মূল্যের সাথে অন্তর্ভুক্ত বিষয় :
//           </p>
//           <p>
//             জমির দাম ছাড়াও রাস্তা নির্মাণ, বিদ্যুৎ সংযোগ, ড্রেনেজ সিস্টেম, পানি
//             সরবরাহ ইত্যাদি অবকাঠামোগত উন্নয়ন কাজের অংশ প্লট মূল্যের সাথে
//             অন্তর্ভুক্ত।
//           </p>
//         </div>

//         {/* Facilities */}
//         <div>
//           <p className="font-semibold text-lg mb-2">
//             • প্রকল্পের সামাজিক ও আবাসিক সুবিধাদি :
//           </p>
//           <p>
//             আনন্দ হাউজিং সোসাইটিতে রয়েছে ৭৫ ফুট প্রশস্ত প্রধান সড়ক, ৫০ ফুট ও ৪০
//             ফুট প্রশস্ত অভ্যন্তরীণ রাস্তা, বিদ্যুৎ সংযোগ, সুপেয় পানি সরবরাহ,
//             ড্রেনেজ সিস্টেম, মসজিদ, মার্কেট, স্কুল, পার্ক, হাসপাতাল, খেলার মাঠ,
//             ওয়াচ টাওয়ারসহ নিরাপত্তা ব্যবস্থা। এছাড়াও রয়েছে কমিউনিটি সেন্টার ও
//             ক্লাব হাউজ।
//           </p>
//         </div>

//         {/* Available Facilities */}
//         <div>
//           <p className="font-semibold text-lg mb-2">
//             • প্রকল্পে যেসব সুবিধা রয়েছে :
//           </p>
//           <ul className="list-decimal list-inside space-y-1 ml-5">
//             <li>প্রাথমিক স্কুল</li>
//             <li>মাধ্যমিক স্কুল</li>
//             <li>কলেজ</li>
//             <li>হাসপাতাল</li>
//             <li>মসজিদ</li>
//             <li>পার্ক</li>
//             <li>খেলার মাঠ</li>
//             <li>কমিউনিটি সেন্টার</li>
//             <li>শপিং মল</li>
//             <li>ওয়াচ টাওয়ার</li>
//             <li>ড্রেনেজ সিস্টেম</li>
//             <li>রাস্তা ও ফুটপাত</li>
//             <li>বিদ্যুৎ ও পানি সরবরাহ লাইন</li>
//             <li>সিকিউরিটি পোস্ট</li>
//             <li>আধুনিক সামাজিক ও নাগরিক সুবিধা</li>
//           </ul>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-wrap justify-center gap-4 mt-10">
//         <Link href="/application-form">
//           <Button className="bg-primary hover:bg-orange-600 text-white px-6 py-3 text-base">
//             APPLICATION FORM
//           </Button>
//         </Link>
//         <Link href="/brochure">
//           <Button className="bg-primary hover:bg-orange-600 text-white px-6 py-3 text-base">
//             BROCHURE
//           </Button>
//         </Link>
//       </div>

//       {/* Bottom Gallery */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
//         <div>
//           <Image
//             src="/images/phase1.jpg"
//             alt="Phase 1"
//             width={600}
//             height={400}
//             className="w-full h-auto rounded-md object-cover"
//           />
//           <p className="text-center mt-2 text-orange-600 font-semibold uppercase">
//             Phase 1
//           </p>
//         </div>
//         <div>
//           <Image
//             src="/images/phase2.jpg"
//             alt="Phase 2"
//             width={600}
//             height={400}
//             className="w-full h-auto rounded-md object-cover"
//           />
//           <p className="text-center mt-2 text-orange-600 font-semibold uppercase">
//             Phase 2
//           </p>
//         </div>
//         <div>
//           <Image
//             src="/images/phase3.jpg"
//             alt="Phase 3"
//             width={600}
//             height={400}
//             className="w-full h-auto rounded-md object-cover"
//           />
//           <p className="text-center mt-2 text-orange-600 font-semibold uppercase">
//             Phase 3
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaCar,
  FaUniversity,
  FaBuilding,
  FaSchool,
  FaHospital,
  FaShoppingBag,
  FaTree,
} from "react-icons/fa";

import { GiMosque, GiSamaraMosque } from "react-icons/gi";
import { RiBuilding2Fill } from "react-icons/ri";

export default function PremiumProjectSection() {
  return (
    <section className="w-full bg-gradient-to-b from-orange-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            প্রকল্প সম্পর্কিত সাধারণ তথ্যাদি
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            পূর্বাচলের সেরা প্রিমিয়াম লোকেশনে আধুনিক আবাসন প্রকল্প
          </p>
        </div>

        {/* Highlight Card */}
        <div className="bg-white rounded-3xl p-10 mb-16 border border-orange-100">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <FaMapMarkerAlt className="text-primary" /> প্রকল্পের অবস্থান
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            আনন্দ হাউজিং সোসাইটি প্রকল্পটি পূর্বাচল নতুন শহরের দক্ষিণ–পূর্ব কোণে
            অবস্থিত ৩ নম্বর সেক্টরের লাগোয়া। দক্ষিণ–পূর্ব পাশে রয়েছে জলসিড়ি
            আবাসন প্রকল্প। ৩০০ ফুট সড়ক থেকে মাত্র ৫০০ মিটার দূরত্বে এবং
            এয়ারপোর্ট রোড থেকে ১২ কিলোমিটার দূরত্বে অবস্থিত এই দ্রুত উন্নয়নশীল
            লোকেশনটি বিনিয়োগ ও বসবাস—দুই ক্ষেত্রেই অনন্য।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl p-8 border border-orange-100">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4 text-gray-900">
              <FaCar className="text-primary" /> সড়ক যোগাযোগ
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              এয়ারপোর্ট রোড, কুর্মিটোলা–কুড়িল ফ্লাইওভার, মাদানী অ্যাভিনিউ এবং
              জলসিড়ি আবাসন হয়ে মাত্র ১২ মিনিটে প্রকল্পে পৌঁছানো যায়। পূর্বাচলের
              সবচেয়ে সহজ ও দ্রুতগামী রোড কানেকটিভিটির সুবিধা রয়েছে।
            </p>
          </div>

          {/* Eligibility */}
          <div className="bg-white rounded-3xl p-8 border border-orange-100">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4 text-gray-900">
              <FaUniversity className="text-primary" /> প্লট প্রাপ্তির যোগ্যতা
            </h3>
            <ul className="text-gray-700 space-y-2 text-lg">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-primary mt-1" /> পুলিশ সদস্য
                (কর্মরত/অবসরপ্রাপ্ত) ও পরিবার
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-primary mt-1" /> বি.সি.এস ক্যাডার
                কর্মকর্তা
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-primary mt-1" /> সরকারি/বেসরকারি
                কর্মকর্তা
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-primary mt-1" /> সমাজের
                স্বনামধন্য ব্যক্তিবর্গ
              </li>
            </ul>
          </div>
        </div>

        {/* Plot Sizes */}
        <div className="bg-white rounded-3xl p-10 mt-12 border border-orange-100">
          <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6 text-gray-900">
            <FaBuilding className="text-primary" /> প্লটের আয়তন
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            প্রকল্পের মোট আয়তন:{" "}
            <span className="font-bold text-gray-900">১২০০ বিঘা</span>
          </p>
          <div className="flex flex-wrap gap-3 text-lg">
            {["৩ কাঠা", "৪ কাঠা", "৫ কাঠা", "৬ কাঠা", "১০ কাঠা", "২০ কাঠা"].map(
              (size) => (
                <span
                  key={size}
                  className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-base font-medium"
                >
                  {size}
                </span>
              )
            )}
          </div>
        </div>

        {/* Payment */}
        <div className="bg-white rounded-3xl p-10 mt-12 border border-orange-100">
          <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6 text-gray-900">
            <FaCheckCircle className="text-primary" /> প্লটের মূল্য পরিশোধ
            পদ্ধতি
          </h3>
          <ul className="text-gray-700 space-y-3 text-lg">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-primary mt-1" /> আবেদন করতে প্রতি
              প্লটের বিপরীতে ১ লক্ষ টাকা জমা
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-primary mt-1" /> আবেদন গৃহীত হলে ১৫
              দিনের মধ্যে ২৫% ডাউনপেমেন্ট
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-primary mt-1" /> আবেদন নাকচ হলে
              তাৎক্ষণিক অর্থ ফেরত
            </li>
          </ul>
        </div>

        {/* Facilities Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">
            প্রকল্পে যেসব সুবিধা থাকছে
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: FaSchool, text: "প্রাথমিক ও উচ্চ বিদ্যালয়" },
              { icon: FaHospital, text: "হাসপাতাল" },
              { icon: GiSamaraMosque, text: "মসজিদ" },
              { icon: FaTree, text: "পার্ক ও লেক" },
              { icon: FaShoppingBag, text: "শপিং মল" },
              { icon: RiBuilding2Fill, text: "কমিউনিটি সেন্টার" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="p-6 bg-white rounded-2xl hover:shadow-md transition border border-orange-100 flex flex-col items-center text-center"
              >
                <Icon className="text-primary w-10 h-10 mb-3" />
                <p className="text-gray-800 font-medium text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
