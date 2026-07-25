import Sidebar from "../../components/Sidebar/Sidebar";

const Reports = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar role="admin" />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
          <p className="text-gray-600">Platform performance insights and reports</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular Events</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Tech Conference 2026</p>
                  <p className="text-sm text-gray-500">Technology</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">245 registrations</p>
                  <p className="text-sm text-green-600">+18%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Afrobeats Festival</p>
                  <p className="text-sm text-gray-500">Music</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">198 registrations</p>
                  <p className="text-sm text-green-600">+25%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Food & Wine Expo</p>
                  <p className="text-sm text-gray-500">Food</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">156 registrations</p>
                  <p className="text-sm text-green-600">+12%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Registration Trends</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">This Week</span>
                <span className="font-semibold text-gray-900">342 registrations</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Last Week</span>
                <span className="font-semibold text-gray-900">289 registrations</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">This Month</span>
                <span className="font-semibold text-gray-900">1,247 registrations</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Last Month</span>
                <span className="font-semibold text-gray-900">1,089 registrations</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">By Category</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Technology</span>
                <span className="font-semibold text-gray-900">35%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "35%" }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Music</span>
                <span className="font-semibold text-gray-900">28%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "28%" }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Business</span>
                <span className="font-semibold text-gray-900">18%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: "18%" }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Others</span>
                <span className="font-semibold text-gray-900">19%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: "19%" }}></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">By Location</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Nairobi</span>
                <span className="font-semibold text-gray-900">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "45%" }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Mombasa</span>
                <span className="font-semibold text-gray-900">22%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "22%" }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Kisumu</span>
                <span className="font-semibold text-gray-900">18%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: "18%" }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Nakuru</span>
                <span className="font-semibold text-gray-900">15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: "15%" }}></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue Distribution</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">VIP Tickets</span>
                <span className="font-semibold text-gray-900">KES 8.5M</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "55%" }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Regular Tickets</span>
                <span className="font-semibold text-gray-900">KES 5.2M</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "35%" }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Early Bird</span>
                <span className="font-semibold text-gray-900">KES 2.0M</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: "10%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Organizers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">1</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Tech Hub Africa</p>
                  <p className="text-sm text-gray-500">12 events</p>
                </div>
              </div>
              <p className="text-sm text-green-600 font-semibold">KES 4.5M revenue</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Coast Music Events</p>
                  <p className="text-sm text-gray-500">8 events</p>
                </div>
              </div>
              <p className="text-sm text-green-600 font-semibold">KES 3.2M revenue</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">3</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Nairobi Culinary Guild</p>
                  <p className="text-sm text-gray-500">6 events</p>
                </div>
              </div>
              <p className="text-sm text-green-600 font-semibold">KES 2.8M revenue</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reports;