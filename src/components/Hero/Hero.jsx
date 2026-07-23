const Hero = () => {
  return (
    <section className="hero">
      <h1>Discover & Book Amazing Events</h1>
      <p>Find concerts, conferences, workshops, and more near you.</p>
      <div className="hero-actions">
        <input type="text" placeholder="Search events..." />
        <button>Search</button>
      </div>
    </section>
  );
};

export default Hero;
