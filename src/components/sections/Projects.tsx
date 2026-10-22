"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolioData } from "@/lib/data";
import Link from "next/link";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="group h-full p-6 rounded-lg border border-border/40 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      {project.year}
                    </p>

                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.overview}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-border/40">
                      <div className="flex items-center gap-2 text-sm text-primary font-medium">
                        <span>View Case Study</span>
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
