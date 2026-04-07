"use client";
import Image from "next/image";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function EventDetails() {
  return (
    <section className="bg-primary/5 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="bg-white rounded-2xl p-6 md:p-10 mb-10 border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            বার্ষিক সাধারণ সভা (AGM) ২০২৬
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            সম্মানিত সদস্যবৃন্দ,
            <br />
            আনন্দ হাউজিং সোসাইটি’র সকল সম্মানিত সদস্যদের জানানো যাচ্ছে যে আসন্ন
            বার্ষিক সাধারণ সভা (AGM) ২০২৬ অনুষ্ঠিত হতে যাচ্ছে। এই আয়োজনে আপনি
            সাদরে আমন্ত্রিত।
          </p>

          {/* Info with Icons */}
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-primary text-lg" />
              <p>
                <strong>তারিখ:</strong> ১১ এপ্রিল ২০২৬, শনিবার
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaClock className="text-primary text-lg" />
              <p>
                <strong>সময়:</strong> সকাল ১০:০০ টা
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary text-lg" />
              <p>
                <strong>স্থান:</strong> আনন্দ হাউজিং সোসাইটি, পূর্বাচল নিউটাউন,
                রূপগঞ্জ, নারায়ণগঞ্জ
              </p>
            </div>
          </div>

          <p className="mt-6 text-gray-600">
            আপনাদের সক্রিয় উপস্থিতিই আমাদের শক্তি ও অগ্রগতির প্রেরণা।
          </p>

          {/* Contact */}
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-2">
              <FaPhoneAlt className="text-primary" />
              <p className="font-semibold text-gray-800">মোবাইল নাম্বারঃ</p>
            </div>

            <p className="text-gray-600">
              +88 01331 115500, +88 01331 115511 <br />
              +880 1313-775333, +880 1313-775334, +880 1313-775335
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full rounded-xl">
            <Image
              src="/invitation/invitation-card-01.png"
              alt="Event Image 1"
              width={1600}
              height={1094}
              className="object-contain w-full h-full rounded-xl"
            />
          </div>

          <Image
            src="/invitation/invitation-card-02.png"
            alt="Event Image 2"
            width={1600}
            height={1096}
            className="object-contain w-full h-full rounded-xl"
          />
        </div>
        {/* <div className="relative w-full rounded-xl">
          <Image
            src="/invitation-card.png"
            alt="Event Image 1"
            width={3330}
            height={1094}
            className="object-cover w-full h-full rounded-xl"
          />
        </div> */}
        {/* <div className="relative w-full bg-gray-100 p-2 rounded-xl">
            <Image
              src="/invitation-card-02.png"
              alt="Event Image 2"
              width={1600}
              height={1096}
              className="object-contain w-full h-full rounded-xl"
            />
          </div>
          <Image
            src="/invitation-card-02.png"
            alt="Event Image 2"
            width={1600}
            height={1096}
            className="object-contain w-full h-full rounded-xl"
          />
      </div> */}
      </div>
    </section>
  );
}
