import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { useToast } from "../../context/ToastContext";

const ManageUsers = () => {
  const { addToast } = useToast();
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, userId: null });
  const [suspendModal, setSuspendModal] = useState({ isOpen: false, userId: null });
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Attendee", status: "Active", joined: "2026-07-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Organizer", status: "Active", joined: "2026-07-10" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Attendee", status: "Suspended", joined: "2026-07-08" },
    { id: 4, name: "Alice Williams", email: "alice@example.com", role: "Organizer", status: "Active", joined: "2026-07-05" },
    { id: 5, name: "Charlie Brown", email: "charlie@example.com", role: "Admin", status: "Active", joined: "2026-07-01" },
  ]);

  const handleDelete = (userId) => {
    setDeleteModal({ isOpen: true, userId });
  };

  const confirmDelete = () => {
    setUsers(users.filter((u) => u.id !== deleteModal.userId));
    setDeleteModal({ isOpen: false, userId: null });
    addToast("User deleted successfully", "success");
  };

  const handleSuspend = (userId) => {
    setSuspendModal({ isOpen: true, userId });
  };

  const confirmSuspend = () => {
    setUsers(users.map((u) => 
      u.id === suspendModal.userId 
        ? { ...u, status: u.status === "Active" ? "Suspended" : "Active" }
        : u
    ));
    setSuspendModal({ isOpen: false, userId: null });
    addToast("User status updated", "success");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar role="admin" />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Users</h1>
          <p className="text-gray-600">View and manage platform users</p>
        </div>

        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">User</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Role</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Status</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Joined</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      user.role === "Admin" 
                        ? "bg-purple-100 text-purple-800"
                        : user.role === "Organizer"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.joined}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                        Edit
                      </button>
                      <button
                        onClick={() => handleSuspend(user.id)}
                        className="text-orange-600 hover:text-orange-800 text-sm font-medium"
                      >
                        {user.status === "Active" ? "Suspend" : "Activate"}
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
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
          onClose={() => setDeleteModal({ isOpen: false, userId: null })}
          title="Delete User"
          size="sm"
        >
          <p className="text-gray-600 mb-6">
            Are you sure you want to delete this user? This action cannot be undone.
          </p>
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => setDeleteModal({ isOpen: false, userId: null })}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button onClick={confirmDelete} className="flex-1">
              Delete
            </Button>
          </div>
        </Modal>

        <Modal
          isOpen={suspendModal.isOpen}
          onClose={() => setSuspendModal({ isOpen: false, userId: null })}
          title="Change User Status"
          size="sm"
        >
          <p className="text-gray-600 mb-6">
            Are you sure you want to change this user's status?
          </p>
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => setSuspendModal({ isOpen: false, userId: null })}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button onClick={confirmSuspend} className="flex-1">
              Confirm
            </Button>
          </div>
        </Modal>
      </main>
    </div>
  );
};

export default ManageUsers;