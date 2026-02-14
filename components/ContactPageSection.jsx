"use client";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPageSection() {
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
        "✅ আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে। আমরা খুব শিগগিরই যোগাযোগ করবো!",
      );
      event.target.reset();
    } else {
      setSuccess(false);
      setResult("❌ দুঃখিত! কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    }

    setTimeout(() => {
      setResult("");
    }, 5000);
  };

  return (
    <div className="bg-white md:pt-12 pt-6">
      <h2 className="text-4xl font-bold text-center mb-2">Get In Touch</h2>
      <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
      <div className="container mx-auto grid md:grid-cols-3 gap-10 px-5">
        <div className="group bg-white p-8 rounded-2xl border hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
          <div className="w-16 h-16 flex items-center justify-center mx-auto bg-gray-900 text-white rounded-full text-2xl transition duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:ring-2 group-hover:ring-primary group-hover:ring-offset-2 group-hover:ring-offset-white">
            <FaMapMarkerAlt />
          </div>

          <h3 className="text-xl font-semibold text-center mt-4">
            Address Street
          </h3>
          <p className="text-center text-gray-600 mt-2 leading-relaxed">
            Address: Printers Building, 11–14th floor, 5, Rajuk Avenue,
            Motijheel, 1000 Dhaka
          </p>
        </div>

        <div className="group bg-white p-8 rounded-2xl border hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
          <div className="w-16 h-16 flex items-center justify-center mx-auto bg-gray-900 text-white rounded-full text-2xl transition duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:ring-2 group-hover:ring-primary group-hover:ring-offset-2 group-hover:ring-offset-white">
            <FaPhoneAlt />
          </div>
          <h3 className="text-xl font-semibold text-center mt-4">
            Phone Number
          </h3>
          <div className="text-center text-gray-600 mt-2 space-y-1">
            <p>01750180094</p>
            <p>01318252050</p>
            <p>01750180095</p>
            <p>01750180092</p>
            <p>01750180096</p>
            <p>01318252045</p>
            <p>01324412954</p>
          </div>
        </div>
        <div className="group bg-white p-8 rounded-2xl border hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
          <div className="w-16 h-16 flex items-center justify-center mx-auto bg-gray-900 text-white rounded-full text-2xl transition duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:ring-2 group-hover:ring-primary group-hover:ring-offset-2 group-hover:ring-offset-white">
            <FaEnvelope />
          </div>
          <h3 className="text-xl font-semibold text-center mt-4">
            Address Email
          </h3>
          <div className="text-center text-gray-600 mt-2 space-y-1">
            <p>anondohousingsociety@gmail.com</p>
            <p>info@anondohousing.com</p>
            <p>marketing@anondohousing.com</p>
            <p>sales@anondohousing.com</p>
          </div>
        </div>
      </div>
      <div className="custom-container mx-auto mt-12">
        <div className="rounded overflow-hidden border mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8676469000003!2d90.4146007!3d23.7297011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b858546b9d3b%3A0x4b924139d4a1e282!2sAnondo%20Police%20Housing%20Society%20(Corporate%20Office)!5e0!3m2!1sen!2sbd!4v1701111111111"
            className="w-full h-[550px] md:h-[650px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="py-20 bg-[#f7f7f7]">
        <form
          onSubmit={onSubmit}
          className="max-w-3xl mx-auto md:px-0 px-6 space-y-6"
        >
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
      </div>
    </div>
  );
}
