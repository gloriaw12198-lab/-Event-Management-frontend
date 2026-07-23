import { Link } from "react-router-dom";

const Hero = () => (
  <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-24 px-4 text-center">
    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Discover & Book Amazing Events</h1>
    <p className="text-lg text-purple-200 mb-8 max-w-xl mx-auto">Find concerts, conferences, workshops, and more near you.</p>
    <Link to="/events" className="inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-full hover:shadow-lg transition">
      Browse Events
    </Link>
  </section>
);

export default Hero;
