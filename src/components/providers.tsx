"use client";

import React from "react";
import { ThemeProvider } from "./theme-provider";
import { TooltipProvider } from "./ui/tooltip";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      <TooltipProvider delayDuration={200}>
        {children}
      </TooltipProvider>
    </ThemeProvider>
  );
};
