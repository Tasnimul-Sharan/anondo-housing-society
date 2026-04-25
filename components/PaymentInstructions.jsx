"use client";
import {
  FaExclamationTriangle,
  FaEnvelope,
  FaPhoneAlt,
  FaInfoCircle,
  FaCheckCircle,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

export default function PaymentInstructions() {
  return (
    <>
      {/* Instructions */}
      <div className="mt-12 bg-gradient-to-br from-orange-50 to-white border border-orange-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-orange-600 flex items-center gap-2 mb-4">
          <FaExclamationTriangle className="text-orange-500" />
          Important Information
        </h3>

        <p className="text-sm text-gray-700 leading-relaxed mb-5 flex items-start gap-2">
          <FaInfoCircle className="mt-1 text-primary" />
          During remittance, your full name, Member No. & Phase Name (e.g., 1st
          Phase, 2nd Phase, 3rd Phase) must be mentioned to identify the real
          subscriber.
        </p>

        {/* Email */}
        <div className="mt-4">
          <h4 className="font-medium text-gray-900 flex items-center gap-2 mb-2">
            <FaEnvelope className="text-primary" />
            Email Addresses
          </h4>
          <ul className="text-base text-gray-700 space-y-1 pl-6 list-disc">
            <li>anandopalicehousing@gmail.com</li>
            <li>anandopalicehousing@yahoo.com</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="mt-5">
          <h4 className="font-medium text-gray-900 flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-primary" />
            Contact Numbers
          </h4>
          <ul className="text-base text-gray-700 space-y-2">
            {["01318252048", "01750800933", "01318252024", "01324412959"].map(
              (num, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="p-2 bg-primary/10 rounded-full">
                    <FiPhone className="text-primary text-sm" />
                  </span>
                  <a
                    href={`tel:${num}`}
                    className="hover:text-primary transition"
                  >
                    {num}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      {/* Bengali Section */}
      <div className="mt-16 bg-white p-8 rounded-xl border shadow-sm hover:shadow-lg transition">
        <h2 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
          <FaInfoCircle />
          নতুন সদস্যদের টাকা জমাদান ও কিস্তি পরিশোধ পদ্ধতি
        </h2>

        <p className="text-sm text-gray-700 leading-relaxed mb-5">
          নতুন সদস্যদের প্রাথমিক আবেদন গ্রহণের পূর্বে যাচাই-বাছাই করা হয় এবং
          যাচাই শেষে সদস্যদের মূল কিস্তির পাশাপাশি জামানত জমা প্রদানের পরবর্তী
          সময়ে সদস্যপদসহ বরাদ্দকৃত জমির মূল্য পরিশোধে নিয়মিত কিস্তি সময়মত
          প্রদান নিশ্চিত করতে হবে।
        </p>

        <h3 className="font-semibold text-sm mb-3 text-gray-900">
          গুরুত্বপূর্ণ নির্দেশনা:
        </h3>

        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-sm text-gray-700">
            <FaCheckCircle className="text-primary mt-1" />
            প্রতি কিস্তির টাকা সময়মত জমা প্রদান করতে হবে।
          </li>

          <li className="flex items-start gap-2 text-sm text-gray-700">
            <FaCheckCircle className="text-primary mt-1" />
            সঠিক পরিমাণ টাকা পরিশোধ করতে হবে।
          </li>

          <li className="flex items-start gap-2 text-sm text-gray-700">
            <FaCheckCircle className="text-primary mt-1" />
            জমা প্রদানের পর রশিদ সংগ্রহ করতে হবে এবং প্রয়োজনে প্রদর্শন করতে
            হবে।
          </li>
        </ul>
      </div>
    </>
  );
}
