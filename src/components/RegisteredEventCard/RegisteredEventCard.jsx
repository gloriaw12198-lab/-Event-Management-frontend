import { Link } from "react-router-dom";
import { HiCalendar, HiLocationMarker, HiCheckCircle } from "react-icons/hi";

const RegisteredEventCard = ({ event, onCancel }) => {
  const { id, title, date, location, image } = event;

  const formatted = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric", month: "short", year: "numeric",
  });

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col sm:flex-row">
      <div className="sm:w-36 h-36 sm:h-auto shrink-0 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col flex-1 p-4 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-gray-900 text-base leading-snug">{title}</h3>
          <span className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full shrink-0">
            <HiCheckCircle className="w-3.5 h-3.5" /> Registered
          </span>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <HiCalendar className="text-purple-500 w-4 h-4" />{formatted}
          </span>
          <span className="flex items-center gap-1.5">
            <HiLocationMarker className="text-purple-500 w-4 h-4" />{location}
          </span>
        </div>

        <div className="flex gap-2 mt-auto">
          <Link
            to={`/events/${id}`}
            className="flex-1 text-center text-sm font-semibold py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
          >
            View Details
          </Link>
          <button
            onClick={() => onCancel(id)}
            className="flex-1 text-sm font-semibold py-2 border border-red-300 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
          >
            Cancel Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisteredEventCard;
