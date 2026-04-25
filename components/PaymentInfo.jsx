export default function PaymentInfo() {
  const banks = [
    [
      "1",
      "Bangladesh Krishi Bank",
      "Local Principal Office, Dhaka",
      "Anondo Housing Society",
      "4001-0210043158",
      "BKBABDDHLPO",
      "035273910",
    ],
    [
      "2",
      "Bangladesh Krishi Bank",
      "Local Principal Office, Dhaka",
      "Anondo Housing Society",
      "4001-0136004706",
      "BKBABDDHLPO",
      "035273910",
    ],
    [
      "3",
      "Bangladesh Krishi Bank",
      "Local Principal Office, Dhaka",
      "Anondo Housing Society",
      "4001-0320002547",
      "BKBABDDHLPO",
      "035273910",
    ],
    [
      "4",
      "Sonali Bank PLC",
      "Nagar Bhaban, Dhaka",
      "Anondo Housing Society",
      "1623802001490",
      "BSONBDDH",
      "200274573",
    ],
    [
      "5",
      "Sonali Bank PLC",
      "Nagar Bhaban, Dhaka",
      "Anondo Housing Society",
      "1623100035034",
      "BSONBDDH",
      "200274573",
    ],
    [
      "6",
      "Janata Bank PLC",
      "Nagar Bhaban Corporate, Dhaka",
      "Anondo Housing Society",
      "0100004885095",
      "JANBBDDHKRN",
      "135274572",
    ],
    [
      "7",
      "Janata Bank PLC",
      "Nagar Bhaban Corporate Branch, Dhaka",
      "Anondo Police Paribar K.B.S.S",
      "0100121781705",
      "JANBBDDHNRB",
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
            {banks.map((row, idx) => (
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
      <div className="mt-12 bg-orange-50 border-l-4 border-primary/90 p-6 rounded-md shadow-sm">
        <h3 className="text-lg font-semibold text-primary/80 flex items-center gap-2 mb-3">
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
      <div className="mt-16 bg-primary/50 p-8 rounded-xl border border-gray-200">
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
