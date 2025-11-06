export default function Footer({ data }) {
  if (!data) return null; // ✅ Prevent crash if data missing

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-3">যোগাযোগ</h3>
          <p className="text-sm opacity-80">{data.address}</p>
          <p className="text-sm opacity-80 mt-2">{data.phone}</p>
          <p className="text-sm opacity-80">{data.email}</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">সেবা</h3>
          <ul className="space-y-2 text-sm opacity-80">
            {data.services?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">দ্রুত লিংক</h3>
          <ul className="space-y-2 text-sm opacity-80">
            {data.quickLinks?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Branding */}
        <div>
          <h3 className="text-lg font-semibold mb-3">আনন্দ হাউজিং</h3>
          <p className="text-sm opacity-80">
            আপনার স্বপ্নের আবাসনের বিশ্বস্ত সঙ্গী
          </p>
        </div>
      </div>

      <div className="text-center text-sm opacity-70 mt-10 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
}
