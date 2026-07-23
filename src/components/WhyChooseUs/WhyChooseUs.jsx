const REASONS = [
  { icon: "🎟️", title: "Easy Booking", desc: "Book tickets in seconds with a seamless checkout." },
  { icon: "🔒", title: "Secure Payments", desc: "Your transactions are fully encrypted and safe." },
  { icon: "📅", title: "Wide Selection", desc: "Thousands of events across all categories." },
  { icon: "🎧", title: "24/7 Support", desc: "We're here whenever you need help." },
];

const WhyChooseUs = () => (
  <section className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {REASONS.map(({ icon, title, desc }) => (
          <div key={title} className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm">
            <span className="text-3xl">{icon}</span>
            <h3 className="font-semibold text-gray-900 mt-3 mb-1">{title}</h3>
            <p className="text-sm text-gray-500">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
