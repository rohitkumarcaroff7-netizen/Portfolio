export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>My Portfolio</h3>
            <p>
              UI/UX Designer & Developer crafting beautiful digital experiences
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Me</h4>
            <div className="social-links">
              <a href="#" className="social-link">
                LinkedIn
              </a>
              <a href="#" className="social-link">
                GitHub
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
              <a href="#" className="social-link">
                Dribbble
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
