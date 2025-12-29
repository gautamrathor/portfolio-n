import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { portfolioData } from '../data/portfolioData'

const Achievements = () => {
  const [achievementsRef, isVisible] = useScrollAnimation(0.2)

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-500" ref={achievementsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <span className="text-gradient">Achievements & Awards</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 text-center border-2 border-transparent hover:border-primary ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-6xl mb-4 animate-bounce-slow inline-block">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {achievement.description}
              </p>
              <span className="inline-block px-4 py-2 bg-gradient-primary text-white rounded-full text-sm font-semibold">
                {achievement.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements