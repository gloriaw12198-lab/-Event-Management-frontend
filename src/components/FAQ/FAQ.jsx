import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const FAQS = [
  { q: "How do I book a ticket?", a: "Browse events, click 'View Details', then complete checkout." },
  { q: "Can I get a refund?", a: "Refunds are available up to 48 hours before the event." },
  { q: "How do I receive my ticket?", a: "Tickets are sent to your email after purchase." },
  { q: "Can I transfer my ticket?", a: "Yes, tickets can be transferred via your account dashboard." },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-3">
          {FAQS.map(({ q, a }, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-gray-900 hover:bg-gray-50">
                {q}
                <HiChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-5 pb-4 text-sm text-gray-500">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
