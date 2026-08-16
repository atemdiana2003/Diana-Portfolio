# Atem Diana - Professional Portfolio Website

A modern, responsive, and accessible personal portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases my skills, projects, experience, and services as a Computer Software Engineer and Full-Stack Web Developer.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with mature color palette
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Fully Responsive**: Optimized for all screen sizes (320px to 1920px+)
- **Smooth Animations**: Subtle, professional animations using Framer Motion
- **Accessible**: WCAG compliant with semantic HTML and ARIA labels
- **SEO Optimized**: Proper meta tags, Open Graph, and structured data
- **Fast Performance**: Optimized bundle size and lazy loading
- **Contact Form**: Client-side validated form ready for backend integration
- **Component-Based**: Reusable React components for easy maintenance

## 🛠️ Technologies

- **Frontend**: React, Vite, JavaScript
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment Ready**: Vercel, Netlify, GitHub Pages compatible

## 📁 Project Structure

```
diana-s-portfolio/
├── public/
│   ├── assets/
│   │   ├── projects/       # Project screenshots
│   │   └── README.md       # Assets instructions
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/         # Reusable React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── Services.jsx
│   │   ├── Skills.jsx
│   │   ├── WhyWorkWithMe.jsx
│   │   └── WorkProcess.jsx
│   ├── data/              # Content data files
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── projects.js
│   │   ├── services.js
│   │   ├── skills.js
│   │   └── social.js
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   │   └── Home.jsx
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main app component
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── index.html             # HTML template with SEO
├── package.json
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── README.md
```

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/diana-s-portfolio.git
   cd diana-s-portfolio
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
   Navigate to `http://localhost:5173`

## 🎯 Customization

### Update Personal Information

Edit the data files in `src/data/`:

1. **Social Links** (`src/data/social.js`):
   ```javascript
   export const socialLinks = {
     email: "your-email@example.com",
     github: "https://github.com/yourusername",
     linkedin: "https://linkedin.com/in/yourusername",
     twitter: "https://twitter.com/yourusername"
   }
   ```

2. **Projects** (`src/data/projects.js`):
   Add or modify projects in the projects array. Each project needs:
   - title, description, problem, technologies, features, github, liveDemo

3. **Skills** (`src/data/skills.js`):
   Organize skills by category (frontend, backend, databases, tools)

4. **Experience** (`src/data/experience.js`):
   Add your work experience with responsibilities and technologies

5. **Education** (`src/data/education.js`):
   Add your educational background and coursework

6. **Services** (`src/data/services.js`):
   Modify services to match what you offer

### Add Your CV

1. Place your CV PDF file in the `/public/` directory
2. Name it `Atem-Diana-CV.pdf`
3. The download link will automatically work

### Add Project Images

1. Add project screenshots to `/public/assets/projects/`
2. Update image paths in `src/data/projects.js`
3. Recommended size: 1200x800px

### Add Profile Image

1. Add your professional photo to `/public/assets/`
2. Update the image path in `src/components/About.jsx`
3. Recommended size: 400x400px (square)

### Update SEO Metadata

Edit `index.html` to update:
- Page title
- Meta description
- Open Graph tags
- Twitter cards
- Canonical URL

## 🏗️ Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repository in [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### GitHub Pages

1. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```

2. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🎨 Design System

### Colors

- **Primary**: Navy Blue (#1e1b4b, #312e81, #4338ca)
- **Accent**: Teal (#0d9488, #14b8a6)
- **Neutral**: Charcoal, Slate, White/Off-white
- **Dark Mode**: Premium navy instead of pure black

### Typography

- **Font Family**: Inter, Manrope, Plus Jakarta Sans
- **Hierarchy**: Clear distinction between headings and body text
- **Sizes**: Responsive scaling from mobile to desktop

### Components

- **Cards**: Subtle shadows, hover effects, rounded corners
- **Buttons**: Primary and secondary styles with smooth transitions
- **Forms**: Clean inputs with validation states
- **Navigation**: Responsive with mobile hamburger menu

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast compliance (WCAG AA)
- Reduced motion support

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome!

## 📧 Contact

- Email: your-email@example.com
- GitHub: https://github.com/yourusername
- LinkedIn: https://linkedin.com/in/yourusername

---

Built with ❤️ using React, Vite, and Tailwind CSS
