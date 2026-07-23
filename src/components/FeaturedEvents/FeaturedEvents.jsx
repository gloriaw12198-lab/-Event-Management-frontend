const events = [
  { id: 1, title: "Tech Summit 2025", date: "Jan 20", location: "Nairobi", price: "$49" },
  { id: 2, title: "Music Festival", date: "Feb 5", location: "Mombasa", price: "$30" },
  { id: 3, title: "Art Exhibition", date: "Mar 12", location: "Kisumu", price: "Free" },
];

const FeaturedEvents = () => {
  return (
    <section className="featured-events">
      <h2>Featured Events</h2>
      <div className="events-grid">
        {events.map(({ id, title, date, location, price }) => (
          <div key={id} className="event-card">
            <h3>{title}</h3>
            <p>{date} · {location}</p>
            <span>{price}</span>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedEvents;
