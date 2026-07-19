# Business Intelligence & Analytics Portfolio Website

A complete, polished, and responsive professional portfolio website built for **Panita Vaishnavi Kanaguduru** — Business Intelligence Analyst, Data Analyst, and Power BI Developer. Designed specifically for the Consumer Cellular Business Intelligence Analyst (Learning & Development) position.

This project is built using a modern front-end stack: **React 19 + TypeScript + Vite 6 + Tailwind CSS v4 + Recharts + Lucide Icons**.

---

## Key Features

1. **Executive Hero & Pipeline**: Introduces candidate background with experience-associated metrics and an interactive SVG rendering of the BI Pipeline.
2. **Modular Bio & Timeline**: Details educational background (MS Statistics & Data Science, UCF) and professional timeline (SuperWorld, UCF, SOTI Inc.).
3. **Interactive Project Tabs**:
   - **Project 1 (L&D Analytics Dashboard)**: Interactive mock Power BI report pages, star schema dimensional layout mapping, DAX formula repository, dynamic Row-Level Security (RLS) model, and verification auditing checklists.
   - **Project 2 (Automation & Governance)**: Intake-to-reporting cloud pipeline flow, SharePoint list schema definitions, and a mockup governance dashboard.
4. **Current Implementation Roadmap**: Details the candidate's self-directed roadmap, Kirkpatrick L&D evaluation levels, and Customer Care analytics KPIs.
5. **Job-Alignment Matrix**: Compares Consumer Cellular position needs directly against the candidate's experience.
6. **Consumer Cellular Case Study**: A simulated onboarding-to-operational analytics use case (CSAT, AHT, FCR, QA score) containing interactive Recharts visualization tools.
7. **Contact form**: Fully validated client form with direct hooks for email, phone, LinkedIn, and resume download.

---

## Local Setup Instructions

Ensure you have [Node.js](https://nodejs.org) installed.

1. **Navigate to Project Directory**:
   ```bash
   cd bi-portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Local Development Server**:
   ```bash
   npm run dev
   ```
   *The server will start at `http://localhost:3000` and automatically open in your default browser.*

4. **Production Build & Compilation Test**:
   ```bash
   npm run build
   ```
   *Compiles TypeScript and creates the static distribution bundle inside the `dist/` directory.*

---

## Deployment Guidelines

Since this is a client-side static application (Vite-bundled React), it can be deployed easily to modern static hosting providers:

### Option 1: Vercel
1. Install the Vercel CLI: `npm install -g vercel`
2. Run `vercel` in the project root and follow the prompts.

### Option 2: Netlify
1. Drag and drop the compiled `dist/` folder onto the Netlify dropzone, OR
2. Hook Netlify directly to the GitHub repository.

### Option 3: GitHub Pages
1. Configure `base` path in `vite.config.ts` if deploying to a repository subdirectory (e.g. `base: '/bi-portfolio/'`).
2. Run `npm run build`.
3. Push `dist/` content to your `gh-pages` branch.

---

## Placeholder URLs & Customization

The code contains clearly marked placeholders to easily configure your own endpoints and files:
- **Resume Download**: Handled via placeholder element alerts in `Hero.tsx` and `Contact.tsx`. Simply overwrite with your hosting URL or place `resume.pdf` in the `public/` folder and update link tags.
- **LinkedIn Link**: Configured for `https://linkedin.com/in/panitak`.
- **Email Redirect**: Pointing to `mailto:panitakanaguduru.18@gmail.com`.
- **GitHub Link**: Setup for standard profile path references.
