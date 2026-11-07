import type { MetadataRoute } from "next";
import { config } from "@/data/config";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = projects.map((project) => ({
    url: `${config.site}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: config.site,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${config.site}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${config.site}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${config.site}/Sameera_Resume.pdf`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...caseStudies,
  ];
}
