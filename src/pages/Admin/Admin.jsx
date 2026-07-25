import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardStats from "../../components/DashboardStats/DashboardStats";

const Admin = () => {
  // Mock admin stats - In real app, these would come from API
  const stats = {
    totalEvents: 156,
    upcomingEvents: 45,
    totalRegistrations: 2847,
    revenue: 15750000,
    eventsTrend: "+18%",
    upcomingTrend: "+12%",
    registrationsTrend: "+28%",
    revenueTrend: "+22%",
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar role="admin" />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Platform overview and management</p>
        </div>

        <DashboardStats stats={stats} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Platform Overview</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Users</span>
                <span className="font-semibold text-gray-900">1,247</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Active Organizers</span>
                <span className="font-semibold text-gray-900">89</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Categories</span>
                <span className="font-semibold text-gray-900">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Venues</span>
                <span className="font-semibold text-gray-900">34</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Pending Approvals</span>
                <span className="font-semibold text-orange-600">5</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600">✓</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">New user registered</p>
                  <p className="text-sm text-gray-500">Sarah Johnson joined the platform</p>
                </div>
                <span className="ml-auto text-sm text-gray-400">5m ago</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">📝</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Event submitted for approval</p>
                  <p className="text-sm text-gray-500">Music Festival 2026 pending review</p>
                </div>
                <span className="ml-auto text-sm text-gray-400">15m ago</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600">💰</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Revenue milestone reached</p>
                  <p className="text-sm text-gray-500">KES 15M total platform revenue</p>
                </div>
                <span className="ml-auto text-sm text-gray-400">1h ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl p-6 border shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors text-left">
              <div className="text-2xl mb-2">👥</div>
              <p className="font-medium text-gray-900">Manage Users</p>
            </button>
            <button className="p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors text-left">
              <div className="text-2xl mb-2">📅</div>
              <p className="font-medium text-gray-900">Review Events</p>
            </button>
            <button className="p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors text-left">
              <div className="text-2xl mb-2">🏷️</div>
              <p className="font-medium text-gray-900">Categories</p>
            </button>
            <button className="p-4 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition-colors text-left">
              <div className="text-2xl mb-2">📍</div>
              <p className="font-medium text-gray-900">Venues</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;