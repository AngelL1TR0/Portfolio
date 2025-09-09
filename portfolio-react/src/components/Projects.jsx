import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Proyecto 1',
      description: 'Una descripción breve del Proyecto 1. Fue un proyecto interesante donde aprendí mucho.',
      link: '#'
    },
    {
      id: 2,
      name: 'Proyecto 2',
      description: 'Una descripción breve del Proyecto 2. Este proyecto me permitió aplicar mis habilidades en X y Y.',
      link: '#'
    },
    {
      id: 3,
      name: 'Proyecto 3',
      description: 'Una descripción breve del Proyecto 3. Un desafío divertido que resolví con Z.',
      link: '#'
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;