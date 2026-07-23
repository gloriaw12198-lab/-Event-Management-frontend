import { Link } from "react-router-dom";
import { HiCalendar, HiLocationMarker } from "react-icons/hi";
import EVENTS from "../../data/events";

const UpcomingEvents = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h2 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
    <ul className="flex flex-col gap-4">
      {EVENTS.slice(3, 7).map(({ id, title, date, location }) => (
        <li key={id} className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-gray-900">{title}</span>
            <div className="flex gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1"><HiCalendar className="text-purple-500" />{new Date(date).toDateString()}</span>
              <span className="flex items-center gap-1"><HiLocationMarker className="text-purple-500" />{location}</span>
            </div>
          </div>
          <Link to={`/events/${id}`} className="text-sm font-medium text-purple-600 hover:underline shrink-0">View →</Link>
        </li>
      ))}
    </ul>
  </section>
);

export default UpcomingEvents;
