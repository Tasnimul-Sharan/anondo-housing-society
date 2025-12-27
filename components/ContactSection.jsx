import { useState } from "react";

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
        "✅ আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে। আমরা খুব শিগগিরই যোগাযোগ করবো!"
      );
      event.target.reset();
    } else {
      setSuccess(false);
      setResult("❌ দুঃখিত! কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    }

    // Auto hide message after 5 seconds
    setTimeout(() => {
      setResult("");
    }, 5000);
  };

  return (
    <>
      {/* Heading */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-800">যোগাযোগ করুন</h2>
        <div className="w-20 h-[3px] bg-primary mt-4 mb-4 mx-auto"></div>
        <p className="mt-2 text-gray-600">আমাদের সাথে যোগাযোগ করুন</p>
      </section>

      {/* Form */}
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
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject *"
            className="w-full bg-[#e9e9e9] p-4 outline-none"
            required
          />

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

          {/* Success / Error Message */}
          {result && (
            <div
              className={`mt-6 p-4 rounded text-center font-medium ${
                success
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
            >
              {result}
            </div>
          )}
        </form>
      </section>
    </>
  );
}
