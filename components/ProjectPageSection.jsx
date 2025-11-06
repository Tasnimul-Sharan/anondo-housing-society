"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function ProjectPageSection() {
  return (
    <section className="w-full bg-white text-gray-800 py-10 md:py-16 px-4 md:px-12 lg:px-24">
      {/* Top Image */}
      <div className="w-full mb-10">
        <Image
          src="/images/project-top.jpg"
          alt="প্রকল্পের ছবি"
          width={1600}
          height={600}
          className="w-full h-auto rounded-md object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-gray-800">
        প্রকল্প সম্পর্কিত সাধারণ তথ্যাদি
      </h2>

      <div className="space-y-8 text-justify leading-relaxed text-[17px]">
        {/* Location */}
        <div>
          <p className="font-semibold text-lg mb-2">• প্রকল্পের অবস্থান :</p>
          <p>
            আনন্দ হাউজিং সোসাইটির প্রকল্প আনন্দ হাউজিং ডেভেলপমেন্ট এর উদ্যোগে
            পূর্বাচল ৩০০ ফিট মহাসড়কের অতি সন্নিকটে দক্ষিণ পুবাইলের আমসা মৌজায়
            অবস্থিত। সেখান থেকে মাত্র ২ মিনিটের হাঁটার পথ (মোট ৫০০ থেকে ৬০০
            মিটার দূরত্ব)। ঢাকা শহরের নিকটতম এই প্রকল্পটি অত্যন্ত দ্রুত
            উন্নয়নশীল। প্রকল্পের সন্নিকটে রয়েছে আন্তর্জাতিক মানসম্পন্ন আবাসন
            প্রকল্প, স্কুল, কলেজ, মসজিদ, মার্কেট ও আধুনিক অবকাঠামো।
          </p>
        </div>

        {/* Communication */}
        <div>
          <p className="font-semibold text-lg mb-2">• সড়ক যোগাযোগ :</p>
          <p>
            কুড়িল বিশ্বরোড থেকে পূর্বাচল ৩০০ ফিট মহাসড়ক ধরে মাত্র ২৫ মিনিটের
            মধ্যে সহজেই প্রকল্পে পৌঁছানো যায়। পূর্বাচল হাইওয়ের পাশ ঘেঁষে
            প্রকল্পের প্রবেশ পথ রয়েছে। ঢাকার যেকোনো স্থান থেকে আসা একদমই সহজ ও
            দ্রুত।
          </p>
        </div>

        {/* Plot Size */}
        <div>
          <p className="font-semibold text-lg mb-2">• প্লটের আকার ও সংখ্যা :</p>
          <p>
            প্রকল্পে মোট আনুমানিক ১৫০০টি প্লট রয়েছে। প্লটের আকার ৩ কাঠা, ৪ কাঠা,
            ৫ কাঠা, ৬ কাঠা, ১০ কাঠা ও ২০ কাঠা।
          </p>
        </div>

        {/* Price and Policy */}
        <div>
          <p className="font-semibold text-lg mb-2">
            • প্লটের মূল্য পরিশোধ পদ্ধতি :
          </p>
          <p>
            আনন্দ হাউজিং সোসাইটিতে প্লট ক্রয়ের ক্ষেত্রে গ্রাহকগণকে সহজ ও
            সুদমুক্ত কিস্তিতে পরিশোধের সুযোগ প্রদান করা হয়। প্লট ক্রয়ের জন্য
            আবেদন করার সময় নির্দিষ্ট পরিমাণ অগ্রিম জমা দিতে হয়। অবশিষ্ট টাকা
            মাসিক বা এককালীন পরিশোধ করা যায়। প্রকল্পের মূল্য নির্ধারণ স্বচ্ছভাবে
            করা হয়।
          </p>
        </div>

        {/* Extra Costs */}
        <div>
          <p className="font-semibold text-lg mb-2">
            • প্লটের মূল্যের সাথে অন্তর্ভুক্ত বিষয় :
          </p>
          <p>
            জমির দাম ছাড়াও রাস্তা নির্মাণ, বিদ্যুৎ সংযোগ, ড্রেনেজ সিস্টেম, পানি
            সরবরাহ ইত্যাদি অবকাঠামোগত উন্নয়ন কাজের অংশ প্লট মূল্যের সাথে
            অন্তর্ভুক্ত।
          </p>
        </div>

        {/* Facilities */}
        <div>
          <p className="font-semibold text-lg mb-2">
            • প্রকল্পের সামাজিক ও আবাসিক সুবিধাদি :
          </p>
          <p>
            আনন্দ হাউজিং সোসাইটিতে রয়েছে ৭৫ ফুট প্রশস্ত প্রধান সড়ক, ৫০ ফুট ও ৪০
            ফুট প্রশস্ত অভ্যন্তরীণ রাস্তা, বিদ্যুৎ সংযোগ, সুপেয় পানি সরবরাহ,
            ড্রেনেজ সিস্টেম, মসজিদ, মার্কেট, স্কুল, পার্ক, হাসপাতাল, খেলার মাঠ,
            ওয়াচ টাওয়ারসহ নিরাপত্তা ব্যবস্থা। এছাড়াও রয়েছে কমিউনিটি সেন্টার ও
            ক্লাব হাউজ।
          </p>
        </div>

        {/* Available Facilities */}
        <div>
          <p className="font-semibold text-lg mb-2">
            • প্রকল্পে যেসব সুবিধা রয়েছে :
          </p>
          <ul className="list-decimal list-inside space-y-1 ml-5">
            <li>প্রাথমিক স্কুল</li>
            <li>মাধ্যমিক স্কুল</li>
            <li>কলেজ</li>
            <li>হাসপাতাল</li>
            <li>মসজিদ</li>
            <li>পার্ক</li>
            <li>খেলার মাঠ</li>
            <li>কমিউনিটি সেন্টার</li>
            <li>শপিং মল</li>
            <li>ওয়াচ টাওয়ার</li>
            <li>ড্রেনেজ সিস্টেম</li>
            <li>রাস্তা ও ফুটপাত</li>
            <li>বিদ্যুৎ ও পানি সরবরাহ লাইন</li>
            <li>সিকিউরিটি পোস্ট</li>
            <li>আধুনিক সামাজিক ও নাগরিক সুবিধা</li>
          </ul>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <Link href="/application-form">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-base">
            APPLICATION FORM
          </Button>
        </Link>
        <Link href="/brochure">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-base">
            BROCHURE
          </Button>
        </Link>
      </div>

      {/* Bottom Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div>
          <Image
            src="/images/phase1.jpg"
            alt="Phase 1"
            width={600}
            height={400}
            className="w-full h-auto rounded-md object-cover"
          />
          <p className="text-center mt-2 text-orange-600 font-semibold uppercase">
            Phase 1
          </p>
        </div>
        <div>
          <Image
            src="/images/phase2.jpg"
            alt="Phase 2"
            width={600}
            height={400}
            className="w-full h-auto rounded-md object-cover"
          />
          <p className="text-center mt-2 text-orange-600 font-semibold uppercase">
            Phase 2
          </p>
        </div>
        <div>
          <Image
            src="/images/phase3.jpg"
            alt="Phase 3"
            width={600}
            height={400}
            className="w-full h-auto rounded-md object-cover"
          />
          <p className="text-center mt-2 text-orange-600 font-semibold uppercase">
            Phase 3
          </p>
        </div>
      </div>
    </section>
  );
}
