import { HiCalendar, HiUsers, HiCurrencyDollar, HiTicket } from "react-icons/hi";

const DashboardStats = ({ stats }) => {
  const cards = [
    {
      title: "Total Events",
      value: stats.totalEvents || 0,
      icon: <HiCalendar className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50 border-purple-200",
      trend: stats.eventsTrend || "+0%",
    },
    {
      title: "Upcoming Events",
      value: stats.upcomingEvents || 0,
      icon: <HiTicket className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-50 border-blue-200",
      trend: stats.upcomingTrend || "+0%",
    },
    {
      title: "Total Registrations",
      value: stats.totalRegistrations || 0,
      icon: <HiUsers className="w-8 h-8 text-green-600" />,
      color: "bg-green-50 border-green-200",
      trend: stats.registrationsTrend || "+0%",
    },
    {
      title: "Revenue",
      value: stats.revenue ? `KES ${stats.revenue.toLocaleString()}` : "KES 0",
      icon: <HiCurrencyDollar className="w-8 h-8 text-orange-600" />,
      color: "bg-orange-50 border-orange-200",
      trend: stats.revenueTrend || "+0%",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-white rounded-xl p-4 lg:p-6 border shadow-sm ${card.color}`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${card.color}`}>{card.icon}</div>
            <span className="text-xs lg:text-sm font-medium text-green-600">{card.trend}</span>
          </div>
          <h3 className="text-gray-500 text-xs lg:text-sm font-medium mb-1">{card.title}</h3>
          <p className="text-xl lg:text-2xl font-bold text-gray-900">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;