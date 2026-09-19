# Saad Shaikh — Full-Stack Developer Portfolio

A modern, high-performance, single-page developer portfolio engineered with **React 18**, **Vite**, **Tailwind CSS**, and **Lucide Icons**. Designed to showcase dual-stack expertise across **MERN Stack Development** and **Java Full-Stack Development** with a dark developer aesthetic, zero-layout-shift auto-typing, normalized 16:9 project galleries, and balanced typography.

---

## 📁 Project Folder & File Structure

```text
saad-shaikh-portfolio/
│
├── public/                                  # Static public assets served directly by Vite
│   ├── images/                              # Verified project screenshot assets
│   │   ├── bookloop/                        # Screenshots for BookLoop platform
│   │   │   ├── 01-browse-books.png          # Available books catalog & filter view
│   │   │   ├── 02-landing.png               # Landing banner & student marketplace view
│   │   │   └── 03-add-book.png              # Add/Host book listing form view
│   │   └── wonderlust/                      # Screenshots for Wonderlust platform
│   │       ├── 01-home-explore.png          # Explore listings & category filter bar
│   │       ├── 02-listing-details.png       # Accommodation details & pricing view
│   │       ├── 03-mapbox.png                # Interactive Mapbox geolocation view
│   │       ├── 04-add-listing.png           # Add new listing creation form
│   │       ├── 05-update-listing.png        # Edit/Update listing view
│   │       ├── 06-signup.png                # User registration view
│   │       ├── 07-login.png                 # User authentication view
│   │       └── 08-reviews.png               # Review & 5-star rating subsystem
│   └── Saad_Shaikh_Resume.pdf               # Downloadable official resume PDF
│
├── src/                                     # Application source code
│   ├── assets/                              # Component-specific styles and static assets
│   │
│   ├── components/                          # Modular React UI components
│   │   ├── About.jsx                        # Dual-stack narrative & 4-card capability grid
│   │   ├── Contact.jsx                      # Contact CTA, email copy, form & social links
│   │   ├── DeveloperIllustration.jsx        # Custom stylized SVG developer desk illustration
│   │   ├── Education.jsx                    # Verified academic cards (B.Sc. & HSC metrics)
│   │   ├── Experience.jsx                   # Professional timeline (AMSHRADHA LLP TA role)
│   │   ├── Footer.jsx                       # Compact footer with branding, nav & socials
│   │   ├── Hero.jsx                         # Main hero with zero-shift auto-typing & CTAs
│   │   ├── Icons.jsx                        # Custom SVG vector icons (GitHub, LinkedIn, LeetCode)
│   │   ├── Navbar.jsx                       # Sticky navigation with mobile drawer & active tracking
│   │   ├── Projects.jsx                     # Compact project showcase with 16:9 screenshot carousel
│   │   ├── Skills.jsx                       # Categorized technical skills matrix with filter tabs
│   │   └── Typewriter.jsx                   # Layout-stable auto-typing animation engine
│   │
│   ├── data/                                # Centralized data configuration
│   │   └── portfolioData.js                 # Single source of truth for all content & links
│   │
│   ├── App.jsx                              # Root application layout component
│   ├── index.css                            # Tailwind layers, custom scrollbars, animations & tokens
│   └── main.jsx                             # Application entry point & DOM root mounting
│
├── index.html                               # HTML5 entry template with Google Fonts & metadata
├── package.json                             # Dependencies, scripts, and build configuration
├── package-lock.json                        # Locked dependency tree
├── postcss.config.js                        # PostCSS configuration for Tailwind CSS
├── tailwind.config.js                       # Custom theme colors, fonts, shadows, and animations
├── vite.config.js                           # Vite build tool and development server configuration
└── README.md                                # Comprehensive project documentation
```

---

## 🛠️ Technology Stack & Dependencies

| Technology / Library | Version | Purpose |
| :--- | :--- | :--- |
| **React** | `^18.3.1` | Component-driven UI architecture and state management |
| **Vite** | `^5.4.3` | Ultra-fast build tool, local dev server & production bundler |
| **Tailwind CSS** | `^3.4.11` | Utility-first styling framework with custom design tokens |
| **Lucide React** | `^1.16.0` | Minimalist icons for UI actions, tech tags, and metrics |
| **PostCSS & Autoprefixer** | `^8.4.47` | CSS transformation and cross-browser vendor prefixing |
| **Google Fonts** | CDN | `Plus Jakarta Sans` (Body & Headings) and `JetBrains Mono` (Monospace tags) |

---

## 🎨 Design System & Visual Specification

### Color Tokens

- **Obsidian Dark Background**: `#0a0e14`
- **Elevated Card Surface**: `#11151c` with `1px solid rgba(255, 255, 255, 0.07)` border
- **Hover Card Surface**: `#131922` with `1px solid rgba(255, 255, 255, 0.16)` border
- **Primary Accent (Terracotta / Coral)**: `#f05335` (hover: `#e04224`)
- **Primary Text Neutral**: `#ffffff` (Headings) and `#e2e8f0` / `#94a3b8` (Body text)
- **Monospace Accent / Tags**: `#f05335` (Accent), `#38bdf8` (Sky), `#4ade80` (Green)

### Typography

- **Headings & Body**: `Plus Jakarta Sans`, `Inter`, `sans-serif` (tight tracking `-0.02em` to `-0.03em`)
- **Code, Badges & Numbers**: `JetBrains Mono`, `Space Mono`, `monospace`

### Standard Spacing Tokens

- **Desktop Section Padding**: `py-20` (~80px)
- **Tablet Section Padding**: `py-16` (~64px)
- **Mobile Section Padding**: `py-14` (~56px)
- **Navbar Offset Margin**: `scroll-margin-top: 5rem`

### Interactive Transitions

- **Standard Duration**: `180ms ease` / `200ms cubic-bezier(0.16, 1, 0.3, 1)`
- **Button Lift**: `hover:-translate-y-0.5` with subtle glow shadow
- **Card Hover**: `hover:-translate-y-1` with border illumination
- **Accessibility**: Full `@media (prefers-reduced-motion: reduce)` support to eliminate transitions for users who request reduced motion.

---

## 🧩 Component Architecture Breakdown

### 1. `Navbar.jsx`
- Sticky header with blurred backdrop (`backdrop-blur-md`).
- Active section spy detecting the user's viewport position (`#home`, `#about`, `#skills`, `#projects`, `#experience`, `#education`, `#contact`).
- Direct action buttons: **GitHub Profile** and **Download Resume**.
- Responsive mobile hamburger menu with smooth drawer animation.

### 2. `Hero.jsx` & `Typewriter.jsx`
- Fixed-dimension title container eliminating all layout shifting during auto-typing.
- Rotating phrases:
  1. `Full-Stack Developer`
  2. `MERN Stack Developer`
  3. `Java Full-Stack Developer`
  4. `Backend & API Developer`
- Integrated developer vector illustration (`DeveloperIllustration.jsx`) with live status indicator (`Available for Opportunities`).
- Quick social connection bar (GitHub, LinkedIn, LeetCode, Email).

### 3. `About.jsx`
- Editorial 2-column layout highlighting dual-stack specialization.
- 4 capability cards:
  - `01 Java Backend` (REST APIs, Spring Boot, MySQL)
  - `02 MERN Stack` (React, Express, Node.js, MongoDB)
  - `03 Frontend UI` (Tailwind, Bootstrap, HTML5, CSS3)
  - `04 Core CS` (DSA, OOP, DBMS, MVC workflows)

### 4. `Skills.jsx`
- Interactive filter bar (`All`, `Frontend`, `Backend`, `Databases`, `Tools & Technologies`, `Core Concepts`).
- 5 categorized cards with icon indicators and hover pill tags.

### 5. `Projects.jsx`
- Compact showcase cards with balanced vertical height.
- **Uniform 16:9 Viewport** (`aspect-[16/9]`) with mock browser header and image counter (`01 / 08`).
- Thumbnail gallery strip with smooth crossfade and active border ring.
- Fullscreen zoom modal lightbox with keyboard/click dismissal.
- **Featured Projects**:
  - **Wonderlust**: Full-stack travel & accommodation marketplace (Airbnb-inspired).
  - **BookLoop**: Student-focused textbook exchange & donation marketplace.

### 6. `Experience.jsx`
- Professional work experience block.
- **AMSHRADHA LLP**: *Teaching Assistant – DSA (Java), Part-Time* (August 2026 – December 2026 \| Remote / Pune, India).
- Core focus tags: `Data Structures & Algorithms`, `Java Debugging`, `Technical Mentorship`, `Problem-Solving Approaches`.

### 7. `Education.jsx`
- Polished academic cards with verified degrees and scores.
- **B.Sc. Computer Science**: SSVPS College, Dhule · North Maharashtra University (2023 – 2026 \| **CGPA: 8.70** \| **Principal CGPA: 9.02**).
- **HSC**: Jai Hind Junior College (2022 – 2023 \| **Percentage: 60%**).

### 8. `Contact.jsx` & `Footer.jsx`
- Headline: *"Let's build something useful."*
- One-click copy for email (`saadshaikh966532@gmail.com`).
- Interactive contact dispatch form with confirmation state.
- Compact footer with social icons, coordinates, and copyright.

---

## 📊 Single Source of Truth (`portfolioData.js`)

All content, project details, academic metrics, and social links are structured in `src/data/portfolioData.js`:

```javascript
export const personalInfo = {
  name: "Saad Shaikh",
  role: "Full-Stack Developer",
  positioning: "MERN Stack Development + Java Full-Stack Development",
  location: "Pune, Maharashtra, India",
  status: "Available for Opportunities",
  email: "saadshaikh966532@gmail.com",
  github: "https://github.com/saadshaikh12312",
  linkedin: "https://www.linkedin.com/in/saad-shaikh-aminoddin",
  leetcode: "https://leetcode.com/u/XGHqgeoovn/",
  resumeUrl: "/Saad_Shaikh_Resume.pdf",
  // ...
};
```

---

## 💻 Local Development & Build Commands

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🚀 Deployment Guide

The production output in `dist/` is completely static and can be deployed instantly to any host:

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
```bash
npx netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
1. Push the repository to GitHub.
2. Configure GitHub Actions with the standard Vite React static workflow pointing to `dist/`.

---

## 📄 License & Attribution

Designed and engineered for **Saad Shaikh** (2026). Built with clean code, curiosity, and consistency.