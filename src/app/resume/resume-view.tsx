"use client";

import React, { useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import {
  Download,
  ArrowLeft,
  FileText,
  Eye,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
  CheckCircle2,
  Printer,
  ShieldCheck,
  Phone,
} from "lucide-react";

const RESUME_PATH = "/Sameera_Resume.pdf";

export default function ResumeView() {
  const [viewMode, setViewMode] = useState<"interactive" | "pdf">("interactive");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex min-h-screen flex-col font-sans bg-background text-foreground antialiased selection:bg-brand selection:text-white">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-xl border-b border-border/80 print:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors group shrink-0"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform text-brand" />
            <span>Back to Portfolio</span>
          </Link>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1 bg-card p-1 rounded-lg border border-border text-xs font-mono">
            <button
              onClick={() => setViewMode("interactive")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all ${
                viewMode === "interactive"
                  ? "bg-foreground text-background font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Eye className="h-3.5 w-3.5" />
              <span>Interactive View</span>
            </button>
            <button
              onClick={() => setViewMode("pdf")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all ${
                viewMode === "pdf"
                  ? "bg-foreground text-background font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <FileText className="h-3.5 w-3.5" />
              <span>PDF Embed</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-xs font-mono text-muted-foreground hover:text-foreground hover:border-brand transition-colors"
              title="Print resume"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print</span>
            </button>
            <a
              href={RESUME_PATH}
              download="Shaik_Sameera_Bhanu_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand text-white text-xs font-mono font-medium hover:bg-brand-hover transition-colors shadow-sm"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 py-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {viewMode === "pdf" ? (
            /* PDF Embed Mode */
            <div className="w-full rounded-2xl overflow-hidden border border-border bg-card shadow-2xl">
              <iframe
                src={`${RESUME_PATH}#view=FitH`}
                className="w-full h-[85vh] border-0"
                title="Shaik Sameera Bhanu Resume PDF"
              />
            </div>
          ) : (
            /* Interactive Clean Resume Document */
            <article className="rounded-2xl border border-border/90 bg-card/60 p-8 sm:p-14 shadow-2xl relative">
              {/* Top Document Header */}
              <div className="border-b border-border/80 pb-8 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                  <div>
                    <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-foreground">
                      {profile.name}
                    </h1>
                    <p className="font-mono text-sm uppercase tracking-wider text-brand font-medium mt-1">
                      {profile.role} — Web Development Enthusiast
                    </p>
                  </div>

                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-mono text-xs font-semibold self-start sm:self-auto">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Credentials</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 mt-6 text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-brand" />
                    <span className="text-foreground">{profile.contact.phone}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-brand" />
                    <a
                      href={`mailto:${profile.contact.email}`}
                      className="text-foreground hover:text-brand transition-colors"
                    >
                      {profile.contact.email}
                    </a>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand" />
                    <span className="text-foreground">{profile.contact.location}</span>
                  </span>
                </div>
              </div>

              {/* Profile Section */}
              <section className="mb-10">
                <h2 className="font-mono text-xs uppercase tracking-widest text-brand mb-3 font-bold">
                  Professional Profile
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
                  B.Tech first-year student aspiring to build a career as a Frontend Developer. Interested in developing responsive and user-friendly websites using HTML, CSS, and JavaScript. Currently learning React.js and strengthening programming fundamentals through C++ and Data Structures & Algorithms.
                </p>
              </section>

              {/* Education Section */}
              <section className="mb-10">
                <h2 className="font-mono text-xs uppercase tracking-widest text-brand mb-4 font-bold flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>Education</span>
                </h2>

                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-background border border-border/80">
                    <div>
                      <h3 className="font-serif text-xl text-foreground font-normal">
                        Vishnu Women’s University
                      </h3>
                      <p className="text-xs font-mono text-muted-foreground mt-0.5">
                        B.Tech — First Year
                      </p>
                    </div>
                    <span className="font-mono text-xs text-brand font-semibold mt-2 sm:mt-0">
                      Expected Graduation: 2029–30
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-background border border-border/80">
                    <div>
                      <h3 className="font-serif text-xl text-foreground font-normal">
                        VIT Junior College
                      </h3>
                      <p className="text-xs font-mono text-muted-foreground mt-0.5">
                        Intermediate Education
                      </p>
                    </div>
                    <span className="font-mono text-xs text-brand font-bold mt-2 sm:mt-0 px-2.5 py-1 rounded-full bg-brand/10 border border-brand/20">
                      98% Aggregate
                    </span>
                  </div>
                </div>
              </section>

              {/* Technical Skills Section */}
              <section className="mb-10">
                <h2 className="font-mono text-xs uppercase tracking-widest text-brand mb-4 font-bold flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  <span>Technical Skills</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-background border border-border/80">
                    <span className="text-muted-foreground uppercase tracking-wider block mb-2">
                      Frontend Core
                    </span>
                    <p className="text-foreground font-semibold">HTML5, CSS3, JavaScript</p>
                  </div>

                  <div className="p-4 rounded-xl bg-background border border-border/80">
                    <span className="text-muted-foreground uppercase tracking-wider block mb-2">
                      Frameworks & In-Progress
                    </span>
                    <p className="text-foreground font-semibold">React.js — Learning</p>
                  </div>

                  <div className="p-4 rounded-xl bg-background border border-border/80">
                    <span className="text-muted-foreground uppercase tracking-wider block mb-2">
                      Programming & Algorithms
                    </span>
                    <p className="text-foreground font-semibold">C++ (Learning), Data Structures & Algorithms</p>
                  </div>

                  <div className="p-4 rounded-xl bg-background border border-border/80">
                    <span className="text-muted-foreground uppercase tracking-wider block mb-2">
                      Tools & AI Acceleration
                    </span>
                    <p className="text-foreground font-semibold">VS Code, GitHub, ChatGPT, Claude</p>
                  </div>
                </div>
              </section>

              {/* Projects Section */}
              <section className="mb-10">
                <h2 className="font-mono text-xs uppercase tracking-widest text-brand mb-4 font-bold flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>Verified Projects</span>
                </h2>

                <div className="space-y-4">
                  {projects.slice(0, 5).map((proj) => (
                    <div
                      key={proj.slug}
                      className="p-5 rounded-xl bg-background border border-border/80 flex flex-col justify-between"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <Link
                          href={`/work/${proj.slug}`}
                          className="font-serif text-lg text-foreground hover:text-brand font-normal transition-colors"
                        >
                          {proj.title}
                        </Link>
                        <span className="font-mono text-xs text-muted-foreground">
                          {proj.technologies.slice(0, 3).join(", ")}
                        </span>
                      </div>

                      <ul className="space-y-1.5 mt-2">
                        {proj.verifiedFacts.map((fact, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-muted-foreground font-sans flex items-start space-x-2"
                          >
                            <span className="text-brand font-mono font-bold">•</span>
                            <span>{fact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Experience / Status Section */}
              <section className="mb-10">
                <h2 className="font-mono text-xs uppercase tracking-widest text-brand mb-3 font-bold">
                  Experience & Availability
                </h2>
                <div className="p-4 rounded-xl bg-background border border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-foreground font-mono">
                    Fresher
                  </span>
                  <span className="text-xs font-mono text-emerald-500 font-medium">
                    Open to Frontend Development Internships
                  </span>
                </div>
              </section>

              {/* Core Strengths & Languages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border/80 text-xs font-mono">
                <div>
                  <span className="text-muted-foreground uppercase tracking-wider block mb-2">
                    Core Strengths
                  </span>
                  <p className="text-foreground leading-relaxed">
                    Problem Solving • Quick Learner • Teamwork • Communication • Consistency
                  </p>
                </div>

                <div>
                  <span className="text-muted-foreground uppercase tracking-wider block mb-2">
                    Languages
                  </span>
                  <p className="text-foreground leading-relaxed">
                    Telugu • English • Hindi
                  </p>
                </div>
              </div>
            </article>
          )}
        </div>
      </main>
    </div>
  );
}
