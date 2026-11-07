"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Selected Work", href: "/#work" },
    { label: "About", href: "/about" },
    { label: "Capabilities", href: "/#capabilities" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-border/70 bg-white/90 dark:bg-background/85 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand / Wordmark */}
        <Link
          href="/"
          className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-brand rounded-sm"
          data-cursor="home"
        >
          <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-slate-950 dark:text-foreground group-hover:text-brand transition-colors duration-200">
            {profile.name}
          </span>
          <span className="font-mono text-[10px] tracking-wider uppercase text-slate-500 dark:text-muted-foreground">
            {profile.role} • 2024–2026
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => {
            const isActive =
              link.href === pathname ||
              (link.href.startsWith("/#") && pathname === "/");

            return (
              <Link
                key={link.label}
                href={link.href}
                className="relative py-1 text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-muted-foreground hover:text-slate-950 dark:hover:text-foreground transition-colors duration-200 font-medium"
                data-cursor="link"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Availability Badge, Resume, Theme Toggle */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Availability Status Badge */}
          <div className="flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-200 dark:border-border/80 bg-slate-50 dark:bg-card/60 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] text-slate-800 dark:text-foreground/80 font-medium">
              Internship Ready
            </span>
          </div>

          {/* Resume Download Button */}
          <a
            href={profile.resumeUrl}
            download="Shaik_Sameera_Bhanu_Resume.pdf"
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-mono font-semibold rounded-full bg-slate-900 dark:bg-foreground text-white dark:text-background hover:bg-brand dark:hover:bg-brand dark:hover:text-white transition-all shadow-xs"
            data-cursor="download"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Trigger & Theme Toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-slate-900 dark:text-foreground hover:text-brand focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-b border-slate-200 dark:border-border bg-white/95 dark:bg-background/95 backdrop-blur-lg px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 py-1 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                <span>Open to Frontend Internships</span>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-slate-900 dark:text-foreground hover:text-brand transition-colors duration-200 py-1"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-slate-200 dark:border-border flex items-center justify-between">
                <a
                  href={profile.resumeUrl}
                  download="Shaik_Sameera_Bhanu_Resume.pdf"
                  className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-mono font-medium rounded-full bg-brand text-white"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
