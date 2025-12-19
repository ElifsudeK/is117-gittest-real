import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { caseStudies } from "@/lib/data";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function PortfolioIndex() {
  // Only show the 4 specified case studies
  const portfolioCases = [
    caseStudies[0], // AI Automation Core
    caseStudies[1], // Customer Ops Dashboard
    caseStudies[2], // Balance App
    caseStudies[1], // Customer Ops Dashboard (Legacy) - we'll mark this differently
  ];

  return (
    <Layout>
      <Section className="pb-8">
        <Link href="/">
          <a className="inline-block mb-8 text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-widest">← Back to Home</a>
        </Link>
        <h1 className="text-5xl md:text-6xl mb-6">Selected Work</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A curated selection of strategic design and automation projects.
        </p>
      </Section>

      <Section spacing="default" className="pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {portfolioCases.map((project, idx) => {
            const isLegacy = idx === 3;
            return (
              <Link key={`${project.id}-${idx}`} href={`/portfolio/${project.slug}`}>
                <a className="group block cursor-pointer">
                  <div className={cn("aspect-[16/10] overflow-hidden bg-secondary mb-6 relative", isLegacy && "grayscale opacity-75")}>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {isLegacy && (
                      <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 text-xs uppercase tracking-widest text-white font-medium">
                        Legacy
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
                        {project.category}
                      </div>
                      <h3 className="text-2xl font-serif mb-2 group-hover:underline decoration-1 underline-offset-4">
                        {project.title}{isLegacy ? " (Legacy)" : ""}
                      </h3>
                      <div className="text-sm font-medium text-emerald-600/80 mb-3">
                        {project.metric}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </Section>
    </Layout>
  );
}
