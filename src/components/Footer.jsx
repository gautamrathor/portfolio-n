import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
            © {new Date().getFullYear()} Gautam Rathor. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            <span className="text-primary">{'{ '}</span>
            Built with ❤️ using React & Tailwind CSS
            <span className="text-primary">{' }'}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer