# Gonzalo's Portfolio

A responsive single-page portfolio built with Angular and Angular Material. It presents my professional experience, education, software projects, and a Formspree-powered contact form.

## Local development

Requirements:

- Node.js 16.13 or newer
- npm 8 or newer

Install dependencies and start the development server:

```bash
npm install
npm start
```

Open `http://localhost:4200/`. The application reloads when source files change.

## Available commands

```bash
npm start       # Run the development server
npm run build   # Create a production build in docs/
npm run watch   # Rebuild when files change
npm test        # Run the Karma unit tests
```

The production build uses `/portfolio/` as its base URL because the site is hosted as a GitHub Pages project site.

## Updating content

- About and contact details are in `src/app/about` and `src/app/contact`.
- Experience entries are in `src/app/experience/experience.component.html`.
- Project data is in `src/app/projects/projects.component.ts`.
- Global colors and the Angular Material theme are in `src/styles.scss`.

The contact form submits to Formspree. If the form endpoint changes, update it in `src/app/contact/contact.component.ts`.
