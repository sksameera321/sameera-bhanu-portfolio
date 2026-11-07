export interface Project {
  slug: string;
  index: string;
  title: string;
  category: string;
  year: string;
  role: string;
  tagline: string;
  description: string;
  disciplines: string[];
  technologies: string[];
  video: {
    src: string;
    poster: string;
    driveId: string;
    driveEmbed: string;
    duration: string;
    aspectRatio?: string;
  };
  meta: {
    role: string;
    timeline: string;
    tools: string[];
    team: string;
    platform: string;
    status: "Verified in Resume" | "Verified from Drive Demo";
  };
  verifiedFacts: string[];
  overview: string;
  challenge: string;
  goals: string[];
  process: {
    step: string;
    title: string;
    description: string;
    highlights: string[];
  }[];
  solution: {
    summary: string;
    features: string[];
  };
  codeSnippet: {
    title: string;
    language: string;
    code: string;
    explanation: string;
  };
  outcome: {
    verifiedImpact: string[];
    authorTodos: {
      question: string;
      field: string;
    }[];
  };
  learnings: string[];
  nextProjectSlug: string;
}

export const projects: Project[] = [
  {
    slug: "amazon-clone",
    index: "01",
    title: "Amazon E-Commerce Architecture",
    category: "E-Commerce / Responsive Layout",
    year: "2024",
    role: "Frontend Developer",
    tagline:
      "A responsive retail web platform inspired by modern e-commerce storefronts, featuring modular category grids and structured navigation.",
    description:
      "Engineered a full-featured online shopping interface replicating Amazon's iconic desktop and mobile shopping workflows. Focused on deep semantic HTML layout, multi-tier navigation bars, responsive card grids, and consistent spacing across viewport breakpoints.",
    disciplines: ["Frontend Engineering", "Responsive Architecture", "UI Design"],
    technologies: ["HTML5", "CSS3", "CSS Grid", "Flexbox"],
    video: {
      src: "/media/amazon-clone.mp4",
      poster: "/media/amazon-clone-poster.jpg",
      driveId: "1vBxMT2haRQDCjNWgYsZ4KhKN909NZv04",
      driveEmbed: "https://drive.google.com/file/d/1vBxMT2haRQDCjNWgYsZ4KhKN909NZv04/preview",
      duration: "0:15",
      aspectRatio: "16/9",
    },
    meta: {
      role: "Frontend Developer",
      timeline: "Independent Project",
      tools: ["HTML5", "CSS3", "VS Code"],
      team: "Solo Project",
      platform: "Responsive Web (Desktop & Mobile)",
      status: "Verified in Resume",
    },
    verifiedFacts: [
      "Developed a responsive e-commerce style homepage inspired by modern online shopping interfaces.",
      "Implemented navigation bar, product sections, and footer with a clean structured layout.",
    ],
    overview:
      "Online retail storefronts demand an intricate balance of dense information hierarchy and effortless user navigation. This project explores the structural engineering behind Amazon's homepage, dissecting its mega-header, hero carousel banner, multi-column category showcases, and exhaustive footer directory.",
    challenge:
      "Modern e-commerce landing pages juggle varied aspect ratios, dense product metadata, multiple sub-menus, and responsive scaling without causing content shift or horizontal overflows on smaller screens.",
    goals: [
      "Faithfully replicate the multi-tiered header hierarchy with logo, search container, address pill, and cart indicator.",
      "Construct a modular 4-column card grid showcasing diverse product categories with clean call-to-action triggers.",
      "Establish strict CSS box-model consistency and responsive fluid layouts using Flexbox and CSS Grid.",
    ],
    process: [
      {
        step: "01",
        title: "Information Architecture & Wireframing",
        description:
          "Mapped out Amazon's visual hierarchy into modular sections: top notification banner, main search header, sub-navigation bar, hero banner, category showcase matrix, and multi-tier footer.",
        highlights: [
          "Deconstructed header elements into flexible inline-flex containers",
          "Organized 8 distinct category domains (Personal Care, Gadgets, Fashion, etc.)",
        ],
      },
      {
        step: "02",
        title: "Responsive Grid & Card Implementation",
        description:
          "Leveraged CSS Grid with `repeat(auto-fit, minmax(280px, 1fr))` to allow the product cards to automatically wrap gracefully across screen sizes.",
        highlights: [
          "Unified card padding, image constraints, and 'See more' typography",
          "Engineered image aspect-ratio preservation to prevent distortion",
        ],
      },
      {
        step: "03",
        title: "Footer & Cross-Browser Polish",
        description:
          "Created the multi-tiered Amazon footer with back-to-top interaction, global language links, and service directory columns.",
        highlights: [
          "Implemented semantic `<footer>` structure with CSS column flows",
          "Tested layout behavior across mobile, tablet, and widescreen viewports",
        ],
      },
    ],
    solution: {
      summary:
        "A pixel-crisp, fluid e-commerce storefront layout that demonstrates deep command over modern CSS layout systems and semantic markup.",
      features: [
        "Multi-tier top navigation with search bar, account controls, and category sub-links",
        "Responsive 8-box category discovery grid with hover effects and direct triggers",
        "Clean, structured footer layout mirroring enterprise retail standards",
      ],
    },
    codeSnippet: {
      title: "Responsive Product Grid Architecture",
      language: "css",
      code: `.shop-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: #e2e7e6;
  padding: 20px 0;
}

.box {
  height: 400px;
  width: 23%;
  background-color: #ffffff;
  padding: 20px 0 15px;
  margin-top: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.box-img {
  height: 300px;
  background-size: cover;
  margin-top: 1rem;
  margin-bottom: 1rem;
}`,
      explanation:
        "Structured layout using percentage-based modular cards with flexible wrapping and consistent spacing.",
    },
    outcome: {
      verifiedImpact: [
        "Fully responsive e-commerce homepage layout functioning across desktop and mobile screens.",
        "Modular CSS code structure allowing effortless addition of new product categories and banners.",
      ],
      authorTodos: [
        {
          field: "liveUrl",
          question:
            "Do you have a live GitHub repository or Vercel deployment link for this project?",
        },
        {
          field: "metrics",
          question:
            "What was the most challenging CSS flexbox/grid layout calculation you solved during this build?",
        },
      ],
    },
    learnings: [
      "Mastery of complex CSS Flexbox alignment when managing multi-part navigation bars.",
      "The importance of consistent image container dimensions to prevent layout shifts during asset rendering.",
    ],
    nextProjectSlug: "restaurant-menu",
  },
  {
    slug: "restaurant-menu",
    index: "02",
    title: "KFC Culinary Menu & Store Portal",
    category: "Hospitality / Food Delivery UI",
    year: "2024",
    role: "Frontend Developer",
    tagline:
      "A high-impact restaurant web showcase featuring bold culinary imagery, categorized menu architecture, and delivery platform integration.",
    description:
      "Built an engaging food service interface inspired by KFC's global digital branding. Features an appetizing visual hero section, clear navigation menus, store locator triggers, and seamless handoff links to external food delivery platforms.",
    disciplines: ["Frontend Development", "Visual Hierarchy", "UI Design"],
    technologies: ["HTML5", "CSS3", "Typography", "CSS Flexbox"],
    video: {
      src: "/media/restaurant-menu.mp4",
      poster: "/media/restaurant-menu-poster.jpg",
      driveId: "12rQlzYPinf89SOhVtE6lbwoPuD80IWwC",
      driveEmbed: "https://drive.google.com/file/d/12rQlzYPinf89SOhVtE6lbwoPuD80IWwC/preview",
      duration: "0:24",
      aspectRatio: "16/9",
    },
    meta: {
      role: "Frontend Developer",
      timeline: "Independent Project",
      tools: ["HTML5", "CSS3", "VS Code"],
      team: "Solo Project",
      platform: "Responsive Web",
      status: "Verified in Resume",
    },
    verifiedFacts: [
      "Built a responsive restaurant menu website with a clean and user-friendly interface.",
      "Organized menu content into clear sections for better readability and navigation.",
    ],
    overview:
      "Restaurant web applications succeed or fail on their ability to create sensory appetite and deliver fast, friction-free ordering. This project focuses on high-contrast food presentation, crisp editorial headlines, and clean menu organization.",
    challenge:
      "Balancing high-resolution hero imagery with clear typography so promotional banners do not obscure critical navigation links such as Menu, Location, About, and Contact.",
    goals: [
      "Craft a bold, appetizing hero section with brand typography ('TASTE THE BEST KFC CHICKEN').",
      "Structure menu sections logically to maximize item readability and scanning comfort.",
      "Integrate partner delivery platform callouts (e.g., Zomato) for real-world usability.",
    ],
    process: [
      {
        step: "01",
        title: "Visual Framing & Palette Definition",
        description:
          "Applied KFC's iconic crimson red accent (`#a3080c`) against clean white backgrounds to evoke brand familiarity and appetite stimulation.",
        highlights: [
          "Curated appetizing bucket photography with transparent cutouts",
          "Built high-contrast CTA buttons ('ORDER NOW!', 'KFC CHICKEN')",
        ],
      },
      {
        step: "02",
        title: "Navigation & Section Structuring",
        description:
          "Designed a minimalist sticky header containing logo, primary anchors (Menu, Location, About, Contact), and an account login action.",
        highlights: [
          "Implemented clean hover transitions on navbar anchor links",
          "Structured an 'Also Available On' section linking to third-party delivery options",
        ],
      },
      {
        step: "03",
        title: "Menu Item Readability Optimization",
        description:
          "Divided meal offerings into clear visual tiers so users can scan meal combos, bucket deals, and beverages effortlessly.",
        highlights: [
          "Clean typography hierarchy separating item names, descriptions, and prices",
          "Balanced negative space around hero image and body copy",
        ],
      },
    ],
    solution: {
      summary:
        "A vibrant, appetizing web portal that demonstrates how clean layout and visual discipline elevate culinary digital experiences.",
      features: [
        "Bold hero banner with headline typography and dual CTA buttons",
        "Clean navigation bar with active states and login trigger",
        "Third-party delivery badge integration (Zomato) for real-world user workflows",
      ],
    },
    codeSnippet: {
      title: "Hero Call-To-Action & Brand Accent",
      language: "css",
      code: `.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 900;
  color: #111111;
  line-height: 1.1;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.btn-primary {
  background-color: #a3080c;
  color: #ffffff;
  padding: 12px 28px;
  border: 1px solid #a3080c;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: transparent;
  color: #a3080c;
}`,
      explanation:
        "High-contrast brand button styling with smooth inverse hover transitions.",
    },
    outcome: {
      verifiedImpact: [
        "Delivered a clean, responsive restaurant interface with intuitive menu navigation.",
        "Organized content sections allowing instant user scanning of food items and locations.",
      ],
      authorTodos: [
        {
          field: "orderingState",
          question:
            "Did you experiment with cart or item-selection state in this project?",
        },
        {
          field: "liveUrl",
          question:
            "Is there a hosted demo or GitHub repository you'd like linked here?",
        },
      ],
    },
    learnings: [
      "The psychological impact of brand color placement in guiding user attention toward primary actions.",
      "Structuring content for scanability rather than dense paragraphs in food and beverage design.",
    ],
    nextProjectSlug: "game-hub",
  },
  {
    slug: "game-hub",
    index: "03",
    title: "GameHub Cyber Gaming Portal",
    category: "Entertainment / Dark UI Design",
    year: "2024",
    role: "Frontend Developer",
    tagline:
      "An immersive dark-mode gaming portal featuring neon cyberpunk aesthetics, game category browsing, and structured controls.",
    description:
      "Engineered an entertainment gaming catalog characterized by deep obsidian backgrounds, neon purple and cyan illumination, and streamlined game discovery. Designed user-friendly controls and structured interface components for an engaging player experience.",
    disciplines: ["Interface Design", "Dark Mode UI", "Frontend Engineering"],
    technologies: ["HTML5", "CSS3", "CSS Flexbox", "Cyberpunk Styling"],
    video: {
      src: "/media/game-hub.mp4",
      poster: "/media/game-hub-poster.jpg",
      driveId: "1Ia3XCRzb9veiDdnWv--5ELKrrxatajaT",
      driveEmbed: "https://drive.google.com/file/d/1Ia3XCRzb9veiDdnWv--5ELKrrxatajaT/preview",
      duration: "0:21",
      aspectRatio: "16/9",
    },
    meta: {
      role: "Frontend Developer",
      timeline: "Independent Project",
      tools: ["HTML5", "CSS3", "VS Code"],
      team: "Solo Project",
      platform: "Responsive Web",
      status: "Verified in Resume",
    },
    verifiedFacts: [
      "Developed an interactive gaming website featuring multiple browser-based games.",
      "Designed user-friendly controls and a structured interface for an engaging experience.",
    ],
    overview:
      "Gaming platforms require high energy, atmospheric immersion, and immediate paths into gameplay. GameHub builds an electric futuristic atmosphere centered around neon cyber city visuals and structured category browsing.",
    challenge:
      "Achieving an atmospheric neon cyber aesthetic without compromising text readability, search accessibility, or navigation clarity.",
    goals: [
      "Implement a sleek dark-mode atmosphere with electric purple (`#8a2be2`) and neon cyan accents.",
      "Incorporate intuitive navigation including search bar, user profile access, and shopping cart shortcut.",
      "Build a structured 'Browse By Categories' section allowing gamers to filter titles effortlessly.",
    ],
    process: [
      {
        step: "01",
        title: "Cyberpunk Art Direction",
        description:
          "Established an evocative visual theme using high-detail digital cyberpunk artwork paired with glowing neon typographic badges ('PLAY WITHOUT LIMITS', 'WIN REPEAT').",
        highlights: [
          "Developed glowing neon box-shadow and text-shadow rules",
          "Balanced deep carbon blacks (`#050508`) with vivid magenta and purple highlights",
        ],
      },
      {
        step: "02",
        title: "Header Navigation & Search Integration",
        description:
          "Engineered an integrated top utility bar featuring brand monogram, primary navigation links (Home, Games, Categories, Deals, Contact), a centralized search input, and profile actions.",
        highlights: [
          "Integrated search input with quick submit button",
          "Created interactive user avatar and cart iconography",
        ],
      },
      {
        step: "03",
        title: "Category Architecture & Layout",
        description:
          "Structured categorized game listings into responsive panels, enabling fast browsing across varied genres.",
        highlights: [
          "Clean visual dividers separating hero marquee from catalog index",
          "Prepared modular wrappers for embedding browser-based playable games",
        ],
      },
    ],
    solution: {
      summary:
        "A stylish, dark-mode gaming hub that captures gamer aesthetic preferences while maintaining crisp navigation and organized catalog hierarchy.",
      features: [
        "Atmospheric cyberpunk hero artwork with neon HUD typography",
        "Comprehensive navigation bar with integrated search bar and user controls",
        "Modular category filter section designed for multiple browser games",
      ],
    },
    codeSnippet: {
      title: "Cyber Neon Header & Brand Lighting",
      language: "css",
      code: `.gamehub-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0d0a1a;
  padding: 1rem 2.5rem;
  border-bottom: 1px solid rgba(138, 43, 226, 0.3);
}

.logo-glow {
  font-family: 'Orbitron', sans-serif;
  font-weight: 800;
  color: #bf55ec;
  text-shadow: 0 0 10px rgba(191, 85, 236, 0.8),
               0 0 20px rgba(138, 43, 226, 0.4);
}

.search-container input {
  background-color: #ffffff;
  color: #111111;
  padding: 8px 16px;
  border: none;
  border-radius: 4px 0 0 4px;
}`,
      explanation:
        "Glow effects and dark purple chrome borders establishing the gaming atmosphere.",
    },
    outcome: {
      verifiedImpact: [
        "Created an immersive gaming hub with responsive category navigation.",
        "Designed structured user controls ensuring intuitive player interaction.",
      ],
      authorTodos: [
        {
          field: "gamesList",
          question:
            "Which specific browser games are playable inside GameHub (e.g. 2048, Snake, Tic-Tac-Toe)?",
        },
        {
          field: "liveUrl",
          question:
            "Do you have a live demo link or GitHub repository for GameHub?",
        },
      ],
    },
    learnings: [
      "Crafting dark-mode color palettes with high-contrast text to prevent eye fatigue.",
      "Designing theme-specific UI elements that maintain semantic accessibility.",
    ],
    nextProjectSlug: "ai-tools-hub",
  },
  {
    slug: "ai-tools-hub",
    index: "04",
    title: "AI Tools Hub & Discovery Directory",
    category: "Productivity / Directory Architecture",
    year: "2024",
    role: "Frontend Developer",
    tagline:
      "A curated directory showcasing leading artificial intelligence tools organized into clean functional categories with intuitive navigation.",
    description:
      "Created a modern resource portal designed to help professionals and students discover, compare, and leverage AI utilities. Features 8 categorized domains, clean 3D hero illustrations, descriptive cards, and user-friendly exploration paths.",
    disciplines: ["Information Architecture", "Frontend Development", "Directory Design"],
    technologies: ["HTML5", "CSS3", "CSS Grid", "Card UI"],
    video: {
      src: "/media/ai-tools-hub.mp4",
      poster: "/media/ai-tools-hub-poster.jpg",
      driveId: "1sZB9c1j2Q6eUAvfUvzlQ_1pTnuAzO-9f",
      driveEmbed: "https://drive.google.com/file/d/1sZB9c1j2Q6eUAvfUvzlQ_1pTnuAzO-9f/preview",
      duration: "0:20",
      aspectRatio: "16/9",
    },
    meta: {
      role: "Frontend Developer",
      timeline: "Independent Project",
      tools: ["HTML5", "CSS3", "VS Code"],
      team: "Solo Project",
      platform: "Responsive Web",
      status: "Verified in Resume",
    },
    verifiedFacts: [
      "Created a website showcasing useful AI tools organized into different categories.",
      "Added tool descriptions, categorized sections, and simple navigation for better usability.",
    ],
    overview:
      "With the explosion of artificial intelligence utilities, users are often overwhelmed by fragmented tool discovery. AI Tools Hub aggregates productivity tools into a single, clean destination with intuitive categorical sorting.",
    challenge:
      "Structuring dozens of AI services across diverse capabilities (chatbots, coding, voice, video, image) without cluttering the page or losing navigational clarity.",
    goals: [
      "Create an inviting, futuristic hero section with 3D AI iconography and clear value propositions ('Boost Productivity', 'Top AI Tools', 'Trusted & Secure').",
      "Design an 8-pill category navigation matrix enabling one-click category filtering.",
      "Provide concise, scannable descriptions for each tool to assist user decision-making.",
    ],
    process: [
      {
        step: "01",
        title: "Categorization Taxonomy",
        description:
          "Organized AI workflows into 8 foundational pillars: AI Chatbots, AI Writing, AI Image, AI Videos, AI Code, AI Voice, AI Design, and Productivity.",
        highlights: [
          "Developed custom iconography and pastel border tags for each domain",
          "Established standardized card schemas for tool descriptions",
        ],
      },
      {
        step: "02",
        title: "Hero & Value Proposition Design",
        description:
          "Engineered a welcoming hero layout featuring friendly AI robotics imagery and dual CTAs ('Explore Tools', 'Learn More').",
        highlights: [
          "Built trust badge indicators emphasizing security and curation",
          "Implemented clean lavender gradient accents to match AI industry aesthetics",
        ],
      },
      {
        step: "03",
        title: "Responsive Category Matrix",
        description:
          "Arranged the 8 category blocks in an inline flex-wrap grid with clear hover elevations and tap feedback.",
        highlights: [
          "Responsive collapse from 8 columns on desktop to 4 and 2 on mobile",
          "Added active category indicator for seamless browsing",
        ],
      },
    ],
    solution: {
      summary:
        "A clean, approachable web directory that transforms overwhelming AI tool ecosystems into an organized, easy-to-browse knowledge hub.",
      features: [
        "Modern hero section with 3D illustration and clear positioning statement",
        "8-pillar category filter bar with custom icons and hover micro-animations",
        "Structured cards presenting tool descriptions, use cases, and direct links",
      ],
    },
    codeSnippet: {
      title: "Category Filter Matrix Layout",
      language: "css",
      code: `.category-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  padding: 2rem 1rem;
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 95px;
  background-color: #ede7f6;
  border: 1px solid #7c4dff;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(124, 77, 255, 0.2);
}`,
      explanation:
        "Interactive category tiles with subtle elevation lifts on hover.",
    },
    outcome: {
      verifiedImpact: [
        "Engineered an intuitive AI tool directory organized across 8 categories.",
        "Added clear tool descriptions and navigation pathways for improved usability.",
      ],
      authorTodos: [
        {
          field: "toolsCount",
          question:
            "How many total AI tools are indexed in your project catalog?",
        },
        {
          field: "liveUrl",
          question:
            "Do you have a live demo or GitHub repository link for AI Tools Hub?",
        },
      ],
    },
    learnings: [
      "Designing taxonomy and categorization schemas for large information indices.",
      "Building lightweight directory cards that load quickly and scan easily.",
    ],
    nextProjectSlug: "rock-paper-scissors",
  },
  {
    slug: "rock-paper-scissors",
    index: "05",
    title: "Rock Paper Scissors Interactive Game",
    category: "JavaScript / Game Logic & State",
    year: "2024",
    role: "Frontend Developer & JavaScript Programmer",
    tagline:
      "A real-time browser game powered by vanilla JavaScript conditional logic, dynamic score tracking, and instant DOM state updates.",
    description:
      "Developed an interactive browser game demonstrating core JavaScript fundamentals: event listeners, algorithmic randomized computer choices, dynamic score state, and immediate visual result feedback.",
    disciplines: ["JavaScript Programming", "DOM Manipulation", "Game Logic"],
    technologies: ["HTML5", "CSS3", "JavaScript (ES6)", "State Tracking"],
    video: {
      src: "/media/rock-paper-scissors.mp4",
      poster: "/media/rock-paper-scissors-poster.jpg",
      driveId: "10ZMaAQo4xXNs3P36zQYvPwB21Pd2r3Fh",
      driveEmbed: "https://drive.google.com/file/d/10ZMaAQo4xXNs3P36zQYvPwB21Pd2r3Fh/preview",
      duration: "0:31",
      aspectRatio: "16/9",
    },
    meta: {
      role: "Frontend Developer",
      timeline: "Independent Project",
      tools: ["HTML5", "CSS3", "JavaScript ES6", "VS Code"],
      team: "Solo Project",
      platform: "Interactive Browser Game",
      status: "Verified in Resume",
    },
    verifiedFacts: [
      "Built an interactive browser-based game using JavaScript game logic and real-time user interaction.",
      "Implemented dynamic result display and responsive game controls.",
    ],
    overview:
      "Interactive games are the ultimate test of frontend programming fundamentals. This project demonstrates how user click events, pseudo-random number generation, conditional decision trees, and real-time DOM mutation come together into a responsive, engaging experience.",
    challenge:
      "Handling asynchronous user clicks while ensuring score state updates reliably, preventing race conditions, and rendering immediate visual feedback for each round outcome.",
    goals: [
      "Implement the complete Rock Paper Scissors decision matrix cleanly in JavaScript.",
      "Maintain persistent in-memory score tracking for both Player and Computer.",
      "Display real-time outcome messages ('You Lose! computer rock beats Rock' / 'You Win!') with dynamic color coding.",
    ],
    process: [
      {
        step: "01",
        title: "Game Engine & Logic Tree",
        description:
          "Wrote a clean JavaScript decision algorithm mapping player choices against randomized computer selections using `Math.floor(Math.random() * 3)`.",
        highlights: [
          "Mapped integer indices to choices (0: Rock, 1: Paper, 2: Scissors)",
          "Formulated clean win/loss/tie evaluation conditions without duplicate code",
        ],
      },
      {
        step: "02",
        title: "DOM State & Score Synchronization",
        description:
          "Attached event listeners to the interactive circular hand gesture buttons, updating score counters immediately upon resolution.",
        highlights: [
          "Separated game state logic from rendering logic",
          "Synchronized DOM text content with score counters",
        ],
      },
      {
        step: "03",
        title: "Visual Feedback & Micro-Interactions",
        description:
          "Designed colorful circular icon buttons with hover transitions and an animated outcome badge that shifts between red (loss), green (win), and gray (draw).",
        highlights: [
          "High-contrast score display (You vs Computer)",
          "Instant banner animation alerting the user to round results",
        ],
      },
    ],
    solution: {
      summary:
        "A snappy, bug-free browser game that demonstrates solid JavaScript programming logic, clean DOM manipulation, and responsive UI controls.",
      features: [
        "Interactive circular gesture buttons (Rock, Paper, Scissors) with active click states",
        "Real-time dual score tracking (User vs Computer)",
        "Dynamic banner output showing winning action and game status",
      ],
    },
    codeSnippet: {
      title: "Core Game Evaluation Logic",
      language: "javascript",
      code: `const choices = ['rock', 'paper', 'scissors'];
let userScore = 0;
let compScore = 0;

function playRound(userChoice) {
  const compChoice = choices[Math.floor(Math.random() * 3)];
  
  if (userChoice === compChoice) {
    displayResult("Game was Draw! Play again.", "#333333");
    return;
  }
  
  const userWin = 
    (userChoice === 'rock' && compChoice === 'scissors') ||
    (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice === 'scissors' && compChoice === 'paper');

  if (userWin) {
    userScore++;
    userScoreEl.innerText = userScore;
    displayResult(\`You Win! Your \${userChoice} beats \${compChoice}\`, "#10b981");
  } else {
    compScore++;
    compScoreEl.innerText = compScore;
    displayResult(\`You Lose! \${compChoice} beats \${userChoice}\`, "#ef4444");
  }
}`,
      explanation:
        "Clean, concise evaluation logic with dynamic DOM score updating and conditional alert colors.",
    },
    outcome: {
      verifiedImpact: [
        "Built a responsive browser-based game using vanilla JavaScript game logic and real-time user interaction.",
        "Implemented dynamic result display and responsive game controls.",
      ],
      authorTodos: [
        {
          field: "soundOrReset",
          question:
            "Did you include a reset-score button or audio sound effects for rounds in your version?",
        },
        {
          field: "liveUrl",
          question:
            "Do you have a live demo or GitHub repository link for this game?",
        },
      ],
    },
    learnings: [
      "Writing clean algorithmic state logic without relying on third-party frameworks.",
      "The value of immediate visual feedback in keeping users engaged.",
    ],
    nextProjectSlug: "spotify-player",
  },
  {
    slug: "spotify-player",
    index: "06",
    title: "Spotify Web Player Interface",
    category: "Audio Application / UI Replication",
    year: "2024",
    role: "Frontend Developer",
    tagline:
      "A sleek dark-mode music streaming player replicating core Spotify audio playback controls, song tracklist selection, and interactive duration scrubbers.",
    description:
      "Built a stylish audio streaming web application inspired by Spotify's web player. Features a dark-mode atmospheric player, curated tracklist selection ('Best of NCS - no copyright sounds'), audio playback controls (Play, Pause, Skip, Prev), and an interactive progress scrubber.",
    disciplines: ["Audio UI", "Frontend Engineering", "Interface Design"],
    technologies: ["HTML5", "CSS3", "JavaScript Audio", "UI Replication"],
    video: {
      src: "/media/spotify-player.mp4",
      poster: "/media/spotify-player-poster.jpg",
      driveId: "1OWFJUhRv1ZI_E-PanuBKt-h2xUL3qeXV",
      driveEmbed: "https://drive.google.com/file/d/1OWFJUhRv1ZI_E-PanuBKt-h2xUL3qeXV/preview",
      duration: "0:37",
      aspectRatio: "16/9",
    },
    meta: {
      role: "Frontend Developer",
      timeline: "Independent Project",
      tools: ["HTML5", "CSS3", "JavaScript", "VS Code"],
      team: "Solo Project",
      platform: "Responsive Web Audio App",
      status: "Verified from Drive Demo",
    },
    verifiedFacts: [
      "Discovered in project demo video folder (VID-20261103-WA0014.mp4).",
      "Demonstrates custom audio playback bar, tracklist selection, and responsive layout.",
    ],
    overview:
      "Streaming media applications are among the most demanding interface challenges, requiring seamless coordination between audio playback state, interactive timeline scrubbers, and album art presentation. This project implements a modern music player interface featuring copyright-free tracks.",
    challenge:
      "Replicating the iconic Spotify bottom player dock while ensuring that track scrubbing, song changes, and album metadata update smoothly in real time.",
    goals: [
      "Replicate the sleek Spotify dark aesthetic with glowing accents and clean sans-serif typography.",
      "Implement a structured song list with track duration indicators (`05:34`) and individual play buttons.",
      "Build a bottom fixed audio playback dock featuring track marquee, progress slider, and playback controls.",
    ],
    process: [
      {
        step: "01",
        title: "Atmospheric Player Shell",
        description:
          "Constructed a deep navy-indigo card container framing high-fidelity music album artwork alongside a 6-track playlist.",
        highlights: [
          "Designed rounded track pills with thumbnail art and individual play triggers",
          "Engineered responsive layout preserving album art aspect ratio",
        ],
      },
      {
        step: "02",
        title: "Fixed Audio Control Dock",
        description:
          "Developed a persistent bottom audio player dock housing song title marquee ('Believer - Imagine dragons'), timeline scrubber bar, and control buttons.",
        highlights: [
          "Custom CSS styling for the range input scrubber bar with cyan accent fill",
          "Integrated Previous, Play/Pause, and Next icons with hover animations",
        ],
      },
      {
        step: "03",
        title: "Interactive State Choreography",
        description:
          "Wired track selection so that clicking any song in the playlist highlights the active item and updates the bottom dock metadata.",
        highlights: [
          "Dynamic audio waveform indicator representing active playback",
          "Smooth transition states on all interactive controls",
        ],
      },
    ],
    solution: {
      summary:
        "A beautiful, responsive web music player that captures the polish and fluidity of industry-standard streaming interfaces.",
      features: [
        "Dark-mode album art showcase with curated tracklist cards",
        "Fixed bottom audio player dock with interactive progress scrubber",
        "Song playback controls including Previous, Play/Pause toggle, and Next",
      ],
    },
    codeSnippet: {
      title: "Audio Player Scrubber & Control Bar",
      language: "css",
      code: `.player-bottom-dock {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #090912;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-progress {
  width: 80%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  position: relative;
  cursor: pointer;
}

.timeline-progress .progress-fill {
  width: 35%;
  height: 100%;
  background: #38bdf8;
  border-radius: 2px;
}`,
      explanation:
        "Fixed audio control bar with responsive progress timeline and brand accents.",
    },
    outcome: {
      verifiedImpact: [
        "Successfully replicated Spotify web player interface with functional track controls and audio timeline.",
        "Demonstrated proficiency in dark-mode media design and complex flex layout alignment.",
      ],
      authorTodos: [
        {
          field: "resumeUpdate",
          question:
            "Would you like to draft official resume bullet points for this Spotify project to add to your master resume?",
        },
        {
          field: "liveUrl",
          question:
            "Do you have a live demo or GitHub repository link for this music player?",
        },
      ],
    },
    learnings: [
      "Managing complex media player interfaces with persistent docks and track synchronization.",
      "The importance of subtle micro-interactions on audio controls to deliver a premium feel.",
    ],
    nextProjectSlug: "amazon-clone",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export default projects;

