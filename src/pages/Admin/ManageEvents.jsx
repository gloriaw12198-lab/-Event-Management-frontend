import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { useToast } from "../../context/ToastContext";
import EVENTS from "../../data/events";

const ManageEvents = () => {
  const { addToast } = useToast();
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, eventId: null });
  const [events, setEvents] = useState(EVENTS);

  const handleDelete = (eventId) => {
    setDeleteModal({ isOpen: true, eventId });
  };

  const confirmDelete = () => {
    setEvents(events.filter((e) => e.id !== deleteModal.eventId));
    setDeleteModal({ isOpen: false, eventId: null });
    addToast("Event deleted successfully", "success");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar role="admin" />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Events</h1>
          <p className="text-gray-600">Review and manage all platform events</p>
        </div>

        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Event</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Organizer</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Date</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Status</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{event.title}</p>
                        <p className="text-sm text-gray-500">{event.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{event.organizer || "Unknown"}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{event.date}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      Published
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                        View
                      </button>
                      <button className="text-orange-600 hover:text-orange-800 text-sm font-medium">
                        Approve
                      </button>
                      <button
                        onClick={() => handleDelete(event.id)}
                        className="text-red-600 hover:text-red-800 text-sm font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Modal
          isOpen={deleteModal.isOpen}
          onClose={() => setDeleteModal({ isOpen: false, eventId: null })}
          title="Delete Event"
          size="sm"
        >
          <p className="text-gray-600 mb-6">
            Are you sure you want to delete this event? This action cannot be undone.
          </p>
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => setDeleteModal({ isOpen: false, eventId: null })}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button onClick={confirmDelete} className="flex-1">
              Delete
            </Button>
          </div>
        </Modal>
      </main>
    </div>
  );
};

export default ManageEvents;