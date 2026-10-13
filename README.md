# YSSE Notice Page

A notice page for the future YSSE Main Portal, built with React and Vite. All notices, links, and the contact email are fictional placeholders.

## Run locally

```bash
npm install
npm run dev
```

Open the address Vite prints (usually http://localhost:5173). Build for production with `npm run build`.

## Structure

```
ysse-notice-page/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/notices.js        # sample notices and date helper
    ├── components/            # Header, Navbar, NoticeList, NoticeItem, NoticeTable, UsefulLinks, Footer
    └── styles/index.css
```

## Short explanation

The page uses `<header>` for the YSSE name and `<h1>`, `<nav>` for the link list, and `<main>` for the content. Notices live in a `<section>`, each one an `<article>` with a `<time>` date, category, summary, and a descriptive link. A second `<section>` holds the summary table with `<caption>`, `<thead>`, and `<th scope>` cells, followed by a links section and a `<footer>`. Notice data sits in one file, so the list and the table always match.

## Note for the HTML assignment

The Week 2 brief asks for plain HTML with no CSS or JavaScript. Submit the plain `index.html` for that task and use this project for the CSS and React modules.
