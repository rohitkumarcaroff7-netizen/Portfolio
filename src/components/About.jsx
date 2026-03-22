export default function About() {
  const skills = [
    {
      category: "Design",
      skills: ["UI/UX Design", "Wireframing", "Prototyping", "Figma"],
    },
    { category: "Frontend", skills: ["React", "JavaScript", "CSS", "HTML"] },
    { category: "Tools", skills: ["Figma", "Adobe XD", "VS Code", "Git"] },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate UI/UX designer and developer with a keen eye for
              detail and a love for creating seamless user experiences. With
              expertise in both design and development, I bridge the gap between
              aesthetics and functionality.
            </p>
            <p>
              My journey combines design thinking with technical implementation,
              allowing me to create digital products that are not only beautiful
              but also highly functional and user-centric.
            </p>
          </div>
          <div className="skills-container">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="skill-group">
                <h3>{skillGroup.category}</h3>
                <div className="skill-tags">
                  {skillGroup.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
