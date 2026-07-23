import { useState } from "react";
import { HiMail } from "react-icons/hi";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16 px-4 text-center">
      <HiMail className="w-10 h-10 text-white/80 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-white mb-2">Stay in the Loop</h2>
      <p className="text-purple-200 text-sm mb-6 max-w-md mx-auto">Subscribe and be the first to know about new events and exclusive offers.</p>
      {subscribed ? (
        <p className="text-white font-semibold">🎉 You&apos;re subscribed!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required
            className="flex-1 px-4 py-3 rounded-full text-sm outline-none bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:ring-2 focus:ring-white/40" />
          <button type="submit" className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-full hover:shadow-lg transition">Subscribe</button>
        </form>
      )}
    </section>
  );
};

export default Newsletter;
