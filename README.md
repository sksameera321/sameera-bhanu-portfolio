# Shaik Sameera Bhanu — Editorial Portfolio

> An award-level, editorial-quality portfolio website designed for **Shaik Sameera Bhanu**, Frontend Developer & Interface Craftsperson. Engineered to Site of the Day / Awwwards standards.

---

## ✦ Design Direction & System

- **Aesthetic**: Swiss editorial layout, high contrast, generous whitespace, asymmetric typography grids, and razor-thin architectural borders.
- **Typography**:
  - **Display / Hero**: *Instrument Serif* — Expressive, monumental, literary contrast.
  - **Interface & Narrative**: *Plus Jakarta Sans* — Hyper-precise geometric grotesk for maximum legibility.
  - **Technical Meta & Ledgers**: *JetBrains Mono* — Clean tabular numbers for timestamps, coordinates, and code.
- **Color System**:
  - **Dark Mode**: Obsidian Canvas (`#0A0A0C`), Carbon Card (`#121215`), Subdued Border (`rgba(255, 255, 255, 0.08)`), Crisp Alabaster Text (`#F4F4F6`).
  - **Light Mode**: Gallery White (`#FAFAFA`), Soft Stone Card (`#F0F0F2`), Thin Inked Border (`rgba(0, 0, 0, 0.07)`), Dense Carbon Text (`#0D0D10`).
  - **Signature Accent**: Electric Safety Vermilion (`#FF4D00` / `#E64500`).
- **Motion & Interaction**:
  - Framer Motion page transitions and scroll-driven reveals.
  - Hardware-accelerated custom cursor with contextual magnetic actions (`VIEW`, `PLAY`, `DOWNLOAD`, `THEME`).
  - Native video preview on project hover.
  - Muted showreel preview with dual-source video delivery.
  - Full respect for `@media (prefers-reduced-motion: reduce)`.

---

## ✦ Project Index & Video Demonstration Mapping

All demo videos from Google Drive (`1dRcgn07qlF1k6CLIqBa_2sPh3gKi1uzb`) are downloaded to `/public/media/` and mapped to verified case studies:

| # | Project Name | Route | Technologies | Verified Video Source |
| :-: | :--- | :--- | :--- | :--- |
| **01** | **Amazon E-Commerce Architecture** | `/work/amazon-clone` | HTML5, CSS3, Flexbox, CSS Grid | `amazon-clone.mp4` (Drive ID: `1vBxMT2haRQDCjNWgYsZ4KhKN909NZv04`) |
| **02** | **KFC Culinary Menu & Store Locator** | `/work/restaurant-menu` | HTML5, CSS3, Visual Hierarchy | `restaurant-menu.mp4` (Drive ID: `12rQlzYPinf89SOhVtE6lbwoPuD80IWwC`) |
| **03** | **GameHub Cyber Gaming Portal** | `/work/game-hub` | HTML5, CSS3, Cyber UI, Flexbox | `game-hub.mp4` (Drive ID: `1Ia3XCRzb9veiDdnWv--5ELKrrxatajaT`) |
| **04** | **AI Tools Hub & Discovery Directory** | `/work/ai-tools-hub` | HTML5, CSS3, Card Grids, Taxonomy | `ai-tools-hub.mp4` (Drive ID: `1sZB9c1j2Q6eUAvfUvzlQ_1pTnuAzO-9f`) |
| **05** | **Rock Paper Scissors Interactive Game** | `/work/rock-paper-scissors` | HTML5, CSS3, JavaScript ES6 | `rock-paper-scissors.mp4` (Drive ID: `10ZMaAQo4xXNs3P36zQYvPwB21Pd2r3Fh`) |
| **06** | **Spotify Web Player Interface** | `/work/spotify-player` | HTML5, CSS3, JavaScript Audio | `spotify-player.mp4` (Drive ID: `1OWFJUhRv1ZI_E-PanuBKt-h2xUL3qeXV`) |

---

## ✦ Site Architecture & Routes

```
/                         -> Editorial Home (Hero, Selected Work, Capabilities, About, Contact, Footer)
/work/[slug]              -> Dedicated Case Studies (Custom Minimal Player, Process, Code, Facts, TODOs)
/about                    -> Biographical Narrative, 98% Intermediate Distinction, Skill Matrix
/contact                  -> Interactive Contact Form with mailto fallback & 1-click email copy
/resume                   -> Interactive Resume Ledger + Embedded PDF View (/Sameera_Resume.pdf)
/sitemap.xml              -> Auto-generated dynamic SEO sitemap
/robots.txt               -> Crawling directives
```

---

## ✦ Getting Started Locally

### Prerequisites
- Node.js 18.17+ or Node.js 20+
- npm or pnpm or yarn

### Installation
```bash
git clone <repository-url>
cd bold-meitner
npm install
```

### Running Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
npm run start
```

---

## ✦ How to Add a New Project

The portfolio is architected so that new case studies can be added **strictly through data** without modifying any React component:

1. Open `src/data/projects.ts` (or `data/projects.ts`).
2. Add a new object to the `projects` array matching the `Project` interface:

```typescript
{
  slug: "new-project-slug",
  index: "07",
  title: "Project Title",
  category: "Web Application / React",
  year: "2026",
  role: "Frontend Developer",
  tagline: "One sentence outcome-focused positioning statement.",
  description: "Detailed description of the interface and technical architecture.",
  disciplines: ["Frontend Engineering", "UI Design"],
  technologies: ["React.js", "TypeScript", "Tailwind CSS"],
  video: {
    src: "/media/new-project.mp4",
    poster: "/media/new-project-poster.jpg",
    driveId: "OPTIONAL_DRIVE_ID",
    driveEmbed: "https://drive.google.com/file/d/FILE_ID/preview",
    duration: "0:30",
  },
  meta: {
    role: "Frontend Developer",
    timeline: "3 Weeks",
    tools: ["React", "Tailwind CSS", "VS Code"],
    team: "Solo Project",
    platform: "Responsive Web",
    status: "Verified in Resume",
  },
  verifiedFacts: [
    "Factually verified statement from resume.",
  ],
  overview: "Deep dive into problem statement...",
  challenge: "Core engineering challenges solved...",
  goals: ["Goal 1", "Goal 2"],
  process: [
    {
      step: "01",
      title: "Discovery & Structure",
      description: "How the layout was planned.",
      highlights: ["Key architecture decision 1"],
    },
  ],
  solution: {
    summary: "Final outcome overview.",
    features: ["Feature 1", "Feature 2"],
  },
  codeSnippet: {
    title: "Key Algorithmic Function",
    language: "typescript",
    code: `// Your code here`,
    explanation: "What this function calculates.",
  },
  outcome: {
    verifiedImpact: ["Measured or verified outcome."],
    authorTodos: [
      {
        field: "metrics",
        question: "Prompt for author to fill in later.",
      },
    ],
  },
  learnings: ["What this project taught you."],
  nextProjectSlug: "amazon-clone",
}
```

3. Place your video and poster frame in `/public/media/`:
   - `/public/media/new-project.mp4`
   - `/public/media/new-project-poster.jpg`
4. The homepage index, navigation, video players, and `/work/[slug]` route will automatically generate with full static optimization (`SSG`)!

---

## ✦ Deploying to Vercel (Zero-Config)

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete editorial portfolio for Shaik Sameera Bhanu"
   git push origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and import your repository.
3. Next.js App Router settings will be automatically detected.
4. Click **Deploy**. Vercel will build all static pages and serve assets with zero configuration.

---

## ✦ Content Integrity & Author Checklist

The site strictly honors facts from Sameera's resume. The following items can be provided by Sameera at her convenience to replace placeholder prompts:

- [ ] **GitHub & Live Links**: Add live Vercel links or GitHub repository URLs for each case study in `src/data/projects.ts`.
- [ ] **LinkedIn URL**: Replace placeholder link in `src/data/profile.ts` with Sameera's exact profile handle.
- [ ] **Formspree Endpoint**: Replace endpoint in `src/components/home/ContactSection.tsx` with Sameera's personal Formspree key (form already features automatic `mailto:` fallback).
- [ ] **Spotify Clone Resume Update**: Consider adding the Spotify Web Player project to Sameera's master resume draft.
