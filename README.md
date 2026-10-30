# Johndel L. Sialongo — Portfolio (React)

React + Vite port of the original `johndel534.github.io` static site.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build
```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Deploy to GitHub Pages
**Option A – one command (publishes `dist/` to a `gh-pages` branch):**
```bash
npm run deploy
```
Then in the repo: Settings → Pages → Source: `gh-pages` branch, `/ (root)`.

**Option B – replace the old site:** build, then copy the contents of `dist/`
into the root of the `johndel534.github.io` repo and push.

Routing uses `HashRouter` (`/#/about`), so refreshing or deep-linking works on
GitHub Pages without extra configuration. `base: "./"` in `vite.config.js` keeps
asset paths valid on both user sites and project sites.

## Structure
```
src/
├── main.jsx                 entry point
├── App.jsx                  routes
├── data/site.js             ALL content: nav, skills, services, projects, contact
├── hooks/                   useClickOutside, useDocumentTitle
├── styles/style.css         original design tokens + styles (with a few fixes)
├── components/
│   ├── layout/              Layout, Navbar, NavDropdown, Footer, ScrollToTop
│   ├── ui/                  Button, SmartLink, SectionHeader, ProjectCard, ProjectList, TechPill, Tag…
│   ├── home/                Hero, TickerChart, StatStrip
│   ├── about/               InfoCard, SkillCard, SkillsGrid
│   └── contact/             ContactMethod, ContactForm, FormField, icons
└── pages/                   Home, About, Services, ServiceDetail, Projects, Contact, NotFound
public/
├── assets/profile.png
└── Docs/*.pdf
```

## Page mapping (old → new)
| Original file   | React route          |
|-----------------|----------------------|
| index.html      | `/`                  |
| about.html      | `/about`             |
| work.html       | `/services`          |
| web.html        | `/services/web`      |
| mobile.html     | `/services/mobile`   |
| trading.html    | `/services/trading`  |
| projects.html   | `/projects`          |
| contact.html    | `/contact`           |

## Editing content
Change text, skills, projects, links or nav items in `src/data/site.js` —
no component changes needed.
