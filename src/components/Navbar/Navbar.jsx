import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-purple-600">EventHub</Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-purple-600" : "hover:text-purple-600"}>Home</NavLink>
          <NavLink to="/events" className={({ isActive }) => isActive ? "text-purple-600" : "hover:text-purple-600"}>Events</NavLink>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <button onClick={logout} className="text-sm text-gray-600 hover:text-red-500 font-medium">Logout</button>
          ) : (
            <>
              <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-purple-600">Login</Link>
              <Link to="/register" className="text-sm font-semibold bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
