import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/data/projects";
import MinimalVideoPlayer from "@/components/video/MinimalVideoPlayer";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Code,
  Layers,
  Terminal,
  ShieldCheck,
  Check,
} from "lucide-react";

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Shaik Sameera Bhanu`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.tagline,
      images: [{ url: project.video.poster }],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const nextProject = getProjectBySlug(project.nextProjectSlug);

  return (
    <article className="w-full pt-10 pb-20 bg-white dark:bg-background">
      {/* Top Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/#work"
          className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-brand transition-colors duration-200 font-semibold"
          data-cursor="back"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Selected Work</span>
        </Link>
      </div>

      {/* Case Study Hero */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 border-b border-slate-200 dark:border-border/70">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center space-x-3 text-xs font-mono">
            <span className="font-bold text-brand">{project.index}</span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-800 dark:text-foreground uppercase tracking-wider font-semibold">
              {project.category}
            </span>
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-card border border-emerald-200 dark:border-border text-xs font-mono text-emerald-800 dark:text-emerald-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{project.meta.status}</span>
          </div>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-950 dark:text-foreground tracking-tight leading-[1.05]">
          {project.title}
        </h1>

        <p className="mt-5 max-w-3xl text-lg sm:text-xl text-slate-600 dark:text-muted-foreground font-sans leading-relaxed">
          {project.tagline}
        </p>

        {/* Project Meta Rail */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-6 border-t border-slate-200/80 dark:border-border/60 text-xs font-mono">
          <div>
            <span className="text-slate-500 uppercase tracking-wider block mb-1">
              Role
            </span>
            <span className="text-slate-900 dark:text-foreground font-semibold">
              {project.meta.role}
            </span>
          </div>

          <div>
            <span className="text-slate-500 uppercase tracking-wider block mb-1">
              Timeline & Team
            </span>
            <span className="text-slate-900 dark:text-foreground font-semibold">
              {project.year} • {project.meta.team}
            </span>
          </div>

          <div>
            <span className="text-slate-500 uppercase tracking-wider block mb-1">
              Platform
            </span>
            <span className="text-slate-900 dark:text-foreground font-semibold">
              {project.meta.platform}
            </span>
          </div>

          <div>
            <span className="text-slate-500 uppercase tracking-wider block mb-1">
              Core Technologies
            </span>
            <div className="flex flex-wrap gap-1 mt-0.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-slate-100 dark:bg-card border border-slate-200 dark:border-border text-[11px] text-slate-800 dark:text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Video Demonstration Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-brand block mb-1 font-semibold">
            Visual Demonstration
          </span>
          <h2 className="font-serif text-3xl text-slate-950 dark:text-foreground font-normal">
            Interface Walkthrough & Execution
          </h2>
        </div>

        <MinimalVideoPlayer
          videoSrc={project.video.src}
          posterSrc={project.video.poster}
          driveEmbedUrl={project.video.driveEmbed}
          title={project.title}
        />
      </section>

      {/* Structured Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Case Study Editorial Body */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 01. Overview & Context */}
            <section>
              <div className="flex items-center space-x-2 font-mono text-xs uppercase tracking-widest text-brand mb-2 font-semibold">
                <Layers className="w-4 h-4" />
                <span>01 / Context & Objectives</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-950 dark:text-foreground font-normal mb-5">
                Executive Overview
              </h2>
              <p className="text-base text-slate-600 dark:text-muted-foreground leading-relaxed mb-6 font-sans">
                {project.overview}
              </p>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-card/60 border border-slate-200 dark:border-border shadow-xs">
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-900 dark:text-foreground font-bold mb-3">
                  Core Project Goals
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-600 dark:text-muted-foreground font-sans">
                  {project.goals.map((goal, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 02. The Technical Challenge */}
            <section>
              <div className="flex items-center space-x-2 font-mono text-xs uppercase tracking-widest text-brand mb-2 font-semibold">
                <Terminal className="w-4 h-4" />
                <span>02 / Technical Challenge</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-950 dark:text-foreground font-normal mb-4">
                The Engineering Problem
              </h2>
              <p className="text-base text-slate-600 dark:text-muted-foreground leading-relaxed font-sans">
                {project.challenge}
              </p>
            </section>

            {/* 03. Design & Execution Process */}
            <section>
              <div className="flex items-center space-x-2 font-mono text-xs uppercase tracking-widest text-brand mb-2 font-semibold">
                <Code className="w-4 h-4" />
                <span>03 / Implementation Flow</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-950 dark:text-foreground font-normal mb-6">
                Process & Structural Decisions
              </h2>

              <div className="space-y-6">
                {project.process.map((step) => (
                  <div
                    key={step.step}
                    className="p-7 rounded-2xl bg-white dark:bg-card border border-slate-200 dark:border-border/80 shadow-xs"
                  >
                    <div className="flex items-center space-x-3 mb-2.5">
                      <span className="font-mono text-xs font-bold text-brand px-2 py-0.5 rounded bg-brand-light">
                        PHASE {step.step}
                      </span>
                      <h3 className="font-serif text-2xl text-slate-900 dark:text-foreground font-normal">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-muted-foreground leading-relaxed mb-5 font-sans">
                      {step.description}
                    </p>

                    <div className="pt-3.5 border-t border-slate-100 dark:border-border/60">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-slate-800 dark:text-foreground font-semibold block mb-2">
                        Key Architectural Highlights:
                      </span>
                      <ul className="space-y-1 text-xs font-mono text-slate-600 dark:text-muted-foreground">
                        {step.highlights.map((h, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 04. Code Highlights */}
            <section>
              <div className="flex items-center space-x-2 font-mono text-xs uppercase tracking-widest text-brand mb-2 font-semibold">
                <Code className="w-4 h-4" />
                <span>04 / Code Sample</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-950 dark:text-foreground font-normal mb-2">
                {project.codeSnippet.title}
              </h2>
              <p className="text-xs font-mono text-slate-500 mb-4">
                {project.codeSnippet.explanation}
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-border bg-slate-900 text-white shadow-xs">
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-white/10 text-xs font-mono text-slate-400">
                  <span>Source Architecture</span>
                  <span className="uppercase text-brand font-semibold">
                    {project.codeSnippet.language}
                  </span>
                </div>
                <pre className="p-6 overflow-x-auto text-xs font-mono leading-relaxed text-slate-200">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            </section>

            {/* 05. Reflections & Learnings */}
            <section>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-950 dark:text-foreground font-normal mb-5">
                Reflections & Architectural Learnings
              </h2>
              <div className="space-y-3">
                {project.learnings.map((learning, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-slate-50 dark:bg-card/60 border border-slate-200 dark:border-border/70 text-sm font-sans text-slate-700 dark:text-muted-foreground leading-relaxed flex items-start space-x-3"
                  >
                    <span className="font-mono text-xs text-brand font-bold mt-0.5">
                      0{idx + 1}.
                    </span>
                    <p>{learning}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Rail: Verified Facts & Author Expansion TODOs */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Resume Verification Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-card border border-slate-200 dark:border-border shadow-xs">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-brand mb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-slate-900 dark:text-foreground font-bold">
                  Resume Verification
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-3 font-sans">
                Extracted verbatim from Sameera's verified resume without fabrication:
              </p>
              <ul className="space-y-2.5">
                {project.verifiedFacts.map((fact, idx) => (
                  <li
                    key={idx}
                    className="text-xs font-sans text-slate-800 dark:text-foreground/90 p-3 rounded-lg bg-slate-50 dark:bg-background border border-slate-200/80 dark:border-border/60 leading-relaxed"
                  >
                    "{fact}"
                  </li>
                ))}
              </ul>
            </div>

            {/* Clearly Marked TODO & Prompt Questionnaire */}
            <div className="p-6 rounded-2xl bg-amber-50/70 dark:bg-amber-950/10 border border-amber-200 dark:border-amber-500/30 text-amber-900 dark:text-amber-400">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider mb-2 font-bold text-amber-700 dark:text-amber-400">
                <HelpCircle className="w-4 h-4" />
                <span>Author Input Checklist</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-muted-foreground mb-4 leading-relaxed font-sans">
                To expand this case study with metrics or live links without inventing facts, answer these prompts:
              </p>

              <div className="space-y-3 text-xs font-mono">
                {project.outcome.authorTodos.map((todo, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-white dark:bg-card/80 border border-amber-200/80 dark:border-amber-500/20 text-slate-800 dark:text-foreground"
                  >
                    <span className="text-[10px] text-amber-600 dark:text-amber-500 font-bold uppercase tracking-wider block mb-1">
                      [TODO: {todo.field}]
                    </span>
                    <p className="text-xs text-slate-600 dark:text-muted-foreground font-sans leading-relaxed">
                      {todo.question}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Resume Download CTA */}
            <div className="p-6 rounded-2xl bg-white dark:bg-card border border-slate-200 dark:border-border text-center shadow-xs">
              <p className="font-serif text-lg text-slate-900 dark:text-foreground mb-1">
                Official Credential
              </p>
              <p className="text-xs font-mono text-slate-500 mb-4">
                Download Sameera's verified single-page resume.
              </p>
              <a
                href="/Sameera_Resume.pdf"
                download="Shaik_Sameera_Bhanu_Resume.pdf"
                className="w-full inline-flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-slate-900 dark:bg-foreground text-white dark:text-background font-mono text-xs uppercase tracking-wider font-semibold hover:bg-brand transition-colors"
              >
                <span>Download Resume (PDF)</span>
              </a>
            </div>

          </aside>
        </div>
      </div>

      {/* Next Project Link Footer */}
      {nextProject && (
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-10 border-t border-slate-200 dark:border-border">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block p-8 rounded-2xl bg-slate-50 dark:bg-card border border-slate-200 dark:border-border hover:border-brand transition-all duration-300"
            data-cursor="next"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-brand mb-1.5 block font-semibold">
                  Next Case Study • {nextProject.index}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-foreground group-hover:text-brand transition-colors duration-200">
                  {nextProject.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-1">
                  {nextProject.category}
                </p>
              </div>

              <div className="w-12 h-12 rounded-full border border-slate-300 dark:border-border group-hover:border-brand group-hover:bg-brand group-hover:text-white flex items-center justify-center transition-all duration-300 bg-white dark:bg-transparent">
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        </nav>
      )}
    </article>
  );
}
