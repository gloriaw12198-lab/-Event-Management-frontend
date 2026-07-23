const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>EventHub</h3>
          <p>Your go-to platform for discovering and booking events.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Categories</a></li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </div>
      <p className="footer-bottom">© {new Date().getFullYear()} EventHub. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
