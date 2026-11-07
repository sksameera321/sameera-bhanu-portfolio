"use client";

import React from "react";
import { Code2, Layout, Cpu, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function Capabilities() {
  const capabilities = [
    {
      num: "01",
      icon: Layout,
      title: "Responsive Interface Engineering",
      description:
        "Building pixel-accurate, fluid layouts using semantic HTML5 and modern CSS3 (Flexbox, CSS Grid). Focused on layout stability, fluid breakpoints, and typographic balance.",
      skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design"],
    },
    {
      num: "02",
      icon: Code2,
      title: "Interactive JavaScript & State Logic",
      description:
        "Developing real-time client-side interactions, event-driven game states, dynamic DOM manipulation, and input validation without heavy external libraries.",
      skills: ["JavaScript (ES6+)", "DOM Manipulation", "Event Handling", "State Logic"],
    },
    {
      num: "03",
      icon: Sparkles,
      title: "Component Architecture with React.js",
      description:
        "Currently mastering React.js principles: component composition, reusable UI patterns, hooks, and clean state distribution across modern frontends.",
      skills: ["React.js (Learning)", "Component Design", "UI Architecture"],
    },
    {
      num: "04",
      icon: Cpu,
      title: "Algorithmic Foundations & Modern Tooling",
      description:
        "Cultivating algorithmic problem-solving through C++ and Data Structures & Algorithms, accelerated by modern developer tools including VS Code, Git/GitHub, and AI pair-programming.",
      skills: ["C++ (Learning)", "DSA Fundamentals", "VS Code", "Git/GitHub", "Claude/ChatGPT"],
    },
  ];

  return (
    <section id="capabilities" className="w-full py-20 border-b border-slate-200/80 dark:border-border/80 bg-white dark:bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-slate-200/80 dark:border-border/60">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-brand mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span>02 / Technical Disciplines</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-slate-950 dark:text-foreground font-normal tracking-tight">
            Verified Capabilities
          </h2>
          <p className="mt-3 max-w-xl text-sm font-sans text-slate-600 dark:text-muted-foreground">
            Directly supported by Sameera's coursework, independent builds, and programming practice.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-7 rounded-2xl bg-white dark:bg-card border border-slate-200 dark:border-border shadow-xs hover:border-brand/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-brand px-2 py-0.5 rounded bg-brand-light">
                      MODULE {cap.num}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-background border border-slate-200 dark:border-border flex items-center justify-center">
                      <Icon className="w-4 h-4 text-brand" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-slate-900 dark:text-foreground mb-2.5 font-normal">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-muted-foreground leading-relaxed mb-6 font-sans">
                    {cap.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-border/60">
                  {cap.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[11px] font-mono rounded bg-slate-50 dark:bg-background border border-slate-200 dark:border-border text-slate-800 dark:text-foreground/90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
