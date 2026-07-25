import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      <div>
        <h3 className="text-white font-bold text-lg mb-2">EventHub</h3>
        <p className="text-sm">Your go-to platform for discovering and booking events.</p>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-3 text-sm">Quick Links</h4>
        <ul className="flex flex-col gap-2 text-sm">
          <li><Link to="/" className="hover:text-white">Home</Link></li>
          <li><Link to="/events" className="hover:text-white">Events</Link></li>
          <li><Link to="/about" className="hover:text-white">About</Link></li>
          <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-3 text-sm">Support</h4>
        <ul className="flex flex-col gap-2 text-sm">
          <li><a href="#" className="hover:text-white">FAQ</a></li>
          <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-3 text-sm">Follow Us</h4>
        <ul className="flex flex-col gap-2 text-sm">
          <li><a href="#" className="hover:text-white">Twitter</a></li>
          <li><a href="#" className="hover:text-white">Instagram</a></li>
          <li><a href="#" className="hover:text-white">Facebook</a></li>
        </ul>
      </div>
    </div>
    <p className="text-center text-xs border-t border-gray-800 pt-6">
      © {new Date().getFullYear()} EventHub. All rights reserved.
    </p>
  </footer>
);

export default Footer;
