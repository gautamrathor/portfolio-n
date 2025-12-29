import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { portfolioData } from '../data/portfolioData'

const Education = () => {
  const [educationRef, isVisible] = useScrollAnimation(0.2)

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-500" ref={educationRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <span className="text-gradient">Education</span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary hidden md:block"></div>

          {portfolioData.education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative mb-12 md:mb-20 ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                <div className="md:w-5/12">
                  <div className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <span className="inline-block px-4 py-1 bg-gradient-primary text-white text-sm font-semibold rounded-full mb-3">
                      {edu.year}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {edu.field}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gray-800 dark:text-white font-bold mb-3">
                      Grade: {edu.grade}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Icon */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-primary rounded-full items-center justify-center text-3xl shadow-lg animate-pulse-slow z-10">
                  🎓
                </div>

                <div className="md:w-5/12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education