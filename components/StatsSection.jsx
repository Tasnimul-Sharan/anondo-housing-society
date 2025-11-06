export default function StatsSection({ data }) {
  return (
    <section className="bg-orange-50 py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {data.map((item, i) => (
          <div key={i}>
            <p className="text-3xl font-bold text-orange-500">{item.count}</p>
            <p className="text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
