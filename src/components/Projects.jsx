import React from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a href={project.link} className="text-blue-400 hover:underline mt-4 block">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;