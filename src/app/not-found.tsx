import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The requested editorial artifact does not exist or has been relocated.",
};

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <span className="font-mono text-xs uppercase tracking-widest text-brand mb-3">
        Error 404 / Missing Route
      </span>
      <h1 className="font-serif text-6xl sm:text-8xl text-foreground font-normal tracking-tight">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-base text-muted-foreground font-sans">
        The requested case study or page does not exist or has been relocated within the directory.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-foreground text-background font-mono text-xs uppercase tracking-wider font-semibold hover:bg-brand hover:text-white transition-colors duration-200"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to Portfolio</span>
      </Link>
    </div>
  );
}
