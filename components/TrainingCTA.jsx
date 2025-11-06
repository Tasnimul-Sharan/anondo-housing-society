export default function TrainingCTA() {
  return (
    <section className="py-12 bg-gradient-to-r from-sky-50 to-white rounded-2xl">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 custom-container mx-auto">
      <div>
        <h4 className="text-xl font-semibold">Ready to learn more?</h4>
        <p className="text-gray-700">Request a brochure or schedule a visit to the Training Academy.</p>
      </div>
      <div className="flex md:justify-end justify-start gap-3">
        <a href="/contact" className="px-5 py-2 rounded-lg border bg-white hover:shadow-sm">
          Contact Us
        </a>
        <a href="/brochure.pdf" className="px-5 py-2 rounded-lg bg-sky-600 text-white">
          Download Brochure
        </a>
      </div>
    </div>
    </section>
  );
}