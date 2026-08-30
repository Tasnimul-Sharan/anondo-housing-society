"use client";

import React from "react";
import {
  FaCookieBite,
  FaDatabase,
  FaEnvelopeOpenText,
  FaLock,
  FaShieldAlt,
  FaUserCheck,
} from "react-icons/fa";

const policySections = [
  {
    icon: <FaUserCheck />,
    title: "আমরা যে তথ্য সংগ্রহ করি",
    text: "আপনি যখন ফর্ম পূরণ করেন, আমাদের সাথে যোগাযোগ করেন, বুকিং বা তথ্যের অনুরোধ করেন, তখন আপনার নাম, ফোন নম্বর, ইমেইল, ঠিকানা এবং প্রয়োজনীয় প্রকল্প-সম্পর্কিত তথ্য সংগ্রহ করা হতে পারে।",
  },
  {
    icon: <FaDatabase />,
    title: "তথ্য ব্যবহারের উদ্দেশ্য",
    text: "আপনার তথ্য ব্যবহার করা হয় যোগাযোগ করার ক্ষেত্রে, সেবা প্রদান, বুকিং বা আবেদন প্রক্রিয়া সম্পন্ন করা, নোটিশ ও আপডেট জানানো এবং আমাদের ওয়েবসাইট ও গ্রাহকসেবা উন্নত করার জন্য।",
  },
  {
    icon: <FaLock />,
    title: "তথ্যের নিরাপত্তা",
    text: "আমরা ব্যক্তিগত তথ্য সুরক্ষিত রাখতে যুক্তিসঙ্গত প্রশাসনিক, কারিগরি এবং নিরাপত্তামূলক ব্যবস্থা গ্রহণ করি। অনুমতি ছাড়া আপনার ব্যক্তিগত তথ্য প্রকাশ না করার বিষয়ে আমরা সর্বদা সতর্ক থাকি।",
  },
  {
    icon: <FaCookieBite />,
    title: "কুকিজ ও অ্যানালিটিক্স",
    text: "ওয়েবসাইটের ব্যবহার বুঝতে এবং ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে কুকিজ, অ্যানালিটিক্স বা অনুরূপ প্রযুক্তি ব্যবহার করা হতে পারে। আপনি ব্রাউজার সেটিংস থেকে কুকিজ নিয়ন্ত্রণ করতে পারেন।",
  },
  {
    icon: <FaShieldAlt />,
    title: "তৃতীয় পক্ষের সাথে তথ্য শেয়ার",
    text: "সেবা প্রদান, আইনগত বাধ্যবাধকতা, পেমেন্ট বা প্রযুক্তিগত সহায়তার প্রয়োজন ছাড়া আমরা আপনার তথ্য তৃতীয় পক্ষের সাথে বিক্রি বা অপ্রয়োজনীয়ভাবে শেয়ার করি না।",
  },
  {
    icon: <FaEnvelopeOpenText />,
    title: "যোগাযোগ ও আপডেট",
    text: "আপনি আপনার তথ্য সংশোধন, আপডেট বা নির্দিষ্ট যোগাযোগ বন্ধ করার বিষয়ে আমাদের সাথে যোগাযোগ করতে পারেন। নীতিমালায় পরিবর্তন হলে এই পেজে তা আপডেট করা হবে।",
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="bg-orange-50 py-16">
      <div className="mx-auto max-w-6xl px-6 text-gray-800 md:px-0">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          {/* <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl text-primary shadow-sm">
            <FaShieldAlt />
          </div> */}
          <h1 className="mb-3 text-4xl font-extrabold">গোপনীয়তা নীতি</h1>
          <p className="text-sm leading-6 text-gray-600">
            আনন্দ হাউজিং সোসাইটির ওয়েবসাইট ব্যবহারকারী, গ্রাহক ও দর্শনার্থীদের
            ব্যক্তিগত তথ্য কীভাবে সংগ্রহ, ব্যবহার ও সুরক্ষিত করা হয়।
          </p>
          <p className="mt-4 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-secondary shadow-sm">
            সর্বশেষ আপডেট: ২৯ আগস্ট ২০২৬
          </p>
        </div>

        <div className="mb-10 rounded-3xl border border-orange-200 bg-white p-6 leading-8 shadow-sm md:p-8">
          <p>
            Anondo Housing Society আপনার গোপনীয়তাকে গুরুত্ব দেয়। আমাদের
            ওয়েবসাইট, ফর্ম, যোগাযোগ মাধ্যম বা সেবার মাধ্যমে যে তথ্য পাওয়া যায়,
            তা দায়িত্বশীলভাবে ব্যবহার করা আমাদের অঙ্গীকার। এই নীতিমালায় আমরা
            কী ধরনের তথ্য সংগ্রহ করি, কেন ব্যবহার করি এবং কীভাবে সুরক্ষা দিই তা
            সংক্ষেপে তুলে ধরা হলো।
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {policySections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-orange-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-7"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-xl text-primary">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>
              <p className="text-base leading-8 text-gray-700">
                {section.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-orange-200 bg-white p-6 leading-8 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            যোগাযোগ করুন
          </h2>
          <p>
            এই Privacy Policy সম্পর্কে কোনো প্রশ্ন, অনুরোধ বা তথ্য সংশোধনের
            প্রয়োজন হলে আমাদের সাথে যোগাযোগ করুন।
          </p>
          <div className="mt-5 gap-3 text-sm font-semibold text-secondary">
            <p>Phone: +880 1331-115500</p>
            <p>Email: info.anondohousing@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
