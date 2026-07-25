import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useAuth } from "../../context/AuthContext";
import Avatar from "../Avatar/Avatar";

const Navbar = () => {
  const { user, logout, profile } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-purple-600">EventHub</Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-purple-600" : "hover:text-purple-600"}>Home</NavLink>
          <NavLink to="/events" className={({ isActive }) => isActive ? "text-purple-600" : "hover:text-purple-600"}>Events</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-purple-600" : "hover:text-purple-600"}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-purple-600" : "hover:text-purple-600"}>Contact</NavLink>
        </div>

        {/* Desktop User Actions */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link to="/profile" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Avatar src={profile?.avatar} name={profile?.fullName} size="sm" />
                <span className="text-sm font-medium text-gray-700">{profile?.fullName?.split(" ")[0]}</span>
              </Link>
              <button onClick={logout} className="text-sm text-gray-500 hover:text-red-500 font-medium transition-colors">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-purple-600">Login</Link>
              <Link to="/register" className="text-sm font-semibold bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX className="w-6 h-6 text-gray-600" /> : <HiMenu className="w-6 h-6 text-gray-600" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `block py-2 text-sm font-medium ${isActive ? "text-purple-600" : "text-gray-600 hover:text-purple-600"}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/events"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `block py-2 text-sm font-medium ${isActive ? "text-purple-600" : "text-gray-600 hover:text-purple-600"}`}
            >
              Events
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `block py-2 text-sm font-medium ${isActive ? "text-purple-600" : "text-gray-600 hover:text-purple-600"}`}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `block py-2 text-sm font-medium ${isActive ? "text-purple-600" : "text-gray-600 hover:text-purple-600"}`}
            >
              Contact
            </NavLink>
            <div className="pt-3 border-t border-gray-100">
              {user ? (
                <>
                  <Link
                    to="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 py-2 text-sm font-medium text-gray-700"
                  >
                    <Avatar src={profile?.avatar} name={profile?.fullName} size="sm" />
                    <span>{profile?.fullName?.split(" ")[0]}</span>
                  </Link>
                  <button
                    onClick={() => { logout(); setMobileMenuOpen(false); }}
                    className="block py-2 text-sm text-gray-500 hover:text-red-500 font-medium transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm font-medium text-gray-600 hover:text-purple-600"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm font-semibold bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-center"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
