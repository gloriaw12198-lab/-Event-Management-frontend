import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiHome, HiCalendar, HiUsers, HiCog, HiLogout, HiMenu, HiX } from "react-icons/hi";

const Sidebar = ({ role = "organizer" }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = {
    organizer: [
      { path: "/organizer", label: "Dashboard", icon: <HiHome className="w-5 h-5" /> },
      { path: "/organizer/events", label: "My Events", icon: <HiCalendar className="w-5 h-5" /> },
      { path: "/organizer/attendees", label: "Attendees", icon: <HiUsers className="w-5 h-5" /> },
      { path: "/organizer/settings", label: "Settings", icon: <HiCog className="w-5 h-5" /> },
    ],
    admin: [
      { path: "/admin", label: "Dashboard", icon: <HiHome className="w-5 h-5" /> },
      { path: "/admin/users", label: "Users", icon: <HiUsers className="w-5 h-5" /> },
      { path: "/admin/events", label: "Events", icon: <HiCalendar className="w-5 h-5" /> },
      { path: "/admin/categories", label: "Categories", icon: <HiCog className="w-5 h-5" /> },
      { path: "/admin/venues", label: "Venues", icon: <HiCalendar className="w-5 h-5" /> },
      { path: "/admin/reports", label: "Reports", icon: <HiUsers className="w-5 h-5" /> },
    ],
  };

  const items = menuItems[role] || menuItems.organizer;

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed bottom-4 right-4 z-50 bg-purple-600 text-white p-3 rounded-full shadow-lg"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 p-4 transform transition-transform duration-300 ease-in-out ${
        mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}>
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900 capitalize">{role} Dashboard</h2>
            <p className="text-sm text-gray-500">Manage your {role} account</p>
          </div>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileOpen(false)}
          >
            <HiX className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <nav className="space-y-2">
          {items.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-purple-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <HiLogout className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;