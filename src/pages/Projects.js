import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Growth Strategy",
      client: "Fashion Retailer",
      description:
        "Increased online sales by 150% through targeted digital marketing",
      image: "/images/project1.jpg",
      tags: ["Digital Marketing", "SEO", "Social Media"],
    },
    {
      id: 2,
      title: "Brand Transformation",
      client: "Tech Startup",
      description:
        "Complete brand overhaul resulting in 200% increase in brand recognition",
      image: "/images/project2.jpg",
      tags: ["Branding", "Content Strategy", "Design"],
    },
    {
      id: 3,
      title: "Market Expansion Campaign",
      client: "Food & Beverage",
      description: "Successful market entry strategy for 3 new regions",
      image: "/images/project3.jpg",
      tags: ["Market Analysis", "Strategy", "Campaigns"],
    },
  ];

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <h1>Our Projects</h1>
        <p>Showcasing our best work and success stories</p>
      </section>

      <section className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="client">Client: {project.client}</p>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
