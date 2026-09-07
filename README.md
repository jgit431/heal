# Heal

Website for Heal — a pilates studio and cafe in one room.

Built as a small React app with Vite. No CSS framework, no component library,
no build magic: two stylesheets, seven pages, one content file.

---

## Run it locally

You need [Node.js](https://nodejs.org) 18 or newer. Check with `node -v`.

```bash
npm install     # once, after unzipping
npm run dev     # starts the dev server and opens the browser
```

The site runs at **http://localhost:5173**. Saving a file updates the page
without a reload.

To check the production build:

```bash
npm run build     # writes dist/
npm run preview   # serves dist/ at http://localhost:4173
```

## Put it in git

```bash
cd heal
git init
git add .
git commit -m "Heal: first pass"
```

`node_modules` and `dist` are already ignored.

---

## Editing the site

**All copy, hours, prices, the timetable and the social accounts live in one file:
`src/data/site.js`.** Change wording there, not in the components. Anything
still needing a real value is marked `TODO`.

**Photography.** Every image is a placeholder in `public/images` — soft
earth-tone fields at the exact aspect ratio each slot uses, so the layout can be
judged before a shoot. Replace them by dropping real files into that folder and
pointing `src/data/site.js` at the new names (`.jpg` is fine). Sizes that matter:

| Slot | Ratio | Suggested size |
| --- | --- | --- |
| Home slideshow | 16:10 landscape | 1800 × 1100 |
| Studio / cafe blocks | 5:6 portrait | 1100 × 1320 |
| Home closing band | 16:7 landscape | 1800 × 790 |
| The Place, first image | 3:4 portrait | 1000 × 1330 |
| The Place, middle two | 3:2 landscape | 1200 × 800 |
| The Place, wide | 21:8 landscape | 1800 × 690 |
| Gallery grid | square | 900 × 900 |

`tools/make-placeholders.py` regenerates the placeholders if you need more of
them. Delete the script once real photographs are in.

**Colour and type** are CSS variables at the top of `src/styles/base.css`:
`--ground`, `--ink`, `--moss`, `--clay` and the two font tokens. The typefaces
are loaded in `index.html`. Changing a font means editing those two places.

---

## Structure

```
heal/
├── index.html                  fonts, meta, favicon
├── public/images/              placeholder photography
├── tools/make-placeholders.py  regenerates those placeholders
└── src/
    ├── main.jsx                mounts the app
    ├── App.jsx                 routes + the cross-page fade
    ├── data/site.js            ← all content lives here
    ├── styles/
    │   ├── base.css            tokens, reset, header, footer, shared pieces
    │   └── pages.css           layout per page
    ├── components/
    │   ├── Header.jsx          fixed nav, transparent over the hero
    │   ├── Footer.jsx          one line at the very bottom
    │   ├── PageHead.jsx        title block + browser tab title
    │   ├── Slideshow.jsx       home hero
    │   ├── Reveal.jsx          fade-up on scroll
    │   └── usePageTransition.js
    └── pages/
        ├── Home.jsx
        ├── ThePlace.jsx
        ├── Classes.jsx
        ├── Menu.jsx
        ├── Contact.jsx
        ├── Gallery.jsx
        └── NotFound.jsx
```

## How the motion works

Two mechanisms, both small on purpose.

**Between pages.** `usePageTransition` keeps rendering the old route for 320ms
while `<main>` fades out, then swaps the route in, scrolls to the top and fades
back up. You never see a white flash or a jump.

**Down a page.** `<Reveal>` watches an element with an IntersectionObserver and
fades it up 14px over 900ms the first time it enters view. It is used on a
handful of blocks per page rather than on everything, so it reads as the page
settling rather than as an effect.

**The wordmark.** `HEAL` sits centred inside a hairline ring that expands and
contracts on a 14-second cycle — roughly the pace of a slow breath. It is drawn
in `currentColor`, so it is light over the hero photograph and dark once the
header settles. Size is set by `--mark` and `--header-h` in `base.css`.

All three respect `prefers-reduced-motion`: the delay collapses to zero, the fades
are switched off, the ring holds still at full size, and the slideshow stays on
its first image.

## The contact form

The form posts the message as JSON to whatever URL is in `contact.formEndpoint`
in `src/data/site.js`. **It is empty, so the form does not send yet** — pressing
the button says so instead of pretending.

A static site cannot send email by itself; something has to receive the message
and mail it on. The quickest is [Formspree](https://formspree.io): create a form,
copy the URL it gives you (`https://formspree.io/f/xxxxxxxx`), paste it into
`formEndpoint`, and the form starts working with no other change. Netlify Forms,
Getform or your own serverless function work the same way — any endpoint that
accepts a JSON POST.

Sent, sending, failed and incomplete states are handled in
`src/pages/Contact.jsx`.

## Deploying

`npm run build` produces a static `dist/` folder. Netlify, Vercel, Cloudflare
Pages and GitHub Pages all serve it as-is. One thing to configure: because this
is a single-page app, the host must rewrite unknown paths to `index.html`, or
loading `/menu` directly will 404. On Netlify that is a `_redirects` file
containing `/*  /index.html  200`.
