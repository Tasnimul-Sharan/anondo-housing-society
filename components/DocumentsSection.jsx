import Image from "next/image";

export default function DocumentsSection({ data }) {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">বিভিন্ন নথিপত্র</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data.map((d, i) => (
          <div key={i} className="bg-white shadow rounded-lg overflow-hidden">
            <Image
              src={d.image}
              alt={d.title}
              width={400}
              height={250}
              className="object-cover w-full"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">{d.title}</h3>
              <button className="bg-orange-500 text-white px-4 py-2 rounded">
                দেখুন
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
