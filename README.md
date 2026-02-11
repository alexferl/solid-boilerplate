# solid-boilerplate

`solid-boilerplate` is a lightweight and modern starter template designed to help developers quickly build web applications using [Solid](https://solidjs.com/) and [Vite](https://vite.dev/). This boilerplate provides an optimized development environment with fast builds, hot module replacement, and production-ready configurations.

## Features
- Solid: A performant and reactive JavaScript library for building user interfaces.
- Vite: A blazing-fast build tool for modern web projects.
- Development Server: Instant feedback with hot module replacement during development.
- Production Build: Optimized builds ready for deployment.
- Linting: Integrated code quality checks using [Biome](https://biomejs.dev/).

## Getting Started

### Development
- `npm run dev` - Starts a dev server at http://localhost:5173/
- `npm run build` - Builds for production, emitting to `dist/`. Pre-renders all found routes in app to static HTML
- `npm run preview` - Starts a server at http://localhost:4173/ to test production build locally

### Testing
- `npm test` - Runs unit tests using Vitest
- `npm run test:ui` - Runs tests with Vitest's interactive UI
- `npm run coverage` - Runs tests and generates a code coverage report
- `npm run coverage:ui` - Runs tests with coverage and opens the HTML report in your browser

### Code Quality
- `npm run lint` - Runs Biome to check and automatically fix code style issues

## Deployment

### Docker

This boilerplate includes a production-ready Docker setup using Caddy as the web server.

**Build the Docker image:**
```bash
docker build -t solid-app .
```

**Run the container:**
```bash
docker run -p 80:80 -p 443:443 solid-app
```

The application will be available at http://localhost

### Caddy Configuration

The included Caddy configuration (`etc/caddy/Caddyfile`) provides:

- **SPA Support**: Automatic routing to `index.html` for client-side routing
- **Security Headers**: Comprehensive security headers including CSP, COOP, COEP, and more
- **Gzip/Zstd Compression**: Efficient content encoding for faster loads
- **Health Check**: `/healthz` endpoint for monitoring
- **Caching**: Immutable asset caching for JavaScript files

### Production Features

- Multi-stage Docker build for optimized image size
- Non-root user for enhanced security
- Static file serving with proper MIME types
- Production-ready security configuration
