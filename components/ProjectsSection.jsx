import Image from "next/image";

export default function ProjectsSection({ data }) {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">আনন্দ প্রকল্প</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data.map((p, i) => (
          <div
            key={i}
            className="border rounded-lg shadow hover:shadow-lg transition"
          >
            <Image
              src={p.image}
              alt={p.title}
              width={400}
              height={250}
              className="rounded-t-lg object-cover w-full"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <button className="bg-orange-500 text-white px-4 py-2 rounded">
                বিস্তারিত
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
