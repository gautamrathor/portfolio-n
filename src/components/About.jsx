import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { portfolioData } from '../data/portfolioData'

const About = () => {
  const [aboutRef, isVisible] = useScrollAnimation(0.2)

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-500" ref={aboutRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <span className="text-gradient ">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative max-w-md mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
                  alt="Gautam Rathor"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full border-4 border-primary rounded-2xl -z-10 group-hover:top-2 group-hover:right-2 transition-all duration-300"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              {portfolioData.personalInfo.title}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {portfolioData.about.description}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {portfolioData.about.info.map((item, index) => (
                <div 
                  key={index}
                  className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-primary"
                >
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {item.label}
                  </div>
                  <div className="font-semibold text-gray-800 dark:text-white">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div className="mb-6">
              <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                What I'm Passionate About
              </h4>
              <div className="flex flex-wrap gap-3">
                {portfolioData.about.interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-primary text-white rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              <a 
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-red-500 dark:bg-gray-300 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-primary"
              >
                <span className="text-xl">🔗</span>
                <span className="font-semibold">GitHub</span>
              </a>
              <a 
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-red-500 dark:bg-gray-300 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-primary"
              >
                <span className="text-xl">💼</span>
                <span className="font-semibold">LinkedIn</span>
              </a>
              <a 
                href={portfolioData.personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-red-500 dark:bg-gray-300 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-primary"
              >
                <span className="text-xl">🐦</span>
                <span className="font-semibold">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About