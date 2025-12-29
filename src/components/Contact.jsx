import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { portfolioData } from '../data/portfolioData'

const Contact = () => {
  const [contactRef, isVisible] = useScrollAnimation(0.2)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitSuccess(false), 5000)
    }, 2000)
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-500" ref={contactRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <span className="text-gradient">Get In Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Let's Talk
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl">📧</div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">{portfolioData.personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl">📱</div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">{portfolioData.personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl">📍</div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">{portfolioData.personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              <a 
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl font-semibold hover:bg-gradient-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
              >
                GitHub
              </a>
              <a 
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl font-semibold hover:bg-gradient-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
              >
                LinkedIn
              </a>
              <a 
                href={portfolioData.personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl font-semibold hover:bg-gradient-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className={`bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-xl ${
              isVisible ? 'animate-fade-in-right' : 'opacity-0'
            }`}
          >
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-500 text-white rounded-xl text-center font-semibold animate-slide-down">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <div className="mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
                  errors.name ? 'border-red-500 animate-shake' : 'border-gray-300 dark:border-gray-700'
                }`}
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1 block animate-fade-in">{errors.name}</span>
              )}
            </div>

            <div className="mb-6">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
                  errors.email ? 'border-red-500 animate-shake' : 'border-gray-300 dark:border-gray-700'
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1 block animate-fade-in">{errors.email}</span>
              )}
            </div>

            <div className="mb-6">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
                  errors.subject ? 'border-red-500 animate-shake' : 'border-gray-300 dark:border-gray-700'
                }`}
              />
              {errors.subject && (
                <span className="text-red-500 text-sm mt-1 block animate-fade-in">{errors.subject}</span>
              )}
            </div>

            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none ${
                  errors.message ? 'border-red-500 animate-shake' : 'border-gray-300 dark:border-gray-700'
                }`}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm mt-1 block animate-fade-in">{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact