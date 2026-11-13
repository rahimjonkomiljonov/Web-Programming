# Portfolio Gallery

Week 11 homework for Web Programming (K0126002): a React app that shows my projects as cards and filters them by technology.

**Live:** https://rahimjonkomiljonov.github.io/Web-Programming/week11/gallery/

## Components

| Component | File | Job |
| --- | --- | --- |
| `App` | `src/App.js` | Holds the selected filter and works out which projects to show |
| `FilterBar` | `src/components/FilterBar.jsx` | One button per technology plus "All"; reports clicks through `onSelect` |
| `ProjectList` | `src/components/ProjectList.jsx` | Renders a `ProjectCard` for each project, keyed by `id` |
| `ProjectCard` | `src/components/ProjectCard.jsx` | Title, description, tech stack, GitHub link and demo link |

The project data is in `src/data/projects.js` (7 real projects). Props flow one way: `App` → `FilterBar` / `ProjectList` → `ProjectCard`.

## Run it

Created with `npx create-react-app portfolio-gallery`.

```bash
npm install
npm start        # dev server on http://localhost:3000
npm test         # 3 tests for the cards and the filter
npm run build    # production build in build/ ("homepage": "." keeps the paths relative)
```

The built files are copied to `week11/gallery/` in this repository so GitHub Pages can serve them.
