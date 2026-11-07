"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center opacity-50" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative flex items-center justify-center w-9 h-9 rounded-full border border-border hover:border-brand transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      data-cursor="theme"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-foreground/80 group-hover:text-brand transition-colors duration-200" />
      ) : (
        <Moon className="w-4 h-4 text-foreground/80 group-hover:text-brand transition-colors duration-200" />
      )}
    </button>
  );
}
