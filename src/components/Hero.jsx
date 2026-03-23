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
        <div className="hero-visual">
          <div className="hero-avatar">
            <img
              src="/Picsart_23-02-16_14-25-48-132.jpg"
              alt="Profile portrait"
              className="hero-photo"
            />
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a href="#" className="hero-social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56A1.97 1.97 0 0 0 5.19 3 1.98 1.98 0 1 0 5.14 7a1.98 1.98 0 0 0 2.02-2.06ZM20.44 12.95c0-3.47-1.85-5.08-4.32-5.08a3.73 3.73 0 0 0-3.36 1.85V8.5H9.38c.04.81 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.13-.92a2.22 2.22 0 0 1 2.08-1.48c1.47 0 2.06 1.12 2.06 2.77V20h3.38Z" />
              </svg>
            </a>
            <a href="#" className="hero-social-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42A3.18 3.18 0 0 0 3.66 18c-1.09-.75.08-.73.08-.73a2.52 2.52 0 0 1 1.84 1.23a2.56 2.56 0 0 0 3.5 1a2.56 2.56 0 0 1 .76-1.61c-2.67-.3-5.47-1.34-5.47-5.95A4.65 4.65 0 0 1 5.61 8.7a4.32 4.32 0 0 1 .12-3.18s1-.32 3.3 1.22a11.4 11.4 0 0 1 6 0c2.28-1.54 3.29-1.22 3.29-1.22a4.32 4.32 0 0 1 .12 3.18a4.64 4.64 0 0 1 1.23 3.22c0 4.62-2.8 5.64-5.48 5.94a2.87 2.87 0 0 1 .82 2.23v3.31c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z" />
              </svg>
            </a>
            <a href="#" className="hero-social-link" aria-label="Behance">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9.64 11.55a2.77 2.77 0 0 0 1.81-2.62C11.45 6.44 9.4 5 6.82 5H1.5v14h5.45c2.84 0 5.06-1.34 5.06-4.3c0-1.92-1.1-2.91-2.37-3.15ZM4.4 7.36h2.22c.9 0 1.8.24 1.8 1.35c0 1-.76 1.43-1.66 1.43H4.4Zm2.36 9.27H4.4v-4.1h2.5c1.03 0 2.12.3 2.12 1.9c0 1.45-1.01 2.2-2.26 2.2Zm8.16-8.52h4.84V6.93h-4.84Zm4.96 7.12a3.77 3.77 0 0 1-3.05 1.45c-1.72 0-3.2-.91-3.37-2.92h6.9c.21-3.46-1.61-5.65-4.97-5.65c-3.12 0-5.08 2.33-5.08 5.4c0 3.17 1.9 5.33 5.1 5.33c2.45 0 4.2-1.09 4.84-3.6Zm-3.5-5.08c1.3 0 2.17.72 2.22 2.03h-4.56c.2-1.23 1.08-2.03 2.34-2.03Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
