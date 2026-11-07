"use client";

import React from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { GraduationCap, Award, Compass, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 border-b border-slate-200/80 dark:border-border/80 bg-slate-50/50 dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-slate-200/80 dark:border-border/60">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-brand mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span>03 / Background & Philosophy</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-slate-950 dark:text-foreground font-normal tracking-tight">
            About Sameera
          </h2>
        </div>

        {/* 2-Column Productive Grid: Monogram Card & Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Monogram & Rapid Facts */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Visual Portrait / Monogram Card */}
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-white dark:bg-card border border-slate-200 dark:border-border p-8 flex flex-col justify-between shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-muted-foreground">
                <span>TALENT ID: SB-2026</span>
                <span className="text-brand font-semibold">ANDHRA PRADESH</span>
              </div>

              {/* Big Typographic Monogram */}
              <div className="text-center my-auto">
                <span className="font-serif text-8xl sm:text-9xl font-light text-slate-900 dark:text-foreground tracking-tighter block select-none">
                  SB
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-slate-700 dark:text-foreground font-semibold block mt-2">
                  Shaik Sameera Bhanu
                </span>
                <span className="font-mono text-[11px] text-brand block mt-1">
                  Frontend Developer • Fresher
                </span>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-border/60 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">Placement</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  Internship Ready
                </span>
              </div>
            </div>

            {/* Core Strengths */}
            <div className="p-6 rounded-2xl bg-white dark:bg-card border border-slate-200 dark:border-border shadow-xs">
              <span className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-muted-foreground mb-4 block">
                Verified Core Strengths
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profile.coreStrengths.map((strength) => (
                  <div
                    key={strength}
                    className="flex items-center space-x-2 text-xs font-mono text-slate-800 dark:text-foreground"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand shrink-0" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="p-6 rounded-2xl bg-white dark:bg-card border border-slate-200 dark:border-border shadow-xs text-xs font-mono">
              <span className="uppercase tracking-widest text-slate-500 dark:text-muted-foreground mb-3 block">
                Languages Spoken
              </span>
              <div className="flex flex-wrap gap-2">
                {profile.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 rounded-full bg-slate-100 dark:bg-background border border-slate-200 dark:border-border text-slate-800 dark:text-foreground"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Personal Narrative, Education & Philosophy */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            
            {/* Lead Narrative Card */}
            <div className="p-8 rounded-2xl bg-white dark:bg-card border border-slate-200 dark:border-border shadow-xs">
              <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 dark:text-foreground font-normal leading-snug">
                {profile.bio.lead}
              </h3>
              <div className="mt-5 space-y-4 text-sm text-slate-600 dark:text-muted-foreground leading-relaxed font-sans">
                {profile.bio.narrative.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Design & Engineering Philosophy Quote */}
            <div className="p-7 rounded-2xl bg-brand-light dark:bg-card/60 border-l-4 border-brand border-y border-r border-slate-200/60 dark:border-border">
              <div className="flex items-center space-x-2 font-mono text-xs uppercase tracking-widest text-brand mb-2">
                <Compass className="w-4 h-4" />
                <span>Craft Philosophy</span>
              </div>
              <p className="font-serif text-xl sm:text-2xl text-slate-900 dark:text-foreground italic leading-relaxed">
                "{profile.bio.philosophy}"
              </p>
            </div>

            {/* Education Timeline */}
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-brand mb-4 block">
                Academic Ledger
              </span>

              <div className="space-y-4">
                {profile.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white dark:bg-card border border-slate-200 dark:border-border shadow-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="flex items-center space-x-3">
                        <GraduationCap className="w-5 h-5 text-brand shrink-0" />
                        <h4 className="font-serif text-xl text-slate-900 dark:text-foreground">
                          {edu.institution}
                        </h4>
                      </div>
                      <span className="font-mono text-xs text-slate-500 dark:text-muted-foreground">
                        {edu.year}
                      </span>
                    </div>

                    <p className="mt-2 text-xs font-mono font-medium text-slate-800 dark:text-foreground/90">
                      {edu.degree}
                    </p>

                    {edu.grade && (
                      <div className="mt-2.5 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-light border border-brand/30 text-brand font-mono text-xs font-bold">
                        <Award className="w-3.5 h-3.5" />
                        <span>Academic Distinction: {edu.grade}</span>
                      </div>
                    )}

                    {edu.description && (
                      <p className="mt-3 text-xs text-slate-600 dark:text-muted-foreground leading-relaxed font-sans">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-brand hover:text-slate-950 dark:hover:text-foreground transition-colors duration-200 font-semibold"
              >
                <span>Read Full Biography & Tooling Stack</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
