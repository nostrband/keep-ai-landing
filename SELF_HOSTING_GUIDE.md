# Keep AI Landing Page - Self-Hosting Guide

## Overview

This is a complete, production-ready landing page for Keep AI built with React 19, TypeScript, Tailwind CSS 4, and shadcn/ui components. You can deploy this on your own infrastructure or hosting provider.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18 or higher) — [Download](https://nodejs.org/)
- **npm** or **pnpm** (recommended) — npm comes with Node.js; for pnpm, run `npm install -g pnpm`
- **Git** (optional, for version control)

## Installation

### 1. Extract the Archive

```bash
tar -xzf keep-ai-landing-source.tar.gz
cd keep-ai-landing
```

### 2. Install Dependencies

Using pnpm (recommended):
```bash
pnpm install
```

Or using npm:
```bash
npm install
```

## Development

### Start the Development Server

```bash
pnpm dev
```

Or with npm:
```bash
npm run dev
```

The development server will start at `http://localhost:5173` (or another port if 5173 is in use). Open this URL in your browser to see the landing page.

### Edit Content

All page content is in `client/src/pages/Home.tsx`. You can modify:

- **Headlines and subheadings** — Update the text directly in the JSX
- **Colors** — Edit `client/src/index.css` to change the color palette
- **Sections** — Add or remove sections by modifying the component structure
- **Icons** — Replace Lucide React icons with alternatives from the [Lucide icon library](https://lucide.dev/)

### Styling

The project uses **Tailwind CSS 4** with a custom design system:

- **Color Palette** — Defined in `client/src/index.css` using CSS variables
- **Responsive Design** — Mobile-first approach using Tailwind breakpoints (`sm`, `md`, `lg`, `xl`)
- **Components** — shadcn/ui components in `client/src/components/ui/`

To customize colors, edit the CSS variables in `client/src/index.css`:

```css
:root {
  --accent: #c48e48; /* Copper */
  --background: #0B0F14; /* Deep slate */
  --foreground: #f2f2f2; /* Soft white */
}
```

## Building for Production

### Create a Production Build

```bash
pnpm build
```

Or with npm:
```bash
npm run build
```

This generates a `dist/` folder with optimized, minified assets ready for deployment.

### Preview the Production Build

```bash
pnpm preview
```

This starts a local server serving the production build, allowing you to test before deploying.

## Deployment

### Static Hosting (Recommended)

Since this is a static React app, you can deploy it to any static hosting provider:

#### Vercel (Easiest)
1. Push your code to GitHub
2. Connect your GitHub repo to [Vercel](https://vercel.com/)
3. Vercel automatically detects the build configuration and deploys on every push

#### Netlify
1. Push your code to GitHub
2. Connect your GitHub repo to [Netlify](https://netlify.com/)
3. Set build command: `pnpm build` (or `npm run build`)
4. Set publish directory: `dist`

#### AWS S3 + CloudFront
1. Build the project: `pnpm build`
2. Upload the `dist/` folder to an S3 bucket
3. Configure CloudFront as a CDN in front of the S3 bucket
4. Point your domain to the CloudFront distribution

#### Docker (Self-Hosted)

Create a `Dockerfile` in the project root:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t keep-ai-landing .
docker run -p 80:80 keep-ai-landing
```

#### Traditional Web Server (Apache, Nginx)

1. Build the project: `pnpm build`
2. Copy the contents of the `dist/` folder to your web server's public directory
3. Configure your web server to serve `index.html` for all routes (important for client-side routing)

**Nginx Configuration Example:**
```nginx
server {
  listen 80;
  server_name yourdomain.com;
  root /var/www/keep-ai-landing/dist;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

## Environment Variables

The project uses minimal environment variables. If you need to customize analytics or branding, create a `.env.local` file in the project root:

```env
VITE_APP_TITLE=Keep AI - Your life stays private
VITE_APP_LOGO=/logo.svg
VITE_ANALYTICS_ENDPOINT=https://your-analytics.com
VITE_ANALYTICS_WEBSITE_ID=your-website-id
```

These are optional and have sensible defaults.

## Customization

### Change the Logo

1. Place your logo file in `client/public/` (e.g., `client/public/logo.svg`)
2. Update the reference in `client/index.html`:
   ```html
   <link rel="icon" type="image/png" href="/logo.svg" />
   ```

### Update Meta Tags

Edit `client/index.html` to customize:
- Page title
- Meta description
- Open Graph tags for social sharing
- Theme color

### Modify the Waitlist Form

The waitlist form in `Home.tsx` currently shows a success message. To integrate with a backend service:

1. Create an API endpoint to store emails
2. Update the `handleWaitlistSubmit` function to call your API
3. Handle success/error responses

Example integration with a backend:
```typescript
const handleWaitlistSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    if (response.ok) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## Project Structure

```
keep-ai-landing/
├── client/
│   ├── public/              # Static assets (images, favicon, etc.)
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components (Home.tsx)
│   │   ├── lib/             # Utility functions
│   │   ├── App.tsx          # Main app component with routing
│   │   ├── main.tsx         # React entry point
│   │   └── index.css        # Global styles and design tokens
│   ├── index.html           # HTML template
│   ├── vite.config.ts       # Vite build configuration
│   └── tsconfig.json        # TypeScript configuration
├── package.json             # Project dependencies
├── pnpm-lock.yaml           # Dependency lock file
└── README.md                # Project documentation
```

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal output for the correct URL.

### Build Fails
1. Ensure you're using Node.js v18 or higher: `node --version`
2. Clear the node_modules folder and reinstall: `rm -rf node_modules && pnpm install`
3. Clear the build cache: `rm -rf dist && pnpm build`

### Styling Issues
If styles aren't applying correctly:
1. Ensure Tailwind CSS is properly configured in `tailwind.config.ts`
2. Check that `client/src/index.css` is imported in `client/src/main.tsx`
3. Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)

## Support & Resources

- **Vite Documentation** — [vitejs.dev](https://vitejs.dev/)
- **React Documentation** — [react.dev](https://react.dev/)
- **Tailwind CSS** — [tailwindcss.com](https://tailwindcss.com/)
- **shadcn/ui** — [ui.shadcn.com](https://ui.shadcn.com/)
- **TypeScript** — [typescriptlang.org](https://www.typescriptlang.org/)

## License

This project is provided as-is for your use. Customize and deploy freely.

---

**Happy deploying!** If you have questions or need help, refer to the documentation links above or consult the original framework documentation.
