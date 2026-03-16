# 🌟 Akash Hegde - Personal Portfolio

A modern, interactive personal portfolio website built with **React**, **TailwindCSS**, **Vite**, and **Spline 3D models**. Features a stunning neon-themed design with smooth animations and responsive layout.

## ✨ Features

- **Modern Design**: Neon-themed UI with custom TailwindCSS configuration
- **3D Integration**: Interactive Spline 3D models for enhanced user experience
- **Smooth Animations**: Framer Motion animations throughout the site
- **Responsive**: Fully responsive design for all devices
- **Performance**: Built with Vite for fast development and optimized builds
- **Glassmorphism**: Modern glass-like UI elements with blur effects

## 🎨 Design Theme

- **Colors**: 
  - Dark Background: `#0a0a0a`
  - Neon Pink: `#ff3cac`
  - Neon White: `#fdfbfb`
- **Effects**: Glowing animations, hover states, and gradient backgrounds
- **Typography**: Inter font family for modern readability

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd protfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with glassmorphism
│   ├── Hero.jsx            # Hero section with Spline model
│   ├── About.jsx           # About section with animations
│   ├── Skills.jsx          # Skills grid with progress bars
│   ├── Projects.jsx        # Project showcase cards
│   ├── Contact.jsx         # Contact form with 3D model
│   └── Footer.jsx          # Footer with social links
├── index.css               # Global styles and utilities
├── App.jsx                 # Main app component
└── main.jsx               # Entry point
```

## 🛠 Technologies Used

- **Frontend**: React 18, Vite
- **Styling**: TailwindCSS with custom theme
- **Animations**: Framer Motion
- **3D Models**: Spline (@splinetool/react-spline)
- **Icons**: Emoji-based icons for modern look
- **Fonts**: Inter (Google Fonts)

## 🎯 Sections

1. **Navbar** - Fixed navigation with glassmorphism effect
2. **Hero** - Introduction with greeting Spline model
3. **About** - Personal introduction with animated elements
4. **Skills** - Technology skills with progress indicators
5. **Projects** - Portfolio projects with detailed cards
6. **Contact** - Contact form with 3D contact model
7. **Footer** - Social links and additional information

## 🎨 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  darkBg: "#0a0a0a",
  neonPink: "#ff3cac",
  neonWhite: "#fdfbfb",
}
```

### Projects
Update project data in `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    techStack: ["React", "Node.js"],
    // ... other properties
  }
]
```

### Contact Information
Update contact details in `src/components/Contact.jsx` and `src/components/Footer.jsx`.

## 🌐 Spline 3D Models

The portfolio integrates Spline 3D models:
- **Hero Section**: Greeting model (`https://prod.spline.design/uViPUFS8Aw3wR924/scene.splinecode`)
- **Contact Section**: Contact model (placeholder - add your own URL)

To add your own Spline models:
1. Create your 3D scene in Spline
2. Export and get the scene URL
3. Replace the URL in the respective component

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance Optimizations

- **Lazy Loading**: Spline models load with Suspense
- **Code Splitting**: Components are optimized for bundle size
- **Image Optimization**: Efficient loading strategies
- **Smooth Scrolling**: CSS scroll-behavior for better UX

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Contact

**Akash Hegde**
- Email: hegdeakash22032004@gmail.com
- LinkedIn: [linkedin.com/in/akash-hegde-955a7a2a6](https://linkedin.com/in/akash-hegde-955a7a2a6)
- GitHub: [github.com/AkashHegde2004](https://github.com/AkashHegde2004)

---

⭐ **Star this repository if you found it helpful!**
