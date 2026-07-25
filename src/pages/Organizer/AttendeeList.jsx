import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import EVENTS from "../../data/events";

const AttendeeList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    // In real app, fetch attendees from API
    const eventData = EVENTS.find((e) => e.id === parseInt(id));
    if (eventData) {
      setEvent(eventData);
      // Mock attendees data
      setAttendees([
        { id: 1, name: "John Doe", email: "john@example.com", ticketType: "VIP", registrationDate: "2026-07-20" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", ticketType: "Regular", registrationDate: "2026-07-21" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", ticketType: "VIP", registrationDate: "2026-07-22" },
        { id: 4, name: "Alice Williams", email: "alice@example.com", ticketType: "Regular", registrationDate: "2026-07-23" },
        { id: 5, name: "Charlie Brown", email: "charlie@example.com", ticketType: "VIP", registrationDate: "2026-07-24" },
      ]);
    }
  }, [id]);

  if (!event) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar role="organizer" />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => navigate("/organizer/events")}
            className="mb-4"
          >
            ← Back to Events
          </Button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{event.title}</h1>
          <p className="text-gray-600">View and manage event attendees</p>
        </div>

        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
          <div className="p-6 border-b bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Registered Attendees</h2>
                <p className="text-sm text-gray-500">{attendees.length} people registered</p>
              </div>
              <Button>Export List</Button>
            </div>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Name</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Email</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Ticket Type</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Registration Date</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {attendees.map((attendee) => (
                <tr key={attendee.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{attendee.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{attendee.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      attendee.ticketType === "VIP" 
                        ? "bg-purple-100 text-purple-800" 
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {attendee.ticketType}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{attendee.registrationDate}</td>
                  <td className="px-6 py-4">
                    <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AttendeeList;