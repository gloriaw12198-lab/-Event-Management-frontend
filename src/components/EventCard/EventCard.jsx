import { Link } from "react-router-dom";
import { HiCalendar, HiClock, HiLocationMarker } from "react-icons/hi";

const EventCard = ({ event }) => {
  const { id, title, category, location, date, time, seats, image } = event;
  const formatted = new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col">
      <div className="relative h-44 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">{category}</span>
      </div>
      <div className="p-4 flex flex-col flex-1 gap-3">
        <h3 className="font-bold text-gray-900 text-base leading-snug">{title}</h3>
        <div className="flex flex-col gap-1.5 text-sm text-gray-500">
          <span className="flex items-center gap-1.5"><HiCalendar className="text-purple-500 w-4 h-4" />{formatted}</span>
          <span className="flex items-center gap-1.5"><HiClock className="text-purple-500 w-4 h-4" />{time}</span>
          <span className="flex items-center gap-1.5"><HiLocationMarker className="text-purple-500 w-4 h-4" />{location}</span>
        </div>
        <p className={`text-xs font-medium mt-auto ${seats < 50 ? "text-red-500" : "text-green-600"}`}>{seats} seats left</p>
        <Link to={`/events/${id}`} className="mt-1 w-full text-center bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
