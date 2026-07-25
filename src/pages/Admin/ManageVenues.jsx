import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input/Input";
import { useToast } from "../../context/ToastContext";

const ManageVenues = () => {
  const { addToast } = useToast();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingVenue, setEditingVenue] = useState(null);
  const [venues, setVenues] = useState([
    { id: 1, name: "Nairobi Convention Centre", location: "Nairobi", capacity: 5000, events: 45 },
    { id: 2, name: "Serena Beach Hotel", location: "Mombasa", capacity: 2000, events: 32 },
    { id: 3, name: "Kisumu Museum Gallery", location: "Kisumu", capacity: 500, events: 28 },
    { id: 4, name: "iHub Nairobi", location: "Nairobi", capacity: 300, events: 19 },
    { id: 5, name: "Nakuru Stadium", location: "Nakuru", capacity: 10000, events: 15 },
  ]);
  const [form, setForm] = useState({ name: "", location: "", capacity: "" });

  const handleAdd = () => {
    setEditingVenue(null);
    setForm({ name: "", location: "", capacity: "" });
    setModalOpen(true);
  };

  const handleEdit = (venue) => {
    setEditingVenue(venue);
    setForm({ name: venue.name, location: venue.location, capacity: venue.capacity });
    setModalOpen(true);
  };

  const handleDelete = (venueId) => {
    setVenues(venues.filter((v) => v.id !== venueId));
    addToast("Venue deleted successfully", "success");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingVenue) {
      setVenues(venues.map((v) => 
        v.id === editingVenue.id ? { ...v, ...form, capacity: parseInt(form.capacity) } : v
      ));
      addToast("Venue updated successfully", "success");
    } else {
      const newVenue = {
        id: Date.now(),
        name: form.name,
        location: form.location,
        capacity: parseInt(form.capacity),
        events: 0,
      };
      setVenues([...venues, newVenue]);
      addToast("Venue added successfully", "success");
    }
    setModalOpen(false);
    setForm({ name: "", location: "", capacity: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar role="admin" />
      <main className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Venues</h1>
            <p className="text-gray-600">Create and manage event venues</p>
          </div>
          <Button onClick={handleAdd}>+ Add Venue</Button>
        </div>

        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Venue</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Location</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Capacity</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Events</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {venues.map((venue) => (
                <tr key={venue.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{venue.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{venue.location}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{venue.capacity.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{venue.events}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(venue)}
                        className="text-purple-600 hover:text-purple-800 text-sm font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(venue.id)}
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
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={editingVenue ? "Edit Venue" : "Add Venue"}
          size="sm"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Venue Name"
              name="name"
              placeholder="Enter venue name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Location</label>
              <select
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-purple-500 transition-colors"
                required
              >
                <option value="">Select location</option>
                <option value="Nairobi">Nairobi</option>
                <option value="Mombasa">Mombasa</option>
                <option value="Kisumu">Kisumu</option>
                <option value="Nakuru">Nakuru</option>
              </select>
            </div>
            <Input
              label="Capacity"
              name="capacity"
              type="number"
              placeholder="Maximum capacity"
              value={form.capacity}
              onChange={(e) => setForm({ ...form, capacity: e.target.value })}
              required
            />
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setModalOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                {editingVenue ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Modal>
      </main>
    </div>
  );
};

export default ManageVenues;