import type { Metadata } from "next";
import "./globals.css";
import { config } from "@/data/config";
import { profile } from "@/data/profile";
import { Providers } from "@/components/providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL(config.site),
  alternates: { canonical: "./" },
  title: `${profile.name} — ${profile.role} & Interface Craftsperson`,
  description: profile.positioningStatement,
  keywords: [
    profile.name,
    "Shaik Sameera Bhanu",
    "Sameera Bhanu",
    "Frontend Developer",
    "Portfolio",
    "Web Developer",
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Vishnu Women's University",
  ],
  authors: [{ name: profile.name, url: config.site }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.positioningStatement,
    url: config.site,
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: config.ogImg,
        width: 1200,
        height: 630,
        alt: `${profile.name} — Frontend Developer Portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.positioningStatement,
    images: [config.ogImg],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: config.site,
  jobTitle: profile.role,
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Vishnu Women's University",
    },
    {
      "@type": "EducationalOrganization",
      name: "VIT Junior College",
    },
  ],
  knowsAbout: [
    "Frontend Engineering",
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Responsive Web Design",
    "C++",
    "Data Structures & Algorithms",
  ],
  email: `mailto:${profile.contact.email}`,
  telephone: profile.contact.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Narasaraopet",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans selection:bg-brand selection:text-white bg-background text-foreground transition-colors duration-300">
        <Providers>
          <CustomCursor />
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
