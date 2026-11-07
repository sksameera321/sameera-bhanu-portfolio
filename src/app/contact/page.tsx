import React from "react";
import type { Metadata } from "next";
import ContactSection from "@/components/home/ContactSection";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Contact — ${profile.name}`,
  description: `Get in touch with ${profile.name} regarding frontend development internships and collaborative engineering projects.`,
};

export default function ContactPage() {
  return (
    <div className="pt-8">
      <ContactSection />
    </div>
  );
}
