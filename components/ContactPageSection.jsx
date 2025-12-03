"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPageSection() {
  return (
    <div className="bg-white py-20">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-2">Get In Touch</h2>
      <div className="w-20 h-1 bg-yellow-500 mx-auto mb-12"></div>

      {/* Top Info Cards */}
      <div className="container mx-auto grid md:grid-cols-3 gap-10 px-5">
        {/* Address */}
        <div className="group bg-white p-8 rounded-2xl border shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
          <div className="w-16 h-16 flex items-center justify-center mx-auto bg-gray-900 text-white rounded-full text-2xl group-hover:scale-110 transition duration-300">
            <FaMapMarkerAlt />
          </div>
          <h3 className="text-xl font-semibold text-center mt-4">
            Address Street
          </h3>
          <p className="text-center text-gray-600 mt-2 leading-relaxed">
            Address: Priyans Building, 13-th floor, 5, Rajuk Avenue, Motijheel,
            1000 Dhaka
          </p>
        </div>

        {/* Phone */}
        <div className="group bg-white p-8 rounded-2xl border shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
          <div className="w-16 h-16 flex items-center justify-center mx-auto bg-gray-900 text-white rounded-full text-2xl group-hover:scale-110 transition duration-300">
            <FaPhoneAlt />
          </div>
          <h3 className="text-xl font-semibold text-center mt-4">
            Phone Number
          </h3>
          <div className="text-center text-gray-600 mt-2 space-y-1">
            <p>01750821004</p>
            <p>01896180020</p>
            <p>01750821012</p>
            <p>01750821006</p>
            <p>01630686068</p>
            <p>01824682154</p>
          </div>
        </div>

        {/* Email */}
        <div className="group bg-white p-8 rounded-2xl border shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
          <div className="w-16 h-16 flex items-center justify-center mx-auto bg-gray-900 text-white rounded-full text-2xl group-hover:scale-110 transition duration-300">
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

      {/* Map Section */}
      <div className="container mx-auto mt-16 px-5">
        <div className="rounded-3xl overflow-hidden shadow-2xl border mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8676469000003!2d90.4146007!3d23.7297011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b858546b9d3b%3A0x4b924139d4a1e282!2sAnondo%20Police%20Housing%20Society%20(Corporate%20Office)!5e0!3m2!1sen!2sbd!4v1701111111111"
            className="w-full h-[550px] md:h-[650px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto mt-16 bg-gray-50 p-10 rounded-2xl shadow-xl px-5">
        <form className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name *"
            className="p-4 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email *"
            className="p-4 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
          />

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject *"
            className="md:col-span-2 p-4 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
          />

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Message"
            className="md:col-span-2 p-4 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
          ></textarea>

          {/* Button */}
          <button className="md:col-span-2 bg-yellow-500 hover:bg-yellow-600 transition text-white font-semibold py-3 rounded-lg w-40">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}
