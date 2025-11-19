"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGES GRID */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Image
              src="/images/about1.jpg"
              alt="about"
              width={600}
              height={400}
              className="rounded-md w-full h-auto object-cover"
            />
          </div>

          <div>
            <Image
              src="/images/about2.jpg"
              alt="about"
              width={300}
              height={300}
              className="rounded-md w-full h-auto object-cover"
            />
          </div>

          <div>
            <Image
              src="/images/about3.jpg"
              alt="about"
              width={300}
              height={300}
              className="rounded-md w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center md:text-left">
            আনন্দ হাউজিং সোসাইটি
          </h2>

          <div className="w-20 h-[3px] bg-amber-500 mt-4 mb-8 mx-auto md:mx-0"></div>

          <p className="text-gray-700 leading-relaxed text-[17px] mb-4">
            আনন্দ হাউজিং সোসাইটি অত্যন্ত সু-পরিকল্পিত একটি আবাসন প্রকল্প। সুস্থ
            এবং আধুনিক জীবন যাপনের জন্য এই প্রকল্পে প্রয়োজনীয় স্কুল-কলেজ,
            খেলার মাঠ, উপাসনালয়, হাসপাতাল, ওয়ানস্টপ হাউজ, লেক, রাস্তা, বর্জ্য
            ও পয়ঃনিষ্কাশন ব্যবস্থা রাখা হয়েছে।
          </p>

          <p className="text-gray-700 leading-relaxed text-[17px] mb-6">
            পুলিশ কর্মকর্তা এবং সমাজের অন্যান্য প্রতিষ্টিত পেশাজীবীদের সমন্বয়ে
            আনন্দ পুলিশ হাউজিং সোসাইটি অতি দ্রুতই একটি আদর্শ আবাসিক এলাকা হিসাবে
            বিবেচিত হবে। নির্মল ও আধুনিক জীবন যাপনের জন্য ইতোমধ্যেই অনেকে বাড়ি
            নির্মাণ শুরু করেছেন।
          </p>

          <p className="text-gray-700 leading-relaxed text-[17px] mb-8">
            কেউ কেউ বাংলো বাড়ি তৈরি করে বসবাস করছেন। আনন্দ হাউজিং সোসাইটি
            বসবাসের জন্য আপনাকে স্বাগতম।
          </p>

          <button className="bg-amber-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-amber-600 transition">
            আমাদের কথা
          </button>
        </div>
      </div>
    </section>
  );
}
