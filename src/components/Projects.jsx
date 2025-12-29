import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { portfolioData } from '../data/portfolioData'

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:rotate-90"
        >
          ✕
        </button>

        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          {project.title}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, idx) => (
            <span 
              key={idx}
              className="px-4 py-2 bg-gradient-primary text-white rounded-full font-semibold text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 text-center"
          >
            Live Demo
          </a>
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex-1 text-center"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const [projectsRef, isVisible] = useScrollAnimation(0.2)
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filters = ['All', 'Web App', 'Full Stack', 'Mobile']

  const filteredProjects = activeFilter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-500" ref={projectsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <span className="text-gradient">Projects</span>
        </h2>

        {/* Filters */}
        <div className={`flex justify-center flex-wrap gap-4 mb-12 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-primary text-white shadow-lg scale-105'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-bold px-6 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}

export default Projects