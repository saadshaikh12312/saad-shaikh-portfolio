# Saad Shaikh — Full-Stack Developer Portfolio

A modern, high-performance, component-based developer portfolio engineered with **React 18**, **Vite**, **Tailwind CSS**, and **Lucide Icons**. Architected according to industry-standard modular patterns to showcase dual-stack expertise across **MERN Stack Development** and **Java Full-Stack Development** with a refined dark aesthetic, zero-layout-shift auto-typing, normalized 16:9 screenshot galleries, accessible navigation, and comprehensive technical SEO.

**Live Website:** [https://saadshaikh-portfolio.netlify.app/](https://saadshaikh-portfolio.netlify.app/)  
**GitHub Repository:** [https://github.com/saadshaikh12312/saad-shaikh-portfolio](https://github.com/saadshaikh12312/saad-shaikh-portfolio)

---

## 📁 Project Architecture & Directory Structure

```text
saad-shaikh-portfolio/
├── public/                                  # Static public assets served directly by Vite
│   ├── favicon.png                          # Primary 192x192 circular favicon (Google Search optimal)
│   ├── favicon-96.png                       # 96x96 circular favicon
│   ├── favicon-48.png, favicon-32.png       # Standard browser favicon resolutions
│   ├── favicon.ico                          # Multi-resolution ICO (16x16, 32x32, 48x48)
│   ├── apple-touch-icon.png                 # 180x180 iOS home screen touch icon
│   ├── og-image.png                         # High-resolution (1200x630) social sharing preview card
│   ├── robots.txt                           # Crawl rules for Googlebot, Googlebot-Image, & Googlebot-Favicon
│   ├── sitemap.xml                          # XML Sitemap with Google image metadata namespace
│   ├── saad-shaikh-profile.webp             # High-resolution (800x800) WebP profile photo
│   ├── saad-shaikh-profile-400.webp         # Mobile-optimized (400x400) WebP profile photo
│   ├── saad-shaikh-profile.jpg              # JPEG fallback profile photo
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
│   └── resume/                              # Official downloadable PDF resume
│       └── SaadResume_MERN.pdf
│
├── src/                                     # Application source code
│   ├── app/                                 # Core application shell & mounting
│   │   ├── App.jsx                          # Main page composition, loading state & cursor wrapper
│   │   └── main.jsx                         # React 18 root mounting & global style imports
│   │
│   ├── components/                          # Reusable, domain-agnostic UI building blocks
│   │   ├── layout/                          # Structural layout primitives
│   │   │   ├── Navbar.jsx                   # Sticky header with active scroll-spy & mobile drawer
│   │   │   ├── Footer.jsx                   # Compact footer with branding, nav links, & socials
│   │   │   ├── Container.jsx                # Responsive 7XL centered container with standard padding
│   │   │   └── SectionWrapper.jsx           # Section container standardizing vertical rhythm & IDs
│   │   │
│   │   ├── common/                          # Shared presentation elements
│   │   │   ├── Button.jsx                   # Polymorphic button/anchor supporting primary/secondary/peach
│   │   │   ├── SectionHeading.jsx           # Standardized eyebrow badge, title, & descriptive text
│   │   │   ├── SocialLinks.jsx              # Accessible list of social media connection links
│   │   │   ├── IconLink.jsx                 # Accessible icon anchor with screen-reader labels
│   │   │   ├── BackToTop.jsx                # Smooth scroll-to-top action button
│   │   │   └── Icons.jsx                    # Custom SVG icons (GitHub, LinkedIn, LeetCode)
│   │   │
│   │   ├── ui/                              # Repeatable data-driven cards
│   │   │   ├── ProjectCard.jsx              # 16:9 carousel preview, modal trigger, & tech badges
│   │   │   ├── SkillCard.jsx                # Categorized skill badges & category counters
│   │   │   ├── ExperienceCard.jsx           # Work experience timeline card with focus tags
│   │   │   └── EducationCard.jsx            # Academic credentials card with CGPA/percentage pills
│   │   │
│   │   └── feedback/                        # User experience & interaction feedback
│   │       ├── LoadingScreen.jsx            # First-load intro sequence with progress bar
│   │       └── CustomCursor.jsx             # Smooth lerp-following cursor for desktop fine pointers
│   │
│   ├── sections/                            # Page-level domain sections
│   │   ├── Hero/
│   │   │   ├── Hero.jsx                     # Hero greeting, narrative, action CTAs, & social strip
│   │   │   ├── Hero.css                     # Scoped section styles
│   │   │   ├── Typewriter.jsx               # Zero-layout-shift auto-typing role animation
│   │   │   └── ProfileVisual.jsx            # Circular photo portrait with orbital tech badges
│   │   ├── About/About.jsx                  # Editorial bio & 4-card capability grid
│   │   ├── Skills/Skills.jsx                # Filterable technical competencies matrix
│   │   ├── Projects/Projects.jsx            # Featured applications with full lightbox screenshot modal
│   │   ├── Experience/Experience.jsx        # Professional work & mentorship timeline
│   │   ├── Education/Education.jsx          # Academic background, university details, & CGPA scores
│   │   └── Contact/Contact.jsx              # EmailJS message form, copy email, & quick links
│   │
│   ├── data/                                # Clean separation of content from presentation
│   │   ├── personal.js                      # Core personal details, narrative, and photo paths
│   │   ├── navigation.js                    # Navigation links and section anchor IDs
│   │   ├── skills.js                        # Categorized technical skills data
│   │   ├── projects.js                      # Wonderlust & BookLoop data, features, and links
│   │   ├── experience.js                    # Teaching Assistant professional experience data
│   │   ├── education.js                     # B.Sc. Computer Science & HSC academic records
│   │   └── socialLinks.js                   # External profile URLs and icon identifiers
│   │
│   ├── hooks/                               # Custom stateful React hooks
│   │   ├── useActiveSection.js              # Viewport scroll-spy tracking for navbar highlight
│   │   └── useReducedMotion.js              # Accessibility detection for user motion preferences
│   │
│   ├── utils/                               # Helper utilities & constants
│   │   ├── constants.js                     # Scroll offsets, cooldowns, and timing configurations
│   │   └── helpers.js                       # Reusable `cn` class joiner and `scrollToSection` helper
│   │
│   ├── styles/                              # Centralized styling architecture
│   │   ├── index.css                        # Entry stylesheet importing Tailwind & custom layers
│   │   ├── globals.css                      # Base tokens, scrollbar, cards, and mobile responsiveness
│   │   └── animations.css                   # Keyframe animations and reduced-motion rules
│   │
│   └── lib/                                 # Third-party service clients
│       └── emailjs.js                       # Encapsulated EmailJS SDK setup and message dispatch
│
├── .env.example                             # Template for required environment variables
├── .gitignore                               # Standard Git ignore rules
├── index.html                               # HTML5 entry template with SEO, JSON-LD, & font links
├── netlify.toml                             # Netlify deployment and SPA redirect configuration
├── package.json                             # Dependencies, scripts, and package metadata
├── package-lock.json                        # Locked dependency graph
├── postcss.config.js                        # PostCSS configuration for Tailwind CSS
├── tailwind.config.js                       # Theme colors, typography, and utility extensions
├── vite.config.js                           # Vite build and dev-server configuration
└── README.md                                # Comprehensive project documentation
```

---

## 🛠️ Technology Stack & Dependencies

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | [React](https://react.dev/) | `^18.3.1` | Component-driven UI architecture and declarative state |
| **Build Tool** | [Vite](https://vitejs.dev/) | `^5.4.3` | Fast ESM development server & optimized Rollup production builds |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `^3.4.11` | Utility-first CSS framework with customized design tokens |
| **Post-Processing** | [PostCSS](https://postcss.org/) & [Autoprefixer](https://github.com/postcss/autoprefixer) | `^8.4.47` / `^10.4.20` | CSS transformation and cross-browser vendor prefixing |
| **Icons** | [Lucide React](https://lucide.dev/) | `^1.16.0` | Minimalist SVG icons for UI actions, tech tags, and controls |
| **Form Service** | [@emailjs/browser](https://www.emailjs.com/) | `^4.4.1` | Client-side email dispatch with rate-limiting support |
| **Typography** | [Google Fonts](https://fonts.google.com/) | CDN | `Plus Jakarta Sans` (Body & Headings) and `JetBrains Mono` (Code & Meta) |

---

## 🎨 Design System Tokens

The portfolio adheres to a charcoal foundation with soft coral-orange accents:

| Token Name | Hex / Value | Usage |
| :--- | :--- | :--- |
| **Main Background** | `#0A0E14` | Primary site background |
| **Card Surface** | `#11151C` | Default card and container background |
| **Elevated Surface** | `#161B23` | Card hover and active states |
| **Primary Accent** | `#F05335` | Primary buttons, active highlights, and emphasis |
| **Soft Accent** | `#FF986B` | Secondary borders, dots, and typographic highlights |
| **Peach Accent** | `#FFB58F` | Resume CTA button background |
| **Primary Text** | `#F8FAFC` | Main headings and high-contrast labels |
| **Secondary Text** | `#CBD5E1` | Paragraphs and body descriptions |
| **Muted Text** | `#94A3B8` | Metadata, tags, and timestamps |
| **Subtle Border** | `#252D38` | Default card borders, dividers, and input borders |
| **Success Indicator** | `#34D399` | Availability badge and status indicators |

---

## ⚙️ Environment Variables

The contact form uses EmailJS for serverless email dispatch. Create a `.env` file in the project root:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

A reference template is provided in [.env.example](file:///.env.example).

---

## 💻 Local Development & Build Commands

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### 1. Clone & Install
```bash
git clone https://github.com/saadshaikh12312/saad-shaikh-portfolio.git
cd saad-shaikh-portfolio
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The application will be accessible at [http://localhost:3000](http://localhost:3000).

### 3. Production Build
```bash
npm run build
```
Builds the optimized production bundle to the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```
Serves the `dist/` build locally to verify production assets and routing.

---

## 🚀 Deployment Guide

### Netlify (Configured via `netlify.toml`)
This project includes a [netlify.toml](file:///netlify.toml) configured for continuous deployment:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
Pushing to the designated production branch triggers an automatic build on Netlify. Environment variables (`VITE_EMAILJS_*`) should be configured in **Site configuration > Environment variables**.

### Vercel
```bash
npx vercel
```

### GitHub Pages
Configure GitHub Actions with standard Vite static output targeting the `dist` directory.

---

## 🔍 Technical SEO & Performance Highlights

- **Structured Data:** Person & WebSite entities configured via Schema.org JSON-LD in `index.html`.
- **Open Graph & Twitter Cards:** Comprehensive 1200×630 branded preview metadata (`og-image.png`).
- **Favicon Ecosystem:** Clean, borderless circular photo favicon with transparent alpha canvas, sized at standard Google Search multiples (192×192, 96×96, 48×48) and Apple Touch (180×180).
- **Robots Directives:** Explicit allowances for `Googlebot`, `Googlebot-Image`, and `Googlebot-Favicon` in `public/robots.txt`.
- **Accessibility:** `prefers-reduced-motion` detection in custom hooks, keyboard-accessible navigation with Escape dismissal, and semantic HTML throughout.

---

## 📄 License & Attribution

Designed and engineered by **Saad Shaikh** (2026).  
Licensed under the [MIT License](file:///LICENSE).
