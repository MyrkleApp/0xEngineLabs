"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const featuredProjects = [
  {
    id: "1",
    number: "01",
    title: "On-Chain Payment Gateway",
    description:
      "Built a transaction-aware payment service with wallet flows, reconciliation, and API reliability under peak load.",
    tags: ["Go", "PostgreSQL", "Redis", "RPC"],
    accent: "#02FFE4",
    size: "large",
  },
  {
    id: "2",
    number: "02",
    title: "Protocol Event Engine",
    description:
      "Designed and shipped an event pipeline for chain activity, product triggers, and guaranteed delivery across downstream services.",
    tags: ["Kafka", "Node.js", "Indexing"],
    accent: "#008F82",
    size: "small",
  },
  {
    id: "3",
    number: "03",
    title: "Blockchain Infrastructure Rearchitecture",
    description:
      "Migrated a fragile product backend into independently deployable services with stable RPC, worker, and data layers.",
    tags: ["K8s", "Terraform", "AWS", "Python"],
    accent: "#CCFFF8",
    size: "small",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.15, ease: EASE },
  }),
};

export function FeaturedProjects() {
  return (
    <section className="bg-background py-24 md:py-32 px-4 md:px-6 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <span className="text-primary text-sm uppercase tracking-widest font-medium block mb-4">
              Work
            </span>
            <h2 className="text-ink text-2xl sm:text-3xl md:text-4xl font-medium">
              Systems we&apos;ve shipped.
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-ink text-sm font-medium hover:text-primary transition-colors flex-shrink-0"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Large card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            whileHover={{ y: -4 }}
            className="md:col-span-5 relative bg-surface border border-line rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[360px] md:min-h-[440px] overflow-hidden group cursor-pointer shadow-[0_18px_60px_rgba(2,255,228,0.14)]"
          >
            {/* Accent glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500"
              style={{
                background: `radial-gradient(ellipse at 30% 30%, ${featuredProjects[0].accent}, transparent 60%)`,
              }}
            />
            {/* Watermark numeral */}
            <span
              className="absolute bottom-2 right-4 text-[100px] font-bold leading-none select-none pointer-events-none opacity-[0.04]"
              style={{ color: featuredProjects[0].accent }}
            >
              {featuredProjects[0].number}
            </span>

            <div className="relative z-10">
              <span className="text-primary text-sm uppercase tracking-widest font-medium block mb-6">
                {featuredProjects[0].number} - PROJECT
              </span>
              <h3 className="text-ink text-xl sm:text-2xl md:text-3xl font-medium mb-4 leading-tight">
                {featuredProjects[0].title}
              </h3>
              <p className="text-muted text-base leading-relaxed">
                {featuredProjects[0].description}
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2 mt-8">
              {featuredProjects[0].tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-mono border border-line rounded-full px-3 py-1 text-muted bg-surface-tinted"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom lime bar on hover */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ backgroundColor: featuredProjects[0].accent }}
            />
          </motion.div>

          {/* Right side */}
          <div className="md:col-span-7 flex flex-col gap-3">
            {featuredProjects.slice(1).map((project, i) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={i + 1}
                whileHover={{ y: -4 }}
                className="relative bg-surface border border-line rounded-2xl p-7 flex flex-col sm:flex-row gap-6 min-h-[200px] overflow-hidden group cursor-pointer flex-1 shadow-[0_18px_60px_rgba(2,255,228,0.12)]"
              >
                {/* Accent glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at 20% 50%, ${project.accent}, transparent 60%)`,
                  }}
                />

                <div className="relative z-10 flex-1">
                  <span className="text-primary text-sm uppercase tracking-widest font-medium block mb-3">
                    {project.number} - PROJECT
                  </span>
                  <h3 className="text-ink text-lg sm:text-xl font-medium mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 flex flex-wrap sm:flex-col gap-2 self-end sm:self-start sm:items-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm font-mono border border-line rounded-full px-3 py-1 text-muted bg-surface-tinted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom accent bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: project.accent }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* View all CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="group flex items-center gap-3 border border-line rounded-full px-8 py-3 text-muted text-sm font-medium transition-all hover:border-primary hover:text-primary bg-surface/70"
          >
            View all projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
