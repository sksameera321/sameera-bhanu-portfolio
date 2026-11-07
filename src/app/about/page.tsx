import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import {
  Download,
  GraduationCap,
  Award,
  CheckCircle2,
  Code2,
  Terminal,
  Cpu,
  ArrowRight,
  MapPin,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: `About ${profile.name} — Frontend Developer & Interface Craftsperson`,
  description: profile.bio.lead,
};

export default function AboutPage() {
  return (
    <article className="w-full pt-16 pb-24">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-border/70">
        <span className="font-mono text-xs uppercase tracking-widest text-brand mb-3 block">
          Biographical Ledger & Craft Philosophy
        </span>
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-foreground tracking-tight leading-[0.95]">
          Shaik Sameera <br />
          <span className="italic text-brand font-light">Bhanu</span>
        </h1>
        <p className="mt-8 max-w-2xl text-xl sm:text-2xl text-muted-foreground font-sans leading-relaxed">
          {profile.bio.lead}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono">
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-card border border-border">
            <MapPin className="w-3.5 h-3.5 text-brand" />
            <span>{profile.contact.location}</span>
          </div>

          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-card border border-border">
            <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
            <span>{profile.statusBadge}</span>
          </div>

          <a
            href={profile.resumeUrl}
            download="Shaik_Sameera_Bhanu_Resume.pdf"
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-foreground text-background font-medium hover:bg-brand hover:text-white transition-colors duration-200"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Official Resume</span>
          </a>
        </div>
      </header>

      {/* Main Narrative & Credentials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-brand mb-4 block">
                01 / The Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-normal mb-6">
                Engineering with Curiosity & Discipline
              </h2>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed font-sans">
                {profile.bio.narrative.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Design & Code Philosophy */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <span className="font-mono text-xs uppercase tracking-widest text-brand mb-3 block">
                Core Philosophy
              </span>
              <p className="font-serif text-2xl text-foreground italic leading-relaxed">
                "{profile.bio.philosophy}"
              </p>
            </div>

            {/* Academic Credentials Ledger */}
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-brand mb-6 block">
                02 / Education & Distinction
              </span>

              <div className="space-y-6">
                {profile.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl bg-card border border-border/80"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center space-x-3">
                        <GraduationCap className="w-5 h-5 text-brand shrink-0" />
                        <h3 className="font-serif text-2xl text-foreground">
                          {edu.institution}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        {edu.year}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-foreground/90 font-mono">
                      {edu.degree}
                    </p>

                    {edu.grade && (
                      <div className="mt-3 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand font-mono text-xs font-bold">
                        <Award className="w-3.5 h-3.5" />
                        <span>Academic Distinction: {edu.grade}</span>
                      </div>
                    )}

                    {edu.description && (
                      <p className="mt-4 text-xs text-muted-foreground leading-relaxed font-sans">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Skills & Tools Column */}
          <div className="lg:col-span-5 space-y-10">
            {/* Technical Stack Breakdown */}
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-brand mb-6 block">
                03 / Verified Skills Matrix
              </span>

              <div className="space-y-6">
                {profile.skillCategories.map((cat, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-card border border-border/80"
                  >
                    <h3 className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold mb-4">
                      {cat.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="px-3 py-1 text-xs font-mono rounded bg-background border border-border text-foreground flex items-center space-x-1.5"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              skill.status === "proficient"
                                ? "bg-emerald-500"
                                : "bg-amber-500"
                            }`}
                          />
                          <span>{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Strengths */}
            <div className="p-6 rounded-2xl bg-card border border-border/80">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
                Workplace Strengths
              </span>
              <ul className="space-y-3 text-xs font-mono">
                {profile.coreStrengths.map((s) => (
                  <li key={s} className="flex items-center space-x-2 text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="p-6 rounded-2xl bg-card border border-border/80 text-xs font-mono">
              <span className="uppercase tracking-widest text-muted-foreground mb-3 block">
                Languages
              </span>
              <div className="flex flex-wrap gap-2">
                {profile.languages.map((l) => (
                  <span
                    key={l}
                    className="px-3 py-1 rounded-full bg-background border border-border text-foreground"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Invitation Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-background border border-brand/40 shadow-lg">
              <h3 className="font-serif text-2xl text-foreground mb-2">
                Interested in working together?
              </h3>
              <p className="text-xs font-mono text-muted-foreground mb-6">
                Sameera is currently interviewing for frontend development internships.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-brand text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-brand-hover transition-colors duration-200"
              >
                <span>Initiate Contact</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
