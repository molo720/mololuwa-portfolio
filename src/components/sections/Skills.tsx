"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Briefcase, Wrench } from "lucide-react";
import { portfolioData } from "@/lib/data";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      skills: portfolioData.skills.technical,
    },
    {
      title: "Business Skills",
      icon: Briefcase,
      skills: portfolioData.skills.business,
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: portfolioData.skills.tools,
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Skills</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="p-6 rounded-lg border border-border/40 bg-card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-md bg-secondary/50 text-secondary-foreground hover:bg-secondary/80 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
