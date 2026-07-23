const TESTIMONIALS = [
  { id: 1, name: "Alice M.", text: "Found the best concert tickets here. Super easy!" },
  { id: 2, name: "Brian K.", text: "Booked a workshop in under 2 minutes. Highly recommend." },
  { id: 3, name: "Carol N.", text: "Great variety of events. Will definitely use again." },
];

const Testimonials = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What People Say</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {TESTIMONIALS.map(({ id, name, text }) => (
        <div key={id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <p className="text-gray-600 italic">&ldquo;{text}&rdquo;</p>
          <p className="mt-4 font-semibold text-gray-900 text-sm">— {name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
