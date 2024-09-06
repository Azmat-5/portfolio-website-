import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { name: 'Project 1', description: 'A web app that...', link: 'https://counter-iota-two.vercel.app/' },
    { name: 'Project 2', description: 'A mobile app that...', link: 'https://github.com/' }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
