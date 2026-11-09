import { useState } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function ContactSection() {
  const [result, setResult] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    setSuccess(false);

    const formData = new FormData(event.target);
    formData.append("access_key", "bddcb629-55c2-476e-b590-2d44e089d506");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const res = await response.json();

    if (res.success) {
      setSuccess(true);
      setResult(
        "আপনার বার্তা সফলভাবে পাঠানো হয়েছে। আমাদের প্রতিনিধি শিগগিরই আপনার সঙ্গে যোগাযোগ করবেন।"
      );
      event.target.reset();
    } else {
      setSuccess(false);
      setResult("আপনার বার্তা পাঠানো সম্ভব হয়নি। অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা করুন।");
    }

    // Auto hide message after 5 seconds
    setTimeout(() => {
      setResult("");
    }, 5000);
  };

  return (
    <>
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-800">যোগাযোগ করুন</h2>
        <div className="w-20 h-[3px] bg-primary mt-4 mb-4 mx-auto"></div>
        <p className="mt-2 text-gray-600">আমাদের সাথে যোগাযোগ করুন</p>
      </section>
      <section className="py-20 bg-[#f7f7f7]">
        <form onSubmit={onSubmit} className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              className="w-full bg-[#e9e9e9] p-4 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              className="w-full bg-[#e9e9e9] p-4 outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              aria-label="Phone number"
              placeholder="Phone Number *"
              className="w-full bg-[#e9e9e9] p-4 outline-none"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              className="w-full bg-[#e9e9e9] p-4 outline-none"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            className="w-full bg-[#e9e9e9] p-4 h-40 resize-none outline-none"
            required
          />

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 transition"
          >
            SEND MESSAGE
          </button>
          {result && (
            <div
              role={success ? "status" : "alert"}
              aria-live={success ? "polite" : "assertive"}
              aria-atomic="true"
              lang="bn"
              className={`mt-6 flex items-start gap-3 rounded p-4 text-left text-sm font-medium leading-relaxed ${
                success
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
            >
              {success ? (
                <FaCheckCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              ) : (
                <FaExclamationCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              )}
              <span className="min-w-0 flex-1">{result}</span>
            </div>
          )}
        </form>
      </section>
    </>
  );
}
