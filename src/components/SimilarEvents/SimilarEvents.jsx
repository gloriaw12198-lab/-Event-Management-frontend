import EventCard from "../EventCard/EventCard";
import EVENTS from "../../data/events";

const SimilarEvents = ({ currentId, category }) => {
  const similar = EVENTS.filter((e) => e.category === category && e.id !== currentId).slice(0, 3);

  if (!similar.length) return null;

  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 mb-4">Similar Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {similar.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default SimilarEvents;
