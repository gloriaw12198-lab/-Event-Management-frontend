const upcoming = [
  { id: 1, title: "Startup Pitch Night", date: "Apr 3", location: "Nairobi" },
  { id: 2, title: "Jazz Evening", date: "Apr 10", location: "Mombasa" },
  { id: 3, title: "Photography Workshop", date: "Apr 18", location: "Nakuru" },
  { id: 4, title: "Food & Wine Expo", date: "May 1", location: "Nairobi" },
];

const UpcomingEvents = () => {
  return (
    <section className="upcoming-events">
      <h2>Upcoming Events</h2>
      <ul>
        {upcoming.map(({ id, title, date, location }) => (
          <li key={id}>
            <span className="date">{date}</span>
            <div>
              <strong>{title}</strong>
              <p>{location}</p>
            </div>
            <button>View</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UpcomingEvents;
