import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import EventBanner from "../../components/EventBanner/EventBanner";
import EventInfo from "../../components/EventInfo/EventInfo";
import EventSchedule from "../../components/EventSchedule/EventSchedule";
import VenueCard from "../../components/VenueCard/VenueCard";
import RegisterButton from "../../components/RegisterButton/RegisterButton";
import SimilarEvents from "../../components/SimilarEvents/SimilarEvents";
import EVENTS from "../../data/events";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = EVENTS.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-4">
          <span className="text-6xl">🔍</span>
          <h2 className="text-2xl font-bold text-gray-800">Event not found</h2>
          <p className="text-gray-500">The event you're looking for doesn't exist.</p>
          <button onClick={() => navigate("/events")} className="mt-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Browse Events
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Back link */}
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-purple-600 hover:underline mb-6">
          ← Back
        </button>

        {/* Banner */}
        <div className="mb-8">
          <EventBanner image={event.image} title={event.title} />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left — main content */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <EventInfo event={event} />
            <EventSchedule schedule={event.schedule} />
            <VenueCard venue={event.venue} location={event.location} />
          </div>

          {/* Right — sticky register */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 flex flex-col gap-4">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-600">
                    {event.price === 0 ? "Free" : `Ksh ${event.price.toLocaleString()}`}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">per person</p>
                </div>
                <div className="flex justify-between text-sm text-gray-600 border-t border-gray-100 pt-4">
                  <span>Available Seats</span>
                  <span className={`font-semibold ${event.seats < 50 ? "text-red-500" : "text-green-600"}`}>
                    {event.seats}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Capacity</span>
                  <span className="font-semibold text-gray-800">{event.capacity}</span>
                </div>
                <RegisterButton eventId={event.id} price={event.price} />
              </div>
            </div>
          </div>
        </div>

        {/* Similar Events */}
        <div className="mt-12">
          <SimilarEvents currentId={event.id} category={event.category} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetails;
