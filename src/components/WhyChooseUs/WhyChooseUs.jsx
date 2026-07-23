const reasons = [
  { icon: "🎟️", title: "Easy Booking", desc: "Book tickets in seconds with a seamless checkout." },
  { icon: "🔒", title: "Secure Payments", desc: "Your transactions are fully encrypted and safe." },
  { icon: "📅", title: "Wide Selection", desc: "Thousands of events across all categories." },
  { icon: "🎧", title: "24/7 Support", desc: "We're here whenever you need help." },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="reasons-grid">
        {reasons.map(({ icon, title, desc }) => (
          <div key={title} className="reason-card">
            <span>{icon}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
