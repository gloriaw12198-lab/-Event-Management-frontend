import { useState } from "react";

const faqs = [
  { q: "How do I book a ticket?", a: "Browse events, click 'Book Now', and complete checkout." },
  { q: "Can I get a refund?", a: "Refunds are available up to 48 hours before the event." },
  { q: "How do I receive my ticket?", a: "Tickets are sent to your email after purchase." },
  { q: "Can I transfer my ticket?", a: "Yes, tickets can be transferred via your account dashboard." },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqs.map(({ q, a }, i) => (
        <div key={i} className="faq-item">
          <button onClick={() => setOpen(open === i ? null : i)}>{q}</button>
          {open === i && <p>{a}</p>}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
