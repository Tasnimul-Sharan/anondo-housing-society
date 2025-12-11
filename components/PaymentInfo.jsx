// export default function PaymentInfo() {
//   return (
//     <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
//       {/* ========= Header Text ========= */}
//       <p className="text-center text-sm text-gray-600 mb-8">
//         Payments may be made direct to our bank account from any country of the
//         world through Bank to Bank or through money Exchange. The account
//         particulars are as follows:
//       </p>

//       {/* ========= Bank Table ========= */}
//       <div className="overflow-x-auto">
//         <table className="w-full border border-gray-300 text-sm">
//           <thead className="bg-gray-100">
//             <tr className="text-left">
//               <th className="p-3 border border-gray-300">Sl No</th>
//               <th className="p-3 border border-gray-300">Bank Name</th>
//               <th className="p-3 border border-gray-300">Branch</th>
//               <th className="p-3 border border-gray-300">Account name</th>
//               <th className="p-3 border border-gray-300">Account Number</th>
//               <th className="p-3 border border-gray-300">Swift</th>
//               <th className="p-3 border border-gray-300">Routing</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               [
//                 "1",
//                 "South Bangla Agriculture & Commerce Bank Ltd.",
//                 "Nawabpur Branch",
//                 "Anando Housing Society",
//                 "003211004245",
//                 "SBACBDDH",
//                 "270274729",
//               ],
//               [
//                 "2",
//                 "Trust Bank Ltd.",
//                 "Dilkusha Corporate Branch",
//                 "Anando Housing Society",
//                 "00170320000450",
//                 "TTBLBDDH",
//                 "240271936",
//               ],
//               [
//                 "3",
//                 "Janta Bank Ltd.",
//                 "Islampur Branch",
//                 "Anando Housing Society",
//                 "0100004885095",
//                 "JANBBBDH",
//                 "135274572",
//               ],
//               [
//                 "4",
//                 "Sonali Bank Ltd.",
//                 "Bahadur Shah Park Branch",
//                 "Anando Housing Society",
//                 "1632030053034",
//                 "BSONBDDH",
//                 "200274573",
//               ],
//               [
//                 "5",
//                 "Sonali Bank Ltd.",
//                 "Bahadur Shah Park Branch",
//                 "Anando Housing Society",
//                 "1632802014940",
//                 "BSONBDDH",
//                 "200274573",
//               ],
//               [
//                 "6",
//                 "Islami Bank Bangladesh Ltd.",
//                 "Bangshal Branch",
//                 "Anando Housing Society",
//                 "20562069090225010",
//                 "IBBLBDDH",
//                 "125272202",
//               ],
//               [
//                 "7",
//                 "Janta Bank Ltd.",
//                 "Bahadur Shah Park Branch",
//                 "Anando Housing Society K.B.S.S.",
//                 "010002178705",
//                 "JANBBBDH",
//                 "135274572",
//               ],
//             ].map((row, idx) => (
//               <tr key={idx} className="hover:bg-gray-50">
//                 {row.map((cell, i) => (
//                   <td key={i} className="p-3 border border-gray-300">
//                     {cell}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* ========= Instruction Text ========= */}
//       <p className="text-sm text-gray-700 mt-6">
//         During remittance, your full name, Member No. & Phase Name. Such as ‘1st
//         Phase’, ‘2nd Phase’, ‘3rd Phase’, must be mentioned in order to easily
//         identify the real subscriber.
//       </p>

//       <p className="text-sm text-gray-700 mt-3">
//         You can also send your Advice/Deposit Slip of payment through:
//       </p>

//       <ul className="list-disc pl-6 text-sm text-gray-700 mt-2 space-y-1">
//         <li>anandopalicehousing@gmail.com</li>
//         <li>anandopalicehousing@yahoo.com</li>
//       </ul>

//       <p className="text-sm text-gray-700 mt-6">
//         More detail for credit advice please dial
//       </p>

//       <ul className="pl-6 text-sm text-gray-700 space-y-1 mt-1">
//         <li>📞 01318252048</li>
//         <li>📞 01750800933</li>
//         <li>📞 01318252024</li>
//         <li>📞 01324412959</li>
//       </ul>

//       {/* ========= Bengali Section ========= */}
//       <div className="mt-10 pt-10 border-t border-gray-300">
//         <h2 className="text-lg font-bold mb-3">
//           ● নতুন সদস্যদের টাকা জমাদান ও কিস্তি পরিশোধ পদ্ধতি :
//         </h2>

//         <p className="text-sm text-gray-700 mb-4 leading-relaxed">
//           নতুন সদস্যদের প্রাথমিক আবেদন গ্রহন করার পূর্বে আলাদা ভাবে যাচাই বাছাই
//           করা হয়েছে এবং যাচাই বাছাই শেষে সদস্যদের মূল কিস্তির পাশাপাশি জামানত
//           জমা প্রদানের পরবর্তী সময়ে সদস্যপদ সহ বরাদ্দকৃত জমির মূল্য পরিশোধে
//           নিয়মিত কিস্তির সময়মত প্রদান নিশ্চিত করতে হবে। যে কোন সদস্য কিস্তি
//           প্রদানে পিছিয়ে পড়লে তাঁর বরাদ্দ বাতিল হতে পারে এবং পুনরায় আবেদন করতে
//           হবে। সদস্য হিসেবে যাচাই বাছাই শেষে সঠিক তথ্য প্রদান করতে হবে এবং সকল
//           সদস্যকে সমিতির নিয়ম ও শর্ত অবশ্যই মেনে চলতে হবে। সদস্যদের জন্য সময়মত
//           কিস্তি/জামানত/অন্যান্য অর্থ সমিতিতে জমা প্রদান পূর্বক রশিদ সংগ্রহ করতে
//           হবে।
//         </p>

//         <h3 className="font-semibold text-sm mb-2">
//           কিস্তি পরিশোধ ও জমা প্রদানের ক্ষেত্রে গুরুত্বপূর্ণ নির্দেশনা :
//         </h3>

//         <ul className="list-decimal pl-6 text-sm text-gray-700 space-y-2 leading-relaxed">
//           <li>প্রতি কিস্তির টাকা সময় মত জমা প্রদান করতে হবে।</li>
//           <li>সঠিক পরিমাণ টাকা পরিশোধ।</li>
//           <li>
//             কিস্তি জমা প্রদানের পর অবশ্যই রশিদ সংগ্রহ করবেন এবং ভবিষ্যতে প্রয়োজন
//             হলে রশিদটি অবশ্যই প্রদর্শন করতে হবে।
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

export default function PaymentInfo() {
  const banks = [
    [
      "1",
      "South Bangla Agriculture & Commerce Bank Ltd.",
      "Nawabpur Branch",
      "Anando Housing Society",
      "003211004245",
      "SBACBDDH",
      "270274729",
    ],
    [
      "2",
      "Trust Bank Ltd.",
      "Dilkusha Corporate Branch",
      "Anando Housing Society",
      "00170320000450",
      "TTBLBDDH",
      "240271936",
    ],
    [
      "3",
      "Janta Bank Ltd.",
      "Islampur Branch",
      "Anando Housing Society",
      "0100004885095",
      "JANBBBDH",
      "135274572",
    ],
    [
      "4",
      "Sonali Bank Ltd.",
      "Bahadur Shah Park Branch",
      "Anando Housing Society",
      "1632030053034",
      "BSONBDDH",
      "200274573",
    ],
    [
      "5",
      "Sonali Bank Ltd.",
      "Bahadur Shah Park Branch",
      "Anando Housing Society",
      "1632802014940",
      "BSONBDDH",
      "200274573",
    ],
    [
      "6",
      "Islami Bank Bangladesh Ltd.",
      "Bangshal Branch",
      "Anando Housing Society",
      "20562069090225010",
      "IBBLBDDH",
      "125272202",
    ],
    [
      "7",
      "Janta Bank Ltd.",
      "Bahadur Shah Park Branch",
      "Anando Housing Society K.B.S.S.",
      "010002178705",
      "JANBBBDH",
      "135274572",
    ],
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <p className="text-center text-gray-600 text-base max-w-3xl mx-auto leading-relaxed mb-10">
        Payments may be made directly to our bank account from any country
        through Bank to Bank or via Money Exchange. The account details are
        listed below:
      </p>

      {/* Table Card */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-3 border border-gray-300">Sl No</th>
              <th className="p-3 border border-gray-300">Bank Name</th>
              <th className="p-3 border border-gray-300">Branch</th>
              <th className="p-3 border border-gray-300">Account name</th>
              <th className="p-3 border border-gray-300">Account Number</th>
              <th className="p-3 border border-gray-300">Swift</th>
              <th className="p-3 border border-gray-300">Routing</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "1",
                "South Bangla Agriculture & Commerce Bank Ltd.",
                "Nawabpur Branch",
                "Anando Housing Society",
                "003211004245",
                "SBACBDDH",
                "270274729",
              ],
              [
                "2",
                "Trust Bank Ltd.",
                "Dilkusha Corporate Branch",
                "Anando Housing Society",
                "00170320000450",
                "TTBLBDDH",
                "240271936",
              ],
              [
                "3",
                "Janta Bank Ltd.",
                "Islampur Branch",
                "Anando Housing Society",
                "0100004885095",
                "JANBBBDH",
                "135274572",
              ],
              [
                "4",
                "Sonali Bank Ltd.",
                "Bahadur Shah Park Branch",
                "Anando Housing Society",
                "1632030053034",
                "BSONBDDH",
                "200274573",
              ],
              [
                "5",
                "Sonali Bank Ltd.",
                "Bahadur Shah Park Branch",
                "Anando Housing Society",
                "1632802014940",
                "BSONBDDH",
                "200274573",
              ],
              [
                "6",
                "Islami Bank Bangladesh Ltd.",
                "Bangshal Branch",
                "Anando Housing Society",
                "20562069090225010",
                "IBBLBDDH",
                "125272202",
              ],
              [
                "7",
                "Janta Bank Ltd.",
                "Bahadur Shah Park Branch",
                "Anando Housing Society K.B.S.S.",
                "010002178705",
                "JANBBBDH",
                "135274572",
              ],
            ].map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                {row.map((cell, i) => (
                  <td key={i} className="p-3 border border-gray-300">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Instructions */}
      <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-md shadow-sm">
        <h3 className="text-lg font-semibold text-yellow-800 flex items-center gap-2 mb-3">
          ⚠️ Important Information
        </h3>

        <p className="text-sm text-gray-800 leading-relaxed mb-4">
          During remittance, your full name, Member No. & Phase Name (e.g., 1st
          Phase, 2nd Phase, 3rd Phase) must be mentioned to identify the real
          subscriber.
        </p>

        <div className="mt-4">
          <h4 className="font-medium text-gray-900 mb-1">
            ✉️ Email Addresses:
          </h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>anandopalicehousing@gmail.com</li>
            <li>anandopalicehousing@yahoo.com</li>
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="font-medium text-gray-900 mb-1">☎ Contact Numbers:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>📞 01318252048</li>
            <li>📞 01750800933</li>
            <li>📞 01318252024</li>
            <li>📞 01324412959</li>
          </ul>
        </div>
      </div>

      {/* Bengali Section */}
      <div className="mt-16 bg-gray-50 p-8 rounded-xl border border-gray-200">
        <h2 className="text-lg font-bold mb-4 text-gray-800">
          ● নতুন সদস্যদের টাকা জমাদান ও কিস্তি পরিশোধ পদ্ধতি :
        </h2>

        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          নতুন সদস্যদের প্রাথমিক আবেদন গ্রহন করার পূর্বে আলাদা ভাবে যাচাই বাছাই
          করা হয়েছে এবং যাচাই বাছাই শেষে সদস্যদের মূল কিস্তির পাশাপাশি জামানত
          জমা প্রদানের পরবর্তী সময়ে সদস্যপদ সহ বরাদ্দকৃত জমির মূল্য পরিশোধে
          নিয়মিত কিস্তির সময়মত প্রদান নিশ্চিত করতে হবে...
        </p>

        <h3 className="font-semibold text-sm mb-3">
          কিস্তি পরিশোধ ও জমা প্রদানের ক্ষেত্রে গুরুত্বপূর্ণ নির্দেশনা :
        </h3>

        <ul className="list-decimal pl-6 text-sm text-gray-700 space-y-2">
          <li>প্রতি কিস্তির টাকা সময় মত জমা প্রদান করতে হবে।</li>
          <li>সঠিক পরিমাণ টাকা পরিশোধ করতে হবে।</li>
          <li>
            জমা প্রদানের পর রশিদ সংগ্রহ করতে হবে এবং প্রয়োজনে প্রদর্শন করতে হবে।
          </li>
        </ul>
      </div>
    </section>
  );
}
