import { useState } from "react";

export default function ContactSection({ data }) {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Web3Forms Access Key
    formData.append("access_key", "999c880a-c5fa-4ec5-bdf3-7fdbe0583aa6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const res = await response.json();
    setResult(res.success ? "বার্তাটি পাঠানো হয়েছে!" : "কোনো সমস্যা হয়েছে!");
  };

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">{data.title}</h2>
      <p className="mb-8 text-gray-600">{data.subtitle}</p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="নাম"
          className="w-full p-3 border rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="ইমেইল"
          className="w-full p-3 border rounded"
          required
        />

        <textarea
          name="message"
          placeholder="বার্তা"
          className="w-full p-3 border rounded h-32"
          required
        ></textarea>

        <button className="bg-orange-500 text-white px-6 py-3 rounded">
          পাঠান
        </button>

        {result && (
          <div
            className={`mt-4 p-4 rounded-lg text-left animate-fade-in 
      ${
        result === "বার্তাটি পাঠানো হয়েছে!"
          ? "bg-green-100 text-green-800 border border-green-300"
          : "bg-red-100 text-red-800 border border-red-300"
      }`}
          >
            <p className="font-semibold flex items-center gap-2">
              {result === "বার্তাটি পাঠানো হয়েছে!" ? (
                <span>✅</span>
              ) : (
                <span>⚠️</span>
              )}
              {result}
            </p>
          </div>
        )}
      </form>
    </section>
  );
}
