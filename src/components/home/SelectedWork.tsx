"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects, Project } from "@/data/projects";
import {
  ArrowUpRight,
  Grid,
  LayoutList,
  ShieldCheck,
  Clock,
  Code2,
  Filter,
} from "lucide-react";
import { motion } from "motion/react";

export default function SelectedWork() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { label: "All Projects", key: "All", count: 6 },
    { label: "E-Commerce & Food", key: "Commerce", count: 2 },
    { label: "Interactive Games & State", key: "Games", count: 2 },
    { label: "Tools & Media Apps", key: "ToolsMedia", count: 2 },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    if (selectedCategory === "Commerce")
      return projects.filter((p) =>
        ["amazon-clone", "restaurant-menu"].includes(p.slug)
      );
    if (selectedCategory === "Games")
      return projects.filter((p) =>
        ["game-hub", "rock-paper-scissors"].includes(p.slug)
      );
    if (selectedCategory === "ToolsMedia")
      return projects.filter((p) =>
        ["ai-tools-hub", "spotify-player"].includes(p.slug)
      );
    return projects;
  }, [selectedCategory]);

  return (
    <section id="work" className="w-full py-20 border-b border-slate-200/80 dark:border-border/80 bg-slate-50/50 dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200/80 dark:border-border/60 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-brand mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span>01 / Curated Portfolio Ledger</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-slate-950 dark:text-foreground font-normal tracking-tight">
              Selected Work
            </h2>
          </div>

          {/* Productive View Mode Switcher */}
          <div className="flex items-center space-x-2 bg-white dark:bg-card p-1 rounded-lg border border-slate-200 dark:border-border shadow-xs self-start md:self-auto">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded text-xs font-mono transition-colors duration-200 ${
                viewMode === "grid"
                  ? "bg-slate-900 dark:bg-foreground text-white dark:text-background font-semibold shadow-xs"
                  : "text-slate-600 dark:text-muted-foreground hover:text-slate-950 dark:hover:text-foreground"
              }`}
              aria-label="Grid view"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded text-xs font-mono transition-colors duration-200 ${
                viewMode === "list"
                  ? "bg-slate-900 dark:bg-foreground text-white dark:text-background font-semibold shadow-xs"
                  : "text-slate-600 dark:text-muted-foreground hover:text-slate-950 dark:hover:text-foreground"
              }`}
              aria-label="List view"
            >
              <LayoutList className="w-3.5 h-3.5" />
              <span>Table Ledger</span>
            </button>
          </div>
        </div>

        {/* Productive Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-500 mr-2">
            <Filter className="w-3.5 h-3.5 text-brand" />
            <span className="uppercase tracking-wider">Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                selectedCategory === cat.key
                  ? "bg-brand text-white font-medium shadow-xs"
                  : "bg-white dark:bg-card border border-slate-200 dark:border-border text-slate-700 dark:text-muted-foreground hover:border-slate-300 dark:hover:border-slate-600"
              }`}
            >
              <span>{cat.label}</span>
              <span className="ml-1.5 opacity-75">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* View Mode 1: Crisp Productive Cards Grid */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, idx) => (
              <ProductiveProjectCard
                key={project.slug}
                project={project}
                index={idx}
                isHovered={hoveredSlug === project.slug}
                onHover={() => setHoveredSlug(project.slug)}
                onLeave={() => setHoveredSlug(null)}
              />
            ))}
          </div>
        ) : (
          /* View Mode 2: Dense Productive Architectural Table */
          <div className="w-full bg-white dark:bg-card border border-slate-200 dark:border-border rounded-xl shadow-xs overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="border-b border-slate-200 dark:border-border bg-slate-50 dark:bg-card/80 text-slate-500 uppercase tracking-wider text-[11px]">
                  <th className="py-3.5 px-4 font-semibold">ID</th>
                  <th className="py-3.5 px-4 font-semibold">Project Title</th>
                  <th className="py-3.5 px-4 font-semibold">Domain</th>
                  <th className="py-3.5 px-4 font-semibold">Tech Stack</th>
                  <th className="py-3.5 px-4 font-semibold">Video Duration</th>
                  <th className="py-3.5 px-4 font-semibold">Verification</th>
                  <th className="py-3.5 px-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-border/60">
                {filteredProjects.map((project) => (
                  <tr
                    key={project.slug}
                    className="hover:bg-slate-50/80 dark:hover:bg-card/60 transition-colors duration-150 group"
                  >
                    <td className="py-4 px-4 font-bold text-brand">{project.index}</td>
                    <td className="py-4 px-4">
                      <Link
                        href={`/work/${project.slug}`}
                        className="font-serif text-base font-medium text-slate-900 dark:text-foreground group-hover:text-brand transition-colors"
                      >
                        {project.title}
                      </Link>
                    </td>
                    <td className="py-4 px-4 text-slate-600 dark:text-muted-foreground">
                      {project.category}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-slate-100 dark:bg-background border border-slate-200/80 dark:border-border text-[10px] text-slate-700 dark:text-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3 text-brand" />
                        <span>{project.video.duration}</span>
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span className="text-[11px]">{project.meta.status}</span>
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center space-x-1 px-3 py-1 rounded bg-slate-900 dark:bg-foreground text-white dark:text-background text-[11px] font-semibold hover:bg-brand transition-colors"
                      >
                        <span>View</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
}

function ProductiveProjectCard({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col bg-white dark:bg-card border border-slate-200/90 dark:border-border rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Link
        href={`/work/${project.slug}`}
        className="block focus:outline-none"
        data-cursor="view"
      >
        {/* Media Frame with Hover Autoplay */}
        <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
          <Image
            src={project.video.poster}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />

          {isHovered && (
            <video
              src={project.video.src}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Floating Category Pill */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-mono pointer-events-none">
            <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-white font-bold text-[11px]">
              {project.index}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-white/90 text-[10px]">
              {project.video.duration}
            </span>
          </div>

          <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Content Details */}
        <div className="p-5 flex flex-col justify-between flex-1">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-brand block mb-1">
              {project.category}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-slate-900 dark:text-foreground group-hover:text-brand transition-colors font-medium">
              {project.title}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-muted-foreground line-clamp-2 leading-relaxed font-sans">
              {project.tagline}
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-border/60 flex items-center justify-between text-xs font-mono">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 2).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-slate-100 dark:bg-background text-slate-700 dark:text-muted-foreground text-[10px] border border-slate-200/60 dark:border-border"
                >
                  {tech}
                </span>
              ))}
            </div>

            <span className="text-slate-400 dark:text-muted-foreground text-[11px]">
              {project.year}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
