# Deployment Guide - Vercel

This guide will help you deploy your portfolio website to Vercel.

## Prerequisites

1. **Vercel Account**: Create a free account at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Your code should be in a GitHub repository
3. **Node.js**: Ensure you have Node.js installed locally for testing

## Deployment Methods

### Method 1: Vercel Dashboard (Recommended)

1. **Connect Repository**:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Select the repository containing your portfolio

2. **Configure Build Settings**:
   - **Framework Preset**: Create React App (auto-detected)
   - **Root Directory**: `website/website-frontend`
   - **Build Command**: `npm run build` (auto-configured)
   - **Output Directory**: `build` (auto-configured)
   - **Install Command**: `npm install` (auto-configured)

3. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be available at `https://your-project-name.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from project directory**:
   ```bash
   cd website/website-frontend
   vercel
   ```

4. **Follow the prompts**:
   - Choose "Link to existing project?" → No
   - Set up and deploy? → Yes
   - Which scope? → Your username/team
   - Link to existing project? → No
   - Project name → lakshay-portfolio (or your preferred name)
   - Directory → `./` (current directory)

## Configuration Files

The following files have been configured for optimal Vercel deployment:

- **`vercel.json`**: Handles SPA routing for React Router
- **`.vercelignore`**: Excludes unnecessary files from deployment
- **`package.json`**: Contains all necessary build scripts

## Environment Variables

Currently, the project uses a hardcoded API endpoint:
```javascript
const api_base_path = 'https://0tc8svpio2.execute-api.us-east-1.amazonaws.com/default'
```

If you need to use environment variables in the future:

1. Create a `.env.local` file (already ignored by git):
   ```env
   REACT_APP_API_BASE_PATH=https://your-api-endpoint.com
   ```

2. Update your code to use:
   ```javascript
   const api_base_path = process.env.REACT_APP_API_BASE_PATH || 'fallback-url'
   ```

3. Add environment variables in Vercel Dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add `REACT_APP_API_BASE_PATH` with your API URL

## Custom Domain (Optional)

1. **Purchase Domain**: Buy a domain from any registrar
2. **Add to Vercel**:
   - Go to your project settings
   - Navigate to "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

## Automatic Deployments

Once connected to GitHub:
- **Main Branch**: Automatically deploys to production
- **Other Branches**: Create preview deployments
- **Pull Requests**: Generate preview URLs for testing

## Performance Optimization

The build is already optimized with:
- ✅ TailwindCSS purging unused styles
- ✅ React production build optimization
- ✅ Image optimization (handled by Vercel)
- ✅ Gzip compression (handled by Vercel)

## Troubleshooting

**Build Fails**:
- Check the build logs in Vercel dashboard
- Ensure `npm run build` works locally
- Verify all dependencies are in `package.json`

**Routing Issues**:
- The `vercel.json` file handles SPA routing
- All routes redirect to `index.html` for client-side routing

**Images Not Loading**:
- Ensure images are in the `public` folder or imported properly
- Check case sensitivity in file names

## Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Create React App**: [create-react-app.dev/docs/deployment](https://create-react-app.dev/docs/deployment)

Your portfolio is now ready for deployment! 🚀 