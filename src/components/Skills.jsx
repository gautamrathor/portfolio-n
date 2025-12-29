import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { portfolioData } from '../data/portfolioData'

const Skills = () => {
  const [skillsRef, isVisible] = useScrollAnimation(0.2)
  const [activeCategory, setActiveCategory] = useState('frontend')

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'tools', label: 'Tools & Others', icon: '🛠️' }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-500" ref={skillsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <span className="text-gradient">Skills & Expertise</span>
        </h2>

        {/* Category Tabs */}
        <div className={`flex justify-center flex-wrap gap-4 mb-12 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-primary text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:scale-105 shadow-md'
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills[activeCategory]?.map((skill, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-primary ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-lg font-bold text-primary">
                  {skill.proficiency}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                  style={{
                    width: isVisible ? `${skill.proficiency}%` : '0%',
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills