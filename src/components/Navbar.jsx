export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">Rohit Kumar Mahanta</h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">HOME</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">ABOUT</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">PROJECTS</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
