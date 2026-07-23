import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPaperAirplane } from 'react-icons/hi';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-r from-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon */}
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <HiMail className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg text-purple-200 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and be the first to know about new events,
            exclusive offers, and more.
          </p>

          {/* Subscription Form */}
          {!subscribed ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-4 max-w-lg mx-auto"
            >
              <div className="relative flex-1 w-full">
                <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-purple-600 font-semibold rounded-full hover:shadow-xl hover:shadow-purple-300/30 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Subscribe
                <HiPaperAirplane className="w-4 h-4 rotate-90" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto"
            >
              <p className="text-white text-lg font-semibold">
                🎉 You&apos;re subscribed!
              </p>
              <p className="text-purple-200 text-sm mt-1">
                Thanks for joining our newsletter.
              </p>
            </motion.div>
          )}

          <p className="text-purple-300 text-sm mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
