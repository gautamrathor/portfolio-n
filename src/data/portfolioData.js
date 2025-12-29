export const portfolioData = {
  personalInfo: {
    name: "Gautam Rathor",
    title: "Full Stack Developer",
    subtitle: "Building Amazing Web Experiences",
    bio: "Passionate Full Stack Developer with expertise in modern web technologies. I love creating elegant solutions to complex problems and bringing ideas to life through code.",
    email: "gautam.rathor@example.com",
    phone: "+91 XXXXX XXXXX",
    location: "India",
    github: "https://github.com/gautamrathor",
    linkedin: "https://linkedin.com/in/gautamrathor",
    twitter: "https://twitter.com/gautamrathor",
  },

  stats: [
    { label: "Projects Completed", value: 10, suffix: "+" },
    { label: "Years Experience", value: 1, suffix: "+" },
    { label: "Technologies", value: 10, suffix: "+" },
    { label: "GitHub Repos", value: 20, suffix: "+" }
  ],

  topLanguages: [
    { name: "JavaScript", proficiency: 90, icon: "🟨" },
    { name: "React", proficiency: 85, icon: "⚛️" },
    { name: "Node.js", proficiency: 80, icon: "🟩" },
    { name: "HTML5", proficiency: 95, icon: "🔶" },
    { name: "CSS3", proficiency: 90, icon: "🎨" },
    { name: "MongoDB", proficiency: 70, icon: "🍃" },
    { name: "Git", proficiency: 85, icon: "📦" }
  ],

  featuredProjects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with cart, payment integration, and admin panel",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      category: "Web App",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates and team features",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      techStack: ["React", "Firebase", "Tailwind"],
      category: "Web App",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather app with forecasts and location-based data",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      techStack: ["React", "API Integration", "Charts.js"],
      category: "Web App",
      liveUrl: "#",
      githubUrl: "#"
    }
  ],

  about: {
    description: "I'm a passionate Full Stack Developer with a keen interest in creating innovative web solutions. With experience in both frontend and backend technologies, I enjoy building complete applications from concept to deployment. I'm constantly learning new technologies and best practices to deliver high-quality, scalable solutions.",
    interests: ["Web Development", "Open Source", "UI/UX Design", "Problem Solving"],
    info: [
      { label: "Birthday", value: "Feb 4, 2003" },
      { label: "Location", value: "India" },
      { label: "Email", value: "gautamcsc1@gmail.com" },
      { label: "Freelance", value: "Available" }
    ]
  },

  education: [
    {
      id: 1,
      degree: "Bachelor of Technology",
      field: "Computer Science Engineering",
      institution: "Phonics University",
      year: "2022 - 2026",
      grade: "6.5 CGPA",
      description: "Focused on Website development, algorithms, and data structures. Participated in various coding competitions and hackathons."
    },
    {
      id: 2,
      degree: "Higher Secondary",
      field: "Science (PCM)",
      institution: "RNI School",
      year: "2020 - 2012",
      grade: "85%",
      description: "Completed higher secondary with Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving skills."
    }
  ],

  skills: {
    frontend: [
      { name: "React.js", proficiency: 85 },
      { name: "JavaScript", proficiency: 90 },
      { name: "HTML5", proficiency: 95 },
      { name: "CSS3/Tailwind", proficiency: 90 },
      { name: "Redux", proficiency: 75 },
      { name: "TypeScript", proficiency: 70 }
    ],
    backend: [
      { name: "Node.js", proficiency: 80 },
      { name: "Express.js", proficiency: 85 },
      { name: "MongoDB", proficiency: 70 },
      { name: "SQL", proficiency: 75 },
      { name: "REST APIs", proficiency: 85 }
    ],
    tools: [
      { name: "Git & GitHub", proficiency: 85 },
      { name: "VS Code", proficiency: 90 },
      { name: "Postman", proficiency: 80 },
      { name: "Firebase", proficiency: 70 },
      { name: "Docker", proficiency: 60 },
      { name: "AWS", proficiency: 65 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce platform with features like product catalog, shopping cart, user authentication, payment gateway integration, and admin dashboard for managing products and orders.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      category: "Full Stack",
      liveUrl: "https://github.com/febtechit/E-Commerce-FullStack.git",
      githubUrl: "https://github.com/febtechit/E-Commerce-FullStack.git",
      featured: true
    },
    {
      id: 2,
      title: " Cosmetics website ",
      description: "A modern cosmetics website created with passion and creativity by me. This platform is designed to showcase high-quality beauty and skincare products while delivering a smooth, elegant, and user-friendly shopping experience.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      techStack: ["React", "Firebase", "Tailwind", "Redux"],
      category: "Web App",
      liveUrl: "https://jsm-cosmetics.vercel.app/",
      githubUrl: "https://jsm-cosmetics.vercel.app/",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather application showing current weather, 7-day forecast, and weather maps with beautiful visualizations and location-based data.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      techStack: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
      category: "Web App",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "Social Media App",
      description: "Full-featured social networking platform with posts, likes, comments, user profiles, and real-time messaging.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      techStack: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      category: "Full Stack",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Portfolio Generator",
      description: "Dynamic portfolio website generator where users can create and customize their portfolio with multiple themes and templates.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      techStack: ["React", "Next.js", "Tailwind CSS"],
      category: "Web App",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Modern blogging platform with rich text editor, categories, tags, comments, and SEO optimization.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      category: "Full Stack",
      liveUrl: "#",
      githubUrl: "#"
    }
  ],

  achievements: [
    {
      id: 1,
      title: "Hackathon Winner",
      description: "First place in National Level Hackathon 2023 for innovative web solution",
      date: "March 2023",
      icon: "🏆"
    },
    {
      id: 2,
      title: "Open Source Contributor",
      description: "Active contributor to multiple open-source projects with 100+ contributions",
      date: "Ongoing",
      icon: "💻"
    },
    {
      id: 3,
      title: "React Certification",
      description: "Completed advanced React.js certification from recognized platform",
      date: "January 2023",
      icon: "📜"
    },
    {
      id: 4,
      title: "Best Project Award",
      description: "Awarded best final year project for innovative e-commerce solution",
      date: "May 2023",
      icon: "🎓"
    },
    {
      id: 5,
      title: "Code Challenge Champion",
      description: "Ranked in top 10 in multiple online coding competitions",
      date: "2022-2023",
      icon: "⭐"
    },
    {
      id: 6,
      title: "Tech Speaker",
      description: "Delivered talks on modern web development at college tech events",
      date: "2023",
      icon: "🎤"
    }
  ]
}