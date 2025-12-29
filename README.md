# 🚀 Gautam Rathor - Portfolio Website

A modern, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS** featuring advanced animations and smooth transitions.

![Portfolio Preview](https://via.placeholder.com/1200x600/667eea/ffffff?text=Portfolio+Preview)

## ✨ Features

### 🎯 Complete Sections
- **Home** - Hero with typing animation, stats counter, languages showcase, featured projects
- **About** - Personal info with photo, interests, social links
- **Education** - Animated timeline with academic history
- **Skills** - Categorized skills (Frontend, Backend, Tools) with progress bars
- **Projects** - Filterable gallery with modal view and live demos
- **Achievements** - Awards and certificates with animations
- **Contact** - Form with validation and contact information

### 🎨 Advanced Features
- ⚡ **Vite** - Lightning fast development
- 🎨 **Tailwind CSS** - Modern, responsive styling
- 🌓 **Dark/Light Mode** - Toggle with smooth transitions
- 🎭 **Advanced Animations** - Fade, slide, scale, typing effects
- 📱 **Fully Responsive** - Works perfectly on all devices
- ♿ **Accessible** - ARIA labels and semantic HTML
- 🚀 **Optimized Performance** - Smooth 60fps animations
- 💾 **Theme Persistence** - Saves theme preference in localStorage

## 📦 Tech Stack

- **React 18** - Frontend library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management
- **Context API** - Theme management
- **Intersection Observer API** - Scroll animations

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/gautamrathor/Portfolio.git
cd Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   ├── useScrollAnimation.js
│   │   ├── useTypingEffect.js
│   │   └── useCounter.js
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolioData.js`:

```javascript
export const portfolioData = {
  personalInfo: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    // ... more fields
  },
  // ... other sections
}
```

### Change Theme Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#667eea', // Change this
        dark: '#5568d3',
        light: '#7c94f5'
      },
      // ... more colors
    }
  }
}
```

### Add/Remove Sections

Edit `src/App.jsx` and add/remove component imports.

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Add to `vite.config.js`:
```javascript
export default defineConfig({
  base: '/Portfolio/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎭 Animation Examples

### Fade In Up
```jsx
className="animate-fade-in-up"
```

### Typing Effect
```jsx
const { displayedText, isComplete } = useTypingEffect("Text to type", 100)
```

### Counter Animation
```jsx
const count = useCounter(100, 2000, isVisible)
```

### Scroll Animation
```jsx
const [ref, isVisible] = useScrollAnimation(0.2)
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Gautam Rathor**
- Email: gautam.rathor@example.com
- GitHub: [@gautamrathor](https://github.com/gautamrathor)
- Portfolio: [Live Demo](#)

## 🙏 Acknowledgments

- Icons from emoji
- Images from [Unsplash](https://unsplash.com)
- Inspiration from various portfolio designs

---

⭐ **Star this repo if you like it!**

Made with ❤️ by **Gautam Rathor**