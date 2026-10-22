"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/lib/data";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {portfolioData.summary}
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm passionate about solving African business problems with data.
              Since 2023, while completing my Computer Science degree, I've had
              the privilege of working with startups and SMEs across Nigeria,
              helping them transform raw data into actionable insights that drive
              real business impact.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether it's building automated dashboards, conducting customer
              segmentation analysis, or cleaning messy datasets, I bring a
              methodical approach and deep commitment to delivering measurable
              results. I believe that good data analysis is not just about
              technical skills—it's about understanding business context,
              communicating clearly with stakeholders, and turning insights into
              action.
            </p>
          </div>

          <div className="mt-8 p-6 rounded-lg bg-secondary/30 border border-border/40">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                Background:
              </span>{" "}
              B.Sc. Computer Science (2026) | Project experience since 2023
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
