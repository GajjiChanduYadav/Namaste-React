

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>We are a leading online food delivery service, bringing your favorite meals straight to your doorstep.</p>
          <p>Our mission is to provide fast, reliable, and delicious food delivery service to our customers.</p>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <ul>
            <li>Email: anna@example.com</li>
            <li>Phone: +1 (800) 123-4567</li>
            <li>Address: 123 Foodie Lane, Culinary City, CA 12345</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li>Menu</li>
            <li>Order Online</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <ul className="social-media">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
       <marquee behavior="" direction="right"><p>&copy; 2024 Anna Delivery App. All Rights Reserved.</p></marquee> 
      </div>
    </footer>
  );
};

export default Footer;
