const Navbar = () => {
  return (
    <nav>
      <div className="logo">EventHub</div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <button>Get Tickets</button>
    </nav>
  );
};

export default Navbar;
