# Lakshay Kansal - Portfolio Website

A modern, responsive portfolio website built with React and TailwindCSS.

## 🚀 Quick Deploy to Vercel

1. **Push to GitHub**: Make sure your code is in a GitHub repository
2. **Connect to Vercel**: 
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project" → Import from GitHub
   - Select your repository
3. **Configure**:
   - **Root Directory**: `website/website-frontend`
   - **Framework**: Create React App (auto-detected)
4. **Deploy**: Click "Deploy" and wait for completion

That's it! Your portfolio will be live at `https://your-project-name.vercel.app`

## 📁 Project Structure

```
website/website-frontend/
├── public/
├── src/
│   ├── images/        # Logo and profile images
│   ├── App.js         # Main application component
│   ├── index.css      # TailwindCSS and custom styles
│   └── index.js       # React entry point
├── vercel.json        # Vercel deployment configuration
├── package.json       # Dependencies and scripts
└── DEPLOYMENT.md      # Detailed deployment guide
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Test production build locally
npm install -g serve
serve -s build
```

## 📦 Technologies Used

- **React 18** - Frontend framework
- **TailwindCSS 3** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Icons** - Icon library
- **Recharts** - Chart library for data visualization
- **Vercel** - Deployment platform

## 🎨 Features

- **Modern Design**: Clean, professional layout with dark theme
- **Responsive**: Works perfectly on all devices
- **Interactive**: Smooth animations and hover effects
- **Performance**: Optimized builds with TailwindCSS purging
- **SEO Ready**: Proper meta tags and structure

## 📄 Sections

- **Hero**: Introduction with animated typewriter effect
- **Skills**: Technology stack with animated icons
- **Experience**: Professional timeline with company logos
- **Education**: Academic background
- **Projects**: Portfolio projects (currently hidden)

## 🔧 Configuration Files

- **`vercel.json`**: Handles SPA routing for React Router
- **`.vercelignore`**: Excludes unnecessary files from deployment
- **`tailwind.config.js`**: TailwindCSS configuration
- **`postcss.config.js`**: PostCSS configuration

## 📚 Deployment Guide

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🌟 Live Demo

Once deployed, your portfolio will showcase:
- Professional experience at DeepWeave, Haymarket Media, and Nomic
- Education from University of Virginia and Deep Run High School
- Technical skills with modern frameworks
- Clean, modern design that stands out

---

Built with ❤️ by Lakshay Kansal
