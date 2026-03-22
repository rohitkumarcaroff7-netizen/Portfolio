export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern storefront with a polished shopping flow and responsive product discovery.',
      tags: ['React', 'UI/UX Design', 'Responsive'],
      image: 'Shop'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative planning tool with a clear dashboard, strong hierarchy, and quick actions.',
      tags: ['React', 'Design System', 'Web App'],
      image: 'Task'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A visual portfolio that highlights design thinking, frontend craft, and personal branding.',
      tags: ['React', 'Personal Project', 'Responsive'],
      image: 'Port'
    },
    {
      id: 4,
      title: 'Mobile App Design',
      description: 'A mobile-first interface system built for consistency, clarity, and smooth user flows.',
      tags: ['Figma', 'Mobile', 'Design System'],
      image: 'App'
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span className="project-mark">{project.image}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <a href="#" className="project-link">View Case Study -&gt;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
