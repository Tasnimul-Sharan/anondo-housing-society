export default function ContactSection({ data }) {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">{data.title}</h2>
      <p className="mb-8 text-gray-600">{data.subtitle}</p>
      <form className="max-w-2xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="নাম"
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          placeholder="ইমেইল"
          className="w-full p-3 border rounded"
        />
        <textarea
          placeholder="বার্তা"
          className="w-full p-3 border rounded h-32"
        />
        <button className="bg-orange-500 text-white px-6 py-3 rounded">
          পাঠান
        </button>
      </form>
    </section>
  );
}
