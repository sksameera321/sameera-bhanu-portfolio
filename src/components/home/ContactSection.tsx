"use client";

import React, { useState } from "react";
import { profile } from "@/data/profile";
import { Check, Copy, Mail, Send, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "fallback">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mqkenvkr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        triggerMailtoFallback();
      }
    } catch (err) {
      triggerMailtoFallback();
    }
  };

  const triggerMailtoFallback = () => {
    setFormStatus("fallback");
    const mailtoUrl = `mailto:${profile.contact.email}?subject=${encodeURIComponent(
      formData.subject || "Frontend Opportunity / Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="w-full py-20 bg-white dark:bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-slate-200/80 dark:border-border/60">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-brand mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span>04 / Direct Inquiries & Placement</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-slate-950 dark:text-foreground font-normal tracking-tight">
            Let's work together.
          </h2>
          <p className="mt-3 max-w-xl text-sm font-sans text-slate-600 dark:text-muted-foreground">
            Actively interviewing for frontend development internships and engineering projects.
          </p>
        </div>

        {/* 2-Column Productive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Fast Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-muted-foreground mb-3 block">
                Direct Contact Channel
              </span>

              {/* Copy Email Action Card */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-card border border-slate-200 dark:border-border flex flex-col space-y-4 shadow-xs">
                <span className="text-xs font-mono text-slate-500 dark:text-muted-foreground">
                  Verified Contact Email
                </span>
                <p className="font-mono text-base sm:text-lg font-semibold text-slate-900 dark:text-foreground break-all">
                  {profile.contact.email}
                </p>

                <button
                  onClick={handleCopyEmail}
                  className="self-start inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900 dark:bg-foreground text-white dark:text-background font-mono text-xs uppercase tracking-wider font-semibold hover:bg-brand dark:hover:bg-brand dark:hover:text-white transition-all shadow-xs"
                  data-cursor="copy"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Fast Meta Info */}
              <div className="mt-6 space-y-3 text-xs font-mono">
                <div className="flex items-center space-x-3 text-slate-600 dark:text-muted-foreground">
                  <Phone className="w-4 h-4 text-brand shrink-0" />
                  <span className="text-slate-900 dark:text-foreground font-medium">
                    {profile.contact.phone}
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600 dark:text-muted-foreground">
                  <MapPin className="w-4 h-4 text-brand shrink-0" />
                  <span className="text-slate-900 dark:text-foreground font-medium">
                    {profile.contact.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-border/60">
              <span className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-muted-foreground mb-3 block">
                Professional Networks
              </span>
              <div className="flex flex-col space-y-2 text-xs font-mono">
                {profile.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-slate-800 dark:text-foreground hover:text-brand transition-colors"
                  >
                    <span>{social.platform}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-white dark:bg-card border border-slate-200 dark:border-border shadow-xs">
              <h3 className="font-serif text-2xl text-slate-900 dark:text-foreground font-normal mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-muted-foreground mb-6">
                Form transmits directly to Sameera with an instant mailto fallback.
              </p>

              {formStatus === "success" ? (
                <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-400 font-mono text-xs">
                  <p className="font-bold mb-1">Message Transmitted Successfully!</p>
                  <p>Thank you for reaching out. Sameera will reply shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-600 dark:text-muted-foreground uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Elena Rostova"
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-background border border-slate-200 dark:border-border focus:border-brand focus:outline-none transition-colors text-slate-900 dark:text-foreground text-sm font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-600 dark:text-muted-foreground uppercase tracking-wider mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="elena@studio.com"
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-background border border-slate-200 dark:border-border focus:border-brand focus:outline-none transition-colors text-slate-900 dark:text-foreground text-sm font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-600 dark:text-muted-foreground uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Frontend Internship Opportunity"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-background border border-slate-200 dark:border-border focus:border-brand focus:outline-none transition-colors text-slate-900 dark:text-foreground text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 dark:text-muted-foreground uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe the opportunity, project scope, or timeline..."
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-background border border-slate-200 dark:border-border focus:border-brand focus:outline-none transition-colors text-slate-900 dark:text-foreground text-sm font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full py-3.5 rounded-xl bg-brand text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-brand-hover transition-colors shadow-xs flex items-center justify-center space-x-2"
                    data-cursor="send"
                  >
                    {formStatus === "submitting" ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
