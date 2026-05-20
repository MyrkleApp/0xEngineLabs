"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { featuredProjects } from "@/components/sections/FeaturedProjects";
import { mailto } from "@/lib/contact";

const allProjects = [
  ...featuredProjects,
  {
    id: "4",
    number: "04",
    title: "Real-Time Chain Analytics Pipeline",
    description:
      "Architected a streaming data pipeline for protocol events and product analytics. Custom aggregation reduced reporting latency from 15 minutes to under 3 seconds.",
    tags: ["Apache Kafka", "Flink", "ClickHouse", "Go"],
    accent: "#02FFE4",
    size: "small",
  },
  {
    id: "5",
    number: "05",
    title: "Multi-Tenant Web3 Backend",
    description:
      "Built the core backend for a blockchain product with tenant isolation, role-based access, wallet-aware usage hooks, and a structured audit log layer.",
    tags: ["Node.js", "PostgreSQL", "Wallets", "Docker"],
    accent: "#008F82",
    size: "small",
  },
  {
    id: "6",
    number: "06",
    title: "Protocol Operations Automation",
    description:
      "Automated manual operational workflows into monitored pipelines for indexing, deployment checks, and service maintenance.",
    tags: ["Python", "Celery", "Redis", "PostgreSQL"],
    accent: "#CCFFF8",
    size: "small",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE },
  }),
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background px-4 md:px-6 pb-24">
      <nav className="sticky top-0 z-10 flex items-center justify-between py-4 bg-background/85 backdrop-blur-md border-b border-line">
        <Link
          href="/"
          className="group flex items-center gap-2 text-muted text-sm hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        <span className="text-ink font-mono text-sm uppercase tracking-widest">
          0x Engine Labs
        </span>
        <Link
          href="/contact-us"
          className="group flex items-center gap-1.5 bg-primary rounded-full pl-4 pr-1.5 py-1 text-black font-medium text-sm"
        >
          Contact Us
          <div className="bg-ink rounded-full w-5 h-5 flex items-center justify-center">
            <ArrowRight className="text-white w-3 h-3" />
          </div>
        </Link>
      </nav>

      <div className="max-w-7xl mx-auto pt-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-medium block mb-4">
            All Work
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h1 className="text-ink text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-2xl">
              Systems built, shipped, and still running.
            </h1>
            <div className="flex-shrink-0 border border-line rounded-full px-4 py-2 text-ink font-mono text-sm bg-surface/70">
              {allProjects.length} Projects
            </div>
          </div>
          <p className="text-muted text-base leading-relaxed mt-6 max-w-xl">
            Every project below was built under real constraints, verified under load, and handed over running. Blockchain systems, APIs, data flows, and infrastructure included.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {allProjects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              whileHover={{ y: -4 }}
              className="relative bg-surface border border-line rounded-2xl p-7 flex flex-col min-h-[320px] overflow-hidden group cursor-pointer shadow-[0_18px_60px_rgba(2,255,228,0.12)]"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at 20% 20%, ${project.accent}, transparent 60%)`,
                }}
              />
              <span
                className="absolute bottom-2 right-4 text-[80px] font-bold leading-none select-none pointer-events-none opacity-[0.04]"
                style={{ color: project.accent }}
              >
                {project.number}
              </span>

              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-primary text-sm uppercase tracking-widest font-medium">
                    {project.number} - PROJECT
                  </span>
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0 mt-1"
                    style={{ backgroundColor: project.accent }}
                  />
                </div>

                <h2 className="text-ink text-lg sm:text-xl font-medium mb-3 leading-tight">
                  {project.title}
                </h2>
                <p className="text-muted text-base leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm font-mono border border-line rounded-full px-3 py-1 text-muted bg-surface-tinted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: project.accent }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 flex flex-col items-center text-center gap-6"
        >
          <p className="text-muted text-base max-w-md">
            Working on a blockchain system that needs to handle load?
          </p>
          <a
            href={mailto()}
            className="group flex items-center gap-3 bg-primary rounded-full pl-8 pr-2 py-2 text-black font-medium text-sm sm:text-base transition-all hover:gap-4"
          >
            Start a Project
            <div className="bg-ink rounded-full w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110">
              <ArrowRight className="text-white w-5 h-5" />
            </div>
          </a>
        </motion.div>
      </div>
    </main>
  );
}
