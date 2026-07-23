const testimonials = [
  { id: 1, name: "Alice M.", text: "Found the best concert tickets here. Super easy!" },
  { id: 2, name: "Brian K.", text: "Booked a workshop in under 2 minutes. Highly recommend." },
  { id: 3, name: "Carol N.", text: "Great variety of events. Will definitely use again." },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What People Say</h2>
      <div className="testimonials-grid">
        {testimonials.map(({ id, name, text }) => (
          <div key={id} className="testimonial-card">
            <p>"{text}"</p>
            <strong>— {name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
