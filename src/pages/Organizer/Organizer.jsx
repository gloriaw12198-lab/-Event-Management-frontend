import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardStats from "../../components/DashboardStats/DashboardStats";
import { useAuth } from "../../context/AuthContext";

const Organizer = () => {
  const { profile } = useAuth();

  // Mock stats - In real app, these would come from API
  const stats = {
    totalEvents: 12,
    upcomingEvents: 5,
    totalRegistrations: 342,
    revenue: 1250000,
    eventsTrend: "+12%",
    upcomingTrend: "+8%",
    registrationsTrend: "+23%",
    revenueTrend: "+15%",
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar role="organizer" />
      <main className="flex-1 p-4 lg:p-8">
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {profile?.fullName?.split(" ")[0] || "Organizer"}!
          </h1>
          <p className="text-gray-600">Here's what's happening with your events today.</p>
        </div>

        <DashboardStats stats={stats} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600">✓</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">New registration</p>
                  <p className="text-sm text-gray-500">John Doe registered for Tech Conference</p>
                </div>
                <span className="ml-auto text-sm text-gray-400">2m ago</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">📝</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Event updated</p>
                  <p className="text-sm text-gray-500">Jazz Night Live details changed</p>
                </div>
                <span className="ml-auto text-sm text-gray-400">1h ago</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600">💰</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Payment received</p>
                  <p className="text-sm text-gray-500">KES 15,000 from event registrations</p>
                </div>
                <span className="ml-auto text-sm text-gray-400">3h ago</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors text-left">
                <div className="text-2xl mb-2">➕</div>
                <p className="font-medium text-gray-900">Create Event</p>
                <p className="text-sm text-gray-500">Start a new event</p>
              </button>
              <button className="p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors text-left">
                <div className="text-2xl mb-2">📊</div>
                <p className="font-medium text-gray-900">View Reports</p>
                <p className="text-sm text-gray-500">Analytics & insights</p>
              </button>
              <button className="p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors text-left">
                <div className="text-2xl mb-2">👥</div>
                <p className="font-medium text-gray-900">Manage Events</p>
                <p className="text-sm text-gray-500">Edit your events</p>
              </button>
              <button className="p-4 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition-colors text-left">
                <div className="text-2xl mb-2">🎫</div>
                <p className="font-medium text-gray-900">Attendees</p>
                <p className="text-sm text-gray-500">View registrations</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Organizer;