# Valentine Ezikeoha — Portfolio

Personal engineering portfolio for Valentine Ezikeoha, a Howard University Computer Science graduate focused on AI/ML and full-stack product engineering.

## Stack

- React 19
- Vite 8
- Framer Motion with reduced-motion support
- CSS Modules
- Vercel Analytics

The production build is statically prerendered so the page content is available in the initial HTML for search engines and link previews.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

## Quality checks

```bash
npm run check
```

This runs ESLint, the portfolio-data tests, the browser bundle build, the server-rendering build, and the static prerender step. The same command runs in GitHub Actions for pushes and pull requests.

## Updating portfolio content

Profile, experience, project, navigation, and contact information live in `src/data/portfolio.js`. Project screenshots live in `public/projects/`.

## Production

The `main` branch deploys to [valentineezikeoha-portfolio.vercel.app](https://valentineezikeoha-portfolio.vercel.app/).
