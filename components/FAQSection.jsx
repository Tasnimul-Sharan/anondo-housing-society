export default function FAQSection({ data }) {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        প্রায়শই জিজ্ঞাসিত প্রশ্ন (FAQ)
      </h2>
      <div className="max-w-3xl mx-auto text-left">
        {data.map((faq, i) => (
          <details key={i} className="mb-4 border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">{faq.q}</summary>
            <p className="mt-2 text-gray-600">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
