const EventSchedule = ({ schedule }) => (
  <div>
    <h2 className="text-lg font-bold text-gray-900 mb-4">Schedule</h2>
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-purple-50">
          <tr>
            <th className="text-left px-5 py-3 text-purple-700 font-semibold w-32">Time</th>
            <th className="text-left px-5 py-3 text-purple-700 font-semibold">Activity</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map(({ time, activity }, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-5 py-3 text-purple-600 font-medium whitespace-nowrap">{time}</td>
              <td className="px-5 py-3 text-gray-700">{activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default EventSchedule;
