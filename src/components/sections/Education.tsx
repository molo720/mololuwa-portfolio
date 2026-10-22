"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "@/lib/data";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Education</h2>

          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary" />

                <div className="p-6 rounded-lg border border-border/40 bg-card">
                  <div className="flex items-start gap-4 mb-4">
                    <GraduationCap className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                      <p className="text-lg text-primary mb-2">
                        {edu.institution}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>Graduated: {edu.graduated}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
