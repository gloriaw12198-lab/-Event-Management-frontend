import { HiCalendar, HiClock, HiLocationMarker, HiUser, HiTicket, HiUserGroup } from "react-icons/hi";

const EventInfo = ({ event }) => {
  const { category, date, time, location, venue, organizer, price, capacity, seats, description } = event;

  const formatted = new Date(date).toLocaleDateString("en-GB", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  const rows = [
    { icon: <HiCalendar className="w-5 h-5 text-purple-500" />, label: "Date", value: formatted },
    { icon: <HiClock className="w-5 h-5 text-purple-500" />, label: "Time", value: time },
    { icon: <HiLocationMarker className="w-5 h-5 text-purple-500" />, label: "Venue", value: `${venue}, ${location}` },
    { icon: <HiUser className="w-5 h-5 text-purple-500" />, label: "Organizer", value: organizer },
    { icon: <HiUserGroup className="w-5 h-5 text-purple-500" />, label: "Capacity", value: `${capacity} attendees` },
    { icon: <HiTicket className="w-5 h-5 text-purple-500" />, label: "Available Seats", value: seats },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Category & Rating */}
      <div className="flex items-center gap-3">
        <span className="bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full">{category}</span>
        <span className="text-yellow-400 text-lg">★★★★★</span>
      </div>

      {/* Meta rows */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-4 shadow-sm">
        {rows.map(({ icon, label, value }) => (
          <div key={label} className="flex items-start gap-3">
            <span className="mt-0.5 shrink-0">{icon}</span>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
              <p className="text-sm text-gray-800 font-medium">{value}</p>
            </div>
          </div>
        ))}

        {/* Price */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm text-gray-500 font-medium">Price</span>
          <span className="text-xl font-bold text-purple-600">
            {price === 0 ? "Free" : `Ksh ${price.toLocaleString()}`}
          </span>
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-2">About this Event</h2>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default EventInfo;
