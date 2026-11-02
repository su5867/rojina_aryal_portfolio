# Rojina Aryal Portfolio

A modern personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. The site showcases professional experience, skills, selected projects, education, and a contact section in a polished, editorial-style layout.

## Overview

This portfolio is designed to feel premium and contemporary, with:

- a custom cursor and smooth scrolling
- a hero section with calls to action
- portfolio project cards and modal case studies
- experience, process, and education timelines
- a downloadable resume/modal experience
- a responsive layout for desktop and smaller screens

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons
- Three.js for subtle visual effects

## Project Structure

```text
.
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── App.tsx
│   ├── main.tsx
│   └── styles/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

The app will start on:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev      # start the Vite dev server
npm run build    # create a production build
npm run preview  # preview the production build locally
npm run lint     # run TypeScript type checking
npm run clean    # remove the dist folder
```

## Build for Production

```bash
npm run build
```

The generated output is placed in the `dist/` directory.

## Deployment

This project includes a `vercel.json` configuration, so it is ready to deploy on Vercel.

## Customization

To update the portfolio content, edit the data source used by the components. Common places to update include:

- `src/data/portfolioData.ts` for personal, work, and project details
- `src/components/` for layout and interactive UI sections
- `src/App.tsx` for section composition and modal state

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

MIT License

Copyright (c) 2026 Rojina Aryal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact

For collaboration or project inquiries, use the contact section in the portfolio or connect through the channels referenced in the app.
