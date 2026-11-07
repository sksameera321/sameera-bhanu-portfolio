"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { ArrowUp, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-slate-200 dark:border-border/80 bg-slate-50/70 dark:bg-card/40 transition-colors duration-300 pt-16 pb-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Ledger */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 dark:border-border/60 pb-10 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-brand mb-2 block font-semibold">
              Shaik Sameera Bhanu • Interface Craft & Engineering
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-slate-950 dark:text-foreground font-normal tracking-tight">
              Crafting interfaces with intent.
            </h2>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-muted-foreground hover:text-brand transition-colors duration-200 self-start md:self-auto font-medium"
            data-cursor="top"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full border border-slate-300 dark:border-border group-hover:border-brand flex items-center justify-center transition-colors duration-200 bg-white dark:bg-transparent">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </div>
          </button>
        </div>

        {/* Middle Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-b border-slate-200 dark:border-border/60 text-xs font-mono">
          <div>
            <span className="text-slate-500 uppercase tracking-wider block mb-2">
              Location & Coordinates
            </span>
            <p className="text-slate-900 dark:text-foreground font-semibold">
              {profile.contact.location}
            </p>
            <p className="text-slate-500 mt-1">16.2359° N, 80.0499° E</p>
          </div>

          <div>
            <span className="text-slate-500 uppercase tracking-wider block mb-2">
              Current Local Time (IST)
            </span>
            <p className="text-slate-950 dark:text-foreground font-mono text-base font-bold text-brand">
              {localTime || "12:00:00 PM"}
            </p>
            <p className="text-slate-500 mt-1">Andhra Pradesh, India (UTC +5:30)</p>
          </div>

          <div>
            <span className="text-slate-500 uppercase tracking-wider block mb-2">
              Connect & Source
            </span>
            <div className="flex flex-col space-y-1.5">
              <a
                href={`mailto:${profile.contact.email}`}
                className="text-slate-900 dark:text-foreground hover:text-brand transition-colors flex items-center space-x-1.5 font-medium"
              >
                <Mail className="w-3 h-3 text-slate-400" />
                <span>{profile.contact.email}</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-foreground hover:text-brand transition-colors flex items-center space-x-1.5"
              >
                <Linkedin className="w-3 h-3 text-slate-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-foreground hover:text-brand transition-colors flex items-center space-x-1.5"
              >
                <Github className="w-3 h-3 text-slate-400" />
                <span>GitHub Repositories</span>
              </a>
            </div>
          </div>

          <div>
            <span className="text-slate-500 uppercase tracking-wider block mb-2">
              Verified Credential
            </span>
            <a
              href={profile.resumeUrl}
              download="Shaik_Sameera_Bhanu_Resume.pdf"
              className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-md border border-slate-300 dark:border-border bg-white dark:bg-card hover:border-brand hover:text-brand transition-all shadow-xs"
              data-cursor="download"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="font-semibold">Download Verified Resume</span>
            </a>
            <p className="text-[11px] text-slate-500 mt-2">
              Single source of truth • PDF
            </p>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-muted-foreground font-mono gap-4">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Designed to Awwwards editorial standards • Set in Instrument Serif & Plus Jakarta Sans
          </p>
        </div>
      </div>
    </footer>
  );
}
