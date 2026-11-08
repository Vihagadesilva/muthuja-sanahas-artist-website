<<<<<<< HEAD
# Muthuja Sanahas — Official Artist Portfolio Website

A modern, responsive artist portfolio website created for **Muthuja Sanahas**, a Sri Lankan singer, songwriter, and composer.

This project gives the artist a dedicated online presence to introduce their identity, showcase music and videos, highlight achievements, and connect audiences with official platforms and social channels.

Built with **HTML5, CSS3, and Vanilla JavaScript**, the website is a frontend-only static project. It has no backend component, server-side application, or database.

---

## Project Overview

The website is designed around a contemporary music-industry aesthetic, using a dark visual theme, cinematic imagery, bold typography, and clear navigation. Its purpose is to make the artist's work easy to discover while providing a polished experience across desktop and mobile devices.

**Project type:** Artist portfolio / Frontend web development  
**Artist:** Muthuja Sanahas  
**Industry:** Music and entertainment  
**Architecture:** Static frontend website  
**Primary technologies:** HTML5, CSS3, Vanilla JavaScript

## Highlights

- **Artist-focused landing page:** A prominent hero section introduces the artist and directs visitors to music and video content.
- **Music showcase:** Features releases such as *Dannawada Mawa*, *Hinahena Wala*, and *Adare Piyapath*, with YouTube video players and Spotify links.
- **Video content:** Dedicated presentation of the artist's video work.
- **Photography gallery:** High-resolution image gallery with category filtering (Portraits, Live, BTS) and a lightbox viewer.
- **Artist identity and achievements:** Space to communicate the artist's profile, creative identity, and milestones.
- **Social media links:** Helps visitors discover and follow the artist on official platforms.
- **Responsive interface:** Optimized for smartphones, tablets, laptops, and larger displays.
- **Motion and interaction:** CSS animations and JavaScript-powered interface interactions.
- **SEO foundations:** Includes a sitemap and `robots.txt`, alongside page metadata.
- **Frontend-only architecture:** All current website functionality runs in the browser using HTML, CSS, and JavaScript. No backend or database is included.

## Screenshots

Add project screenshots to a folder named `screenshots` in the repository, then update the paths below if your filenames differ.

| Homepage | Music / Gallery |
| --- | --- |
| `screenshots/homepage.png` | `screenshots/music-gallery.png` |

<!--
When the screenshot files have been added, you can replace this comment with:
![Muthuja Sanahas website homepage](screenshots/homepage.png)
-->

## Technologies Used

| Technology | Purpose |
| --- | --- |
| HTML5 | Website structure and content |
| CSS3 | Styling, layouts, responsive design, and animations |
| Vanilla JavaScript | Navigation, music interactions, gallery filtering, and lightbox behaviour |
| Web manifest | Website / PWA metadata |
| XML sitemap and robots.txt | Search engine discovery and crawling guidance |

The project is intentionally built without a frontend framework, backend runtime, server-side code, or database.

## Project Structure

```text
MUTHUJA NEW/
├── public/                    # Production-ready static website files
│   ├── assets/                # Images, album art, gallery, fonts
│   │   ├── images/
│   │   └── ...
│   ├── css/                   # Stylesheets
│   │   ├── style.css
│   │   ├── animations.css
│   │   └── responsive.css
│   ├── favicon/               # Icons and web manifest assets
│   ├── js/                    # Client-side JavaScript
│   │   ├── main.js            # Navigation, animations, contact form
│   │   ├── music.js           # Discography and modal player
│   │   └── gallery.js         # Photo gallery and lightbox
│   ├── 404.html               # Not found page
│   ├── index.html             # Homepage
│   ├── manifest.webmanifest   # Web app manifest
│   ├── robots.txt             # Search engine crawler instructions
│   ├── security.txt           # Security contact / policy file
│   └── sitemap.xml            # SEO sitemap
├──          # Archived previous backend files
├── HOSTING_GUIDE.md           # Step-by-step hosting guide
└── README.md                  # Project documentation
```

> This tree reflects the project layout. Keep it in sync if the folders or filenames change.

## Run Locally

You can preview the static website locally using any of the following methods.

### Method 1: Visual Studio Code Live Server

1. Open the project folder in Visual Studio Code.
2. Open the `public` folder.
3. Right-click `public/index.html`.
4. Select **Open with Live Server**.

### Method 2: Python

Open a terminal in the project directory and run:

```bash
cd public
python -m http.server 3000
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser.

### Method 3: Node.js / npx

If Node.js is installed, run this from the project root:

```bash
npx serve public
```

Open the local address printed in the terminal.

## Deployment

This is a static website, so the contents of the `public` directory can be deployed to a static hosting provider.

Possible hosting platforms include:

- **GitHub Pages** — host the static website from a GitHub repository.
- **Netlify** — deploy the `public` folder or connect the GitHub repository.
- **Cloudflare Pages** — deploy static files or connect the repository to enable automatic deployments.
- **Vercel** — deploy the static site from a connected Git repository.

For detailed instructions, see [`HOSTING_GUIDE.md`](HOSTING_GUIDE.md).

### GitHub Pages note

The website files are inside `public/`. Configure the deployment workflow or hosting setup to publish that directory. If you choose a different deployment structure, make sure the published directory contains `index.html` and all referenced assets.

## GitHub Repository Setup

Suggested repository name:

```text
muthuja-sanahas-artist-website
```

Suggested repository description:

> A modern, responsive artist portfolio website for Sri Lankan singer Muthuja Sanahas, featuring music releases, videos, artist information, a photo gallery, and social media links.

Suggested repository topics:

`artist-website` `portfolio-website` `frontend-development` `html5` `css3` `javascript` `responsive-design` `music-website`

## Project Objectives

- Create a professional digital presence for a Sri Lankan recording artist.
- Present music, videos, photographs, and artist information in one place.
- Apply responsive web design and frontend development principles.
- Build an accessible, easy-to-navigate experience for visitors on different devices.
- Use a static architecture that is straightforward to test and deploy.

## Future Improvements

Potential enhancements for future iterations include:

- Add new music releases and video content as they become available.
- Expand the gallery and introduce additional gallery categories.
- Improve accessibility and performance based on testing.
- Add analytics with an appropriately configured privacy notice.
- If dynamic features are needed in a future version, evaluate an appropriate third-party service or backend separately. The current project does not include one.

## Credits and Media Rights

This website was created as an artist portfolio project for Muthuja Sanahas.

Music, photographs, logos, artwork, and other media may be owned by the artist or their respective copyright holders. Please obtain permission from the relevant rights holders before reusing or redistributing those materials.

## Developer

**Project:** Muthuja Sanahas — Official Artist Portfolio Website  
**Category:** Frontend Web Development  
**Built with:** HTML5, CSS3, and Vanilla JavaScript

---

If you find this project useful or interesting, feel free to explore the repository.
=======
# muthuja-sanahas-artist-website
A modern, responsive artist portfolio website for Sri Lankan singer Muthuja Sanahas, featuring music releases, videos, artist biography, gallery, and social media integration.
>>>>>>> a2a8cf4a81a4a2f16589ab6df18decd2aee94f01
