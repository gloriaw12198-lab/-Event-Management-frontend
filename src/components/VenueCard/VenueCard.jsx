import { HiLocationMarker } from "react-icons/hi";

const VenueCard = ({ venue, location }) => (
  <div>
    <h2 className="text-lg font-bold text-gray-900 mb-4">Venue</h2>
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col gap-3">
      <div className="flex items-start gap-3">
        <HiLocationMarker className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
        <div>
          <p className="font-semibold text-gray-900">{venue}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      {/* Map placeholder */}
      <div className="w-full h-40 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl flex items-center justify-center border border-purple-100">
        <div className="text-center">
          <HiLocationMarker className="w-8 h-8 text-purple-400 mx-auto mb-1" />
          <p className="text-xs text-purple-400 font-medium">Map coming soon</p>
        </div>
      </div>
    </div>
  </div>
);

export default VenueCard;
