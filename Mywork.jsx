import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const projects = [
  
  {
    title: 'E-commerce Dashboard',
    technologies: ['React', 'Tailwind CSS', 'Chart.js', 'Redux'],
    description:
      'A responsive admin dashboard for an e-commerce platform with data visualization, inventory management, and sales analytics.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    live: '#',
    code: '#',
  },
  {
    title: 'Weather Application',
    technologies: ['JavaScript', 'CSS3', 'HTML5', 'REST API'],
    description:
      'A weather forecast app with location detection, 7-day forecast, and real-time weather updates using the OpenWeather API.',
    image: 'https://images.unsplash.com/photo-1581091870622-7c810fcda3e1',
    live: '#',
    code: '#',
  },
  {
    title: 'Task Management System',
    technologies: ['React', 'Firebase', 'Styled-components', 'React DnD'],
    description:
      'A collaborative task management application with drag-and-drop functionality, user assignments, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    live: '#',
    code: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container py-5">
      <h2 className="fw-bold mb-4">
        <i className="bi bi-briefcase-fill text-primary me-2"></i>Projects
      </h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                style={{ height: '220px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <div className="mb-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="badge bg-light text-dark fw-normal me-1 mb-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="card-text text-muted">{project.description}</p>
                <div className="d-flex gap-2 mt-3">
                  <a href={project.live} className="btn btn-outline-dark btn-sm px-3">
                    Live Demo
                  </a>
                  <a href={project.code} className="btn btn-secondary btn-sm px-3">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
