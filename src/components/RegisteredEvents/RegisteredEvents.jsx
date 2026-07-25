import { Link } from "react-router-dom";
import RegisteredEventCard from "../RegisteredEventCard/RegisteredEventCard";

const RegisteredEvents = ({ events, onCancel }) => (
  <div className="flex flex-col gap-4">
    <h2 className="text-xl font-bold text-gray-900">My Registered Events</h2>

    {events.length === 0 ? (
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col items-center justify-center py-16 px-4 text-center gap-4">
        <span className="text-5xl">🎟️</span>
        <h3 className="text-lg font-semibold text-gray-700">No registered events yet</h3>
        <p className="text-sm text-gray-400">You haven&apos;t registered for any events yet.</p>
        <Link
          to="/events"
          className="mt-2 px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors text-sm"
        >
          Browse Events
        </Link>
      </div>
    ) : (
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <RegisteredEventCard key={event.id} event={event} onCancel={onCancel} />
        ))}
      </div>
    )}
  </div>
);

export default RegisteredEvents;
