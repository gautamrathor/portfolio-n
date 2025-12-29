import React from 'react'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useCounter } from '../hooks/useCounter'
import { portfolioData } from '../data/portfolioData'

/* ================= Animated Counter ================= */

const AnimatedCounter = ({ end, suffix, label, isVisible }) => {
  const count = useCounter(end, 2000, isVisible)

  return (
    <div className="text-center p-6 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2
      bg-gray-100 dark:bg-gray-800">
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-700 dark:text-gray-300 font-medium">
        {label}
      </div>
    </div>
  )
}

/* ================= Home ================= */

const Home = () => {
  const { displayedText, isComplete } = useTypingEffect(
    `Hi, I'm ${portfolioData.personalInfo.name}`,
    100,
    500
  )

  const [statsRef, statsVisible] = useScrollAnimation(0.2)
  const [languagesRef, languagesVisible] = useScrollAnimation(0.2)
  const [projectsRef, projectsVisible] = useScrollAnimation(0.2)

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen pt-20 relative overflow-hidden
      bg-white dark:bg-gray-500 transition-colors duration-300"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* ================= Hero ================= */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            {displayedText}
            {!isComplete && <span className="animate-blink text-primary">|</span>}
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
            {portfolioData.personalInfo.title}
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {portfolioData.personalInfo.subtitle}
          </p>

          <div className="flex justify-center gap-4">
            <button onClick={scrollToContact} className="btn-primary">
              Get In Touch
            </button>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>
        </div>

        {/* ================= Stats ================= */}
        <div ref={statsRef} className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {portfolioData.stats.map((stat, i) => (
              <div
                key={i}
                className={statsVisible ? 'animate-fade-in-up' : 'opacity-0'}
              >
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  isVisible={statsVisible}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ================= Languages ================= */}
        <div ref={languagesRef} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100 dark:text-white">
            Languages & Tools
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {portfolioData.topLanguages.map((lang, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl shadow-lg transition-all hover:-translate-y-2
                  bg-gray-100 dark:bg-gray-800
                  ${languagesVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              >
                <div className="text-4xl mb-3">{lang.icon}</div>

                <div className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                  {lang.name}
                </div>

                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-1.5">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: `${lang.proficiency}%` }}
                  />
                </div>

                <div className="text-xs text-primary font-bold mt-1">
                  {lang.proficiency}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= Projects ================= */}
        <div ref={projectsRef} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioData.featuredProjects.map((project, i) => (
              <div
                key={project.id}
                className={`rounded-2xl overflow-hidden shadow-lg transition-all hover:-translate-y-2
                  bg-gray-100 dark:bg-gray-800
                  ${projectsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full
                        bg-primary/10 text-primary"
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

      </div>
    </section>
  )
}

export default Home
