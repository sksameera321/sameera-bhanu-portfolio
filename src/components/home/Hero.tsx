"use client";

import React from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import {
  ArrowDown,
  Download,
  CheckCircle2,
  Sparkles,
  Layers,
  GraduationCap,
  Award,
} from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const quickMetrics = [
    {
      label: "Verified Projects",
      value: "06",
      detail: "HTML5, CSS3, JavaScript",
      icon: Layers,
    },
    {
      label: "Academic Merit",
      value: "98%",
      detail: "Intermediate Distinction",
      icon: Award,
    },
    {
      label: "Engineering Education",
      value: "B.Tech",
      detail: "Vishnu Women's University",
      icon: GraduationCap,
    },
    {
      label: "Placement Status",
      value: "Open",
      detail: "Frontend Internships",
      icon: Sparkles,
    },
  ];

  return (
    <section className="relative w-full pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200/80 dark:border-border/80 light-canvas-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Productive Status Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-5 border-b border-slate-200/80 dark:border-border/60 text-xs font-mono">
          <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-white dark:bg-card border border-slate-200 dark:border-border shadow-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-900 dark:text-foreground font-semibold uppercase tracking-wider text-[11px]">
              {profile.statusBadge}
            </span>
          </div>

          <div className="flex items-center space-x-4 text-slate-500 dark:text-muted-foreground text-xs">
            <span>{profile.contact.location}</span>
            <span>•</span>
            <span>First Year B.Tech (2029–30)</span>
          </div>
        </div>

        {/* Hero Title & Positioning Statement */}
        <div className="my-6 md:my-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-9xl tracking-tight text-slate-950 dark:text-foreground font-normal leading-[0.95]">
              SHAIK SAMEERA <br />
              <span className="italic font-light text-brand">BHANU</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <p className="max-w-2xl text-lg sm:text-xl font-sans text-slate-600 dark:text-muted-foreground font-normal leading-relaxed">
              {profile.positioningStatement}
            </p>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="#work"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-slate-900 dark:bg-foreground text-white dark:text-background font-mono text-xs uppercase tracking-wider font-semibold hover:bg-brand dark:hover:bg-brand dark:hover:text-white transition-all shadow-sm hover:shadow-md"
                data-cursor="explore"
              >
                <span>Explore Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </Link>

              <a
                href={profile.resumeUrl}
                download="Shaik_Sameera_Bhanu_Resume.pdf"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white dark:bg-card border border-slate-300 dark:border-border text-slate-900 dark:text-foreground font-mono text-xs uppercase tracking-wider font-semibold hover:border-brand hover:text-brand transition-all shadow-xs"
                data-cursor="resume"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Productive 4-Metric Command Center */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200/80 dark:border-border/60"
        >
          {quickMetrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white dark:bg-card border border-slate-200/80 dark:border-border/80 shadow-xs flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-muted-foreground">
                    {item.label}
                  </span>
                  <Icon className="w-4 h-4 text-brand" />
                </div>
                <div>
                  <p className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-foreground font-medium">
                    {item.value}
                  </p>
                  <p className="font-mono text-[11px] text-slate-500 dark:text-muted-foreground mt-1">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Ambient Video Teaser Frame in Crisp Light Architecture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 relative rounded-2xl overflow-hidden bg-white dark:bg-card border border-slate-200 dark:border-border shadow-md"
        >
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden bg-slate-950">
            <video
              src="/media/spotify-player.mp4"
              poster="/media/spotify-player-poster.jpg"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-xs font-mono text-white">
              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-brand" />
                <span>6 Project Demonstrations • Fully Recorded & Verified</span>
              </div>

              <Link
                href="#work"
                className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white text-slate-950 font-semibold hover:bg-brand hover:text-white transition-colors duration-200"
              >
                <span>Jump to Projects</span>
                <span>↓</span>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
