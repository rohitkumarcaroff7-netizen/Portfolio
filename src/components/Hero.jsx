export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-kicker">Available for freelance work</p>
        <h1 className="hero-title">
          Building <span className="accent-text">clean</span>, thoughtful
          digital experiences
        </h1>
        <p className="hero-subtitle">
          I blend UI design and frontend development to create polished products
          that feel intuitive from the first click.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>
        <div className="hero-meta">
          <div className="hero-stat">
            <strong>4+</strong>
            <span>Featured portfolio projects</span>
          </div>
          <div className="hero-stat">
            <strong>UI + Code</strong>
            <span>Design systems built with React</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-avatar">
          <img
            src="/Picsart_23-02-16_14-25-48-132.jpg"
            alt="Profile portrait"
            className="hero-photo"
          />
        </div>
      </div>
    </section>
  );
}
