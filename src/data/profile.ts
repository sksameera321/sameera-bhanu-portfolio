export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  grade?: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; status?: "proficient" | "learning" | "familiar" }[];
}

export interface SocialLink {
  platform: string;
  url: string;
  display: string;
}

export interface ProfileData {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  discipline: string;
  positioningStatement: string;
  heroHeadline: string[];
  statusBadge: string;
  isAvailable: boolean;
  contact: {
    email: string;
    phone: string;
    location: string;
    timezone: string;
    utcOffset: string;
  };
  socials: SocialLink[];
  bio: {
    lead: string;
    narrative: string[];
    philosophy: string;
  };
  education: EducationItem[];
  experience: {
    status: string;
    role: string;
    target: string;
    note: string;
  };
  skillCategories: SkillCategory[];
  coreStrengths: string[];
  languages: string[];
  resumeUrl: string;
}

export const profile: ProfileData = {
  name: "Shaik Sameera Bhanu",
  firstName: "Sameera",
  lastName: "Bhanu",
  role: "Frontend Developer",
  discipline: "Interface Craft & Web Development Enthusiast",
  positioningStatement:
    "Engineering responsive, editorial-quality web interfaces with obsessive attention to typographic rhythm, accessibility, and high-performance interaction.",
  heroHeadline: [
    "SHAIK SAMEERA BHANU",
    "FRONTEND DEVELOPER &",
    "INTERFACE CRAFTSPERSON",
  ],
  statusBadge: "Available for Frontend Internships",
  isAvailable: true,
  contact: {
    email: "sksameera321s@gmail.com",
    phone: "+91 9063372716",
    location: "Narasaraopet, Andhra Pradesh, India",
    timezone: "Asia/Kolkata",
    utcOffset: "UTC +5:30",
  },
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com",
      display: "github.com/sameera",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com",
      display: "linkedin.com/in/sameera-bhanu",
    },
    {
      platform: "Email",
      url: "mailto:sksameera321s@gmail.com",
      display: "sksameera321s@gmail.com",
    },
  ],
  bio: {
    lead:
      "A first-year engineering student dedicated to the craft of the browser. Driven by precision in layout, fluid typography, and the discipline of pure code.",
    narrative: [
      "Currently pursuing B.Tech at Vishnu Women's University, I build responsive web experiences that prioritize structural clarity, user comfort, and seamless interaction.",
      "My foundational toolset is built on semantic HTML5, modern CSS3 layout systems (Flexbox, CSS Grid), and modern JavaScript. I am currently deepening my architectural capabilities through React.js while strengthening computer science problem-solving with C++ and Data Structures & Algorithms.",
      "I believe code should feel invisible to the user: fast, reliable, and aesthetically resonant.",
    ],
    philosophy:
      "Design is not merely decoration; it is visual logic and respect for the user's focus. Every margin, typeface pairing, and transition curve must serve purpose and clarity.",
  },
  education: [
    {
      institution: "Vishnu Women’s University",
      degree: "B.Tech — First Year (Computer Science / Engineering)",
      year: "Expected Graduation: 2029–30",
      description:
        "Building strong foundations in computational thinking, modern web engineering, C++, and Data Structures & Algorithms.",
    },
    {
      institution: "VIT Junior College",
      degree: "Intermediate Education",
      year: "Completed",
      grade: "98% Aggregate",
      description:
        "Graduated with top academic honors (98%), demonstrating rigorous discipline, quantitative mastery, and consistent work ethic.",
    },
  ],
  experience: {
    status: "Fresher",
    role: "Aspiring Frontend Developer",
    target: "Open to Frontend Development Internships",
    note:
      "Ready to contribute to engineering teams with rapid learning ability, clean code practices, and genuine enthusiasm for interface design.",
  },
  skillCategories: [
    {
      title: "Frontend Engineering",
      skills: [
        { name: "HTML5 & Semantic Markup", status: "proficient" },
        { name: "CSS3 & Responsive Layouts (Flexbox/Grid)", status: "proficient" },
        { name: "JavaScript (ES6+)", status: "proficient" },
        { name: "React.js", status: "learning" },
      ],
    },
    {
      title: "Programming & Computer Science",
      skills: [
        { name: "C++ Programming", status: "learning" },
        { name: "Data Structures & Algorithms", status: "learning" },
      ],
    },
    {
      title: "Developer Tools & AI Acceleration",
      skills: [
        { name: "VS Code", status: "proficient" },
        { name: "Git & GitHub Version Control", status: "proficient" },
        { name: "ChatGPT Workflows", status: "proficient" },
        { name: "Claude AI Workflows", status: "proficient" },
      ],
    },
  ],
  coreStrengths: [
    "Problem Solving",
    "Quick Learner",
    "Teamwork & Collaboration",
    "Clear Communication",
    "Execution Consistency",
  ],
  languages: ["Telugu", "English", "Hindi"],
  resumeUrl: "/Sameera_Resume.pdf",
};
