import EventCard from "../EventCard/EventCard";
import EVENTS from "../../data/events";
import { Link } from "react-router-dom";

const FeaturedEvents = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-2xl font-bold text-gray-900">Featured Events</h2>
      <Link to="/events" className="text-sm text-purple-600 font-medium hover:underline">View all →</Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {EVENTS.slice(0, 3).map((event) => <EventCard key={event.id} event={event} />)}
    </div>
  </section>
);

export default FeaturedEvents;
